import raw from "./knowledge-center.json";
import type { Lang } from "@/i18n/types";

export type I18nText = { en: string; fa?: string; ar?: string };

export type KcCategory = {
  id: string;
  slug: string;
  type: string;
  title: I18nText;
  displayStatus: "populated" | "coming_soon" | "populated_via_dedicated_section" | string;
};

export type KcEntry = {
  category: string;
  id: string;
  title: I18nText;
  instrumentType: string;
  administeringBody: string;
  summary: I18nText;
  scope: string;
  officialSource: string;
  status: string;
  dataCompiledDate: string;
  lastLegalVerification: string | null;
};

export type KcModelContract = {
  chapter: number;
  title: I18nText;
  modelContract: string;
  source: string;
};

export type KcIncotermRule = { code: string; officialName: string; transport: string };

export type KcPriorityEntry = {
  name: string;
  nameFa?: string;
  nameAr?: string;
  classification?: string;
  status?: string;
};

type KcData = {
  categories: KcCategory[];
  itcModelContracts: KcModelContract[];
  internationalSaleOfGoodsShortVersionArticles: string[];
  priorityEntries: Record<string, KcPriorityEntry[]>;
  incoterms: { title: I18nText; rules: KcIncotermRule[]; detailTemplate: string[] };
  legalSafety: { siteDisclaimer: I18nText };
  pageTemplate: { sections: string[] };
  registry: { entries: KcEntry[] };
  completenessNote: I18nText;
};

export const kc = raw as unknown as KcData;

export const NEEDS_VERIFICATION: Record<Lang, string> = {
  en: "Requires review and confirmation from an official source",
  fa: "نیازمند بررسی و تأیید از منبع رسمی",
  ar: "يتطلب المراجعة والتأكيد من مصدر رسمي",
};

export const TRANSLATION_UNAVAILABLE: Record<Lang, string> = {
  en: "",
  fa: "ترجمه فارسی هنوز در دسترس نیست",
  ar: "الترجمة العربية غير متوفرة بعد",
};

/** Localized text without machine translation: falls back to English with a notice flag. */
export function localized(text: I18nText | undefined, lang: Lang): { value: string; fallback: boolean } {
  if (!text) return { value: "", fallback: false };
  const v = (text as Record<string, string | undefined>)[lang];
  if (v && v.trim()) return { value: v, fallback: false };
  const en = text.en?.trim() ?? "";
  return { value: en, fallback: lang !== "en" && en.length > 0 };
}

export function categoryBySlug(slug: string): KcCategory | undefined {
  return kc.categories.find((c) => c.slug === slug);
}

export function entriesForCategory(slug: string): KcEntry[] {
  return kc.registry.entries.filter((e) => e.category === slug);
}

export function entryById(id: string): KcEntry | undefined {
  return kc.registry.entries.find((e) => e.id === id);
}

export function incotermByCode(code: string): KcIncotermRule | undefined {
  return kc.incoterms.rules.find((r) => r.code.toLowerCase() === code.toLowerCase());
}
