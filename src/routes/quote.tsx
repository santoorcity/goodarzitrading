import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Upload } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Goodarzi Trading" },
      { name: "keywords", content: "درخواست قیمت, request quote, RFQ, freight quote, استعلام قیمت واردات, import export Iran, goodarzi trading, واردات صادرات ایران, تجارت بین الملل, customs consulting Tehran" },
      { name: "description", content: "Request a tailored quote for import, export, sourcing or customs services. We respond within one business day." },
      { property: "og:title", content: "Request a Quote — Goodarzi Trading" },
      { property: "og:description", content: "Tell us about your shipment, supplier or sourcing need." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = useMemo(() => {
    const required = t("quote.error.required", "Required");
    const invalidEmail = t("quote.error.email", "Invalid email");
    return z.object({
      company: z.string().trim().min(1, required).max(120),
      person: z.string().trim().min(1, required).max(120),
      email: z.string().trim().email(invalidEmail).max(200),
      phone: z.string().trim().min(4).max(40),
      product: z.string().trim().min(1, required).max(200),
      hsCode: z.string().trim().max(40).optional().or(z.literal("")),
      quantity: z.string().trim().max(80).optional().or(z.literal("")),
      origin: z.string().trim().max(80).optional().or(z.literal("")),
      destination: z.string().trim().max(80).optional().or(z.literal("")),
      message: z.string().trim().max(2000).optional().or(z.literal("")),
    });
  }, [t]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) {
        errs[i.path[0] as string] = i.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <>
        <PageHero eyebrow={t("quote.meta.eyebrow", "Request Submitted")} title={t("quote.meta.title.done", "Thank you — your request is on its way.")} />
        <section className="py-24">
          <div className="container-x mx-auto max-w-xl text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[color:var(--gold)]" />
            <p className="mt-6 text-lg text-[color:var(--navy)]">
              {t("quote.meta.body.done", "Our trade desk will review your request and respond within one business day.")}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={t("quote.hero.eyebrow", "Request a Quote")}
        title={t("quote.hero.title", "Get a tailored trade quote in one business day.")}
        description={t("quote.hero.description", "Tell us about your shipment, supplier or sourcing need. The more detail, the faster the turnaround.")}
      />
      <section className="py-24">
        <div className="container-x mx-auto max-w-3xl">
          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label={t("quote.field.company", "Company Name *")} name="company" error={errors.company} />
              <Field label={t("quote.field.person", "Contact Person *")} name="person" error={errors.person} />
              <Field label={t("quote.field.email", "Email *")} name="email" type="email" error={errors.email} />
              <Field label={t("quote.field.phone", "Phone / WhatsApp *")} name="phone" error={errors.phone} />
              <Field label={t("quote.field.product", "Product Name *")} name="product" error={errors.product} />
              <Field label={t("quote.field.hsCode", "HS Code")} name="hsCode" placeholder={t("quote.field.hsCode.placeholder", "e.g. 8471.30")} />
              <Field label={t("quote.field.quantity", "Quantity")} name="quantity" placeholder={t("quote.field.quantity.placeholder", "e.g. 1000 units / 2 x 40HC")} />
              <Field label={t("quote.field.origin", "Origin Country")} name="origin" />
              <Field label={t("quote.field.destination", "Destination Country")} name="destination" />
            </div>
            <div className="mt-6">
              <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">{t("quote.field.message", "Message")}</label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                className="mt-2 w-full rounded-sm border border-input bg-background p-3 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
              />
            </div>
            <div className="mt-6">
              <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-border bg-secondary/40 px-4 py-4 text-sm text-muted-foreground hover:bg-secondary/60">
                <Upload className="h-4 w-4" />
                <span>{t("quote.field.attach", "Attach file (specs, drawings, PI...)")}</span>
                <input type="file" name="file" className="sr-only" />
              </label>
            </div>
            <button type="submit" className="mt-8 w-full rounded-sm bg-[color:var(--navy-deep)] py-4 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)] md:w-auto md:px-12">
              {t("quote.submit", "Submit Request")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
