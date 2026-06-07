
function FormContact() {
  return (
    <form action="#" className="space-y-6">
        <div>
            <label htmlFor="" className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent">Name</label>
            <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
        </div>
        <div>
            <label htmlFor="" className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent">Email</label>
            <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
        </div>
        <div>
            <label htmlFor="" className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent">Subject</label>
            <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
        </div>
        <div>
            <label htmlFor="" className="block font-mono text-[12px] uppercase tracking-[0.3em] text-accent">message</label>
            <textarea rows={6} className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"/>
        </div>
        <button
        className="px-10 py-4 bg-foreground text-bg font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors"
        >Secure Connection</button>
    </form>
  )
}

export default FormContact