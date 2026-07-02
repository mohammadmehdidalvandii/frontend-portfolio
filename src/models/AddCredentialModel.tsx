import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import { useState } from "react";
import { Formik } from "formik";
import { CertificateDTO } from "../types/certificate";
import { validationCertificateSchema } from "../validations/certificate.validation";
import { useCreateCertificate } from "@services/certificate.services";
import { showError, showSuccess } from "@utils/Toasts";
import { getApiErrorMessage } from "@utils/getApiError";

function AddCredentialModel() {
  const createCertificate = useCreateCertificate();
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-foreground text-bg font-mono text-[12px] uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer">
          + New Credential
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-mono">
        <DialogHeader>
          <DialogTitle className="w-full uppercase tracking-[0.2em] text-left text-primary">
            // new credential
          </DialogTitle>
        </DialogHeader>
        <Formik<CertificateDTO>
        initialValues={{
          title: "",
          issuer: "",
          year: 0,
          credentialId: "",
          image: "",
          verificationLink: "",
        }}
        validationSchema={validationCertificateSchema}
        onSubmit={(values:CertificateDTO, { resetForm }) => {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("issuer", values.issuer);
          formData.append("year", String(values.year));
          formData.append("credentialId", values.credentialId);
          formData.append("image", values.image!);
          formData.append("verificationLink", values.verificationLink);
          createCertificate.mutate(formData ,{
            onSuccess:()=>{
              showSuccess('Credential created successfully');
              resetForm();
              setOpen(false);
            },
            onError:(error)=>{
              showError(getApiErrorMessage(error));
            }
          })
        }}
        >
          {({ handleSubmit, handleChange, values, errors, touched , setFieldValue }) => (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  title
                </label>
                <input
                  type="text"
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                 {touched.title && errors.title && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.title}</p>) }
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    Issuer
                  </label>
                  <input
                    type="text"
                    name='issuer'
                    value={values.issuer}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.issuer && errors.issuer && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.issuer}</p>) }
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    year
                  </label>
                  <input
                    type="text"
                    name='year'
                    value={values.year}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.year && errors.year && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.year}</p>) }
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    credential id
                  </label>
                  <input
                    type="text"
                    name='credentialId'
                    value={values.credentialId}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.credentialId && errors.credentialId && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.credentialId}</p>) }
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  image url
                </label>
                <input
                  type="file"
                  name='image'
                  onChange={(e)=>setFieldValue('image', e.currentTarget.files?.[0])}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.image && errors.image && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.image}</p>) }
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  verification link
                </label>
                <input
                  type="text"
                  name='verificationLink'
                  value={values.verificationLink}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.verificationLink && errors.verificationLink && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.verificationLink}</p>) }
              </div>
              <div className="flex items-center gap-4 pt-2">
                <button 
                type="button"
                onClick={()=>setOpen(false)}
                className="px-5 py-2 border border-input font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:border-destructive hover:text-destructive">
                  Cancel
                </button>
                <button
                disabled={createCertificate.isPending}
                 type="submit" className="px-5 py-2 bg-primary text-white font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:bg-transparent hover:text-primary hover:border hover:border-primary">
                  {createCertificate.isPending ? (
                    <span className="animate-pulse">Saving...</span>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>

      </DialogContent>
    </Dialog>
  );
}

export default AddCredentialModel;
