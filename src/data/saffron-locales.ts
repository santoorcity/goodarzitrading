// Localized saffron buyer pages. ES/ZH/JA use approved batch-specific supply facts.
// DE and the existing reciprocal language cluster are preserved.
export type SaffronLocaleKey = "de" | "es" | "zh" | "ja" | "ko";

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
    "key": "es",
    "lang": "es",
    "path": "/es/azafran-irani-al-por-mayor",
    "breadcrumb": "Azafrán iraní al por mayor",
    "title": "Azafrán iraní al por mayor para España | Goodarzi Trading",
    "description": "Proveedor de azafrán iraní para importadores, distribuidores y fabricantes en España. Seis calidades, latas de 250 g netos y COA por lote. Solicite oferta y muestras.",
    "keywords": "azafrán iraní al por mayor, proveedor de azafrán iraní, azafrán a granel, exportador de azafrán, azafrán marca blanca, importación de azafrán",
    "eyebrow": "Azafrán · HS 0910.20 · Qainat, Irán",
    "h1": "Azafrán iraní al por mayor para compradores en España",
    "intro": "Goodarzi Trading, empresa de importación y exportación con sede en Teherán, obtiene azafrán de agricultores de Qainat, en Jorasán del Sur. Atendemos consultas de importadores de especias, mayoristas, distribuidores, fabricantes de alimentos y envasadores que buscan azafrán de origen iraní.",
    "ctaQuote": "Solicitar oferta y muestras",
    "ctaEmail": "Consultar por correo",
    "ctaWhatsapp": "WhatsApp",
    "sections": [
        {
            "h2": "Suministro para importadores, envasadores y marca blanca",
            "paras": [
                "Solicite azafrán a granel para distribución o uso como ingrediente. Los proyectos de marca blanca, el envase personalizado y las cantidades se estudian según los requisitos del comprador; las condiciones se confirman en la oferta. El origen del producto es Irán y debe declararse correctamente."
            ]
        },
        {
            "h2": "Selección y limpieza según la calidad",
            "paras": [
                "Cada lote se clasifica y limpia antes del envasado. Se retiran las partes amarillas no deseadas, el polvo, el polen, las impurezas y los fragmentos que no corresponden a la calidad elegida. Pushal y Bunch conservan la parte del estilo que define su presentación; los hilos rotos se comercializan por separado como Narmah."
            ]
        },
        {
            "h2": "Latas de 250 g netos y pedidos a granel",
            "bullets": [
                "Latas metálicas decorativas de 250 g de peso neto.",
                "Pedidos a granel y envases personalizados: indique cantidad y formato para confirmar las opciones.",
                "Solicite muestras e indique la calidad, los ensayos y el destino; disponibilidad y condiciones se confirman por pedido."
            ]
        },
        {
            "h2": "COA del lote después del envasado y sellado",
            "paras": [
                "Las muestras se envían al laboratorio después de envasar y sellar el producto. El certificado de análisis (COA) del lote puede incluir crocina (color), picrocrocina (amargor) y safranal (aroma). ISO 3632 es una referencia de ensayo, no una certificación de la empresa ni una garantía de resultados.",
                "Para importar a España, confirme con su agente o autoridad competente los requisitos alimentarios, de residuos y de etiquetado. Los documentos de exportación y el transporte se acuerdan para cada envío; ningún documento o resultado se promete de forma automática."
            ]
        }
    ],
    "gradesTitle": "Seis calidades comerciales de azafrán",
    "grades": [
        {
            "name": "Super Negin",
            "text": "Estigmas rojos largos y separados, sin estilo; selección especialmente rigurosa."
        },
        {
            "name": "Negin",
            "text": "Estigmas rojos sin estilo, con una selección menos estricta que Super Negin."
        },
        {
            "name": "Sargol",
            "text": "Puntas rojas del estigma, sin estilo; hilos más cortos."
        },
        {
            "name": "Pushal",
            "text": "Estigmas rojos con una pequeña parte del estilo adherida."
        },
        {
            "name": "Bunch (Dokhtar Pich)",
            "text": "Estigmas completos con el estilo, agrupados en manojos."
        },
        {
            "name": "Broken Threads (Narmah)",
            "text": "Fragmentos de estigmas rojos vendidos como una calidad comercial propia."
        }
    ],
    "quoteTitle": "Solicite una oferta de exportación y muestras",
    "quoteIntro": "Para una consulta comercial concreta, envíe:",
    "quoteFields": [
        "Empresa, país y uso previsto: distribución, envasado o fabricación",
        "Calidad y cantidad en kg",
        "Envase: lata de 250 g netos, granel o proyecto de marca blanca",
        "Destino y condiciones de entrega deseadas",
        "Requisitos del COA, documentos y solicitud de muestras"
    ],
    "contactTitle": "Contacto para compradores profesionales",
    "contactNote": "Respondemos en inglés; puede escribirnos en español.",
    "labels": {
        "email": "Correo",
        "phone": "Móvil / WhatsApp",
        "whatsapp": "WhatsApp",
        "office": "Oficina de Teherán"
    },
    "faqTitle": "Preguntas de importadores de azafrán",
    "faqs": [
        {
            "q": "¿Qué calidades de azafrán iraní puedo consultar?",
            "a": "Super Negin, Negin, Sargol, Pushal, Bunch (Dokhtar Pich) y Broken Threads (Narmah). La especificación se confirma por lote."
        },
        {
            "q": "¿Cómo se limpia el azafrán?",
            "a": "Se clasifica y se retiran polvo, polen, impurezas, partes amarillas no deseadas y fragmentos ajenos a la calidad elegida. Pushal y Bunch conservan su parte característica del estilo."
        },
        {
            "q": "¿Qué envases y opciones de marca blanca hay?",
            "a": "Se presentan latas metálicas de 250 g netos. El suministro a granel y los proyectos de marca blanca o envase personalizado se estudian según la solicitud del comprador."
        },
        {
            "q": "¿Cuándo se realiza el análisis del lote?",
            "a": "Las muestras se envían al laboratorio después del envasado y sellado. Los resultados y cualquier categoría ISO 3632 dependen del COA del lote, sin valores garantizados."
        },
        {
            "q": "¿Cómo solicito una oferta o muestras para España?",
            "a": "Indique empresa, calidad, cantidad, envase, destino y requisitos de análisis por correo, formulario de consulta o WhatsApp. Las condiciones de las muestras y de suministro se confirman en la respuesta."
        }
    ],
    "emailSubject": "Azafrán iraní al por mayor — oferta y muestras",
    "emailBody": "Hola, solicito oferta y condiciones de muestras.\nEmpresa / país: \nCalidad: \nCantidad (kg): \nEnvase / marca blanca: \nDestino: \nAnálisis y documentos: ",
    "waText": "Hello Goodarzi Trading, saffron wholesale inquiry from Spain.\nCompany: \nGrade: \nQuantity: \nPacking: \nDestination: \nSamples / COA requirements: "
},
  zh: {
    "key": "zh",
    "lang": "zh-Hans",
    "path": "/zh/iranian-saffron-supplier",
    "breadcrumb": "伊朗藏红花批发",
    "title": "伊朗藏红花批发供应商｜散装与贴牌询价 | Goodarzi Trading",
    "description": "面向中国进口商、批发商及食品企业的伊朗藏红花供应咨询。六种商业等级、250克净重金属罐、包装密封后按批次检测。欢迎邮件询价及咨询样品。",
    "keywords": "伊朗藏红花供应商, 伊朗藏红花批发, 西红花批发, 藏红花散装, 藏红花进口, 伊朗藏红花出口商, 藏红花贴牌",
    "eyebrow": "藏红花 · HS 0910.20 · 伊朗卡恩",
    "h1": "面向中国专业买家的伊朗藏红花批发供应",
    "intro": "Goodarzi Trading 是一家位于德黑兰的进出口公司，从伊朗南呼罗珊省卡恩（Qainat）的农户采购藏红花（西红花）。我们接受香料进口商、批发商、经销商、食品生产商及自有品牌分装企业的采购咨询。",
    "ctaQuote": "询价及咨询样品",
    "ctaEmail": "优先邮件询价",
    "ctaWhatsapp": "WhatsApp",
    "sections": [
        {
            "h2": "中国大陆买家：优先通过电子邮件联系",
            "paras": [
                "请发送邮件至 info@goodarzitrading.ir，注明公司、产品等级、采购量和目的地。WhatsApp 在中国大陆可能无法可靠使用；原有在线询价及电话联系方式仍可使用。我们用英文回复，也欢迎中文来信。"
            ]
        },
        {
            "h2": "散装采购、食品原料与贴牌项目",
            "paras": [
                "可咨询用于批发分销或食品加工的散装藏红花。贴牌及定制包装项目按买家的需求评估，数量、包装和供货条件逐单确认。我们不宣称已获得中国进口所需的任何注册或认证。"
            ]
        },
        {
            "h2": "按等级分选与清洁",
            "paras": [
                "包装前对每批藏红花进行分选和清洁，去除不需要的黄色部分、灰尘、花粉、杂质及不符合所选等级的碎片。Pushal 和 Bunch 保留其等级特有的花柱部分；红色碎丝作为 Narmah 独立商业等级销售。"
            ]
        },
        {
            "h2": "250克净重金属罐与散装询价",
            "bullets": [
                "装饰金属罐，每罐净重250克。",
                "散装出口、定制及贴牌包装请注明数量和具体需求，选项逐单确认。",
                "欢迎咨询样品；样品条件、检测要求及寄送安排需确认。"
            ]
        },
        {
            "h2": "包装密封后的批次COA与进口准备",
            "paras": [
                "产品包装并密封后取样送检。批次分析证书（COA）的检测项目可包括藏红花素（色泽）、苦藏花素（苦味）及藏红花醛（香气）。ISO 3632 是检测参考标准，不代表企业认证，也不保证固定检测结果。",
                "中国进口商应向海关或代理确认食品进口、境外生产企业注册、检验检疫及标签等适用要求。出口单证、检测项目和运输条件按具体订单及目的地要求商定。"
            ]
        }
    ],
    "gradesTitle": "六种藏红花商业等级",
    "grades": [
        {
            "name": "Super Negin",
            "text": "较长、分离的红色柱头，去除花柱，筛选要求更严格。"
        },
        {
            "name": "Negin",
            "text": "去除花柱的全红柱头，筛选要求较Super Negin略宽。"
        },
        {
            "name": "Sargol",
            "text": "去除花柱的红色柱头尖部，丝较短。"
        },
        {
            "name": "Pushal",
            "text": "红色柱头带少量花柱。"
        },
        {
            "name": "Bunch (Dokhtar Pich)",
            "text": "保留花柱的完整柱头，扎成束。"
        },
        {
            "name": "Broken Threads (Narmah)",
            "text": "红色柱头碎丝，作为独立商业等级供应咨询。"
        }
    ],
    "quoteTitle": "获取出口报价及样品条件",
    "quoteIntro": "请在邮件中提供以下采购信息：",
    "quoteFields": [
        "公司、国家及用途：分销、分装或食品生产",
        "等级与采购数量（公斤）",
        "250克净重金属罐、散装或贴牌要求",
        "目的地及期望的交货条件",
        "COA检测项目、单证要求与样品需求"
    ],
    "contactTitle": "专业采购联系方式",
    "contactNote": "中国大陆请优先使用邮件。我们用英文回复，欢迎中文来信。",
    "labels": {
        "email": "电子邮件",
        "phone": "手机 / WhatsApp",
        "whatsapp": "WhatsApp",
        "office": "德黑兰办公室"
    },
    "faqTitle": "藏红花进口商常见问题",
    "faqs": [
        {
            "q": "有哪些伊朗藏红花商业等级？",
            "a": "Super Negin、Negin、Sargol、Pushal、Bunch（Dokhtar Pich）及Broken Threads（Narmah）。具体规格按批次确认。"
        },
        {
            "q": "如何进行分选和清洁？",
            "a": "去除灰尘、花粉、杂质、不需要的黄色部分及不符合所选等级的碎片。Pushal和Bunch保留其特有的花柱部分。"
        },
        {
            "q": "可以询问散装或贴牌包装吗？",
            "a": "可以。现介绍250克净重金属罐；散装、定制和贴牌项目按买家需求评估，条件逐单确认。"
        },
        {
            "q": "COA是在什么时候检测的？",
            "a": "产品包装并密封后取样送检。检测项目及ISO 3632类别以该批次COA为准，不保证固定数值。"
        },
        {
            "q": "中国大陆买家如何询价或咨询样品？",
            "a": "优先发送邮件至info@goodarzitrading.ir，注明公司、等级、数量、包装、目的地及检测要求。样品与供货条件经回复确认，也可使用现有在线询价或电话。"
        }
    ],
    "emailSubject": "Iranian saffron inquiry / 伊朗藏红花报价及样品",
    "emailBody": "您好，请提供伊朗藏红花报价及样品条件。\nCompany 公司: \nGrade 等级: \nQuantity 数量(kg): \nPacking 包装: \nDestination 目的地: \nCOA / documents 检测与单证: ",
    "waText": "Hello Goodarzi Trading, saffron wholesale inquiry from China.\nCompany: \nGrade: \nQuantity: \nPacking: \nDestination: \nSamples / COA requirements: "
},
  ja: {
    "key": "ja",
    "lang": "ja",
    "path": "/ja/iranian-saffron-wholesale",
    "breadcrumb": "イラン産サフラン卸売",
    "title": "イラン産サフラン卸売・業務用｜輸入・OEM相談 | Goodarzi Trading",
    "description": "日本の輸入商社、卸売業者、食品メーカー向けのイラン産サフラン。6種類のグレード、正味250gの金属缶、包装・密封後のロット別COA。見積もり・サンプルをご相談ください。",
    "keywords": "イラン産サフラン 卸売, サフラン 業務用, サフラン 輸入, サフラン バルク, サフラン 輸出業者, サフラン OEM, サフラン サプライヤー",
    "eyebrow": "サフラン · HS 0910.20 · イラン・カイン",
    "h1": "日本の業務用バイヤー向け イラン産サフラン卸売",
    "intro": "Goodarzi Trading はテヘランを拠点とする輸出入会社です。イランの南ホラーサーン州カイン（Qainat）の農家からサフランを調達し、香辛料の輸入商社、卸売業者、販売代理店、食品メーカー、自社ブランドの包装事業者からの調達相談を受け付けています。",
    "ctaQuote": "見積もり・サンプル相談",
    "ctaEmail": "メールで問い合わせ",
    "ctaWhatsapp": "WhatsApp",
    "sections": [
        {
            "h2": "卸売・食品原料・OEMの調達相談",
            "paras": [
                "流通向け、食品原料向けのバルク供給をご相談いただけます。OEMや自社ブランド包装は、ご希望の仕様に基づいて検討します。数量、包装、供給条件は案件ごとに確認します。"
            ]
        },
        {
            "h2": "グレードに合わせた選別とクリーニング",
            "paras": [
                "包装前に各ロットを選別し、不要な黄色い部分、ほこり、花粉、異物、選択したグレードに合わない断片を取り除きます。PushalとBunchはグレードの特徴である花柱部分を残します。赤い柱頭の折れた部分はNarmahとして別の商業グレードで扱います。"
            ]
        },
        {
            "h2": "正味250gの金属缶とバルク注文",
            "bullets": [
                "装飾金属缶入り、正味重量250g。",
                "バルク輸出、特注包装、OEMは、ご希望の数量と仕様をお知らせください。対応条件を個別に確認します。",
                "サンプルをご希望の場合は、グレード、検査項目、送付先をご連絡ください。提供条件と発送方法を確認します。"
            ]
        },
        {
            "h2": "包装・密封後のロット別COAと輸入確認",
            "paras": [
                "製品の包装と密封が完了した後にサンプルを採取して分析を依頼します。ロット別の分析証明書（COA）では、クロシン（色価）、ピクロクロシン（苦味）、サフラナール（香り）などを検査対象にできます。ISO 3632は試験の参考規格であり、企業の認証や一定の分析値を保証するものではありません。",
                "日本への輸入に適用される食品衛生、残留農薬、表示などの要件は、輸入者様が検疫所や通関業者にご確認ください。必要書類、検査項目、輸送条件は注文ごとに合意します。日本の認証取得を主張するものではありません。"
            ]
        }
    ],
    "gradesTitle": "6種類の商業グレード",
    "grades": [
        {
            "name": "Super Negin",
            "text": "花柱を除いた長い赤色の柱頭。分離した糸を厳格に選別します。"
        },
        {
            "name": "Negin",
            "text": "花柱を除いた赤色の柱頭。Super Neginより選別条件がやや緩やかです。"
        },
        {
            "name": "Sargol",
            "text": "花柱を除いた赤色の柱頭の先端部分。糸は短めです。"
        },
        {
            "name": "Pushal",
            "text": "赤色の柱頭に少量の花柱が付いたグレード。"
        },
        {
            "name": "Bunch (Dokhtar Pich)",
            "text": "花柱を残した完全な柱頭を束にしたもの。"
        },
        {
            "name": "Broken Threads (Narmah)",
            "text": "赤色の柱頭の折れた部分を、独立した商業グレードとして扱います。"
        }
    ],
    "quoteTitle": "輸出見積もり・サンプルのご相談",
    "quoteIntro": "具体的な調達相談のため、以下をお知らせください。",
    "quoteFields": [
        "会社名、国、用途（流通・小分け包装・食品製造）",
        "グレードと数量（kg）",
        "正味250g缶、バルク、OEMなどの包装仕様",
        "仕向地と希望する引渡条件",
        "COAの検査項目、必要書類、サンプルのご希望"
    ],
    "contactTitle": "業務用バイヤーのお問い合わせ",
    "contactNote": "英語で回答します。日本語でのお問い合わせも受け付けています。",
    "labels": {
        "email": "メール",
        "phone": "携帯 / WhatsApp",
        "whatsapp": "WhatsApp",
        "office": "テヘラン事務所"
    },
    "faqTitle": "サフラン輸入・卸売のよくある質問",
    "faqs": [
        {
            "q": "どのグレードを相談できますか？",
            "a": "Super Negin、Negin、Sargol、Pushal、Bunch（Dokhtar Pich）、Broken Threads（Narmah）の6種類です。仕様はロットごとに確認します。"
        },
        {
            "q": "どのように選別・清掃しますか？",
            "a": "ほこり、花粉、異物、不要な黄色い部分、グレードに合わない断片を取り除きます。PushalとBunchは特徴となる花柱部分を残します。"
        },
        {
            "q": "包装とOEMの選択肢は？",
            "a": "正味250gの金属缶をご案内しています。バルク、特注包装、OEMは、ご希望に基づき個別に条件を確認します。"
        },
        {
            "q": "COAの分析はいつ行いますか？",
            "a": "包装・密封後に採取したサンプルで分析を依頼します。分析結果やISO 3632カテゴリーはロット別COAに基づき、固定値を保証しません。"
        },
        {
            "q": "日本向けの見積もりやサンプルはどう依頼しますか？",
            "a": "会社名、グレード、数量、包装、仕向地、検査要件をメール、既存の問い合わせフォーム、WhatsAppでお送りください。サンプルと供給の条件は返信時に確認します。"
        }
    ],
    "emailSubject": "Iranian saffron inquiry / サフラン見積もり・サンプル相談",
    "emailBody": "イラン産サフランの見積もりとサンプル条件をお願いします。\nCompany: \nGrade: \nQuantity (kg): \nPacking / OEM: \nDestination: \nCOA / documents: ",
    "waText": "Hello Goodarzi Trading, saffron wholesale inquiry from Japan.\nCompany: \nGrade: \nQuantity: \nPacking: \nDestination: \nSamples / COA requirements: "
  },
  ko: {
    key: "ko",
    lang: "ko-KR",
    path: "/ko/iranian-saffron-wholesale",
    breadcrumb: "이란산 사프란 도매",
    title: "이란산 사프란 도매·수입 상담 | Goodarzi Trading",
    description:
      "한국 수입업체, 도매상, 유통업체와 식품 제조사를 위한 이란산 사프란 공급 상담. 6개 상업 등급, 순중량 250g 금속 캔, 포장·밀봉 후 로트별 COA. 견적과 샘플을 문의하세요.",
    keywords:
      "이란산 사프란 도매, 사프란 수입, 사프란 도매 공급업체, 이란 사프란 수출, 사프란 벌크, 사프란 OEM, 사프란 수입업체",
    eyebrow: "사프란 · HS 0910.20 · 이란 카이낫",
    h1: "한국 기업을 위한 이란산 사프란 도매 공급",
    intro:
      "Goodarzi Trading은 테헤란에 기반을 둔 수출입 회사입니다. 이란 남호라산 카이낫(Qainat) 지역 농가에서 사프란을 조달하며, 사프란 수입업체·도매상·유통업체·식품 제조사·자체 브랜드 포장업체의 구매 상담을 받습니다.",
    ctaQuote: "견적·샘플 문의",
    ctaEmail: "이메일로 문의",
    ctaWhatsapp: "WhatsApp",
    sections: [
      {
        h2: "수입업체·도매상·식품 제조사를 위한 공급",
        paras: [
          "유통 및 식품 원료용 벌크 사프란을 상담할 수 있습니다. OEM과 자체 브랜드 포장은 구매자의 사양에 따라 검토하며, 수량·포장·공급 조건은 주문별로 확인합니다. 식품 제조사와 확인된 구매자를 대리하는 공식 담당자의 문의도 환영합니다.",
        ],
      },
      {
        h2: "등급별 선별과 세척",
        paras: [
          "포장 전에 각 로트를 선별하고 불필요한 노란 부분, 먼지, 꽃가루, 이물질 및 선택한 등급에 맞지 않는 조각을 제거합니다. Pushal과 Bunch는 등급의 특징인 화주 부분을 남기며, 붉은 암술머리의 부서진 부분은 Narmah라는 별도 상업 등급으로 취급합니다.",
        ],
      },
      {
        h2: "순중량 250g 금속 캔과 벌크 주문",
        bullets: [
          "장식용 금속 캔 포장, 캔당 순중량 250g.",
          "벌크 수출, 맞춤 포장 및 OEM은 희망 수량과 포장 사양을 알려주시면 가능 여부와 조건을 확인합니다.",
          "샘플을 원하시면 등급, 필요한 검사 항목 및 배송지를 알려주세요. 샘플 제공 조건과 발송 방법은 회신 시 확인합니다.",
        ],
      },
      {
        h2: "포장·밀봉 후 로트별 COA와 수입 준비",
        paras: [
          "제품을 포장하고 밀봉한 후 샘플을 채취하여 분석을 의뢰합니다. 로트별 분석증명서(COA)에는 크로신(색도), 피크로크로신(쓴맛), 사프라날(향) 등의 항목을 포함할 수 있습니다. ISO 3632는 시험 참고 규격이며, 회사 인증이나 고정된 분석 결과를 의미하지 않습니다.",
          "한국 수입에 적용되는 식품 위생, 잔류농약, 표시 및 통관 요건은 수입자께서 관할 기관이나 통관 대행사에 확인해 주셔야 합니다. 필요한 서류, 검사 항목 및 운송 조건은 주문과 목적지에 따라 협의합니다.",
        ],
      },
    ],
    gradesTitle: "6가지 상업용 사프란 등급",
    grades: [
      { name: "Super Negin", text: "화주가 제거된 길고 붉은 암술머리로, 균일한 외관을 원하는 구매자를 위한 엄선 등급입니다." },
      { name: "Negin", text: "화주가 제거된 붉은 암술머리로, Super Negin보다 선별 조건이 조금 완화된 등급입니다." },
      { name: "Sargol", text: "화주가 제거된 붉은 암술머리 끝부분으로, 실이 비교적 짧습니다." },
      { name: "Pushal", text: "붉은 암술머리에 짧은 화주 일부가 붙어 있는 등급입니다." },
      { name: "Bunch (Dokhtar Pich)", text: "화주를 포함한 완전한 암술머리를 묶은 형태입니다." },
      { name: "Broken Threads (Narmah)", text: "붉은 암술머리의 부서진 부분을 별도의 상업 등급으로 취급합니다." },
    ],
    quoteTitle: "수출 견적과 샘플 조건 문의",
    quoteIntro: "구체적인 구매 상담을 위해 다음 정보를 보내주세요.",
    quoteFields: [
      "회사명, 국가 및 용도(유통·소분 포장·식품 제조)",
      "등급과 수량(kg)",
      "순중량 250g 캔, 벌크 또는 OEM 포장 사양",
      "목적지와 희망 인도 조건",
      "COA 검사 항목, 필요한 서류 및 샘플 요청",
    ],
    contactTitle: "전문 구매 상담 연락처",
    contactNote: "영어로 답변드리며, 한국어 문의도 접수합니다.",
    labels: { email: "이메일", phone: "휴대전화 / WhatsApp", whatsapp: "WhatsApp", office: "테헤란 사무소" },
    faqTitle: "사프란 수입·도매 자주 묻는 질문",
    faqs: [
      { q: "어떤 이란산 사프란 등급을 상담할 수 있나요?", a: "Super Negin, Negin, Sargol, Pushal, Bunch(Dokhtar Pich), Broken Threads(Narmah)의 6가지입니다. 구체적인 사양은 로트별로 확인합니다." },
      { q: "사프란은 어떻게 선별하고 세척하나요?", a: "먼지, 꽃가루, 이물질, 불필요한 노란 부분 및 선택한 등급에 맞지 않는 조각을 제거합니다. Pushal과 Bunch는 특징적인 화주 부분을 남깁니다." },
      { q: "벌크 또는 OEM 포장을 상담할 수 있나요?", a: "가능합니다. 순중량 250g 금속 캔을 안내하며, 벌크·맞춤 포장·OEM 프로젝트는 구매자의 요구와 수량에 따라 조건을 확인합니다." },
      { q: "COA 분석은 언제 진행되나요?", a: "제품을 포장하고 밀봉한 후 샘플을 채취하여 분석을 의뢰합니다. 결과와 ISO 3632 분류는 해당 로트의 COA에 따르며 고정 수치를 보장하지 않습니다." },
      { q: "한국에서 견적이나 샘플을 어떻게 요청하나요?", a: "회사명, 등급, 수량, 포장, 목적지 및 검사 요건을 이메일, 기존 문의 양식 또는 WhatsApp으로 보내주세요. 샘플과 공급 조건은 회신 시 확인합니다." },
    ],
    emailSubject: "Iranian saffron inquiry / 이란산 사프란 견적·샘플 문의",
    emailBody: "이란산 사프란 견적과 샘플 조건을 요청합니다.\n회사명 / 국가: \n등급: \n수량(kg): \n포장 / OEM: \n목적지: \nCOA / 서류: ",
    waText: "Hello Goodarzi Trading, saffron wholesale inquiry from South Korea.\nCompany: \nGrade: \nQuantity: \nPacking: \nDestination: \nSamples / COA requirements: ",
  },
};

export const SAFFRON_HREFLANG = (site: string) => [
  { rel: "alternate", hrefLang: "en", href: `${site}${SAFFRON_EN_PATH}` },
  ...Object.values(SAFFRON_LOCALES).map((l) => ({ rel: "alternate", hrefLang: l.lang, href: `${site}${l.path}` })),
  { rel: "alternate", hrefLang: "x-default", href: `${site}${SAFFRON_EN_PATH}` },
];
