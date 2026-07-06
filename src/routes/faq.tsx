import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Goodarzi Trading" },
      { name: "keywords", content: "سوالات متداول, FAQ, customs FAQ, پرسش های واردات, راهنمای صادرات, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Frequently asked questions about importing, exporting, customs, freight and working with Goodarzi Trading." },
      { property: "og:title", content: "FAQ — Goodarzi Trading" },
      { property: "og:description", content: "Common questions about our international trade services." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What services does Goodarzi Trading provide?", a: "Import, export, customs clearance, customs consulting, international logistics, product sourcing, supplier verification, trade documentation and freight services." },
  { q: "Which countries do you work with?", a: "We have active trade routes with 40+ countries across the Middle East, Europe, Asia and beyond." },
  { q: "How quickly do you respond to quote requests?", a: "Our trade desk replies within one business day with a tailored quote." },
  { q: "Are you officially registered?", a: "Yes — Goodarzi Trading is an active member of the Tehran Chamber of Commerce and the authorised sales representative of Bedra products in Iran." },
  { q: "Do you handle Letters of Credit (L/C)?", a: "Yes, we assist with issuing-bank coordination, document preparation, and full compliance with UCP 600." },
  { q: "Can you source a product I haven't found yet?", a: "Absolutely — supplier sourcing and verification is one of our core services." },
  { q: "What Incoterms do you operate under?", a: "All commonly used Incoterms 2020 — EXW, FCA, FOB, CIF, CFR, DAP, DDP and others." },
  { q: "Do you offer customs consulting only?", a: "Yes, we provide standalone advisory engagements on tariff classification, duty optimisation and compliance." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." />
      <section className="py-24">
        <div className="container-x mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-sm border border-border bg-card">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-lg text-[color:var(--navy-deep)]">{f.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 text-[color:var(--gold)]" /> : <Plus className="h-5 w-5 text-[color:var(--gold)]" />}
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
