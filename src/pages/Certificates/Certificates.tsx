import CertificateCard from "@components/modules/CertificateCard/CertificateCard"
import { Helmet } from "react-helmet-async"

function Certificates() {
  return (
    <>
    <Helmet>
        <title>Credentials - Mohammadmehdi Dalvandi</title>
        <meta name='description' content='Professional certifications held by Mohammadmehdi Dalvandi.'/>
    </Helmet>
    <div className="px-6 max-w-screen-2xl mx-auto pt-24 pb-32">
        <p className="font-mono text-[12px] uppercase tracking-[0.4em] text-primary mb-6">Section / 02 - Credentials</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-16">VERIFIED CRED</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 bg-input border border-input">
          <CertificateCard/>
          <CertificateCard/>
          <CertificateCard/>
        </div>
    </div>
    </>
  )
}

export default Certificates