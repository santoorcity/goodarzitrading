import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Goodarzi Trading" },
      { name: "keywords", content: "terms of service, شرایط استفاده, قوانین سایت, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Terms governing the use of the Goodarzi Trading website and inquiries." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl space-y-6 text-[color:var(--navy)]">
          <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
          <p>By using the Goodarzi Trading website you agree to the following terms.</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">Use of the website</h2>
          <p>The content on this site is for general information only. HS code references and knowledge-center materials are provided as guidance and do not constitute legal or customs advice.</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">Quotes & contracts</h2>
          <p>Quotes issued by Goodarzi Trading are commercial proposals and are not binding until confirmed in writing through a signed contract or proforma invoice.</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">Liability</h2>
          <p>Goodarzi Trading is not liable for losses arising from reliance on the general information published on this website. Trade engagements are governed by their underlying contracts.</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">Governing law</h2>
          <p>These terms are governed by the laws of the Islamic Republic of Iran. Disputes shall be resolved in the competent courts of Tehran.</p>
        </div>
      </section>
    </>
  );
}
