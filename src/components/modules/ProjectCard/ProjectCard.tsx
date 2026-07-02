import React from "react";
import { Link } from "react-router-dom";
import { ProjectDTO } from "../../../types/project";



const ProjectCard:React.FC<ProjectDTO> =({name,title,stacks,image,shortDescription, _id}) => {

  return (
    <Link to={`/Projects/${_id}`} className="group bg-bg p-8 md:-12 hover:bg-secondary/80 transition-colors">
        <div className="flex justify-between flex-wrap items-start mb-12">
            <span className="font-mono text-[12px] text-primary">
                {` / ${name}`}
            </span>
            <span className="font-mono text-[12px] mt-4 md:mt-0 text-accent uppercase">
                {stacks.slice(0 , 3).map((item)=>(
                    item 
                ))}
                ,...
            </span>
        </div>
        <div className="w-full aspect-video bg-secondary/60 border border-input mb-10 overflow-hidden flex items-center justify-center">
            <img src={image} alt="project title" loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
            <h3 className="text-3xl md:text-4xl font-mono font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {title}
            </h3>
            <p className="text-accent max-w-sm text-sm font-mono">
                {shortDescription}
            </p>
    </Link>
  )
}

export default ProjectCard