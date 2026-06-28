import { useGetAllCertificate } from "@services/certificate.services";
import { lazy } from "react";
import { CertificateDTO } from "../../../../types/certificate";

const AddCredentialModel = lazy(() => import("@models/AddCredentialModel"));
const EditCredentialModel = lazy(() => import("@models/EditCredentialModel"));

function CertificateManager() {
  const {data:Certificates , isError , isLoading} = useGetAllCertificate();
  if (isLoading) return <p className="font-mono text-center text-primary">// loading...</p>;
  if (isError) return <p className="font-mono text-center text-primary">// error fetching certificates</p>;
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Manage Credentials
        </h2>
        <AddCredentialModel />
      </div>
      <div className="divide-y divide-input border-y border-input">
        {Certificates.length === 0 ? (
          <p className="font-mono text-center text-primary">There is no certificate.</p>
        ):(
          Certificates.map((certificate:CertificateDTO)=>(
        <div className="grid grid-cols-12 gap-4 py-4 items-center" key={certificate._id}>
          <div className="col-span-2 aspect-video bg-secondary/60 border border-input overflow-hidden">
            <img
              src={certificate.image}
              alt="cer"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="col-span-5 text-lg font-medium">
            {certificate.title}
          </span>
          <span className="col-span-2 text-lg text-foreground">
           {certificate.issuer}
          </span>
          <span className="col-span-1 font-mono text-[12px] text-primary">
            {certificate.year}
          </span>
          <div className="col-span-2 flex justify-end gap-2">
            <EditCredentialModel   
              certificate={certificate}
            />
            <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">
              Delete
            </button>
          </div>
        </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CertificateManager;
