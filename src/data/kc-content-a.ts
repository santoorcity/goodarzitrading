import type { EntryContent } from "./kc-content-types";

/** Sale of goods, transport, customs & transit, payment instruments. */
export const contentA: Record<string, EntryContent> = {
  cisg: {
    purpose: {
      en: "Provides a uniform substantive law for contracts of sale of goods between parties whose places of business are in different Contracting States, covering formation of the contract and the rights and obligations of buyer and seller.",
      fa: "قانون ماهوی یکنواخت برای قراردادهای بیع کالا میان طرفینی که محل تجارت آن‌ها در کشورهای عضو متفاوت است؛ شامل انعقاد قرارداد و حقوق و تعهدات خریدار و فروشنده.",
    },
    key: {
      en: [
        "Applies automatically when both parties are in Contracting States, unless the parties opt out (Art. 6).",
        "Offer and acceptance rules, including the effect of a late or modified acceptance (Arts. 14–24).",
        "Seller must deliver conforming goods and transfer documents; buyer must pay and take delivery (Arts. 30–60).",
        "Remedies: specific performance, price reduction, avoidance for fundamental breach, damages including lost profit (Arts. 45–52, 61–65, 74–77).",
        "Excludes validity of the contract, property transfer, and liability for death or personal injury (Arts. 4–5).",
      ],
      fa: [
        "در صورتی که هر دو طرف در کشورهای عضو باشند خودکار اعمال می‌شود، مگر طرفین آن را کنار بگذارند (ماده ۶).",
        "قواعد ایجاب و قبول، از جمله اثر قبول دیرهنگام یا اصلاح‌شده (مواد ۱۴ تا ۲۴).",
        "تعهد فروشنده به تحویل کالای منطبق و اسناد، و تعهد خریدار به پرداخت و قبض کالا (مواد ۳۰ تا ۶۰).",
        "ضمانت‌اجراها: الزام به اجرا، کاهش ثمن، فسخ در نقض اساسی و خسارت شامل عدم‌النفع (مواد ۴۵ تا ۵۲، ۶۱ تا ۶۵، ۷۴ تا ۷۷).",
        "اعتبار قرارداد، انتقال مالکیت و مسئولیت ناشی از فوت یا صدمه بدنی را دربر نمی‌گیرد (مواد ۴ و ۵).",
      ],
    },
    iran: {
      en: "Iran is not a Contracting State to the CISG. Iranian exporters and importers may nevertheless incorporate the CISG contractually as the governing law of the contract, and it applies where the contract is governed by the law of a Contracting State.",
      fa: "ایران عضو کنوانسیون بیع بین‌المللی کالا نیست. با این حال صادرکنندگان و واردکنندگان ایرانی می‌توانند آن را به‌صورت قراردادی به‌عنوان قانون حاکم انتخاب کنند و در صورتی که قانون حاکم، قانون یک کشور عضو باشد نیز اعمال می‌شود.",
    },
    status: { en: "In force since 1 January 1988; adopted by more than 95 States.", fa: "از اول ژانویه ۱۹۸۸ لازم‌الاجراست و بیش از ۹۵ کشور به آن پیوسته‌اند." },
  },
  "convention-on-the-limitation-period-in-the-international-sale-of-goods": {
    purpose: {
      en: "Establishes a uniform limitation (prescription) period for claims arising from an international sale of goods contract, preventing conflicting national time bars.",
      fa: "دوره مرور زمان یکنواخت برای دعاوی ناشی از قرارداد بیع بین‌المللی کالا تعیین می‌کند تا از تعارض مهلت‌های ملی جلوگیری شود.",
    },
    key: {
      en: [
        "General limitation period of four years from the date the claim accrues.",
        "Claims for breach accrue on the date of the breach; claims for defects accrue on handing over the goods.",
        "The period may be interrupted by judicial or arbitral proceedings, or acknowledgment of the debt.",
        "An overall cap of ten years applies regardless of interruption.",
      ],
      fa: [
        "مهلت عمومی چهار سال از تاریخ ایجاد حق مطالبه.",
        "دعوای نقض از تاریخ نقض و دعوای عیب از تاریخ تحویل کالا آغاز می‌شود.",
        "طرح دعوا در دادگاه یا داوری و نیز اقرار به دین موجب قطع مرور زمان می‌شود.",
        "سقف کلی ده سال بدون توجه به موارد قطع اعمال می‌گردد.",
      ],
    },
    iran: {
      en: "Iran is not a party. Where an Iranian contract is subject to a foreign governing law, that law's limitation rules — potentially this Convention — will decide the time bar.",
      fa: "ایران عضو نیست. اگر قانون حاکم بر قرارداد ایرانی، قانون خارجی باشد، قواعد مرور زمان آن قانون — و احتمالاً همین کنوانسیون — تعیین‌کننده است.",
    },
    status: { en: "In force since 1988 (as amended by the 1980 Protocol).", fa: "از سال ۱۹۸۸ (با اصلاحات پروتکل ۱۹۸۰) لازم‌الاجراست." },
  },

  "hague-rules": {
    purpose: {
      en: "The first international regime standardising the carrier's minimum duties and maximum liability under a bill of lading in the carriage of goods by sea.",
      fa: "نخستین نظام بین‌المللی که حداقل وظایف و حداکثر مسئولیت متصدی حمل دریایی تحت بارنامه را یکسان کرد.",
    },
    key: {
      en: [
        "Carrier must exercise due diligence to make the ship seaworthy and properly man, equip and supply her.",
        "Carrier must properly load, handle, stow, carry, keep, care for and discharge the goods.",
        "Seventeen exceptions to liability, including nautical fault, fire and perils of the sea.",
        "Package limitation of GBP 100 gold value per package or unit unless a higher value is declared.",
        "One-year time bar for claims from delivery of the goods.",
      ],
      fa: [
        "متصدی باید با مراقبت متعارف کشتی را قابل دریانوردی و مجهز و دارای خدمه کند.",
        "بارگیری، جابه‌جایی، چیدمان، حمل، نگهداری و تخلیه صحیح کالا بر عهده متصدی است.",
        "هفده مورد معافیت از مسئولیت، از جمله خطای دریانوردی، آتش‌سوزی و مخاطرات دریا.",
        "محدودیت مسئولیت ۱۰۰ پوند طلا برای هر بسته، مگر ارزش بالاتری اظهار شود.",
        "مرور زمان یک‌ساله از تاریخ تحویل کالا.",
      ],
    },
    iran: {
      en: "Iran's Maritime Code of 1964 is largely modelled on the Hague Rules, so their structure is familiar to Iranian courts and carriers.",
      fa: "قانون دریایی ایران مصوب ۱۳۴۳ عمدتاً بر پایه مقررات لاهه تنظیم شده و ساختار آن برای دادگاه‌ها و متصدیان ایرانی آشناست.",
    },
    status: { en: "In force since 1931; still applied by many States and incorporated in bills of lading by paramount clause.", fa: "از ۱۹۳۱ لازم‌الاجراست و هنوز در بسیاری کشورها و از طریق شرط برتر در بارنامه‌ها اعمال می‌شود." },
  },
  "hague-visby-rules": {
    purpose: {
      en: "Modernises the Hague Rules by raising liability limits and clarifying the evidentiary value of the bill of lading.",
      fa: "مقررات لاهه را با افزایش سقف مسئولیت و روشن کردن ارزش اثباتی بارنامه نوسازی می‌کند.",
    },
    key: {
      en: [
        "Limitation of 666.67 SDR per package or 2 SDR per kilogram, whichever is higher.",
        "Container clause: the number of packages listed in the bill of lading determines the limitation units.",
        "Bill of lading is conclusive evidence in the hands of a good-faith third-party holder.",
        "Loss of the right to limit in case of intentional or reckless conduct.",
      ],
      fa: [
        "سقف مسئولیت ۶۶۶٫۶۷ حق برداشت ویژه برای هر بسته یا ۲ حق برداشت ویژه برای هر کیلوگرم، هرکدام بیشتر.",
        "شرط کانتینر: تعداد بسته‌های مندرج در بارنامه مبنای محاسبه واحدهای محدودیت است.",
        "بارنامه در دست دارنده ثالث با حسن‌نیت دلیل قطعی محسوب می‌شود.",
        "در صورت رفتار عمدی یا بی‌پروا، حق استناد به محدودیت از بین می‌رود.",
      ],
    },
    iran: {
      en: "Not ratified by Iran, but frequently incorporated contractually through paramount clauses in bills of lading used on Iranian trades.",
      fa: "ایران تصویب نکرده است، اما از طریق شرط برتر در بارنامه‌های مورد استفاده در خطوط ایران به‌صورت قراردادی اعمال می‌شود.",
    },
    status: { en: "In force since 1977; SDR Protocol 1979 in force since 1984.", fa: "از ۱۹۷۷ و پروتکل SDR از ۱۹۸۴ لازم‌الاجراست." },
  },
  "hamburg-rules": {
    purpose: {
      en: "A shipper-friendly regime replacing the Hague framework, extending the carrier's period of responsibility and abolishing the nautical fault defence.",
      fa: "نظامی به سود فرستنده که چارچوب لاهه را جایگزین می‌کند، دوره مسئولیت متصدی را گسترش می‌دهد و دفاع خطای دریانوردی را حذف می‌کند.",
    },
    key: {
      en: [
        "Carrier liable for loss, damage or delay while the goods are in its charge at the port of loading, during carriage and at the port of discharge.",
        "Liability based on presumed fault; nautical fault exception removed.",
        "Limits of 835 SDR per package or 2.5 SDR per kilogram; delay capped at 2.5 times the freight.",
        "Two-year time bar for claims.",
      ],
      fa: [
        "مسئولیت متصدی نسبت به فقدان، خسارت یا تأخیر در تمام مدتی که کالا در اختیار اوست — بندر بارگیری، حین حمل و بندر تخلیه.",
        "مسئولیت بر پایه تقصیر مفروض؛ معافیت خطای دریانوردی حذف شده است.",
        "سقف ۸۳۵ حق برداشت ویژه برای هر بسته یا ۲٫۵ برای هر کیلوگرم؛ خسارت تأخیر تا ۲٫۵ برابر کرایه.",
        "مرور زمان دو ساله برای اقامه دعوا.",
      ],
    },
    iran: {
      en: "Iran signed and ratified the Hamburg Rules, which are therefore of direct practical relevance for carriage to and from Iranian ports where the Convention's conditions of application are met.",
      fa: "ایران مقررات هامبورگ را امضا و تصویب کرده است؛ بنابراین در حمل از و به بنادر ایران، در صورت تحقق شرایط اعمال کنوانسیون، اهمیت عملی مستقیم دارد.",
    },
    status: { en: "In force since 1 November 1992.", fa: "از اول نوامبر ۱۹۹۲ لازم‌الاجراست." },
  },
  "rotterdam-rules": {
    purpose: {
      en: "A modern door-to-door regime for contracts of carriage wholly or partly by sea, designed to accommodate containerisation and electronic transport records.",
      fa: "نظامی نوین درب‌به‌درب برای قراردادهای حمل که تمام یا بخشی از آن دریایی است؛ متناسب با کانتینری شدن و اسناد الکترونیکی حمل.",
    },
    key: {
      en: [
        "Covers multimodal carriage with a sea leg (door-to-door), not just port-to-port.",
        "Recognises electronic transport records on a par with paper bills of lading.",
        "Liability limits of 875 SDR per package or 3 SDR per kilogram.",
        "Detailed rules on the right of control, delivery without a document and volume contracts.",
      ],
      fa: [
        "حمل چندوجهی با یک مرحله دریایی (درب‌به‌درب) را دربر می‌گیرد، نه فقط بندر تا بندر.",
        "اسناد الکترونیکی حمل را هم‌ارز بارنامه کاغذی می‌شناسد.",
        "سقف مسئولیت ۸۷۵ حق برداشت ویژه برای هر بسته یا ۳ برای هر کیلوگرم.",
        "قواعد تفصیلی درباره حق کنترل، تحویل بدون سند و قراردادهای حجمی.",
      ],
    },
    iran: { en: "Not ratified by Iran; the Convention is not yet in force internationally, so it matters mainly as a drafting reference.", fa: "ایران تصویب نکرده و کنوانسیون هنوز در سطح بین‌المللی لازم‌الاجرا نشده است؛ بیشتر به‌عنوان مرجع تنظیم قرارداد اهمیت دارد." },
    status: { en: "Adopted 2008; awaiting the required number of ratifications.", fa: "در سال ۲۰۰۸ تصویب شد و در انتظار تعداد لازم الحاق است." },
  },
  "un-convention-on-liability-of-operators-of-transport-terminals": {
    purpose: {
      en: "Harmonises the liability of terminal operators for goods in their custody in the course of international carriage, filling the gap between successive carriers.",
      fa: "مسئولیت متصدیان ترمینال نسبت به کالای تحت نگهداری آنان در جریان حمل بین‌المللی را یکسان می‌کند و خلأ میان متصدیان متوالی را پر می‌نماید.",
    },
    key: {
      en: [
        "Operator is liable for loss, damage or delay while the goods are in its charge unless it proves it took all reasonable measures.",
        "Limitation of 8.33 SDR per kilogram of gross weight.",
        "Provides for a security right (lien) over the goods for charges due.",
        "Two-year limitation period.",
      ],
      fa: [
        "متصدی ترمینال مسئول فقدان، خسارت یا تأخیر در مدت نگهداری است مگر ثابت کند تمام اقدامات متعارف را انجام داده است.",
        "سقف مسئولیت ۸٫۳۳ حق برداشت ویژه برای هر کیلوگرم وزن ناخالص.",
        "حق حبس و وثیقه بر کالا بابت هزینه‌های پرداخت‌نشده پیش‌بینی شده است.",
        "مهلت اقامه دعوا دو سال است.",
      ],
    },
    iran: { en: "Not in force internationally; Iranian terminal liability is governed by domestic port regulations and the terminal's contractual terms.", fa: "در سطح بین‌المللی لازم‌الاجرا نیست؛ مسئولیت ترمینال در ایران تابع مقررات بندری و شرایط قراردادی ترمینال است." },
    status: { en: "Adopted 1991; not yet in force.", fa: "مصوب ۱۹۹۱؛ هنوز لازم‌الاجرا نشده است." },
  },

  "cmr-convention": {
    purpose: {
      en: "Governs the contract for the international carriage of goods by road, including the CMR consignment note, carrier liability and claims.",
      fa: "قرارداد حمل بین‌المللی کالا از راه جاده، شامل بارنامه CMR، مسئولیت متصدی و نحوه طرح دعوا را تنظیم می‌کند.",
    },
    key: {
      en: [
        "Applies when the place of taking over and the place of delivery are in two different countries and at least one is a Contracting State.",
        "CMR consignment note is prima facie evidence of the contract and of receipt of the goods.",
        "Carrier liable from taking over to delivery, with defined exonerations (inherent vice, defective packing, act of the claimant).",
        "Liability limit of 8.33 SDR per kilogram of gross weight; delay damages capped at the carriage charges.",
        "One-year time bar, extended to three years in case of wilful misconduct.",
      ],
      fa: [
        "زمانی اعمال می‌شود که محل تحویل گرفتن و محل تحویل دادن در دو کشور متفاوت و دست‌کم یکی عضو باشد.",
        "بارنامه CMR دلیل ظاهری قرارداد و دریافت کالاست.",
        "متصدی از زمان تحویل گرفتن تا تحویل دادن مسئول است، با معافیت‌های مشخص (عیب ذاتی، بسته‌بندی معیوب، فعل مدعی).",
        "سقف مسئولیت ۸٫۳۳ حق برداشت ویژه برای هر کیلوگرم وزن ناخالص؛ خسارت تأخیر تا میزان کرایه.",
        "مرور زمان یک سال و در صورت تقصیر عمدی سه سال.",
      ],
    },
    iran: {
      en: "Iran is a Contracting Party to the CMR Convention; Iranian road hauliers issue CMR consignment notes for international trucking to Turkey, the Caucasus, Central Asia and Europe.",
      fa: "ایران عضو کنوانسیون CMR است و شرکت‌های حمل جاده‌ای ایرانی برای حمل بین‌المللی به ترکیه، قفقاز، آسیای میانه و اروپا بارنامه CMR صادر می‌کنند.",
    },
    status: { en: "In force since 1961; widely ratified across Europe, the CIS and the Middle East.", fa: "از ۱۹۶۱ لازم‌الاجراست و در اروپا، کشورهای مشترک‌المنافع و خاورمیانه به‌طور گسترده پذیرفته شده است." },
  },
  "e-cmr-additional-protocol-2008": {
    purpose: {
      en: "Allows the CMR consignment note to be issued and signed electronically with the same legal effect as the paper note.",
      fa: "امکان صدور و امضای الکترونیکی بارنامه CMR با همان اثر حقوقی نسخه کاغذی را فراهم می‌کند.",
    },
    key: {
      en: [
        "Electronic consignment note has the same evidential value as the paper CMR note.",
        "Requires a reliable method to identify the signatory and protect data integrity.",
        "The parties must agree on procedures for issuing, amending and completing the e-CMR.",
      ],
      fa: [
        "بارنامه الکترونیکی همان ارزش اثباتی نسخه کاغذی CMR را دارد.",
        "روشی مطمئن برای شناسایی امضاکننده و حفظ یکپارچگی داده لازم است.",
        "طرفین باید بر رویه صدور، اصلاح و تکمیل e-CMR توافق کنند.",
      ],
    },
    iran: { en: "Adoption of the e-CMR Protocol expands paperless corridors; Iranian operators should confirm acceptance by each transit country on the route.", fa: "پذیرش پروتکل e-CMR کریدورهای بدون کاغذ را گسترش می‌دهد؛ متصدیان ایرانی باید پذیرش آن را در هر کشور مسیر بررسی کنند." },
    status: { en: "In force since 2011; adopted by a growing number of European and Asian States.", fa: "از ۲۰۱۱ لازم‌الاجراست و شمار کشورهای اروپایی و آسیایی عضو رو به افزایش است." },
  },

  cotif: {
    purpose: {
      en: "The framework convention establishing OTIF and the uniform legal regime for international rail transport, with CIM (goods) and CIV (passengers) as appendices.",
      fa: "کنوانسیون چارچوبی که سازمان OTIF و نظام حقوقی یکنواخت حمل ریلی بین‌المللی را ایجاد می‌کند و ضمائم CIM (کالا) و CIV (مسافر) را دربر دارد.",
    },
    key: {
      en: [
        "Establishes OTIF and its institutional rules.",
        "Appendices cover carriage of goods (CIM), passengers (CIV), dangerous goods (RID), and use of wagons and infrastructure.",
        "Provides a single legal basis for through rail traffic across member States.",
      ],
      fa: [
        "سازمان OTIF و قواعد نهادی آن را تأسیس می‌کند.",
        "ضمائم آن حمل کالا (CIM)، مسافر (CIV)، کالای خطرناک (RID) و استفاده از واگن و زیرساخت را پوشش می‌دهد.",
        "مبنای حقوقی واحدی برای ترافیک ریلی سراسری میان کشورهای عضو فراهم می‌کند.",
      ],
    },
    iran: { en: "Iran is a member State of OTIF, which supports rail corridors towards Turkey and Europe alongside the SMGS regime used with CIS countries.", fa: "ایران عضو OTIF است؛ این عضویت در کنار نظام SMGS که با کشورهای مشترک‌المنافع به‌کار می‌رود، از کریدورهای ریلی به سمت ترکیه و اروپا پشتیبانی می‌کند." },
    status: { en: "COTIF 1980 as amended by the Vilnius Protocol 1999, in force since 2006.", fa: "کوتیف ۱۹۸۰ با اصلاحات پروتکل ویلنیوس ۱۹۹۹، لازم‌الاجرا از ۲۰۰۶." },
  },
  "cim-uniform-rules": {
    purpose: {
      en: "Uniform rules for the contract of international carriage of goods by rail, including the CIM consignment note and carrier liability.",
      fa: "قواعد یکنواخت قرارداد حمل بین‌المللی کالا از راه آهن، شامل بارنامه CIM و مسئولیت متصدی.",
    },
    key: {
      en: [
        "CIM consignment note evidences the contract; a common CIM/SMGS note exists for traffic between the two legal regimes.",
        "Carrier strictly liable for loss, damage and exceeding transit time, subject to listed exonerations.",
        "Limit of 17 SDR per kilogram of missing gross mass; delay compensation up to four times the carriage charge.",
        "Claims must be made to the carrier; a one-year (or two-year in case of intent) time bar applies.",
      ],
      fa: [
        "بارنامه CIM دلیل قرارداد است؛ برای ترافیک میان دو نظام حقوقی، بارنامه مشترک CIM/SMGS وجود دارد.",
        "مسئولیت متصدی نسبت به فقدان، خسارت و تجاوز از زمان حمل، با معافیت‌های احصاشده.",
        "سقف ۱۷ حق برداشت ویژه برای هر کیلوگرم وزن ناخالص کسری؛ خسارت تأخیر تا چهار برابر کرایه.",
        "مطالبه باید به متصدی ارائه شود و مرور زمان یک سال (و در صورت عمد دو سال) است.",
      ],
    },
    iran: { en: "Relevant to Iranian rail exports via the Razi/Kapikoy corridor to Turkey and Europe, where CIM or CIM/SMGS notes are used.", fa: "برای صادرات ریلی ایران از کریدور رازی/کاپیکوی به ترکیه و اروپا کاربرد دارد و بارنامه CIM یا CIM/SMGS استفاده می‌شود." },
    status: { en: "In force as Appendix B to COTIF.", fa: "به‌عنوان ضمیمه B کوتیف لازم‌الاجراست." },
  },
  "civ-uniform-rules": {
    purpose: {
      en: "Uniform rules for the international carriage of passengers and their luggage by rail.",
      fa: "قواعد یکنواخت حمل بین‌المللی مسافر و توشه او از راه آهن.",
    },
    key: {
      en: [
        "Ticket and luggage registration constitute the contract of carriage.",
        "Carrier liability for death, injury, delay, cancellation and missed connections.",
        "Specific limits and compensation rules for registered luggage and vehicles.",
      ],
      fa: [
        "بلیت و ثبت توشه، قرارداد حمل را تشکیل می‌دهد.",
        "مسئولیت متصدی در قبال فوت، صدمه، تأخیر، لغو و از دست رفتن ارتباط قطارها.",
        "سقف‌ها و قواعد جبران مشخص برای توشه ثبت‌شده و وسایل نقلیه.",
      ],
    },
    iran: { en: "Applies to international passenger rail services operated between Iran and neighbouring OTIF member States.", fa: "در خدمات ریلی مسافری بین‌المللی میان ایران و کشورهای همسایه عضو OTIF کاربرد دارد." },
    status: { en: "In force as Appendix A to COTIF.", fa: "به‌عنوان ضمیمه A کوتیف لازم‌الاجراست." },
  },

  "warsaw-convention": {
    purpose: {
      en: "The original regime unifying rules on international carriage by air, including the air waybill and limits of carrier liability.",
      fa: "نخستین نظام یکسان‌سازی قواعد حمل هوایی بین‌المللی، شامل بارنامه هوایی و سقف مسئولیت متصدی.",
    },
    key: {
      en: [
        "Air waybill required in three originals; particulars determine the carrier's ability to rely on limits.",
        "Presumed fault liability with a due-diligence defence.",
        "Cargo limitation of 250 gold francs per kilogram unless a special declaration of value is made.",
        "Written complaint deadlines and a two-year limitation period.",
      ],
      fa: [
        "بارنامه هوایی در سه نسخه اصل؛ مندرجات آن در امکان استناد متصدی به سقف مسئولیت مؤثر است.",
        "مسئولیت مبتنی بر تقصیر مفروض با امکان دفاع مراقبت متعارف.",
        "سقف ۲۵۰ فرانک طلا برای هر کیلوگرم بار، مگر اظهار ارزش ویژه شود.",
        "مهلت اعتراض کتبی و مرور زمان دو ساله.",
      ],
    },
    iran: { en: "Iran is a party to the Warsaw system; for carriage between States that are both parties to Montreal 1999, that later convention prevails.", fa: "ایران عضو نظام ورشو است؛ در حملی که هر دو کشور عضو کنوانسیون مونترال ۱۹۹۹ باشند، کنوانسیون مؤخر حاکم است." },
    status: { en: "In force since 1933, as amended by The Hague Protocol 1955 and Montreal Protocols.", fa: "از ۱۹۳۳ لازم‌الاجراست و با پروتکل لاهه ۱۹۵۵ و پروتکل‌های مونترال اصلاح شده است." },
  },
  "montreal-convention-1999": {
    purpose: {
      en: "Modernises and consolidates the Warsaw system for international carriage by air of passengers, baggage and cargo.",
      fa: "نظام ورشو را برای حمل هوایی بین‌المللی مسافر، توشه و بار نوسازی و یکپارچه می‌کند.",
    },
    key: {
      en: [
        "Cargo liability limit of 22 SDR per kilogram (reviewed every five years), effectively unbreakable.",
        "Strict liability for cargo subject to limited defences (inherent defect, defective packing, act of public authority, war).",
        "Recognises electronic air waybills and other records of carriage.",
        "Fifth jurisdiction and two-year limitation period for actions.",
      ],
      fa: [
        "سقف مسئولیت بار ۲۲ حق برداشت ویژه برای هر کیلوگرم (هر پنج سال بازنگری می‌شود) و عملاً غیرقابل نقض.",
        "مسئولیت محض نسبت به بار با دفاع‌های محدود (عیب ذاتی، بسته‌بندی معیوب، اقدام مقام عمومی، جنگ).",
        "بارنامه هوایی الکترونیکی و سایر سوابق حمل را می‌پذیرد.",
        "صلاحیت پنجم و مرور زمان دو ساله برای اقامه دعوا.",
      ],
    },
    iran: { en: "Applies to Iranian air cargo where both origin and destination States are parties; airlines contract on Montreal terms in their conditions of carriage.", fa: "در حمل هوایی ایران، در صورتی که کشور مبدأ و مقصد هر دو عضو باشند اعمال می‌شود و شرکت‌های هواپیمایی در شرایط حمل خود به آن استناد می‌کنند." },
    status: { en: "In force since 4 November 2003; ratified by more than 130 States.", fa: "از ۴ نوامبر ۲۰۰۳ لازم‌الاجراست و بیش از ۱۳۰ کشور آن را تصویب کرده‌اند." },
  },

  "un-convention-on-international-multimodal-transport-of-goods-1980": {
    purpose: {
      en: "Creates a single liability regime for the multimodal transport operator (MTO) issuing one document for a door-to-door journey using at least two modes.",
      fa: "نظام مسئولیت واحدی برای متصدی حمل چندوجهی که با یک سند، سفر درب‌به‌درب با حداقل دو شیوه حمل را انجام می‌دهد ایجاد می‌کند.",
    },
    key: {
      en: [
        "Defines the multimodal transport document and the MTO's responsibility for the whole journey.",
        "Uniform liability from taking charge to delivery, based on presumed fault.",
        "Limits of 920 SDR per package or 2.75 SDR per kilogram, whichever is higher.",
        "Two-year limitation period for claims.",
      ],
      fa: [
        "سند حمل چندوجهی و مسئولیت متصدی نسبت به کل سفر را تعریف می‌کند.",
        "مسئولیت یکنواخت از تحویل گرفتن تا تحویل دادن، بر پایه تقصیر مفروض.",
        "سقف ۹۲۰ حق برداشت ویژه برای هر بسته یا ۲٫۷۵ برای هر کیلوگرم، هرکدام بیشتر.",
        "مرور زمان دو ساله برای دعاوی.",
      ],
    },
    iran: { en: "Not in force internationally. In practice Iranian multimodal shipments rely on FIATA FBL documents and the UNCTAD/ICC Rules for Multimodal Transport Documents.", fa: "در سطح بین‌المللی لازم‌الاجرا نشده است. در عمل حمل چندوجهی ایران بر اسناد FIATA FBL و قواعد آنکتاد/ICC برای اسناد حمل چندوجهی تکیه دارد." },
    status: { en: "Adopted 1980; not yet in force.", fa: "مصوب ۱۹۸۰؛ هنوز لازم‌الاجرا نشده است." },
  },

  "tir-convention-1975": {
    purpose: {
      en: "Enables sealed road vehicles and containers to cross multiple countries with customs duties and taxes suspended, under an internationally guaranteed TIR Carnet.",
      fa: "امکان عبور وسایل نقلیه و کانتینرهای پلمب‌شده از چند کشور با تعلیق حقوق و عوارض گمرکی، تحت پوشش کارنه تیر با تضمین بین‌المللی را فراهم می‌کند.",
    },
    key: {
      en: [
        "Goods travel in customs-sealed vehicles or containers approved for transport under customs seal.",
        "The TIR Carnet is the customs declaration, transit document and proof of the international guarantee.",
        "Duties and taxes at risk are covered by an international guarantee chain (IRU) up to an agreed ceiling.",
        "Controls at intermediate borders are limited to seal inspection, dramatically reducing transit time.",
        "eTIR provides for electronic exchange of TIR data between customs administrations.",
      ],
      fa: [
        "کالا در وسایل نقلیه یا کانتینرهای پلمب گمرکی تأییدشده حمل می‌شود.",
        "کارنه تیر همزمان اظهارنامه گمرکی، سند ترانزیت و مدرک تضمین بین‌المللی است.",
        "حقوق و عوارض در معرض خطر از طریق زنجیره تضمین بین‌المللی (IRU) تا سقف توافق‌شده پوشش داده می‌شود.",
        "کنترل در مرزهای میانی به بازرسی پلمب محدود می‌شود و زمان ترانزیت را به‌شدت کاهش می‌دهد.",
        "سامانه eTIR تبادل الکترونیکی داده‌های تیر میان گمرکات را ممکن می‌سازد.",
      ],
    },
    iran: {
      en: "Iran is a long-standing Contracting Party. TIR Carnets are issued in Iran through the national guaranteeing association affiliated to the IRU, and TIR is central to Iran's road transit corridors (Turkey, Iraq, Central Asia, Caucasus).",
      fa: "ایران از دیرباز عضو این کنوانسیون است. کارنه تیر در ایران از طریق انجمن ضامن ملی وابسته به IRU صادر می‌شود و تیر نقش محوری در کریدورهای ترانزیت جاده‌ای ایران (ترکیه، عراق، آسیای میانه، قفقاز) دارد.",
    },
    status: { en: "In force since 1978; more than 75 Contracting Parties.", fa: "از ۱۹۷۸ لازم‌الاجراست و بیش از ۷۵ کشور عضو دارد." },
  },
  "ata-convention---ata-carnet": {
    purpose: {
      en: "Allows temporary admission of goods — exhibition items, professional equipment, commercial samples — free of duties and taxes under an ATA Carnet.",
      fa: "امکان ورود موقت کالا — اقلام نمایشگاهی، تجهیزات حرفه‌ای و نمونه‌های تجاری — بدون پرداخت حقوق و عوارض با کارنه ATA را فراهم می‌کند.",
    },
    key: {
      en: [
        "The ATA Carnet replaces national customs declarations and security for temporary admission.",
        "Valid for up to one year and usable in multiple member countries on one document.",
        "Backed by a national guaranteeing chain coordinated by the ICC World Chambers Federation.",
        "Goods must be re-exported in the same state; otherwise duties become payable.",
      ],
      fa: [
        "کارنه ATA جایگزین اظهارنامه‌های ملی و تضمین ورود موقت می‌شود.",
        "تا یک سال اعتبار دارد و با یک سند در چند کشور عضو قابل استفاده است.",
        "زنجیره ضامن ملی زیر نظر فدراسیون جهانی اتاق‌های بازرگانی ICC آن را تضمین می‌کند.",
        "کالا باید به همان وضعیت صادر مجدد شود، در غیر این صورت حقوق ورودی مطالبه می‌گردد.",
      ],
    },
    iran: { en: "The Iran Chamber of Commerce, Industries, Mines and Agriculture issues and guarantees ATA Carnets, which Iranian firms use for trade fairs abroad.", fa: "اتاق بازرگانی، صنایع، معادن و کشاورزی ایران کارنه ATA را صادر و تضمین می‌کند و شرکت‌های ایرانی از آن برای حضور در نمایشگاه‌های خارجی استفاده می‌کنند." },
    status: { en: "In force since 1963; complemented by the Istanbul Convention.", fa: "از ۱۹۶۳ لازم‌الاجراست و کنوانسیون استانبول مکمل آن است." },
  },
  "istanbul-convention-on-temporary-admission": {
    purpose: {
      en: "Consolidates the many temporary admission conventions into one instrument with a single core text and subject-specific annexes.",
      fa: "کنوانسیون‌های متعدد ورود موقت را در یک سند با متن اصلی واحد و ضمائم موضوعی گرد می‌آورد.",
    },
    key: {
      en: [
        "Core text sets general conditions for temporary admission with total or partial relief from duties.",
        "Annexes cover exhibition goods, professional equipment, containers, pallets, means of transport, scientific and medical equipment.",
        "Accepts the ATA and CPD carnets as customs documents and security.",
      ],
      fa: [
        "متن اصلی شرایط عمومی ورود موقت با معافیت کامل یا جزئی از حقوق ورودی را تعیین می‌کند.",
        "ضمائم آن کالای نمایشگاهی، تجهیزات حرفه‌ای، کانتینر، پالت، وسایل حمل و تجهیزات علمی و پزشکی را پوشش می‌دهد.",
        "کارنه‌های ATA و CPD را به‌عنوان سند گمرکی و تضمین می‌پذیرد.",
      ],
    },
    iran: { en: "Temporary admission in Iran is operated by the Customs Administration (IRICA) under the Customs Act and its executive regulation, in line with ATA carnet practice.", fa: "ورود موقت در ایران توسط گمرک ایران بر پایه قانون امور گمرکی و آیین‌نامه اجرایی آن و هماهنگ با رویه کارنه ATA انجام می‌شود." },
    status: { en: "In force since 1993, administered by the World Customs Organization.", fa: "از ۱۹۹۳ لازم‌الاجراست و سازمان جهانی گمرک آن را اداره می‌کند." },
  },
  "revised-kyoto-convention": {
    purpose: {
      en: "The WCO blueprint for simplified and harmonised customs procedures, promoting predictable, transparent and modern border management.",
      fa: "نقشه راه سازمان جهانی گمرک برای ساده‌سازی و هماهنگ‌سازی رویه‌های گمرکی و مدیریت مرزی شفاف، پیش‌بینی‌پذیر و نوین.",
    },
    key: {
      en: [
        "General Annex standards are binding on all Contracting Parties: clearance procedures, duties and taxes, guarantees, customs control, appeals.",
        "Risk management and post-clearance audit replace systematic physical inspection.",
        "Maximum use of information technology and pre-arrival lodgement of declarations.",
        "Special procedures for authorised persons with a good compliance record.",
      ],
      fa: [
        "استانداردهای ضمیمه عمومی برای همه اعضا الزامی است: رویه ترخیص، حقوق و عوارض، تضامین، کنترل گمرکی و اعتراض.",
        "مدیریت ریسک و حسابرسی پس از ترخیص جایگزین بازرسی فیزیکی سیستماتیک می‌شود.",
        "بیشترین بهره‌گیری از فناوری اطلاعات و اظهار پیش از ورود کالا.",
        "رویه‌های ویژه برای اشخاص مجاز با سابقه تطبیق مطلوب.",
      ],
    },
    iran: { en: "Iran's customs modernisation — the EPL/comprehensive customs system, risk management and the Single Window (NTSW) — follows the RKC model.", fa: "نوسازی گمرک ایران — سامانه جامع امور گمرکی، مدیریت ریسک و پنجره واحد تجارت فرامرزی — بر الگوی این کنوانسیون استوار است." },
    status: { en: "Revised text in force since 3 February 2006.", fa: "متن بازنگری‌شده از ۳ فوریه ۲۰۰۶ لازم‌الاجراست." },
  },
  "harmonized-system-convention": {
    purpose: {
      en: "Establishes the Harmonized Commodity Description and Coding System (HS), the universal nomenclature for classifying traded goods.",
      fa: "سامانه هماهنگ توصیف و کدگذاری کالا (HS) را به‌عنوان نظام جهانی طبقه‌بندی کالاهای تجاری ایجاد می‌کند.",
    },
    key: {
      en: [
        "Six-digit HS codes are uniform worldwide; countries add national digits (Iran uses eight digits).",
        "Classification follows the six General Rules for the Interpretation of the HS.",
        "Reviewed by the WCO approximately every five years (HS 2022 is the current edition).",
        "The HS code drives duty rates, prohibitions, licensing, origin rules and trade statistics.",
      ],
      fa: [
        "کدهای شش‌رقمی HS در سراسر جهان یکسان است و کشورها ارقام ملی اضافه می‌کنند (ایران هشت‌رقمی).",
        "طبقه‌بندی بر پایه شش قاعده عمومی تفسیر HS انجام می‌شود.",
        "سازمان جهانی گمرک تقریباً هر پنج سال آن را بازنگری می‌کند (نسخه جاری HS 2022).",
        "کد HS تعیین‌کننده نرخ حقوق ورودی، ممنوعیت‌ها، مجوزها، قواعد مبدأ و آمار تجاری است.",
      ],
    },
    iran: { en: "Iran applies the HS through its national tariff book; our HS Code / Trade Services tool lets you look up Iranian tariff lines and duty components.", fa: "ایران HS را در کتاب مقررات صادرات و واردات اعمال می‌کند؛ ابزار «خدمات تجاری / کد HS» ما امکان جست‌وجوی ردیف تعرفه و اجزای حقوق ورودی را می‌دهد." },
    status: { en: "In force since 1 January 1988; more than 160 Contracting Parties.", fa: "از اول ژانویه ۱۹۸۸ لازم‌الاجراست و بیش از ۱۶۰ کشور عضو دارد." },
  },
  "wto-customs-valuation-agreement": {
    purpose: {
      en: "Sets a fair, uniform and neutral system for determining the customs value of imported goods, based primarily on the transaction value.",
      fa: "نظامی منصفانه، یکنواخت و بی‌طرف برای تعیین ارزش گمرکی کالای وارداتی، عمدتاً بر پایه ارزش معامله، تعیین می‌کند.",
    },
    key: {
      en: [
        "Primary method: the price actually paid or payable for the goods when sold for export, adjusted per Article 8.",
        "Five fallback methods in sequence: identical goods, similar goods, deductive, computed, fallback.",
        "Prohibits arbitrary or fictitious values and minimum-price systems.",
        "Importers have the right to a written explanation and to appeal a valuation decision.",
      ],
      fa: [
        "روش اصلی: قیمت پرداخت‌شده یا قابل پرداخت برای کالا در فروش صادراتی، با تعدیلات ماده ۸.",
        "پنج روش جایگزین به ترتیب: کالای مشابه یکسان، کالای مشابه، تفریقی، محاسباتی و روش نهایی.",
        "ارزش‌گذاری دلبخواه یا ساختگی و نظام حداقل قیمت ممنوع است.",
        "واردکننده حق دریافت توضیح کتبی و اعتراض به تصمیم ارزش‌گذاری دارد.",
      ],
    },
    iran: { en: "Iran is a WTO observer, not a member, but its Customs Act adopts transaction-value principles; in practice customs may reference declared value databases.", fa: "ایران عضو ناظر سازمان جهانی تجارت است، اما قانون امور گمرکی اصول ارزش معامله را پذیرفته است؛ در عمل گمرک ممکن است به بانک‌های اطلاعاتی ارزش استناد کند." },
    status: { en: "In force since 1995 as part of the WTO Agreement.", fa: "از ۱۹۹۵ به‌عنوان بخشی از موافقت‌نامه سازمان جهانی تجارت لازم‌الاجراست." },
  },
  "wto-agreement-on-rules-of-origin": {
    purpose: {
      en: "Disciplines the way members determine the country of origin of goods for non-preferential purposes and works towards harmonised origin rules.",
      fa: "نحوه تعیین کشور مبدأ کالا برای مقاصد غیرترجیحی را نظم می‌بخشد و به سمت قواعد مبدأ هماهنگ حرکت می‌کند.",
    },
    key: {
      en: [
        "Origin rules must be objective, understandable, predictable and administered consistently.",
        "Wholly obtained goods and substantial transformation (change of tariff heading, value-added, specific process) are the core criteria.",
        "Members must provide binding origin assessments on request within 150 days.",
        "Preferential origin under FTAs is covered by a separate common declaration.",
      ],
      fa: [
        "قواعد مبدأ باید عینی، قابل فهم، پیش‌بینی‌پذیر و به‌طور یکسان اجرا شوند.",
        "معیارهای اصلی: کالای کاملاً به‌دست‌آمده و تغییر شکل اساسی (تغییر شماره تعرفه، ارزش افزوده، فرآیند خاص).",
        "اعضا باید ظرف ۱۵۰ روز نظر الزام‌آور مبدأ صادر کنند.",
        "مبدأ ترجیحی در موافقت‌نامه‌های تجارت آزاد موضوع اعلامیه مشترک جداگانه است.",
      ],
    },
    iran: { en: "Certificates of origin for Iranian exports are issued by the Chambers of Commerce; preferential origin applies under the ECO agreement and the Iran–EAEU FTA.", fa: "گواهی مبدأ صادرات ایران توسط اتاق‌های بازرگانی صادر می‌شود؛ مبدأ ترجیحی در موافقت‌نامه اکو و موافقت‌نامه تجارت آزاد ایران–اتحادیه اقتصادی اوراسیا اعمال می‌گردد." },
    status: { en: "In force since 1995; harmonisation work programme ongoing.", fa: "از ۱۹۹۵ لازم‌الاجراست و برنامه کاری هماهنگ‌سازی ادامه دارد." },
  },

  "un-convention-on-assignment-of-receivables-in-international-trade": {
    purpose: {
      en: "Facilitates receivables finance — factoring, securitisation, forfaiting — by removing legal obstacles to the assignment of trade receivables across borders.",
      fa: "با رفع موانع حقوقی انتقال مطالبات تجاری فرامرزی، تأمین مالی مبتنی بر مطالبات (فاکتورینگ، اوراق‌بهادارسازی، فورفیتینگ) را تسهیل می‌کند.",
    },
    key: {
      en: [
        "Validates bulk assignments and assignments of future receivables.",
        "Overrides contractual anti-assignment clauses in trade receivables.",
        "Priority between competing assignees is determined by the law of the assignor's location.",
        "Protects the debtor: the debtor's position must not be made worse by the assignment.",
      ],
      fa: [
        "انتقال گروهی مطالبات و مطالبات آتی را معتبر می‌شناسد.",
        "شروط قراردادی منع انتقال در مطالبات تجاری را بی‌اثر می‌کند.",
        "اولویت میان منتقل‌الیهم متعارض بر پایه قانون محل انتقال‌دهنده تعیین می‌شود.",
        "از بدهکار حمایت می‌کند: وضعیت او نباید در اثر انتقال بدتر شود.",
      ],
    },
    iran: { en: "Not ratified by Iran. Receivables finance for Iranian exporters is normally structured contractually under the law of the financier's jurisdiction.", fa: "ایران تصویب نکرده است. تأمین مالی مطالبات برای صادرکنندگان ایرانی معمولاً به‌صورت قراردادی و تحت قانون کشور تأمین‌کننده مالی ساختاردهی می‌شود." },
    status: { en: "Adopted 2001; limited ratifications.", fa: "مصوب ۲۰۰۱ با تعداد محدود الحاق." },
  },

  "ucp-600": {
    purpose: {
      en: "The ICC rules that govern documentary credits worldwide, defining how banks examine documents and honour or negotiate a letter of credit.",
      fa: "مقررات اتاق بازرگانی بین‌المللی که اعتبارات اسنادی را در سراسر جهان اداره می‌کند و نحوه بررسی اسناد و پرداخت یا معامله اعتبار توسط بانک‌ها را تعیین می‌نماید.",
    },
    key: {
      en: [
        "Credits are irrevocable by default and independent from the underlying sale contract (Arts. 3–4).",
        "Banks deal with documents, not goods, services or performance (Art. 5).",
        "Five banking days to examine documents and give a single notice of refusal listing all discrepancies (Arts. 14, 16).",
        "Rules on transport documents, insurance documents, originals and copies, and tolerances (Arts. 19–28, 30).",
        "Transferable credits (Art. 38) and assignment of proceeds (Art. 39).",
      ],
      fa: [
        "اعتبارات به‌طور پیش‌فرض غیرقابل برگشت و مستقل از قرارداد پایه هستند (مواد ۳ و ۴).",
        "بانک‌ها با اسناد سروکار دارند، نه با کالا، خدمات یا اجرا (ماده ۵).",
        "پنج روز بانکی برای بررسی اسناد و ارسال یک اطلاعیه رد شامل تمام مغایرت‌ها (مواد ۱۴ و ۱۶).",
        "قواعد اسناد حمل، بیمه، نسخه اصل و رونوشت و رواداری‌ها (مواد ۱۹ تا ۲۸ و ۳۰).",
        "اعتبار قابل انتقال (ماده ۳۸) و واگذاری عواید (ماده ۳۹).",
      ],
    },
    iran: { en: "Iranian banks issue and advise credits subject to UCP 600; for Iran-related trade always confirm the correspondent banking channel and payment currency before issuance.", fa: "بانک‌های ایرانی اعتبارات را مشمول UCP 600 گشایش و ابلاغ می‌کنند؛ در تجارت مرتبط با ایران، پیش از گشایش، کانال بانک کارگزار و ارز پرداخت را تأیید کنید." },
    status: { en: "ICC Publication No. 600, in force since 1 July 2007.", fa: "نشریه شماره ۶۰۰ اتاق بازرگانی بین‌المللی، لازم‌الاجرا از اول ژوئیه ۲۰۰۷." },
  },
  eucp: {
    purpose: {
      en: "Supplement to UCP 600 for presentation of electronic records alone or in combination with paper documents.",
      fa: "متمم UCP 600 برای ارائه سوابق الکترونیکی به‌تنهایی یا همراه با اسناد کاغذی.",
    },
    key: {
      en: [
        "Applies only when the credit expressly states it is subject to the eUCP.",
        "Defines electronic record, format, and the place of presentation as an electronic address.",
        "Rules for corrupted records, notice of completeness and the deemed time of presentation.",
        "In case of conflict, the eUCP prevails over UCP 600.",
      ],
      fa: [
        "تنها زمانی اعمال می‌شود که اعتبار صراحتاً به آن ارجاع دهد.",
        "سابقه الکترونیکی، قالب و محل ارائه به‌صورت نشانی الکترونیکی را تعریف می‌کند.",
        "قواعد مربوط به سوابق مخدوش، اعلام کامل بودن و زمان تلقی‌شده ارائه.",
        "در صورت تعارض، eUCP بر UCP 600 مقدم است.",
      ],
    },
    iran: { en: "Useful where the parties' banks support electronic presentation; confirm capability with the issuing and nominated banks in advance.", fa: "در صورتی که بانک‌های طرفین از ارائه الکترونیکی پشتیبانی کنند کاربرد دارد؛ توان بانک گشاینده و تعیین‌شده را از پیش بررسی کنید." },
    status: { en: "eUCP Version 2.1, ICC.", fa: "نسخه ۲٫۱ eUCP، اتاق بازرگانی بین‌المللی." },
  },
  isbp: {
    purpose: {
      en: "International Standard Banking Practice — the practical companion to UCP 600 explaining how document examiners apply the rules line by line.",
      fa: "رویه استاندارد بین‌المللی بانکی — همراه عملی UCP 600 که نحوه اعمال بندبند مقررات توسط بررسی‌کنندگان اسناد را توضیح می‌دهد.",
    },
    key: {
      en: [
        "Detailed guidance on invoices, transport documents, insurance, certificates of origin and drafts.",
        "Explains acceptable abbreviations, corrections, dates, signatures and misspellings.",
        "Reduces discrepancy rates by aligning beneficiary practice with bank expectations.",
        "Does not amend UCP 600; it must be read together with it.",
      ],
      fa: [
        "راهنمای تفصیلی درباره سیاهه، اسناد حمل، بیمه، گواهی مبدأ و برات.",
        "اختصارات، اصلاحات، تاریخ‌ها، امضاها و غلط‌های املایی قابل قبول را تبیین می‌کند.",
        "با هماهنگ کردن رویه ذی‌نفع و انتظار بانک‌ها، نرخ مغایرت را کاهش می‌دهد.",
        "UCP 600 را اصلاح نمی‌کند و باید همراه آن مطالعه شود.",
      ],
    },
    iran: { en: "Recommended reading for Iranian exporters preparing L/C document sets — most rejections arise from avoidable formal discrepancies.", fa: "مطالعه آن به صادرکنندگان ایرانی توصیه می‌شود؛ بیشتر ردهای اسناد ناشی از مغایرت‌های شکلی قابل اجتناب است." },
    status: { en: "ICC Publication No. 745 (ISBP 745).", fa: "نشریه شماره ۷۴۵ اتاق بازرگانی بین‌المللی." },
  },
  "urc-522": {
    purpose: {
      en: "ICC Uniform Rules for Collections, governing documentary and clean collections handled through banks (D/P and D/A).",
      fa: "مقررات متحدالشکل وصولی‌های اتاق بازرگانی بین‌المللی، ناظر بر وصولی اسنادی و ساده از طریق بانک‌ها (D/P و D/A).",
    },
    key: {
      en: [
        "Banks act as agents to present documents; they give no payment undertaking.",
        "Collection instruction controls the transaction — it must be complete and precise.",
        "Documents against payment (D/P) versus documents against acceptance (D/A).",
        "Rules on protest, case-of-need representatives, charges and partial payments.",
      ],
      fa: [
        "بانک‌ها به‌عنوان نماینده اسناد را ارائه می‌کنند و هیچ تعهد پرداختی ندارند.",
        "دستور وصول، حاکم بر معامله است و باید کامل و دقیق باشد.",
        "اسناد در مقابل پرداخت (D/P) در برابر اسناد در مقابل قبولی (D/A).",
        "قواعد واخواست، نماینده در صورت نیاز، کارمزدها و پرداخت جزئی.",
      ],
    },
    iran: { en: "A lower-cost alternative to an L/C for established trading relationships; the exporter keeps control of the goods through the transport document.", fa: "جایگزینی کم‌هزینه‌تر از اعتبار اسنادی برای روابط تجاری تثبیت‌شده؛ صادرکننده از طریق سند حمل کنترل کالا را حفظ می‌کند." },
    status: { en: "ICC Publication No. 522, in force since 1996.", fa: "نشریه شماره ۵۲۲ اتاق بازرگانی بین‌المللی، لازم‌الاجرا از ۱۹۹۶." },
  },
  "urdg-758": {
    purpose: {
      en: "ICC Uniform Rules for Demand Guarantees, the standard for independent guarantees and counter-guarantees used in trade and projects.",
      fa: "مقررات متحدالشکل ضمانت‌نامه‌های عندالمطالبه اتاق بازرگانی بین‌المللی، استاندارد ضمانت‌نامه‌ها و ضمانت‌نامه‌های متقابل مستقل در تجارت و پروژه‌ها.",
    },
    key: {
      en: [
        "The guarantee is independent of the underlying relationship and payable against a complying demand.",
        "Demand must be supported by a statement of breach identifying how the applicant is in default.",
        "Five business days for the guarantor to examine a demand.",
        "Detailed rules on extend-or-pay demands, force majeure, expiry and reduction of amount.",
      ],
      fa: [
        "ضمانت‌نامه مستقل از رابطه پایه است و در برابر مطالبه منطبق پرداخت می‌شود.",
        "مطالبه باید همراه اظهار نقض باشد و نحوه تخلف متقاضی را مشخص کند.",
        "ضامن پنج روز کاری برای بررسی مطالبه دارد.",
        "قواعد تفصیلی درباره مطالبه «تمدید یا پرداخت»، فورس ماژور، انقضا و کاهش مبلغ.",
      ],
    },
    iran: { en: "Widely used for bid bonds, advance payment and performance guarantees in projects with Iranian contractors and suppliers.", fa: "برای ضمانت‌نامه شرکت در مناقصه، پیش‌پرداخت و حسن انجام کار در پروژه‌های پیمانکاران و تأمین‌کنندگان ایرانی کاربرد گسترده دارد." },
    status: { en: "ICC Publication No. 758, in force since 1 July 2010.", fa: "نشریه شماره ۷۵۸، لازم‌الاجرا از اول ژوئیه ۲۰۱۰." },
  },
  isp98: {
    purpose: {
      en: "International Standby Practices — rules tailored to standby letters of credit, which function as guarantees payable on documentary demand.",
      fa: "رویه‌های بین‌المللی ضمانت‌نامه تعهدی — مقرراتی ویژه اعتبارات اسنادی ضمانتی که همچون ضمانت‌نامه در برابر مطالبه اسنادی پرداخت می‌شوند.",
    },
    key: {
      en: [
        "Standbys are irrevocable, independent, documentary and binding on issuance.",
        "Three to seven business days is presumed reasonable for examination.",
        "Detailed treatment of automatic extension (evergreen) clauses and transfer by operation of law.",
        "Addresses syndication, participation and reimbursement between banks.",
      ],
      fa: [
        "ضمانت‌نامه تعهدی غیرقابل برگشت، مستقل، اسنادی و از زمان صدور الزام‌آور است.",
        "سه تا هفت روز کاری برای بررسی، متعارف فرض می‌شود.",
        "شروط تمدید خودکار (evergreen) و انتقال قهری به‌تفصیل تنظیم شده است.",
        "موضوعات سندیکایی، مشارکت و بازپرداخت میان بانک‌ها را پوشش می‌دهد.",
      ],
    },
    iran: { en: "Common in international contracts as a substitute for a bank guarantee where the counterparty's bank prefers L/C mechanics.", fa: "در قراردادهای بین‌المللی به‌عنوان جایگزین ضمانت‌نامه بانکی، وقتی بانک طرف مقابل سازوکار اعتبار اسنادی را ترجیح می‌دهد، رایج است." },
    status: { en: "ICC Publication No. 590, in force since 1999.", fa: "نشریه شماره ۵۹۰، لازم‌الاجرا از ۱۹۹۹." },
  },
  "institute-cargo-clauses": {
    purpose: {
      en: "The standard marine cargo insurance wordings (A, B and C) used worldwide to define the scope of cover for goods in transit.",
      fa: "کلوزهای استاندارد بیمه باربری دریایی (A، B و C) که در سراسر جهان دامنه پوشش کالا در حین حمل را تعیین می‌کنند.",
    },
    key: {
      en: [
        "Clause A: all risks of loss or damage except listed exclusions — the widest cover.",
        "Clause B: named perils including fire, stranding, earthquake, water damage and jettison.",
        "Clause C: major casualties only — fire, explosion, sinking, collision, general average sacrifice.",
        "Cover runs warehouse to warehouse subject to the transit clause and termination provisions.",
        "War and strikes risks require separate clauses; unseaworthiness, inherent vice and insufficient packing are excluded.",
      ],
      fa: [
        "کلوز A: تمام خطرات فقدان یا خسارت به‌جز استثنائات احصاشده — گسترده‌ترین پوشش.",
        "کلوز B: خطرات نام‌برده شامل آتش‌سوزی، به‌گل‌نشستن، زلزله، خسارت آب و به‌دریاافکنی.",
        "کلوز C: تنها حوادث عمده — آتش‌سوزی، انفجار، غرق، تصادم و فداکردن در خسارت همگانی.",
        "پوشش انبار تا انبار، مشروط به شرط حمل و مقررات خاتمه پوشش.",
        "خطر جنگ و اعتصاب کلوز جداگانه می‌خواهد؛ عدم قابلیت دریانوردی، عیب ذاتی و بسته‌بندی ناکافی مستثناست.",
      ],
    },
    iran: { en: "Iranian cargo policies issued by domestic insurers follow the Institute Cargo Clauses; for CIF/CIP sales check that the cover level matches the contract requirement.", fa: "بیمه‌نامه‌های باربری شرکت‌های ایرانی بر پایه کلوزهای مؤسسه بیمه‌گران لندن صادر می‌شود؛ در فروش CIF/CIP تطابق سطح پوشش با شرط قرارداد را بررسی کنید." },
    status: { en: "Current editions dated 1 January 2009 (with 1982 wordings still in use).", fa: "نسخه‌های جاری مورخ اول ژانویه ۲۰۰۹ و نسخه ۱۹۸۲ نیز همچنان به‌کار می‌رود." },
  },
};
