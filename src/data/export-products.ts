import mamraAlmonds from "@/assets/products/mamra-almonds.jpg.asset.json";

/**
 * Canonical, English-language product data for the public export catalogue and
 * the per-product SEO landing pages. Every value here is drawn from the
 * information already published on the site (i18n `products` bundle, the HS
 * code data set and the company profile). Nothing is invented.
 */

export type ExportProduct = {
  slug: string;
  /** key used by the i18n `products` bundle */
  key: string;
  name: string;
  nameFa: string;
  hs: string;
  /** image path served from /public (stable for crawlers and OG tags) */
  image: string;
  summary: string;
  overview: string[];
  origin: string;
  grades: string[];
  packaging: string[];
  moq: string;
  specifications: Array<[string, string]>;
  documentation: string[];
  shipping: string[];
  faqs: Array<{ q: string; a: string }>;
};

const COMMON_DOCS = [
  "Commercial invoice and packing list",
  "Certificate of origin issued by the Tehran Chamber of Commerce (TCCIMA)",
  "Phytosanitary or health certificate as required by the destination country",
  "Bill of lading or air waybill",
];

const COMMON_SHIPPING = [
  "Sea freight (FCL and LCL) from Bandar Abbas and Bushehr",
  "Air freight from Tehran (IKA) for high-value, low-volume consignments",
  "Road and multimodal transit to Turkey, Iraq, the Caucasus and Central Asia",
  "Delivery terms under Incoterms 2020: EXW, FOB, CFR, CIF or DAP",
];

