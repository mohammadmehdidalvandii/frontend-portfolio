import ProjectCard from "@components/modules/ProjectCard/ProjectCard"
import { useGetAllProject } from "@services/project.services"
import { ProjectDTO } from "../../../../types/project";

function ProjectHome() {
  const {data:Projects , isError , isLoading} = useGetAllProject();

    if (isLoading) return <p className="font-mono text-center text-primary">// loading...</p>;
  if (isError) return <p className="font-mono text-center text-primary">// error fetching projects</p>;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-px  border-y border-input mb-32 mt-8">
     {Projects ||  Projects.length === 0 ? (
        <p className="font-mono text-center text-primary">// no projects found</p>
      ) : (
        Projects.map((project:ProjectDTO)=>(
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
    </section>
  )
}

export default ProjectHome