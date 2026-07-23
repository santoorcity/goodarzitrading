import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Package, ArrowRight } from "lucide-react";

import saffronImg from "@/assets/products/saffron.jpg";
import pistachioImg from "@/assets/products/pistachio.jpg";
import datesImg from "@/assets/products/dates.avif";
import nutsImg from "@/assets/products/nuts.jpg";
import carpetImg from "@/assets/products/carpet.jpg";
import barberryImg from "@/assets/products/barberry.jpeg";

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
  image: string;
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
    image: saffronImg,
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
    image: pistachioImg,
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
    image: datesImg,
  },
  {
    slug: "barberry",
    name: "Iranian Barberry",
    nameFa: "زرشک ایرانی",
    hs: "0810.90",
    moq: "500 kg",
    packaging: "5kg / 10kg cartons, vacuum packs",
    origin: "South Khorasan (Birjand, Qaen)",
    grades: "Puffy (Puffed) · Anari (Pomegranate) · Seedless",
    desc: "Iran is the world's largest producer of barberry. Bright red, tart berries — sun-dried and hand-cleaned to top export grade.",
    image: barberryImg,
  },
  {
    slug: "nuts",
    name: "Dried Fruits & Nuts",
    nameFa: "خشکبار و آجیل",
    hs: "0813 / 0802",
    moq: "1 MT",
    packaging: "Bulk / private label",
    origin: "Iran (multi-region)",
    grades: "Raisins · Walnuts · Almonds · Hazelnuts · Figs",
    desc: "Full range of Iranian dried fruits and nuts, sorted and cleaned to international export standards.",
    image: nutsImg,
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
    image: carpetImg,
  },
];

export const Route = createFileRoute("/export-products")({
  head: () => ({
    meta: [
      { title: "Iranian Export Products — Saffron, Pistachio, Dates, Barberry, Carpets | Goodarzi Trading" },
      {
        name: "description",
        content:
          "Buy premium Iranian export products: saffron, pistachio, dates, barberry, dried fruits, nuts and handwoven carpets. Direct from Iran with certificates. Global shipping.",
      },
      {
        name: "keywords",
        content:
          "buy Iranian saffron, Iran pistachio exporter, buy dates from Iran, Iranian barberry, Persian carpets export, Iranian nuts, import from Iran, Iran export company, صادرات زعفران, صادرات پسته, صادرات خرما, صادرات زرشک, goodarzi trading",
      },
      { property: "og:title", content: "Iranian Export Products — Goodarzi Trading" },
      {
        property: "og:description",
        content:
          "Premium Iranian saffron, pistachio, dates, barberry, carpets and nuts — with full export documentation.",
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
              image: p.image,
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

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.nameFa}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                    HS {p.hs}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl text-[color:var(--navy-deep)]">{p.name}</h3>
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
                </div>
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
