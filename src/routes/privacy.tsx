import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Goodarzi Trading" },
      { name: "keywords", content: "privacy policy, حریم خصوصی, سیاست حفظ اطلاعات, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "How Goodarzi Trading collects, uses and protects information submitted through our website and trade services." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow={t("legal.privacy.eyebrow", "Legal")} title={t("legal.privacy.title", "Privacy Policy")} />
      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl prose prose-slate space-y-6 text-[color:var(--navy)]">
          <p className="text-sm text-muted-foreground">{t("legal.privacy.updated", "Last updated: June 2026")}</p>
          <p>{t("legal.privacy.intro", "This page is maintained by Goodarzi Trading to describe how we collect and handle information through our website.")}</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">{t("legal.privacy.collect.title", "Information we collect")}</h2>
          <p>{t("legal.privacy.collect.body", "When you contact us or submit a quote request, we collect the details you provide — name, company, contact details, and the trade details relevant to your inquiry.")}</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">{t("legal.privacy.use.title", "How we use it")}</h2>
          <p>{t("legal.privacy.use.body", "Submitted information is used solely to respond to your inquiry, prepare quotes, and coordinate trade services on your behalf.")}</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">{t("legal.privacy.sharing.title", "Sharing")}</h2>
          <p>{t("legal.privacy.sharing.body", "We do not sell personal information. We share details only with service providers (e.g. freight forwarders, customs brokers) strictly to fulfil your trade request.")}</p>
          <h2 className="font-display text-2xl text-[color:var(--navy-deep)]">{t("legal.privacy.contact.title", "Contact")}</h2>
          <p>{t("legal.privacy.contact.body", "Questions about this policy:")} <a className="text-[color:var(--gold)]" href="mailto:info@goodarzitrading.ir">info@goodarzitrading.ir</a>.</p>
        </div>
      </section>
    </>
  );
}
