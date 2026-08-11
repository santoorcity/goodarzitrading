import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useMemo, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const WHATSAPP = "989191238554";
const EMAIL = "info@goodarzitrading.ir";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "International Buyer Inquiry — Import from Iran | Goodarzi Trading" },
      {
        name: "description",
        content:
          "International buyers: send an inquiry to import saffron, pistachio, dates, carpets or any Iranian product. Response within 1 business day. FOB / CIF / DDP terms available.",
      },
      {
        name: "keywords",
        content:
          "international buyer inquiry Iran, import from Iran inquiry form, buy from Iran, FOB CIF Iran, request quote Iran export, فرم استعلام خرید بین المللی, goodarzi trading",
      },
      { property: "og:title", content: "International Buyer Inquiry — Goodarzi Trading" },
      {
        property: "og:description",
        content:
          "Dedicated inquiry form for international importers, distributors and chamber-of-commerce members buying from Iran.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://goodarzitrading.lovable.app/inquiry" },
    ],
    links: [{ rel: "canonical", href: "https://goodarzitrading.lovable.app/inquiry" }],
  }),
  component: InquiryPage,
});

const BUYER_TYPES = ["Importer", "Distributor", "Wholesaler", "Retailer", "Chamber Member", "Trading House", "Other"] as const;
const INCOTERMS = ["FOB", "CIF", "CFR", "EXW", "DAP", "DDP", "OTHER"] as const;

function InquiryPage() {
  const t = useT();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const inquirySchema = useMemo(
    () =>
      z.object({
        companyName: z.string().trim().min(2, t("inquiry.error.companyName", "Company name is required")).max(120),
        contactName: z.string().trim().min(2, t("inquiry.error.contactName", "Your name is required")).max(80),
        email: z.string().trim().email(t("inquiry.error.email", "Invalid email")).max(255),
        phone: z.string().trim().max(40).optional().or(z.literal("")),
        country: z.string().trim().min(2, t("inquiry.error.country", "Country is required")).max(80),
        destinationPort: z.string().trim().max(120).optional().or(z.literal("")),
        product: z.string().trim().min(2, t("inquiry.error.product", "Product is required")).max(120),
        quantity: z.string().trim().min(1, t("inquiry.error.quantity", "Quantity is required")).max(80),
        incoterm: z.enum(INCOTERMS),
        buyerType: z.enum(BUYER_TYPES),
        message: z.string().trim().max(1500).optional().or(z.literal("")),
      }),
    [t],
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd) as Record<string, string>;
    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const lines = [
      "*International Buyer Inquiry*",
      `Company: ${d.companyName}`,
      `Contact: ${d.contactName}`,
      `Email: ${d.email}`,
      d.phone ? `Phone: ${d.phone}` : null,
      `Country: ${d.country}`,
      d.destinationPort ? `Destination Port: ${d.destinationPort}` : null,
      `Buyer Type: ${d.buyerType}`,
      `Product: ${d.product}`,
      `Quantity: ${d.quantity}`,
      `Incoterm: ${d.incoterm}`,
      d.message ? `\nNotes:\n${d.message}` : null,
    ].filter(Boolean).join("\n");

    // 1) Open WhatsApp with the pre-filled inquiry
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // 2) Also send a copy by email (opens the user's email client)
    const subject = `International Buyer Inquiry — ${d.companyName} (${d.country})`;
    const mailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 400);

    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow={t("inquiry.hero.eyebrow", "International Buyers")}
        title={t("inquiry.hero.title", "Send your import inquiry to Iran")}
        description={t("inquiry.hero.description", "Dedicated form for overseas importers, distributors and chamber-of-commerce members. We reply within one business day with pricing, availability and shipping options.")}
      />

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={t("inquiry.field.companyName", "Company Name *")} name="companyName" error={errors.companyName} />
              <Field label={t("inquiry.field.contactName", "Your Name *")} name="contactName" error={errors.contactName} />
              <Field label={t("inquiry.field.email", "Email *")} name="email" type="email" error={errors.email} />
              <Field label={t("inquiry.field.phone", "Phone / WhatsApp")} name="phone" error={errors.phone} />
              <Field label={t("inquiry.field.country", "Country *")} name="country" error={errors.country} />
              <Field label={t("inquiry.field.destinationPort", "Destination Port")} name="destinationPort" placeholder={t("inquiry.field.destinationPort.placeholder", "e.g. Jebel Ali, Hamburg")} error={errors.destinationPort} />

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                  {t("inquiry.field.buyerType", "Buyer Type *")}
                </label>
                <select
                  name="buyerType"
                  defaultValue="Importer"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                >
                  {BUYER_TYPES.map((v) => (
                    <option key={v} value={v}>{t(`inquiry.buyerType.${v}`, v)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                  {t("inquiry.field.incoterm", "Incoterm *")}
                </label>
                <select
                  name="incoterm"
                  defaultValue="FOB"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                >
                  {INCOTERMS.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <Field label={t("inquiry.field.product", "Product *")} name="product" placeholder={t("inquiry.field.product.placeholder", "e.g. Super Negin Saffron")} error={errors.product} />
              <Field label={t("inquiry.field.quantity", "Quantity *")} name="quantity" placeholder={t("inquiry.field.quantity.placeholder", "e.g. 500 kg / 1 FCL")} error={errors.quantity} />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                {t("inquiry.field.message", "Additional Notes")}
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={1500}
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                placeholder={t("inquiry.field.message.placeholder", "Packaging preferences, delivery timeline, quality specs, certificates required…")}
              />
            </div>

            {sent && (
              <div className="mt-6 flex items-start gap-3 rounded-sm border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  {t("inquiry.success.text", "Your inquiry was sent to our WhatsApp and a copy opened in your email client to {email}. We reply within 1 business day.").replace(
                    "{email}",
                    "",
                  )}
                  <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)]"
            >
              <Send className="h-4 w-4" /> {t("inquiry.submit", "Send Inquiry")}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-sm border border-border bg-card p-6">
              <span className="eyebrow">{t("inquiry.aside.direct.title", "Direct contact")}</span>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{t("inquiry.aside.direct.email", "Email")}</div>
                  <a href={`mailto:${EMAIL}`} className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">{EMAIL}</a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{t("inquiry.aside.direct.whatsapp", "WhatsApp")}</div>
                  <a href={`https://wa.me/${WHATSAPP}`} className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">+98 919 123 8554</a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{t("inquiry.aside.direct.office", "Office")}</div>
                  <a href="tel:+982144511076" className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">+98 21 44511076</a>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-[color:var(--navy-deep)] p-6 text-white">
              <span className="eyebrow text-[color:var(--gold)]">{t("inquiry.aside.why.title", "Why buyers choose us")}</span>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>• {t("inquiry.aside.why.1", "Tehran Chamber of Commerce member (TCCIMA)")}</li>
                <li>• {t("inquiry.aside.why.2", "Registered trademark No. 485993")}</li>
                <li>• {t("inquiry.aside.why.3", "Full export documentation & lab certificates")}</li>
                <li>• {t("inquiry.aside.why.4", "FOB · CIF · CFR · DAP · DDP terms")}</li>
                <li>• {t("inquiry.aside.why.5", "20+ years international trade experience")}</li>
                <li>• {t("inquiry.aside.why.6", "Response within 1 business day")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
