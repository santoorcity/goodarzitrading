import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Filter, Database, ChevronDown, Briefcase, FileCheck, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { hsCodes, hsCategories, type HSCode } from "@/data/hs-codes";
import { tradeServiceGroups, type TradeService } from "@/data/trade-services";


export const Route = createFileRoute("/hs-code")({
  head: () => ({
    meta: [
      { title: "جستجوی تعرفه گمرکی ۱۴۰۵ — HS Code و سود بازرگانی | گودرزی تریدینگ" },
      { name: "keywords", content: "HS Code, کد تعرفه گمرکی, حقوق ورودی, سود بازرگانی, IRICA tariff, جستجوی تعرفه, کتاب مقررات واردات, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "جستجوی آنلاین کد تعرفه گمرکی (HS Code) کالاهای وارداتی و صادراتی ایران به همراه حقوق ورودی، سود بازرگانی، ارزش افزوده و مجوزهای لازم." },
      { property: "og:title", content: "جستجوی تعرفه گمرکی ۱۴۰۵ — HS Code" },
      { property: "og:description", content: "ابزار سریع جستجوی HS Code و محاسبه حقوق ورودی کالا." },
      { property: "og:url", content: "/hs-code" },
    ],
    links: [{ rel: "canonical", href: "/hs-code" }],
  }),
  component: HSCodePage,
});

function HSCodePage() {
  const [tab, setTab] = useState<"tariff" | "services">("tariff");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("همه");
  const [openRow, setOpenRow] = useState<string | null>(null);

  const categories = useMemo(() => ["همه", ...hsCategories], []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hsCodes.filter((h) => {
      const matchesQ =
        !q ||
        h.code.includes(q) ||
        h.description.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q);
      const matchesC = category === "همه" || h.category === category;
      return matchesQ && matchesC;
    });
  }, [query, category]);

  return (
    <div dir="rtl" className="font-sans">
      <PageHero
        eyebrow="ابزار بازرگانی"
        title="جستجوی تعرفه گمرکی و خدمات تجاری"
        description="کد HS، حقوق ورودی، سود بازرگانی و مجوزها را جستجو کنید و از خدمات تجاری سامانه جامع تجارت — از کارت بازرگانی تا ثبت سفارش، تأمین ارز، ترخیص و رفع تعهد ارزی — بهره ببرید."
      />

      <section className="border-b border-border bg-card">
        <div className="container-x flex gap-2 py-4">
          <TabButton active={tab === "tariff"} onClick={() => setTab("tariff")} icon={<Database className="h-4 w-4" />}>
            جستجوی تعرفه (HS Code)
          </TabButton>
          <TabButton active={tab === "services"} onClick={() => setTab("services")} icon={<Briefcase className="h-4 w-4" />}>
            خدمات تجاری
          </TabButton>
        </div>
      </section>

      {tab === "services" && <TradeServicesPanel />}

      {tab === "tariff" && (


      <section className="py-14">
        <div className="container-x">
          {/* نوار جستجو */}
          <div className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-card)] md:p-7">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="نام کالا یا کد HS را وارد کنید... (مثلاً: زعفران، 08025100)"
                  className="h-14 w-full rounded-sm border border-input bg-background pr-12 pl-4 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
                />
              </div>
              <div className="relative">
                <Filter className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-14 min-w-[220px] appearance-none rounded-sm border border-input bg-background pr-11 pl-8 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Database className="h-3 w-3" /> {hsCodes.length} ردیف تعرفه در پایگاه داده
              </span>
              <span>{results.length} نتیجه یافت شد</span>
            </div>
          </div>

          {/* جدول نتایج - دسکتاپ */}
          <div className="mt-8 hidden overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)] md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-[color:var(--navy-deep)] text-white">
                  <tr>
                    <th className="px-4 py-4 font-medium text-[12px]">کد تعرفه</th>
                    <th className="px-4 py-4 font-medium text-[12px]">شرح کالا</th>
                    <th className="px-4 py-4 font-medium text-[12px]">فصل</th>
                    <th className="px-4 py-4 text-center font-medium text-[12px]">حقوق ورودی</th>
                    <th className="px-4 py-4 text-center font-medium text-[12px]">سود بازرگانی</th>
                    <th className="px-4 py-4 text-center font-medium text-[12px]">ارزش افزوده</th>
                    <th className="px-4 py-4 text-center font-medium text-[12px]">واحد</th>
                    <th className="px-4 py-4 font-medium text-[12px]">ملاحظات / مجوز</th>
                  </tr>
                </thead>
                <tbody>
                  {results.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-muted-foreground">
                        نتیجه‌ای یافت نشد. کلیدواژه یا کد دیگری را امتحان کنید.
                      </td>
                    </tr>
                  ) : (
                    results.map((h) => <DesktopRow key={h.code} h={h} />)
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* کارت‌های موبایل */}
          <div className="mt-8 space-y-3 md:hidden">
            {results.length === 0 ? (
              <div className="rounded-sm border border-border bg-card p-8 text-center text-sm text-muted-foreground">
                نتیجه‌ای یافت نشد.
              </div>
            ) : (
              results.map((h) => (
                <MobileCard
                  key={h.code}
                  h={h}
                  open={openRow === h.code}
                  onToggle={() => setOpenRow(openRow === h.code ? null : h.code)}
                />
              ))
            )}
          </div>

          <div className="mt-8 rounded-sm border border-border/60 bg-secondary/40 p-4 text-xs leading-6 text-muted-foreground">
            <strong className="text-foreground">توجه:</strong> اطلاعات این جدول جهت راهنمایی است و مرجع رسمی، کتاب مقررات صادرات و واردات وزارت صمت و سامانه EPL گمرک ایران می‌باشد. برای طبقه‌بندی رسمی، ثبت سفارش و ترخیص، با کارشناسان گودرزی تریدینگ تماس بگیرید.
          </div>
        </div>
      </section>
      )}
    </div>

  );
}

