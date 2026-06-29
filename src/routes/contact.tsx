import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Goodarzi Trading" },
      { name: "description", content: "Contact Goodarzi Trading in Tehran. Phone, email, WhatsApp, office address and office hours." },
      { property: "og:title", content: "Contact Goodarzi Trading" },
      { property: "og:description", content: "Reach our trade desk in Tehran by phone, email or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(2000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's discuss your next shipment."
        description="Our trade desk in Tehran responds quickly by email, phone and WhatsApp."
      />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, title: "Office", value: "No. 23/1, Ghazal Crossroads, Tenth Street, Tehransar, Tehran, Iran — Postal Code 1388619112" },
              { icon: Phone, title: "Phone", value: "+98 21 44511076", href: "tel:+982144511076" },
              { icon: MessageCircle, title: "Mobile / WhatsApp", value: "+98 919 123 8554", href: "https://wa.me/989191238554" },
              { icon: Mail, title: "Email", value: "info@goodarzitrading.ir", href: "mailto:info@goodarzitrading.ir" },
              { icon: Clock, title: "Office Hours", value: "Sat–Wed · 09:00 – 17:00 (IRST)" },
            ].map((c) => (
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
                <h3 className="mt-5 font-display text-2xl text-[color:var(--navy-deep)]">Message received</h3>
                <p className="mt-2 text-muted-foreground">We'll reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
                <h3 className="font-display text-2xl text-[color:var(--navy-deep)]">Send a message</h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">Name</label>
                    <input name="name" className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">Email</label>
                    <input type="email" name="email" className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[color:var(--navy)]">Message</label>
                    <textarea name="message" rows={6} className="mt-2 w-full rounded-sm border border-input bg-background p-3 text-sm outline-none focus:ring-2 ring-[color:var(--gold)]" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>
                <button type="submit" className="mt-8 w-full rounded-sm bg-[color:var(--navy-deep)] py-4 text-sm font-semibold text-white hover:bg-[color:var(--navy)]">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="container-x mt-16">
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Goodarzi Trading Location"
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
