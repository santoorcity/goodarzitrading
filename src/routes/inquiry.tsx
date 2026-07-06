import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";

const inquirySchema = z.object({
  companyName: z.string().trim().min(2, "Company name is required").max(120),
  contactName: z.string().trim().min(2, "Your name is required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().min(2, "Country is required").max(80),
  destinationPort: z.string().trim().max(120).optional().or(z.literal("")),
  product: z.string().trim().min(2, "Product is required").max(120),
  quantity: z.string().trim().min(1, "Quantity is required").max(80),
  incoterm: z.enum(["FOB", "CIF", "CFR", "EXW", "DAP", "DDP", "OTHER"]),
  buyerType: z.enum(["Importer", "Distributor", "Wholesaler", "Retailer", "Chamber Member", "Trading House", "Other"]),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

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

function InquiryPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

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
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="International Buyers"
        title="Send your import inquiry to Iran"
        description="Dedicated form for overseas importers, distributors and chamber-of-commerce members. We reply within one business day with pricing, availability and shipping options."
      />

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Company Name *" name="companyName" error={errors.companyName} />
              <Field label="Your Name *" name="contactName" error={errors.contactName} />
              <Field label="Email *" name="email" type="email" error={errors.email} />
              <Field label="Phone / WhatsApp" name="phone" error={errors.phone} />
              <Field label="Country *" name="country" error={errors.country} />
              <Field label="Destination Port" name="destinationPort" placeholder="e.g. Jebel Ali, Hamburg" error={errors.destinationPort} />

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                  Buyer Type *
                </label>
                <select
                  name="buyerType"
                  defaultValue="Importer"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                >
                  {["Importer","Distributor","Wholesaler","Retailer","Chamber Member","Trading House","Other"].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                  Incoterm *
                </label>
                <select
                  name="incoterm"
                  defaultValue="FOB"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                >
                  {["FOB","CIF","CFR","EXW","DAP","DDP","OTHER"].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <Field label="Product *" name="product" placeholder="e.g. Super Negin Saffron" error={errors.product} />
              <Field label="Quantity *" name="quantity" placeholder="e.g. 500 kg / 1 FCL" error={errors.quantity} />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--navy)]">
                Additional Notes
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={1500}
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
                placeholder="Packaging preferences, delivery timeline, quality specs, certificates required…"
              />
            </div>

            {sent && (
              <div className="mt-6 flex items-start gap-3 rounded-sm border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  Your inquiry opened in WhatsApp. If it did not open, email us at{" "}
                  <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </div>
              </div>
            )}

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[color:var(--navy-deep)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)]"
            >
              <Send className="h-4 w-4" /> Send Inquiry
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-sm border border-border bg-card p-6">
              <span className="eyebrow">Direct contact</span>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</div>
                  <a href={`mailto:${EMAIL}`} className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">{EMAIL}</a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">WhatsApp</div>
                  <a href={`https://wa.me/${WHATSAPP}`} className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">+98 919 123 8554</a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Office</div>
                  <a href="tel:+982144511076" className="font-medium text-[color:var(--navy-deep)] hover:text-[color:var(--gold)]">+98 21 44511076</a>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-[color:var(--navy-deep)] p-6 text-white">
              <span className="eyebrow text-[color:var(--gold)]">Why buyers choose us</span>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>• Tehran Chamber of Commerce member (TCCIMA)</li>
                <li>• Registered trademark No. 485993</li>
                <li>• Full export documentation & lab certificates</li>
                <li>• FOB · CIF · CFR · DAP · DDP terms</li>
                <li>• 20+ years international trade experience</li>
                <li>• Response within 1 business day</li>
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
