/**
 * Approved buyer-facing content and SEO for the five product detail pages.
 * Kept separate from export-products.ts so other pages that reuse the shared
 * product data (market pages, saffron exporter page) are not affected.
 */
import saffronImg from "@/assets/products/saffron.jpg";
import datesImg from "@/assets/products/dates.avif";
import barberryImg from "@/assets/products/barberry.jpeg";

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  items?: Array<{ name: string; text?: string }>;
  table?: { head: [string, string]; rows: Array<[string, string]> };
};

export type ProductDetail = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** use object-contain for infographic-style images */
  contain?: boolean;
  gradesHeading: string;
  grades: string[];
  sections: DetailSection[];
  packaging: string[];
  documentation: string[];
  specifications: Array<[string, string]>;
  faqs: Array<{ q: string; a: string }>;
};

const DOCS_NOTE =
  "Export documents are arranged according to the product, the shipment and the destination country's requirements. Not every document applies to every shipment; required documents are confirmed for each order.";

const COMMON_DOCS = [
  "Commercial invoice and packing list",
  "Certificate of origin",
  "Phytosanitary or health certificate where required by the destination country",
  "Bill of lading or air waybill",
];

const QUOTE_FAQ = (product: string) => ({
  q: `How do I request a quotation for ${product}?`,
  a: "Send the required grade or variety, quantity, packaging, destination port or country and required documents through the Request a Quote form or WhatsApp. Goodarzi Trading replies with available specifications and export options.",
});

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "iranian-saffron": {
    seoTitle: "Iranian Saffron for Export | Wholesale Saffron Grades – GoodarziTrading",
    seoDescription:
      "Explore Iranian saffron grades including Super Negin, Negin, Sargol, Pushal, Bunch and Broken Threads. Contact GoodarziTrading for wholesale enquiries, specifications and export options.",
    h1: "Iranian Saffron for Export — Wholesale Saffron Grades",
    intro:
      "Wholesale Iranian saffron sourced from farmers in Qainat, South Khorasan, sorted and cleaned by grade, and supplied to international buyers with batch-specific laboratory analysis.",
    image: saffronImg,
    imageAlt: "Iranian saffron threads for wholesale export",
    gradesHeading: "Commercial saffron grades",
    grades: ["Super Negin", "Negin", "Sargol", "Pushal", "Bunch (Dokhtar Pich)", "Broken Threads (Narmah)"],
    sections: [
      {
        heading: "Sourcing from Qainat, South Khorasan",
        paragraphs: [
          "Goodarzi Trading sources saffron from farmers in Qainat, South Khorasan. Each lot is sorted and cleaned before packaging.",
          "The cleaning process removes unwanted yellow style parts, fine dust, foreign materials and fragments that do not meet the selected grade. Broken threads are handled as a separate commercial grade (Narmah), not represented as waste.",
        ],
      },
      {
        heading: "Saffron grades explained",
        items: [
          { name: "Super Negin", text: "Long, separated red stigmas with the style removed; the most selective all-red cut." },
          { name: "Negin", text: "All-red stigmas with the style removed, with slightly less strict selection than Super Negin." },
          { name: "Sargol", text: "Red stigma tips only, with the style removed; threads are shorter." },
          { name: "Pushal", text: "Red stigmas with a small part of the style attached." },
          { name: "Bunch (Dokhtar Pich)", text: "Complete stigmas with the style, tied in bunches." },
          { name: "Broken Threads (Narmah)", text: "Broken red stigma pieces offered as their own commercial grade." },
        ],
      },
      {
        heading: "Laboratory analysis and quality reference",
        paragraphs: [
          "Samples are submitted for laboratory analysis after the product is packaged and sealed. Batch-specific Certificate of Analysis (COA) testing may include Crocin (colour strength), Picrocrocin (bitterness) and Safranal (aroma).",
          "ISO 3632 is used as a recognised reference standard for saffron testing. Any ISO 3632 category stated for a shipment is based on that batch's laboratory documentation.",
        ],
      },
    ],
    packaging: [
      "Decorative metal tins, 250 g net weight",
      "Bulk export and custom packaging can be discussed according to buyer requirements",
    ],
    documentation: ["Batch-specific Certificate of Analysis (COA) where requested", ...COMMON_DOCS],
    specifications: [
      ["HS code", "0910.20"],
      ["Origin", "Qainat, South Khorasan, Iran"],
      ["Grades", "Super Negin, Negin, Sargol, Pushal, Bunch, Broken Threads"],
      ["Reference standard", "ISO 3632 (testing reference)"],
      ["Retail packing", "250 g decorative metal tin"],
      ["Price", "On request, per grade and quantity"],
    ],
    faqs: [
      {
        q: "Which Iranian saffron grades are available for wholesale?",
        a: "Super Negin, Negin, Sargol, Pushal, Bunch (Dokhtar Pich) and Broken Threads (Narmah).",
      },
      {
        q: "Where is the saffron sourced?",
        a: "From farmers in Qainat, South Khorasan, Iran. It is sorted and cleaned before packaging.",
      },
      {
        q: "Is laboratory analysis provided?",
        a: "Samples are submitted for laboratory analysis after packaging and sealing. Batch-specific COA testing may include Crocin, Picrocrocin and Safranal. ISO 3632 is used as a reference standard.",
      },
      {
        q: "What packaging is available?",
        a: "Decorative metal tins with 250 g net weight. Bulk export and custom packaging can be discussed according to buyer requirements.",
      },
      { q: "What is the HS code for saffron?", a: "Saffron is classified under HS heading 0910.20. The importing country's tariff classification should be confirmed." },
      QUOTE_FAQ("Iranian saffron"),
    ],
  },

  "iranian-pistachio": {
    seoTitle: "Iranian Pistachios for Export | Varieties & Ounce Sizes – GoodarziTrading",
    seoDescription:
      "Explore Iranian pistachios including Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi. Learn about ounce sizing, quality specifications and wholesale export enquiries with GoodarziTrading.",
    h1: "Iranian Pistachios for Export — Varieties & Ounce Sizes",
    intro:
      "Wholesale Iranian pistachios in Akbari, Ahmad Aghaei, Kalleh Ghouchi (Jumbo) and Fandoghi varieties, sized by the commercial ounce method and specified per lot.",
    image: "/iranian-pistachios.jpg",
    imageAlt: "Iranian pistachio varieties for wholesale export",
    gradesHeading: "Pistachio varieties",
    grades: ["Akbari", "Ahmad Aghaei", "Kalleh Ghouchi (Jumbo)", "Fandoghi"],
    sections: [
      {
        heading: "Iranian pistachio varieties",
        items: [
          { name: "Akbari", text: "A long, large-kernel variety, widely traded in the premium segment." },
          { name: "Ahmad Aghaei", text: "A long variety with an elongated nut shape." },
          { name: "Kalleh Ghouchi (Jumbo)", text: "A round, large variety commonly traded as Jumbo." },
          { name: "Fandoghi", text: "A round, smaller variety widely used for volume trade." },
        ],
      },
      {
        heading: "Ounce sizing method",
        paragraphs: [
          "Goodarzi Trading uses the commercial ounce-sizing method. A 142 g sample of in-shell pistachios is divided into groups of five nuts. The number of groups determines the ounce size — for example, 26 groups of five nuts equal 26 ounce.",
          "A lower ounce number indicates larger nuts. A higher ounce number indicates smaller nuts.",
        ],
      },
      {
        heading: "Quality and lot confirmation",
        paragraphs: [
          "Laboratory results, aflatoxin levels, packaging weights and origin are confirmed against the actual lot and its documents for each shipment.",
          "In-shell and shelled pistachios are separate product forms with separate tariff classifications. The applicable HS code is confirmed for the product form ordered.",
        ],
      },
    ],
    packaging: ["Packaging confirmed per lot and buyer requirement"],
    documentation: ["Laboratory report for the shipped lot where requested", ...COMMON_DOCS],
    specifications: [
      ["Varieties", "Akbari, Ahmad Aghaei, Kalleh Ghouchi (Jumbo), Fandoghi"],
      ["Sizing", "Ounce size (142 g sample, groups of five nuts)"],
      ["Product forms", "In-shell or shelled (classified separately)"],
      ["Origin", "Iran — confirmed per lot"],
      ["Price", "On request"],
    ],
    faqs: [
      { q: "Which Iranian pistachio varieties are available?", a: "Akbari, Ahmad Aghaei, Kalleh Ghouchi (Jumbo) and Fandoghi." },
      {
        q: "How is pistachio ounce size measured?",
        a: "A 142 g sample of in-shell pistachios is divided into groups of five nuts. The number of groups is the ounce size; for example, 26 groups equal 26 ounce. A lower number means larger nuts, a higher number means smaller nuts.",
      },
      {
        q: "Are lab results and aflatoxin levels guaranteed?",
        a: "No fixed values are published. Laboratory results and aflatoxin levels are confirmed against the actual lot and its documents.",
      },
      {
        q: "Do in-shell and shelled pistachios have the same HS code?",
        a: "No. In-shell and shelled pistachios are classified separately, and the code is confirmed for the product form ordered and the importing country.",
      },
      QUOTE_FAQ("Iranian pistachios"),
    ],
  },

  "iranian-dates": {
    seoTitle: "Iranian Dates for Export | Mazafati, Piarom & Zahedi – GoodarziTrading",
    seoDescription:
      "Discover Iranian dates including Mazafati, Piarom, Zahedi, Kabkab, Rabbi, Sayer and Shahani. Explore quality specifications, packaging and wholesale export options with GoodarziTrading.",
    h1: "Iranian Dates for Export — Mazafati, Piarom, Zahedi & More",
    intro:
      "Wholesale Iranian dates in seven commercial varieties, supplied in bulk, retail or custom packaging according to the buyer's market.",
    image: datesImg,
    imageAlt: "Iranian dates for wholesale export",
    gradesHeading: "Date varieties",
    grades: ["Mazafati", "Piarom", "Zahedi", "Kabkab", "Rabbi", "Sayer (Stamaran)", "Shahani"],
    sections: [
      {
        heading: "Iranian date varieties",
        items: [
          { name: "Mazafati", text: "A soft, dark date with a moist texture, popular for direct consumption." },
          { name: "Piarom", text: "A semi-dry date with a dark skin, a premium variety for retail markets." },
          { name: "Zahedi", text: "A dry, golden date suited to bulk trade and food processing." },
          { name: "Kabkab", text: "A soft to semi-soft date with a sweet taste, traded widely in the region." },
          { name: "Rabbi", text: "A semi-dry, dark date with an elongated shape." },
          { name: "Sayer (Stamaran)", text: "A soft to semi-dry date commonly used for bulk export and processing." },
          { name: "Shahani", text: "A soft date with a light-brown colour, used for direct consumption." },
        ],
      },
      {
        heading: "Specifications, storage and transport",
        paragraphs: [
          "Specifications and suitable storage and transport conditions depend on the variety, moisture level, packaging and destination. They are agreed with the buyer for each order.",
        ],
      },
    ],
    packaging: ["Bulk Export Packaging", "Retail Packaging", "Custom Packaging"],
    documentation: COMMON_DOCS,
    specifications: [
      ["HS code", "0804.10"],
      ["Varieties", "Mazafati, Piarom, Zahedi, Kabkab, Rabbi, Sayer, Shahani"],
      ["Packaging", "Bulk, retail or custom"],
      ["Origin", "Iran"],
      ["Price", "On request"],
    ],
    faqs: [
      { q: "Which Iranian date varieties are available?", a: "Mazafati, Piarom, Zahedi, Kabkab, Rabbi, Sayer (Stamaran) and Shahani." },
      { q: "What packaging options are available?", a: "Bulk export packaging, retail packaging and custom packaging." },
      {
        q: "What storage and transport conditions are required?",
        a: "They depend on the variety, moisture level, packaging and destination, and are agreed for each order.",
      },
      { q: "What is the HS code for dates?", a: "Dates are classified under HS heading 0804.10. The importing country's classification should be confirmed." },
      QUOTE_FAQ("Iranian dates"),
    ],
  },

  "iranian-barberry": {
    seoTitle: "Iranian Dried Barberries for Export | Seedless Zereshk – GoodarziTrading",
    seoDescription:
      "Source Iranian dried seedless barberries from South Khorasan for wholesale and food manufacturing. Contact GoodarziTrading for product specifications, packaging and export quotations.",
    h1: "Iranian Dried Seedless Barberries (Zereshk) for Export",
    intro:
      "Dried seedless Iranian barberries (zereshk) sourced from South Khorasan for wholesale distribution, food manufacturing and culinary use.",
    image: barberryImg,
    imageAlt: "Iranian dried seedless barberries (zereshk) for export",
    gradesHeading: "Product",
    grades: ["Dried seedless barberry (Zereshk)"],
    sections: [
      {
        heading: "Sourced from South Khorasan",
        paragraphs: [
          "This page covers dried seedless barberries (zereshk) only, sourced from South Khorasan, Iran. Product specifications are confirmed for each order.",
        ],
      },
      {
        heading: "Applications",
        items: [
          { name: "Food manufacturing", text: "An ingredient for producers using dried fruit." },
          { name: "Rice dishes and culinary use", text: "A traditional ingredient in Persian rice dishes such as zereshk polo." },
          { name: "Food ingredients and processing", text: "For blending, mixes and processed food applications." },
          { name: "Wholesale distribution", text: "For importers and distributors supplying retail and food-service markets." },
        ],
      },
      {
        heading: "Tariff classification",
        paragraphs: [
          "HS code 08109022 is used for dried seedless barberries. The importing country's tariff classification may differ and should be confirmed by the buyer.",
        ],
      },
    ],
    packaging: ["Packaging confirmed per order and buyer requirement"],
    documentation: COMMON_DOCS,
    specifications: [
      ["Product", "Dried seedless barberry (Zereshk)"],
      ["HS code", "08109022 (importing country may differ)"],
      ["Origin", "South Khorasan, Iran"],
      ["Price", "On request"],
    ],
    faqs: [
      { q: "Where are the barberries sourced?", a: "From South Khorasan, Iran." },
      {
        q: "What are dried seedless barberries used for?",
        a: "Food manufacturing, rice dishes and culinary use, food ingredients and processing, and wholesale distribution.",
      },
      {
        q: "What is the HS code for dried seedless barberries?",
        a: "HS code 08109022 is used for dried seedless barberries. The importing country's tariff classification may differ.",
      },
      QUOTE_FAQ("Iranian dried barberries"),
    ],
  },

  "iranian-mamra-almonds": {
    seoTitle: "Iranian Mamra Almond Kernels | Wholesale & Export – GoodarziTrading",
    seoDescription:
      "Explore Iranian Mamra almond kernels in 5A, 4A, 3A, 2A, A, ES, ESB and Mini grades. Compare kernel sizes and contact GoodarziTrading for wholesale export enquiries.",
    h1: "Iranian Mamra Almond Kernels — Wholesale & Export",
    intro:
      "Iranian Mamra almond kernels sourced from Saman, Chaharmahal and Bakhtiari, graded by kernel count per 100 g for international wholesale buyers.",
    image: "/iranian-mamra-almond-size-guide.png",
    imageAlt: "Iranian Mamra almond kernel size and grade guide",
    contain: true,
    gradesHeading: "Commercial grades",
    grades: ["5A", "4A", "3A", "2A", "A", "ES", "ESB", "Mini"],
    sections: [
      {
        heading: "Sourced from Saman, Chaharmahal and Bakhtiari",
        paragraphs: ["Mamra almond kernels are sourced from Saman, in Chaharmahal and Bakhtiari Province, Iran."],
      },
      {
        heading: "Grades and kernel counts",
        table: {
          head: ["Grade", "Approximate kernels per 100 g"],
          rows: [
            ["5A", "80–90"],
            ["4A", "90–100"],
            ["3A", "100–105"],
            ["2A", "110–115"],
            ["A", "120–125"],
            ["ES", "130–135"],
            ["ESB", "140–145"],
            ["Mini", "150+"],
          ],
        },
        paragraphs: [
          "Sizing method: the number of kernels is counted in an exact 100 g sample. Fewer kernels indicate larger kernels; more kernels indicate smaller kernels.",
          "These are approximate commercial grading references, not guaranteed universal standards. Actual counts may vary by batch and should be confirmed by sample.",
        ],
      },
    ],
    packaging: ["Packaging confirmed per order and buyer requirement"],
    documentation: COMMON_DOCS,
    specifications: [
      ["HS code", "0802.12"],
      ["Product", "Shelled Mamra almond kernels"],
      ["Grades", "5A, 4A, 3A, 2A, A, ES, ESB, Mini"],
      ["Sizing", "Kernels per 100 g"],
      ["Origin", "Saman, Chaharmahal and Bakhtiari, Iran"],
    ],
    faqs: [
      { q: "Which Mamra almond grades are available?", a: "5A, 4A, 3A, 2A, A, ES, ESB and Mini." },
      {
        q: "How are Mamra almond grades measured?",
        a: "Kernels are counted in an exact 100 g sample. Fewer kernels mean larger kernels; more kernels mean smaller kernels. Counts are approximate commercial references and are confirmed by sample.",
      },
      { q: "Where are the almonds sourced?", a: "From Saman, Chaharmahal and Bakhtiari, Iran." },
      QUOTE_FAQ("Iranian Mamra almond kernels"),
    ],
  },
};

export const DETAIL_DOCS_NOTE = DOCS_NOTE;

export function getProductDetail(slug: string) {
  return PRODUCT_DETAILS[slug];
}
