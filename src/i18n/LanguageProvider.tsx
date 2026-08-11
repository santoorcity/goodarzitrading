import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANG_DIR, LANGS, type Lang } from "./types";
import { dictionary } from "./dictionary";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "gt-lang";

function flatten(lang: Lang): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [ns, bundle] of Object.entries(dictionary)) {
    for (const [k, v] of Object.entries(bundle[lang] ?? {})) {
      out[`${ns}.${k}`] = v;
    }
  }
  return out;
}

const TABLES: Record<Lang, Record<string, string>> = {
  en: flatten("en"),
  fa: flatten("fa"),
  ar: flatten("ar"),
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && (LANGS as string[]).includes(stored)) setLangState(stored as Lang);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = LANG_DIR[lang];
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
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

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: "en", dir: "ltr", setLang: () => {}, t: (k, f) => TABLES.en[k] ?? f ?? k };
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}
