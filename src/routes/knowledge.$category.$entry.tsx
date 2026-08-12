import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LegalDisclaimer } from "@/components/knowledge/LegalDisclaimer";
import {
  kc,
  categoryBySlug,
  entryById,
  localized,
  NEEDS_VERIFICATION,
  TRANSLATION_UNAVAILABLE,
} from "@/data/knowledge-center";
import { useI18n } from "@/i18n/LanguageProvider";
import { ExternalLink, Printer } from "lucide-react";

export const Route = createFileRoute("/knowledge/$category/$entry")({
  loader: ({ params }) => {
    const cat = categoryBySlug(params.category);
    const e = entryById(params.entry);
    if (!cat || !e || e.category !== cat.slug) throw notFound();
    return { title: e.title.en, summary: e.summary.en, body: e.administeringBody, slug: cat.slug, id: e.id };
  },
  head: ({ loaderData }) => {
    const url = `https://goodarzitrading.lovable.app/knowledge/${loaderData?.slug}/${loaderData?.id}`;
    const desc = `${loaderData?.title}: ${loaderData?.summary || "official instrument reference"} — administered by ${loaderData?.body}. Official source and scope of application, compiled by Goodarzi Trading.`;
    return {
      meta: [
        { title: `${loaderData?.title} — International Trade Instrument | Goodarzi Trading` },
        { name: "description", content: desc.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:title", content: `${loaderData?.title} — Trade Knowledge Center` },
        { property: "og:description", content: desc.slice(0, 158) },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: EntryPage,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border py-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-[color:var(--navy-deep)]">{children}</dd>
    </div>
  );
}

function EntryPage() {
  const { category, entry } = Route.useParams();
  const { lang, dir } = useI18n();
  const cat = categoryBySlug(category)!;
  const e = entryById(entry)!;
  const sum = localized(e.summary, lang);
  const nv = NEEDS_VERIFICATION[lang];

  const L = {
    en: { home: "Knowledge Center", type: "Instrument type", body: "Issuing / administering organization", purpose: "Purpose", scope: "Scope of application", key: "Key provisions", iran: "Status for Iran", source: "Official source", compiled: "Data compiled on", verified: "Last legal verification", status: "Status", print: "Print / save as PDF" },
    fa: { home: "مرکز دانش", type: "نوع سند", body: "سازمان متولی / صادرکننده", purpose: "هدف", scope: "دامنه اعمال", key: "مفاد کلیدی", iran: "وضعیت ایران", source: "منبع رسمی", compiled: "تاریخ گردآوری داده", verified: "آخرین تأیید حقوقی", status: "وضعیت", print: "چاپ / ذخیره PDF" },
    ar: { home: "مركز المعرفة", type: "نوع الصك", body: "الجهة المُصدِرة / المشرفة", purpose: "الغرض", scope: "نطاق التطبيق", key: "الأحكام الرئيسية", iran: "وضع إيران", source: "المصدر الرسمي", compiled: "تاريخ جمع البيانات", verified: "آخر تحقق قانوني", status: "الحالة", print: "طباعة / حفظ PDF" },
  }[lang];

  return (
    <div dir={dir}>
      <PageHero eyebrow={localized(cat.title, lang).value} title={localized(e.title, lang).value} />

      <section className="py-16 print:py-4">
        <div className="container-x max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground print:hidden">
            <Link to="/knowledge" className="hover:text-[color:var(--navy)]">{L.home}</Link>
            <span className="mx-2">/</span>
            <Link to="/knowledge/$category" params={{ category: cat.slug }} className="hover:text-[color:var(--navy)]">
              {localized(cat.title, lang).value}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[color:var(--navy-deep)]">{localized(e.title, lang).value}</span>
          </nav>

          <div className="relative rounded-sm border border-border bg-card p-6 md:p-8">
            <img
              src="/goodarzi-trading-logo.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 m-auto h-40 w-auto opacity-[0.045]"
            />
            <dl className="relative">
              <Row label={L.type}>{e.instrumentType}</Row>
              <Row label={L.body}>{e.administeringBody}</Row>
              <Row label={L.purpose}>
                {sum.value || nv}
                {sum.fallback && <em className="ms-2 text-xs text-muted-foreground">({TRANSLATION_UNAVAILABLE[lang]})</em>}
              </Row>
              <Row label={L.scope}>{e.scope}</Row>
              <Row label={L.key}>{nv}</Row>
              <Row label={L.iran}>{nv}</Row>
              <Row label={L.status}>{e.status}</Row>
              <Row label={L.source}>
                <a
                  href={e.officialSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--gold)]"
                >
                  {e.officialSource} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Row>
              <Row label={L.compiled}>{e.dataCompiledDate}</Row>
              <Row label={L.verified}>{e.lastLegalVerification ?? nv}</Row>
            </dl>

            <div className="mt-6">
              <LegalDisclaimer />
            </div>

            <p className="mt-6 hidden text-center text-[10px] text-muted-foreground print:block">
              GoodarziTrading | https://www.goodarzitrading.ir
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm text-[color:var(--navy)] hover:bg-secondary print:hidden"
          >
            <Printer className="h-4 w-4" /> {L.print}
          </button>
        </div>
      </section>
    </div>
  );
}

export const _entriesCount = kc.registry.entries.length;
