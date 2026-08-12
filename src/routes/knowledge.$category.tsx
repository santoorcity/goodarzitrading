import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LegalDisclaimer } from "@/components/knowledge/LegalDisclaimer";
import {
  kc,
  categoryBySlug,
  entriesForCategory,
  localized,
  NEEDS_VERIFICATION,
  TRANSLATION_UNAVAILABLE,
} from "@/data/knowledge-center";
import { useI18n } from "@/i18n/LanguageProvider";
import { ChevronLeft, ChevronRight, FileWarning, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/knowledge/$category")({
  loader: ({ params }) => {
    const cat = categoryBySlug(params.category);
    if (!cat) throw notFound();
    return { slug: cat.slug, title: cat.title.en };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Knowledge";
    const url = `https://goodarzitrading.lovable.app/knowledge/${loaderData?.slug ?? ""}`;
    const desc = `${title} — conventions, uniform rules and model contracts used in international trade, with official sources. Reference library by Goodarzi Trading, Tehran.`;
    return {
      meta: [
        { title: `${title} — International Trade Knowledge Center | Goodarzi Trading` },
        { name: "description", content: desc },
        { name: "keywords", content: `${title}, international trade law, conventions, import export Iran, goodarzi trading, تجارت بین الملل, کنوانسیون بازرگانی` },
        { property: "og:type", content: "article" },
        { property: "og:title", content: `${title} — Trade Knowledge Center` },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const { lang, dir } = useI18n();
  const cat = categoryBySlug(category)!;
  const entries = entriesForCategory(category);
  const priority = kc.priorityEntries[category] ?? [];
  const Chevron = dir === "rtl" ? ChevronLeft : ChevronRight;

  const label = {
    en: { back: "Knowledge Center", soon: "This section is under development", soonDesc: "We are still compiling verified entries for this category. Absence of entries here does not mean no such instruments exist.", instruments: "Instruments", priority: "Priority instruments (pending verification)", contracts: "Model contracts", articles: "Short version — articles", standardNote: "Standard Version", view: "View" },
    fa: { back: "مرکز دانش", soon: "این بخش در حال تکمیل است", soonDesc: "گردآوری موارد تأییدشده این دسته هنوز کامل نشده است. نبودن مورد در اینجا به معنای نبودن چنین اسنادی نیست.", instruments: "اسناد", priority: "اسناد اولویت‌دار (در انتظار تأیید)", contracts: "قراردادهای نمونه", articles: "نسخه کوتاه — مواد", standardNote: "نسخه استاندارد", view: "مشاهده" },
    ar: { back: "مركز المعرفة", soon: "هذا القسم قيد الإعداد", soonDesc: "لا يزال جمع المواد الموثقة لهذه الفئة غير مكتمل. غياب المواد هنا لا يعني عدم وجود مثل هذه الصكوك.", instruments: "الصكوك", priority: "صكوك ذات أولوية (بانتظار التحقق)", contracts: "العقود النموذجية", articles: "النسخة القصيرة — المواد", standardNote: "النسخة القياسية", view: "عرض" },
  }[lang];

  const isIncoterms = cat.slug === "incoterms";
  const isItc = cat.slug === "itc-model-contracts";
  const empty = !isIncoterms && !isItc && entries.length === 0 && priority.length === 0;

  return (
    <div dir={dir}>
      <PageHero eyebrow={cat.id} title={localized(cat.title, lang).value} />

      <section className="py-16">
        <div className="container-x max-w-5xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/knowledge" className="hover:text-[color:var(--navy)]">
              {label.back}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[color:var(--navy-deep)]">{localized(cat.title, lang).value}</span>
          </nav>

          {empty && (
            <div className="rounded-sm border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 p-8">
              <div className="flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
                <FileWarning className="h-5 w-5" /> {label.soon}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{label.soonDesc}</p>
            </div>
          )}

          {isIncoterms && (
            <div className="grid gap-3 sm:grid-cols-2">
              {kc.incoterms.rules.map((r) => (
                <Link
                  key={r.code}
                  to="/incoterms/$code"
                  params={{ code: r.code.toLowerCase() }}
                  className="group flex items-center justify-between rounded-sm border border-border bg-card p-4 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span>
                    <span className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{r.code}</span>
                    <span className="ms-2 text-sm text-muted-foreground">{r.officialName}</span>
                    <span className="block text-xs text-muted-foreground">{r.transport}</span>
                  </span>
                  <Chevron className="h-4 w-4 text-muted-foreground group-hover:text-[color:var(--gold)]" />
                </Link>
              ))}
            </div>
          )}

          {isItc && (
            <div className="space-y-4">
              {kc.itcModelContracts.map((m) => (
                <article key={m.chapter} className="rounded-sm border border-border bg-card p-5">
                  <h2 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">
                    {m.chapter}. {localized(m.title, lang).value}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{m.modelContract}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.source}</p>
                  {m.chapter === 3 && (
                    <div className="mt-4 space-y-3 border-t border-border pt-4">
                      <div>
                        <h3 className="text-sm font-semibold text-[color:var(--navy)]">{label.articles}</h3>
                        <ol className="mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                          {kc.internationalSaleOfGoodsShortVersionArticles.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ol>
                      </div>
                      <p className="text-sm">
                        <span className="font-semibold text-[color:var(--navy)]">{label.standardNote}: </span>
                        <span className="text-muted-foreground">{NEEDS_VERIFICATION[lang]}</span>
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}

          {entries.length > 0 && (
            <>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{label.instruments}</h2>
              <div className="mt-5 grid gap-3">
                {entries.map((e) => {
                  const sum = localized(e.summary, lang);
                  return (
                    <Link
                      key={e.id}
                      to="/knowledge/$category/$entry"
                      params={{ category: cat.slug, entry: e.id }}
                      className="group flex items-start justify-between gap-4 rounded-sm border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
                    >
                      <span>
                        <span className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">
                          {localized(e.title, lang).value}
                        </span>
                        <span className="ms-2 rounded-sm bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {e.instrumentType}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {sum.value || NEEDS_VERIFICATION[lang]}
                          {sum.fallback && (
                            <em className="ms-2 text-xs">({TRANSLATION_UNAVAILABLE[lang]})</em>
                          )}
                        </span>
                      </span>
                      <Chevron className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-[color:var(--gold)]" />
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          {priority.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">
                {label.priority}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {priority.map((p) => (
                  <li key={p.name} className="rounded-sm border border-border bg-card p-4">
                    <span className="block font-medium text-[color:var(--navy-deep)]">
                      {lang === "fa" ? (p.nameFa ?? p.name) : lang === "ar" ? (p.nameAr ?? p.name) : p.name}
                    </span>
                    {p.classification && (
                      <span className="text-xs text-muted-foreground">{p.classification}</span>
                    )}
                    <span className="mt-1 block text-xs text-[color:var(--navy)]">{NEEDS_VERIFICATION[lang]}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-12">
            <LegalDisclaimer />
          </div>

          <a
            href="https://www.goodarzitrading.ir"
            className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-[color:var(--navy)]"
          >
            GoodarziTrading <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
