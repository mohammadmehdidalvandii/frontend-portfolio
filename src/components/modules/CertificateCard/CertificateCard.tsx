import React from "react"
import { Link } from "react-router-dom"
import { CertificateDTO } from "../../../types/certificate"

const  CertificateCard:React.FC<CertificateDTO>  = ({title , issuer , year , credentialId , image , verificationLink})=>{
  return (
    <div className="bg-bg p-6 flex flex-col group hover:bg-secondary/40 transition-colors">
        <div className="aspect-3/3 w-full bg-secondary/60 border border-input mb-6 overflow-hidden flex items-center justify-center">
            <img src={image} alt="certificate" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span className="font-mono text-[12px] text-primary mb-2">{year}</span>
        <h3 className="text-2xl font-mono font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-accent mb-1">{issuer}</p>
        <p className="font-mono text-[10px] text-accent mb-4">
            ID:{credentialId}
        </p>
        <div className="mt-auto pt-4 border-t border-input">
            <Link to={verificationLink} target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-widest text-primary hover:text-accent">
                Verify credential →
            </Link>
        </div>
    </div>
  )
}

export default CertificateCard