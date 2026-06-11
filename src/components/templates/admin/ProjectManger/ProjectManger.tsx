import { lazy } from "react"

const AddProjectModel = lazy(()=>import('@models/AddProjectModel'));
const EditProjectModel = lazy(()=>import('@models/EditProjectModel'));

function ProjectManger() {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Mange Projects</h2>
        <AddProjectModel/>
        </div>
        <div className="divide-y divide-input border-y border-input">
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
                <div className="col-span-2 aspect-video bg-secondary/60 border border-input overflow-hidden">
                    <img src="/assets/images/project.jpg" alt="project" className="w-full h-full object-cover" />
                </div>
                <span className="col-span-3 font-mono text-[14px] text-primary">PROJECT_ALPHA</span>
                <span className="col-span-3 text-lg font-medium">Quantum Ledger</span>
                <div className="col-span-4 flex justify-end gap-2">
                    <EditProjectModel/>
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                </div>
                </div>
        </div>
    </div>
  )
}

export default ProjectManger