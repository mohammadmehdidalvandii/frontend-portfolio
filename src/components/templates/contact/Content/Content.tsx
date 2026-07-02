import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-accent mb-2">
          Email
        </p>
        <Link
          to="mailto:mhmdmehdidalvandi@gmail.com"
          className="text-xl md:text-2xl font-bold hover:text-primary transition-colors"
        >
          mhmdmehdidalvandi@gmail.com
        </Link>
      </div>
      <div>
        <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-accent mb-2">
          Location
        </p>
    <p className="text-lg">Lorestan, Borujerd , IR . UTC+3:30</p>
      </div>
            <div>
        <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-accent mb-2">
          Elsewhere
        </p>
        <div className="flex flex-col gap-2 font-mono text-sm">
        <Link
          to="https://github.com/mohammadmehdidalvandii"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
         → Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/mohammadmehdidalvandii/"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
         → LinkedIn
        </Link>
        <Link
          to="https://t.me/The_Dev_Log"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
          → Telegram Channel
        </Link>
        <Link
          to="https://www.youtube.com/@Dalvandi_code"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
          → Youtube
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Content;
