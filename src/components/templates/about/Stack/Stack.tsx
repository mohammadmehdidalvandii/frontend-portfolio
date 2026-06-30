
function Stack() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4">
            <h2 className="text-base font-mono uppercase tracking-[0.3em] text-primary mb-6">
                Stack
            </h2>
        </div>
        <div className="lg:col-span-8  divide-y divide-input border-y border-input">
            <div className="grid grid-cols-12 py-4 gap-4">
                <span className="col-span-4 font-mono text-base uppercase tracking-widest text-accent">frontend</span>
                <span className="col-span-8 text-[14px] font-mono text-primary">React, Next.js, TypeScript, Tailwind</span>
            </div>
            <div className="grid grid-cols-12 py-4 gap-4">
                <span className="col-span-4 font-mono text-base uppercase tracking-widest text-accent">BACKEND</span>
                <span className="col-span-8 text-[14px] font-mono text-primary">Node.js, Express.js, Fastify</span>
            </div>
            <div className="grid grid-cols-12 py-4 gap-4">
                <span className="col-span-4 font-mono text-base uppercase tracking-widest text-accent">DATA</span>
                <span className="col-span-8 text-[14px] font-mono text-primary">MongoDB, MySql, Postgresql</span>
            </div>
            <div className="grid grid-cols-12 py-4 gap-4">
                <span className="col-span-4 font-mono text-base uppercase tracking-widest text-accent">INFRA</span>
                <span className="col-span-8 text-[14px] font-mono text-primary">Docker</span>
            </div>
            <div className="grid grid-cols-12 py-4 gap-4">
                <span className="col-span-4 font-mono text-base uppercase tracking-widest text-accent">TOOLING</span>
                <span className="col-span-8 text-[14px] font-mono text-primary">Vite, GitHub</span>
            </div>
        </div>
    </div>
  )
}

export default Stack