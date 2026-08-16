import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { kc, localized, entriesForCategory } from "@/data/knowledge-center";
import { useI18n } from "@/i18n/LanguageProvider";

const L = {
  en: {
    eyebrow: "Instrument registry",
    title: "International Trade Conventions, Rules & Model Contracts",
    desc: "A curated directory of conventions, uniform rules and model contracts used in cross-border trade — organised by subject, with the official source for each instrument.",
    search: "Search conventions, rules, contracts…",
    all: "All categories",
    filterType: "Document type",
    allTypes: "All types",
    items: "items",
    open: "Open category",
    none: "No category matches your search.",
  },
  fa: {
    eyebrow: "فهرست اسناد",
    title: "کنوانسیون‌ها، مقررات و قراردادهای نمونه تجارت بین‌الملل",
    desc: "فهرستی گزیده از کنوانسیون‌ها، مقررات متحدالشکل و قراردادهای نمونه کاربردی در تجارت فرامرزی — دسته‌بندی موضوعی همراه با منبع رسمی هر سند.",
    search: "جستجوی کنوانسیون، مقررات، قرارداد…",
    all: "همه دسته‌ها",
    filterType: "نوع سند",
    allTypes: "همه انواع",
    items: "مورد",
    open: "مشاهده دسته",
    none: "دسته‌ای با جستجوی شما مطابقت ندارد.",
  },
  ar: {
    eyebrow: "سجل الصكوك",
    title: "اتفاقيات وقواعد وعقود نموذجية للتجارة الدولية",
    desc: "دليل مختار للاتفاقيات والقواعد الموحدة والعقود النموذجية المستخدمة في التجارة عبر الحدود، مرتب حسب الموضوع مع المصدر الرسمي لكل صك.",
    search: "ابحث في الاتفاقيات والقواعد والعقود…",
    all: "كل الفئات",
    filterType: "نوع الوثيقة",
    allTypes: "كل الأنواع",
    items: "عنصر",
    open: "عرض الفئة",
    none: "لا توجد فئة مطابقة لبحثك.",
  },
} as const;

export function InstrumentDirectory() {
  const { lang, dir } = useI18n();
  const c = L[lang];
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");

  const types = useMemo(
    () => Array.from(new Set(kc.registry.entries.map((e) => e.instrumentType))).sort(),
    [],
  );

  const cats = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return kc.categories
      .map((cat) => {
        const entries = entriesForCategory(cat.slug);
        return { cat, entries };
      })
      .filter(({ cat, entries }) =>
        entries.length > 0 || cat.slug === "incoterms" || cat.slug === "itc-model-contracts",
      )
      .filter(({ cat, entries }) => {
        if (type !== "all" && !entries.some((e) => e.instrumentType === type)) return false;
        if (!needle) return true;
        const hay = [
          localized(cat.title, lang).value,
          cat.title.en,
          cat.slug,
          ...entries.flatMap((e) => [e.title.en, e.title.fa ?? "", e.title.ar ?? "", e.instrumentType, e.administeringBody]),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(needle);
      });
  }, [q, type, lang]);

  const Chevron = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section dir={dir} className="bg-secondary/40 py-20" id="instruments">
      <div className="container-x">
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
          {c.title}
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{c.desc}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ltr:left-3 rtl:right-3" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={c.search}
              aria-label={c.search}
              className="w-full rounded-sm border border-border bg-background py-3 text-sm outline-none focus:border-[color:var(--gold)] ltr:pl-10 ltr:pr-4 rtl:pr-10 rtl:pl-4"
            />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label={c.filterType}
            className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
          >
            <option value="all">{c.allTypes}</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ cat, entries }) => {
            const count =
              cat.slug === "incoterms"
                ? kc.incoterms.rules.length
                : cat.slug === "itc-model-contracts"
                  ? kc.itcModelContracts.length
                  : entries.length;
            return (
              <Link
                key={cat.slug}
                to="/knowledge/$category"
                params={{ category: cat.slug }}
                className="group flex flex-col justify-between rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {cat.id}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[color:var(--navy-deep)]">
                    {localized(cat.title, lang).value}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {count} {c.items}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-[color:var(--navy)] group-hover:text-[color:var(--gold)]">
                    {c.open} <Chevron className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {cats.length === 0 && <p className="mt-10 text-center text-muted-foreground">{c.none}</p>}

      </div>
    </section>
  );
}
