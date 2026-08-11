import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
const logoAsset = { url: "/goodarzi-trading-logo.png" };

const navItems = [
  { to: "/", key: "common.nav.home" },
  { to: "/about", key: "common.nav.about" },
  { to: "/services", key: "common.nav.services" },
  { to: "/export-products", key: "common.nav.products" },
  { to: "/trade-network", key: "common.nav.network" },
  { to: "/hs-code", key: "common.nav.trade" },
  { to: "/incoterms", key: "common.nav.incoterms" },
  { to: "/knowledge", key: "common.nav.knowledge" },
  { to: "/blog", key: "common.nav.blog" },
  { to: "/inquiry", key: "common.nav.inquiry" },
  { to: "/contact", key: "common.nav.contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, dir } = useI18n();
  return (
    <header dir={dir} className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-24 items-center justify-between md:h-28">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label={t("common.nav.home_aria")}
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

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm font-medium text-[color:var(--navy)] transition-colors hover:text-[color:var(--gold)]"
              activeProps={{ className: "text-[color:var(--gold)]" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {t(i.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <a
            href="tel:+982144511076"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[color:var(--navy)]"
            dir="ltr"
          >
            <Phone className="h-4 w-4" /> +98 21 44511076
          </a>
          <Link
            to="/quote"
            className="rounded-sm bg-[color:var(--navy-deep)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--navy)] hover:shadow-[var(--shadow-elegant)]"
          >
            {t("common.nav.quote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <button
            aria-label={t("common.nav.menu")}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-medium text-[color:var(--navy)] hover:bg-secondary"
              >
                {t(i.key)}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-[color:var(--navy-deep)] px-4 py-3 text-center text-sm font-medium text-white"
            >
              {t("common.nav.quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
