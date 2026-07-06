import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Package, ArrowRight } from "lucide-react";

type Product = {
  slug: string;
  name: string;
  nameFa: string;
  hs: string;
  moq: string;
  packaging: string;
  origin: string;
  grades: string;
  desc: string;
  emoji: string;
};

const PRODUCTS: Product[] = [
  {
    slug: "saffron",
    name: "Iranian Saffron",
    nameFa: "زعفران ایرانی",
    hs: "0910.20",
    moq: "1 kg",
    packaging: "0.1g – 1kg bulk / private label",
    origin: "Khorasan, Iran",
    grades: "Sargol · Negin · Super Negin · Pushal",
    desc: "Premium Iranian saffron with ISO 3632 category I certification. Highest crocin, safranal & picrocrocin content in the world.",
    emoji: "🌺",
  },
  {
    slug: "pistachio",
    name: "Iranian Pistachio",
    nameFa: "پسته ایرانی",
    hs: "0802.51",
    moq: "1 MT",
    packaging: "10kg / 25kg vacuum, jute bags",
    origin: "Kerman, Rafsanjan",
    grades: "Akbari · Ahmad Aghaei · Kalleh Ghouchi · Fandoghi",
    desc: "Round & long Iranian pistachios (raw, roasted, salted). Aflatoxin-tested & phytosanitary-certified for EU, GCC, and Asian markets.",
    emoji: "🥜",
  },
  {
    slug: "dates",
    name: "Iranian Dates",
    nameFa: "خرمای ایرانی",
    hs: "0804.10",
    moq: "5 MT",
    packaging: "5kg / 10kg cartons, retail packs",
    origin: "Bam, Khuzestan, Bushehr",
    grades: "Mazafati · Piarom · Zahedi · Rabbi · Kabkab",
    desc: "Fresh & semi-dry dates including the world-famous Piarom (chocolate date) and Mazafati soft dates.",
    emoji: "🌴",
  },
  {
    slug: "dried-fruits",
    name: "Dried Fruits & Nuts",
    nameFa: "خشکبار",
    hs: "0813 / 0802",
    moq: "1 MT",
    packaging: "Bulk / private label",
    origin: "Iran (multi-region)",
    grades: "Raisins · Barberry · Figs · Almonds · Walnuts",
    desc: "Full range of Iranian dried fruits and nuts, sorted and cleaned to international export standards.",
    emoji: "🌰",
  },
  {
    slug: "handwoven-carpets",
    name: "Persian Handwoven Carpets",
    nameFa: "فرش دستباف",
    hs: "5701.10",
    moq: "1 pc",
    packaging: "Rolled, wrapped, sealed",
    origin: "Tabriz, Kashan, Isfahan, Qom",
    grades: "Silk · Wool · Silk-Wool",
    desc: "Authentic Persian carpets with certificate of origin. City & tribal designs, custom sizes available.",
    emoji: "🧶",
  },
  {
    slug: "medicinal-herbs",
    name: "Medicinal Herbs & Spices",
    nameFa: "گیاهان دارویی و ادویه",
    hs: "1211 / 0909",
    moq: "500 kg",
    packaging: "PP / paper bags",
    origin: "Iran",
    grades: "Cumin · Coriander · Fennel · Damask Rose",
    desc: "Whole & ground herbs and spices, lab-tested for pesticide residue. Organic options available.",
    emoji: "🌿",
  },
  {
    slug: "bitumen",
    name: "Bitumen & Petrochemicals",
    nameFa: "قیر و محصولات پتروشیمی",
    hs: "2713 / 2715",
    moq: "27 MT (1 FCL)",
    packaging: "Steel drums, jumbo bags, bulk",
    origin: "Iran",
    grades: "60/70 · 80/100 · 40/50 · MC-30 · VG-30",
    desc: "Penetration-grade & performance-grade bitumen with TPS/ISO certification. FOB Bandar Abbas.",
    emoji: "🛢️",
  },
  {
    slug: "minerals",
    name: "Minerals & Industrial Raw Materials",
    nameFa: "مواد معدنی و صنعتی",
    hs: "2503–2530",
    moq: "1 FCL",
    packaging: "Jumbo bags, bulk",
    origin: "Iran",
    grades: "Iron Ore · Chromite · Sulphur · Barite · Gypsum",
    desc: "Direct-from-mine industrial minerals with COA and lab reports. Long-term contracts welcome.",
    emoji: "⛏️",
  },
];

