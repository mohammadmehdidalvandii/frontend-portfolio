import { Link } from "react-router-dom"


function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-input">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base font-mono text-accent">
                © {new Date().getFullYear()} MOHAMMADMEHDI DALVANDI ARCHIVE. ALL RIGHT RESERVED.
            </p>
            <div className="flex gap-10 font-mono text-base text-accent">
                <Link to='/' target='_blank' rel='noreferrer' className="hover:text-foreground">Github</Link>
                <Link to='/' target='_blank' rel='noreferrer' className="hover:text-foreground">LinkedIn</Link>
                <Link to='/' target='_blank' rel='noreferrer' className="hover:text-foreground">Email</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer