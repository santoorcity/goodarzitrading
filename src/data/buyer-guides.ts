import { SITE_URL } from "./export-products";

export type BuyerGuideLink = { label: string; to: string };
export type BuyerGuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type BuyerGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  image: string;
  productSlug?: string;
  sections: BuyerGuideSection[];
  faqs: Array<{ q: string; a: string }>;
  links: BuyerGuideLink[];
};

export const BUYER_GUIDES: BuyerGuide[] = [
  {
    slug: "iranian-saffron-grades",
    title: "Iranian Saffron Grades: Super Negin, Negin, Sargol and Pushal",
    shortTitle: "Iranian saffron grades",
    description: "A buyer-focused guide to Super Negin, Negin, Sargol and Pushal Iranian saffron, including appearance, selection criteria, packing and quotation details.",
    category: "Saffron buying guide",
    image: "/saffron.jpg",
    productSlug: "iranian-saffron",
    sections: [
      {
        heading: "How Iranian saffron grades differ",
        paragraphs: [
          "Commercial saffron grades describe how the red stigma is separated and presented. They help buyers specify appearance and intended use, but the grade name alone does not replace laboratory analysis or an agreed product specification.",
          "A useful purchase specification states the grade, origin, required laboratory parameters, moisture condition, packing format, quantity and destination—not only a grade name.",
        ],
      },
      {
        heading: "Super Negin and Negin",
        paragraphs: [
          "Super Negin is selected for long, thick, all-red stigmas with a uniform visual presentation and no yellow style attached. Negin is also all-red, with strands that may be slightly shorter or less uniform than a Super Negin selection.",
          "These grades are commonly considered where appearance matters to premium retail packs, distributors and repackers. The final acceptance criteria should be agreed against samples and test results.",
        ],
      },
      {
        heading: "Sargol and Pushal",
        paragraphs: [
          "Sargol consists of separated red stigma pieces without the yellow style. It is widely used for retail, food service and processing where colour, aroma and a clean all-red presentation are important.",
          "Pushal retains a short part of the yellow style. This creates a more traditional whole-thread appearance and can make the connection between stigma branches easier to see.",
        ],
      },
      {
        heading: "What to include in a saffron inquiry",
        paragraphs: ["For a comparable quotation, send the following information to the export team:"],
        bullets: [
          "Required grade: Super Negin, Negin, Sargol or Pushal",
          "Quantity and preferred retail or bulk packing",
          "Destination country and destination port or airport",
          "Private-label requirements, if any",
          "Required laboratory analysis and shipment documents",
        ],
      },
    ],
    faqs: [
      { q: "Which Iranian saffron grade has the most uniform appearance?", a: "Super Negin is selected for long, thick, all-red stigmas and the most uniform visual presentation among the listed commercial grades." },
      { q: "Is a grade name enough to confirm saffron quality?", a: "No. Buyers should also agree a written specification, inspect a representative sample and request relevant laboratory analysis." },
      { q: "What is the minimum order shown by Goodarzi Trading?", a: "The published minimum order for Iranian saffron is 1 kg." },
    ],
    links: [
      { label: "Iranian saffron specifications", to: "/export-products/iranian-saffron" },
      { label: "Iranian saffron exporter", to: "/iranian-saffron-exporter" },
      { label: "Request a quote", to: "/quote" },
    ],
  },
  {
    slug: "saffron-quality-iso-3632",
    title: "Saffron Quality Measurement and ISO 3632 for International Buyers",
    shortTitle: "Saffron quality and ISO 3632",
    description: "Understand how saffron quality is evaluated, what crocin, picrocrocin and safranal indicate, and how buyers should read an ISO 3632 laboratory report.",
    category: "Saffron quality",
    image: "/saffron.jpg",
    productSlug: "iranian-saffron",
    sections: [
      {
        heading: "What ISO 3632 is used for",
        paragraphs: [
          "ISO 3632 provides a standard framework for testing dried saffron. It allows a buyer and seller to refer to measured characteristics rather than relying only on colour, aroma or a commercial grade name.",
          "A laboratory report applies to the tested sample. Buyers should match the report to the offered lot and agree sampling, validity and acceptance terms before shipment.",
        ],
      },
      {
        heading: "Crocin, picrocrocin and safranal",
        paragraphs: [
          "Crocin is associated with saffron's colouring strength. Picrocrocin is associated with its characteristic bitter taste, while safranal is associated with aroma. These measurements are interpreted together with other checks in the applicable test report.",
          "A higher commercial grade is not a substitute for measured results. Two visually similar lots can still require laboratory comparison.",
        ],
      },
      {
        heading: "Physical inspection still matters",
        paragraphs: ["Laboratory values should be considered alongside the physical condition of the shipment."],
        bullets: [
          "Uniformity and proportion of red stigma to yellow style",
          "Evidence of foreign matter or broken material",
          "Packing integrity and protection from moisture and light",
          "Lot identification that connects samples, documents and cartons",
        ],
      },
      {
        heading: "Documents to request",
        paragraphs: [
          "Goodarzi Trading lists ISO 3632 laboratory analysis for crocin, safranal and picrocrocin on request. The shipment document set may also include the commercial invoice, packing list, certificate of origin, required health or phytosanitary documentation and transport document.",
        ],
      },
    ],
    faqs: [
      { q: "Does ISO 3632 identify the saffron grade?", a: "ISO 3632 provides test methods and quality classification. Commercial names such as Super Negin or Sargol also describe physical presentation, so buyers should specify both the grade and required test results." },
      { q: "What does crocin measure?", a: "Crocin is associated with saffron colouring strength and is one of the key values commonly reviewed on an ISO 3632 laboratory report." },
      { q: "Can a buyer request laboratory analysis?", a: "Yes. Goodarzi Trading lists ISO 3632 laboratory analysis on request for saffron consignments." },
    ],
    links: [
      { label: "Saffron product page", to: "/export-products/iranian-saffron" },
      { label: "HS Code search", to: "/hs-code" },
      { label: "Buyer inquiry", to: "/inquiry" },
    ],
  },
  {
    slug: "pistachio-ounce-size-calculation",
    title: "How Pistachio Ounce Size Is Calculated",
    shortTitle: "Pistachio ounce size explained",
    description: "A practical explanation of pistachio ounce count, why a lower count means larger nuts, and what international buyers should include in a pistachio specification.",
    category: "Pistachio buying guide",
    image: "/pistachio.jpg",
    productSlug: "iranian-pistachio",
    sections: [
      {
        heading: "The basic ounce-count method",
        paragraphs: [
          "Pistachio size is commonly expressed by counting how many in-shell nuts make one ounce by weight. Because the measure is a count within a fixed weight, fewer nuts per ounce indicates a larger average nut size.",
          "For example, a lot described with a lower count range contains larger nuts on average than a lot described with a higher count range. The agreed method and tolerance should appear in the purchase specification.",
        ],
      },
      {
        heading: "Why sampling affects the result",
        paragraphs: [
          "A count taken from one handful may not represent an entire lot. Buyers and sellers should agree how samples are drawn, how many measurements are taken and how results are averaged.",
          "Size should be considered with variety, open-shell percentage, moisture, defects, foreign matter and the required aflatoxin report rather than used as the only quality criterion.",
        ],
      },
      {
        heading: "What to put in a purchase specification",
        paragraphs: ["A clear pistachio inquiry should identify:"],
        bullets: [
          "Variety, such as Akbari, Ahmad Aghaei, Kalleh Ghouchi or Fandoghi",
          "Raw, roasted or salted; in-shell or kernel",
          "Required ounce-count range and sampling tolerance",
          "Packing format and order quantity",
          "Aflatoxin testing and destination document requirements",
        ],
      },
    ],
    faqs: [
      { q: "Does a lower pistachio ounce count mean larger nuts?", a: "Yes. The count records how many nuts make one ounce, so a lower count indicates a larger average nut size." },
      { q: "Is ounce size the same as pistachio variety?", a: "No. Variety identifies the cultivar or commercial type, while ounce count describes average in-shell nut size." },
      { q: "What is the published MOQ for Iranian pistachios?", a: "Goodarzi Trading lists a minimum order of 1 metric tonne for Iranian pistachios." },
    ],
    links: [
      { label: "Iranian pistachio specifications", to: "/export-products/iranian-pistachio" },
      { label: "HS Code search", to: "/hs-code" },
      { label: "Request a quote", to: "/quote" },
    ],
  },
  {
    slug: "iranian-pistachio-varieties-grades",
    title: "Iranian Pistachio Varieties and Export Specifications",
    shortTitle: "Iranian pistachio varieties",
    description: "Compare Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi Iranian pistachios and prepare a clear wholesale specification for export purchasing.",
    category: "Pistachio buying guide",
    image: "/pistachio.jpg",
    productSlug: "iranian-pistachio",
    sections: [
      {
        heading: "Four varieties offered for export",
        paragraphs: [
          "Goodarzi Trading lists Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi pistachios from Kerman and Rafsanjan. The product can be discussed as raw, roasted or salted, in shell or as kernels.",
          "Variety names identify different shapes and market presentations. Buyers should compare representative samples and define measurable acceptance criteria rather than relying on the variety name alone.",
        ],
      },
      {
        heading: "Long and round presentations",
        paragraphs: [
          "Akbari and Ahmad Aghaei are generally traded as elongated types, while Kalleh Ghouchi and Fandoghi are rounder presentations. Size within each variety is still specified separately, commonly by ounce count for in-shell nuts.",
        ],
      },
      {
        heading: "Export specification checklist",
        paragraphs: ["Include these details when comparing offers:"],
        bullets: [
          "Variety and crop lot",
          "In-shell or kernel; raw, roasted or salted",
          "Size method and agreed tolerance",
          "Packing: 10 kg or 25 kg vacuum packs, or bulk jute bags",
          "Aflatoxin laboratory report and required phytosanitary documentation",
          "Quantity, destination and preferred Incoterms 2020 rule",
        ],
      },
    ],
    faqs: [
      { q: "Which Iranian pistachio varieties are available?", a: "The published range includes Akbari, Ahmad Aghaei, Kalleh Ghouchi and Fandoghi." },
      { q: "Can pistachios be supplied as kernels?", a: "Yes. The listed supply formats include in-shell pistachios and kernels, with raw, roasted or salted processing options." },
      { q: "Which HS code is listed for pistachios?", a: "The site lists HS 0802.51 for Iranian pistachios. The importer should confirm the destination tariff line for the exact product form." },
    ],
    links: [
      { label: "Iranian pistachio product page", to: "/export-products/iranian-pistachio" },
      { label: "Incoterms 2020", to: "/incoterms" },
      { label: "Trade services", to: "/hs-code" },
    ],
  },
  {
    slug: "iranian-dates-varieties-export-specifications",
    title: "Iranian Dates: Varieties, Grades and Export Specifications",
    shortTitle: "Iranian dates export guide",
    description: "A buyer guide to Mazafati, Piarom, Zahedi, Rabbi and Kabkab Iranian dates, packing, cold-chain planning, HS code and export inquiry details.",
    category: "Dates buying guide",
    image: "/dates.jpg",
    productSlug: "iranian-dates",
    sections: [
      {
        heading: "Varieties available from Iran",
        paragraphs: [
          "The published Goodarzi Trading range includes Mazafati, Piarom, Zahedi, Rabbi and Kabkab dates from Bam, Khuzestan and Bushehr. These varieties differ in texture and moisture condition, so the intended market and transport plan should be stated in the inquiry.",
          "Mazafati is presented as a soft date and Piarom as a semi-dry date. Buyers should request a lot-specific specification for the chosen variety rather than applying one specification to all dates.",
        ],
      },
      {
        heading: "Packing and shipment planning",
        paragraphs: [
          "Available formats include 5 kg and 10 kg cartons and retail packs for supermarket distribution. Packing and cold-chain arrangements are agreed according to the variety, destination and expected transit time.",
          "The buyer should identify the destination, required pack size, label language and any importer-specific requirements before final packing begins.",
        ],
      },
      {
        heading: "Documents and quotation details",
        paragraphs: ["A complete quotation request should include:"],
        bullets: [
          "Variety and required quantity",
          "Bulk carton or retail packing",
          "Destination port and preferred transport mode",
          "Required commercial invoice, packing list, certificate of origin and destination health or phytosanitary documents",
          "Preferred Incoterms 2020 rule",
        ],
      },
    ],
    faqs: [
      { q: "Which Iranian date varieties are listed?", a: "Mazafati, Piarom, Zahedi, Rabbi and Kabkab are listed for export." },
      { q: "What is the HS code for dates?", a: "Fresh and dried dates are listed under HS heading 0804.10." },
      { q: "What is the published MOQ for dates?", a: "Goodarzi Trading lists a minimum order of 5 metric tonnes." },
    ],
    links: [
      { label: "Iranian dates specifications", to: "/export-products/iranian-dates" },
      { label: "Incoterms 2020", to: "/incoterms" },
      { label: "International buyer inquiry", to: "/inquiry" },
    ],
  },
  {
    slug: "iranian-barberry-export-specifications",
    title: "Iranian Barberry Export Specifications for Wholesale Buyers",
    shortTitle: "Iranian barberry export guide",
    description: "A practical guide to Puffy, Anari and seedless Iranian barberry, including origin, packing, MOQ, HS code, documents and shipment planning.",
    category: "Barberry buying guide",
    image: "/barberry.jpg",
    productSlug: "iranian-barberry",
    sections: [
      {
        heading: "Origin and commercial grades",
        paragraphs: [
          "Iranian barberry, or zereshk, is offered from South Khorasan, including Birjand and Qaen. The published range includes Puffy, Anari and seedless barberry.",
          "Puffy barberry is shade or air dried and has a lighter, fuller presentation. Anari barberry is denser and darker red. Buyers should define colour, moisture condition, cleanliness and permitted defects in the purchase specification.",
        ],
      },
      {
        heading: "Packing and product protection",
        paragraphs: [
          "Goodarzi Trading lists 5 kg and 10 kg cartons and vacuum packs. Barberry should be protected from moisture, heat and light during storage and transit to preserve condition and colour.",
          "The preferred packing format depends on whether the buyer is a wholesaler, food-service distributor or retail repacker.",
        ],
      },
      {
        heading: "Export documents and inquiry checklist",
        paragraphs: ["For a useful quotation, specify:"],
        bullets: [
          "Puffy, Anari or seedless grade",
          "Quantity and packing format",
          "Destination and transport preference",
          "Required certificate of origin and destination health or phytosanitary documentation",
          "Any buyer labelling or product specification requirements",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between Puffy and Anari barberry?", a: "Puffy barberry is shade or air dried and keeps a lighter, fuller berry, while Anari barberry is denser and darker red." },
      { q: "What HS code is listed for barberry?", a: "The site lists dried barberry under HS heading 0810.90. The importer should confirm the exact national tariff line." },
      { q: "What is the published MOQ?", a: "The published minimum order for Iranian barberry is 500 kg." },
    ],
    links: [
      { label: "Iranian barberry specifications", to: "/export-products/iranian-barberry" },
      { label: "HS Code search", to: "/hs-code" },
      { label: "Request a quote", to: "/quote" },
    ],
  },
  {
    slug: "hs-codes-iranian-export-products",
    title: "HS Codes for Iranian Export Products: A Buyer Reference",
    shortTitle: "HS codes for Iranian exports",
    description: "Reference HS headings for Iranian saffron, pistachios, dates, barberry, dried fruits, nuts and handwoven carpets, plus practical classification checks.",
    category: "Trade classification",
    image: "/hero-port-containers.jpg",
    sections: [
      {
        heading: "Product headings used in this catalogue",
        paragraphs: ["The Goodarzi Trading catalogue uses the following HS headings as product references:"],
        bullets: [
          "Saffron — 0910.20",
          "Pistachios — 0802.51",
          "Dates — 0804.10",
          "Barberry — 0810.90",
          "Dried fruit — 0813; nuts — 0802",
          "Handwoven carpets — 5701.10",
        ],
      },
      {
        heading: "Why the destination tariff line must be confirmed",
        paragraphs: [
          "The first six digits of the Harmonized System are internationally structured, while countries may add further digits and local measures. Product form, processing, packing and composition can affect the final classification.",
          "The importer or appointed customs broker should confirm the destination-country tariff line, duty treatment and any associated controls before shipment.",
        ],
      },
      {
        heading: "Information needed for classification",
        paragraphs: ["Prepare enough technical detail to classify the actual goods:"],
        bullets: [
          "Commercial and scientific product description where relevant",
          "Fresh, dried, roasted, salted, shelled or otherwise processed form",
          "Ingredients or composition for mixed products",
          "Unit packing, net weight and intended use",
          "Photographs, specification sheets and prior rulings where available",
        ],
      },
    ],
    faqs: [
      { q: "Is an HS code identical in every country?", a: "The six-digit HS structure is internationally harmonized, but countries may add more digits and local tariff measures. Confirm the destination tariff line before shipment." },
      { q: "Who should confirm the final import classification?", a: "The destination importer or its customs broker should confirm the final national tariff line for the exact product and presentation." },
      { q: "Where can I search the site's trade data?", a: "Use the Goodarzi Trading HS Code and Trade Services page for the current site reference data." },
    ],
    links: [
      { label: "HS Code & Trade Services", to: "/hs-code" },
      { label: "Export product catalogue", to: "/export-products" },
      { label: "Customs and trade services", to: "/services" },
    ],
  },
  {
    slug: "incoterms-2020-international-buyers",
    title: "Incoterms 2020 for International Buyers",
    shortTitle: "Incoterms 2020 for buyers",
    description: "A practical buyer guide to EXW, FCA, FOB, CFR, CIF and DAP, including risk transfer, freight, insurance and quotation comparisons.",
    category: "Delivery terms",
    image: "/hero-port-containers.jpg",
    sections: [
      {
        heading: "What an Incoterms rule does—and does not do",
        paragraphs: [
          "An Incoterms 2020 rule allocates specified delivery tasks, costs and risk between seller and buyer. It identifies a delivery point and clarifies who arranges key transport and customs steps.",
          "It does not by itself set the price, payment method, transfer of ownership, product quality or dispute law. Those points belong in the sales contract.",
        ],
      },
      {
        heading: "Common terms in export quotations",
        paragraphs: [
          "EXW places substantial collection responsibility on the buyer. FCA is used when the seller delivers to the buyer's nominated carrier. FOB, CFR and CIF are sea or inland-waterway terms, while DAP can be used across transport modes to a named place.",
          "For containerized cargo handed to a carrier before loading on a vessel, buyers should compare FCA/CPT/CIP structures rather than automatically requesting FOB/CIF.",
        ],
      },
      {
        heading: "How to compare two quotations",
        paragraphs: ["Check that both offers name the same rule, place and version, then compare:"],
        bullets: [
          "Exact delivery point and point of risk transfer",
          "Export and import customs responsibilities",
          "Main freight, terminal and destination charges",
          "Insurance responsibility and required cover",
          "Document handover and payment milestones",
        ],
      },
    ],
    faqs: [
      { q: "Does CIF mean the seller carries risk to the destination port?", a: "No. Under CIF the seller pays cost, freight and specified insurance to the named destination port, but risk transfers earlier when the goods are on board at the port of shipment." },
      { q: "Which Incoterms rules can be used for air freight?", a: "Rules for any mode, including EXW, FCA, CPT, CIP, DAP, DPU and DDP, can apply to air freight. FOB, CFR and CIF are reserved for sea and inland waterway transport." },
      { q: "Should the place and version be written in the contract?", a: "Yes. State the chosen rule, the precise named place or port and ‘Incoterms 2020’ in the quotation and contract." },
    ],
    links: [
      { label: "Full Incoterms 2020 guide", to: "/incoterms" },
      { label: "International logistics services", to: "/services" },
      { label: "Request a freight quote", to: "/quote" },
    ],
  },
  {
    slug: "importing-products-from-iran",
    title: "Importing Products from Iran: Commercial and Logistics Considerations",
    shortTitle: "Importing products from Iran",
    description: "A practical due-diligence checklist for international buyers sourcing Iranian products, covering specifications, HS codes, documents, payment, logistics and compliance.",
    category: "Import planning",
    image: "/hero-port-containers.jpg",
    sections: [
      {
        heading: "Start with a complete purchase specification",
        paragraphs: [
          "A useful sourcing request identifies the exact product, grade or variety, processing form, quantity, packing, destination and required shipment date. For agricultural products, add the test reports and destination documents your importer requires.",
          "Samples and laboratory results should be tied to an identified lot wherever the contract relies on them.",
        ],
      },
      {
        heading: "Confirm classification and destination requirements",
        paragraphs: [
          "Confirm the destination-country HS tariff line and import requirements with the importer or appointed customs broker before shipment. Rules can differ by product form, use and destination.",
          "Goodarzi Trading can prepare standard commercial and export documentation, but the overseas importer remains responsible for confirming its local import eligibility, registration, permits, labelling and customs obligations.",
        ],
      },
      {
        heading: "Agree the commercial structure",
        paragraphs: ["The quotation and sales contract should clearly record:"],
        bullets: [
          "Product specification, inspection and acceptance method",
          "Price, currency and agreed payment method",
          "Incoterms 2020 rule and precise named place",
          "Packing, marking and document list",
          "Shipment window and agreed communication process",
        ],
      },
      {
        heading: "Plan transport around the product",
        paragraphs: [
          "High-value, low-volume saffron may suit air freight, while larger agricultural consignments may move by sea, road or multimodal transport. Dates may require cold-chain planning depending on variety and route.",
          "Routing, banking and compliance availability can change. Confirm current arrangements for the specific buyer, product, destination and transaction before making a commitment.",
        ],
      },
    ],
    faqs: [
      { q: "What information is needed for an export quotation from Iran?", a: "Provide the product, grade or variety, quantity, packing, destination port or airport, required documents and preferred delivery term." },
      { q: "Who confirms destination import requirements?", a: "The overseas importer or appointed customs broker should confirm local classification, permits, registration, labelling, duties and admissibility before shipment." },
      { q: "How can I contact Goodarzi Trading?", a: "Send the buyer inquiry form or contact the export team on WhatsApp at +98 919 123 8554." },
    ],
    links: [
      { label: "Iranian export products", to: "/export-products" },
      { label: "Trade services & HS Code", to: "/hs-code" },
      { label: "Incoterms 2020", to: "/incoterms" },
      { label: "International buyer inquiry", to: "/inquiry" },
    ],
  },
];

export function getBuyerGuide(slug: string) {
  return BUYER_GUIDES.find((guide) => guide.slug === slug);
}

export function buyerGuideUrl(slug: string) {
  return `${SITE_URL}/knowledge/buyer-guides/${slug}`;
}
