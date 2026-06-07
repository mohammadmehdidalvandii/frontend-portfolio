function Timeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-base font-mono uppercase tracking-[0.3em] text-primary mb-6">
          Timeline
        </h2>
        <p className="font-mono text-[12px] text-accent leading-relaxed max-w-xs">
          {`> work history. most recent first`}
        </p>
      </div>
      <div className="lg:col-span-8 relative">
        <ul className="space-y-10">
          <li className="relative pl-10">
            {/* 
                ? "border-accent bg-accent animate-pulse"
                : "border-accent bg-background"
            */}
            <span className="absolute left-2 top-2 bottom-2 w-px bg-input"></span>
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="font-mono text-[12px] text-primary tracking-widest">2024 - now</span>
              {/* condition */}
              <span className="px-2 py-0.5 bg-primary/10 border border-primary/40 font-mono text-[10px] uppercase tracking-widest text-primary">
                ● current
              </span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Senior Full Stack Engineer</h3>
            <p className="font-mono text-[12px] tracking-widest text-accent mt-1">@ Independent / Consulting</p>
            <p className="text-base text-accent mt-3 leading-relaxed">Building distributed systems and edge-first products for clients across fintech and devtools.</p>
                <ul className="mt-4 space-y-2">
                    <li className="flex gap-3 text-base text-foreground/80">
                    <span className="font-mono text-primary text-[12px] pt-1">▸</span>
                    <span>
Shipped Quantum Ledger settlement engine to production</span>
                    </li>
                    <li className="flex gap-3 text-base text-foreground/80">
                    <span className="font-mono text-primary text-[12px] pt-1">▸</span>
                    <span>
Shipped Quantum Ledger settlement engine to production</span>
                    </li>
                    <li className="flex gap-3 text-base text-foreground/80">
                    <span className="font-mono text-primary text-[12px] pt-1">▸</span>
                    <span>
Shipped Quantum Ledger settlement engine to production</span>
                    </li>
                </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
