import { Sheet, SheetContent, SheetTrigger } from "@components/UI/Sheet";
import { Menu } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Index_0" },
  { to: "/Projects", label: "Archive_1" },
  { to: "/Certificates", label: "Creds_02" },
  { to: "/About", label: "About_03" },
  { to: "/Contact", label: "Contact_04" },
];

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-input bg-bg/80 backdrop-blur-md">
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl ">
          M. DALVANDI // STACK_CORE
        </Link>
        <div className="hidden md:flex gap-6 lg:gap-8 text-[12px] uppercase tracking-widest">
          {links.map((link) => (
            <NavLink to={link.to} className="text-accent hover:text-primary">
              {link.label}
            </NavLink>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden inline-flex items-center justify-center p-2 border border-primary rounded-sm hover:bg-primary/20 transition-colors cursor-pointer">
              <Menu className="h-5 w-5 text-primary"/>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:max-w-sm border-l border-input bg-bg">
            <div className="flex flex-col gap-8 pt-8 font-mono uppercase tracking-widest text-sm">
              {links.map((link) => (
                <NavLink
                  to={link.to}
                  className="text-accent hover:text-primary"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navigation;
