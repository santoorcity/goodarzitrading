export type Lang = "en" | "fa" | "ar";

export const LANGS: Lang[] = ["en", "fa", "ar"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

export const LANG_DIR: Record<Lang, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
  ar: "rtl",
};

/** A namespace bundle: the same key set translated into every language. */
export type Bundle = Record<Lang, Record<string, string>>;
