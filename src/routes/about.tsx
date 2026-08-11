import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Award, Users, Globe, Briefcase } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Goodarzi Trading" },
      { name: "keywords", content: "درباره ما, Mehdi Goodarzi, مهدی گودرزی, Tehran Chamber of Commerce, Iranian trading company, شرکت بازرگانی ایرانی, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Goodarzi Trading is a Tehran-based international import and export company led by Mr. Mehdi Goodarzi, active member of the Tehran Chamber of Commerce." },
      { property: "og:title", content: "About Goodarzi Trading" },
      { property: "og:description", content: "Founder Mr. Mehdi Goodarzi and our mission to connect global markets through trusted trade." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const t = useT();
  const whyItems = [
    { icon: Award, title: t("about.why.chamber.title", "Chamber Member"), desc: t("about.why.chamber.desc", "Active member of Tehran Chamber of Commerce.") },
    { icon: Users, title: t("about.why.bedra.title", "Bedra Representative"), desc: t("about.why.bedra.desc", "Authorised sales representative of Bedra in Iran.") },
    { icon: Globe, title: t("about.why.countries.title", "40+ Countries"), desc: t("about.why.countries.desc", "Active trade routes across continents.") },
    { icon: Briefcase, title: t("about.why.lifecycle.title", "Full Lifecycle"), desc: t("about.why.lifecycle.desc", "Sourcing, customs, freight and documentation.") },
    { icon: Target, title: t("about.why.compliance.title", "Compliance First"), desc: t("about.why.compliance.desc", "Adherence to INCOTERMS 2020 and ICC norms.") },
    { icon: Eye, title: t("about.why.pricing.title", "Transparent Pricing"), desc: t("about.why.pricing.desc", "Clear quotes with no hidden fees.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow", "About Us")}
        title={t("about.hero.title", "Connecting global markets, one shipment at a time.")}
        description={t(
          "about.hero.description",
          "Goodarzi Trading is an international import and export company based in Tehran, Iran, specialising in global trade, customs consulting, logistics, sourcing and international commerce.",
        )}
      />

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="eyebrow">{t("about.profile.eyebrow", "Company Profile")}</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)] md:text-4xl">
              {t("about.profile.title", "Over two decades of international trade expertise.")}
            </h2>
            <div className="mt-6 space-y-5 text-[color:var(--navy)] leading-relaxed">
              <p>{t("about.profile.p1", "Founded and led by Mr. Mehdi Goodarzi, Goodarzi Trading has built its reputation on integrity, deep regulatory expertise, and a global network of vetted suppliers, freight partners and customs brokers.")}</p>
              <p>{t("about.profile.p2", "As an active member of the Tehran Chamber of Commerce, we operate within the highest standards of the Iranian and international trade community. We are the official sales representative of Bedra products in Iran.")}</p>
              <p>{t("about.profile.p3", "Whether you are importing industrial equipment, sourcing raw materials, or exporting Iranian commodities to a new market, our team manages the full lifecycle — documentation, customs, freight and after-shipment support.")}</p>
            </div>
          </div>
          <aside className="rounded-sm border border-border bg-secondary/50 p-8">
            <div className="eyebrow">{t("about.director.eyebrow", "Managing Director")}</div>
            <div className="mt-3 font-display text-2xl text-[color:var(--navy-deep)]">
              {t("about.director.name", "Mr. Mehdi Goodarzi")}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{t("about.director.role", "Founder & CEO")}</div>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--navy)]">
              {t("about.director.bio", "A veteran of international trade with extensive experience across the Middle East, Europe and Asia. Mr. Goodarzi has built Goodarzi Trading on the principles of trust, transparency and precision.")}
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container-x grid gap-10 md:grid-cols-2">
          {[
            { icon: Target, title: t("about.mission.title", "Our Mission"), desc: t("about.mission.desc", "To simplify and accelerate international trade for our clients through expertise, integrity and global reach.") },
            { icon: Eye, title: t("about.vision.title", "Our Vision"), desc: t("about.vision.desc", "To be the most trusted Iranian trading house, recognised internationally for excellence and reliability.") },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-sm border border-border bg-card p-10 shadow-[var(--shadow-card)]">
              <Icon className="h-9 w-9 text-[color:var(--gold)]" />
              <h3 className="mt-5 font-display text-2xl text-[color:var(--navy-deep)]">{title}</h3>
              <p className="mt-3 text-[color:var(--navy)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("about.why.eyebrow", "Why Goodarzi Trading")}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)]">
              {t("about.why.title", "Built on credibility and global relationships")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-l-2 border-[color:var(--gold)] bg-card p-6">
                <Icon className="h-6 w-6 text-[color:var(--gold)]" />
                <h3 className="mt-4 font-display text-lg text-[color:var(--navy-deep)]">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
