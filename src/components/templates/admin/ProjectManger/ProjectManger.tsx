import { useGetAllProject } from "@services/project.services";
import { lazy } from "react"
import { ProjectDTO } from "../../../../types/project";

const AddProjectModel = lazy(()=>import('@models/AddProjectModel'));
const EditProjectModel = lazy(()=>import('@models/EditProjectModel'));

function ProjectManger() {
        const {data:Projects , isError , isLoading} = useGetAllProject();
      
          if (isLoading) return <p className="font-mono text-center text-primary">// loading...</p>;
        if (isError) return <p className="font-mono text-center text-primary">// error fetching projects</p>;
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Mange Projects</h2>
        <AddProjectModel/>
        </div>
              {Projects.length === 0 ? (
        <p className="font-mono text-center text-primary">// no projects found</p>
      ) : (
        Projects.map((project:ProjectDTO)=>(

        <div className="divide-y divide-input border-y border-input" key={project._id}>
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
                <div className="col-span-2 aspect-video bg-secondary/60 border border-input overflow-hidden">
                    <img src={project.image} alt="project" className="w-full h-full object-cover" />
                </div>
                <span className="col-span-3 font-mono text-[14px] text-primary">{project.name}</span>
                <span className="col-span-3 text-lg font-medium">{project.title}</span>
                <div className="col-span-4 flex justify-end gap-2">
                    <EditProjectModel project={project}/>
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                </div>
                </div>
        </div>
        ))
      )}
    </div>
  )
}

export default ProjectManger