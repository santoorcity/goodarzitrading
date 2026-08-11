import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Filter, Database, ChevronDown, Briefcase, FileCheck, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { hsCodes, hsCategories, tariffBreakdown, CUSTOMS_DUTY_RATE, type HSCode } from "@/data/hs-codes";
import { tradeServiceGroups, type TradeService } from "@/data/trade-services";
import { useI18n } from "@/i18n/LanguageProvider";
import { tr } from "@/data/tr";

export const Route = createFileRoute("/hs-code")({
  head: () => ({
    meta: [
      { title: "Trade Services & HS Code Tariff Search — Goodarzi Trading" },
      { name: "keywords", content: "HS Code, کد تعرفه گمرکی, خدمات تجاری, سامانه جامع تجارت, ثبت سفارش, کارت بازرگانی, تخصیص ارز نیما, رفع تعهد ارزی, ترخیص کالا, حقوق ورودی, سود بازرگانی, IRICA tariff, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Trade services and online HS Code tariff search: business card, order registration, currency allocation, permits, customs clearance, export statistical registration and FX commitment settlement." },
      { property: "og:title", content: "Trade Services & HS Code Tariff Search" },
      { property: "og:description", content: "HS Code lookup plus a complete guide to Iranian import and export trade services." },
      { property: "og:url", content: "/hs-code" },
    ],
    links: [{ rel: "canonical", href: "/hs-code" }],
  }),
  component: TradeServicesPage,
});

