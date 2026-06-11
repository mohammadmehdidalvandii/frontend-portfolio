import { lazy } from "react"

const AddCredentialModel = lazy(()=>import('@models/AddCredentialModel'));

function CertificateManager() {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Manage Credentials
            </h2>
    <AddCredentialModel/>
        </div>
        <div className="divide-y divide-input border-y border-input">
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
                <div className="col-span-2 aspect-video bg-secondary/60 border border-input overflow-hidden">
                    <img src="/assets/images/certi.jpg" alt="cer" className="w-full h-full object-cover" />
                </div>
                <span className="col-span-5 text-lg font-medium">AWS Certified Solutions Architect</span>
                <span className="col-span-2 text-lg text-foreground">
Amazon Web Services</span>
                <span className="col-span-1 font-mono text-[12px] text-primary">2024</span>
                                <div className="col-span-2 flex justify-end gap-2">
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Edit</button>
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CertificateManager