export type HSCode = {
  code: string;              // کد تعرفه (HS Code) — 8 رقمی ایران
  description: string;       // شرح کالا
  category: string;          // فصل / گروه کالایی
  importDuty: number;        // حقوق ورودی (%)
  commercialProfit: number;  // سود بازرگانی (%)
  vat: number;               // مالیات بر ارزش افزوده (%)
  unit: string;              // واحد اندازه‌گیری
  permits?: string;          // مجوزها / ملاحظات
};

// دیتاست مرجع تعرفه گمرکی ۱۴۰۵ — نمونه‌ای منتخب از پرکاربردترین ردیف‌ها
// برای مراجعه رسمی به کتاب مقررات صادرات و واردات وزارت صمت مراجعه کنید.
export const hsCodes: HSCode[] = [
  // فصل ۰۸ - میوه‌ها و خشکبار
  { code: "08021200", description: "بادام بدون پوست", category: "میوه و خشکبار", importDuty: 26, commercialProfit: 15, vat: 10, unit: "کیلوگرم", permits: "بهداشت گیاهی" },
  { code: "08023100", description: "گردو با پوست", category: "میوه و خشکبار", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم", permits: "قرنطینه نباتی" },
  { code: "08023200", description: "گردوی بدون پوست", category: "میوه و خشکبار", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },
  { code: "08025100", description: "پسته با پوست تازه یا خشک", category: "میوه و خشکبار", importDuty: 32, commercialProfit: 20, vat: 10, unit: "کیلوگرم", permits: "ممنوعیت واردات از برخی مبادی" },
  { code: "08061000", description: "انگور تازه", category: "میوه و خشکبار", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },
  { code: "08071100", description: "هندوانه تازه", category: "میوه و خشکبار", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },
  { code: "08051000", description: "پرتقال تازه یا خشک", category: "میوه و خشکبار", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم", permits: "گواهی بهداشت گیاهی" },
  { code: "08052100", description: "نارنگی تازه", category: "میوه و خشکبار", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // فصل ۰۹ - چای، قهوه، ادویه
  { code: "09012190", description: "قهوه بو داده کافئین‌دار (به جز بسته‌بندی)", category: "چای و قهوه", importDuty: 32, commercialProfit: 10, vat: 10, unit: "کیلوگرم" },
  { code: "09021010", description: "چای سبز بسته‌بندی کمتر از ۳ کیلوگرم", category: "چای و قهوه", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },
  { code: "09024010", description: "چای سیاه فله", category: "چای و قهوه", importDuty: 20, commercialProfit: 5, vat: 10, unit: "کیلوگرم", permits: "ثبت سفارش وزارت جهاد" },
  { code: "09042110", description: "زعفران رشته‌ای درجه یک (سرگل)", category: "چای و قهوه", importDuty: 55, commercialProfit: 25, vat: 10, unit: "کیلوگرم", permits: "صادرات با گواهی مبدأ" },
  { code: "09071000", description: "میخک", category: "چای و قهوه", importDuty: 32, commercialProfit: 10, vat: 10, unit: "کیلوگرم" },
  { code: "09103010", description: "زردچوبه", category: "چای و قهوه", importDuty: 32, commercialProfit: 10, vat: 10, unit: "کیلوگرم" },

  // فصل ۱۰ - غلات
  { code: "10011900", description: "گندم دوروم", category: "غلات", importDuty: 5, commercialProfit: 1, vat: 0, unit: "کیلوگرم", permits: "کالای اساسی — کنترل قیمت" },
  { code: "10063000", description: "برنج نیمه سفید یا سفیدشده", category: "غلات", importDuty: 22, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "ممنوعیت فصلی واردات" },
  { code: "10059010", description: "ذرت دامی", category: "غلات", importDuty: 5, commercialProfit: 1, vat: 0, unit: "کیلوگرم", permits: "کالای اساسی" },
  { code: "10039000", description: "جو (به جز بذر)", category: "غلات", importDuty: 5, commercialProfit: 1, vat: 0, unit: "کیلوگرم" },

  // فصل ۱۵ - چربی و روغن
  { code: "15071000", description: "روغن سویا خام", category: "روغن خوراکی", importDuty: 5, commercialProfit: 1, vat: 0, unit: "کیلوگرم", permits: "کالای اساسی" },
  { code: "15119010", description: "روغن پالم تصفیه‌شده", category: "روغن خوراکی", importDuty: 10, commercialProfit: 2, vat: 0, unit: "کیلوگرم" },
  { code: "15121100", description: "روغن آفتابگردان خام", category: "روغن خوراکی", importDuty: 5, commercialProfit: 1, vat: 0, unit: "کیلوگرم" },

  // فصل ۱۷ - قند و شکر
  { code: "17011400", description: "شکر خام از نیشکر", category: "قند و شکر", importDuty: 4, commercialProfit: 5, vat: 0, unit: "کیلوگرم", permits: "کالای اساسی" },
  { code: "17019990", description: "شکر تصفیه‌شده سایر", category: "قند و شکر", importDuty: 26, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // فصل ۲۱ - فرآورده‌های خوراکی
  { code: "21011110", description: "قهوه فوری", category: "فرآورده‌های خوراکی", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },
  { code: "21050000", description: "بستنی و سایر یخ‌های خوراکی", category: "فرآورده‌های خوراکی", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },

  // فصل ۲۷ - سوخت و مواد نفتی
  { code: "27101210", description: "بنزین موتور با اکتان کمتر از ۹۵", category: "نفت و انرژی", importDuty: 10, commercialProfit: 5, vat: 10, unit: "لیتر", permits: "کالای راهبردی — مجوز وزارت نفت" },
  { code: "27101990", description: "سایر روغن‌های نفتی (به جز خام)", category: "نفت و انرژی", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "27160000", description: "انرژی الکتریکی", category: "نفت و انرژی", importDuty: 0, commercialProfit: 0, vat: 0, unit: "کیلووات‌ساعت" },

  // فصل ۳۰ - محصولات دارویی
  { code: "30049090", description: "سایر داروهای بسته‌بندی خرده‌فروشی", category: "دارو و پزشکی", importDuty: 5, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "مجوز سازمان غذا و دارو" },
  { code: "30021200", description: "آنتی‌سرم و فرآورده‌های خونی", category: "دارو و پزشکی", importDuty: 5, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "مجوز IFDA" },
  { code: "30061010", description: "نخ جراحی استریل", category: "دارو و پزشکی", importDuty: 15, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "مجوز اداره کل تجهیزات پزشکی" },

  // فصل ۳۹ - پلاستیک
  { code: "39012040", description: "پلی‌اتیلن سنگین (HDPE) گرید فیلم", category: "پلاستیک و پلیمر", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "39023091", description: "کوپلیمر پروپیلن-اتیلن سایر", category: "پلاستیک و پلیمر", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "39232110", description: "کیسه پلاستیکی پلی‌اتیلن", category: "پلاستیک و پلیمر", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },
  { code: "39269099", description: "سایر مصنوعات پلاستیکی", category: "پلاستیک و پلیمر", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },

  // فصل ۴۰ - لاستیک
  { code: "40111000", description: "تایر رادیال نو سواری", category: "لاستیک و تایر", importDuty: 32, commercialProfit: 10, vat: 10, unit: "عدد", permits: "استاندارد اجباری" },
  { code: "40112010", description: "تایر باری با عاج فوقانی رادیال", category: "لاستیک و تایر", importDuty: 20, commercialProfit: 5, vat: 10, unit: "عدد", permits: "استاندارد اجباری" },

  // فصل ۴۸ - کاغذ
  { code: "48025500", description: "کاغذ چاپ و تحریر بدون پوشش رول", category: "کاغذ و مقوا", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "48181000", description: "دستمال کاغذی توالت رول", category: "کاغذ و مقوا", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },

  // فصل ۵۲ - پنبه و منسوجات
  { code: "52010010", description: "پنبه هیدروفیل شده", category: "منسوجات", importDuty: 15, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "52085200", description: "پارچه پنبه‌ای تاری و پودی چاپ‌شده", category: "منسوجات", importDuty: 32, commercialProfit: 15, vat: 10, unit: "مترمربع" },

  // فصل ۶۱ - پوشاک
  { code: "61091000", description: "تی‌شرت و زیرپیراهنی از پنبه", category: "پوشاک", importDuty: 55, commercialProfit: 20, vat: 10, unit: "عدد" },
  { code: "61102000", description: "ژاکت و پلیور بافتنی از پنبه", category: "پوشاک", importDuty: 55, commercialProfit: 20, vat: 10, unit: "عدد" },

  // فصل ۶۴ - کفش
  { code: "64039900", description: "کفش با رویه چرمی سایر", category: "کفش و چرم", importDuty: 55, commercialProfit: 20, vat: 10, unit: "جفت" },
  { code: "64041100", description: "کفش ورزشی با رویه پارچه‌ای", category: "کفش و چرم", importDuty: 55, commercialProfit: 20, vat: 10, unit: "جفت" },

  // فصل ۶۹ - سرامیک
  { code: "69072200", description: "کاشی و سرامیک لعاب‌دار", category: "کاشی و سرامیک", importDuty: 40, commercialProfit: 15, vat: 10, unit: "مترمربع", permits: "استاندارد اجباری" },

  // فصل ۷۰ - شیشه
  { code: "70051000", description: "شیشه فلوت شفاف بدون کار روی سطح", category: "شیشه", importDuty: 26, commercialProfit: 10, vat: 10, unit: "کیلوگرم" },

  // فصل ۷۲ - آهن و فولاد
  { code: "72083900", description: "ورق فولادی گرم نوردیده ضخامت کمتر از ۳ میلی‌متر", category: "آهن و فولاد", importDuty: 15, commercialProfit: 5, vat: 10, unit: "کیلوگرم", permits: "احتمال عوارض ضد دامپینگ" },
  { code: "72091700", description: "ورق فولادی سرد نوردیده ضخامت ۰٫۵ تا ۱ میلی‌متر", category: "آهن و فولاد", importDuty: 15, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "72104900", description: "ورق فولادی گالوانیزه سایر", category: "آهن و فولاد", importDuty: 20, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "72131000", description: "میلگرد فولادی گرم نوردیده", category: "آهن و فولاد", importDuty: 20, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "72202000", description: "ورق فولاد زنگ‌نزن سرد نوردیده", category: "آهن و فولاد", importDuty: 15, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "73083000", description: "درب، پنجره و چارچوب از آهن یا فولاد", category: "آهن و فولاد", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // فصل ۷۴ - مس
  { code: "74031100", description: "کاتد مس تصفیه‌شده", category: "فلزات غیرآهنی", importDuty: 4, commercialProfit: 1, vat: 10, unit: "کیلوگرم" },
  { code: "74081100", description: "مفتول مس تصفیه‌شده قطر بیش از ۶ میلی‌متر", category: "فلزات غیرآهنی", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },

  // فصل ۷۶ - آلومینیوم
  { code: "76061290", description: "ورق آلومینیومی آلیاژی سایر", category: "فلزات غیرآهنی", importDuty: 15, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "76101000", description: "درب و پنجره آلومینیومی", category: "فلزات غیرآهنی", importDuty: 40, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // فصل ۸۴ - ماشین‌آلات
  { code: "84071000", description: "موتور هواپیمایی پیستونی", category: "ماشین‌آلات صنعتی", importDuty: 5, commercialProfit: 1, vat: 10, unit: "دستگاه" },
  { code: "84151090", description: "کولر پنجره‌ای و اسپلیت سایر", category: "ماشین‌آلات صنعتی", importDuty: 26, commercialProfit: 15, vat: 10, unit: "دستگاه", permits: "برچسب انرژی" },
  { code: "84181000", description: "یخچال-فریزر خانگی دو درب مستقل", category: "لوازم خانگی", importDuty: 55, commercialProfit: 20, vat: 10, unit: "دستگاه", permits: "برچسب انرژی ایران" },
  { code: "84185000", description: "یخچال ویترینی تجاری", category: "لوازم خانگی", importDuty: 26, commercialProfit: 15, vat: 10, unit: "دستگاه" },
  { code: "84501200", description: "ماشین لباسشویی نیمه‌اتوماتیک", category: "لوازم خانگی", importDuty: 55, commercialProfit: 20, vat: 10, unit: "دستگاه", permits: "برچسب انرژی" },
  { code: "84713020", description: "لپ‌تاپ با وزن کمتر از ۱۰ کیلوگرم", category: "الکترونیک", importDuty: 5, commercialProfit: 4, vat: 10, unit: "دستگاه" },
  { code: "84714110", description: "کامپیوتر شخصی رومیزی", category: "الکترونیک", importDuty: 15, commercialProfit: 5, vat: 10, unit: "دستگاه" },
  { code: "84717000", description: "واحد ذخیره‌سازی داده", category: "الکترونیک", importDuty: 5, commercialProfit: 4, vat: 10, unit: "دستگاه" },

  // فصل ۸۵ - الکترونیک
  { code: "85044090", description: "مبدل استاتیک سایر (اینورتر)", category: "الکترونیک", importDuty: 15, commercialProfit: 5, vat: 10, unit: "دستگاه" },
  { code: "85171210", description: "گوشی تلفن همراه با قیمت زیر ۶۰۰ دلار", category: "الکترونیک", importDuty: 5, commercialProfit: 4, vat: 10, unit: "دستگاه", permits: "ثبت IMEI الزامی" },
  { code: "85171220", description: "گوشی تلفن همراه با قیمت بالای ۶۰۰ دلار", category: "الکترونیک", importDuty: 12, commercialProfit: 10, vat: 10, unit: "دستگاه", permits: "ثبت IMEI الزامی" },
  { code: "85287200", description: "تلویزیون رنگی گیرنده رقومی", category: "لوازم خانگی", importDuty: 26, commercialProfit: 15, vat: 10, unit: "دستگاه", permits: "برچسب انرژی" },
  { code: "85299020", description: "قطعات و لوازم جانبی گیرنده‌های تلویزیونی", category: "الکترونیک", importDuty: 10, commercialProfit: 5, vat: 10, unit: "کیلوگرم" },
  { code: "85414090", description: "دیود، ترانزیستور، سلول خورشیدی سایر", category: "الکترونیک", importDuty: 5, commercialProfit: 4, vat: 10, unit: "کیلوگرم" },

  // فصل ۸۷ - وسایل نقلیه
  { code: "87032391", description: "خودرو سواری بنزینی حجم ۱۵۰۰ تا ۲۰۰۰ سی‌سی", category: "خودرو و قطعات", importDuty: 55, commercialProfit: 40, vat: 10, unit: "دستگاه", permits: "ممنوعیت واردات — سهمیه محدود" },
  { code: "87042100", description: "کامیونت با موتور دیزلی وزن ناخالص کمتر از ۵ تن", category: "خودرو و قطعات", importDuty: 32, commercialProfit: 20, vat: 10, unit: "دستگاه", permits: "استاندارد یورو ۵" },
  { code: "87082990", description: "سایر قطعات و لوازم بدنه خودرو", category: "خودرو و قطعات", importDuty: 26, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },
  { code: "87083010", description: "لنت ترمز خودروی سواری", category: "خودرو و قطعات", importDuty: 26, commercialProfit: 15, vat: 10, unit: "کیلوگرم", permits: "استاندارد اجباری" },
  { code: "87141010", description: "قطعات موتورسیکلت — تنه", category: "خودرو و قطعات", importDuty: 26, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // فصل ۹۰ - تجهیزات پزشکی
  { code: "90183990", description: "سایر سرنگ، سوزن، کاتتر و کانول", category: "تجهیزات پزشکی", importDuty: 5, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "مجوز اداره تجهیزات پزشکی" },
  { code: "90189090", description: "سایر آلات و ادوات مورد استفاده در پزشکی", category: "تجهیزات پزشکی", importDuty: 5, commercialProfit: 4, vat: 0, unit: "کیلوگرم", permits: "مجوز اداره تجهیزات پزشکی" },

  // فصل ۹۴ - مبلمان و روشنایی
  { code: "94036090", description: "سایر مبل‌های چوبی", category: "مبلمان و دکوراسیون", importDuty: 55, commercialProfit: 20, vat: 10, unit: "کیلوگرم" },
  { code: "94054090", description: "سایر چراغ‌ها و وسایل روشنایی الکتریکی", category: "مبلمان و دکوراسیون", importDuty: 32, commercialProfit: 15, vat: 10, unit: "کیلوگرم" },

  // مصالح ساختمانی
  { code: "25232900", description: "سیمان پرتلند (غیر از سفید)", category: "مصالح ساختمانی", importDuty: 4, commercialProfit: 1, vat: 10, unit: "کیلوگرم" },
  { code: "68091100", description: "صفحه و ورق گچی روکش‌دار با کاغذ", category: "مصالح ساختمانی", importDuty: 26, commercialProfit: 10, vat: 10, unit: "مترمربع" },

  // جواهرات
  { code: "71131910", description: "جواهرآلات از سایر فلزات گران‌بها", category: "جواهر و طلا", importDuty: 20, commercialProfit: 10, vat: 10, unit: "گرم", permits: "مجوز بانک مرکزی" },
];

export const hsCategories = Array.from(new Set(hsCodes.map((h) => h.category))).sort((a, b) => a.localeCompare(b, "fa"));