function TradeServicesPage() {
  const { t, lang, dir } = useI18n();
  const [tab, setTab] = useState<"services" | "tariff">("services");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("__all__");
  const [openRow, setOpenRow] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hsCodes.filter((h) => {
      const matchesQ =
        !q ||
        h.code.includes(q) ||
        h.description.toLowerCase().includes(q) ||
        tr(h.description, lang).toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q) ||
        tr(h.category, lang).toLowerCase().includes(q);
      const matchesC = category === "__all__" || h.category === category;
      return matchesQ && matchesC;
    });
  }, [query, category, lang]);

  return (
    <div dir={dir} className="font-sans">
      <PageHero
        eyebrow={t("trade.eyebrow", "Trade tools")}
        title={t("trade.title", "Trade Services")}
        description={t(
          "trade.description",
          "End-to-end Iranian trade services — business card, order registration, currency allocation, clearance and FX settlement — plus a live customs tariff (HS Code) search.",
        )}
      />

      <section className="border-b border-border bg-card">
        <div className="container-x flex flex-wrap gap-2 py-4">
          <TabButton active={tab === "services"} onClick={() => setTab("services")} icon={<Briefcase className="h-4 w-4" />}>
            {t("trade.tab.services", "Trade services")}
          </TabButton>
          <TabButton active={tab === "tariff"} onClick={() => setTab("tariff")} icon={<Database className="h-4 w-4" />}>
            {t("trade.tab.tariff", "Tariff search (HS Code)")}
          </TabButton>
        </div>
      </section>

      {tab === "services" && <TradeServicesPanel />}

      {tab === "tariff" && (
        <section className="py-14">
          <div className="container-x">
            <div className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-card)] md:p-7">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground ltr:left-4 rtl:right-4" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t("trade.search.placeholder", "Enter a product name or HS code… (e.g. saffron, 08025100)")}
                    className="h-14 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none ring-[color:var(--gold)] focus:ring-2 ltr:pl-12 rtl:pr-12"
                  />
                </div>
                <div className="relative">
                  <Filter className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ltr:left-4 rtl:right-4" />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-14 min-w-[220px] appearance-none rounded-sm border border-input bg-background px-8 text-sm outline-none ring-[color:var(--gold)] focus:ring-2 ltr:pl-11 rtl:pr-11"
                  >
                    <option value="__all__">{t("trade.filter.all", "All chapters")}</option>
                    {hsCategories.map((c) => (
                      <option key={c} value={c}>{tr(c, lang)}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ltr:right-3 rtl:left-3" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Database className="h-3 w-3" /> {hsCodes.length} {t("trade.stats.rows", "tariff lines in the database")}
                </span>
                <span>{results.length} {t("trade.stats.results", "results found")}</span>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 p-4 text-xs leading-6 text-muted-foreground">
              <strong className="text-foreground">{t("trade.formula.title", "How the tariff is calculated:")}</strong>{" "}
              {t(
                "trade.formula.body",
                "Under Iranian customs law the customs duty is a fixed 4% of the customs (CIF) value, and the commercial profit is set per tariff line. Import duty = 4% customs duty + commercial profit. VAT is then applied on top.",
              )}
            </div>

            {/* Desktop table */}
            <div className="mt-8 hidden overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)] md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-sm ltr:text-left rtl:text-right">
                  <thead className="bg-[color:var(--navy-deep)] text-white">
                    <tr>
                      <th className="px-4 py-4 text-[12px] font-medium">{t("trade.col.code", "HS code")}</th>
                      <th className="px-4 py-4 text-[12px] font-medium">{t("trade.col.desc", "Description")}</th>
                      <th className="px-4 py-4 text-[12px] font-medium">{t("trade.col.chapter", "Chapter")}</th>
                      <th className="px-4 py-4 text-center text-[12px] font-medium">{t("trade.col.customs", "Customs duty")}</th>
                      <th className="px-4 py-4 text-center text-[12px] font-medium">{t("trade.col.profit", "Commercial profit")}</th>
                      <th className="px-4 py-4 text-center text-[12px] font-medium">{t("trade.col.entry", "Import duty (total)")}</th>
                      <th className="px-4 py-4 text-center text-[12px] font-medium">{t("trade.col.vat", "VAT")}</th>
                      <th className="px-4 py-4 text-center text-[12px] font-medium">{t("trade.col.unit", "Unit")}</th>
                      <th className="px-4 py-4 text-[12px] font-medium">{t("trade.col.permits", "Permits / notes")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="px-6 py-12 text-center text-muted-foreground">
                          {t("trade.empty", "No results. Try a different keyword or code.")}
                        </td>
                      </tr>
                    ) : (
                      results.map((h) => <DesktopRow key={h.code} h={h} />)
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="mt-8 space-y-3 md:hidden">
              {results.length === 0 ? (
                <div className="rounded-sm border border-border bg-card p-8 text-center text-sm text-muted-foreground">
                  {t("trade.empty", "No results. Try a different keyword or code.")}
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
              <strong className="text-foreground">{t("trade.note.label", "Please note:")}</strong>{" "}
              {t(
                "trade.note.tariff",
                "This table is indicative guidance. The official references are the Ministry of Industry, Mine and Trade export-import regulations book and the IRICA EPL system. Rates are revised annually — contact our specialists for the binding classification before order registration or clearance.",
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function DesktopRow({ h }: { h: HSCode }) {
  const { lang } = useI18n();
  const b = tariffBreakdown(h);
  return (
    <tr className="border-t border-border transition-colors hover:bg-secondary/40">
      <td className="px-4 py-4 font-mono text-[color:var(--navy-deep)]" dir="ltr">{h.code}</td>
      <td className="px-4 py-4 text-[color:var(--navy)]">{tr(h.description, lang)}</td>
      <td className="px-4 py-4">
        <span className="inline-flex rounded-sm bg-secondary px-2.5 py-1 text-xs text-[color:var(--navy)]">{tr(h.category, lang)}</span>
      </td>
      <td className="px-4 py-4 text-center text-[color:var(--navy)]">{b.customsDuty}%</td>
      <td className="px-4 py-4 text-center font-medium text-[color:var(--gold-strong)]">{b.commercialProfit}%</td>
      <td className="px-4 py-4 text-center font-medium text-[color:var(--navy)]">{b.importDuty}%</td>
      <td className="px-4 py-4 text-center text-[color:var(--navy)]">{b.vat}%</td>
      <td className="px-4 py-4 text-center text-xs text-muted-foreground">{tr(h.unit, lang)}</td>
      <td className="px-4 py-4 text-xs text-muted-foreground">{h.permits ? tr(h.permits, lang) : "—"}</td>
    </tr>
  );
}

function MobileCard({ h, open, onToggle }: { h: HSCode; open: boolean; onToggle: () => void }) {
  const { t, lang } = useI18n();
  const b = tariffBreakdown(h);
  return (
    <div className="rounded-sm border border-border bg-card p-4 shadow-[var(--shadow-card)]">
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-3 ltr:text-left rtl:text-right">
        <div className="flex-1">
          <div className="font-mono text-sm text-[color:var(--navy-deep)]" dir="ltr">{h.code}</div>
          <div className="mt-1 text-sm text-[color:var(--navy)]">{tr(h.description, lang)}</div>
          <div className="mt-2 inline-flex rounded-sm bg-secondary px-2 py-0.5 text-[11px] text-[color:var(--navy)]">{tr(h.category, lang)}</div>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
          <Field label={t("trade.col.customs", "Customs duty")} value={`${b.customsDuty}%`} />
          <Field label={t("trade.col.profit", "Commercial profit")} value={`${b.commercialProfit}%`} accent />
          <Field label={t("trade.col.entry", "Import duty (total)")} value={`${b.importDuty}%`} />
          <Field label={t("trade.col.vat", "VAT")} value={`${b.vat}%`} />
          <Field label={t("trade.col.unit", "Unit")} value={tr(h.unit, lang)} />
          <Field label={t("trade.col.fixed", "Fixed rate")} value={`${CUSTOMS_DUTY_RATE}%`} />
          {h.permits && (
            <div className="col-span-2 rounded-sm bg-secondary/60 p-2 text-[11px] text-muted-foreground">
              <strong className="text-foreground">{t("trade.col.permits", "Permits / notes")}:</strong> {tr(h.permits, lang)}
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

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors ${
        active
          ? "bg-[color:var(--navy-deep)] text-white"
          : "bg-secondary text-[color:var(--navy)] hover:bg-secondary/70"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function TradeServicesPanel() {
  const { t, lang } = useI18n();
  const [group, setGroup] = useState(tradeServiceGroups[0].key);
  const [open, setOpen] = useState<string | null>(null);
  const active = tradeServiceGroups.find((g) => g.key === group)!;

  return (
    <section className="py-14">
      <div className="container-x">
        <div className="flex flex-wrap gap-2">
          {tradeServiceGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => {
                setGroup(g.key);
                setOpen(null);
              }}
              className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                g.key === group
                  ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--navy-deep)]"
                  : "border-border bg-card text-muted-foreground hover:text-[color:var(--navy)]"
              }`}
            >
              {tr(g.title, lang)}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{tr(active.subtitle, lang)}</p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {active.services.map((s) => (
            <ServiceCard
              key={s.title}
              s={s}
              open={open === s.title}
              onToggle={() => setOpen(open === s.title ? null : s.title)}
            />
          ))}
        </div>

        <div className="mt-8 rounded-sm border border-border/60 bg-secondary/40 p-4 text-xs leading-6 text-muted-foreground">
          <strong className="text-foreground">{t("trade.note.label", "Please note:")}</strong>{" "}
          {t(
            "trade.note.services",
            "These workflows follow the Iranian Integrated Trade System (NTSW) and the single-window cross-border trade procedures. Official submissions are made on ntsw.ir; Goodarzi Trading handles and follows up the entire process on your behalf.",
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, open, onToggle }: { s: TradeService; open: boolean; onToggle: () => void }) {
  const { t, lang } = useI18n();
  return (
    <div className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-3 ltr:text-left rtl:text-right">
        <div>
          <h3 className="text-base font-medium text-[color:var(--navy-deep)]">{tr(s.title, lang)}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{tr(s.description, lang)}</p>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-4 space-y-4 border-t border-border pt-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[color:var(--navy)]">
              <FileCheck className="h-4 w-4 text-[color:var(--gold-strong)]" /> {t("trade.steps", "Process steps")}
            </div>
            <ol className="space-y-1.5 text-xs leading-6 text-muted-foreground">
              {s.steps.map((st, i) => (
                <li key={st} className="flex gap-2">
                  <span className="text-[color:var(--gold-strong)]">{i + 1}.</span>
                  <span>{tr(st, lang)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium text-[color:var(--navy)]">{t("trade.docs", "Required documents")}</div>
            <ul className="flex flex-wrap gap-2">
              {s.docs.map((d) => (
                <li key={d} className="rounded-sm bg-secondary px-2.5 py-1 text-[11px] text-[color:var(--navy)]">
                  {tr(d, lang)}
                </li>
              ))}
            </ul>
          </div>
          {s.url && (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[color:var(--gold-strong)] hover:underline"
            >
              {t("trade.official", "Official portal")} <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