function DesktopRow({ h }: { h: HSCode }) {
  const total = h.importDuty + h.commercialProfit;
  return (
    <tr className="border-t border-border transition-colors hover:bg-secondary/40">
      <td className="px-4 py-4 font-mono text-[color:var(--navy-deep)]" dir="ltr">{h.code}</td>
      <td className="px-4 py-4 text-[color:var(--navy)]">{h.description}</td>
      <td className="px-4 py-4">
        <span className="inline-flex rounded-sm bg-secondary px-2.5 py-1 text-xs text-[color:var(--navy)]">{h.category}</span>
      </td>
      <td className="px-4 py-4 text-center font-medium text-[color:var(--navy)]">{h.importDuty}٪</td>
      <td className="px-4 py-4 text-center font-medium text-[color:var(--gold-strong)]">{h.commercialProfit}٪</td>
      <td className="px-4 py-4 text-center text-[color:var(--navy)]">{h.vat}٪</td>
      <td className="px-4 py-4 text-center text-xs text-muted-foreground">{h.unit}</td>
      <td className="px-4 py-4 text-xs text-muted-foreground">
        {h.permits ?? "—"}
        <div className="mt-1 text-[10px] text-muted-foreground/70">مجموع تعرفه: {total}٪</div>
      </td>
    </tr>
  );
}

function MobileCard({ h, open, onToggle }: { h: HSCode; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-sm border border-border bg-card p-4 shadow-[var(--shadow-card)]">
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-3 text-right">
        <div className="flex-1">
          <div className="font-mono text-sm text-[color:var(--navy-deep)]" dir="ltr">{h.code}</div>
          <div className="mt-1 text-sm text-[color:var(--navy)]">{h.description}</div>
          <div className="mt-2 inline-flex rounded-sm bg-secondary px-2 py-0.5 text-[11px] text-[color:var(--navy)]">{h.category}</div>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
          <Field label="حقوق ورودی" value={`${h.importDuty}٪`} />
          <Field label="سود بازرگانی" value={`${h.commercialProfit}٪`} accent />
          <Field label="ارزش افزوده" value={`${h.vat}٪`} />
          <Field label="واحد" value={h.unit} />
          {h.permits && (
            <div className="col-span-2 rounded-sm bg-secondary/60 p-2 text-[11px] text-muted-foreground">
              <strong className="text-foreground">مجوز/ملاحظات:</strong> {h.permits}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-sm bg-secondary/40 p-2">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className={`mt-1 font-medium ${accent ? "text-[color:var(--gold-strong)]" : "text-[color:var(--navy)]"}`}>{value}</div>
    </div>
  );
}
