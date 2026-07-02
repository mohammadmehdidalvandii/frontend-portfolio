import CertificateCard from "@components/modules/CertificateCard/CertificateCard"
import { useGetAllCertificate } from "@services/certificate.services"
import { Helmet } from "react-helmet-async"
import { CertificateDTO } from "../../types/certificate";

function Certificates() {
  const {data:Certificates , isError , isLoading} = useGetAllCertificate();
    if (isLoading) return <p className="font-mono text-center text-primary mt-20">// loading...</p>;
    if (isError) return <p className="font-mono text-center text-primary mt-20">// error fetching certificates</p>;
  return (
    <>
    <Helmet>
        <title>Credentials - Mohammadmehdi Dalvandi</title>
        <meta name='description' content='Professional certifications held by Mohammadmehdi Dalvandi.'/>
    </Helmet>
    <div className="px-6 max-w-screen-2xl mx-auto pt-24 pb-32">
        <p className="font-mono text-[12px] uppercase tracking-[0.4em] text-primary mb-6">Section / 02 - Credentials</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-16">VERIFIED CRED</h1>
        {CertificateCard.length === 0 ? (
          <p className="font-mono text-center text-primary">There is no certificate.</p>
        ) : (          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0  border border-input">
            {!Certificates || Certificates.map((certificate:CertificateDTO)=>(
              <CertificateCard 
                key={certificate._id}
                title={certificate.title}
                issuer={certificate.issuer}
                year={certificate.year}
                credentialId={certificate.credentialId}
                image={certificate.image}
                verificationLink={certificate.verificationLink}
              />
            ))}
          </div>
        )}
    </div>
    </>
  )
}

export default Certificates