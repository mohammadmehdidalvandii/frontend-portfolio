
function MessagesManager() {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Inbox / User message
            </h2>
            <button className="px-4 py-2 bg-foreground text-bg font-mono text-[12px] uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer">
                Mark all read
            </button>
        </div>
        {/* <div className="border border-dashed border-input py-16 text-center font-mono text-lg text-foreground">
            {`Inbox is empty. messages from the contact  form will appear hero`}
        </div> */}
        <div className="divide-y divide-input border-y border-input">
        <div className="grid grid-cols-12 gap-4 py-4 items-center cursor-pointer hover:bg-secondary/30 transition-colors">
            <div className="col-span-1 flex justify-center"></div>
            <span className="col-span-3 text-xs">name</span>
            <span className="col-span-3 font-mono text-[12px]">mail</span>
            <span className="col-span-3 text-sm text-foreground">subject</span>
            <span className="col-span-1 font-mono text-[12px] text-primary"></span>
            <div className="col-span-1 flex justify-end">
                                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Edit</button>
                    <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">Delete</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MessagesManager