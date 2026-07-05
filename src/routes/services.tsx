import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Ship, Plane, Truck, FileCheck, Search, Globe, ShieldCheck, Package, FileText,
  ShoppingCart, BadgeCheck, ScrollText,
} from "lucide-react";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Goodarzi Trading" },
      { name: "description", content: "Import, export, customs clearance, consulting, international logistics, sourcing, supplier verification, trade documentation and freight services." },
      { property: "og:title", content: "Services — Goodarzi Trading" },
      { property: "og:description", content: "Full-spectrum international trade services from Tehran to the world." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Ship, title: "Import Services", desc: "Inbound trade handled end-to-end — supplier coordination, freight, customs and delivery to your door." },
  { icon: Plane, title: "Export Services", desc: "Outbound shipping of Iranian goods globally with full documentation and compliance support." },
  { icon: FileCheck, title: "Customs Clearance", desc: "Fast and accurate clearance at all major Iranian and international ports." },
  { icon: Search, title: "Customs Consulting", desc: "Tariff classification, duty optimisation, and regulatory compliance guidance." },
  { icon: Truck, title: "International Logistics", desc: "Multi-modal freight management: sea, air, road and rail across continents." },
  { icon: Globe, title: "Product Sourcing", desc: "Find, vet and onboard qualified suppliers anywhere in the world." },
  { icon: ShieldCheck, title: "Supplier Verification", desc: "On-site audits, quality inspections and due diligence before commitment." },
  { icon: FileText, title: "Trade Documentation", desc: "Commercial invoices, B/L, certificates of origin, packing lists and L/C support." },
  { icon: Package, title: "Freight Services", desc: "Optimised routing and cost-efficient forwarder partnerships." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-spectrum trade services."
        description="From your first supplier conversation to the final customs release, Goodarzi Trading provides every service required to move goods across borders."
      />
      <section className="py-24">
        <div className="container-x grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card p-10 transition-colors hover:bg-[color:var(--navy-deep)]">
              <Icon className="h-9 w-9 text-[color:var(--gold)]" />
              <h3 className="mt-5 font-display text-xl text-[color:var(--navy-deep)] group-hover:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">{desc}</p>
            </div>
          ))}
        </div>
        <div className="container-x mt-16 text-center">
          <Link to="/quote" className="inline-flex rounded-sm bg-[color:var(--navy-deep)] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[color:var(--navy)]">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
