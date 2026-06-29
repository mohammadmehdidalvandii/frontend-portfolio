import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import React, { useState } from "react";
import { Formik } from "formik";
import { useCreateTimelines } from "@services/timeline.services";
import { showError, showSuccess } from "@utils/Toasts";
import { TimelineDTO } from "../types/timelines";

const AddTimelineModel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const createTimeline = useCreateTimelines();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-foreground text-secondary font-mono text-[12px] uppercase tracking-widest hover:bg-primary transition-colors">
          + New Entry
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-mono">
        <DialogHeader>
          <DialogTitle className="w-full uppercase tracking-[0.2em] text-primary">
            // New entry
          </DialogTitle>
        </DialogHeader>
        <Formik
          initialValues={{
            year:'',
            role:'',
            company:'',
            detail:'',
            achievement:[''],
            isCurrent:false,
          }}
          onSubmit={(values:TimelineDTO , {resetForm})=>{
            console.log('values =>' , values);
            createTimeline.mutate(values,{
              onSuccess:()=>{
                showSuccess('Timeline created successfully')
                // resetForm()
              },
              onError:(error:any)=>{
                showError(error.response?.data || 'Something is wrong')
              }
            })

          }}

        >
          {({ handleChange, handleSubmit, errors, touched, values }) => (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <div className="col-span-2">
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
                  company
                </label>
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                                 {touched.company && errors.company && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.company}</p>) }

              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  detail
                </label>
                <textarea
                  rows={2}
                  name="detail"
                  value={values.detail}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                                 {touched.detail && errors.detail && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.detail}</p>) }

              </div>
              <div>
                <label
                  htmlFor=""
                  className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  Achievements (seperated ,)
                </label>
                <textarea
                  rows={4}
                  name="achievement"
                  value={values.achievement}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
                                 {touched.achievement && errors.achievement && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.achievement}</p>) }

              </div>
              <div>
                <label
                  htmlFor=""
                  className="flex items-center w-full  gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-accent mb-2"
                >
                  <input
                    type="checkbox"
                    name="isCurrent"
                    checked={values.isCurrent}
                    onChange={handleChange}
                   className="accent-primary" />
                  mark as current role
                </label>
                {touched.isCurrent && errors.isCurrent && (<p className="font-mono text-[12px] text-red-500 mt-1">{errors.isCurrent}</p>) }
              </div>
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={()=>setOpen(false)}
                className="px-5 py-2 border border-input font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:border-destructive hover:text-destructive">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-primary text-white font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:bg-transparent hover:text-primary hover:border hover:border-primary">
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>

      </DialogContent>
    </Dialog>
  );
}

export default AddTimelineModel;
