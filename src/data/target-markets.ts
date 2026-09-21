import { getExportProduct, SITE_URL, type ExportProduct } from "./export-products";

export type TargetMarket = {
  slug: string;
  productSlug: string;
  market: string;
  title: string;
  description: string;
  buyerProfiles: string[];
  considerations: string[];
  faqs: Array<{ q: string; a: string }>;
};

const destinationNotice =
  "The overseas importer should confirm current destination-country classification, admissibility, registration, labelling, testing and customs requirements with its competent authority or customs broker before shipment.";

export const TARGET_MARKETS: TargetMarket[] = [
  {
    slug: "iranian-saffron-uae",
    productSlug: "iranian-saffron",
    market: "the UAE",
    title: "Iranian Saffron Export to UAE",
    description: "Iranian saffron supply for UAE importers, distributors, food-service buyers and repackers, with verified grades, packing options and export documentation.",
    buyerProfiles: ["Food importers and distributors", "Retail and private-label repackers", "Food-service and ingredient buyers", "Wholesale trading companies"],
    considerations: ["Air freight can suit high-value, low-volume consignments.", "Confirm Arabic/English label content and importer requirements before packing.", destinationNotice],
    faqs: [
      { q: "Which saffron grades are available for UAE buyers?", a: "Super Negin, Negin, Sargol and Pushal are listed, subject to lot availability and agreed specification." },
      { q: "Can saffron be supplied in private-label packs?", a: "Yes. Private-label and buyer-branded packing is listed, with retail packs from 0.1 g to 100 g and bulk packs up to 1 kg per unit." },
      { q: "Does this page imply UAE registration or local stock?", a: "No. It describes export supply from Iran. Importer registrations, product approvals and local requirements must be confirmed for the specific transaction." },
    ],
  },
  {
    slug: "iranian-saffron-china",
    productSlug: "iranian-saffron",
    market: "China",
    title: "Iranian Saffron Export to China",
    description: "Iranian saffron for Chinese importers and wholesale buyers, with Super Negin, Negin, Sargol and Pushal grades, packing choices and buyer due diligence guidance.",
    buyerProfiles: ["Licensed food and spice importers", "Wholesale distributors", "Retail and e-commerce repackers", "Food ingredient buyers"],
    considerations: ["Agree product identity, lot testing and Chinese-language label responsibilities before shipment.", "Air freight is available from Tehran for high-value consignments.", destinationNotice],
    faqs: [
      { q: "What is the HS code listed for saffron?", a: "The site lists saffron under HS 0910.20. The Chinese importer should confirm the full national tariff line." },
      { q: "Is GACC registration claimed on this page?", a: "No. Goodarzi Trading does not claim a China registration here. The importer must confirm all current registration and admissibility requirements before ordering." },
      { q: "What details should a China buyer send for a quote?", a: "Send grade, quantity, packing, destination, required tests and any importer-specific documentation or labelling instructions." },
    ],
  },
  {
    slug: "iranian-saffron-europe",
    productSlug: "iranian-saffron",
    market: "Europe",
    title: "Iranian Saffron Export to Europe",
    description: "Iranian saffron supply for European importers, distributors and repackers, with ISO 3632 analysis on request, grade options, packing and shipment planning.",
    buyerProfiles: ["Spice importers and distributors", "Speciality food wholesalers", "Retail and private-label repackers", "Food manufacturers"],
    considerations: ["Buyers can request ISO 3632 analysis for crocin, safranal and picrocrocin.", "Agree label language, lot traceability and importer testing requirements before final packing.", destinationNotice],
    faqs: [
      { q: "Is ISO 3632 analysis available?", a: "Yes. ISO 3632 laboratory analysis is listed as available on request for saffron consignments." },
      { q: "What is the minimum order?", a: "The published minimum order is 1 kg." },
      { q: "Does Goodarzi Trading claim EU approval or a European warehouse?", a: "No. Supply is offered from Iran, and no EU registration, warehouse or established distribution channel is claimed." },
    ],
  },
  {
    slug: "iranian-pistachio-uae",
    productSlug: "iranian-pistachio",
    market: "the UAE",
    title: "Iranian Pistachio Export to UAE",
    description: "Iranian pistachios for UAE importers and wholesalers: Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi with packing and export document options.",
    buyerProfiles: ["Nut and snack importers", "Food wholesalers and distributors", "Roasters and packers", "Retail supply companies"],
    considerations: ["Specify raw, roasted or salted and in-shell or kernel form.", "Agree ounce size, defect tolerance and aflatoxin testing before contracting.", destinationNotice],
    faqs: [
      { q: "Which pistachio varieties are available?", a: "Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi are listed." },
      { q: "What packing is offered?", a: "The product page lists 10 kg and 25 kg vacuum packs and jute bags for bulk shipments." },
      { q: "What is the minimum order?", a: "The published minimum order is 1 metric tonne." },
    ],
  },
  {
    slug: "iranian-pistachio-europe",
    productSlug: "iranian-pistachio",
    market: "Europe",
    title: "Iranian Pistachio Export to Europe",
    description: "Iranian pistachio supply for European importers, roasters and distributors, with four listed varieties, aflatoxin reporting and shipment documentation.",
    buyerProfiles: ["Nut importers and distributors", "Roasters and snack manufacturers", "Ingredient buyers", "Retail repackers"],
    considerations: ["An aflatoxin laboratory report is listed with pistachio consignments.", "The importer should define sampling, test acceptance and destination border documentation in the contract.", destinationNotice],
    faqs: [
      { q: "Is aflatoxin testing available?", a: "Yes. Goodarzi Trading lists an aflatoxin laboratory report for pistachio consignments." },
      { q: "Can pistachios be supplied as kernels?", a: "Yes. Supply formats include in-shell pistachios and kernels, raw, roasted or salted." },
      { q: "Does this page claim EU certification?", a: "No. It lists available product and export documents but does not claim an EU approval or certification." },
    ],
  },
  {
    slug: "iranian-dates-uae",
    productSlug: "iranian-dates",
    market: "the UAE",
    title: "Iranian Dates Export to UAE",
    description: "Iranian Mazafati, Piarom, Zahedi, Rabbi and Kabkab dates for UAE importers, wholesalers and retailers, with bulk and retail packing options.",
    buyerProfiles: ["Fresh and dried fruit importers", "Food wholesalers", "Supermarket suppliers", "Retail and food-service distributors"],
    considerations: ["State the date variety and moisture condition in the purchase specification.", "Cold-chain arrangements should be agreed for the selected variety and route.", destinationNotice],
    faqs: [
      { q: "Which Iranian dates are available?", a: "Mazafati, Piarom, Zahedi, Rabbi and Kabkab are listed." },
      { q: "Which packing formats are listed?", a: "Available formats include 5 kg and 10 kg cartons and retail packs for supermarket distribution." },
      { q: "What is the minimum order?", a: "The published minimum order is 5 metric tonnes." },
    ],
  },
  {
    slug: "iranian-barberry-europe",
    productSlug: "iranian-barberry",
    market: "Europe",
    title: "Iranian Barberry Export to Europe",
    description: "Iranian Puffy, Anari and seedless barberry for European importers, speciality food buyers and repackers, with carton or vacuum packing.",
    buyerProfiles: ["Speciality food importers", "Dried-fruit distributors", "Ingredient buyers", "Retail and private-label repackers"],
    considerations: ["Agree grade, colour, moisture condition and cleanliness criteria against an identified lot.", "Vacuum packing can help protect product condition and colour during transit.", destinationNotice],
    faqs: [
      { q: "Which barberry grades are available?", a: "Puffy, Anari and seedless barberry are listed from South Khorasan." },
      { q: "What packing is offered?", a: "Goodarzi Trading lists 5 kg and 10 kg cartons and vacuum packs." },
      { q: "Does this page claim an EU registration or distributor?", a: "No. It describes export supply from Iran and makes no claim of EU registration, customers, distributors or local stock." },
    ],
  },
];

export function getTargetMarket(slug: string) {
  return TARGET_MARKETS.find((market) => market.slug === slug);
}

export function getMarketProduct(market: TargetMarket): ExportProduct | undefined {
  return getExportProduct(market.productSlug);
}

export function targetMarketUrl(slug: string) {
  return `${SITE_URL}/markets/${slug}`;
}
