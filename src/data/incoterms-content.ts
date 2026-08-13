/**
 * Full editorial content for the 11 Incoterms® 2020 rules.
 * Written in-house from the ICC 2020 rule structure (A1–A10 / B1–B10).
 * Bilingual EN/FA; Arabic falls back to English.
 */

export type IncotermDetail = {
  code: string;
  name: { en: string; fa: string; ar: string };
  group: { en: string; fa: string; ar: string };
  transport: { en: string; fa: string; ar: string };
  definition: { en: string; fa: string };
  deliveryPoint: { en: string; fa: string };
  riskTransfer: { en: string; fa: string };
  sellerCosts: { en: string[]; fa: string[] };
  buyerCosts: { en: string[]; fa: string[] };
  insurance: { en: string; fa: string };
  exportFormalities: { en: string; fa: string };
  importFormalities: { en: string; fa: string };
  documents: { en: string[]; fa: string[] };
  useCases: { en: string; fa: string };
  mistakes: { en: string[]; fa: string[] };
  example: { en: string; fa: string };
};

export const incotermDetails: IncotermDetail[] = [
  {
    code: "EXW",
    name: { en: "Ex Works", fa: "تحویل در محل کار", ar: "التسليم في المصنع" },
    group: { en: "Group E — Departure", fa: "گروه E — مبدأ", ar: "المجموعة E" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers when it places the goods at the disposal of the buyer at the seller's premises or another named place (works, factory, warehouse), not cleared for export and not loaded on any collecting vehicle. EXW represents the minimum obligation for the seller and the maximum obligation for the buyer.",
      fa: "فروشنده زمانی تحویل را انجام داده که کالا را در محل خود (کارخانه، انبار) یا مکان نام‌برده دیگر، بدون ترخیص صادراتی و بدون بارگیری روی وسیله نقلیه، در اختیار خریدار قرار دهد. EXW کمترین تعهد را برای فروشنده و بیشترین تعهد را برای خریدار ایجاد می‌کند.",
    },
    deliveryPoint: {
      en: "At the named place of delivery (usually the seller's factory or warehouse), goods at the buyer's disposal on the agreed date or period.",
      fa: "در محل نام‌برده تحویل (معمولاً کارخانه یا انبار فروشنده) و در تاریخ یا بازه توافق‌شده.",
    },
    riskTransfer: {
      en: "Risk passes to the buyer at the moment the goods are placed at the buyer's disposal at the named place — before loading.",
      fa: "ریسک در لحظه قرار گرفتن کالا در اختیار خریدار در محل نام‌برده — پیش از بارگیری — به خریدار منتقل می‌شود.",
    },
    sellerCosts: {
      en: ["Production, packing and marking suitable for the transport", "Making the goods available at the named place", "Checking operations (quality, measuring, weighing, counting)"],
      fa: ["تولید، بسته‌بندی و علامت‌گذاری مناسب حمل", "آماده‌سازی کالا در محل نام‌برده", "عملیات کنترل کیفیت، توزین و شمارش"],
    },
    buyerCosts: {
      en: ["Loading at the seller's premises", "Inland carriage, terminal handling, main carriage", "Export clearance, duties and taxes in the country of export", "Import clearance, duties, VAT and delivery to final destination"],
      fa: ["بارگیری در محل فروشنده", "حمل داخلی، هزینه‌های ترمینال و حمل اصلی", "ترخیص صادراتی و عوارض کشور مبدأ", "ترخیص وارداتی، حقوق ورودی، مالیات و حمل تا مقصد نهایی"],
    },
    insurance: {
      en: "No insurance obligation for either party. The buyer bears risk from the named place onwards and should insure from that point.",
      fa: "هیچ‌یک از طرفین تعهد بیمه ندارند. ریسک از محل تحویل بر عهده خریدار است و بیمه از همان نقطه توصیه می‌شود.",
    },
    exportFormalities: {
      en: "Buyer's responsibility. The seller must only assist, at the buyer's request, risk and cost, in obtaining documents and information needed for export.",
      fa: "بر عهده خریدار است. فروشنده تنها به درخواست، هزینه و ریسک خریدار در تهیه اسناد و اطلاعات لازم همکاری می‌کند.",
    },
    importFormalities: {
      en: "Entirely the buyer's responsibility, including transit clearance.",
      fa: "کاملاً بر عهده خریدار، از جمله ترخیص ترانزیتی.",
    },
    documents: {
      en: ["Commercial invoice", "Packing list", "Any document agreed as evidence of delivery", "Certificate of origin (if requested, at buyer's cost)"],
      fa: ["سیاهه تجاری", "لیست عدل‌بندی", "سند مورد توافق به‌عنوان دلیل تحویل", "گواهی مبدأ (در صورت درخواست، به هزینه خریدار)"],
    },
    useCases: {
      en: "Suitable for domestic trade, ex-factory quotations and buyers with their own logistics agent in the seller's country. Not recommended for cross-border sales where the buyer cannot legally act as exporter.",
      fa: "مناسب تجارت داخلی، اعلام قیمت درب کارخانه و خریدارانی که نماینده لجستیکی در کشور فروشنده دارند. برای معاملات صادراتی که خریدار نمی‌تواند قانوناً صادرکننده باشد توصیه نمی‌شود.",
    },
    mistakes: {
      en: ["Using EXW for export when only a locally registered exporter can file the customs declaration", "Assuming the seller must load the truck — it must not, unless separately agreed", "Failing to obtain export proof needed for the seller's VAT/tax exemption"],
      fa: ["استفاده از EXW در صادرات، در حالی که تنها صادرکننده ثبت‌شده محلی می‌تواند اظهارنامه گمرکی بدهد", "تصور اینکه فروشنده باید بارگیری کند؛ چنین تعهدی وجود ندارد مگر توافق جداگانه", "عدم دریافت مدرک خروج کالا که برای معافیت مالیاتی فروشنده لازم است"],
    },
    example: {
      en: "EXW Tehran Warehouse, Incoterms® 2020 — the buyer's forwarder collects 5 pallets of saffron from the seller's warehouse and handles everything thereafter.",
      fa: "EXW انبار تهران، اینکوترمز ۲۰۲۰ — فورواردر خریدار ۵ پالت زعفران را از انبار فروشنده تحویل می‌گیرد و ادامه کار با اوست.",
    },
  },
  {
    code: "FCA",
    name: { en: "Free Carrier", fa: "تحویل به حمل‌کننده", ar: "التسليم للناقل" },
    group: { en: "Group F — Main carriage unpaid", fa: "گروه F — حمل اصلی پرداخت‌نشده", ar: "المجموعة F" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers the goods, cleared for export, to the carrier or another person nominated by the buyer at the seller's premises or another named place. FCA is the recommended replacement for FOB in containerised trade.",
      fa: "فروشنده کالای ترخیص‌شده برای صادرات را به حمل‌کننده یا شخص تعیین‌شده از سوی خریدار، در محل خود یا مکان نام‌برده دیگر تحویل می‌دهد. FCA جایگزین توصیه‌شده FOB در حمل کانتینری است.",
    },
    deliveryPoint: {
      en: "Two variants: (a) at the seller's premises — delivery occurs when the goods are loaded on the buyer's collecting vehicle; (b) at any other place (terminal, forwarder's yard) — delivery occurs when the goods are placed at the disposal of the carrier on the seller's arriving vehicle, ready for unloading.",
      fa: "دو حالت: (الف) در محل فروشنده — تحویل هنگام بارگیری روی وسیله نقلیه خریدار؛ (ب) در مکان دیگر (ترمینال، انبار فورواردر) — تحویل هنگام قرار گرفتن کالا روی وسیله نقلیه فروشنده و آماده تخلیه در اختیار حمل‌کننده.",
    },
    riskTransfer: {
      en: "At the moment of delivery to the nominated carrier at the named place — before the main carriage begins.",
      fa: "در لحظه تحویل به حمل‌کننده تعیین‌شده در محل نام‌برده — پیش از آغاز حمل اصلی.",
    },
    sellerCosts: {
      en: ["Packing, marking and checking", "Pre-carriage to the named place", "Export clearance, duties, taxes and licences", "Loading, when delivery is at the seller's premises"],
      fa: ["بسته‌بندی، علامت‌گذاری و کنترل", "حمل تا محل نام‌برده", "ترخیص صادراتی، عوارض و مجوزها", "بارگیری، در حالتی که تحویل در محل فروشنده باشد"],
    },
    buyerCosts: {
      en: ["Main carriage and freight", "Terminal handling at destination", "Insurance (if desired)", "Import clearance, duties and onward delivery"],
      fa: ["حمل اصلی و کرایه", "هزینه‌های ترمینال مقصد", "بیمه (در صورت تمایل)", "ترخیص وارداتی، حقوق ورودی و حمل تا مقصد"],
    },
    insurance: {
      en: "No obligation on either party. The buyer normally insures from the delivery point.",
      fa: "تعهدی برای هیچ‌یک از طرفین نیست. معمولاً خریدار از نقطه تحویل بیمه می‌کند.",
    },
    exportFormalities: { en: "Seller's responsibility and cost.", fa: "بر عهده و هزینه فروشنده." },
    importFormalities: { en: "Buyer's responsibility and cost, including transit.", fa: "بر عهده و هزینه خریدار، از جمله ترانزیت." },
    documents: {
      en: ["Commercial invoice and packing list", "Export customs declaration", "Transport document — under FCA 2020 the parties may agree that the buyer instructs the carrier to issue an on-board bill of lading to the seller", "Certificate of origin, inspection or health certificates as agreed"],
      fa: ["سیاهه تجاری و لیست عدل‌بندی", "اظهارنامه صادراتی", "سند حمل — در FCA 2020 طرفین می‌توانند توافق کنند خریدار به حمل‌کننده دستور دهد بارنامه «on-board» به نام فروشنده صادر شود", "گواهی مبدأ، بازرسی یا بهداشت طبق توافق"],
    },
    useCases: {
      en: "The default rule for container shipments, air freight, road and rail exports, and for letter-of-credit transactions where the seller needs an on-board bill of lading.",
      fa: "قاعده پیش‌فرض برای حمل کانتینری، هوایی، جاده‌ای و ریلی و نیز معاملات اعتبار اسنادی که فروشنده به بارنامه on-board نیاز دارد.",
    },
    mistakes: {
      en: ["Not stating the exact named place — the delivery point and the cost split both depend on it", "Using FOB instead of FCA for containers handed over at a terminal", "Forgetting to agree the on-board bill of lading option required by the L/C"],
      fa: ["ذکر نکردن دقیق محل تحویل — نقطه تحویل و تقسیم هزینه‌ها به آن وابسته است", "استفاده از FOB به‌جای FCA برای کانتینرهای تحویلی در ترمینال", "فراموش کردن توافق درباره بارنامه on-board مورد نیاز اعتبار اسنادی"],
    },
    example: {
      en: "FCA Bandar Abbas Container Terminal, Incoterms® 2020 — the seller clears the pistachios for export and hands the container to the buyer's line at the terminal.",
      fa: "FCA ترمینال کانتینری بندرعباس، اینکوترمز ۲۰۲۰ — فروشنده پسته را برای صادرات ترخیص و کانتینر را در ترمینال به خط کشتیرانی خریدار تحویل می‌دهد.",
    },
  },
  {
    code: "CPT",
    name: { en: "Carriage Paid To", fa: "کرایه حمل پرداخت‌شده تا", ar: "تكاليف النقل مدفوعة إلى" },
    group: { en: "Group C — Main carriage paid", fa: "گروه C — حمل اصلی پرداخت‌شده", ar: "المجموعة C" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers the goods to the carrier it has contracted with, and pays the carriage to the named place of destination. Delivery and arrival are two different points: risk transfers early, costs run to destination.",
      fa: "فروشنده کالا را به حمل‌کننده‌ای که خود قرارداد بسته تحویل می‌دهد و کرایه را تا مقصد نام‌برده می‌پردازد. نقطه تحویل و نقطه ورود متفاوت‌اند: ریسک زودتر منتقل می‌شود اما هزینه تا مقصد با فروشنده است.",
    },
    deliveryPoint: {
      en: "When the goods are handed over to the first carrier in the country of dispatch.",
      fa: "هنگام تحویل کالا به نخستین حمل‌کننده در کشور مبدأ.",
    },
    riskTransfer: {
      en: "On handover to the first carrier — not at destination. This is the most misunderstood feature of the C-rules.",
      fa: "هنگام تحویل به نخستین حمل‌کننده — نه در مقصد. این نکته بیشترین سوءبرداشت را در قواعد گروه C ایجاد می‌کند.",
    },
    sellerCosts: {
      en: ["Packing, checking, export clearance", "Contract of carriage and freight to the named destination", "Unloading charges at destination only if included in the freight contract"],
      fa: ["بسته‌بندی، کنترل و ترخیص صادراتی", "قرارداد حمل و کرایه تا مقصد نام‌برده", "هزینه تخلیه در مقصد فقط اگر در قرارداد حمل گنجانده شده باشد"],
    },
    buyerCosts: {
      en: ["All risks and costs after handover to the first carrier that are not part of the carriage contract", "Import clearance, duties and taxes", "Onward delivery after the named destination"],
      fa: ["تمام ریسک‌ها و هزینه‌های پس از تحویل به حمل‌کننده که در قرارداد حمل نیامده است", "ترخیص وارداتی، حقوق و مالیات", "حمل پس از مقصد نام‌برده"],
    },
    insurance: { en: "No insurance obligation. The buyer carries the risk in transit and should arrange cover.", fa: "تعهد بیمه وجود ندارد. ریسک حین حمل با خریدار است و باید بیمه تهیه کند." },
    exportFormalities: { en: "Seller's responsibility and cost.", fa: "بر عهده و هزینه فروشنده." },
    importFormalities: { en: "Buyer's responsibility and cost.", fa: "بر عهده و هزینه خریدار." },
    documents: {
      en: ["Commercial invoice, packing list", "Usual transport document for the agreed destination", "Export declaration and certificate of origin as agreed"],
      fa: ["سیاهه تجاری، لیست عدل‌بندی", "سند حمل متعارف تا مقصد توافق‌شده", "اظهارنامه صادراتی و گواهی مبدأ طبق توافق"],
    },
    useCases: {
      en: "Multimodal or container shipments where the seller organises the main carriage but does not want transit risk or insurance duty.",
      fa: "حمل چندوجهی یا کانتینری که فروشنده حمل اصلی را سازمان می‌دهد اما ریسک حین حمل و تعهد بیمه را نمی‌پذیرد.",
    },
    mistakes: {
      en: ["Believing the seller bears risk to destination", "Naming only the destination country instead of a precise place", "Not agreeing who pays destination terminal handling charges"],
      fa: ["تصور اینکه ریسک تا مقصد با فروشنده است", "ذکر تنها نام کشور مقصد به‌جای محل دقیق", "توافق نکردن درباره پرداخت هزینه‌های ترمینال مقصد"],
    },
    example: { en: "CPT Hamburg, Incoterms® 2020.", fa: "CPT هامبورگ، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "CIP",
    name: { en: "Carriage and Insurance Paid To", fa: "کرایه حمل و بیمه پرداخت‌شده تا", ar: "النقل والتأمين مدفوعان إلى" },
    group: { en: "Group C — Main carriage paid", fa: "گروه C — حمل اصلی پرداخت‌شده", ar: "المجموعة C" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "As CPT, but the seller must additionally contract cargo insurance for the buyer's benefit. Under Incoterms 2020 the required cover for CIP was raised to all-risks level (Institute Cargo Clauses (A) or similar).",
      fa: "مانند CPT، با این تفاوت که فروشنده باید بیمه باربری به نفع خریدار تهیه کند. در اینکوترمز ۲۰۲۰ سطح پوشش لازم برای CIP به بیمه تمام‌خطر (کلوز A) ارتقا یافته است.",
    },
    deliveryPoint: { en: "On handover to the first carrier in the country of dispatch.", fa: "هنگام تحویل به نخستین حمل‌کننده در کشور مبدأ." },
    riskTransfer: { en: "On handover to the first carrier; the insurance protects the buyer from that point to the named destination.", fa: "هنگام تحویل به نخستین حمل‌کننده؛ بیمه از همان نقطه تا مقصد نام‌برده از خریدار حمایت می‌کند." },
    sellerCosts: {
      en: ["Everything under CPT", "Cargo insurance at minimum 110% of the contract value in the contract currency, ICC (A) level cover"],
      fa: ["تمام موارد CPT", "بیمه باربری حداقل ۱۱۰٪ ارزش قرارداد به ارز قرارداد، در سطح کلوز (A)"],
    },
    buyerCosts: {
      en: ["Import clearance and duties", "Additional cover (war, strikes) if requested — at the buyer's cost", "Costs after the named destination"],
      fa: ["ترخیص وارداتی و حقوق ورودی", "پوشش‌های اضافی (جنگ، اعتصاب) در صورت درخواست، به هزینه خریدار", "هزینه‌های پس از مقصد نام‌برده"],
    },
    insurance: {
      en: "Mandatory for the seller: all-risks cover, minimum 110% of the invoice value, payable to the buyer, valid until the named place of destination.",
      fa: "برای فروشنده الزامی است: پوشش تمام‌خطر، حداقل ۱۱۰٪ ارزش سیاهه، قابل پرداخت به خریدار و معتبر تا مقصد نام‌برده.",
    },
    exportFormalities: { en: "Seller's responsibility and cost.", fa: "بر عهده و هزینه فروشنده." },
    importFormalities: { en: "Buyer's responsibility and cost.", fa: "بر عهده و هزینه خریدار." },
    documents: {
      en: ["Commercial invoice, packing list", "Transport document", "Insurance policy or certificate transferable to the buyer"],
      fa: ["سیاهه تجاری، لیست عدل‌بندی", "سند حمل", "بیمه‌نامه یا گواهی بیمه قابل انتقال به خریدار"],
    },
    useCases: { en: "High-value or fragile cargo shipped multimodally where the buyer wants insurance arranged at origin.", fa: "کالاهای باارزش یا شکننده در حمل چندوجهی که خریدار می‌خواهد بیمه در مبدأ تنظیم شود." },
    mistakes: {
      en: ["Buying only ICC (C) cover — insufficient for CIP under Incoterms 2020", "Insuring to the wrong destination point", "Assuming insurance means the seller bears transit risk"],
      fa: ["خرید تنها پوشش کلوز (C) که برای CIP در اینکوترمز ۲۰۲۰ کافی نیست", "بیمه تا نقطه مقصد اشتباه", "تصور اینکه بیمه یعنی ریسک حمل با فروشنده است"],
    },
    example: { en: "CIP Warsaw, Incoterms® 2020.", fa: "CIP ورشو، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "DAP",
    name: { en: "Delivered at Place", fa: "تحویل در محل مقرر", ar: "التسليم في المكان" },
    group: { en: "Group D — Arrival", fa: "گروه D — مقصد", ar: "المجموعة D" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers when the goods are placed at the disposal of the buyer on the arriving means of transport, ready for unloading at the named place of destination. The seller bears all risks to that point.",
      fa: "فروشنده زمانی تحویل می‌دهد که کالا روی وسیله نقلیه رسیده و آماده تخلیه، در محل مقصد نام‌برده در اختیار خریدار قرار گیرد. تمام ریسک تا آن نقطه با فروشنده است.",
    },
    deliveryPoint: { en: "At the named destination, goods ready for unloading but not unloaded.", fa: "در مقصد نام‌برده، کالا آماده تخلیه اما تخلیه‌نشده." },
    riskTransfer: { en: "At the named destination — the seller carries all transit risk.", fa: "در مقصد نام‌برده — تمام ریسک حمل با فروشنده است." },
    sellerCosts: {
      en: ["Packing, export clearance, main carriage", "Transit charges and any transit-country duties", "Delivery to the named destination"],
      fa: ["بسته‌بندی، ترخیص صادراتی، حمل اصلی", "هزینه‌های ترانزیت و عوارض کشورهای مسیر", "حمل تا مقصد نام‌برده"],
    },
    buyerCosts: {
      en: ["Unloading at destination", "Import clearance, duties, VAT and any import licences", "Demurrage caused by delayed clearance"],
      fa: ["تخلیه در مقصد", "ترخیص وارداتی، حقوق ورودی، مالیات و مجوزهای ورود", "دموراژ ناشی از تأخیر در ترخیص"],
    },
    insurance: { en: "No obligation, but the seller carries the risk and should insure its own exposure.", fa: "تعهدی وجود ندارد، اما ریسک با فروشنده است و بیمه برای پوشش خود او منطقی است." },
    exportFormalities: { en: "Seller's responsibility, including transit formalities.", fa: "بر عهده فروشنده، شامل تشریفات ترانزیت." },
    importFormalities: { en: "Buyer's responsibility and cost.", fa: "بر عهده و هزینه خریدار." },
    documents: {
      en: ["Commercial invoice, packing list", "Transport document / delivery order enabling the buyer to take delivery", "Certificate of origin and any preferential documents"],
      fa: ["سیاهه تجاری، لیست عدل‌بندی", "سند حمل یا دستور تحویل برای دریافت کالا توسط خریدار", "گواهی مبدأ و اسناد ترجیحی"],
    },
    useCases: { en: "Door-to-door road or rail deliveries to regional markets (Iraq, Turkey, CIS) where the buyer clears imports.", fa: "تحویل درب‌به‌درب جاده‌ای یا ریلی به بازارهای منطقه (عراق، ترکیه، کشورهای مشترک‌المنافع) با ترخیص توسط خریدار." },
    mistakes: {
      en: ["Quoting DAP when the buyer expects duties paid — that is DDP", "Not specifying the exact address of the delivery place", "Ignoring who pays unloading at destination"],
      fa: ["اعلام DAP در حالی که خریدار انتظار پرداخت حقوق ورودی دارد — که DDP است", "ذکر نکردن آدرس دقیق محل تحویل", "روشن نکردن پرداخت‌کننده هزینه تخلیه در مقصد"],
    },
    example: { en: "DAP Erbil Warehouse, Incoterms® 2020.", fa: "DAP انبار اربیل، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "DPU",
    name: { en: "Delivered at Place Unloaded", fa: "تحویل در محل مقرر پس از تخلیه", ar: "التسليم في المكان بعد التفريغ" },
    group: { en: "Group D — Arrival", fa: "گروه D — مقصد", ar: "المجموعة D" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers when the goods, once unloaded from the arriving means of transport, are placed at the disposal of the buyer at the named place of destination. DPU replaced DAT in Incoterms 2020 and is the only rule requiring the seller to unload.",
      fa: "فروشنده زمانی تحویل می‌دهد که کالا پس از تخلیه از وسیله نقلیه، در محل مقصد نام‌برده در اختیار خریدار قرار گیرد. DPU در اینکوترمز ۲۰۲۰ جایگزین DAT شد و تنها قاعده‌ای است که تخلیه را بر عهده فروشنده می‌گذارد.",
    },
    deliveryPoint: { en: "At the named destination, after unloading.", fa: "در مقصد نام‌برده، پس از تخلیه." },
    riskTransfer: { en: "After unloading at the named destination.", fa: "پس از تخلیه در مقصد نام‌برده." },
    sellerCosts: { en: ["All carriage and export/transit formalities", "Unloading at the named destination"], fa: ["تمام هزینه‌های حمل و تشریفات صادرات و ترانزیت", "تخلیه در مقصد نام‌برده"] },
    buyerCosts: { en: ["Import clearance, duties and taxes", "Any onward carriage"], fa: ["ترخیص وارداتی، حقوق و مالیات", "حمل بعدی در صورت وجود"] },
    insurance: { en: "No obligation; the seller bears risk until unloading and should cover it.", fa: "تعهدی نیست؛ ریسک تا تخلیه با فروشنده است و بیمه توصیه می‌شود." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Buyer's responsibility.", fa: "بر عهده خریدار." },
    documents: { en: ["Commercial invoice, packing list", "Transport document / delivery order", "Terminal handling receipt where applicable"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "سند حمل یا دستور تحویل", "رسید ترمینال در صورت وجود"] },
    useCases: { en: "Deliveries into terminals, container yards or the buyer's site where the seller controls unloading equipment.", fa: "تحویل در ترمینال، محوطه کانتینری یا سایت خریدار که فروشنده امکانات تخلیه را در اختیار دارد." },
    mistakes: { en: ["Choosing DPU when the seller cannot arrange unloading at the site", "Confusing DPU with the deleted DAT rule", "Not naming the terminal precisely"], fa: ["انتخاب DPU در حالی که فروشنده امکان تخلیه در محل را ندارد", "اشتباه گرفتن DPU با قاعده حذف‌شده DAT", "ذکر نکردن دقیق نام ترمینال"] },
    example: { en: "DPU Jebel Ali Terminal, Incoterms® 2020.", fa: "DPU ترمینال جبل‌علی، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "DDP",
    name: { en: "Delivered Duty Paid", fa: "تحویل با پرداخت حقوق و عوارض", ar: "التسليم خالص الرسوم" },
    group: { en: "Group D — Arrival", fa: "گروه D — مقصد", ar: "المجموعة D" },
    transport: { en: "Any mode or modes of transport", fa: "هر شیوه حمل", ar: "أي وسيلة نقل" },
    definition: {
      en: "The seller delivers when the goods are placed at the disposal of the buyer, cleared for import, on the arriving means of transport ready for unloading at the named destination. DDP is the maximum obligation for the seller.",
      fa: "فروشنده زمانی تحویل می‌دهد که کالا ترخیص‌شده برای ورود، روی وسیله نقلیه رسیده و آماده تخلیه، در مقصد نام‌برده در اختیار خریدار قرار گیرد. DDP بیشترین تعهد را برای فروشنده دارد.",
    },
    deliveryPoint: { en: "At the named destination, import-cleared, ready for unloading.", fa: "در مقصد نام‌برده، ترخیص‌شده و آماده تخلیه." },
    riskTransfer: { en: "At the named destination after import clearance.", fa: "در مقصد نام‌برده و پس از ترخیص وارداتی." },
    sellerCosts: { en: ["All carriage, export and transit costs", "Import duties, VAT (unless expressly excluded) and clearance fees", "Any import licences"], fa: ["تمام هزینه‌های حمل، صادرات و ترانزیت", "حقوق ورودی، مالیات بر ارزش افزوده (مگر صراحتاً مستثنا شود) و هزینه ترخیص", "مجوزهای ورود"] },
    buyerCosts: { en: ["Unloading at destination", "Costs after the named place"], fa: ["تخلیه در مقصد", "هزینه‌های پس از محل نام‌برده"] },
    insurance: { en: "No obligation; the seller bears the entire transit risk.", fa: "تعهدی نیست؛ تمام ریسک حمل با فروشنده است." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Seller's responsibility — requires the seller to be able to act as importer of record in the destination country.", fa: "بر عهده فروشنده — مستلزم آن است که فروشنده بتواند در کشور مقصد به‌عنوان واردکننده رسمی عمل کند." },
    documents: { en: ["Commercial invoice, packing list", "Import customs declaration and duty receipts", "Delivery order / proof of delivery"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "اظهارنامه وارداتی و رسید پرداخت حقوق ورودی", "دستور تحویل یا مدرک تحویل"] },
    useCases: { en: "Sample shipments, spare parts and e-commerce deliveries where the buyer wants a landed, all-inclusive price.", fa: "ارسال نمونه، قطعات یدکی و فروش اینترنتی که خریدار قیمت نهایی و تمام‌شده می‌خواهد." },
    mistakes: { en: ["Selling DDP into a country where a foreign seller cannot be importer of record", "Not clarifying whether VAT is included", "Underestimating destination duties and taxes in the price"], fa: ["فروش DDP به کشوری که فروشنده خارجی نمی‌تواند واردکننده رسمی باشد", "روشن نکردن شمول مالیات بر ارزش افزوده", "کم‌برآورد کردن حقوق و مالیات مقصد در قیمت"] },
    example: { en: "DDP Doha, Incoterms® 2020, VAT excluded.", fa: "DDP دوحه، اینکوترمز ۲۰۲۰، بدون احتساب مالیات بر ارزش افزوده." },
  },
  {
    code: "FAS",
    name: { en: "Free Alongside Ship", fa: "تحویل در کنار کشتی", ar: "التسليم بجانب السفينة" },
    group: { en: "Group F — Main carriage unpaid", fa: "گروه F — حمل اصلی پرداخت‌نشده", ar: "المجموعة F" },
    transport: { en: "Sea and inland waterway transport only", fa: "فقط حمل دریایی و آبراه داخلی", ar: "النقل البحري والنهري فقط" },
    definition: {
      en: "The seller delivers when the goods are placed alongside the vessel (e.g. on a quay or a barge) nominated by the buyer at the named port of shipment, cleared for export.",
      fa: "فروشنده زمانی تحویل می‌دهد که کالای ترخیص‌شده برای صادرات، در کنار کشتی تعیین‌شده توسط خریدار (روی اسکله یا دوبه) در بندر بارگیری نام‌برده قرار گیرد.",
    },
    deliveryPoint: { en: "Alongside the named vessel at the named port of shipment.", fa: "در کنار کشتی نام‌برده در بندر بارگیری." },
    riskTransfer: { en: "When the goods are placed alongside the ship.", fa: "هنگام قرار گرفتن کالا در کنار کشتی." },
    sellerCosts: { en: ["Packing and inland carriage to the quay", "Export clearance", "Quay/handling charges up to alongside"], fa: ["بسته‌بندی و حمل داخلی تا اسکله", "ترخیص صادراتی", "هزینه‌های اسکله تا کنار کشتی"] },
    buyerCosts: { en: ["Loading on board, freight and main carriage", "Insurance", "Import clearance and destination costs"], fa: ["بارگیری روی کشتی، کرایه و حمل اصلی", "بیمه", "ترخیص وارداتی و هزینه‌های مقصد"] },
    insurance: { en: "No obligation on either party.", fa: "تعهدی برای هیچ‌یک از طرفین نیست." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Buyer's responsibility.", fa: "بر عهده خریدار." },
    documents: { en: ["Commercial invoice, packing list", "Export declaration", "Dock receipt / mate's receipt as proof of delivery"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "اظهارنامه صادراتی", "رسید اسکله یا رسید افسر کشتی به‌عنوان مدرک تحویل"] },
    useCases: { en: "Bulk and break-bulk cargo — ore, grain, steel, project cargo loaded directly from the quay.", fa: "کالاهای فله و غیرکانتینری — سنگ معدن، غلات، فولاد و محموله‌های پروژه‌ای که مستقیم از اسکله بارگیری می‌شوند." },
    mistakes: { en: ["Using FAS for containers — FCA is correct", "Not aligning the vessel nomination date with the delivery window", "Ignoring quay storage costs if the vessel is delayed"], fa: ["استفاده از FAS برای کانتینر — گزینه درست FCA است", "هماهنگ نبودن تاریخ معرفی کشتی با بازه تحویل", "نادیده گرفتن هزینه انبارداری اسکله در صورت تأخیر کشتی"] },
    example: { en: "FAS Imam Khomeini Port, Incoterms® 2020.", fa: "FAS بندر امام خمینی، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "FOB",
    name: { en: "Free on Board", fa: "تحویل روی عرشه کشتی", ar: "التسليم على ظهر السفينة" },
    group: { en: "Group F — Main carriage unpaid", fa: "گروه F — حمل اصلی پرداخت‌نشده", ar: "المجموعة F" },
    transport: { en: "Sea and inland waterway transport only", fa: "فقط حمل دریایی و آبراه داخلی", ar: "النقل البحري والنهري فقط" },
    definition: {
      en: "The seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment, cleared for export. Risk passes once the goods are on board.",
      fa: "فروشنده کالای ترخیص‌شده برای صادرات را روی عرشه کشتی تعیین‌شده توسط خریدار در بندر بارگیری تحویل می‌دهد. ریسک با قرار گرفتن کالا روی عرشه منتقل می‌شود.",
    },
    deliveryPoint: { en: "On board the vessel at the named port of shipment.", fa: "روی عرشه کشتی در بندر بارگیری نام‌برده." },
    riskTransfer: { en: "When the goods are on board the vessel.", fa: "هنگام قرار گرفتن کالا روی عرشه کشتی." },
    sellerCosts: { en: ["Inland carriage to the port and terminal handling at origin", "Export clearance and duties", "Loading on board"], fa: ["حمل داخلی تا بندر و هزینه ترمینال مبدأ", "ترخیص صادراتی و عوارض", "بارگیری روی عرشه"] },
    buyerCosts: { en: ["Ocean freight and any surcharges", "Insurance", "Destination handling, import clearance and delivery"], fa: ["کرایه دریایی و هزینه‌های جانبی", "بیمه", "هزینه‌های مقصد، ترخیص وارداتی و حمل نهایی"] },
    insurance: { en: "No obligation on either party; the buyer normally insures from the ship's rail onwards.", fa: "تعهدی برای طرفین نیست؛ معمولاً خریدار از لحظه بارگیری بیمه می‌کند." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Buyer's responsibility.", fa: "بر عهده خریدار." },
    documents: { en: ["Commercial invoice, packing list", "On-board bill of lading", "Export declaration, certificate of origin, inspection certificate"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "بارنامه دریایی on-board", "اظهارنامه صادراتی، گواهی مبدأ، گواهی بازرسی"] },
    useCases: { en: "Bulk cargo and traditional break-bulk sea shipments; still widely used in commodity trade and letters of credit.", fa: "کالاهای فله و حمل دریایی سنتی؛ همچنان در تجارت کامودیتی و اعتبارات اسنادی رایج است." },
    mistakes: { en: ["Using FOB for containerised cargo delivered at a terminal days before loading — use FCA", "Not agreeing who bears terminal handling charges (THC)", "Nominating the vessel late and triggering storage costs"], fa: ["استفاده از FOB برای کانتینری که روزها پیش از بارگیری در ترمینال تحویل می‌شود — به‌جای آن FCA", "توافق نکردن درباره پرداخت‌کننده هزینه ترمینال (THC)", "معرفی دیرهنگام کشتی و ایجاد هزینه انبارداری"] },
    example: { en: "FOB Bandar Abbas, Incoterms® 2020.", fa: "FOB بندرعباس، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "CFR",
    name: { en: "Cost and Freight", fa: "هزینه و کرایه حمل", ar: "التكلفة وأجرة الشحن" },
    group: { en: "Group C — Main carriage paid", fa: "گروه C — حمل اصلی پرداخت‌شده", ar: "المجموعة C" },
    transport: { en: "Sea and inland waterway transport only", fa: "فقط حمل دریایی و آبراه داخلی", ar: "النقل البحري والنهري فقط" },
    definition: {
      en: "The seller delivers the goods on board the vessel and pays the freight to the named port of destination. Risk passes on board at the port of shipment while costs run to destination.",
      fa: "فروشنده کالا را روی عرشه کشتی تحویل و کرایه را تا بندر مقصد نام‌برده می‌پردازد. ریسک در بندر بارگیری و هنگام قرار گرفتن کالا روی عرشه منتقل می‌شود، اما هزینه تا مقصد با فروشنده است.",
    },
    deliveryPoint: { en: "On board the vessel at the port of shipment.", fa: "روی عرشه کشتی در بندر بارگیری." },
    riskTransfer: { en: "On board at the port of shipment — not at the destination port.", fa: "روی عرشه در بندر بارگیری — نه در بندر مقصد." },
    sellerCosts: { en: ["Export clearance, origin handling, loading", "Ocean freight to the named destination port"], fa: ["ترخیص صادراتی، هزینه‌های مبدأ و بارگیری", "کرایه دریایی تا بندر مقصد نام‌برده"] },
    buyerCosts: { en: ["Insurance", "Discharge and destination terminal charges not included in freight", "Import clearance, duties and inland delivery"], fa: ["بیمه", "تخلیه و هزینه‌های ترمینال مقصد که در کرایه نیامده است", "ترخیص وارداتی، حقوق ورودی و حمل داخلی"] },
    insurance: { en: "No obligation; the buyer carries transit risk and should insure.", fa: "تعهدی نیست؛ ریسک حمل با خریدار است و باید بیمه کند." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Buyer's responsibility.", fa: "بر عهده خریدار." },
    documents: { en: ["Commercial invoice, packing list", "On-board bill of lading to the destination port", "Certificate of origin and inspection documents"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "بارنامه on-board تا بندر مقصد", "گواهی مبدأ و اسناد بازرسی"] },
    useCases: { en: "Commodity sales by sea where the seller has better freight rates but does not want to insure.", fa: "فروش کامودیتی دریایی که فروشنده نرخ کرایه بهتری دارد اما نمی‌خواهد بیمه کند." },
    mistakes: { en: ["Thinking CFR means delivery at destination", "Not clarifying discharge and THC allocation", "Using CFR for containers instead of CPT"], fa: ["تصور اینکه CFR یعنی تحویل در مقصد", "روشن نکردن تقسیم هزینه تخلیه و THC", "استفاده از CFR برای کانتینر به‌جای CPT"] },
    example: { en: "CFR Mumbai, Incoterms® 2020.", fa: "CFR بمبئی، اینکوترمز ۲۰۲۰." },
  },
  {
    code: "CIF",
    name: { en: "Cost, Insurance and Freight", fa: "هزینه، بیمه و کرایه حمل", ar: "التكلفة والتأمين وأجرة الشحن" },
    group: { en: "Group C — Main carriage paid", fa: "گروه C — حمل اصلی پرداخت‌شده", ar: "المجموعة C" },
    transport: { en: "Sea and inland waterway transport only", fa: "فقط حمل دریایی و آبراه داخلی", ar: "النقل البحري والنهري فقط" },
    definition: {
      en: "As CFR, plus the seller must contract cargo insurance for the buyer's benefit. Under Incoterms 2020 the minimum cover for CIF remains Institute Cargo Clauses (C); higher cover can be agreed.",
      fa: "مانند CFR، به‌علاوه اینکه فروشنده باید بیمه باربری به نفع خریدار تهیه کند. در اینکوترمز ۲۰۲۰ حداقل پوشش CIF همان کلوز (C) است و پوشش بالاتر قابل توافق است.",
    },
    deliveryPoint: { en: "On board the vessel at the port of shipment.", fa: "روی عرشه کشتی در بندر بارگیری." },
    riskTransfer: { en: "On board at the port of shipment; the insurance policy protects the buyer during the voyage.", fa: "روی عرشه در بندر بارگیری؛ بیمه‌نامه در طول سفر از خریدار حمایت می‌کند." },
    sellerCosts: { en: ["Export clearance, origin charges, loading", "Ocean freight to the destination port", "Marine cargo insurance at minimum 110% of the invoice value"], fa: ["ترخیص صادراتی، هزینه‌های مبدأ و بارگیری", "کرایه دریایی تا بندر مقصد", "بیمه باربری دریایی حداقل ۱۱۰٪ ارزش سیاهه"] },
    buyerCosts: { en: ["Discharge costs not in the freight", "Import clearance, duties, inland delivery", "Any upgrade of insurance cover"], fa: ["هزینه تخلیه خارج از کرایه", "ترخیص وارداتی، حقوق ورودی، حمل داخلی", "ارتقای پوشش بیمه در صورت نیاز"] },
    insurance: { en: "Mandatory for the seller: minimum ICC (C), 110% of invoice value, in the contract currency, assignable to the buyer.", fa: "برای فروشنده الزامی است: حداقل کلوز (C)، ۱۱۰٪ ارزش سیاهه، به ارز قرارداد و قابل انتقال به خریدار." },
    exportFormalities: { en: "Seller's responsibility.", fa: "بر عهده فروشنده." },
    importFormalities: { en: "Buyer's responsibility.", fa: "بر عهده خریدار." },
    documents: { en: ["Commercial invoice, packing list", "On-board bill of lading", "Insurance policy or certificate", "Certificate of origin"], fa: ["سیاهه تجاری، لیست عدل‌بندی", "بارنامه on-board", "بیمه‌نامه یا گواهی بیمه", "گواهی مبدأ"] },
    useCases: { en: "The classic letter-of-credit sea sale — the buyer receives invoice, B/L and insurance policy as a document set.", fa: "فروش دریایی کلاسیک تحت اعتبار اسنادی — خریدار سیاهه، بارنامه و بیمه‌نامه را به‌صورت مجموعه اسناد دریافت می‌کند." },
    mistakes: { en: ["Assuming ICC (C) covers theft or damage — it does not; agree ICC (A) if needed", "Using CIF for container shipments instead of CIP", "Insurance expiring before the goods reach the buyer's warehouse"], fa: ["تصور اینکه کلوز (C) سرقت یا خسارت را پوشش می‌دهد — چنین نیست؛ در صورت نیاز کلوز (A) توافق شود", "استفاده از CIF برای حمل کانتینری به‌جای CIP", "پایان اعتبار بیمه پیش از رسیدن کالا به انبار خریدار"] },
    example: { en: "CIF Genoa, Incoterms® 2020, ICC (A) cover.", fa: "CIF جنوا، اینکوترمز ۲۰۲۰، با پوشش کلوز (A)." },
  },
];

export function incotermDetailByCode(code: string): IncotermDetail | undefined {
  return incotermDetails.find((d) => d.code.toLowerCase() === code.toLowerCase());
}