export const Route = createFileRoute("/export-products")({
  head: () => ({
    meta: [
      { title: "Iranian Export Products — Saffron, Pistachio, Dates, Carpets | Goodarzi Trading" },
      {
        name: "description",
        content:
          "Buy premium Iranian export products: saffron, pistachio, dates, dried fruits, handwoven carpets, bitumen & minerals. Direct from Iran with certificates. Global shipping.",
      },
      {
        name: "keywords",
        content:
          "buy Iranian saffron, Iran pistachio exporter, buy dates from Iran, Persian carpets export, Iranian bitumen supplier, import from Iran, Iran export company, صادرات زعفران, صادرات پسته, صادرات خرما, goodarzi trading",
      },
      { property: "og:title", content: "Iranian Export Products — Goodarzi Trading" },
      {
        property: "og:description",
        content:
          "Premium Iranian saffron, pistachio, dates, carpets, bitumen & minerals — with full export documentation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://goodarzitrading.lovable.app/export-products" },
    ],
    links: [{ rel: "canonical", href: "https://goodarzitrading.lovable.app/export-products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Iranian Export Products",
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.desc,
              category: p.hs,
              brand: { "@type": "Organization", name: "Goodarzi Trading" },
              countryOfOrigin: "IR",
            },
          })),
        }),
      },
    ],
  }),
  component: ExportProductsPage,
});

function ExportProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Catalogue"
        title="Iranian Export Products for Global Buyers"
        description="Direct from Iranian producers to importers, wholesalers and distributors worldwide. Every shipment ships with certificate of origin, phytosanitary and lab analysis on request."
      />

      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">For international buyers</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
              Trusted supply from Iran to 40+ countries
            </h2>
            <p className="mt-5 text-muted-foreground">
              Members of the Tehran Chamber of Commerce. FOB / CIF / DDP terms available. We handle export licensing,
              customs, and logistics end-to-end so buyers receive goods cleared at the destination port.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl" aria-hidden>{p.emoji}</span>
                  <span className="rounded-sm bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                    HS {p.hs}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-[color:var(--navy-deep)]">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground" dir="rtl">{p.nameFa}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
                  <div>
                    <dt className="uppercase tracking-[0.14em] text-muted-foreground">MOQ</dt>
                    <dd className="mt-1 font-medium text-[color:var(--navy)]">{p.moq}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.14em] text-muted-foreground">Origin</dt>
                    <dd className="mt-1 font-medium text-[color:var(--navy)]">{p.origin}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="uppercase tracking-[0.14em] text-muted-foreground">Grades</dt>
                    <dd className="mt-1 font-medium text-[color:var(--navy)]">{p.grades}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="uppercase tracking-[0.14em] text-muted-foreground">Packaging</dt>
                    <dd className="mt-1 font-medium text-[color:var(--navy)]">{p.packaging}</dd>
                  </div>
                </dl>

                <Link
                  to="/inquiry"
                  search={{ product: p.slug } as never}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)]"
                >
                  Send Inquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x text-center">
          <Package className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
            Looking for a product not listed here?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We source any Iranian-origin commodity on request — from agricultural produce to industrial raw materials.
            Tell us what you need and we will respond with a quote within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]"
            >
              International Buyer Inquiry
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-[color:var(--navy)]/20 px-7 py-3.5 text-sm font-medium text-[color:var(--navy-deep)] hover:bg-background"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
