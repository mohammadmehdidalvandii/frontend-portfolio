import { Helmet } from "react-helmet-async"

function Contact() {
  return (
<>
    <Helmet>
        <title>Contact — Mohammadmehdi Dalvandi</title>
        <meta name='description' content='Get in touch with Mohammadmehdi Dalvandi to start a project or collaboration.'/>
    </Helmet>
    <div className="px-6 max-w-screen-2xl mx-auto pt-24 pb-32">
        <p className="font-mono text-[12px] uppercase tracking-[0.4em] text-primary mb-6">Section / 04 - Contact</p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-16 max-w-5xl">START A PROJECT</h1>
    </div>
</>
  )
}

export default Contact