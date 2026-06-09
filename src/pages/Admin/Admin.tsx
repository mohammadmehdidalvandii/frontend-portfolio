import { Helmet } from "react-helmet-async"


function Admin() {
  return (
    <>
        <Helmet>
            <title>Admin Terminal - Mohammadmehdi Dalvandi</title>
            <meta name='description' content='NoIdex - NoFollow'/>
        </Helmet>
        <div className="px-6 max-w-screen-2xl mx-auto pt-24 pb-32">
            <div className="flex items-center gap-3 text-primary font-mono text-xs mb-4">
                <span className="animate-pulse">●</span>
                <span className="uppercase tracking-[0.3em]">Terminal_v1 / Authorized</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
                Admin Panel
            </h1>
        </div>
    </>
  )
}

export default Admin