import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/goodarzi-trading-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/hs-code", label: "HS Code" },
  { to: "/knowledge", label: "Knowledge" },
  { to: "/blog", label: "Insights" },
  { to: "/profile", label: "Profile" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Goodarzi Trading — Home"
        >
          <img
            src={logoAsset.url}
            alt="Goodarzi Trading — Import & Export"
            width={340}
            height={96}
            className="h-14 w-auto object-contain sm:h-16 md:h-20"
            loading="eager"
            decoding="async"
          />

        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm font-medium text-[color:var(--navy)] transition-colors hover:text-[color:var(--gold)]"
              activeProps={{ className: "text-[color:var(--gold)]" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+982144511076"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[color:var(--navy)]"
          >
            <Phone className="h-4 w-4" /> +98 21 44511076
          </a>
          <Link
            to="/quote"
            className="rounded-sm bg-[color:var(--navy-deep)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--navy)] hover:shadow-[var(--shadow-elegant)]"
          >
            Request Quote
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-medium text-[color:var(--navy)] hover:bg-secondary"
              >
                {i.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-[color:var(--navy-deep)] px-4 py-3 text-center text-sm font-medium text-white"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
