import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LegalDisclaimer } from "@/components/knowledge/LegalDisclaimer";
import { kc, incotermByCode, NEEDS_VERIFICATION } from "@/data/knowledge-center";
import { useI18n } from "@/i18n/LanguageProvider";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/incoterms/$code")({
  loader: ({ params }) => {
    const rule = incotermByCode(params.code);
    if (!rule) throw notFound();
    return { code: rule.code, name: rule.officialName, transport: rule.transport };
  },
  head: ({ loaderData }) => {
    const url = `https://goodarzitrading.lovable.app/incoterms/${loaderData?.code.toLowerCase()}`;
    const desc = `${loaderData?.code} (${loaderData?.name}) under Incoterms® 2020 — ${loaderData?.transport}. Delivery point, risk transfer, cost allocation and documents explained for importers and exporters.`;
    return {
      meta: [
        { title: `${loaderData?.code} Incoterms 2020 — ${loaderData?.name} | Goodarzi Trading` },
        { name: "description", content: desc.slice(0, 158) },
        { name: "keywords", content: `${loaderData?.code}, incoterms 2020, ${loaderData?.name}, international trade, import export Iran, goodarzi trading, اینکوترمز` },
        { property: "og:type", content: "article" },
        { property: "og:title", content: `${loaderData?.code} — Incoterms® 2020` },
        { property: "og:description", content: desc.slice(0, 158) },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: IncotermPage,
});

function IncotermPage() {
  const { code } = Route.useParams();
  const { lang, dir } = useI18n();
  const rule = incotermByCode(code)!;
  const nv = NEEDS_VERIFICATION[lang];

  const L = {
    en: { back: "Incoterms® 2020", transport: "Mode of transport", template: "Rule details", source: "Official source: ICC — International Chamber of Commerce" },
    fa: { back: "اینکوترمز ۲۰۲۰", transport: "شیوه حمل", template: "جزئیات قاعده", source: "منبع رسمی: اتاق بازرگانی بین‌المللی (ICC)" },
    ar: { back: "إنكوترمز 2020", transport: "وسيلة النقل", template: "تفاصيل القاعدة", source: "المصدر الرسمي: غرفة التجارة الدولية (ICC)" },
  }[lang];

  return (
    <div dir={dir}>
      <PageHero eyebrow={`Incoterms® 2020 — ${rule.transport}`} title={`${rule.code} — ${rule.officialName}`} />

      <section className="py-16">
        <div className="container-x max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/incoterms" className="hover:text-[color:var(--navy)]">{L.back}</Link>
            <span className="mx-2">/</span>
            <span className="text-[color:var(--navy-deep)]">{rule.code}</span>
          </nav>

          <div className="rounded-sm border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{L.transport}</p>
            <p className="mt-1 text-[color:var(--navy-deep)]">{rule.transport}</p>

            <h2 className="mt-8 font-display text-xl font-semibold text-[color:var(--navy-deep)]">{L.template}</h2>
            <dl className="mt-4">
              {kc.incoterms.detailTemplate.map((field) => (
                <div key={field} className="border-b border-border py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{field}</dt>
                  <dd className="mt-1.5 text-sm text-[color:var(--navy-deep)]">{nv}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://iccwbo.org/business-solutions/incoterms-rules/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--gold)]"
            >
              {L.source} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {kc.incoterms.rules
              .filter((r) => r.code !== rule.code)
              .map((r) => (
                <Link
                  key={r.code}
                  to="/incoterms/$code"
                  params={{ code: r.code.toLowerCase() }}
                  className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium text-[color:var(--navy)] hover:border-[color:var(--gold)]"
                >
                  {r.code}
                </Link>
              ))}
          </div>

          <div className="mt-10">
            <LegalDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
