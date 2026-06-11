import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog'
import { useState } from 'react'

function EditProjectModel() {
     const [open , setOpen] = useState(false);
  return (
       <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <button className="font-mono text-[14px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer">
                edit 
            </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-mono">
            <DialogHeader >
                <DialogTitle className="w-full uppercase tracking-[0.2em] text-primary text-left">// edit project - {`Project name`}</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">code</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">tile</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">stack</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">img url</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">demo link</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">github link</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">year</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">role</label>
                        <input type="text" className="w-full bg-transparent border border-input px-4 py-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Features (one per line)</label>
                        <textarea rows={6} className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"/>
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Short description</label>
                        <textarea rows={3} className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"/>
                    </div>
                    <div>
                        <label htmlFor="" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Long description</label>
                        <textarea rows={6} className="w-full bg-transparent border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"/>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <button className="px-5 py-2 border border-input font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:border-destructive hover:text-destructive">
                            Cancel
                        </button>
                        <button className="px-5 py-2 bg-primary text-white font-mono text-[12px] uppercase tracking-widest duration-300 cursor-pointer transition-all hover:bg-transparent hover:text-primary hover:border hover:border-primary">Save</button>
                    </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditProjectModel