import ProjectCard from "@components/modules/ProjectCard/ProjectCard"

function ProjectHome() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-input border-y border-input mb-32 mt-8">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </section>
  )
}

export default ProjectHome