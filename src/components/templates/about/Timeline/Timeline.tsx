import React from 'react';
import { useGetAllTimelines } from "@services/timeline.services";
import { TimelineDTO } from "../../../../types/timelines";

const Timeline: React.FC = () => {
  const { data:Timelines, isError, isLoading } = useGetAllTimelines();


  if (isLoading)
    return <p className="font-mono text-center text-primary">// loading...</p>;
  if (isError)
    return (
      <p className="font-mono text-center text-primary">
        // error fetching timelines
      </p>
    );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-base font-mono uppercase tracking-[0.3em] text-primary mb-6">
          Timeline
        </h2>
        <p className="font-mono text-[12px] text-accent leading-relaxed max-w-xs">
          {`> work history. most recent first`}
        </p>
      </div>
      <div className="lg:col-span-8 relative">
        <ul className="space-y-10">
          {!Timeline || Timelines.length === 0 ? (
            <p className="font-mono text-center text-primary">
              // No timelines found
            </p>
          ) : (
            Timelines.map((item:TimelineDTO) => (
                          <li className="relative pl-10" key={item._id}>
              <span
                aria-hidden
              className={`absolute left-2 top-2 bottom-2 w-px bg-input ${item.isCurrent ? 'border-accent bg-accent animate-pulse':`border-accent bg-background`}`}/>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="font-mono text-[12px] text-primary tracking-widest">
                  {item.year}
                </span>
                {/* condition */}
                {item.isCurrent && 
                <span className="px-2 py-0.5 bg-primary/10 border border-primary/40 font-mono text-[10px] uppercase tracking-widest text-primary">
                  ● current
                </span>
                }
       
              </div>
              <h3 className="text-3xl font-bold tracking-tight">
                {item.role}
              </h3>
              <p className="font-mono text-[12px] tracking-widest text-accent mt-1">
                @ {item.company}
              </p>
              <p className="text-base text-accent mt-3 leading-relaxed">
                {item.detail}
              </p>
              <ul className="mt-4 space-y-2">
                {item.achievement.map((item)=>(
                  item.split(',').map((i , index)=>(
                <li key={index} className="flex gap-3 text-base text-foreground/80">
                  <span className="font-mono text-primary text-[12px] pt-1">
                    ▸
                  </span>
                  <span>
                    {i}
                  </span>
                </li>
                  ))
                ))}
              </ul>
            </li>
            ))

          )}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
