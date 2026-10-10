// Localized saffron buyer pages (DE / ES / ZH). Facts limited to verified site information:
// grades, HS 0910.20, origin Khorasan, MOQ 1 kg, packing, documents, Incoterms, contacts.
export type SaffronLocaleKey = "de" | "es" | "zh";

export interface SaffronLocale {
  key: SaffronLocaleKey;
  lang: string; // BCP-47 for hreflang + lang attribute
  path: string;
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaQuote: string;
  ctaEmail: string;
  ctaWhatsapp: string;
  sections: { h2: string; paras?: string[]; bullets?: string[] }[];
  gradesTitle: string;
  grades: { name: string; text: string }[];
  quoteTitle: string;
  quoteIntro: string;
  quoteFields: string[];
  contactTitle: string;
  contactNote: string;
  labels: { email: string; phone: string; whatsapp: string; office: string };
  faqTitle: string;
  faqs: { q: string; a: string }[];
  emailSubject: string;
  emailBody: string;
  waText: string;
  breadcrumb: string;
}

export const SAFFRON_EN_PATH = "/iranian-saffron-exporter";

export const SAFFRON_LOCALES: Record<SaffronLocaleKey, SaffronLocale> = {
  de: {
    key: "de",
    lang: "de",
    path: "/de/safran-grosshandel",
    breadcrumb: "Safran Großhandel",
    title: "Iranischer Safran Großhandel – Lieferant aus dem Iran | Goodarzi Trading",
    description:
      "Safran Großhandel direkt aus dem Iran: Super Negin, Negin, Sargol und Pushal aus Khorasan für Importeure, Abpacker und Lebensmittelhersteller in Deutschland. Angebot per E-Mail anfordern.",
    keywords:
      "Safran Großhandel, iranischer Safran Großhandel, Safran Lieferant Iran, Safran kaufen Großhandel, Safran Importeur, Safran Private Label, Super Negin Safran, Safran HS 0910.20",
    eyebrow: "Safran · HS 0910.20 · Khorasan, Iran",
    h1: "Iranischer Safran im Großhandel – direkt vom Exporteur aus Teheran",
    intro:
      "Goodarzi Trading ist ein Import- und Exportunternehmen mit Sitz in Teheran. Wir liefern iranischen Safran aus der Region Khorasan an Importeure, Großhändler, Abpacker und Lebensmittelhersteller – lose in Exportverpackung oder als Private-Label-Ware unter Ihrer Marke.",
    ctaQuote: "Angebot anfordern",
    ctaEmail: "Anfrage per E-Mail",
    ctaWhatsapp: "WhatsApp",
    sections: [
      {
        h2: "Für wen ist dieses Angebot gedacht?",
        bullets: [
          "Gewürzimporteure und Großhändler, die eine zweite Bezugsquelle neben ihren bisherigen Lieferanten suchen",
          "Abpacker und Handelsmarken, die Safran in eigenen Gläsern, Dosen oder Briefchen verkaufen (Private Label)",
          "Lebensmittel- und Feinkosthersteller, die Safran als Zutat in größeren Mengen einsetzen",
        ],
      },
      {
        h2: "Was Sie für den Import nach Deutschland klären sollten",
        paras: [
          "Safran wird unter der Zolltarifnummer 0910.20 eingereiht. Für Lebensmittel gelten in der EU unter anderem Vorgaben zu Rückständen und Kennzeichnung. Welche Analysen und Unterlagen Ihre Lebensmittelüberwachung oder Ihr Kunde verlangt, legen Sie als Importeur fest – wir richten die Laboranalyse und die Exportdokumente danach aus.",
          "Eine Laboranalyse nach ISO 3632 (Crocin, Safranal, Picrocrocin) erstellen wir auf Anfrage vor dem Versand. Wir behaupten keine EU-Zertifizierung; bitte nennen Sie uns Ihre Prüfanforderungen bereits in der Anfrage.",
        ],
      },
      {
        h2: "Verpackung, Mindestmenge und Versand",
        bullets: [
          "Mindestbestellmenge: 1 kg",
          "Lose Exportverpackung bis 1 kg je Einheit oder Einzelhandelspackungen von 0,1 g bis 100 g (Glas, Dose, Briefchen)",
          "Private Label unter Ihrer Marke auf Anfrage",
          "Versand üblicherweise per Luftfracht ab Teheran (IKA); Lieferbedingungen EXW, FOB, CFR, CIF oder DAP nach Incoterms 2020",
          "Dokumente: Handelsrechnung, Packliste, Ursprungszeugnis der Handelskammer Teheran, Pflanzengesundheits- bzw. Gesundheitszeugnis, Transportdokument",
        ],
      },
    ],
    gradesTitle: "Safransorten",
    grades: [
      { name: "Super Negin", text: "Längste und kräftigste, vollständig rote Narbenfäden ohne gelben Griffel – für Käufer, die ein sehr einheitliches Erscheinungsbild wünschen." },
      { name: "Negin", text: "Vollständig rote Fäden, etwas kürzer als Super Negin; häufig von Abpackern und Herstellern gewählt." },
      { name: "Sargol", text: "Geschnittene rote Narben ohne Griffel – die gängigste Exportsorte für Industrie und Einzelhandel." },
      { name: "Pushal", text: "Rote Narben mit einem kurzen Stück gelbem Griffel, für ein traditionelles Erscheinungsbild." },
    ],
    quoteTitle: "So erhalten Sie ein Angebot",
    quoteIntro: "Senden Sie uns bitte folgende Angaben – je genauer, desto schneller können wir ein Proforma-Angebot erstellen:",
    quoteFields: ["Sorte (Super Negin / Negin / Sargol / Pushal)", "Menge in kg", "Verpackung bzw. Private Label", "Zielhafen oder Zielflughafen", "Gewünschte Lieferbedingung (z. B. CIF, DAP)", "Benötigte Analysen und Dokumente"],
    contactTitle: "Kontakt zum Exportvertrieb",
    contactNote: "Anfragen beantworten wir auf Englisch. Sie können uns gern auch auf Deutsch schreiben.",
    labels: { email: "E-Mail", phone: "Mobil / WhatsApp", whatsapp: "WhatsApp", office: "Büro Teheran" },
    faqTitle: "Häufige Fragen von Großhändlern",
    faqs: [
      { q: "Wie hoch ist die Mindestbestellmenge?", a: "Die Mindestbestellmenge beträgt 1 kg. Größere Mengen können mit anderen iranischen Produkten in einer Sendung kombiniert werden." },
      { q: "Ist Private Label möglich?", a: "Ja. Safran kann in Einzelhandelspackungen von 0,1 g bis 100 g unter Ihrer eigenen Marke abgepackt werden." },
      { q: "Welche Qualitätsnachweise gibt es?", a: "Auf Anfrage eine Laboranalyse nach ISO 3632 sowie Ursprungszeugnis, Pflanzengesundheits- bzw. Gesundheitszeugnis und die üblichen Handelsdokumente." },
      { q: "Wie läuft die Bestellung ab?", a: "Sie senden Sorte, Menge, Verpackung und Zielort. Sie erhalten eine Proforma-Rechnung; anschließend organisieren wir Analyse, Exportabfertigung und Versand nach der vereinbarten Incoterms-Regel." },
    ],
    emailSubject: "Safran Großhandel – Angebotsanfrage",
    emailBody: "Guten Tag,\n\nbitte senden Sie mir ein Angebot für iranischen Safran.\nSorte: \nMenge (kg): \nVerpackung / Private Label: \nZielort: \nLieferbedingung: \nFirma / Land: \n",
    waText: "Hello Goodarzi Trading, saffron wholesale inquiry from Germany.\nGrade: \nQuantity (kg): \nPacking: \nDestination: ",
  },
  es: {
    key: "es",
    lang: "es",
    path: "/es/azafran-irani-al-por-mayor",
    breadcrumb: "Azafrán iraní al por mayor",
    title: "Azafrán iraní al por mayor – Exportador y proveedor de Irán | Goodarzi Trading",
    description:
      "Proveedor de azafrán iraní al por mayor para importadores, envasadores y fabricantes en España: Super Negin, Negin, Sargol y Pushal de Khorasan, granel o marca blanca. Solicite cotización.",
    keywords:
      "azafrán iraní al por mayor, proveedor de azafrán iraní, exportador de azafrán de Irán, azafrán a granel, azafrán para importadores, azafrán marca blanca, azafrán Super Negin, azafrán HS 0910.20",
    eyebrow: "Azafrán · HS 0910.20 · Khorasan, Irán",
    h1: "Azafrán iraní al por mayor para importadores y envasadores",
    intro:
      "Goodarzi Trading es una empresa de importación y exportación con sede en Teherán. Suministramos azafrán iraní de la región de Khorasan a importadores, mayoristas, envasadores y fabricantes de alimentos, a granel o envasado con su propia marca.",
    ctaQuote: "Solicitar cotización",
    ctaEmail: "Consulta por correo",
    ctaWhatsapp: "WhatsApp",
    sections: [
      {
        h2: "Azafrán iraní en el mercado español",
        paras: [
          "España tiene una larga tradición en azafrán y su propia producción, con denominación de origen. Por eso el azafrán iraní se compra aquí sobre todo como materia prima para envasado, para la industria alimentaria y para marcas que necesitan volumen y una calidad estable a lo largo del año. El origen debe declararse correctamente en el etiquetado: nuestro producto es azafrán de Irán.",
        ],
      },
      {
        h2: "A quién va dirigido",
        bullets: [
          "Importadores y distribuidores de especias",
          "Envasadores y marcas blancas que venden azafrán en frascos, latas o sobres",
          "Fabricantes de alimentos y hostelería industrial que usan azafrán como ingrediente",
        ],
      },
      {
        h2: "Envase, pedido mínimo, documentos y envío",
        bullets: [
          "Pedido mínimo: 1 kg",
          "Granel de exportación hasta 1 kg por unidad o envases de 0,1 g a 100 g (vidrio, lata, sobre)",
          "Marca blanca bajo su marca, a petición",
          "Análisis de laboratorio ISO 3632 (crocina, safranal, picrocrocina) bajo solicitud",
          "Factura comercial, lista de empaque, certificado de origen de la Cámara de Comercio de Teherán, certificado fitosanitario o sanitario y documento de transporte",
          "Envío normalmente aéreo desde Teherán (IKA) en condiciones EXW, FOB, CFR, CIF o DAP (Incoterms 2020)",
        ],
      },
      {
        h2: "Requisitos de importación",
        paras: [
          "Los requisitos sanitarios y de etiquetado de la UE y de España los confirma el importador. Indíquenos en su consulta qué análisis y documentos necesita y preparamos el envío en consecuencia. No afirmamos disponer de certificaciones de la UE.",
        ],
      },
    ],
    gradesTitle: "Calidades de azafrán",
    grades: [
      { name: "Super Negin", text: "Estigmas totalmente rojos, los más largos y gruesos, sin estilo amarillo. Aspecto muy uniforme." },
      { name: "Negin", text: "Estigmas totalmente rojos, algo más cortos que Super Negin; muy usado por envasadores." },
      { name: "Sargol", text: "Estigmas rojos cortados sin estilo; la calidad de exportación más habitual para industria y venta al público." },
      { name: "Pushal", text: "Estigmas rojos con una parte corta del estilo amarillo; aspecto tradicional." },
    ],
    quoteTitle: "Cómo solicitar una cotización",
    quoteIntro: "Envíenos estos datos para preparar una factura proforma:",
    quoteFields: ["Calidad (Super Negin / Negin / Sargol / Pushal)", "Cantidad en kg", "Envase o marca blanca", "Puerto o aeropuerto de destino", "Incoterm deseado (p. ej. CIF, DAP)", "Análisis y documentos requeridos"],
    contactTitle: "Contacto con ventas de exportación",
    contactNote: "Respondemos en inglés; puede escribirnos en español.",
    labels: { email: "Correo", phone: "Móvil / WhatsApp", whatsapp: "WhatsApp", office: "Oficina Teherán" },
    faqTitle: "Preguntas frecuentes de compradores mayoristas",
    faqs: [
      { q: "¿Cuál es el pedido mínimo?", a: "El pedido mínimo es de 1 kg. Volúmenes mayores pueden consolidarse con otros productos iraníes en un mismo envío." },
      { q: "¿Ofrecen marca blanca?", a: "Sí, envasamos azafrán de 0,1 g a 100 g con la marca del comprador." },
      { q: "¿Qué documentación de calidad se entrega?", a: "Análisis ISO 3632 bajo solicitud, certificado de origen, certificado fitosanitario o sanitario y documentos comerciales." },
      { q: "¿Cuál es el código arancelario del azafrán?", a: "El azafrán se clasifica en la partida SA 0910.20." },
    ],
    emailSubject: "Azafrán al por mayor – solicitud de cotización",
    emailBody: "Hola,\n\nSolicito cotización de azafrán iraní.\nCalidad: \nCantidad (kg): \nEnvase / marca blanca: \nDestino: \nIncoterm: \nEmpresa / país: \n",
    waText: "Hello Goodarzi Trading, saffron wholesale inquiry from Spain.\nGrade: \nQuantity (kg): \nPacking: \nDestination: ",
  },
  zh: {
    key: "zh",
    lang: "zh-Hans",
    path: "/zh/iranian-saffron-supplier",
    breadcrumb: "伊朗藏红花批发",
    title: "伊朗藏红花批发供应商 – 伊朗出口商 | Goodarzi Trading",
    description:
      "伊朗藏红花出口商，来自呼罗珊产区：Super Negin、Negin、Sargol、Pushal 等级，散装或贴牌包装，面向进口商、批发商及食品企业。请通过电子邮件询价。",
    keywords:
      "伊朗藏红花, 伊朗藏红花批发, 伊朗藏红花供应商, 伊朗藏红花出口商, 藏红花进口, 藏红花散装, 藏红花贴牌, 西红花批发, 藏红花 HS 0910.20",
    eyebrow: "藏红花 · HS 0910.20 · 伊朗呼罗珊",
    h1: "伊朗藏红花批发 – 德黑兰出口商直接供货",
    intro:
      "Goodarzi Trading 是一家总部位于德黑兰的进出口公司，向进口商、批发商、分装企业和食品生产商供应伊朗呼罗珊产区的藏红花（西红花），可提供散装出口包装或客户自有品牌（贴牌）包装。",
    ctaQuote: "在线询价",
    ctaEmail: "电子邮件询价",
    ctaWhatsapp: "WhatsApp",
    sections: [
      {
        h2: "中国买家请注意：推荐使用电子邮件联系",
        paras: [
          "由于 WhatsApp 在中国大陆通常无法使用，请优先通过电子邮件 info@goodarzitrading.ir 或电话联系我们。我们使用英文回复，您也可以用中文来信。",
        ],
      },
      {
        h2: "进口前需确认的事项",
        paras: [
          "藏红花的海关编码为 HS 0910.20。进口食品在中国可能涉及境外生产企业注册、检验检疫及标签等要求，具体要求请由进口商向海关或代理确认。请在询价时告知所需的检测项目和单证，我们将据此准备检测与出口文件。我们不声称已取得中国相关注册。",
        ],
      },
      {
        h2: "包装、起订量、单证与运输",
        bullets: [
          "起订量：1 公斤",
          "散装出口包装（每件最多 1 公斤），或 0.1 克至 100 克零售包装（玻璃瓶、铁罐、小袋）",
          "可按买家品牌贴牌包装",
          "可按需提供 ISO 3632 实验室分析（藏红花素、藏红花醛、苦藏花素）",
          "商业发票、装箱单、德黑兰商会原产地证书、植物检疫或卫生证书及运输单据",
          "通常从德黑兰（IKA）空运，贸易条款可选 EXW、FOB、CFR、CIF、DAP（2020 国际贸易术语解释通则）",
        ],
      },
    ],
    gradesTitle: "藏红花等级",
    grades: [
      { name: "Super Negin", text: "最长最粗的全红柱头，不带黄色花柱，外观最均匀。" },
      { name: "Negin", text: "全红柱头，略短于 Super Negin，常用于分装和食品加工。" },
      { name: "Sargol", text: "剪切的红色柱头，不带花柱，是最常见的出口等级。" },
      { name: "Pushal", text: "红色柱头带少量黄色花柱，传统外观。" },
    ],
    quoteTitle: "如何获取报价",
    quoteIntro: "请提供以下信息，以便我们出具形式发票：",
    quoteFields: ["等级（Super Negin / Negin / Sargol / Pushal）", "数量（公斤）", "包装或贴牌要求", "目的港或目的机场", "贸易条款（如 CIF、DAP）", "所需检测与单证"],
    contactTitle: "出口销售联系方式",
    contactNote: "我们用英文回复，欢迎用中文来信。",
    labels: { email: "电子邮件", phone: "手机 / WhatsApp", whatsapp: "WhatsApp", office: "德黑兰办公室" },
    faqTitle: "批发买家常见问题",
    faqs: [
      { q: "最低起订量是多少？", a: "最低起订量为 1 公斤，较大批量可与其他伊朗产品拼箱发运。" },
      { q: "可以贴牌包装吗？", a: "可以，可按买家品牌提供 0.1 克至 100 克的零售包装。" },
      { q: "提供哪些质量文件？", a: "可按需提供 ISO 3632 实验室分析，以及原产地证书、植物检疫或卫生证书和商业单据。" },
      { q: "在中国大陆如何联系？", a: "请发送电子邮件至 info@goodarzitrading.ir，或致电 +98 919 123 8554 / +98 21 44511076。" },
    ],
    emailSubject: "Saffron wholesale inquiry (China) / 藏红花批发询价",
    emailBody: "您好，\n\n我想询价伊朗藏红花。\n等级 Grade: \n数量 Quantity (kg): \n包装 Packing: \n目的地 Destination: \n贸易条款 Incoterm: \n公司 Company: \n",
    waText: "Hello Goodarzi Trading, saffron wholesale inquiry from China.\nGrade: \nQuantity (kg): \nPacking: \nDestination: ",
  },
};

export const SAFFRON_HREFLANG = (site: string) => [
  { rel: "alternate", hrefLang: "en", href: `${site}${SAFFRON_EN_PATH}` },
  ...Object.values(SAFFRON_LOCALES).map((l) => ({ rel: "alternate", hrefLang: l.lang, href: `${site}${l.path}` })),
  { rel: "alternate", hrefLang: "x-default", href: `${site}${SAFFRON_EN_PATH}` },
];
