import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, Globe2, Factory, Trophy } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Company Profile — Goodarzi Trading" },
      { name: "keywords", content: "company profile, پروفایل شرکت, credentials, certificates, گواهینامه ها, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
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
  const t = useT();
  const groups = [
    {
      icon: Globe2,
      title: t("profile.countries.title", "Countries"),
      items: [
        t("profile.countries.item1", "Türkiye"),
        t("profile.countries.item2", "China"),
        t("profile.countries.item3", "Germany"),
        t("profile.countries.item4", "UAE"),
        t("profile.countries.item5", "Italy"),
        t("profile.countries.item6", "India"),
        t("profile.countries.item7", "Russia"),
        t("profile.countries.item8", "UK"),
        t("profile.countries.item9", "Spain"),
        t("profile.countries.item10", "South Korea"),
      ],
    },
    {
      icon: Factory,
      title: t("profile.industries.title", "Industries"),
      items: [
        t("profile.industries.item1", "Industrial Machinery"),
        t("profile.industries.item2", "Electronics"),
        t("profile.industries.item3", "Automotive Parts"),
        t("profile.industries.item4", "Construction"),
        t("profile.industries.item5", "Agriculture"),
        t("profile.industries.item6", "Food & Beverage"),
        t("profile.industries.item7", "Pharma"),
        t("profile.industries.item8", "Textiles"),
      ],
    },
    {
      icon: Award,
      title: t("profile.certs.title", "Certifications"),
      items: [
        t("profile.certs.item1", "Tehran Chamber of Commerce"),
        t("profile.certs.item2", "Bedra Authorised Rep."),
        t("profile.certs.item3", "ICC Incoterms 2020"),
        t("profile.certs.item4", "UCP 600 Compliant"),
      ],
    },
    {
      icon: Trophy,
      title: t("profile.achievements.title", "Achievements"),
      items: [
        t("profile.achievements.item1", "1,200+ shipments"),
        t("profile.achievements.item2", "40+ countries"),
        t("profile.achievements.item3", "15M+ USD trade volume"),
        t("profile.achievements.item4", "98% on-time delivery"),
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("profile.hero.eyebrow", "Company Profile")}
        title={t("profile.hero.title", "Goodarzi Trading at a glance.")}
        description={t("profile.hero.description", "History, experience, and the global footprint of an established Iranian trading house.")}
      />
      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{t("profile.history.eyebrow", "History")}</span>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--navy-deep)]">{t("profile.history.title", "Two decades of international trade")}</h2>
            <p className="mt-4 text-[color:var(--navy)] leading-relaxed">
              {t("profile.history.desc", "Goodarzi Trading was founded by Mr. Mehdi Goodarzi to bridge Iranian businesses with global suppliers and markets. Over the years the company has become a recognised name in Tehran's trade community and built deep relationships across the Middle East, Europe, Asia and beyond.")}
            </p>
          </div>
          <div>
            <span className="eyebrow">{t("profile.experience.eyebrow", "Experience")}</span>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--navy-deep)]">{t("profile.experience.title", "A track record of complex shipments")}</h2>
            <p className="mt-4 text-[color:var(--navy)] leading-relaxed">
              {t("profile.experience.desc", "From industrial machinery and consumer electronics to agricultural commodities and specialty products like saffron, our team has executed thousands of shipments under every major Incoterm and payment instrument.")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ icon: Icon, title, items }) => (
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
