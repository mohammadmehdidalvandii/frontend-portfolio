import { ArrowLeft, Home } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


function NotFound() {
  return (
    <>
        <Helmet>
            <title>Not Found  — Mohammadmehdi Dalvandi</title>
            <meta name='description' content='noindex,nofollow"'/>
        </Helmet>
        <div className="relative flex min-h-screen items-center justify-center bg-bg px-4 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundSize:'48px 48px'
                }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/10 blur-3xl pointer-events-none"/>

            <div className="relative max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-input bg-accent/60 backdrop-blur-sm mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse"/>
                    <p className="font-mono text-[12px] uppercase tracking-[0.04em] text-foreground">
                        Error / 404 - Resource Offline
                    </p>
                </div>
                <h1 className="flex items-center justify-center gap-4 text-[8rem] sm:text-[12rem] leading-none font-extrabold tracking-tighter text-foreground select-none">
                    <span className="inline-block">4</span>
                    <span className="inline-block text-primary" style={{animationDelay: '0.1s'}}>0</span>
                    <span className="inline-block " style={{animationDelay:'0.2s'}}>4</span>
                </h1>
                <div className="mt-2 h-px w-32 mx-auto bg-linear-to-r from-transparent via-primary to-transparent"/>
                <h2 className="mt-8 text-2xl sm:text-3xl font-bold tracking-tight">
                    This page got lost in void
                </h2>
                <p className="mt-3 font-mono text-xs text-foreground max-w-md max-auto">
                    {`> the URL you requested doesn't exist, was moved, or never came online.`}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <Link to='/'
                        className="group cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-input text-foreground font-mono uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition-colors"
                    >
                        <Home className="w-3.5 h-3.5"/>
                        Return Home
                    </Link>
                    <button className="group cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-input text-foreground font-mono uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5"/>
                        Go Back
                    </button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-px bg-input max-w-sm mx-auto">
                    <Link to='/' className="bg-bg p-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-primary hover:bg-secondary/20 transition-colors">Project</Link>
                    <Link to='/' className="bg-bg p-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-primary hover:bg-secondary/20 transition-colors">About</Link>
                    <Link to='/' className="bg-bg p-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-primary hover:bg-secondary/20 transition-colors">Contact</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound