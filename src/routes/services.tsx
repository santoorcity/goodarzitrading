import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/i18n/LanguageProvider";
import {
  Ship, Plane, Truck, FileCheck, Search, Globe, ShieldCheck, Package, FileText,
  ShoppingCart, BadgeCheck, ScrollText,
} from "lucide-react";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Goodarzi Trading" },
      { name: "keywords", content: "trade services, sourcing, logistics, freight, quality inspection, بازرسی کالا, مشاوره خرید, contract management, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Import, export, customs clearance, consulting, international logistics, sourcing, supplier verification, trade documentation and freight services." },
      { property: "og:title", content: "Services — Goodarzi Trading" },
      { property: "og:description", content: "Full-spectrum international trade services from Tehran to the world." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const serviceDefs = [
  { icon: Ship, titleKey: "importTitle", descKey: "importDesc" },
  { icon: Plane, titleKey: "exportTitle", descKey: "exportDesc" },
  { icon: FileCheck, titleKey: "customsClearanceTitle", descKey: "customsClearanceDesc" },
  { icon: Search, titleKey: "customsConsultingTitle", descKey: "customsConsultingDesc" },
  { icon: Truck, titleKey: "logisticsTitle", descKey: "logisticsDesc" },
  { icon: Globe, titleKey: "sourcingTitle", descKey: "sourcingDesc" },
  { icon: ShieldCheck, titleKey: "verificationTitle", descKey: "verificationDesc" },
  { icon: FileText, titleKey: "documentationTitle", descKey: "documentationDesc" },
  { icon: Package, titleKey: "freightTitle", descKey: "freightDesc" },
  { icon: ShoppingCart, titleKey: "purchaseConsultingTitle", descKey: "purchaseConsultingDesc" },
  { icon: BadgeCheck, titleKey: "qualityInspectionTitle", descKey: "qualityInspectionDesc" },
  { icon: ScrollText, titleKey: "contractManagementTitle", descKey: "contractManagementDesc" },
];


function Services() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("services.heroEyebrow", "Our Services")}
        title={t("services.heroTitle", "Full-spectrum trade services.")}
        description={t(
          "services.heroDesc",
          "From your first supplier conversation to the final customs release, Goodarzi Trading provides every service required to move goods across borders."
        )}
      />
      <section className="py-24">
        <div className="container-x grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
          {serviceDefs.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="group bg-card p-10 transition-colors hover:bg-[color:var(--navy-deep)]">
              <Icon className="h-9 w-9 text-[color:var(--gold)]" />
              <h3 className="mt-5 font-display text-xl text-[color:var(--navy-deep)] group-hover:text-white">{t(`services.${titleKey}`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">{t(`services.${descKey}`)}</p>
            </div>
          ))}
        </div>
        <div className="container-x mt-16 text-center">
          <Link to="/quote" className="inline-flex rounded-sm bg-[color:var(--navy-deep)] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[color:var(--navy)]">
            {t("services.ctaQuote", "Request a Quote")}
          </Link>
        </div>
      </section>
    </>
  );
}
