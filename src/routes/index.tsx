import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ship, Plane, Truck, FileCheck, Search, Globe, Award, ShieldCheck,
  TrendingUp, ArrowRight, Quote,
} from "lucide-react";
import worldMap from "@/assets/world-map.jpg";
import cargoShip from "@/assets/cargo-ship.jpg";
import saffronImg from "@/assets/products/saffron.jpg.asset.json";
import pistachioImg from "@/assets/products/pistachio.jpg.asset.json";
import datesImg from "@/assets/products/dates.avif.asset.json";
import barberryImg from "@/assets/products/barberry.jpeg.asset.json";
import carpetImg from "@/assets/products/carpet.jpg.asset.json";
import nutsImg from "@/assets/products/nuts.jpg.asset.json";
import { useT } from "@/i18n/LanguageProvider";
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
  const t = useT();

  const FEATURED = [
    { slug: "saffron", name: t("home.products.saffron.name", "Iranian Saffron"), fa: t("home.products.saffron.fa", "زعفران"), img: saffronImg.url },
    { slug: "pistachio", name: t("home.products.pistachio.name", "Iranian Pistachio"), fa: t("home.products.pistachio.fa", "پسته"), img: pistachioImg.url },
    { slug: "dates", name: t("home.products.dates.name", "Iranian Dates"), fa: t("home.products.dates.fa", "خرما"), img: datesImg.url },
    { slug: "barberry", name: t("home.products.barberry.name", "Iranian Barberry"), fa: t("home.products.barberry.fa", "زرشک"), img: barberryImg.url },
    { slug: "nuts", name: t("home.products.nuts.name", "Dried Fruits & Nuts"), fa: t("home.products.nuts.fa", "خشکبار"), img: nutsImg.url },
    { slug: "handwoven-carpets", name: t("home.products.carpets.name", "Persian Carpets"), fa: t("home.products.carpets.fa", "فرش دستباف"), img: carpetImg.url },
  ];

  const heroStats: [string, string][] = [
    [t("home.hero.stat.countries.value", "40+"), t("home.hero.stat.countries.label", "Countries")],
    [t("home.hero.stat.years.value", "20+"), t("home.hero.stat.years.label", "Years Trade")],
    [t("home.hero.stat.shipments.value", "1,200+"), t("home.hero.stat.shipments.label", "Shipments")],
    [t("home.hero.stat.ontime.value", "98%"), t("home.hero.stat.ontime.label", "On-Time")],
  ];

  const introPoints = [
    { icon: Award, text: t("home.intro.point.chamber", "Tehran Chamber of Commerce member") },
    { icon: ShieldCheck, text: t("home.intro.point.bedra", "Authorised Bedra representative") },
    { icon: Globe, text: t("home.intro.point.countries", "Active in 40+ countries") },
    { icon: TrendingUp, text: t("home.intro.point.lifecycle", "Full lifecycle trade management") },
  ];

  const services = [
    { icon: Ship, title: t("home.services.importExport.title", "Import & Export"), desc: t("home.services.importExport.desc", "Full inbound and outbound trade execution with verified partners.") },
    { icon: FileCheck, title: t("home.services.customsClearance.title", "Customs Clearance"), desc: t("home.services.customsClearance.desc", "Documentation, tariffs, declarations and broker coordination.") },
    { icon: Search, title: t("home.services.customsConsulting.title", "Customs Consulting"), desc: t("home.services.customsConsulting.desc", "Strategic advice on duties, regulations and trade compliance.") },
    { icon: Truck, title: t("home.services.logistics.title", "International Logistics"), desc: t("home.services.logistics.desc", "Multi-modal freight: sea, air, land and rail across continents.") },
    { icon: Globe, title: t("home.services.sourcing.title", "Product Sourcing"), desc: t("home.services.sourcing.desc", "Identify, vet and onboard qualified suppliers globally.") },
    { icon: ShieldCheck, title: t("home.services.verification.title", "Supplier Verification"), desc: t("home.services.verification.desc", "Audits, inspections and due-diligence before commitment.") },
    { icon: FileCheck, title: t("home.services.documentation.title", "Trade Documentation"), desc: t("home.services.documentation.desc", "Invoices, B/L, L/C, CO, packing lists prepared to standard.") },
    { icon: Plane, title: t("home.services.freight.title", "Air & Sea Freight"), desc: t("home.services.freight.desc", "Optimised routing and cost-efficient forwarding partners.") },
    { icon: TrendingUp, title: t("home.services.intelligence.title", "Market Intelligence"), desc: t("home.services.intelligence.desc", "Pricing, demand and regulatory updates for your category.") },
  ];

  const reachStats: [string, string][] = [
    [t("home.reach.stat.countries.value", "40+"), t("home.reach.stat.countries.label", "Countries served")],
    [t("home.reach.stat.suppliers.value", "120+"), t("home.reach.stat.suppliers.label", "Verified suppliers")],
    [t("home.reach.stat.volume.value", "15M+"), t("home.reach.stat.volume.label", "USD in trade volume")],
    [t("home.reach.stat.support.value", "24/7"), t("home.reach.stat.support.label", "Operations support")],
  ];

  const testimonials = [
    { q: t("home.testimonials.t1.quote", "Goodarzi Trading streamlined our entire supply chain into Iran. Customs cleared in record time."), n: t("home.testimonials.t1.name", "A. Hosseini"), r: t("home.testimonials.t1.role", "Procurement Director") },
    { q: t("home.testimonials.t2.quote", "Professional, reliable and deeply knowledgeable about international trade regulations."), n: t("home.testimonials.t2.name", "M. Karimi"), r: t("home.testimonials.t2.role", "CEO, Industrial Group") },
    { q: t("home.testimonials.t3.quote", "Their sourcing team found us a better supplier in 3 weeks. Highly recommended."), n: t("home.testimonials.t3.name", "S. Ahmadi"), r: t("home.testimonials.t3.role", "Founder, Retail Chain") },
  ];

  const certificates = [
    { title: t("home.certificates.health.title", "Health Certificate"), sub: t("home.certificates.health.sub", "Product Health Certificate"), icon: "🏥" },
    { title: t("home.certificates.aflatoxin.title", "Aflatoxin-Free Certificate"), sub: t("home.certificates.aflatoxin.sub", "Certificate of Aflatoxin Absence"), icon: "🔬" },
    { title: t("home.certificates.lab.title", "Lab Analysis Certificate"), sub: t("home.certificates.lab.sub", "Saffron Laboratory Analysis"), icon: "⚗️" },
    { title: t("home.certificates.origin.title", "Certificate of Origin"), sub: t("home.certificates.origin.sub", "Certificate of Origin"), icon: "🌍" },
    { title: t("home.certificates.coi.title", "COI Certificate"), sub: t("home.certificates.coi.sub", "Certificate of Inspection (COI)"), icon: "📋" },
    { title: t("home.certificates.ic.title", "IC Certificate"), sub: t("home.certificates.ic.sub", "IC Certificate"), icon: "📄" },
    { title: t("home.certificates.phyto.title", "Phytosanitary Certificate"), sub: t("home.certificates.phyto.sub", "Phytosanitary Certificate"), icon: "🌿" },
    { title: t("home.certificates.customs.title", "Customs Documents"), sub: t("home.certificates.customs.sub", "Other destination-country customs certificates"), icon: "📦" },
  ];

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
            <span className="eyebrow">{t("home.hero.eyebrow", "Tehran · Established Trading House")}</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              {t("home.hero.title.line1", "Global Import & Export")} <span className="text-[color:var(--gold)]">{t("home.hero.title.highlight", "Solutions")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              {t("home.hero.desc", "Goodarzi Trading connects manufacturers, suppliers and buyers across continents — with end-to-end customs, logistics and sourcing expertise rooted in decades of international trade.")}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] transition-transform hover:scale-[1.02]"
              >
                {t("home.hero.cta.quote", "Request a Quote")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t("home.hero.cta.services", "Explore Services")}
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {heroStats.map(([k, v]) => (
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
            <span className="eyebrow">{t("home.intro.eyebrow", "About Goodarzi Trading")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[color:var(--navy-deep)] md:text-5xl">
              {t("home.intro.title", "A trusted partner in international commerce since day one.")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("home.intro.desc", "Based in Tehran and active across global markets, Goodarzi Trading specialises in import, export, customs consulting, product sourcing, and international logistics. We are an active member of the Tehran Chamber of Commerce and the official sales representative of Bedra products in Iran.")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {introPoints.map(({ icon: Icon, text }) => (
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
              {t("home.intro.link", "Learn more about us")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={cargoShip}
              alt={t("home.intro.image.alt", "Container ship at sunrise")}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-elegant)]"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] md:block">
              <div className="eyebrow">{t("home.intro.director.eyebrow", "Managing Director")}</div>
              <div className="mt-2 font-display text-xl text-[color:var(--navy-deep)]">{t("home.intro.director.name", "Mr. Mehdi Goodarzi")}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t("home.intro.director.desc", "Two decades of international trade leadership.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">{t("home.products.eyebrow", "Featured Iranian Exports")}</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
                {t("home.products.title", "Premium products, shipped worldwide")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("home.products.desc", "Saffron, pistachio, dates, barberry, dried fruits and hand-woven Persian carpets — sourced directly from Iranian growers and workshops.")}
              </p>
            </div>
            <Link
              to="/export-products"
              className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--navy)]/25 px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] hover:bg-secondary"
            >
              {t("home.products.cta", "View full catalogue")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p) => (
              <Link
                key={p.slug}
                to="/export-products"
                className="group relative block overflow-hidden rounded-sm border border-border shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.fa}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/70 to-transparent p-5">
                  <h3 className="font-display text-xl text-white">{p.name}</h3>
                  <p className="mt-1 text-xs text-white/75" dir="rtl">{p.fa}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("home.services.eyebrow", "Our Services")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              {t("home.services.title", "End-to-end international trade")}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t("home.services.desc", "From sourcing your supplier abroad to clearing goods at the destination port — we handle every link in the chain.")}
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
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
            <span className="eyebrow">{t("home.reach.eyebrow", "Global Reach")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">{t("home.reach.title", "Trading across continents, every day.")}</h2>
          </div>
          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {reachStats.map(([k, v]) => (
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
            <span className="eyebrow">{t("home.testimonials.eyebrow", "Client Testimonials")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              {t("home.testimonials.title", "Trusted by importers and exporters worldwide")}
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((tItem) => (
              <figure key={tItem.n} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-[color:var(--gold)]" />
                <blockquote className="mt-4 text-sm leading-relaxed text-[color:var(--navy)]">"{tItem.q}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-base text-[color:var(--navy-deep)]">{tItem.n}</div>
                  <div className="text-xs text-muted-foreground">{tItem.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="bg-secondary/60 py-24" id="certificates">
        <div className="container-x">
          <div className="flex justify-center mb-10">
            <img src={logoAsset.url} alt={t("home.certificates.logo.alt", "Goodarzi Trading Logo")} className="h-28 object-contain" />
          </div>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="eyebrow">{t("home.certificates.eyebrow", "Certifications")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
              {t("home.certificates.title", "Certificates & Trade Documents")}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t("home.certificates.desc", "We are fully capable of providing all required official certificates and trade documentation for export shipments upon request.")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col items-center rounded-sm border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-display text-base font-semibold text-[color:var(--navy-deep)]">{cert.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.sub}</p>
                <span className="mt-3 inline-block rounded-sm bg-[color:var(--navy-deep)] px-3 py-1 text-xs font-medium text-[color:var(--gold)]">
                  {t("home.certificates.available", "Available on Request")}
                </span>
              </div>
            ))}
          </div>

          {/* OFFICIAL DOCUMENTS */}
          <div className="border-t border-border pt-20">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <span className="eyebrow">{t("home.docs.eyebrow", "Official Documents")}</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] md:text-5xl">
                {t("home.docs.title", "Registered & Certified")}
              </h2>
              <p className="mt-5 text-muted-foreground">
                {t("home.docs.desc", "Goodarzi Trading is an officially registered and certified business entity with active membership in Tehran Chamber of Commerce.")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-sm border border-border bg-background shadow-[var(--shadow-card)]">
                <a href={membershipCert.url} target="_blank" rel="noopener noreferrer" className="block bg-white">
                  <img
                    src={membershipCert.url}
                    alt={t("home.docs.membership.alt", "Tehran Chamber of Commerce Membership Certificate")}
                    width={800}
                    height={1131}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </a>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{t("home.docs.membership.title", "Tehran Chamber of Commerce")}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t("home.docs.membership.sub", "Certificate of Membership")}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-sm border border-border bg-background shadow-[var(--shadow-card)]">
                <a href={brandCert.url} target="_blank" rel="noopener noreferrer" className="block bg-white">
                  <img
                    src={brandCert.url}
                    alt={t("home.docs.brand.alt", "Trademark Registration Certificate — No. 485993")}
                    width={800}
                    height={1131}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </a>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{t("home.docs.brand.title", "Trademark Registration")}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t("home.docs.brand.sub", "Official Brand Certificate — No. 485993")}</p>
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
            {t("home.partners.label", "Trusted partners & affiliations")}
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
            <span className="eyebrow">{t("home.cta.eyebrow", "Start Your Trade Today")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              {t("home.cta.title", "Ready to move your goods across borders?")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              {t("home.cta.desc", "Tell us about your shipment, supplier, or sourcing need — we'll respond with a tailored quote within one business day.")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="rounded-sm bg-[color:var(--gold)] px-8 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]">
                {t("home.cta.quote", "Request a Quote")}
              </Link>
              <Link to="/contact" className="rounded-sm border border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10">
                {t("home.cta.contact", "Contact Us")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
