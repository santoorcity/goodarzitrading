import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, Globe2, Factory, Trophy } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Company Profile — Goodarzi Trading" },
      { name: "description", content: "Goodarzi Trading company profile: history, experience, countries, industries, certifications and achievements." },
      { property: "og:title", content: "Company Profile — Goodarzi Trading" },
      { property: "og:description", content: "An overview of our experience and global trade footprint." },
      { property: "og:url", content: "/profile" },
    ],
    links: [{ rel: "canonical", href: "/profile" }],
  }),
  component: Profile,
});

function Profile() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Goodarzi Trading at a glance."
        description="History, experience, and the global footprint of an established Iranian trading house."
      />
      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">History</span>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--navy-deep)]">Two decades of international trade</h2>
            <p className="mt-4 text-[color:var(--navy)] leading-relaxed">
              Goodarzi Trading was founded by Mr. Mehdi Goodarzi to bridge Iranian
              businesses with global suppliers and markets. Over the years the
              company has become a recognised name in Tehran's trade community
              and built deep relationships across the Middle East, Europe, Asia
              and beyond.
            </p>
          </div>
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--navy-deep)]">A track record of complex shipments</h2>
            <p className="mt-4 text-[color:var(--navy)] leading-relaxed">
              From industrial machinery and consumer electronics to agricultural
              commodities and specialty products like saffron, our team has
              executed thousands of shipments under every major Incoterm and
              payment instrument.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe2, title: "Countries", items: ["Türkiye","China","Germany","UAE","Italy","India","Russia","UK","Spain","South Korea"] },
            { icon: Factory, title: "Industries", items: ["Industrial Machinery","Electronics","Automotive Parts","Construction","Agriculture","Food & Beverage","Pharma","Textiles"] },
            { icon: Award, title: "Certifications", items: ["Tehran Chamber of Commerce","Bedra Authorised Rep.","ICC Incoterms 2020","UCP 600 Compliant"] },
            { icon: Trophy, title: "Achievements", items: ["1,200+ shipments","40+ countries","15M+ USD trade volume","98% on-time delivery"] },
          ].map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-sm border border-border bg-card p-7">
              <Icon className="h-7 w-7 text-[color:var(--gold)]" />
              <h3 className="mt-4 font-display text-lg text-[color:var(--navy-deep)]">{title}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
