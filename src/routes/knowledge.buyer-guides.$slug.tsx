import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { BUYER_GUIDES, buyerGuideUrl, getBuyerGuide } from "@/data/buyer-guides";
import { SITE_URL } from "@/data/export-products";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/knowledge/buyer-guides/$slug")({
  loader: ({ params }) => {
    const guide = getBuyerGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    const guide = loaderData?.guide;
    if (!guide) return { meta: [{ title: "Guide not found — Goodarzi Trading" }, { name: "robots", content: "noindex" }] };
    const url = buyerGuideUrl(params.slug);
    const image = `${SITE_URL}${guide.image}`;
    return {
      meta: [
        { title: `${guide.title} | Goodarzi Trading` },
        { name: "description", content: guide.description },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image, mainEntityOfPage: url, author: { "@type": "Organization", name: "Goodarzi Trading", url: SITE_URL }, publisher: { "@type": "Organization", name: "Goodarzi Trading", url: SITE_URL } }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }, { name: "Knowledge Center", url: `${SITE_URL}/knowledge` }, { name: "Buyer Guides", url: `${SITE_URL}/knowledge/buyer-guides` }, { name: guide.shortTitle, url }])) },
      ],
    };
  },
  component: BuyerGuidePage,
});

function BuyerGuidePage() {
  const { guide } = Route.useLoaderData();
  const wa = whatsappLink(`Hello Goodarzi Trading, I read your guide: ${guide.title}.\nProduct: \nQuantity: \nDestination: \nMy question: `);
  const related = BUYER_GUIDES.filter((item) => item.slug !== guide.slug).slice(0, 3);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Knowledge Center", to: "/knowledge" }, { label: guide.shortTitle }]} />
      <header className="bg-[color:var(--navy-deep)] text-white">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div><span className="eyebrow">{guide.category}</span><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl">{guide.title}</h1><p className="mt-6 max-w-2xl leading-relaxed text-white/75">{guide.description}</p></div>
          <img src={guide.image} alt="" width={800} height={600} className="aspect-[4/3] w-full rounded-sm object-cover" />
        </div>
      </header>
      <article className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-3xl">
            {guide.sections.map((section) => <section key={section.heading} className="mb-12"><h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)] md:text-3xl">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-7 text-muted-foreground">{paragraph}</p>)}{section.bullets && <ul className="mt-5 space-y-3 border-l-2 border-[color:var(--gold)] pl-5 text-sm leading-6 text-muted-foreground">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
            <section className="mt-14 border-t border-border pt-10"><span className="eyebrow">Buyer FAQ</span><h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">Frequently asked questions</h2><div className="mt-6 divide-y divide-border">{guide.faqs.map((faq) => <div key={faq.q} className="py-5"><h3 className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{faq.q}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.a}</p></div>)}</div></section>
          </div>
          <aside className="h-fit rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)]"><h2 className="font-display text-xl font-semibold text-[color:var(--navy-deep)]">Continue your research</h2><nav className="mt-5 space-y-3">{guide.links.map((link) => <Link key={link.to} to={link.to as never} className="flex items-center justify-between border-b border-border pb-3 text-sm font-medium text-[color:var(--navy)] hover:text-[color:var(--gold)]">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</nav><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)]"><MessageCircle className="h-4 w-4" /> WhatsApp Export Sales</a></aside>
        </div>
      </article>
      <section className="bg-secondary/60 py-14"><div className="container-x"><h2 className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">Related buyer guides</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{related.map((item) => <Link key={item.slug} to="/knowledge/buyer-guides/$slug" params={{ slug: item.slug }} className="rounded-sm border border-border bg-card p-5 hover:border-[color:var(--gold)]"><span className="text-xs uppercase text-muted-foreground">{item.category}</span><h3 className="mt-2 font-display text-lg font-semibold text-[color:var(--navy-deep)]">{item.shortTitle}</h3></Link>)}</div></div></section>
    </>
  );
}
