import Description from "@components/templates/about/Description/Description"
import Stack from "@components/templates/about/Stack/Stack"
import { Helmet } from "react-helmet-async"


function About() {
  return (
   <>
       <Helmet>
           <title>About - Mohammadmehdi Dalvandi</title>
           <meta name='description' content='About Mohammadmehdi Dalvnadi - full stack engineer focused on distributed systems and refined interfaces.'/>
       </Helmet>
       <div className="px-6 max-w-screen-2xl mx-auto pt-24 pb-32">
            <p className="font-mono text-[12px] uppercase tracking-[0.4em] text-primary mb-6">Section / 03 - About</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12 max-w-4xl">
                 ENGINEER · BUILDER · OPERATO
            </h1>
            <Description/>
            <Stack/>
       </div>
   </>
  )
}

export default About