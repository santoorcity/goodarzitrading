import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Goodarzi Trading" },
      { name: "keywords", content: "تماس با گودرزی تریدینگ, contact goodarzi trading, Tehran office, WhatsApp, ایمیل بازرگانی, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Contact Goodarzi Trading in Tehran. Phone, email, WhatsApp, office address and office hours." },
      { property: "og:title", content: "Contact Goodarzi Trading" },
      { property: "og:description", content: "Reach our trade desk in Tehran by phone, email or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, t("contact.error.name", "Name is required")).max(120),
        email: z.string().trim().email(t("contact.error.email", "Please enter a valid email")).max(200),
        message: z.string().trim().min(1, t("contact.error.message", "Message is required")).max(2000),
      }),
    [t],
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  const cards = [
    { icon: MapPin, title: t("contact.info.office.title", "Office"), value: t("contact.info.office.value", "No. 23/1, Ghazal Crossroads, Tenth Street, Tehransar, Tehran, Iran — Postal Code 1388619112") },
    { icon: Phone, title: t("contact.info.phone.title", "Phone"), value: "+98 21 44511076", href: "tel:+982144511076" },
    { icon: MessageCircle, title: t("contact.info.whatsapp.title", "Mobile / WhatsApp"), value: "+98 919 123 8554", href: "https://wa.me/989191238554" },
    { icon: Mail, title: t("contact.info.email.title", "Email"), value: "info@goodarzitrading.ir", href: "mailto:info@goodarzitrading.ir" },
    { icon: Clock, title: t("contact.info.hours.title", "Office Hours"), value: t("contact.info.hours.value", "Sat–Wed · 09:00 – 17:00 (IRST)") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow", "Get in Touch")}
        title={t("contact.hero.title", "Let's discuss your next shipment.")}
        description={t("contact.hero.description", "Our trade desk in Tehran responds quickly by email, phone and WhatsApp.")}
      />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {cards.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-sm border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[color:var(--navy-deep)] text-[color:var(--gold)]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="mt-0.5 block text-sm text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">{c.value}</a>
                  ) : (
                    <p className="mt-0.5 text-sm text-[color:var(--navy-deep)]">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-sm border border-border bg-card p-12 text-center shadow-[var(--shadow-card)]">
                <CheckCircle2 className="h-14 w-14 text-[color:var(--gold)]" />
                <h3 className="mt-5 font-display text-2xl text-[color:var(--navy-deep)]">{t("contact.success.title", "Message received")}</h3>
                <p className="mt-2 text-muted-foreground">{t("contact.success.description", "We'll reply within one business day.")}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
                <h3 className="font-display text-2xl text-[color:var(--navy-deep)]">{t("contact.form.title", "Send a message")}</h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">{t("contact.form.name", "Name")}</label>
                    <input name="name" className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">{t("contact.form.email", "Email")}</label>
                    <input type="email" name="email" className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">{t("contact.form.message", "Message")}</label>
                    <textarea name="message" rows={6} className="mt-2 w-full rounded-sm border border-input bg-background p-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>
                <button type="submit" className="mt-8 w-full rounded-sm bg-[color:var(--navy-deep)] py-4 text-sm font-semibold text-white hover:bg-[color:var(--navy)]">
                  {t("contact.form.submit", "Send Message")}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="container-x mt-16">
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title={t("contact.map.title", "Goodarzi Trading Location")}
              src="https://www.openstreetmap.org/export/embed.html?bbox=51.220%2C35.700%2C51.260%2C35.730&layer=mapnik&marker=35.715%2C51.240"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
