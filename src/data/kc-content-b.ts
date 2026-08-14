import type { EntryContent } from "./kc-content-types";

/** Arbitration, ADR, e-commerce, insolvency, secured transactions, investment, contract principles. */
export const contentB: Record<string, EntryContent> = {
  "new-york-convention-1958": {
    purpose: {
      en: "The Convention on the Recognition and Enforcement of Foreign Arbitral Awards obliges the courts of contracting states to recognise written arbitration agreements and to enforce arbitral awards made in other contracting states, subject only to a short, closed list of refusal grounds. It is the backbone that makes international arbitration commercially useful.",
      fa: "کنوانسیون شناسایی و اجرای آرای داوری خارجی، دادگاه‌های کشورهای عضو را ملزم می‌کند موافقت‌نامه‌های داوری کتبی را معتبر بشناسند و آرای داوری صادرشده در دیگر کشورهای عضو را اجرا کنند؛ رد اجرا تنها بر پایه فهرست کوتاه و بسته‌ای از دلایل ممکن است. همین سازوکار است که داوری بین‌المللی را از نظر تجاری کارآمد می‌کند.",
    },
    key: {
      en: [
        "Article II: courts must refer parties to arbitration when a valid written arbitration agreement exists.",
        "Article III: a foreign award is enforced like a domestic judgment, without review of the merits.",
        "Article IV: the applicant files the authenticated award and the arbitration agreement (with translation).",
        "Article V: enforcement may be refused only for incapacity, invalid agreement, lack of notice/due process, excess of mandate, irregular tribunal composition, award not yet binding or set aside at the seat, non-arbitrability, or public policy.",
        "Reciprocity and commercial reservations may be declared by a state on accession.",
      ],
      fa: [
        "ماده ۲: در صورت وجود موافقت‌نامه داوری کتبی معتبر، دادگاه باید طرفین را به داوری ارجاع دهد.",
        "ماده ۳: رأی خارجی مانند حکم داخلی اجرا می‌شود و بازبینی ماهوی ندارد.",
        "ماده ۴: متقاضی باید اصل مصدق رأی و موافقت‌نامه داوری را همراه ترجمه ارائه کند.",
        "ماده ۵: رد اجرا فقط به دلایل محدود: فقدان اهلیت، بی‌اعتباری موافقت‌نامه، عدم ابلاغ/نقض حق دفاع، خروج داور از حدود اختیار، ترکیب نادرست مرجع داوری، الزام‌آور نبودن یا ابطال رأی در مقر، غیرقابل داوری بودن موضوع، و نظم عمومی.",
        "کشورها می‌توانند هنگام الحاق، شرط عمل متقابل و شرط تجاری‌بودن اعلام کنند.",
      ],
    },
    iran: {
      en: "Iran acceded to the New York Convention (Act of 2001 / 1380) with the commercial and reciprocity reservations. Foreign awards rendered in other contracting states are therefore enforceable in Iran through the competent court, and Iranian awards travel abroad on the same basis.",
      fa: "ایران در سال ۱۳۸۰ با اعلام شرط تجاری و شرط عمل متقابل به کنوانسیون نیویورک ملحق شده است؛ بنابراین آرای داوری صادره در دیگر کشورهای عضو از طریق دادگاه صالح در ایران قابل اجراست و آرای ایرانی نیز در خارج بر همین مبنا اجرا می‌شوند.",
    },
    status: { en: "In force since 1959; over 170 contracting states.", fa: "لازم‌الاجرا از ۱۹۵۹؛ بیش از ۱۷۰ کشور عضو." },
  },

  "uncitral-arbitration-rules": {
    purpose: {
      en: "A complete set of procedural rules for ad hoc arbitration (arbitration not administered by an institution), covering everything from the notice of arbitration to the final award and costs. Parties adopt them by a single clause in their contract.",
      fa: "مجموعه‌ای کامل از قواعد شکلی برای داوری موردی (داوری بدون نهاد اداره‌کننده) که از اخطار داوری تا صدور رأی و هزینه‌ها را پوشش می‌دهد. طرفین با یک شرط ساده در قرارداد آن را می‌پذیرند.",
    },
    key: {
      en: [
        "Notice of arbitration, response, and constitution of a one- or three-member tribunal.",
        "Appointing authority mechanism (often the PCA Secretary-General) when a party fails to appoint.",
        "Party autonomy over seat, language, and procedure; tribunal fills the gaps.",
        "Interim measures, evidence, hearings, and default procedures.",
        "Award requirements: written, reasoned, final and binding; allocation of costs and fees.",
        "2010 revision plus the 2014 (as revised 2021) Rules on Transparency for treaty-based investor-state cases.",
      ],
      fa: [
        "اخطار داوری، پاسخ، و تشکیل هیأت داوری یک‌نفره یا سه‌نفره.",
        "سازوکار «مرجع ناصب» (اغلب دبیرکل دیوان دائمی داوری) در صورت خودداری یک طرف از نصب داور.",
        "حاکمیت اراده طرفین بر مقر، زبان و آیین رسیدگی؛ خلأها را هیأت داوری پر می‌کند.",
        "دستورهای موقت، ادله، جلسات استماع و رسیدگی غیابی.",
        "شرایط رأی: کتبی، مستدل، قطعی و الزام‌آور؛ تخصیص هزینه‌ها و حق‌الزحمه‌ها.",
        "بازنگری ۲۰۱۰ و قواعد شفافیت ۲۰۱۴ (اصلاحی ۲۰۲۱) برای دعاوی سرمایه‌گذار–دولت مبتنی بر معاهده.",
      ],
    },
    iran: {
      en: "Widely used in Iranian cross-border contracts as the procedural framework for ad hoc arbitration, frequently combined with an Iranian or neutral seat and the Tehran Regional Arbitration Centre (TRAC) or ICC as appointing authority.",
      fa: "در قراردادهای برون‌مرزی ایرانی به‌عنوان چارچوب شکلی داوری موردی پرکاربرد است و معمولاً با تعیین مقر ایران یا کشور ثالث و انتخاب مرکز منطقه‌ای داوری تهران (TRAC) یا ICC به‌عنوان مرجع ناصب همراه می‌شود.",
    },
    status: { en: "Model rules; binding only when the parties adopt them.", fa: "قواعد نمونه؛ تنها با پذیرش طرفین الزام‌آور می‌شود." },
  },

  "uncitral-model-law-on-international-commercial-arbitration": {
    purpose: {
      en: "A template national arbitration statute (1985, amended 2006) that states enact into domestic law so that international arbitration is governed by predictable, arbitration-friendly rules aligned with the New York Convention.",
      fa: "الگوی قانون ملی داوری (۱۹۸۵، اصلاحی ۲۰۰۶) که کشورها آن را در حقوق داخلی خود تصویب می‌کنند تا داوری بین‌المللی تابع قواعدی پیش‌بینی‌پذیر و هماهنگ با کنوانسیون نیویورک باشد.",
    },
    key: {
      en: [
        "Definition of 'international' and 'commercial' arbitration and limited court intervention (Article 5).",
        "Separability of the arbitration clause and competence-competence (Article 16).",
        "Equal treatment and full opportunity to present the case (Article 18).",
        "Interim measures regime introduced by the 2006 amendments (Chapter IV A).",
        "Setting aside only on Article 34 grounds, mirroring New York Convention Article V.",
        "Recognition and enforcement under Articles 35–36.",
      ],
      fa: [
        "تعریف داوری «بین‌المللی» و «تجاری» و محدودسازی دخالت دادگاه (ماده ۵).",
        "استقلال شرط داوری و صلاحیت داور نسبت به صلاحیت خود (ماده ۱۶).",
        "رفتار برابر با طرفین و فرصت کامل برای طرح دعوا (ماده ۱۸).",
        "نظام دستورهای موقت که با اصلاحات ۲۰۰۶ افزوده شد (فصل چهارم مکرر).",
        "ابطال رأی صرفاً بر پایه موارد ماده ۳۴، متناظر با ماده ۵ کنوانسیون نیویورک.",
        "شناسایی و اجرا بر اساس مواد ۳۵ و ۳۶.",
      ],
    },
    iran: {
      en: "Iran's Law on International Commercial Arbitration (1997 / 1376) is closely modelled on the 1985 Model Law, which makes Iranian-seated international arbitration structurally familiar to foreign counterparties.",
      fa: "قانون داوری تجاری بین‌المللی ایران (مصوب ۱۳۷۶) عمدتاً بر پایه قانون نمونه ۱۹۸۵ تدوین شده و همین امر داوری بین‌المللی با مقر ایران را برای طرف‌های خارجی آشنا و قابل‌فهم می‌سازد.",
    },
    status: { en: "Model law; enacted in some form by 90+ jurisdictions.", fa: "قانون نمونه؛ در بیش از ۹۰ کشور به شکلی تصویب شده است." },
  },

  "icc-arbitration-rules": {
    purpose: {
      en: "The rules of the ICC International Court of Arbitration in Paris — the most used institutional rules for high-value cross-border disputes, providing administration, scrutiny of awards and a fixed cost scale.",
      fa: "قواعد دیوان بین‌المللی داوری اتاق بازرگانی بین‌المللی در پاریس؛ پرکاربردترین قواعد نهادی برای اختلافات بزرگ فرامرزی که اداره پرونده، بازبینی پیش‌نویس رأی و جدول هزینه مشخص را فراهم می‌کند.",
    },
    key: {
      en: [
        "Request for Arbitration and Answer; the Court confirms or appoints arbitrators.",
        "Terms of Reference define the issues at the outset — an ICC hallmark.",
        "Emergency Arbitrator and expedited procedure for smaller claims.",
        "Scrutiny of the draft award by the Court before it is issued, improving enforceability.",
        "Costs fixed on an ad valorem scale based on the amount in dispute.",
        "Multi-party and multi-contract joinder and consolidation provisions.",
      ],
      fa: [
        "درخواست داوری و پاسخ؛ دیوان، داوران را تأیید یا منصوب می‌کند.",
        "سند «قرار داوری» (Terms of Reference) که موضوعات اختلاف را در آغاز مشخص می‌کند — ویژگی شاخص ICC.",
        "داور اضطراری و آیین شتابان برای دعاوی کم‌مبلغ.",
        "بازبینی پیش‌نویس رأی توسط دیوان پیش از صدور، که قابلیت اجرای رأی را بالا می‌برد.",
        "هزینه‌ها بر پایه جدول درصدی نسبت به مبلغ خواسته.",
        "مقررات ورود ثالث و ادغام دعاوی چندطرفه و چندقراردادی.",
      ],
    },
    iran: {
      en: "Commonly chosen in contracts between Iranian companies and foreign partners, usually with a neutral seat. Iranian parties should budget the ICC cost scale in advance and check sanctions-related payment routes for advances on costs.",
      fa: "در قراردادهای شرکت‌های ایرانی با طرف‌های خارجی رایج است و معمولاً با مقر بی‌طرف انتخاب می‌شود. طرف ایرانی باید هزینه‌های جدول ICC را از پیش بودجه‌بندی کند و مسیر پرداخت علی‌الحساب هزینه‌ها را از منظر تحریم بررسی نماید.",
    },
    status: { en: "Current version in force from 2021 (as amended 2023).", fa: "نسخه جاری از سال ۲۰۲۱ (با اصلاحات ۲۰۲۳) لازم‌الاجراست." },
  },

  "singapore-convention-on-mediation-2019": {
    purpose: {
      en: "The UN Convention on International Settlement Agreements Resulting from Mediation lets a commercial settlement reached through mediation be enforced directly in contracting states, without first suing on the settlement contract.",
      fa: "کنوانسیون سازمان ملل درباره موافقت‌نامه‌های بین‌المللی حل‌وفصل ناشی از میانجیگری، امکان اجرای مستقیم توافق تجاری حاصل از میانجیگری را در کشورهای عضو فراهم می‌کند، بدون نیاز به طرح دعوا بر مبنای قرارداد سازش.",
    },
    key: {
      en: [
        "Applies to written international commercial settlement agreements resulting from mediation.",
        "Excludes consumer, family, inheritance and employment matters, and settlements enforceable as judgments or awards.",
        "The party seeking relief files the settlement plus evidence that it resulted from mediation.",
        "Limited refusal grounds: incapacity, void or unperformable agreement, mediator misconduct or lack of impartiality, public policy, non-arbitrable subject matter.",
        "States may opt out for government-party settlements or require party opt-in.",
      ],
      fa: [
        "بر موافقت‌نامه‌های کتبی بین‌المللی تجاری ناشی از میانجیگری اعمال می‌شود.",
        "امور مصرف‌کننده، خانواده، ارث و کار و نیز سازش‌هایی که به‌صورت حکم یا رأی داوری قابل اجرا هستند، خارج از شمول‌اند.",
        "متقاضی باید متن توافق و دلیل ناشی‌شدن آن از میانجیگری را ارائه کند.",
        "دلایل محدود رد اجرا: فقدان اهلیت، بی‌اعتباری یا غیرقابل اجرا بودن توافق، تخلف یا بی‌طرف نبودن میانجی، نظم عمومی، غیرقابل حل‌وفصل بودن موضوع.",
        "دولت‌ها می‌توانند سازش‌های با طرفیت دولت را مستثنا کنند یا اجرای کنوانسیون را منوط به توافق طرفین سازند.",
      ],
    },
    iran: {
      en: "Iran is among the states that signed the Convention at Singapore in August 2019; enforcement in Iran depends on completion of domestic ratification, so mediated settlements with Iranian parties should still include a fallback arbitration clause.",
      fa: "ایران از جمله کشورهای امضاکننده کنوانسیون در سنگاپور (اوت ۲۰۱۹) است؛ اجرای آن در ایران منوط به تکمیل تشریفات تصویب داخلی است. بنابراین در توافق‌های سازش با طرف ایرانی، درج شرط داوری جایگزین توصیه می‌شود.",
    },
    status: { en: "In force internationally since 12 September 2020.", fa: "در سطح بین‌المللی از ۱۲ سپتامبر ۲۰۲۰ لازم‌الاجراست." },
  },

  "un-convention-on-electronic-communications-in-international-contracts": {
    purpose: {
      en: "The 2005 'e-Contracting Convention' removes legal obstacles to concluding international contracts by electronic means, ensuring that an e-mail, EDI message or online order is not denied validity merely because it is electronic.",
      fa: "کنوانسیون ۲۰۰۵ «قراردادهای الکترونیکی» موانع حقوقی انعقاد قراردادهای بین‌المللی از راه الکترونیکی را برمی‌دارد و تضمین می‌کند که ایمیل، پیام EDI یا سفارش آنلاین صرفاً به دلیل الکترونیکی بودن بی‌اعتبار تلقی نشود.",
    },
    key: {
      en: [
        "Functional equivalence: 'writing', 'signature' and 'original' can be satisfied electronically.",
        "Rules on time and place of dispatch and receipt of electronic communications.",
        "Location of the parties: a domain name or e-mail address alone does not establish a place of business.",
        "Invitations to treat: online offers to the public are presumed invitations unless clearly binding.",
        "Correction of input errors in automated transactions.",
        "Interfaces cleanly with CISG contracts concluded electronically.",
      ],
      fa: [
        "هم‌ارزی کارکردی: شرط «کتبی بودن»، «امضا» و «اصل سند» به‌صورت الکترونیکی نیز محقق می‌شود.",
        "قواعد زمان و مکان ارسال و دریافت ارتباطات الکترونیکی.",
        "محل استقرار طرفین: نام دامنه یا نشانی ایمیل به‌تنهایی محل تجارت را تعیین نمی‌کند.",
        "دعوت به معامله: پیشنهادهای عمومی آنلاین جز در صورت تصریح، دعوت به معامله تلقی می‌شوند.",
        "امکان اصلاح اشتباه در ورود اطلاعات در معاملات خودکار.",
        "با قراردادهای مشمول CISG که الکترونیکی منعقد می‌شوند سازگار است.",
      ],
    },
    iran: {
      en: "Iran is not a contracting state; however, Iran's Electronic Commerce Act (2003 / 1382) applies comparable functional-equivalence principles domestically. In cross-border deals, state expressly in the contract that electronic signatures and e-mail exchanges are binding.",
      fa: "ایران عضو این کنوانسیون نیست؛ اما قانون تجارت الکترونیکی ایران (مصوب ۱۳۸۲) اصول مشابه هم‌ارزی کارکردی را در سطح داخلی پذیرفته است. در معاملات فرامرزی بهتر است در متن قرارداد تصریح شود که امضای الکترونیکی و تبادل ایمیل الزام‌آور است.",
    },
    status: { en: "In force since 2013 for contracting states.", fa: "از سال ۲۰۱۳ برای کشورهای عضو لازم‌الاجراست." },
  },

  "uncitral-model-law-on-electronic-commerce": {
    purpose: {
      en: "The 1996 Model Law (with the 1998 article on electronic contracting) is the original template for national e-commerce statutes, built on non-discrimination, technological neutrality and functional equivalence.",
      fa: "قانون نمونه ۱۹۹۶ (به‌همراه ماده الحاقی ۱۹۹۸ درباره انعقاد قرارداد الکترونیکی) الگوی اصلی قوانین ملی تجارت الکترونیکی است و بر سه اصل عدم تبعیض، بی‌طرفی فناورانه و هم‌ارزی کارکردی بنا شده است.",
    },
    key: {
      en: [
        "A data message may not be denied legal effect solely because it is electronic.",
        "Writing, signature and original requirements met by reliable electronic means.",
        "Admissibility and evidential weight of data messages.",
        "Attribution of messages, acknowledgement of receipt, time and place of dispatch/receipt.",
        "Part Two: specific rules for electronic transport documents and rights in goods.",
      ],
      fa: [
        "به پیام داده نمی‌توان صرفاً به دلیل الکترونیکی بودن اثر حقوقی را انکار کرد.",
        "شروط کتبی بودن، امضا و اصالت سند با روش‌های الکترونیکی مطمئن محقق می‌شود.",
        "قابلیت استناد و ارزش اثباتی پیام‌های داده.",
        "انتساب پیام، تأییدیه دریافت، و زمان و مکان ارسال/دریافت.",
        "بخش دوم: قواعد ویژه اسناد حمل الکترونیکی و حقوق مربوط به کالا.",
      ],
    },
    iran: {
      en: "Iran's Electronic Commerce Act 2003 is substantially inspired by this Model Law, so Iranian law already recognises data messages, secure electronic signatures and electronic records.",
      fa: "قانون تجارت الکترونیکی ۱۳۸۲ ایران عمدتاً از همین قانون نمونه الهام گرفته است؛ بنابراین حقوق ایران پیام داده، امضای الکترونیکی مطمئن و سوابق الکترونیکی را به رسمیت می‌شناسد.",
    },
    status: { en: "Model law; enacted in 80+ jurisdictions.", fa: "قانون نمونه؛ در بیش از ۸۰ کشور تصویب شده است." },
  },

  "uncitral-model-law-on-electronic-signatures": {
    purpose: {
      en: "The 2001 Model Law sets criteria for treating an electronic signature as reliable and equivalent to a handwritten one, and allocates duties between signatory, certification service provider and relying party.",
      fa: "قانون نمونه ۲۰۰۱ معیارهای مطمئن بودن امضای الکترونیکی و هم‌ارزی آن با امضای دستی را تعیین می‌کند و وظایف امضاکننده، ارائه‌دهنده خدمات گواهی و طرف متکی را مشخص می‌سازد.",
    },
    key: {
      en: [
        "Technology neutrality: no particular signature technology is mandated.",
        "Reliability test — signature creation data linked to and controlled by the signatory, and alterations detectable.",
        "Duties of the signatory to protect signature data and notify compromise.",
        "Conduct and liability standards for certification service providers.",
        "Cross-border recognition of foreign certificates on equivalent-reliability grounds.",
      ],
      fa: [
        "بی‌طرفی فناورانه: هیچ فناوری خاصی برای امضا الزامی نیست.",
        "آزمون اطمینان‌پذیری: داده‌های ایجاد امضا منحصر و در کنترل امضاکننده باشد و هرگونه تغییر قابل تشخیص باشد.",
        "تکالیف امضاکننده در حفاظت از داده‌های امضا و اعلام افشای آن.",
        "ضوابط رفتاری و مسئولیت ارائه‌دهندگان خدمات گواهی الکترونیکی.",
        "شناسایی فرامرزی گواهی‌های خارجی بر پایه هم‌ترازی سطح اطمینان.",
      ],
    },
    iran: {
      en: "Reflected in Iran's Electronic Commerce Act and the national PKI framework (Root Certification Authority under the Ministry of Industry, Mine and Trade). Foreign counterparties usually accept scanned signatures plus company stamp for commercial documents.",
      fa: "در قانون تجارت الکترونیکی ایران و ساختار زیرساخت کلید عمومی کشور (مرکز ریشه صدور گواهی الکترونیکی زیر نظر وزارت صمت) بازتاب یافته است. در عمل، طرف‌های خارجی معمولاً امضای اسکن‌شده به‌همراه مهر شرکت را برای اسناد تجاری می‌پذیرند.",
    },
    status: { en: "Model law; widely enacted.", fa: "قانون نمونه؛ در کشورهای متعدد تصویب شده است." },
  },

  "uncitral-model-law-on-electronic-transferable-records": {
    purpose: {
      en: "MLETR (2017) enables electronic equivalents of transferable documents such as bills of lading, warehouse receipts, bills of exchange and promissory notes — the legal key to paperless trade.",
      fa: "قانون نمونه اسناد الکترونیکی قابل انتقال (MLETR، ۲۰۱۷) امکان صدور معادل الکترونیکی اسناد قابل انتقال مانند بارنامه، قبض انبار، برات و سفته را فراهم می‌کند و کلید حقوقی تجارت بدون کاغذ است.",
    },
    key: {
      en: [
        "'Control' of an electronic record replaces physical possession of a paper document.",
        "Singularity: the system must identify one authoritative copy and prevent duplication.",
        "Functional equivalence for issuance, endorsement, transfer and presentation.",
        "Change of medium: paper-to-electronic and electronic-to-paper conversion with the original removed from circulation.",
        "Technology neutral — compatible with registry, token or DLT-based systems.",
      ],
      fa: [
        "«کنترل» سند الکترونیکی جایگزین تصرف فیزیکی سند کاغذی می‌شود.",
        "یگانگی: سامانه باید یک نسخه معتبر واحد را شناسایی و از تکثیر آن جلوگیری کند.",
        "هم‌ارزی کارکردی برای صدور، ظهرنویسی، انتقال و ارائه سند.",
        "تغییر رسانه: تبدیل کاغذی به الکترونیکی و بالعکس، با خروج نسخه اصلی از گردش.",
        "بی‌طرف نسبت به فناوری — سازگار با سامانه‌های ثبتی، توکنی یا مبتنی بر دفتر کل توزیع‌شده.",
      ],
    },
    iran: {
      en: "Not yet enacted in Iran. Electronic bills of lading used with Iranian cargo therefore rely on contractual rulebooks (e.g. carrier e-B/L systems) rather than statute; keep a paper original option in the letter of credit.",
      fa: "هنوز در ایران تصویب نشده است. بنابراین بارنامه‌های الکترونیکی در محموله‌های ایرانی به جای قانون، بر آیین‌نامه‌های قراردادی (مانند سامانه‌های e-B/L خطوط کشتیرانی) تکیه دارند؛ توصیه می‌شود امکان بارنامه کاغذی در اعتبار اسنادی حفظ شود.",
    },
    status: { en: "Model law 2017; adopted by a growing group of states.", fa: "قانون نمونه ۲۰۱۷؛ شمار کشورهای پذیرنده در حال افزایش است." },
  },

  "uncitral-model-law-on-automated-contracting": {
    purpose: {
      en: "A recent UNCITRAL text addressing contracts concluded through automated systems, including AI-assisted agents, clarifying attribution of automated actions to the person or entity that deployed the system.",
      fa: "متن اخیر آنسیترال درباره قراردادهایی که از طریق سامانه‌های خودکار — از جمله عامل‌های مبتنی بر هوش مصنوعی — منعقد می‌شوند و انتساب اقدامات خودکار به شخص یا نهاد به‌کارگیرنده سامانه را روشن می‌کند.",
    },
    key: {
      en: [
        "Actions of an automated system are attributed to the party that used it, even without human review of each transaction.",
        "A contract is not invalid merely because no natural person reviewed the individual actions.",
        "Error handling and correction mechanisms for automated interactions.",
        "Builds on the e-Commerce Model Law and the e-Contracting Convention.",
      ],
      fa: [
        "اقدامات سامانه خودکار به طرفی منتسب می‌شود که آن را به‌کار گرفته است، حتی بدون بازبینی انسانی هر معامله.",
        "قرارداد صرفاً به این دلیل که شخص حقیقی تک‌تک اقدامات را بررسی نکرده، باطل نیست.",
        "سازوکارهای مدیریت و اصلاح خطا در تعاملات خودکار.",
        "بر پایه قانون نمونه تجارت الکترونیکی و کنوانسیون قراردادهای الکترونیکی بنا شده است.",
      ],
    },
    iran: {
      en: "No Iranian implementation. For automated ordering portals with Iranian sellers, define expressly in the terms of sale when an automated confirmation constitutes acceptance.",
      fa: "در ایران اجرا نشده است. در درگاه‌های سفارش خودکار با فروشندگان ایرانی، بهتر است در شرایط فروش تصریح شود که تأیید خودکار در چه لحظه‌ای قبول محسوب می‌شود.",
    },
    status: { en: "Model text; national adoption at an early stage.", fa: "متن نمونه؛ پذیرش ملی در مراحل ابتدایی است." },
  },

  "uncitral-model-law-on-cross-border-insolvency": {
    purpose: {
      en: "The 1997 Model Law provides a framework for cooperation when an insolvent debtor has assets or creditors in more than one country, focusing on recognition of foreign proceedings rather than harmonising insolvency law itself.",
      fa: "قانون نمونه ۱۹۹۷ چارچوبی برای همکاری در مواردی فراهم می‌کند که بدهکار ورشکسته در بیش از یک کشور دارایی یا طلبکار دارد؛ تمرکز آن بر شناسایی رسیدگی‌های خارجی است، نه یکسان‌سازی حقوق ورشکستگی.",
    },
    key: {
      en: [
        "Recognition of a foreign 'main' proceeding at the debtor's centre of main interests (COMI) or a 'non-main' proceeding at an establishment.",
        "Automatic stay of executions and transfers on recognition of a main proceeding.",
        "Direct access for foreign representatives to local courts.",
        "Court-to-court cooperation and coordination of concurrent proceedings.",
        "Equal treatment and protection of local creditors.",
      ],
      fa: [
        "شناسایی رسیدگی «اصلی» خارجی در مرکز منافع اصلی بدهکار (COMI) یا رسیدگی «غیر‌اصلی» در محل شعبه.",
        "توقف خودکار اقدامات اجرایی و نقل‌وانتقال دارایی پس از شناسایی رسیدگی اصلی.",
        "دسترسی مستقیم نماینده خارجی به دادگاه محلی.",
        "همکاری دادگاه‌ها و هماهنگی میان رسیدگی‌های هم‌زمان.",
        "رفتار برابر و حمایت از طلبکاران محلی.",
      ],
    },
    iran: {
      en: "Not adopted in Iran; Iranian bankruptcy remains governed by the Commercial Code and Civil Procedure rules, with no automatic recognition of foreign insolvency proceedings. Secure your position with advance payment, credit insurance or bank guarantees instead.",
      fa: "در ایران پذیرفته نشده است؛ ورشکستگی همچنان تابع قانون تجارت و آیین دادرسی مدنی است و رسیدگی ورشکستگی خارجی به‌طور خودکار شناسایی نمی‌شود. جایگزین عملی: پیش‌پرداخت، بیمه اعتبار صادراتی یا ضمانت‌نامه بانکی.",
    },
    status: { en: "Model law 1997; enacted in 60+ jurisdictions.", fa: "قانون نمونه ۱۹۹۷؛ در بیش از ۶۰ کشور تصویب شده است." },
  },

  "uncitral-model-law-on-secured-transactions": {
    purpose: {
      en: "The 2016 Model Law creates a unified, registry-based regime for security rights in movable assets — inventory, receivables, equipment — so businesses can raise finance against goods rather than only real estate.",
      fa: "قانون نمونه ۲۰۱۶ نظامی یکپارچه و مبتنی بر ثبت برای حقوق وثیقه‌ای در اموال منقول — موجودی کالا، مطالبات، تجهیزات — ایجاد می‌کند تا بنگاه‌ها بتوانند به‌جای اتکای صرف به املاک، بر پایه کالا تأمین مالی کنند.",
    },
    key: {
      en: [
        "One functional concept of 'security right' covering pledges, retention of title and financial leases.",
        "Creation by written security agreement; effectiveness against third parties by registration.",
        "Priority determined by time of registration, with special rules for acquisition security rights.",
        "Security rights extend to proceeds of the encumbered asset.",
        "Streamlined enforcement, including extrajudicial sale where permitted.",
      ],
      fa: [
        "مفهوم کارکردی واحد «حق وثیقه‌ای» که رهن، شرط حفظ مالکیت و اجاره تأمین مالی را دربر می‌گیرد.",
        "ایجاد با قرارداد وثیقه کتبی؛ قابلیت استناد در برابر اشخاص ثالث از طریق ثبت.",
        "تعیین اولویت بر پایه زمان ثبت، با قواعد ویژه برای وثیقه تأمین بهای کالا.",
        "تسری حق وثیقه به عواید حاصل از مال مورد وثیقه.",
        "اجرای ساده‌شده، از جمله فروش خارج از دادگاه در موارد مجاز.",
      ],
    },
    iran: {
      en: "Iran has not enacted the Model Law, but the movable collateral registry (سامانه ثبت وثایق منقول) operated under the Registration Organization performs a comparable notice-filing function for domestic lending.",
      fa: "ایران این قانون نمونه را تصویب نکرده است؛ اما «سامانه ثبت وثایق منقول» زیر نظر سازمان ثبت اسناد و املاک، کارکردی مشابه اعلان‌ثبتی برای تأمین مالی داخلی ایفا می‌کند.",
    },
    status: { en: "Model law 2016, with a Practice Guide (2019).", fa: "قانون نمونه ۲۰۱۶، همراه با راهنمای عملی ۲۰۱۹." },
  },

  "icsid-convention": {
    purpose: {
      en: "The 1965 Washington Convention created ICSID, a World Bank institution that arbitrates and conciliates investment disputes between a state and an investor of another contracting state, with awards enforceable as if they were final domestic judgments.",
      fa: "کنوانسیون واشنگتن ۱۹۶۵ نهاد ICSID را زیر مجموعه بانک جهانی ایجاد کرد؛ نهادی که اختلافات سرمایه‌گذاری میان یک دولت و سرمایه‌گذار تبعه دولت عضو دیگر را از طریق داوری و سازش حل می‌کند و آرای آن مانند احکام قطعی داخلی قابل اجراست.",
    },
    key: {
      en: [
        "Jurisdiction requires a legal dispute arising directly out of an investment plus written consent (usually in a BIT or investment law).",
        "Self-contained system: no review by national courts; only internal annulment under Article 52.",
        "Automatic enforcement of pecuniary obligations in all contracting states (Article 54).",
        "Provisional measures and Additional Facility for non-contracting-state cases.",
      ],
      fa: [
        "صلاحیت مستلزم اختلاف حقوقی ناشی مستقیم از سرمایه‌گذاری و رضایت کتبی طرفین (معمولاً در معاهده دوجانبه سرمایه‌گذاری یا قانون سرمایه‌گذاری) است.",
        "نظامی خودبسنده: بازبینی توسط دادگاه ملی وجود ندارد و تنها ابطال درون‌سیستمی موضوع ماده ۵۲ ممکن است.",
        "اجرای خودکار تعهدات مالی در همه کشورهای عضو (ماده ۵۴).",
        "دستورهای موقت و «تسهیلات اضافی» برای پرونده‌های مربوط به کشورهای غیرعضو.",
      ],
    },
    iran: {
      en: "Iran is not a party to the ICSID Convention. Investment disputes involving Iran are handled under bilateral investment treaties (BITs) with UNCITRAL or institutional arbitration, or under the Foreign Investment Promotion and Protection Act (FIPPA) mechanism.",
      fa: "ایران عضو کنوانسیون ICSID نیست. اختلافات سرمایه‌گذاری مرتبط با ایران بر پایه معاهدات دوجانبه سرمایه‌گذاری با قواعد آنسیترال یا داوری نهادی، و یا از طریق سازوکار قانون تشویق و حمایت سرمایه‌گذاری خارجی (FIPPA) رسیدگی می‌شود.",
    },
    status: { en: "In force since 1966; over 160 contracting states.", fa: "لازم‌الاجرا از ۱۹۶۶؛ بیش از ۱۶۰ کشور عضو." },
  },

  "unidroit-principles-international-commercial-contracts": {
    purpose: {
      en: "A non-binding restatement of general contract law for international commercial contracts (2016 edition, updated 2021), usable as the governing law chosen by the parties, as a gap-filler for CISG, or as a drafting benchmark.",
      fa: "بازنگارشی غیرالزام‌آور از قواعد عمومی قراردادها برای قراردادهای تجاری بین‌المللی (ویرایش ۲۰۱۶، به‌روزرسانی ۲۰۲۱) که می‌تواند به‌عنوان قانون حاکم منتخب طرفین، مکمل خلأهای CISG یا معیار تنظیم قرارداد به‌کار رود.",
    },
    key: {
      en: [
        "Freedom of contract, good faith and fair dealing, and binding usages.",
        "Formation, authority of agents, and validity (mistake, fraud, gross disparity).",
        "Interpretation, hardship and force majeure — often invoked in sanctions and price-shock cases.",
        "Performance, non-performance, termination, and calculation of damages.",
        "Set-off, assignment of rights, limitation periods, plurality of obligors, and illegality.",
      ],
      fa: [
        "آزادی قراردادی، حسن نیت و معامله منصفانه، و اعتبار عرف‌های تجاری.",
        "انعقاد قرارداد، اختیارات نماینده، و اعتبار (اشتباه، تدلیس، عدم تعادل فاحش).",
        "تفسیر قرارداد، عسر و حرج (Hardship) و فورس‌ماژور — که در پرونده‌های تحریم و جهش قیمت زیاد استناد می‌شود.",
        "اجرا، عدم اجرا، فسخ، و شیوه محاسبه خسارت.",
        "تهاتر، انتقال حقوق، مرور زمان، تعدد متعهدان، و عدم مشروعیت.",
      ],
    },
    iran: {
      en: "Frequently used by tribunals as supplementary reasoning in Iran-related arbitration, and a practical drafting reference for Iranian exporters negotiating hardship and force majeure clauses.",
      fa: "در داوری‌های مرتبط با ایران به‌عنوان استدلال تکمیلی به‌کار می‌رود و برای صادرکنندگان ایرانی مرجع عملی مفیدی در تنظیم شروط عسر و حرج و فورس‌ماژور است.",
    },
    status: { en: "Soft law; applies when chosen or referred to.", fa: "حقوق نرم؛ در صورت انتخاب یا ارجاع طرفین اعمال می‌شود." },
  },

  "geneva-convention-agency-international-sale-of-goods-1983": {
    purpose: {
      en: "The UNIDROIT Geneva Convention on Agency in the International Sale of Goods governs when the acts of an agent bind the principal to a third party in cross-border sales — the gap that CISG deliberately left open.",
      fa: "کنوانسیون ژنو یونیدروا درباره نمایندگی در بیع بین‌المللی کالا تعیین می‌کند که اقدامات نماینده در چه شرایطی اصیل را در برابر شخص ثالث متعهد می‌سازد؛ همان خلأیی که CISG عامدانه به آن نپرداخته است.",
    },
    key: {
      en: [
        "Applies where principal and third party have places of business in different states and the agent acts within an international sale.",
        "Authority may be express or implied; no writing requirement.",
        "Disclosed agency binds the principal directly; undisclosed agency binds the agent, with limited intervention rights.",
        "Apparent authority protects a third party acting in good faith.",
        "Termination of authority and its effects on third parties.",
      ],
      fa: [
        "زمانی اعمال می‌شود که اصیل و شخص ثالث محل تجارتشان در کشورهای مختلف باشد و نماینده در چارچوب یک بیع بین‌المللی عمل کند.",
        "اختیار نمایندگی می‌تواند صریح یا ضمنی باشد و شرط کتبی بودن ندارد.",
        "در نمایندگی آشکار، اصیل مستقیماً متعهد می‌شود؛ در نمایندگی پنهان، نماینده متعهد است و حق مداخله محدود پیش‌بینی شده است.",
        "نظریه اختیار ظاهری از شخص ثالث با حسن نیت حمایت می‌کند.",
        "پایان اختیار نمایندگی و آثار آن نسبت به اشخاص ثالث.",
      ],
    },
    iran: {
      en: "Not in force internationally (insufficient ratifications) and Iran is not a party. Agency questions in Iranian trade are governed by the Civil Code (وکالت) and the Commercial Code rules on commercial agents; define the agent's authority expressly in writing.",
      fa: "به دلیل نرسیدن به حد نصاب تصویب، در سطح بین‌المللی لازم‌الاجرا نشده و ایران عضو آن نیست. مسائل نمایندگی در تجارت ایران تابع مقررات وکالت در قانون مدنی و قواعد قانون تجارت درباره نمایندگان تجاری است؛ حدود اختیار نماینده را صریحاً و کتبی تعیین کنید.",
    },
    status: { en: "Concluded 1983; not yet in force.", fa: "منعقدشده در ۱۹۸۳؛ هنوز لازم‌الاجرا نشده است." },
  },
};
