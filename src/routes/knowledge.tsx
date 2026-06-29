import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  FileText, Ship, Plane, Truck, Train, CreditCard, Globe2, ScrollText, Banknote,
} from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Customs & Trade Knowledge Center — Goodarzi Trading" },
      { name: "description", content: "Import & export procedures, customs regulations, Incoterms 2020, Letters of Credit, international payments and shipping methods." },
      { property: "og:title", content: "Customs & Trade Knowledge Center" },
      { property: "og:description", content: "Reference guides for international trade professionals." },
      { property: "og:url", content: "/knowledge" },
    ],
    links: [{ rel: "canonical", href: "/knowledge" }],
  }),
  component: Knowledge,
});

const topics = [
  { icon: FileText, title: "Import Procedures", desc: "Step-by-step process from order to clearance in Iran." },
  { icon: ScrollText, title: "Export Procedures", desc: "Export licensing, certificates and shipment workflow." },
  { icon: Globe2, title: "Customs Regulations", desc: "Latest Iranian and international customs rules." },
  { icon: FileText, title: "Required Documents", desc: "Invoice, packing list, B/L, CO, insurance certificate." },
  { icon: ScrollText, title: "Incoterms 2020", desc: "EXW, FCA, FOB, CIF, DAP, DDP and more — full guide." },
  { icon: CreditCard, title: "Letters of Credit (L/C)", desc: "Issuing banks, UCP 600 rules, document compliance." },
  { icon: Banknote, title: "International Payments", desc: "T/T, L/C, D/P, D/A and SWIFT messaging basics." },
  { icon: Ship, title: "Sea Freight", desc: "FCL, LCL, container types, demurrage and port handling." },
  { icon: Plane, title: "Air Freight", desc: "AWB, dimensional weight, dangerous goods rules." },
  { icon: Truck, title: "Land Freight", desc: "TIR carnet, CMR convention, cross-border trucking." },
  { icon: Train, title: "Rail Freight", desc: "Iran-Europe and Iran-China rail corridors." },
];

function Knowledge() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Customs & international trade reference."
        description="A curated reference library covering procedures, regulations and payment instruments used in cross-border trade."
      />
      <section className="py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]">
              <Icon className="h-8 w-8 text-[color:var(--gold)]" />
              <h2 className="mt-5 font-display text-xl text-[color:var(--navy-deep)]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                Read guide →
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
