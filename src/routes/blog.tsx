import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & News — Goodarzi Trading" },
      { name: "description", content: "Trade news, import/export guides, customs updates and market analysis from Goodarzi Trading." },
      { property: "og:title", content: "Insights & News — Goodarzi Trading" },
      { property: "og:description", content: "Global trade insights and Iranian market intelligence." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { tag: "Customs Update", title: "New IRICA tariff rules for 2026: what importers need to know", date: "June 24, 2026", excerpt: "A breakdown of the latest tariff schedule changes affecting industrial machinery and consumer electronics." },
  { tag: "Market Analysis", title: "Iran–China rail corridor: shipping times drop 30%", date: "June 18, 2026", excerpt: "Why the latest infrastructure investments are reshaping landed-cost economics for Asian sourcing." },
  { tag: "Guide", title: "Letter of Credit: a step-by-step for Iranian importers", date: "June 10, 2026", excerpt: "From issuing bank selection to document compliance under UCP 600." },
  { tag: "Insight", title: "Sourcing in Türkiye: what's working in 2026", date: "May 28, 2026", excerpt: "Categories, MOQs and supplier vetting tips from our procurement desk." },
  { tag: "Customs Update", title: "Incoterms 2020 vs 2010: what actually changed", date: "May 19, 2026", excerpt: "A practical comparison every trade professional should bookmark." },
  { tag: "Trade News", title: "Saffron exports hit a new record this quarter", date: "May 12, 2026", excerpt: "Iranian saffron continues to dominate global premium markets — pricing and demand outlook." },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Trade news, guides and market analysis."
        description="Field-tested insights from our trade desk in Tehran and partners worldwide."
      />
      <section className="py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-sm bg-[color:var(--navy-deep)] px-2.5 py-1 font-medium uppercase tracking-wider text-[color:var(--gold)]">
                  {p.tag}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h2 className="mt-5 font-display text-xl leading-snug text-[color:var(--navy-deep)] group-hover:text-[color:var(--gold)]">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                Read article →
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
