import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { SITE_URL } from "@/data/export-products";
import { SAFFRON_HREFLANG, SAFFRON_LOCALES, SAFFRON_EN_PATH, type SaffronLocaleKey } from "@/data/saffron-locales";
import { whatsappLink } from "@/lib/whatsapp";

const EMAIL = "info@goodarzitrading.ir";

export function saffronLocaleHead(key: SaffronLocaleKey) {
  const l = SAFFRON_LOCALES[key];
  const url = `${SITE_URL}${l.path}`;
  const image = `${SITE_URL}/saffron.jpg`;
  return {
    meta: [
      { title: l.title },
      { name: "description", content: l.description },
      { name: "keywords", content: l.keywords },
      { property: "og:title", content: l.title },
      { property: "og:description", content: l.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: l.lang.replace("-Hans", "_CN") },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }, ...SAFFRON_HREFLANG(SITE_URL)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: l.lang,
          mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Iranian Saffron Exporter", url: `${SITE_URL}${SAFFRON_EN_PATH}` },
            { name: l.breadcrumb, url },
          ]),
        ),
      },
    ],
  };
}

export function SaffronLocalePage({ k }: { k: SaffronLocaleKey }) {
  const l = SAFFRON_LOCALES[k];
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(l.emailSubject)}&body=${encodeURIComponent(l.emailBody)}`;
  const wa = whatsappLink(l.waText);
  const others = Object.values(SAFFRON_LOCALES).filter((o) => o.key !== k);

  return (
    <div lang={l.lang}>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Iranian Saffron", to: SAFFRON_EN_PATH }, { label: l.breadcrumb }]} />

      <section className="bg-[color:var(--navy-deep)] text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <span className="eyebrow">{l.eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] md:text-5xl">{l.h1}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">{l.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mailto} className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]">
                <Mail className="h-4 w-4" /> {l.ctaEmail}
              </a>
              <Link to="/inquiry" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10">
                {l.ctaQuote} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> {l.ctaWhatsapp}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src="/saffron.jpg" alt={l.breadcrumb} width={1200} height={900} className="h-full w-full object-cover" decoding="async" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-4xl">
          {l.sections.map((s) => (
            <div key={s.h2} className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">{s.h2}</h2>
              {s.paras?.map((p) => <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">{p}</p>)}
              {s.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">{l.gradesTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {l.grades.map((g) => (
              <div key={g.name} className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{g.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{l.quoteTitle}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{l.quoteIntro}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {l.quoteFields.map((f) => <li key={f} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {f}</li>)}
              </ul>
            </div>
            <div className="rounded-sm bg-[color:var(--navy-deep)] p-6 text-white">
              <h2 className="font-display text-xl font-semibold">{l.contactTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2"><Mail className="h-4 w-4 text-[color:var(--gold)]" /> {l.labels.email}: <a href={mailto} className="font-semibold underline">{EMAIL}</a></li>
                <li className="flex gap-2"><Phone className="h-4 w-4 text-[color:var(--gold)]" /> {l.labels.phone}: <a href="tel:+989191238554" className="font-semibold">+98 919 123 8554</a></li>
                <li className="flex gap-2"><Phone className="h-4 w-4 text-[color:var(--gold)]" /> {l.labels.office}: <a href="tel:+982144511076" className="font-semibold">+98 21 44511076</a></li>
              </ul>
              <p className="mt-4 text-xs text-white/70">{l.contactNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">{l.faqTitle}</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {l.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            <Link to={SAFFRON_EN_PATH as never} hrefLang="en" className="underline">English</Link>
            {others.map((o) => (
              <span key={o.key}> · <Link to={o.path as never} hrefLang={o.lang} lang={o.lang} className="underline">{o.breadcrumb}</Link></span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
