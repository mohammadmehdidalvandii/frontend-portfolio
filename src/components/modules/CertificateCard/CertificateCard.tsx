import { Link } from "react-router-dom"

function CertificateCard() {
  return (
    <div className="bg-bg p-6 flex flex-col group hover:bg-secondary/40 transition-colors">
        <div className="aspect-3/3 w-full bg-secondary/60 border border-input mb-6 overflow-hidden flex items-center justify-center">
            <img src="/assets/images/certi.jpg" alt="certificate" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span className="font-mono text-[12px] text-primary mb-2">01 · 2024</span>
        <h3 className="text-2xl font-mono font-bold tracking-tight mb-2">AWS Certified Solutions Architect</h3>
        <p className="text-sm text-accent mb-1">Amazon Web Services</p>
        <p className="font-mono text-[10px] text-accent mb-4">
            ID:8829-XJ-01
        </p>
        <div className="mt-auto pt-4 border-t border-input">
            <Link to='/' target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-widest text-primary hover:text-accent">
                Verify credential →
            </Link>
        </div>
    </div>
  )
}

export default CertificateCard