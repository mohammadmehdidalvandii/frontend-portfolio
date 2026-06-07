function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <div className="lg:col-span-7 space-y-6 text-accent leading-relaxed text-xl">
        <p>
          I'm <span className="text-foreground">Mohammadmehdi Dalvandi</span>, a
          full stack engineer based in Tehran. I design and build systems end to
          end — from low-level data pipelines to the pixel work users actually
          feel.
        </p>
        <p>
          Most of my time goes into systems that need to be fast, observable,
          and boring in production. I care about clean APIs, tight feedback
          loops, and interfaces that don't waste a click.
        </p>
        <p>
          Outside of client work I write tooling, contribute to open source, and
          prototype ideas at the edge of what browsers can do.
        </p>
      </div>
      <div className="lg:col-span-5">
        <div className="border border-input p-6 font-mono text-base space-y-3">
            <div className="flex justify-between gap-4">
                <span className="text-accent uppercase tracking-widest">location</span>
                <span className="text-primary">Lorestan Borujerd ,IR</span>
            </div>
            <div className="flex justify-between gap-4">
                <span className="text-accent uppercase tracking-widest">role</span>
                <span className="text-primary">Full Stack Engineer</span>
            </div>
            <div className="flex justify-between gap-4">
                <span className="text-accent uppercase tracking-widest">availability</span>
                <span className="text-primary">Open to projects</span>
            </div>
            <div className="flex justify-between gap-4">
                <span className="text-accent uppercase tracking-widest">Languages</span>
                <span className="text-primary">EN . FA</span>
            </div>
            <div className="flex justify-between gap-4">
                <span className="text-accent uppercase tracking-widest">timezone</span>
                <span className="text-primary">UTC+3:30</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
