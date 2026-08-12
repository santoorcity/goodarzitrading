import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Package, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

import saffronImg from "@/assets/products/saffron.jpg";
import pistachioImg from "@/assets/products/pistachio.jpg";
import datesImg from "@/assets/products/dates.avif";
import nutsImg from "@/assets/products/nuts.jpg";
import carpetImg from "@/assets/products/carpet.jpg";
import barberryImg from "@/assets/products/barberry.jpeg";

type Product = {
  slug: string;
  key: string;
  hs: string;
  image: string;
};

const PRODUCTS: Product[] = [
  { slug: "saffron", key: "saffron", hs: "0910.20", image: saffronImg },
  { slug: "pistachio", key: "pistachio", hs: "0802.51", image: pistachioImg },
  { slug: "dates", key: "dates", hs: "0804.10", image: datesImg },
  { slug: "barberry", key: "barberry", hs: "0810.90", image: barberryImg },
  { slug: "nuts", key: "nuts", hs: "0813 / 0802", image: nutsImg },
  { slug: "handwoven-carpets", key: "carpet", hs: "5701.10", image: carpetImg },
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
              name: PRODUCT_SCHEMA[p.slug]?.name ?? p.slug,
              description: PRODUCT_SCHEMA[p.slug]?.description,
              image: `https://goodarzitrading.lovable.app${p.image}`,
              category: `HS ${p.hs}`,
              brand: { "@type": "Organization", name: "Goodarzi Trading" },
              countryOfOrigin: "IR",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "Goodarzi Trading", url: "https://goodarzitrading.lovable.app" },
              },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: EXPORT_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],

  }),
  component: ExportProductsPage,
});

function ExportProductsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("products.heroEyebrow", "Export Catalogue")}
        title={t("products.heroTitle", "Iranian Export Products for Global Buyers")}
        description={t(
          "products.heroDesc",
          "Direct from Iranian producers to importers, wholesalers and distributors worldwide. Every shipment ships with certificate of origin, phytosanitary and lab analysis on request."
        )}
      />

      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{t("products.introEyebrow", "For international buyers")}</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
              {t("products.introTitle", "Trusted supply from Iran to 40+ countries")}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t(
                "products.introDesc",
                "Members of the Tehran Chamber of Commerce. FOB / CIF / DDP terms available. We handle export licensing, customs, and logistics end-to-end so buyers receive goods cleared at the destination port."
              )}
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
                    alt={`${t(`products.${p.key}Name`)} — ${t(`products.${p.key}NameFa`)}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                    {t("products.hsPrefix", "HS")} {p.hs}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl text-[color:var(--navy-deep)]">{t(`products.${p.key}Name`)}</h3>
                  <p className="mt-1 text-xs text-muted-foreground" dir="rtl">{t(`products.${p.key}NameFa`)}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(`products.${p.key}Desc`)}</p>

                  <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
                    <div>
                      <dt className="uppercase tracking-[0.14em] text-muted-foreground">{t("products.labelMoq", "MOQ")}</dt>
                      <dd className="mt-1 font-medium text-[color:var(--navy)]">{t(`products.${p.key}Moq`)}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.14em] text-muted-foreground">{t("products.labelOrigin", "Origin")}</dt>
                      <dd className="mt-1 font-medium text-[color:var(--navy)]">{t(`products.${p.key}Origin`)}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="uppercase tracking-[0.14em] text-muted-foreground">{t("products.labelGrades", "Grades")}</dt>
                      <dd className="mt-1 font-medium text-[color:var(--navy)]">{t(`products.${p.key}Grades`)}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="uppercase tracking-[0.14em] text-muted-foreground">{t("products.labelPackaging", "Packaging")}</dt>
                      <dd className="mt-1 font-medium text-[color:var(--navy)]">{t(`products.${p.key}Packaging`)}</dd>
                    </div>
                  </dl>

                  <Link
                    to="/inquiry"
                    search={{ product: p.slug } as never}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)]"
                  >
                    {t("products.sendInquiry", "Send Inquiry")} <ArrowRight className="h-4 w-4" />
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
            {t("products.ctaNotListedTitle", "Looking for a product not listed here?")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t(
              "products.ctaNotListedDesc",
              "We source any Iranian-origin commodity on request — from agricultural produce to industrial raw materials. Tell us what you need and we will respond with a quote within one business day."
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]"
            >
              {t("products.ctaBuyerInquiry", "International Buyer Inquiry")}
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-[color:var(--navy)]/20 px-7 py-3.5 text-sm font-medium text-[color:var(--navy-deep)] hover:bg-background"
            >
              {t("products.ctaContact", "Contact Us")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
