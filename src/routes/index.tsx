import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ship, Plane, Truck, FileCheck, Search, Globe, Award, ShieldCheck,
  TrendingUp, ArrowRight, Quote,
} from "lucide-react";
import worldMap from "@/assets/world-map.jpg";
import cargoShip from "@/assets/cargo-ship.jpg";
const heroPort = "/hero-port-containers.jpg";
const membershipCert = { url: "/certificate-of-membership.jpg" };
const brandCert = { url: "/brand-registration-certificate.jpg" };
const logoAsset = { url: "/goodarzi-trading-logo.png" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goodarzi Trading — Global Import & Export Solutions" },
      { name: "keywords", content: "import export company Tehran, شرکت واردات صادرات, global trade Iran, freight forwarding, customs broker, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "International import, export, customs consulting and logistics from Tehran. Active member of Tehran Chamber of Commerce. Sales representative of Bedra products in Iran." },
      { property: "og:title", content: "Goodarzi Trading — Global Import & Export Solutions" },
      { property: "og:description", content: "Trusted international trade partner. Customs consulting, sourcing, freight, and trade documentation worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(120deg, oklch(0.18 0.06 260 / 0.88), oklch(0.27 0.08 260 / 0.6)), url(${heroPort})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x grid min-h-[640px] items-center py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow">Tehran · Established Trading House</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Global Import &amp; Export <span className="text-[color:var(--gold)]">Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Goodarzi Trading connects manufacturers, suppliers and buyers across
              continents — with end-to-end customs, logistics and sourcing expertise
              rooted in decades of international trade.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] transition-transform hover:scale-[1.02]"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {[
                ["40+", "Countries"],
                ["20+", "Years Trade"],
                ["1,200+", "Shipments"],
                ["98%", "On-Time"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-3xl font-semibold text-[color:var(--gold)]">{k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">About Goodarzi Trading</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[color:var(--navy-deep)] md:text-5xl">
              A trusted partner in international commerce since day one.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Based in Tehran and active across global markets, Goodarzi Trading
              specialises in import, export, customs consulting, product sourcing,
              and international logistics. We are an active member of the Tehran
              Chamber of Commerce and the official sales representative of Bedra
              products in Iran.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, text: "Tehran Chamber of Commerce member" },
                { icon: ShieldCheck, text: "Authorised Bedra representative" },
                { icon: Globe, text: "Active in 40+ countries" },
                { icon: TrendingUp, text: "Full lifecycle trade management" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-[color:var(--navy-deep)] text-[color:var(--gold)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5 text-sm text-[color:var(--navy)]">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--navy-deep)] underline-offset-4 hover:underline"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={cargoShip}
              alt="Container ship at sunrise"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-elegant)]"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] md:block">
              <div className="eyebrow">Managing Director</div>
              <div className="mt-2 font-display text-xl text-[color:var(--navy-deep)]">Mr. Mehdi Goodarzi</div>
              <p className="mt-2 text-sm text-muted-foreground">Two decades of international trade leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              End-to-end international trade
            </h2>
            <p className="mt-5 text-muted-foreground">
              From sourcing your supplier abroad to clearing goods at the destination port — we handle every link in the chain.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Ship, title: "Import & Export", desc: "Full inbound and outbound trade execution with verified partners." },
              { icon: FileCheck, title: "Customs Clearance", desc: "Documentation, tariffs, declarations and broker coordination." },
              { icon: Search, title: "Customs Consulting", desc: "Strategic advice on duties, regulations and trade compliance." },
              { icon: Truck, title: "International Logistics", desc: "Multi-modal freight: sea, air, land and rail across continents." },
              { icon: Globe, title: "Product Sourcing", desc: "Identify, vet and onboard qualified suppliers globally." },
              { icon: ShieldCheck, title: "Supplier Verification", desc: "Audits, inspections and due-diligence before commitment." },
              { icon: FileCheck, title: "Trade Documentation", desc: "Invoices, B/L, L/C, CO, packing lists prepared to standard." },
              { icon: Plane, title: "Air & Sea Freight", desc: "Optimised routing and cost-efficient forwarding partners." },
              { icon: TrendingUp, title: "Market Intelligence", desc: "Pricing, demand and regulatory updates for your category." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-background p-8 transition-colors hover:bg-[color:var(--navy-deep)]">
                <Icon className="h-8 w-8 text-[color:var(--gold)]" />
                <h3 className="mt-5 font-display text-xl text-[color:var(--navy-deep)] group-hover:text-white">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section
        className="relative overflow-hidden py-28 text-white"
        style={{
          backgroundImage: `linear-gradient(120deg, oklch(0.18 0.06 260 / 0.92), oklch(0.27 0.08 260 / 0.85)), url(${worldMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Global Reach</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Trading across continents, every day.</h2>
          </div>
          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["40+", "Countries served"],
              ["120+", "Verified suppliers"],
              ["15M+", "USD in trade volume"],
              ["24/7", "Operations support"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-5xl font-semibold text-[color:var(--gold)]">{k}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Client Testimonials</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              Trusted by importers and exporters worldwide
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { q: "Goodarzi Trading streamlined our entire supply chain into Iran. Customs cleared in record time.", n: "A. Hosseini", r: "Procurement Director" },
              { q: "Professional, reliable and deeply knowledgeable about international trade regulations.", n: "M. Karimi", r: "CEO, Industrial Group" },
              { q: "Their sourcing team found us a better supplier in 3 weeks. Highly recommended.", n: "S. Ahmadi", r: "Founder, Retail Chain" },
            ].map((t) => (
              <figure key={t.n} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-[color:var(--gold)]" />
                <blockquote className="mt-4 text-sm leading-relaxed text-[color:var(--navy)]">"{t.q}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-base text-[color:var(--navy-deep)]">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES - بخش ۱: گواهی‌های قابل ارائه */}
      <section className="bg-secondary/60 py-24" id="certificates">
        <div className="container-x">
          <div className="flex justify-center mb-10">
            <img src={logoAsset.url} alt="Goodarzi Trading Logo" className="h-28 object-contain" />
          </div>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="eyebrow">Certifications</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              Certificates & Trade Documents
            </h2>
            <p className="mt-5 text-muted-foreground">
              We are fully capable of providing all required official certificates and trade documentation for export shipments upon request.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24">
            {[
              { title: "Health Certificate", sub: "گواهی سیب سلامت", icon: "🏥" },
              { title: "Aflatoxin-Free Certificate", sub: "گواهی عدم آفلاتوکسین", icon: "🔬" },
              { title: "Lab Analysis Certificate", sub: "آنالیز آزمایشگاه زعفران", icon: "⚗️" },
              { title: "Certificate of Origin", sub: "گواهی مبدأ", icon: "🌍" },
              { title: "COI Certificate", sub: "گواهی بازرسی COI", icon: "📋" },
              { title: "IC Certificate", sub: "گواهی IC", icon: "📄" },
              { title: "Phytosanitary Certificate", sub: "گواهی فیتوسانیتری", icon: "🌿" },
              { title: "Customs Documents", sub: "سایر گواهی‌های گمرکی کشور مقصد", icon: "📦" },
            ].map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col items-center rounded-sm border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-display text-base font-semibold text-[color:var(--navy-deep)]">{cert.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.sub}</p>
                <span className="mt-3 inline-block rounded-sm bg-[color:var(--navy-deep)] px-3 py-1 text-xs font-medium text-[color:var(--gold)]">
                  Available on Request
                </span>
              </div>
            ))}
          </div>

          {/* بخش ۲: مدارک رسمی */}
          <div className="border-t border-border pt-20">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <span className="eyebrow">Official Documents</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
                Registered & Certified
              </h2>
              <p className="mt-5 text-muted-foreground">
                Goodarzi Trading is an officially registered and certified business entity with active membership in Tehran Chamber of Commerce.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-sm border border-border bg-background shadow-[var(--shadow-card)]">
                <a href={membershipCert.url} target="_blank" rel="noopener noreferrer" className="block bg-white">
                  <img
                    src={membershipCert.url}
                    alt="Tehran Chamber of Commerce Membership Certificate"
                    width={800}
                    height={1131}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </a>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">Tehran Chamber of Commerce</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Certificate of Membership</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-sm border border-border bg-background shadow-[var(--shadow-card)]">
                <a href={brandCert.url} target="_blank" rel="noopener noreferrer" className="block bg-white">
                  <img
                    src={brandCert.url}
                    alt="Trademark Registration Certificate — No. 485993"
                    width={800}
                    height={1131}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </a>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">Trademark Registration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Official Brand Certificate — No. 485993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Trusted partners &amp; affiliations
          </p>
          <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {["Bedra", "Tehran C.O.C", "IRICA", "INCOTERMS 2020", "ICC"].map((p) => (
              <div key={p} className="font-display text-lg font-semibold text-[color:var(--navy)]/60 transition-colors hover:text-[color:var(--navy-deep)]">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-sm bg-[color:var(--navy-deep)] px-8 py-16 text-center text-white md:px-20 md:py-24">
            <span className="eyebrow">Start Your Trade Today</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Ready to move your goods across borders?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Tell us about your shipment, supplier, or sourcing need — we'll respond with a tailored quote within one business day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="rounded-sm bg-[color:var(--gold)] px-8 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]">
                Request a Quote
              </Link>
              <Link to="/contact" className="rounded-sm border border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
