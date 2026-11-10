import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import { isLang, LANG_DIR, LANGS, type Lang } from "./types";
import { dictionary } from "./dictionary";

const STORAGE_KEY = "gt-lang";

function flatten(lang: Lang): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [namespace, bundle] of Object.entries(dictionary)) {
    for (const [key, value] of Object.entries(bundle[lang] ?? {})) {
      out[`${namespace}.${key}`] = value;
    }
  }
  return out;
}

const TABLES = Object.fromEntries(
  LANGS.map((language) => [language, flatten(language)]),
) as Record<Lang, Record<string, string>>;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (isLang(stored)) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = LANG_DIR[lang];
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    if (!LANGS.includes(l)) return;
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string, fallback?: string) =>
      TABLES[lang][key] ?? TABLES.en[key] ?? fallback ?? key,
    [lang],
  );

  const value = useMemo<Ctx>(() => ({ lang, dir: LANG_DIR[lang], setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
