import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import React, { useState } from "react";
import { ProjectDTO } from "../types/project";
import { Formik } from "formik";
import { useUpdatedProject } from "@services/project.services";
import { showError, showSuccess } from "@utils/Toasts";
import { getApiErrorMessage } from "@utils/getApiError";

interface ProjectData {
  project: ProjectDTO;
}

const EditProjectModel: React.FC<ProjectData> = ({ project }) => {
  const [open, setOpen] = useState(false);
    const updateProject = useUpdatedProject()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">
          edit
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-mono">
        <DialogHeader>
          <DialogTitle className="w-full uppercase tracking-[0.2em] text-primary text-left">
            // edit project - {`Project name`}
          </DialogTitle>
        </DialogHeader>
        <Formik<ProjectDTO>
          initialValues={{
            name: project.name,
            title: project.title,
            stacks: project.stacks,
            image: project.image,
            demoLink: project.demoLink,
            githubLink: project.githubLink,
            year: project.year,
            role: project.role,
            features: project.features,
            shortDescription: project.shortDescription,
            longDescription: project.longDescription,
          }}
          onSubmit={(values:ProjectDTO) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("name", values.name);
            formData.append("stacks", String(values.stacks));
            formData.append("demoLink", values.demoLink);
            formData.append("githubLink", values.githubLink);
            formData.append("year", String(values.year));
            formData.append("role", values.role);
            formData.append("features", String(values.features));
            formData.append("shortDescription", values.shortDescription);
            formData.append("longDescription", values.longDescription);
            formData.append("image", values.image!);
            updateProject.mutate({values , id:project._id!},{
                onSuccess:()=>{
                    showSuccess('Project updated successfully');
                    setOpen(false)
                },
                onError:(error)=>{
                    showError(getApiErrorMessage(error))
                }
            })
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.name && errors.name && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.name}</p>) }
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    tile
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.title && errors.title && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.title}</p>) }
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  stack
                </label>
                <input
                  type="text"
                  name="stacks"
                  value={values.stacks}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.stacks && errors.stacks && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.stacks}</p>) }
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  img url
                </label>
                <input
                  type="file"
                  onChange={(e)=>setFieldValue("image",e.target.files?.[0])}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.image && errors.image && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.image}</p>) }
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    demo link
                  </label>
                  <input
                    type="text"
                    name="demoLink"
                    value={values.demoLink}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.demoLink && errors.demoLink && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.demoLink}</p>) }
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    github link
                  </label>
                  <input
                    type="text"
                    name='githubLink'
                    value={values.githubLink}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.githubLink && errors.githubLink && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.githubLink}</p>) }
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor=""
                    className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                  >
                    year
                  </label>
                  <input
                    type="text"
                    name="year"
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
                    role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                  {touched.role && errors.role && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.role}</p>) }
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  Features (one per line)
                </label>
                <textarea
                  rows={6}
                  name="features"
                  value={values.features}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.features && errors.features && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.features}</p>) }
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  Short description
                </label>
                <textarea
                  rows={3}
                  name="shortDescription"
                  value={values.shortDescription}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.shortDescription && errors.shortDescription && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.shortDescription}</p>) }
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  Long description
                </label>
                <textarea
                  rows={6}
                  name="longDescription"
                  value={values.longDescription}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {touched.longDescription && errors.longDescription && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.longDescription}</p>) }
              </div>
              <div className="flex items-center gap-4 pt-2">
                <button
                 className="px-5 py-2 border border-input font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:border-destructive hover:text-destructive"
                 onClick={()=>setOpen(false)}
                 >
                  Cancel
                </button>
                <button
                  disabled={updateProject.isPending}
                type="submit" className="px-5 py-2 bg-primary text-white font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:bg-transparent hover:text-primary hover:border hover:border-primary">
                  {updateProject.isPending ? (
                    <span className="animate-pulse">Saving...</span>
                  ):(
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
};

export default EditProjectModel;
