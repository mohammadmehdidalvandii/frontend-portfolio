import { lazy } from "react"

const AddTimelineModel = lazy(()=>import('@models/AddTimelineModel'));

function TimelineManager() {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
                    <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Manage Timeline
        </h2>
    <AddTimelineModel/>
        </div>
        <div className="divide-y divide-input border-y border-input">
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
                <span className="col-span-2 font-mono text-[12px] text-primary">2024 — Now</span>
                <span className="col-span-4 text-lg font-medium">Senior Full Stack Engineer</span>
                <span className="col-span-4 text-xs text-foreground">
Building distributed systems and edge-first products for clients across fintech and devtools.</span>
                <span className="col-span-2 flex justify-end gap-2">
                                        <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Edit</button>
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TimelineManager