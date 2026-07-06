import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText, Ship, Plane, Truck, Train, CreditCard, Globe2, ScrollText,
  Banknote, Search, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Customs & Trade Knowledge Center — Goodarzi Trading" },
      { name: "keywords", content: "trade knowledge, راهنمای تجارت, learning center, incoterms, letters of credit, LC, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "In-depth reference guides on import & export procedures, customs regulations, Incoterms 2020, Letters of Credit, international payments and shipping methods." },
      { property: "og:title", content: "Customs & Trade Knowledge Center" },
      { property: "og:description", content: "Reference guides for international trade professionals." },
      { property: "og:url", content: "/knowledge" },
    ],
    links: [{ rel: "canonical", href: "/knowledge" }],
  }),
  component: Knowledge,
});

type Guide = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "Procedures" | "Regulations" | "Payments" | "Shipping";
  title: string;
  summary: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
};

const guides: Guide[] = [
  {
    id: "import-procedures",
    icon: FileText,
    category: "Procedures",
    title: "Import Procedures into Iran",
    summary: "End-to-end workflow from purchase order to warehouse delivery under current Iranian customs practice.",
    sections: [
      {
        heading: "1. Pre-order & registration",
        body: "Before placing any international purchase order, the importer must obtain a valid commercial card from the Iran Chamber of Commerce and register the order in the NTSW (Comprehensive Trade System) to receive an 8-digit order registration number.",
      },
      {
        heading: "2. Currency allocation & proforma",
        body: "A proforma invoice is issued by the supplier and submitted for currency allocation through NIMA or the interbank system, depending on the HS code group (essential, intermediate, or consumer goods).",
      },
      {
        heading: "3. Shipment & documents",
        body: "Once shipment is dispatched, the supplier releases the original set of documents: commercial invoice, packing list, Bill of Lading / Airway Bill, Certificate of Origin, and insurance policy.",
      },
      {
        heading: "4. Customs clearance",
        body: "At the port of entry the goods are declared through EPL (Electronic Pre-arrival Lodging). Customs assess duties based on the CIF value and HS classification, then release goods after payment of duties, commercial profit and VAT.",
        bullets: [
          "Green channel — documentary review only",
          "Yellow channel — document verification",
          "Red channel — full physical inspection",
        ],
      },
    ],
  },
  {
    id: "export-procedures",
    icon: ScrollText,
    category: "Procedures",
    title: "Export Procedures from Iran",
    summary: "Licensing, certification and shipment workflow for exporters based in Iran.",
    sections: [
      {
        heading: "Export licensing",
        body: "Most non-restricted goods can be exported freely under a commercial card. Restricted items (petrochemical, mineral, agricultural staples) require an export permit from the relevant ministry.",
      },
      {
        heading: "Required certificates",
        body: "Common documents include the Certificate of Origin issued by the Chamber of Commerce, health/phytosanitary certificate for food and agricultural goods, and fumigation certificate for wooden packaging.",
      },
      {
        heading: "Currency repatriation",
        body: "Export earnings must be returned to the country through NIMA within the deadline set by the Central Bank, typically as foreign currency sale to importers or as cash injection.",
      },
    ],
  },
  {
    id: "incoterms-2020",
    icon: Globe2,
    category: "Regulations",
    title: "Incoterms 2020 — Full Reference",
    summary: "The eleven ICC delivery terms with the point where risk and cost transfer from seller to buyer.",
    sections: [
      {
        heading: "Any mode of transport (7 terms)",
        body: "These terms work for sea, air, road, rail and multimodal shipments.",
        bullets: [
          "EXW — Ex Works: buyer takes over at seller's premises.",
          "FCA — Free Carrier: seller delivers to carrier nominated by buyer.",
          "CPT — Carriage Paid To: seller pays freight, risk passes at first carrier.",
          "CIP — Carriage & Insurance Paid: as CPT plus all-risk insurance.",
          "DAP — Delivered At Place: seller bears risk to named destination.",
          "DPU — Delivered at Place Unloaded: seller unloads at destination.",
          "DDP — Delivered Duty Paid: seller clears import and pays all duties.",
        ],
      },
      {
        heading: "Sea & inland waterway only (4 terms)",
        body: "Reserved for bulk and non-containerised sea freight.",
        bullets: [
          "FAS — Free Alongside Ship",
          "FOB — Free On Board",
          "CFR — Cost and Freight",
          "CIF — Cost, Insurance and Freight",
        ],
      },
      {
        heading: "Common mistake",
        body: "FOB and CIF should NOT be used for containerised cargo — the container is handed to the carrier at the terminal, not loaded 'on board' by the shipper. Use FCA and CIP instead.",
      },
    ],
  },
  {
    id: "letters-of-credit",
    icon: CreditCard,
    category: "Payments",
    title: "Letters of Credit (L/C) — UCP 600",
    summary: "How documentary credits work, the parties involved and the discipline of document compliance.",
    sections: [
      {
        heading: "Parties",
        body: "Applicant (buyer), Issuing Bank (buyer's bank), Advising Bank (in seller's country), Beneficiary (seller), and optionally a Confirming Bank that adds its own undertaking to pay.",
      },
      {
        heading: "Typical flow",
        body: "The applicant instructs its bank to issue an L/C in favour of the beneficiary. The seller ships the goods and presents the required documents to the negotiating bank. If documents comply strictly with L/C terms, payment is made regardless of any dispute over the goods.",
      },
      {
        heading: "Document compliance",
        body: "UCP 600 requires strict compliance — any discrepancy (wrong spelling, missing signature, expired insurance) gives the bank the right to refuse payment. Always prepare a compliance checklist before presentation.",
      },
    ],
  },
  {
    id: "payment-methods",
    icon: Banknote,
    category: "Payments",
    title: "International Payment Methods",
    summary: "Trade-off between seller risk and buyer risk across the five most common settlement methods.",
    sections: [
      {
        heading: "Spectrum of risk",
        body: "Payment methods sit on a spectrum from most seller-friendly to most buyer-friendly.",
        bullets: [
          "Cash in Advance (T/T before shipment) — maximum seller security.",
          "Letter of Credit — bank-intermediated, balanced.",
          "Documents against Payment (D/P) — buyer pays to collect documents.",
          "Documents against Acceptance (D/A) — buyer accepts a time draft.",
          "Open Account — seller ships and invoices, maximum buyer security.",
        ],
      },
      {
        heading: "SWIFT messaging basics",
        body: "MT103 is used for customer credit transfers, MT202 for bank-to-bank cover payments, and MT700 for L/C issuance. Every SWIFT message uses BIC codes to identify the sending and receiving banks.",
      },
    ],
  },
  {
    id: "sea-freight",
    icon: Ship,
    category: "Shipping",
    title: "Sea Freight — FCL, LCL & Containers",
    summary: "Container types, load options, port handling and demurrage/detention.",
    sections: [
      {
        heading: "FCL vs LCL",
        body: "FCL (Full Container Load) is booked when a shipment fills a whole container. LCL (Less than Container Load) shares a container with other consignments and is billed per cubic metre or per tonne, whichever is higher.",
      },
      {
        heading: "Common container types",
        body: "Standard equipment used on almost all trade lanes.",
        bullets: [
          "20' GP — 28 CBM, ~28 t payload",
          "40' GP — 58 CBM, ~28 t payload",
          "40' HC (High Cube) — 68 CBM",
          "Reefer — temperature-controlled",
          "Open Top / Flat Rack — over-height or over-width cargo",
        ],
      },
      {
        heading: "Demurrage vs detention",
        body: "Demurrage is charged when the container stays inside the port beyond free time. Detention is charged when the container has left the port but is not returned empty on time. Both are billed per day per container.",
      },
    ],
  },
  {
    id: "air-freight",
    icon: Plane,
    category: "Shipping",
    title: "Air Freight — AWB & Chargeable Weight",
    summary: "How airlines price shipments, dangerous goods rules and typical transit times.",
    sections: [
      {
        heading: "Chargeable weight",
        body: "Airlines charge the higher of gross weight and volumetric weight. Volumetric weight = L × W × H (cm) ÷ 6000. Bulky low-density cargo is almost always billed on volume.",
      },
      {
        heading: "Airway Bill (AWB)",
        body: "The AWB is a non-negotiable contract of carriage. Unlike a sea Bill of Lading it does not confer title to the goods — the consignee is nominated by name.",
      },
      {
        heading: "Dangerous goods (DGR)",
        body: "IATA DGR classifies hazardous cargo into 9 classes. Lithium batteries, aerosols, perfumes and paints all fall under DGR and require certified packaging, labelling and a Shipper's Declaration.",
      },
    ],
  },
  {
    id: "land-freight",
    icon: Truck,
    category: "Shipping",
    title: "Land Freight — TIR & CMR",
    summary: "Cross-border trucking under international conventions.",
    sections: [
      {
        heading: "TIR carnet",
        body: "The TIR (Transports Internationaux Routiers) system allows sealed trucks to cross multiple borders with minimum customs intervention. Iran is a full TIR contracting party and it is the backbone of overland trade with Turkey, the CIS and Europe.",
      },
      {
        heading: "CMR convention",
        body: "The CMR consignment note is the standard contract of carriage for international road freight. It defines carrier liability, delivery deadlines and the process for filing claims for loss or damage.",
      },
    ],
  },
  {
    id: "rail-freight",
    icon: Train,
    category: "Shipping",
    title: "Rail Freight Corridors",
    summary: "Iran's role as a rail bridge between China, Central Asia, Turkey and Europe.",
    sections: [
      {
        heading: "Iran–Turkey–Europe corridor",
        body: "Container trains depart from Tehran and Islamiye via Van, Turkey to European hubs. Transit time is typically 15–22 days, competitive with sea and much cheaper than air.",
      },
      {
        heading: "China–Iran corridor",
        body: "As part of the wider Belt & Road network, block trains run from Xi'an and Yiwu into Iran via Kazakhstan and Turkmenistan, with typical transit of 20–25 days.",
      },
    ],
  },
];

