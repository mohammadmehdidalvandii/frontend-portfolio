import { useDeleteProject, useGetAllProject } from "@services/project.services";
import React, { lazy } from "react"
import { ProjectDTO } from "../../../../types/project";
import { showConfirm } from "@utils/confirm";
import { showError, showSuccess } from "@utils/Toasts";
import { getApiErrorMessage } from "@utils/getApiError";
import StateFeedback from "@components/modules/StateFeedback/StateFeedback";
import fallbackImage from '../../../../../public/assets/images/backup-image.webp'

const AddProjectModel = lazy(()=>import('@models/AddProjectModel'));
const EditProjectModel = lazy(()=>import('@models/EditProjectModel'));

const ProjectManger:React.FC =()=>{
        const {data:Projects , isError , isLoading} = useGetAllProject();
        const deleteProject = useDeleteProject();
      
  if (isLoading) return <StateFeedback type="loading"/>;
  if (isError) return <StateFeedback type="error" message=" Failed to fetch timelines"/>;

        const handleDeleteProject = async (projectId:string)=>{
          const result = await  showConfirm('Are you sure you want to delete the project?');
          if(result.isConfirmed){
            deleteProject.mutate(projectId ,{
                onSuccess:()=>{
                  showSuccess('Project deleted successfully')
                },
                onError:(error)=>{
                    showError(getApiErrorMessage(error))
                }
            })
          }
        }
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Mange Projects</h2>
        <AddProjectModel/>
        </div>
              {Projects.length === 0 ? (
         <StateFeedback type="empty" message="No projects yet !!!"/>
      ) : (
        Projects.map((project:ProjectDTO)=>(

        <div className="divide-y divide-input border-y border-input" key={project._id}>
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
                <div className="col-span-2 aspect-video bg-secondary/60 border border-input overflow-hidden">
                    <img src={project.image} 
                      onError={(e)=>{
                        e.currentTarget.src = fallbackImage
                      }}
                    alt="project" className="w-full h-full object-cover" />
                </div>
                <span className="col-span-3 font-mono text-[14px] text-primary">{project.name}</span>
                <span className="col-span-3 text-lg font-medium">{project.title}</span>
                <div className="col-span-4 flex justify-end gap-2">
                    <EditProjectModel project={project}/>
                    <button
                    onClick={()=>handleDeleteProject(project._id!)}
                    className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                </div>
                </div>
        </div>
        ))
      )}
    </div>
  )
}

export default ProjectManger