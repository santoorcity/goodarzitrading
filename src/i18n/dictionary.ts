import type { Bundle } from "./types";
import { common } from "./locales/common";
import { home } from "./locales/home";
import { about } from "./locales/about";
import { services } from "./locales/services";
import { products } from "./locales/products";
import { network } from "./locales/network";
import { trade } from "./locales/trade";
import { incoterms } from "./locales/incoterms";
import { knowledge } from "./locales/knowledge";
import { blog } from "./locales/blog";
import { inquiry } from "./locales/inquiry";
import { contact } from "./locales/contact";
import { quote } from "./locales/quote";
import { faq } from "./locales/faq";
import { profile } from "./locales/profile";
import { legal } from "./locales/legal";

export const dictionary: Record<string, Bundle> = {
  common,
  home,
  about,
  services,
  products,
  network,
  trade,
  incoterms,
  knowledge,
  blog,
  inquiry,
  contact,
  quote,
  faq,
  profile,
  legal,
};
