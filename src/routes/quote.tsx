import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Upload } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Goodarzi Trading" },
      { name: "description", content: "Request a tailored quote for import, export, sourcing or customs services. We respond within one business day." },
      { property: "og:title", content: "Request a Quote — Goodarzi Trading" },
      { property: "og:description", content: "Tell us about your shipment, supplier or sourcing need." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

const schema = z.object({
  company: z.string().trim().min(1, "Required").max(120),
  person: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(4).max(40),
  product: z.string().trim().min(1, "Required").max(200),
  hsCode: z.string().trim().max(40).optional().or(z.literal("")),
  quantity: z.string().trim().max(80).optional().or(z.literal("")),
  origin: z.string().trim().max(80).optional().or(z.literal("")),
  destination: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Quote() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        <PageHero eyebrow="Request Submitted" title="Thank you — your request is on its way." />
        <section className="py-24">
          <div className="container-x mx-auto max-w-xl text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[color:var(--gold)]" />
            <p className="mt-6 text-lg text-[color:var(--navy)]">
              Our trade desk will review your request and respond within one business day.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Get a tailored trade quote in one business day."
        description="Tell us about your shipment, supplier or sourcing need. The more detail, the faster the turnaround."
      />
      <section className="py-24">
        <div className="container-x mx-auto max-w-3xl">
          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Company Name *" name="company" error={errors.company} />
              <Field label="Contact Person *" name="person" error={errors.person} />
              <Field label="Email *" name="email" type="email" error={errors.email} />
              <Field label="Phone / WhatsApp *" name="phone" error={errors.phone} />
              <Field label="Product Name *" name="product" error={errors.product} />
              <Field label="HS Code" name="hsCode" placeholder="e.g. 8471.30" />
              <Field label="Quantity" name="quantity" placeholder="e.g. 1000 units / 2 x 40HC" />
              <Field label="Origin Country" name="origin" />
              <Field label="Destination Country" name="destination" />
            </div>
            <div className="mt-6">
              <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">Message</label>
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
                <span>Attach file (specs, drawings, PI...)</span>
                <input type="file" name="file" className="sr-only" />
              </label>
            </div>
            <button type="submit" className="mt-8 w-full rounded-sm bg-[color:var(--navy-deep)] py-4 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--navy)] md:w-auto md:px-12">
              Submit Request
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
