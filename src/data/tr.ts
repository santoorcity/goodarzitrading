import type { Lang } from "@/i18n/types";
import { dataTranslations } from "./translations";

/**
 * Translates a Persian source string coming from the static data files.
 * Falls back to the original Persian text when no translation exists.
 */
export function tr(source: string, lang: Lang): string {
  if (lang === "fa") return source;
  const entry = dataTranslations[source];
  if (!entry) return source;
  return entry[lang] ?? source;
}
