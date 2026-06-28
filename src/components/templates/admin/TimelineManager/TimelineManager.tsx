import { useGetAllTimelines } from "@services/timeline.services";
import { lazy } from "react"
import { TimelineDTO } from "../../../../types/timelines";

const AddTimelineModel = lazy(() => import('@models/AddTimelineModel'));
const EditTimelineModel = lazy(() => import('@models/EditTimelineModel'));
const TimelineManager: React.FC = () => {
    const { data: Timelines, isError, isLoading } = useGetAllTimelines();


    if (isLoading)
        return <p className="font-mono text-center text-primary">// loading...</p>;
    if (isError)
        return (
            <p className="font-mono text-center text-primary">
          // error fetching timelines
            </p>
        );
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Manage Timeline
                </h2>
                <AddTimelineModel />
            </div>
            {Timelines.length === 0 ? (
                <p className="font-mono text-center text-primary">
                        // No timelines found
                </p>
            ) : (
                Timelines.map((item: TimelineDTO) => (
                    <div className="divide-y divide-input border-y border-input" key={item._id}>
                        <div className="grid grid-cols-12 gap-4 py-4 items-center">
                            <span className="col-span-2 font-mono text-[12px] text-primary">{item.year}</span>
                            <span className="col-span-4 text-lg font-medium">{item.role}</span>
                            <span className="col-span-4 text-xs text-foreground">
                                {item.detail}
                            </span>
                            <span className="col-span-2 flex justify-end gap-2">
                                <EditTimelineModel />
                                <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
                            </span>
                        </div>
                    </div>
                ))
            )}

        </div>
    )
}

export default TimelineManager