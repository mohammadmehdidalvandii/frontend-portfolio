import StateFeedback from "@components/modules/StateFeedback/StateFeedback";
import ProjectDetails from "@components/templates/ProjectSingle/ProjectDetails"
import { useGetProjectById } from "@services/project.services"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"


function ProjectSingle() {
  const params = useParams();
  const id = String(params.id)
  const {data:project , isError , isLoading} = useGetProjectById(id)
      if (isLoading) return <StateFeedback type="loading"/>;
  if (isError) return <StateFeedback type="error" message="Failed to fetch details project"/>;
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