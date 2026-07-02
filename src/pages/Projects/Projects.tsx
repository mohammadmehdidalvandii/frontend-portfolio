import ProjectCard from "@components/modules/ProjectCard/ProjectCard"
import { useGetAllProject } from "@services/project.services";
import { Helmet } from "react-helmet-async"
import { ProjectDTO } from "../../types/project";
import StateFeedback from "@components/modules/StateFeedback/StateFeedback";

function Projects() {
    const {data:projects , isError , isLoading} = useGetAllProject();
  
      if (isLoading) return <StateFeedback type="loading"/>;
    if (isError) return <StateFeedback type="error" message="Failed to fetch project"/>;
  return (
    <>
      <Helmet>
          <title>Projects — Mohammadmehdi Dalvandi</title>
          <meta name='description' content='Selected engineering projects by Mohammadmehdi Dalvandi.'/>
      </Helmet>
    <div className="px-6 max-w-screen-2xl min-h-screen mx-auto pt-24 pb-32">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-6">
              Section / 01 - Archive
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-16">
              SELECTED WORK
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px t border-y border-input">
      {!projects || projects.length === 0 ? (
       <StateFeedback type="empty" message="No projects yet !!!"/>
      ) : (
        projects.map((project:ProjectDTO)=>(
          <ProjectCard 
            key={project._id}
            _id={project._id}
            name={project.name}
            title={project.title}
            stacks={project.stacks}
            image={project.image}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            year={project.year}
            role={project.role}
            features={project.features}
            shortDescription={project.shortDescription}
            longDescription={project.longDescription}
          />
        ))
      )}
          </div>
    </div>
    </>
  )
}

export default Projects