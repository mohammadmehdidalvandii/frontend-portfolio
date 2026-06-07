import ProjectDetails from "@components/templates/ProjectSingle/ProjectDetails"
import { Helmet } from "react-helmet-async"


function ProjectSingle() {
  return (
    <>
        <Helmet>
            <title>`Projects ${'project-1'}` — Mohammadmehdi Dalvandi</title>
            <meta name='description' content='Selected engineering projects by Mohammadmehdi Dalvandi.'/>
        </Helmet>
        <ProjectDetails/>
    </>
  )
}

export default ProjectSingle