const categories = ["All", "Procedures", "Regulations", "Payments", "Shipping"] as const;

function Knowledge() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) => {
      if (cat !== "All" && g.category !== cat) return false;
      if (!q) return true;
      return (
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.sections.some(
          (s) =>
            s.heading.toLowerCase().includes(q) ||
            s.body.toLowerCase().includes(q),
        )
      );
    });
  }, [query, cat]);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Customs & international trade reference."
        description="A curated library of practical guides covering procedures, regulations, payment instruments and shipping methods used in cross-border trade."
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          {/* Search + filters */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides — e.g. Incoterms, L/C, FCL…"
                className="w-full rounded-sm border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[color:var(--navy)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition ${
                    cat === c
                      ? "border-[color:var(--navy-deep)] bg-[color:var(--navy-deep)] text-white"
                      : "border-border text-[color:var(--navy)] hover:border-[color:var(--gold)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-sm border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
              No guide matched your search. Try another keyword.
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {filtered.map((g) => {
                const Icon = g.icon;
                return (
                  <article
                    key={g.id}
                    id={g.id}
                    className="rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[color:var(--navy-deep)]/5">
                        <Icon className="h-6 w-6 text-[color:var(--gold)]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
                          {g.category}
                        </div>
                        <h2 className="mt-1 font-display text-2xl leading-tight text-[color:var(--navy-deep)]">
                          {g.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {g.summary}
                        </p>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="mt-5">
                      <AccordionItem value="content" className="border-none">
                        <AccordionTrigger className="rounded-sm bg-secondary px-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--navy-deep)] hover:no-underline">
                          Read full guide
                        </AccordionTrigger>
                        <AccordionContent className="pt-5">
                          <div className="space-y-6">
                            {g.sections.map((s) => (
                              <div key={s.heading}>
                                <h3 className="font-display text-lg text-[color:var(--navy-deep)]">
                                  {s.heading}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                  {s.body}
                                </p>
                                {s.bullets && (
                                  <ul className="mt-3 space-y-2">
                                    {s.bullets.map((b) => (
                                      <li
                                        key={b}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                      >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
