import { useState } from "react"


function SignIn() {
    const [showPwd , setShowPwd] = useState(false)
  return (
        <div className="min-h-screen pt-24 pb-32 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="flex items-center gap-3 text-primary font-mono text-lg mb-6">
                    <span className='animate-pulse'>●</span>
                    <span className="uppercase tracking-[0.3em]">Secure_Shell / Auth</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-monoBold tracking-tighter mb-2">Login</h1>
                <p className="font-mono text-[14px] text-accent mb-8">
                    {`> authenticate to access the terminal. `}
                </p>
                <form action="#" className="border border-input divide-y divide-input">
                    <div className="p-4">
                        <label htmlFor="#" className="block font-mono text-[12px] uppercase tracking-widest text-foreground mb-4">// username</label>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-primary">$</span>
                            <input type="text" className=" flex-1 bg-transparent border-none outline-none font-mono placeholder:text-foreground/50" placeholder="root"/>
                        </div>
                    </div>
                    <div className="p-4">
                        <label htmlFor="#" className="block font-mono text-[12px] uppercase tracking-widest text-foreground mb-4">// password</label>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-primary">$</span>
                            <input type={showPwd ? 'text' :'password'} className=" flex-1 bg-transparent border-none outline-none font-mono placeholder:text-foreground/50" placeholder="*********"
                                    />
                            <button type="button"
                                onClick={()=>setShowPwd((s)=> !s)}
                            className="font-mono text-[12px] uppercase cursor-pointer tracking-widest text-foreground hover:text-primary">{showPwd ? 'hide' : 'show'}</button>
                        </div>
                    </div>
                    <button className="w-full px-5 p-4 bg-primary cursor-pointer text-foreground font-mono text-lg uppercase tracking-[0.3em] hover:opacity-60 transition-opacity disabled:opacity-50">
                        {`// enter`}
                    </button>
                </form>
                <p className="font-mono text-[12px] text-accent mt-6 text-center">
                    {`> verified. for admin`}
                </p>
            </div>
        </div>
  )
}

export default SignIn