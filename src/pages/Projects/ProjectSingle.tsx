import ProjectDetails from "@components/templates/ProjectSingle/ProjectDetails"
import { useGetProjectById } from "@services/project.services"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"


function ProjectSingle() {
  const params = useParams();
  const id = String(params.id)
  const {data:project , isError , isLoading} = useGetProjectById(id)
      if (isLoading) return <p className="font-mono text-center text-primary">// loading...</p>;
  if (isError) return <p className="font-mono text-center text-primary">// error fetching project</p>;
  return (
    <>
        <Helmet>
            <title>Projects-{project.name} — Mohammadmehdi Dalvandi</title>
            <meta name='description' content='Selected engineering projects by Mohammadmehdi Dalvandi.'/>
        </Helmet>
        <ProjectDetails 
          project={project}
        />
    </>
  )
}

export default ProjectSingle