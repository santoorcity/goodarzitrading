import { createContext } from "react";
import type { Lang } from "./types";

export type LanguageContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
