import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/goodarzi-trading-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--navy-deep)] text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center rounded-sm bg-white p-3 shadow-sm">
            <img
              src={logoAsset.url}
              alt="Goodarzi Trading — Import & Export"
              width={220}
              height={64}
              className="h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            International import &amp; export, customs consulting, and global
            logistics. Active member of the Tehran Chamber of Commerce and
            sales representative of Bedra products in Iran.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/40">
            Registration No. 485993
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/profile", "Company Profile"],
              ["/blog", "Insights"],
              ["/faq", "FAQ"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[color:var(--gold)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            Trade Tools
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/hs-code" className="hover:text-[color:var(--gold)]">HS Code Search</Link></li>
            <li><Link to="/knowledge" className="hover:text-[color:var(--gold)]">Knowledge Center</Link></li>
            <li><Link to="/quote" className="hover:text-[color:var(--gold)]">Request a Quote</Link></li>
            <li><Link to="/privacy" className="hover:text-[color:var(--gold)]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[color:var(--gold)]">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> No. 23/1, Ghazal Crossroads, Tenth Street, Tehransar, Tehran, Iran</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> <a href="tel:+982144511076" className="hover:text-[color:var(--gold)]">+98 21 44511076</a></li>
            <li className="flex gap-3"><MessageCircle className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> <a href="https://wa.me/989191238554" className="hover:text-[color:var(--gold)]">+98 919 123 8554</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> <a href="mailto:info@goodarzitrading.ir" className="hover:text-[color:var(--gold)]">info@goodarzitrading.ir</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Goodarzi Trading. All rights reserved.</p>
          <p>Tehran, Iran · goodarzitrading.ir</p>
        </div>
      </div>
    </footer>
  );
}
