import CertificateManager from "@components/templates/admin/CertificateManager/CertificateManager"
import ProjectManger from "@components/templates/admin/ProjectManger/ProjectManger"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/UI/Tabs"
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
            <Tabs defaultValue="Projects" className="w-full">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <TabsList className="h-auto bg-transparent p-0 gap-px rounded-none border border-input">
                        <TabsTrigger value="Projects" className="rounded-none px-5 py-2 font-mono text-[14px] text-foreground uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-none">Projects</TabsTrigger>
                        <TabsTrigger value="Certificate" className="rounded-none px-5 py-2 font-mono text-[14px] text-foreground uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-none">Certificate</TabsTrigger>
                        <TabsTrigger value="Timeline" className="rounded-none px-5 py-2 font-mono text-[14px] text-foreground uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-none">Timeline</TabsTrigger>
                        <TabsTrigger value="Messages" className="rounded-none px-5 py-2 font-mono text-[14px] text-foreground uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-none">Messages</TabsTrigger>
                    </TabsList>
                </div>
                <div className="border border-input p-6 md:p-8">
                    <TabsContent value="Projects">
                        <ProjectManger/>
                    </TabsContent>
                    <TabsContent value="Certificate">
                        <CertificateManager/>
                    </TabsContent>
                    <TabsContent value="Timeline">this is TimeLine</TabsContent>
                    <TabsContent value="Messages">this is Messages</TabsContent>
                </div>
            </Tabs>
        </div>
    </>
  )
}

export default Admin