export const EXPORT_PRODUCTS: ExportProduct[] = [
  {
    slug: "iranian-saffron",
    key: "saffron",
    name: "Iranian Saffron",
    nameFa: "زعفران ایرانی",
    hs: "0910.20",
    image: "/saffron.jpg",
    summary:
      "Premium Iranian saffron from Khorasan in Sargol, Negin, Super Negin and Pushal grades, with ISO 3632 laboratory analysis on request.",
    overview: [
      "Goodarzi Trading exports Iranian saffron directly from growers and processing units in Khorasan, the region that supplies the majority of the world's saffron.",
      "Saffron is offered in bulk export packing as well as private-label retail packing from 0.1 g upwards, so importers, repackers and distributors can order the format their market requires.",
      "Every consignment is prepared for export with the documentation international buyers need for customs release, including ISO 3632 laboratory analysis on request.",
    ],
    origin: "Khorasan, Iran",
    grades: ["Sargol", "Negin", "Super Negin", "Pushal"],
    packaging: [
      "Retail packs from 0.1 g to 100 g (glass, tin or sachet)",
      "Bulk export packing up to 1 kg per unit",
      "Private-label and buyer-branded packing available",
    ],
    moq: "1 kg",
    specifications: [
      ["HS code", "0910.20"],
      ["Quality standard", "ISO 3632 Category I"],
      ["Grades", "Sargol, Negin, Super Negin, Pushal"],
      ["Origin", "Khorasan, Iran"],
      ["Minimum order", "1 kg"],
      ["Delivery terms", "EXW, FOB, CFR, CIF, DAP (Incoterms 2020)"],
    ],
    documentation: [
      "ISO 3632 laboratory analysis (crocin, safranal, picrocrocin) on request",
      ...COMMON_DOCS,
    ],
    shipping: COMMON_SHIPPING,
    faqs: [
      {
        q: "How can I buy saffron from Iran?",
        a: "Send the grade, quantity, packing format and destination port through the buyer inquiry form or WhatsApp. Goodarzi Trading replies with a proforma invoice, arranges laboratory analysis, handles export clearance through IRICA and ships on the agreed Incoterms 2020 rule.",
      },
      {
        q: "What is the HS code for saffron?",
        a: "Saffron is classified under HS heading 0910.20.",
      },
      {
        q: "What is the minimum order quantity for saffron?",
        a: "The minimum order quantity is 1 kg. Larger volumes are shipped in consolidated consignments together with other Iranian products.",
      },
      {
        q: "Which packaging options are available?",
        a: "Retail packs from 0.1 g to 100 g, bulk export packing up to 1 kg per unit, and private-label packing under the buyer's own brand.",
      },
    ],
  },
  {
    slug: "iranian-pistachio",
    key: "pistachio",
    name: "Iranian Pistachio",
    nameFa: "پسته ایرانی",
    hs: "0802.51",
    image: "/pistachio.jpg",
    summary:
      "Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi pistachios from Kerman and Rafsanjan, aflatoxin-tested and phytosanitary-certified.",
    overview: [
      "Round and long Iranian pistachios are supplied raw, roasted or salted, in shell or as kernels, from the growing regions of Kerman and Rafsanjan.",
      "Consignments are aflatoxin-tested and accompanied by a phytosanitary certificate, which is a customs requirement in the European Union, the GCC and most Asian markets.",
    ],
    origin: "Kerman and Rafsanjan, Iran",
    grades: ["Akbari", "Ahmad Aghaei", "Kalleh Ghouchi", "Fandoghi"],
    packaging: ["10 kg and 25 kg vacuum packs", "Jute bags for bulk shipments"],
    moq: "1 metric tonne",
    specifications: [
      ["HS code", "0802.51"],
      ["Varieties", "Akbari, Ahmad Aghaei, Kalleh Ghouchi, Fandoghi"],
      ["Processing", "Raw, roasted or salted; in shell or kernel"],
      ["Origin", "Kerman, Rafsanjan"],
      ["Minimum order", "1 metric tonne"],
      ["Delivery terms", "EXW, FOB, CFR, CIF, DAP (Incoterms 2020)"],
    ],
    documentation: ["Aflatoxin laboratory report", ...COMMON_DOCS],
    shipping: COMMON_SHIPPING,
    faqs: [
      {
        q: "What is the HS code for pistachios?",
        a: "In-shell and shelled pistachios are classified under HS heading 0802.51.",
      },
      {
        q: "Are the pistachios tested for aflatoxin?",
        a: "Yes. Consignments are accompanied by an aflatoxin laboratory report and a phytosanitary certificate for customs release at the destination.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "One metric tonne. Full container loads and mixed consignments are also available.",
      },
    ],
  },
  {
    slug: "iranian-dates",
    key: "dates",
    name: "Iranian Dates",
    nameFa: "خرمای ایرانی",
    hs: "0804.10",
    image: "/dates.jpg",
    summary:
      "Mazafati, Piarom, Zahedi, Rabbi and Kabkab dates from Bam, Khuzestan and Bushehr in bulk and retail packing.",
    overview: [
      "Fresh and semi-dry Iranian dates are exported in bulk cartons and retail packs, including the soft Mazafati variety and the semi-dry Piarom date.",
      "Packing formats and cold-chain arrangements are agreed with the buyer according to the destination market and transit time.",
    ],
    origin: "Bam, Khuzestan and Bushehr, Iran",
    grades: ["Mazafati", "Piarom", "Zahedi", "Rabbi", "Kabkab"],
    packaging: ["5 kg and 10 kg cartons", "Retail packs for supermarket distribution"],
    moq: "5 metric tonnes",
    specifications: [
      ["HS code", "0804.10"],
      ["Varieties", "Mazafati, Piarom, Zahedi, Rabbi, Kabkab"],
      ["Origin", "Bam, Khuzestan, Bushehr"],
      ["Minimum order", "5 metric tonnes"],
      ["Delivery terms", "EXW, FOB, CFR, CIF, DAP (Incoterms 2020)"],
    ],
    documentation: COMMON_DOCS,
    shipping: COMMON_SHIPPING,
    faqs: [
      {
        q: "What is the HS code for dates?",
        a: "Fresh and dried dates are classified under HS heading 0804.10.",
      },
      {
        q: "Which date varieties are available for export?",
        a: "Mazafati, Piarom, Zahedi, Rabbi and Kabkab, in bulk cartons or retail packs.",
      },
    ],
  },
  {
    slug: "iranian-barberry",
    key: "barberry",
    name: "Iranian Barberry (Zereshk)",
    nameFa: "زرشک ایرانی",
    hs: "0810.90",
    image: "/barberry.jpg",
    summary:
      "Puffy, Anari and seedless barberry from South Khorasan — sun-dried and hand-cleaned to export grade.",
    overview: [
      "Iranian barberry, known locally as zereshk, is grown in South Khorasan around Birjand and Qaen. Iran is the world's largest producer of the crop.",
      "The berries are dried and hand-cleaned to export grade and packed in cartons or vacuum packs to protect colour during transit.",
    ],
    origin: "South Khorasan (Birjand, Qaen), Iran",
    grades: ["Puffy (Puffed)", "Anari (Pomegranate)", "Seedless"],
    packaging: ["5 kg and 10 kg cartons", "Vacuum packs"],
    moq: "500 kg",
    specifications: [
      ["HS code", "0810.90"],
      ["Grades", "Puffy, Anari, seedless"],
      ["Origin", "South Khorasan (Birjand, Qaen)"],
      ["Minimum order", "500 kg"],
      ["Delivery terms", "EXW, FOB, CFR, CIF, DAP (Incoterms 2020)"],
    ],
    documentation: COMMON_DOCS,
    shipping: COMMON_SHIPPING,
    faqs: [
      {
        q: "What is the HS code for barberry?",
        a: "Dried barberry is classified under HS heading 0810.90.",
      },
      {
        q: "What is the difference between Puffy and Anari barberry?",
        a: "Puffy (puffed) barberry is shade or air dried and keeps a lighter, fuller berry, while Anari barberry is dried to a denser, darker red berry.",
      },
    ],
  },
  {
    slug: "iranian-dried-fruits-and-nuts",
    key: "nuts",
    name: "Iranian Dried Fruits & Nuts",
    nameFa: "خشکبار و آجیل",
    hs: "0813 / 0802",
    image: "/nuts.jpg",
    summary:
      "Raisins, walnuts, almonds, hazelnuts and dried figs of Iranian origin, sorted and cleaned to export standard.",
    overview: [
      "A full range of Iranian dried fruits and nuts is available for export, sorted and cleaned to international export standards.",
      "Bulk and private-label packing are both available, and mixed consignments can be consolidated into a single container.",
    ],
    origin: "Iran (multiple regions)",
    grades: ["Raisins", "Walnuts", "Almonds", "Hazelnuts", "Dried figs"],
    packaging: ["Bulk export packing", "Private-label retail packing"],
    moq: "1 metric tonne",
    specifications: [
      ["HS codes", "0813 (dried fruit) and 0802 (nuts)"],
      ["Product range", "Raisins, walnuts, almonds, hazelnuts, dried figs"],
      ["Origin", "Iran (multiple regions)"],
      ["Minimum order", "1 metric tonne"],
      ["Delivery terms", "EXW, FOB, CFR, CIF, DAP (Incoterms 2020)"],
    ],
    documentation: COMMON_DOCS,
    shipping: COMMON_SHIPPING,
    faqs: [
      {
        q: "Can different dried fruits and nuts be shipped in one container?",
        a: "Yes. Mixed consignments are consolidated into a single container with one set of export documents.",
      },
    ],
  },
  {
    slug: "iranian-mamra-almonds",
    key: "almonds",
    name: "Iranian Mamra Almonds",
    nameFa: "مغز بادام مامایی",
    hs: "0802.12",
    image: mamraAlmonds.url,
    summary:
      "Premium Iranian Mamra almonds with high oil content and a distinctive flavor, sourced from Isfahan and Chaharmahal for international wholesale buyers.",
    overview: [
      "Iranian Mamra almond kernels are known for their high oil content and distinctive flavor. Goodarzi Trading sources them from almond-growing regions in Isfahan and Chaharmahal, Iran.",
      "Whole Grade A kernels and broken Grade B kernels are offered in vacuum bags for international wholesale supply, subject to lot availability and buyer specification.",
      "Supply is suitable for inquiries from EU, GCC and Asian markets. Destination import requirements remain the buyer's responsibility and must be confirmed before shipment.",
    ],
    origin: "Isfahan, Chaharmahal, Iran",
    grades: ["Grade A (whole kernel)", "Grade B (broken)"],
    packaging: ["10 kg vacuum bags", "25 kg vacuum bags"],
    moq: "1 metric tonne",
    specifications: [
      ["HS code", "0802.12"],
      ["Product", "Shelled Mamra almond kernels"],
      ["Grades", "Grade A whole kernel; Grade B broken"],
      ["Origin", "Isfahan, Chaharmahal, Iran"],
      ["Minimum order", "1 metric tonne"],
    ],
    documentation: [
      "Health certificate",
      "Aflatoxin-free certificate",
      "Certificate of origin",
      "Phytosanitary certificate",
    ],
    shipping: COMMON_SHIPPING,
    faqs: [
      { q: "What is the HS code for shelled Mamra almonds?", a: "The listed HS code for shelled Mamra almond kernels is 0802.12." },
      { q: "Which Mamra almond grades are available?", a: "Grade A whole kernels and Grade B broken kernels are available, subject to lot availability and agreed specification." },
      { q: "What is the minimum order quantity?", a: "The published minimum order is 1 metric tonne." },
      { q: "Which export documents are available?", a: "The listed documents are a health certificate, aflatoxin-free certificate, certificate of origin and phytosanitary certificate." },
    ],
  },
];

export function getExportProduct(slug: string) {
  return EXPORT_PRODUCTS.find((p) => p.slug === slug);
}

export const SITE_URL = "https://goodarzitrading.lovable.app";
