import React from "react";
import { Formik } from "formik";
import { useSendMessage } from "@services/contact.services";
import { validationContactSchema } from "../../../../validations/contact.validation";
import { MessageDTO } from "../../../../types/message";
import { showError, showSuccess } from "@utils/Toasts";

const FormContact: React.FC = () => {
  const sendMessage = useSendMessage();
  return (
    <Formik<MessageDTO>
      initialValues={{ name: "", email: "", subject: "", message: "" , isRead:false}}
      validationSchema={validationContactSchema}
      onSubmit={(values:MessageDTO, { resetForm }) => {
        sendMessage.mutate(values, {
            onSuccess:()=>{
                resetForm();
                showSuccess('Message sent successfully')
            },
            onError:(error)=>{
                showError(error.message || 'Something went wrong')
            }
        })
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-input px-4 py-4 text-sm font-mono focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          {touched.name && errors.name && (
            <p className="font-mono text-[12px] text-red-500 mt-1">{errors.name}</p>
          )}
          <div>
            <label
              htmlFor=""
              className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-input px-4 py-4 text-sm font-mono focus:border-primary focus:outline-none transition-colors"
            />
          </div>
                    {touched.name && errors.name && (
            <p className="font-mono text-[12px] text-red-500 mt-1">{errors.email}</p>
          )}
          <div>
            <label
              htmlFor=""
              className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              className="w-full bg-transparent border border-input px-4 py-4 text-sm font-mono focus:border-primary focus:outline-none transition-colors"
            />
          </div>
                    {touched.name && errors.name && (
            <p className="font-mono text-[12px] text-red-500 mt-1">{errors.subject}</p>
          )}
          <div>
            <label
              htmlFor=""
              className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent"
            >
              message
            </label>
            <textarea
              rows={6}
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-input px-4 py-3 text-sm font-mono focus:border-primary focus:outline-none transition-colors"
            />
          </div>
                    {touched.name && errors.name && (
            <p className="font-mono text-[12px] text-red-500 mt-1">{errors.message}</p>
          )}
          <button
            type="submit"
            disabled={sendMessage.isPending}
            className="px-10 py-4 bg-foreground text-bg font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors"
          >
            {sendMessage.isPending ? (
              <span className="animate-pulse">Sending message ...</span>
            ):(
             " Secure Connection"
          )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormContact;
