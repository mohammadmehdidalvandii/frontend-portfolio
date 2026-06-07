import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-accent mb-2">
          Email
        </p>
        <Link
          to="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
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
          Email
        </p>
        <div className="flex flex-col gap-2 font-mono text-sm">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
         → Github
        </Link>
        <Link
          to="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
         → LinkedIn
        </Link>
        <Link
          to="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
          → Telegram
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Content;
