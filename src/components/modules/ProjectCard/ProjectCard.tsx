import { Link } from "react-router-dom"


function ProjectCard() {
  return (
    <Link to='' className="group bg-bg p-8 md:-12 hover:bg-secondary/80 transition-colors">
        <div className="flex justify-between items-start mb-12">
            <span className="font-mono text-[12px] text-primary">
                {`01 / PROJECT_ALPHA`}
            </span>
            <span className="font-mono text-[12px] text-accent">
                REACT.NODE.POSTGRS
            </span>
        </div>
        <div className="w-full aspect-video bg-secondary/60 border border-input mb-10 overflow-hidden flex items-center justify-center">
            <img src="/assets/images/project.jpg" alt="project title" loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
            <h3 className="text-3xl md:text-4xl font-mono font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                Quantum Ledger
            </h3>
            <p className="text-accent max-w-sm text-sm font-mono">
                Distributed financial infrastructure with sub-millisecond latency and real-time ledger engine
            </p>
    </Link>
  )
}

export default ProjectCard