import { kc, localized } from "@/data/knowledge-center";
import { useI18n } from "@/i18n/LanguageProvider";
import { ShieldAlert } from "lucide-react";

export function LegalDisclaimer() {
  const { lang, dir } = useI18n();
  const { value } = localized(kc.legalSafety.siteDisclaimer, lang);
  return (
    <aside
      dir={dir}
      className="rounded-sm border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 p-5 text-sm leading-relaxed text-muted-foreground"
    >
      <div className="mb-2 flex items-center gap-2 font-semibold text-[color:var(--navy-deep)]">
        <ShieldAlert className="h-4 w-4" aria-hidden />
        {lang === "fa" ? "سلب مسئولیت حقوقی" : lang === "ar" ? "إخلاء المسؤولية القانونية" : "Legal disclaimer"}
      </div>
      <p>{value}</p>
    </aside>
  );
}
