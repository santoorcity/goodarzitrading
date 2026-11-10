import { useContext } from "react";
import { LanguageContext } from "./language-context";
import { dictionary } from "./dictionary";
import type { Lang } from "./types";

function flatten(lang: Lang): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [namespace, bundle] of Object.entries(dictionary)) {
    for (const [key, value] of Object.entries(bundle[lang] ?? {})) {
      out[`${namespace}.${key}`] = value;
    }
  }
  return out;
}

const TABLES = {
  en: flatten("en"),
  fa: flatten("fa"),
  ar: flatten("ar"),
} satisfies Record<Lang, Record<string, string>>;

export function useI18n() {
  const context = useContext(LanguageContext);
  if (context) return context;

  return {
    lang: "en" as const,
    dir: "ltr" as const,
    setLang: () => {},
    t: (key: string, fallback?: string) => TABLES.en[key] ?? fallback ?? key,
  };
}

export function useT() {
  return useI18n().t;
}
