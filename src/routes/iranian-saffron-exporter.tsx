import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { SITE_URL, getExportProduct } from "@/data/export-products";
import { whatsappLink } from "@/lib/whatsapp";

const URL = `${SITE_URL}/iranian-saffron-exporter`;
const IMAGE = `${SITE_URL}/saffron.jpg`;

const TITLE = "Iranian Saffron Exporter & Supplier — Super Negin, Negin, Sargol | Goodarzi Trading";
const DESCRIPTION =
  "Iranian saffron exporter in Tehran supplying Super Negin, Negin, Sargol and Pushal saffron from Khorasan. ISO 3632 analysis on request, bulk and private-label packing, worldwide shipping.";

const GRADES = [
  {
    name: "Super Negin",
    text: "The longest, thickest all-red stigmas with no yellow style attached. Selected for buyers who need the strongest colour and the most uniform appearance in the pack.",
  },
  {
    name: "Negin",
    text: "All-red stigmas, slightly shorter than Super Negin, widely used by repackers and food manufacturers.",
  },
  {
    name: "Sargol",
    text: "Cut red stigmas without the style. The most common export grade for industrial and retail use.",
  },
  {
    name: "Pushal",
    text: "Red stigmas with a short part of the yellow style still attached, usually ordered by buyers who prefer a traditional appearance.",
  },
];

const FAQS = [
  {
    q: "Who supplies Iranian saffron for export?",
    a: "Goodarzi Trading, a Tehran-based import and export company registered under number 485993 and an active member of the Tehran Chamber of Commerce (TCCIMA), exports Iranian saffron from Khorasan to buyers worldwide.",
  },
  {
    q: "What is Super Negin saffron?",
    a: "Super Negin is the top Iranian saffron grade: long, thick, all-red stigmas with no yellow style attached, giving the most uniform appearance and the strongest colour of the commercial grades.",
  },
  {
    q: "How can I buy saffron from Iran?",
    a: "Send the grade, quantity, packing format and destination port through the buyer inquiry form or WhatsApp. You receive a proforma invoice, and Goodarzi Trading arranges laboratory analysis, export clearance through IRICA and shipping on the agreed Incoterms 2020 rule.",
  },
  {
    q: "What is the HS code for saffron?",
    a: "Saffron is classified under HS heading 0910.20.",
  },
  {
    q: "What is the minimum order quantity for wholesale saffron?",
    a: "The minimum order quantity is 1 kg. Larger wholesale volumes can be consolidated with other Iranian products in one consignment.",
  },
  {
    q: "Which packaging options are available?",
    a: "Retail packs from 0.1 g to 100 g in glass, tin or sachet, bulk export packing up to 1 kg per unit, and private-label packing under the buyer's own brand.",
  },
  {
    q: "What quality documentation is provided?",
    a: "ISO 3632 laboratory analysis (crocin, safranal and picrocrocin) on request, plus commercial invoice, packing list, certificate of origin from the Tehran Chamber of Commerce, phytosanitary or health certificate and the transport document.",
  },
  {
    q: "How is the saffron shipped?",
    a: "Air freight from Tehran (IKA) is normally used for saffron because of its high value and low volume. Sea freight from Bandar Abbas, and road or multimodal transit to neighbouring markets, are also available under EXW, FOB, CFR, CIF or DAP terms.",
  },
  {
    q: "How can I contact the export sales team?",
    a: "By WhatsApp on +98 919 123 8554, by phone on +98 21 44511076, or by email at info@goodarzitrading.ir.",
  },
];

