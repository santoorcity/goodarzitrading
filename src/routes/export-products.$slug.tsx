import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Download, ExternalLink, FileText, MessageCircle, Package, Ship } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { EXPORT_PRODUCTS, SITE_URL, getExportProduct } from "@/data/export-products";
import { whatsappLink } from "@/lib/whatsapp";
import { DETAIL_DOCS_NOTE, getProductDetail } from "@/data/product-details";
import { SAFFRON_HREFLANG, SAFFRON_LOCALES } from "@/data/saffron-locales";

function detailHs(slug: string, fallback: string) {
  const d = getProductDetail(slug);
  if (!d) return fallback;
  const row = d.specifications.find(([k]) => k === "HS code");
  return row ? row[1].split(" ")[0] : "";
}

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
    const d = getProductDetail(product.slug);
    const hs = detailHs(product.slug, product.hs);
    const isSaffron = product.slug === "iranian-saffron";
    const title = isSaffron
      ? "Iranian Saffron Price List & Wholesale Price | Goodarzi Trading"
      : d?.seoTitle ?? `${product.name} Exporter & Supplier — HS ${product.hs} | Goodarzi Trading`;
    const description = isSaffron
      ? "View the official Iranian Saffron Price List, wholesale saffron prices and the Goodarzi Trading catalogue. Compare Super Negin, Negin, Sargol and Pushal for bulk export inquiries."
      : d?.seoDescription ?? product.summary;
    const keywords = isSaffron
      ? "Iranian saffron price, Iran saffron price, saffron price list, Iranian saffron price list, saffron wholesale price, Iranian saffron wholesale price, buy Iranian saffron, Iranian saffron supplier, bulk saffron price, saffron price per kg, Super Negin saffron price, Negin saffron price, Sargol saffron price"
      : `${product.name} exporter, ${product.name} supplier, buy ${product.name} from Iran, ${hs ? `HS ${hs}, ` : ""}wholesale Iranian products, Goodarzi Trading`;
    const imgPath = d?.image ?? product.image;
    const image = imgPath.startsWith("http") ? imgPath : `${SITE_URL}${imgPath}`;
    const specs = d?.specifications ?? product.specifications;
    const faqs = d?.faqs ?? product.faqs;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }, ...(isSaffron ? SAFFRON_HREFLANG(SITE_URL) : [])],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            url,
            name: product.name,
            alternateName: product.nameFa,
            description,
            image,
            ...(hs ? { category: `HS ${hs}` } : {}),
            countryOfOrigin: { "@type": "Country", name: "Iran" },
            brand: { "@type": "Organization", name: "Goodarzi Trading" },
            additionalProperty: specs.filter(([name]) => name !== "Price").map(([name, value]) => ({
              "@type": "PropertyValue",
              name,
              value,
            })),
            ...(d
              ? {}
              : {
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    seller: { "@type": "Organization", name: "Goodarzi Trading", url: SITE_URL },
                  },
                }),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "en",
            mainEntity: faqs.map((f) => ({
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
  const d = getProductDetail(product.slug);
  const hs = detailHs(product.slug, product.hs);
  const grades = d?.grades ?? product.grades;
  const packaging = d?.packaging ?? product.packaging;
  const documentation = d?.documentation ?? product.documentation;
  const specifications = d?.specifications ?? product.specifications;
  const faqs = d?.faqs ?? product.faqs;
  const wa = whatsappLink(
    `Hello Goodarzi Trading, I would like a quotation for ${product.name}${hs ? ` (HS ${hs})` : ""}.\nQuantity: \nDestination port: \nPacking: `,
  );
  const related = EXPORT_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div lang="en" dir="ltr">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Export Products", to: "/export-products" },
          { label: product.name },
        ]}
      />

      <section className="bg-[color:var(--navy-deep)] text-white">
        <div
          className={`container-x grid gap-10 py-16 md:items-center md:py-20 ${
            !d && product.slug === "iranian-pistachio" ? "lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" : "md:grid-cols-2"
          }`}
        >
          <div>
            <span className="eyebrow">Iranian Export Product{hs ? ` · HS ${hs}` : ""}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
              {d ? d.h1 : <>{product.name} — Exporter &amp; Supplier from Iran</>}
            </h1>
            <p className="mt-3 text-sm text-white/60" dir="rtl" lang="fa">
              {product.nameFa}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">{d?.intro ?? product.summary}</p>
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
            {d ? (
              <img
                src={d.image}
                alt={d.imageAlt}
                width={1200}
                height={900}
                className={`h-full w-full ${d.contain ? "bg-background object-contain" : "object-cover"}`}
                loading="eager"
                decoding="async"
              />
            ) : product.slug === "iranian-pistachio" ? (
              <picture>
                <source media="(max-width: 767px)" srcSet="/iranian-pistachios-detail-mobile.jpg" />
                <img
                  src="/iranian-pistachios-detail.jpg"
                  alt="Iranian pistachio varieties and size count guide"
                  width={2528}
                  height={1696}
                  className="h-auto w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            ) : (
              <img
                src={product.image}
                alt={`${product.name} for export from Iran`}
                width={1200}
                height={900}
                className={`h-full w-full ${product.slug === "iranian-mamra-almonds" ? "bg-background object-contain" : "object-cover"}`}
                loading="eager"
                decoding="async"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
              Product overview
            </h2>
            {(d ? [d.intro] : product.overview).map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            {product.slug === "iranian-saffron" && (
              <p className="mt-4 text-sm text-muted-foreground">
                {Object.values(SAFFRON_LOCALES).map((locale, index) => (
                  <span key={locale.key}>
                    {index > 0 ? " · " : ""}
                    <Link to={locale.path as never} lang={locale.lang} hrefLang={locale.lang} className="underline">{locale.breadcrumb}</Link>
                  </span>
                ))}
              </p>
            )}

            {product.slug === "iranian-saffron" && (
              <section aria-labelledby="saffron-documents" className="mt-12 rounded-sm border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 p-5 md:p-7">
                <span className="eyebrow">Official buyer documents</span>
                <h2 id="saffron-documents" className="mt-3 font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">
                  Iranian Saffron Price List &amp; Catalogue
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  Review the official Iranian Saffron Price List for current price-per-kg references by grade, then use the catalogue for approved product, packaging and ordering information. Contact export sales for a quotation for your grade, quantity and destination.
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <article className="overflow-hidden rounded-sm border border-border bg-card">
                    <img
                      src="/goodarzi-saffron-price-list.png"
                      alt="Official Iranian Saffron Price List showing wholesale saffron prices by grade in USD per kilogram"
                      width={1800}
                      height={1400}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover object-top"
                    />
                    <div className="p-5">
                      <h3 className="font-display text-xl font-semibold text-[color:var(--navy-deep)]">Saffron Price List</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Official Iranian saffron price list with grade specifications and USD/kg references.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="/goodarzi-saffron-price-list.png" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-4 py-2.5 text-sm font-semibold text-white">
                          <ExternalLink className="h-4 w-4" /> View price list
                        </a>
                        <a href="/goodarzi-saffron-price-list.png" download className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--navy)]/20 px-4 py-2.5 text-sm font-medium text-[color:var(--navy-deep)]">
                          <Download className="h-4 w-4" /> Download
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="flex flex-col rounded-sm border border-border bg-card p-5 md:p-6">
                    <div className="flex-1">
                      <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--navy-deep)]">PDF catalogue</span>
                      <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--navy-deep)]">Saffron Product Catalogue</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Official catalogue covering saffron grades, specifications, packaging, ordering and export documentation.</p>
                      <iframe
                        src="/goodarzi-saffron-catalogue.pdf#view=FitH"
                        title="Goodarzi Trading Iranian Saffron Product Catalogue PDF"
                        loading="lazy"
                        className="mt-5 h-[360px] w-full rounded-sm border border-border bg-white md:h-[420px]"
                      />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="/goodarzi-saffron-catalogue.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-4 py-2.5 text-sm font-semibold text-white">
                        <ExternalLink className="h-4 w-4" /> View catalogue
                      </a>
                      <a href="/goodarzi-saffron-catalogue.pdf" download className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--navy)]/20 px-4 py-2.5 text-sm font-medium text-[color:var(--navy-deep)]">
                        <Download className="h-4 w-4" /> Download PDF
                      </a>
                    </div>
                  </article>
                </div>
              </section>
            )}

            {d?.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="mt-12 font-display text-xl font-semibold text-[color:var(--navy-deep)] md:text-2xl">
                  {sec.heading}
                </h2>
                {sec.table && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border border-border text-sm">
                      <thead className="bg-secondary/60 text-left text-[color:var(--navy-deep)]">
                        <tr>
                          <th className="px-4 py-2 font-semibold">{sec.table.head[0]}</th>
                          <th className="px-4 py-2 font-semibold">{sec.table.head[1]}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {sec.table.rows.map(([a, b]) => (
                          <tr key={a}>
                            <td className="px-4 py-2 font-medium text-[color:var(--navy)]">{a}</td>
                            <td className="px-4 py-2 text-muted-foreground">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {sec.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {sec.items && (
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {sec.items.map((it) => (
                      <li key={it.name} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                        <span>
                          <strong className="font-semibold text-[color:var(--navy-deep)]">{it.name}</strong>
                          {it.text ? ` — ${it.text}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="mt-12 font-display text-xl font-semibold text-[color:var(--navy-deep)] md:text-2xl">
              {d?.gradesHeading ?? "Grades & varieties"}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {grades.map((g) => (
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
              {packaging.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {p}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              <FileText className="h-5 w-5 text-[color:var(--gold)]" /> Quality documentation
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {documentation.map((doc) => (
                <li key={doc} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {doc}
                </li>
              ))}
            </ul>
            {d && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{DETAIL_DOCS_NOTE}</p>}

            <h3 className="mt-12 flex items-center gap-2 font-display text-xl font-semibold text-[color:var(--navy-deep)]">
              <Ship className="h-5 w-5 text-[color:var(--gold)]" /> Shipping &amp; export availability
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {(d ? ["Shipping method, delivery terms, destination requirements and export documents are confirmed for each order."] : product.shipping).map((s) => (
                <li key={s} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">Specifications</h2>
            <dl className="mt-5 divide-y divide-border text-sm">
              {specifications.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-3 py-3">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-[color:var(--navy)]">{v}</dd>
                </div>
              ))}
              {!d && (
                <div className="grid grid-cols-2 gap-3 py-3">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">MOQ</dt>
                  <dd className="font-medium text-[color:var(--navy)]">{product.moq}</dd>
                </div>
              )}
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
            {faqs.map((f) => (
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
    </div>
  );
}
