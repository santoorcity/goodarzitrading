import { Globe } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { LANGS, LANG_LABELS } from "@/i18n/types";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t("common.lang.label")}>
      {!compact && <Globe className="h-4 w-4 text-muted-foreground" aria-hidden />}
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
          className={`rounded-sm px-2 py-1 text-xs font-medium transition-colors ${
            lang === l
              ? "bg-[color:var(--navy-deep)] text-white"
              : "text-muted-foreground hover:text-[color:var(--navy)]"
          }`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