export const Route = createFileRoute("/iranian-saffron-exporter")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Iranian saffron exporter, Iranian saffron supplier, buy saffron from Iran, Iranian Super Negin saffron, wholesale Iranian saffron, Super Negin saffron supplier, Iran saffron wholesale, saffron HS code 0910.20",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: IMAGE },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Iranian Saffron (Super Negin, Negin, Sargol, Pushal)",
          description: DESCRIPTION,
          image: IMAGE,
          category: "HS 0910.20",
          countryOfOrigin: { "@type": "Country", name: "Iran" },
          brand: { "@type": "Organization", name: "Goodarzi Trading" },
          additionalProperty: [
            { "@type": "PropertyValue", name: "HS code", value: "0910.20" },
            { "@type": "PropertyValue", name: "Origin", value: "Khorasan, Iran" },
            { "@type": "PropertyValue", name: "Grades", value: "Super Negin, Negin, Sargol, Pushal" },
            { "@type": "PropertyValue", name: "Quality standard", value: "ISO 3632 Category I" },
            { "@type": "PropertyValue", name: "Minimum order", value: "1 kg" },
          ],
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Goodarzi Trading", url: SITE_URL },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Export Products", url: `${SITE_URL}/export-products` },
            { name: "Iranian Saffron Exporter", url: URL },
          ]),
        ),
      },
    ],
  }),
  component: SaffronPage,
});

function SaffronPage() {
  const product = getExportProduct("iranian-saffron");
  const wa = whatsappLink(
    "Hello Goodarzi Trading, I would like a saffron quotation.\nGrade (Super Negin / Negin / Sargol / Pushal): \nQuantity: \nPacking: \nDestination port: ",
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Export Products", to: "/export-products" },
          { label: "Iranian Saffron Exporter" },
        ]}
      />

      <section className="bg-[color:var(--navy-deep)] text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <span className="eyebrow">Saffron · HS 0910.20 · Khorasan, Iran</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
              Iranian Saffron Exporter &amp; Supplier
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              Goodarzi Trading exports Iranian saffron from Khorasan in Super Negin, Negin, Sargol and Pushal grades —
              in bulk export packing or private-label retail packs, with ISO 3632 laboratory analysis on request.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/inquiry"
                search={{ product: "iranian-saffron" } as never}
                className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Export Sales
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src="/saffron.jpg"
              alt="Iranian saffron threads for export"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
            Buying Iranian saffron wholesale
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Saffron is Iran's best-known agricultural export and the crop is concentrated in Khorasan, in the north-east
            of the country. Goodarzi Trading buys directly from growers and processing units in that region and prepares
            each consignment for international shipment: grading, packing, laboratory analysis on request, export
            clearance through the Iranian customs administration (IRICA) and freight booking.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The company is registered in Tehran under number 485993 and is an active member of the Tehran Chamber of
            Commerce, Industries, Mines &amp; Agriculture (TCCIMA), which issues the certificate of origin that
            accompanies export consignments. Wholesale buyers, repackers, food manufacturers and distributors can order
            from 1 kg upwards.
          </p>

          <h2 className="mt-14 font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
            Saffron grades
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {GRADES.map((g) => (
              <div key={g.name} className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{g.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
            Specifications, packing and documents
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-[color:var(--navy-deep)]">Packing</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {(product?.packaging ?? []).map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-[color:var(--navy-deep)]">Documentation</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {(product?.documentation ?? []).map((d) => (
                  <li key={d} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Full specification table:{" "}
            <Link
              to="/export-products/$slug"
              params={{ slug: "iranian-saffron" }}
              className="underline hover:text-[color:var(--navy)]"
            >
              Iranian Saffron product page
            </Link>
            . Delivery terms are explained in the{" "}
            <Link to="/incoterms" className="underline hover:text-[color:var(--navy)]">
              Incoterms 2020 guide
            </Link>
            , and tariff classification in{" "}
            <Link to="/hs-code" className="underline hover:text-[color:var(--navy)]">
              HS codes &amp; trade services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Buyer questions</span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
            Iranian saffron — frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/quote"
              className="rounded-sm bg-[color:var(--navy-deep)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[color:var(--navy)]"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-[color:var(--navy)]/20 px-7 py-3.5 text-sm font-medium text-[color:var(--navy-deep)] hover:bg-background"
            >
              Contact Export Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
