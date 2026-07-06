import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Globe2, Handshake, Building2, Users, ArrowRight } from "lucide-react";

const REGIONS = [
  { region: "GCC & Middle East", countries: "UAE · Saudi Arabia · Qatar · Oman · Kuwait · Iraq · Turkey", flag: "🇦🇪" },
  { region: "European Union", countries: "Germany · France · Spain · Italy · Netherlands · Poland", flag: "🇪🇺" },
  { region: "Eurasia & CIS", countries: "Russia · Armenia · Azerbaijan · Kazakhstan · Uzbekistan · Turkmenistan", flag: "🇷🇺" },
  { region: "Asia-Pacific", countries: "China · India · Malaysia · Indonesia · Japan · South Korea", flag: "🇨🇳" },
  { region: "Africa", countries: "Kenya · South Africa · Egypt · Nigeria · Tanzania · Morocco", flag: "🌍" },
  { region: "Americas", countries: "Canada · Brazil · Argentina · Mexico · Chile", flag: "🇨🇦" },
];

const CHAMBERS = [
  "Tehran Chamber of Commerce, Industries, Mines & Agriculture (TCCIMA)",
  "Iran Chamber of Commerce (ICCIMA)",
  "Iran–UAE Joint Chamber",
  "Iran–Russia Joint Chamber",
  "Iran–China Joint Chamber",
  "Iran–Turkey Joint Chamber",
  "International Chamber of Commerce (ICC)",
];

export const Route = createFileRoute("/trade-network")({
  head: () => ({
    meta: [
      { title: "Global Trade Network — Chambers of Commerce Partners | Goodarzi Trading" },
      {
        name: "description",
        content:
          "Join our global trade network. Connecting Iranian exporters with importers, distributors and chamber of commerce members across 40+ countries. B2B partnerships welcome.",
      },
      {
        name: "keywords",
        content:
          "global trade network Iran, chamber of commerce partners, Iranian exporters, international B2B trade, import export partners, Tehran Chamber of Commerce, world traders, بازرگانان جهان, شبکه تجاری بین المللی",
      },
      { property: "og:title", content: "Global Trade Network — Goodarzi Trading" },
      {
        property: "og:description",
        content:
          "Partner with a Tehran-based trading house connected to importers, exporters and chambers of commerce worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://goodarzitrading.lovable.app/trade-network" },
    ],
    links: [{ rel: "canonical", href: "https://goodarzitrading.lovable.app/trade-network" }],
  }),
  component: TradeNetworkPage,
});

function TradeNetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Partnership"
        title="A worldwide network of importers, exporters and chambers"
        description="Goodarzi Trading is an active member of the Tehran Chamber of Commerce and works directly with traders, distributors and chamber members in more than 40 countries. We welcome new B2B partnerships across every continent."
      />

      <section className="py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">Who we work with</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
              Built on chamber-verified relationships
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every counterparty is verified through official chamber-of-commerce channels. This gives buyers on both
              sides of the transaction a documented, traceable relationship — not a marketplace listing.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { icon: Building2, title: "Importers & Distributors", d: "Wholesalers and distributors sourcing Iranian goods." },
                { icon: Users, title: "Chamber of Commerce Members", d: "TCCIMA, joint chambers, and international chamber networks." },
                { icon: Handshake, title: "Manufacturers & Producers", d: "Iranian producers seeking outbound export representation." },
                { icon: Globe2, title: "Trading Houses & Agents", d: "Overseas trading houses that need a Tehran-side partner." },
              ].map(({ icon: Icon, title, d }) => (
                <div key={title} className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-[color:var(--navy-deep)] text-[color:var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-[color:var(--navy-deep)]">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-sm border border-border bg-[color:var(--navy-deep)] p-8 text-white">
            <span className="eyebrow text-[color:var(--gold)]">Chamber affiliations</span>
            <h3 className="mt-4 font-display text-2xl">Verified through official chambers</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {CHAMBERS.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/inquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--navy-deep)]"
            >
              Become a Partner <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Regions we serve</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
              Active in 40+ countries across 6 continents
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <div key={r.region} className="rounded-sm border border-border bg-card p-6">
                <div className="text-3xl">{r.flag}</div>
                <h3 className="mt-3 font-display text-lg text-[color:var(--navy-deep)]">{r.region}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-sm bg-[color:var(--navy-deep)] px-8 py-14 text-center text-white md:px-16 md:py-20">
            <span className="eyebrow">Join the network</span>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Are you a trader, importer, or chamber member?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Introduce your company and the markets you serve. We reply with a partnership proposal within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/inquiry"
                className="rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]"
              >
                Send Partnership Inquiry
              </Link>
              <Link
                to="/contact"
                className="rounded-sm border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10"
              >
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
