import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import { useState } from "react";

function AddTimelineModel() {
  const [open, setOpen] = useState(false);
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
        <form action="#" className="space-y-4 pt-2">
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
                className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
              />
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
                className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
              />
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
              className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors"
            />
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
              className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2"
            >
              Achievements (one per line)
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="flex items-center w-full  gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-accent mb-2"
            >
              <input type="checkbox" className="accent-primary" />
              mark as current role
            </label>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <button className="px-5 py-2 border border-input font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:border-destructive hover:text-destructive">
              Cancel
            </button>
            <button className="px-5 py-2 bg-primary text-white font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:bg-transparent hover:text-primary hover:border hover:border-primary">
              Save
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTimelineModel;
