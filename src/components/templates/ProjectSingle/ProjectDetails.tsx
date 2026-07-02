import React from "react";
import { Link } from "react-router-dom";
import { ProjectDTO } from "../../../types/project";



const ProjectDetails:React.FC<{project:ProjectDTO}> = ({project}) => {
  return (
    <div className="px-6 max-w-screen-2xl mx-auto pt-32 pb-32">
      <div>
        <Link
          to="/Projects"
          className="font-mono text-[12px] uppercase tracking-widest text-accent hover:text-primary mb-8 inline-block"
        >
          ← /projects
        </Link>
        <p className="font-mono text-[14px] uppercase tracking-[0.4em] text-primary mb-6">
           / {project.name}
        </p>
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-accent max-w-3xl mb-10">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.stacks.map((item)=>(
            item.split(',').map((i , index)=>(
          <span key={index} className="px-3 py-1 border border-input font-mono text-[12px] uppercase tracking-widest text-accent hover:border-primary hover:text-primary">
            {i}
          </span>
            ))
          ))}
        </div>
        <div className="w-full aspect-video bg-secondary/60 border border-input mb-16 overflow-hidden">
          <img src={project.image} alt="img-cover" loading="eager" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="font-mono text-[14px] uppercase tracking-[0.3em] text-primary mb-6">
                // overview
              </h2>
              <p className="text-base font-mono leading-relaxed text-accent whitespace-pre-line">
                {project.longDescription}
              </p>
              {/* <p className="font-mono text-xs text-primary">
                {`> extended description provided`}
              </p> */}
            </section>
            <section>
              <h2 className="font-mono text-[14px] uppercase tracking-[0.3em] text-primary mb-6">
                // features
              </h2>
                <ul className="divide-y divide-input border-y border-input">
                  {project.features.map((item)=>(
                    item.split(',').map((i , index)=>(
          <li className="py-4 flex gap-4 items-start" key={index}>
                    <span className="font-mono text-[12px] text-primary pt-1 tabular-nums">
                      {index + 1}
                    </span>
                    <span className="text-sm font-mono leading-relaxed text-accent">
                      {i}
                    </span>
                  </li>
                    ))
                  ))}
        
                </ul>
            </section>
          </div>
          <aside className="lg:col-span-4 space-y-8">
            <div className="border border-input divide-y divide-input">
                <div className="flex flex-center justify-between p-4">
                    <span className="font-mono text-[12px] uppercase tracking-wide text-accent">year</span>
                    <span className="font-mono text-primary">{project.year}</span>
                </div>
                <div className="flex flex-center justify-between p-4">
                    <span className="font-mono text-[12px] uppercase tracking-wide text-accent">role</span>
                    <span className="font-mono text-primary">{project.role}</span>
                </div>
                <div className="flex flex-center justify-between p-4">
                    <span className="font-mono text-[12px] uppercase tracking-wide text-accent">cor</span>
                    <span className="font-mono text-primary">project_alpha</span>
                </div>
            </div>
            <div className="space-y-3">
                <h2 className="font-mono text-[14px] uppercase tracking-[0.3em] text-primary mb-6">// links</h2>
                <Link to={project.demoLink} target="_blank" rel="noreferrer"
                className="block border border-input p-4 hover:border-accent hover:bg-secondary/50 transition-colors group"
                >
                    <p className="font-mono text-[12px] uppercase tracking-widest text-accent mb-2">Live Demo</p>
                    <p className="text-[14px] md:text-lg break-all font-mono group-hover:text-primary transition-colors">{project.demoLink}</p>
                </Link>
                <Link to={project.githubLink} target="_blank" rel="noreferrer"
                className="block border border-input p-4 hover:border-accent hover:bg-secondary/50 transition-colors group"
                >
                    <p className="font-mono text-[12px] uppercase tracking-widest text-accent mb-2">source code</p>
                    <p className="text-[14px] md:text-lg break-all font-mono group-hover:text-primary transition-colors">{project.githubLink}</p>
                </Link>
                <Link to={project.githubLink} target="_blank" rel="noreferrer"
                className="block border border-input p-4 hover:border-accent hover:bg-secondary/50 transition-colors group"
                >
                    <p className="font-mono text-[12px] uppercase tracking-widest text-accent mb-2">source code</p>
                    <p className="text-[14px] md:text-lg break-all font-mono group-hover:text-primary transition-colors">{project.githubLink}</p>
                </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
