import Content from "@components/templates/contact/Content/Content"
import FormContact from "@components/templates/contact/FormContact/FormContact"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
                <Content/>
            </div>
            <div className="lg:col-span-7 space-y-6">
                <FormContact/>
            </div>
        </div>
    </div>
</>
  )
}

export default Contact