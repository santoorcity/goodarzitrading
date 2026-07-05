import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/incoterms")({
  head: () => ({
    meta: [
      { title: "Incoterms 2020 — Goodarzi Trading" },
      { name: "description", content: "The 11 Incoterms 2020 rules explained in English and Persian — EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF." },
      { property: "og:title", content: "Incoterms 2020 — Goodarzi Trading" },
      { property: "og:description", content: "Full reference for the 11 Incoterms 2020 rules with Persian and English descriptions." },
      { property: "og:url", content: "/incoterms" },
    ],
    links: [{ rel: "canonical", href: "/incoterms" }],
  }),
  component: IncotermsPage,
});

type Term = {
  code: string;
  name: string;
  nameFa: string;
  mode: "Any mode" | "Sea & inland waterway";
  en: string;
  fa: string;
};

const terms: Term[] = [
  {
    code: "EXW",
    name: "Ex Works",
    nameFa: "تحویل در محل کار",
    mode: "Any mode",
    en: "Seller makes the goods available at their premises. Buyer bears all costs and risks from that point, including loading and export clearance.",
    fa: "فروشنده کالا را در محل خود (کارخانه یا انبار) آماده تحویل می‌کند. تمام هزینه‌ها و ریسک‌ها از جمله بارگیری و ترخیص صادراتی بر عهده خریدار است.",
  },
  {
    code: "FCA",
    name: "Free Carrier",
    nameFa: "تحویل به حمل‌کننده",
    mode: "Any mode",
    en: "Seller delivers goods, cleared for export, to a carrier nominated by the buyer at an agreed place. Risk transfers when the goods are loaded onto that carrier.",
    fa: "فروشنده کالا را پس از ترخیص صادراتی به حمل‌کننده‌ای که خریدار معرفی کرده در محل توافق‌شده تحویل می‌دهد. با بارگیری روی وسیله حمل، ریسک منتقل می‌شود.",
  },
  {
    code: "CPT",
    name: "Carriage Paid To",
    nameFa: "کرایه حمل پرداخت شده تا",
    mode: "Any mode",
    en: "Seller pays freight to the named destination but risk transfers to the buyer when the goods are handed over to the first carrier.",
    fa: "فروشنده کرایه حمل تا مقصد معین را پرداخت می‌کند، اما ریسک به‌محض تحویل کالا به اولین حمل‌کننده به خریدار منتقل می‌شود.",
  },
  {
    code: "CIP",
    name: "Carriage and Insurance Paid To",
    nameFa: "کرایه حمل و بیمه پرداخت شده تا",
    mode: "Any mode",
    en: "Same as CPT, but seller also arranges and pays for cargo insurance at the maximum (Institute Cargo Clauses A) level to the destination.",
    fa: "مانند CPT است، اما فروشنده بیمه باربری با بالاترین سطح پوشش (کلاز A) را تا مقصد نیز تهیه و پرداخت می‌کند.",
  },
  {
    code: "DAP",
    name: "Delivered at Place",
    nameFa: "تحویل در محل مقصد",
    mode: "Any mode",
    en: "Seller delivers the goods ready for unloading at the named destination. Import clearance and duties are the buyer's responsibility.",
    fa: "فروشنده کالا را در محل مقصد تعیین‌شده و آماده تخلیه تحویل می‌دهد. ترخیص و حقوق ورودی بر عهده خریدار است.",
  },
  {
    code: "DPU",
    name: "Delivered at Place Unloaded",
    nameFa: "تحویل و تخلیه در محل مقصد",
    mode: "Any mode",
    en: "Seller delivers and unloads the goods at the named destination. This is the only Incoterm that requires the seller to unload.",
    fa: "فروشنده کالا را در محل مقصد تحویل داده و تخلیه می‌کند. تنها اینکوترمی است که تخلیه بار توسط فروشنده الزامی است.",
  },
  {
    code: "DDP",
    name: "Delivered Duty Paid",
    nameFa: "تحویل با پرداخت حقوق و عوارض",
    mode: "Any mode",
    en: "Seller bears all costs and risks to deliver the goods to the destination, including import clearance, duties and taxes.",
    fa: "فروشنده تمام هزینه‌ها و ریسک‌ها تا تحویل کالا در مقصد، از جمله ترخیص، حقوق ورودی و مالیات را بر عهده دارد. حداکثر تعهد برای فروشنده.",
  },
  {
    code: "FAS",
    name: "Free Alongside Ship",
    nameFa: "تحویل در کنار کشتی",
    mode: "Sea & inland waterway",
    en: "Seller delivers when goods are placed alongside the vessel at the named port of shipment. Risk transfers at that point.",
    fa: "فروشنده کالا را در کنار کشتی در بندر بارگیری تعیین‌شده قرار می‌دهد و ریسک از همان لحظه منتقل می‌شود.",
  },
  {
    code: "FOB",
    name: "Free on Board",
    nameFa: "تحویل روی عرشه کشتی",
    mode: "Sea & inland waterway",
    en: "Seller delivers goods on board the vessel at the named port of shipment, cleared for export. Risk transfers when goods are on board.",
    fa: "فروشنده کالا را روی عرشه کشتی در بندر بارگیری و پس از ترخیص صادراتی تحویل می‌دهد. ریسک با قرارگیری کالا روی عرشه منتقل می‌شود.",
  },
  {
    code: "CFR",
    name: "Cost and Freight",
    nameFa: "قیمت و کرایه حمل",
    mode: "Sea & inland waterway",
    en: "Seller pays cost and freight to the destination port, but risk transfers to the buyer once the goods are on board at the origin port.",
    fa: "فروشنده هزینه کالا و کرایه حمل تا بندر مقصد را پرداخت می‌کند، اما ریسک از زمان قرارگیری کالا روی عرشه در بندر مبدأ به خریدار منتقل می‌شود.",
  },
  {
    code: "CIF",
    name: "Cost, Insurance and Freight",
    nameFa: "قیمت، بیمه و کرایه حمل",
    mode: "Sea & inland waterway",
    en: "Same as CFR, plus seller arranges minimum cargo insurance (Institute Cargo Clauses C) to the destination port.",
    fa: "مانند CFR است، اما فروشنده حداقل پوشش بیمه باربری (کلاز C) را تا بندر مقصد نیز تهیه می‌کند.",
  },
];

function IncotermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="Incoterms 2020."
        description="The 11 rules of the International Chamber of Commerce that define the responsibilities of buyers and sellers in international trade — explained in English and Persian."
      />
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {terms.map((t) => (
              <article
                key={t.code}
                className="rounded-sm border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">
                      {t.code} — {t.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground" dir="rtl">
                      {t.nameFa}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-[color:var(--navy)]">
                    {t.mode}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{t.en}</p>
                <p
                  className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-foreground/80"
                  dir="rtl"
                >
                  {t.fa}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Source: ICC Incoterms® 2020. This page is a summary for reference and does not
            replace the official ICC publication.
          </p>
        </div>
      </section>
    </>
  );
}
