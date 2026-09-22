import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, MessageCircle, Package, Ship } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { SITE_URL } from "@/data/export-products";
import { getMarketProduct, getTargetMarket, targetMarketUrl } from "@/data/target-markets";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/markets/$region")({
  loader: ({ params }) => {
    const market = getTargetMarket(params.region);
    if (!market) throw notFound();
    const product = getMarketProduct(market);
    if (!product) throw notFound();
    return { market, product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Market page not found — Goodarzi Trading" }, { name: "robots", content: "noindex" }] };
    const { market, product } = loaderData;
    const url = targetMarketUrl(params.region);
    const image = `${SITE_URL}${product.image}`;
    return {
      meta: [
        { title: `${market.title} | Goodarzi Trading` }, { name: "description", content: market.description },
        { property: "og:title", content: market.title }, { property: "og:description", content: market.description }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { property: "og:image", content: image }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: market.title, description: market.description, url, about: { "@type": "Product", name: product.name, category: `HS ${product.hs}`, countryOfOrigin: { "@type": "Country", name: "Iran" } } }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: market.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }, { name: "Export Products", url: `${SITE_URL}/export-products` }, { name: market.title, url }])) },
      ],
    };
  },
  component: MarketPage,
});

function MarketPage() {
  const { market, product } = Route.useLoaderData();
  const wa = whatsappLink(`Hello Goodarzi Trading, I would like a quotation for ${product.name} for ${market.market}.\nQuantity: \nGrade: \nPacking: \nDestination: `);
  return <>
    <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Export Products", to: "/export-products" }, { label: market.title }]} />
    <header className="bg-[color:var(--navy-deep)] text-white"><div className="container-x grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><span className="eyebrow">B2B export supply · HS {product.hs}</span><h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">{market.title}</h1><p className="mt-6 max-w-xl leading-relaxed text-white/75">{market.description}</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/inquiry" search={{ product: product.slug } as never} className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]">Request a Quote <ArrowRight className="h-4 w-4" /></Link><a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"><MessageCircle className="h-4 w-4" /> WhatsApp Export Sales</a></div></div><img src={product.image} alt={`${product.name} export supply for ${market.market}`} width={900} height={675} className="aspect-[4/3] w-full rounded-sm object-cover" /></div></header>
    <main className="py-16"><div className="container-x grid gap-12 lg:grid-cols-[1.35fr_.65fr]"><div>
      <section><h2 className="font-display text-3xl font-semibold text-[color:var(--navy-deep)]">Product and buyer profile</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Goodarzi Trading offers {product.name} from {product.origin} to qualified international buyers. This page describes a transaction pathway from Iran; it does not claim local stock, registration, customers or distribution in {market.market}.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{market.buyerProfiles.map((item) => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />{item}</li>)}</ul></section>
      <section className="mt-12"><h2 className="font-display text-3xl font-semibold text-[color:var(--navy-deep)]">Grades and specifications</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Available grades or varieties: {product.grades.join(", ")}. Final supply is subject to lot availability and an agreed written specification.</p><dl className="mt-6 divide-y divide-border border-y border-border">{product.specifications.map(([key, value]) => <div key={key} className="grid grid-cols-[150px_1fr] gap-4 py-3 text-sm"><dt className="font-medium text-[color:var(--navy-deep)]">{key}</dt><dd className="text-muted-foreground">{value}</dd></div>)}</dl></section>
      <section className="mt-12 grid gap-8 md:grid-cols-2"><div><h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-[color:var(--navy-deep)]"><Package className="h-5 w-5 text-[color:var(--gold)]" /> Packaging</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{product.packaging.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-[color:var(--navy-deep)]"><FileText className="h-5 w-5 text-[color:var(--gold)]" /> Export documents</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{product.documentation.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="mt-12"><h2 className="flex items-center gap-2 font-display text-3xl font-semibold text-[color:var(--navy-deep)]"><Ship className="h-6 w-6 text-[color:var(--gold)]" /> Shipping and importer checks</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">{market.considerations.map((item) => <li key={item} className="border-l-2 border-[color:var(--gold)] pl-4">{item}</li>)}</ul></section>
      <section className="mt-12"><span className="eyebrow">Buyer FAQ</span><h2 className="mt-3 font-display text-3xl font-semibold text-[color:var(--navy-deep)]">Questions about this trade route</h2><div className="mt-6 divide-y divide-border">{market.faqs.map((faq) => <div key={faq.q} className="py-5"><h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{faq.q}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.a}</p></div>)}</div></section>
    </div><aside className="h-fit rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-card)]"><span className="eyebrow">Quotation details</span><h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">Send a complete inquiry</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Include grade, quantity, packing, destination and required documents for a useful response.</p><div className="mt-5 border-y border-border py-4 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">HS code</span><strong>{product.hs}</strong></div><div className="mt-3 flex justify-between"><span className="text-muted-foreground">MOQ</span><strong>{product.moq}</strong></div></div><Link to="/export-products/$slug" params={{ slug: product.slug }} className="mt-5 flex items-center justify-between text-sm font-semibold text-[color:var(--navy)]">Full product specifications <ArrowRight className="h-4 w-4" /></Link><Link to="/incoterms" className="mt-4 flex items-center justify-between text-sm font-semibold text-[color:var(--navy)]">Incoterms 2020 <ArrowRight className="h-4 w-4" /></Link><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-5 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Export Sales</a></aside></div></main>
  </>;
}
