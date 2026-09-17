import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, MessageCircle, Package, Ship } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { EXPORT_PRODUCTS, SITE_URL, getExportProduct } from "@/data/export-products";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/export-products/$slug")({
  loader: ({ params }) => {
    const product = getExportProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const product = loaderData?.product;
    const url = `${SITE_URL}/export-products/${params.slug}`;
    if (!product) {
      return {
        meta: [{ title: "Product not found — Goodarzi Trading" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${product.name} Exporter & Supplier — HS ${product.hs} | Goodarzi Trading`;
    const image = `${SITE_URL}${product.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            alternateName: product.nameFa,
            description: product.summary,
            image,
            category: `HS ${product.hs}`,
            countryOfOrigin: { "@type": "Country", name: "Iran" },
            brand: { "@type": "Organization", name: "Goodarzi Trading" },
            additionalProperty: product.specifications.map(([name, value]) => ({
              "@type": "PropertyValue",
              name,
              value,
            })),
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
            mainEntity: product.faqs.map((f) => ({
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
              { name: product.name, url },
            ]),
          ),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const wa = whatsappLink(
    `Hello Goodarzi Trading, I would like a quotation for ${product.name} (HS ${product.hs}).\nQuantity: \nDestination port: \nPacking: `,
  );
  const related = EXPORT_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Export Products", to: "/export-products" },
          { label: product.name },
        ]}
      />

      <section className="bg-[color:var(--navy-deep)] text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <span className="eyebrow">Iranian Export Product · HS {product.hs}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
              {product.name} — Exporter &amp; Supplier from Iran
            </h1>
            <p className="mt-3 text-sm text-white/60" dir="rtl" lang="fa">
              {product.nameFa}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">{product.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/inquiry"
                search={{ product: product.slug } as never}
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
              src={product.image}
              alt={`${product.name} for export from Iran`}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
              Product overview
            </h2>
            {product.overview.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h3 className="mt-12 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              Grades &amp; varieties
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.grades.map((g) => (
                <li
                  key={g}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium text-[color:var(--navy)]"
                >
                  {g}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              <Package className="h-5 w-5 text-[color:var(--gold)]" /> Packaging
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {product.packaging.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {p}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              <FileText className="h-5 w-5 text-[color:var(--gold)]" /> Quality documentation
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {product.documentation.map((d) => (
                <li key={d} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              <Ship className="h-5 w-5 text-[color:var(--gold)]" /> Shipping &amp; export availability
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {product.shipping.map((s) => (
                <li key={s} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">Specifications</h2>
            <dl className="mt-5 divide-y divide-border text-sm">
              {product.specifications.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-3 py-3">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-[color:var(--navy)]">{v}</dd>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 py-3">
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">MOQ</dt>
                <dd className="font-medium text-[color:var(--navy)]">{product.moq}</dd>
              </div>
            </dl>
            <Link
              to="/quote"
              className="mt-6 block rounded-sm bg-[color:var(--navy-deep)] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[color:var(--navy)]"
            >
              Request Product Specifications
            </Link>
            <Link
              to="/contact"
              className="mt-3 block rounded-sm border border-[color:var(--navy)]/20 px-5 py-3 text-center text-sm font-medium text-[color:var(--navy-deep)] hover:bg-secondary"
            >
              Contact Export Sales
            </Link>
            <div className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              Useful reading:{" "}
              <Link to="/incoterms" className="underline hover:text-[color:var(--navy)]">
                Incoterms 2020
              </Link>
              ,{" "}
              <Link to="/hs-code" className="underline hover:text-[color:var(--navy)]">
                HS codes &amp; trade services
              </Link>
              ,{" "}
              <Link to="/knowledge" className="underline hover:text-[color:var(--navy)]">
                Knowledge Center
              </Link>
              .
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Buyer questions</span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
            {product.name} — frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {product.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">
            Other Iranian export products
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/export-products/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg text-[color:var(--navy-deep)]">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
