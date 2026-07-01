import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="pt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-8 order-2 lg:order-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-6 animate-reveal">{`> initializing_profile.exe`}</p>
                <h1 className="text-4xl sm:text-[2rem]  md:text-[9rem] font-extrabold lading-[0.82em] tracking-tighter animate-reveal wrap-break-word font-interBlack">
                    MOHAMMADMEHDI
                    <br />
                    <span className='text-primary'>DALVANDI</span>
                </h1>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.34em] text-accent">Full Stack Engineer · Borujerd, IR</p>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
                <div className='relative border border-input bg-secondary/40 p-2'>
                    <img
                        src='/assets/images/me.jpg'
                        alt='mohammadmehdi'
                        width={896}
                        height={1152}
                        className='w-full aspect-4/5 object-cover  contrast-110'
                    />
                    <div className='absolute top-4 left-4 right-4 flex justify-between font-mono text-[12px] text-primary bg-secondary/90 px-2'>
                        <span>● REC</span>
                        <span>ID_000</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[12px] text-primary bg-secondary/90 px-2">
                        <span>[STATUS] READY_FOR_DEPLOY</span>
                        <span>ƒ/2.8</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-input pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <p className="text-base text-accent max-w-md md:col-span-2 text-pretty">
                            Building high-performance digital architectures with a focus on
            technical precision and aesthetic rigor. From distributed systems
            to pixel-perfect interfaces.
            </p>
            <div className="flex md:justify-end items-start gap-4">
             <Link
              to="/Projects"
              className="px-5 py-3 bg-primary text-secondary font-mono text-sm uppercase tracking-widest hover:bg-foreground transition-colors"
            >
              View Work →
            </Link>
                        <Link
              to="/Contact"
              className="px-5 py-3 border border-input font-mono text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              Contact
            </Link>                   
            </div>
        </div>
    </section>
  )
}

export default Hero