type Props = {
  locale: string;
};

const SERVICES = [
  {
    name: 'Химические защитные работы',
    nameUz: 'Kimyoviy himoya ishlari',
    nameEn: 'Chemical Protection Works',
    desc: 'Нанесение химически стойких эпоксидных, полиуретановых и фенольных покрытий для защиты оборудования, резервуаров и конструкций от кислот, щелочей и агрессивных сред',
  },
  {
    name: 'Пескоструйные работы',
    nameUz: 'Peskostruyka ishlari',
    nameEn: 'Sandblasting Works',
    desc: 'Профессиональная абразивоструйная очистка металлических поверхностей до степени Sa 2.5 / Sa 3 по ISO 8501 перед нанесением защитных покрытий',
  },
  {
    name: 'Лакокрасочные работы',
    nameUz: "Bo'yoq-lak ishlari",
    nameEn: 'Paint & Lacquer Works',
    desc: 'Нанесение промышленных антикоррозийных лакокрасочных покрытий: алкидных, эпоксидных, полиуретановых эмалей для металлических и бетонных конструкций',
  },
  {
    name: 'Антикоррозийные работы',
    nameUz: 'Antikorrozion himoya ishlari',
    nameEn: 'Anti-Corrosion Works',
    desc: 'Долгосрочная антикоррозийная защита металлоконструкций и промышленного оборудования системами покрытий Jotun, Hempel, International по стандартам ISO 12944 и NACE',
  },
  {
    name: 'Футеровочные работы',
    nameUz: 'Futlash (futеrovka) ishlari',
    nameEn: 'Lining Works',
    desc: 'Футеровка внутренних поверхностей резервуаров, аппаратов и трубопроводов кислотостойким кирпичом, полипропиленом, полиэтиленом и ПТФЭ',
  },
  {
    name: 'Теплоизоляционные работы',
    nameUz: 'Issiqlik izolyatsiyasi ishlari',
    nameEn: 'Thermal Insulation Works',
    desc: 'Промышленная теплоизоляция трубопроводов, резервуаров и оборудования минеральной ватой, ПУ-пеной и пеностеклом с алюминиевой облицовкой',
  },
  {
    name: 'Химзащита от кислоты',
    nameUz: 'Kislotaga qarshi kimyoviy himoya',
    nameEn: 'Acid Chemical Protection',
    desc: 'Специализированная защита оборудования и конструкций от серной, соляной, азотной и фосфорной кислот кислотостойкими эпоксидными составами и футеровочными материалами',
  },
];

const FAQ = [
  {
    q: 'Что такое Uzbekistan Ximzashita (UZ Ximzashita, Uzb Ximzashita)?',
    a: 'Uzbekistan Ximzashita (UZ Ximzashita, Uzb Ximzashita) — это бренд компании «Узбекистан Хим Защита Антикор», специализирующейся на химической защите (ximzashita) промышленных объектов по всему Узбекистану. Домен uzximzashita.uz — официальный сайт компании.',
  },
  {
    q: 'Чем занимается Узбекистан Хим Защита Антикор?',
    a: 'Узбекистан Хим Защита Антикор (Uzbekistan Xim Zashita Antikor, ximzashita) — ведущая компания Узбекистана по антикоррозийной и химической защите промышленных объектов. Выполняем химзащитные, пескоструйные, лакокрасочные, антикоррозийные, футеровочные и теплоизоляционные работы на промышленных предприятиях.',
  },
  {
    q: 'Что такое химзащита (ximzashita)?',
    a: 'Химзащита (ximzashita) — это нанесение специальных химически стойких покрытий на металлические и бетонные конструкции для защиты от кислот, щелочей, растворителей и нефтепродуктов. Продлевает срок службы оборудования в 5–10 раз.',
  },
  {
    q: 'В каких городах работает Узбекистан Хим Защита Антикор?',
    a: 'Узбекистан Хим Защита Антикор работает по всему Узбекистану. Офисы расположены в Ташкенте и Фергане. Выполняем работы на объектах в Ташкентской, Ферганской, Навоийской, Бухарской, Кашкадарьинской и Каракалпакской областях.',
  },
  {
    q: 'Какой опыт работы у Узбекистан Хим Защита Антикор?',
    a: 'Более 20 лет опыта. Реализовано свыше 50 крупных проектов на ведущих предприятиях Узбекистана: Ферганский НПЗ, Кунградский содовый завод, Наводиазот, Мубарекский ГПЗ, Узбекнефтегаз, Шуртаннефтегаз.',
  },
  {
    q: 'Какие материалы использует Узбекистан Хим Защита Антикор?',
    a: 'Используем сертифицированные материалы мировых производителей: Jotun, Hempel, International. Все покрытия соответствуют стандартам ISO 12944 и NACE. Гарантия на покрытия — от 5 до 15 лет.',
  },
  {
    q: 'Что такое пескоструйные работы?',
    a: 'Пескоструйные (абразивоструйные) работы — очистка металлических поверхностей сжатым воздухом с абразивом (дробь, купрошлак, кварцевый песок) до степени Sa 2.5 или Sa 3 по ISO 8501. Обязательный этап перед нанесением любого защитного покрытия.',
  },
  {
    q: "Uzbekistan Ximzashita (UZ Ximzashita) nima?",
    a: "Uzbekistan Ximzashita yoki UZ Ximzashita — bu 'Uzbekiston Xim Zashita Antikor' MChJ brendining nomi. Biz butun O'zbekiston bo'ylab sanoat ob'ektlarida kimyoviy himoya (ximzashita) ishlarini amalga oshiramiz. Saytimiz: uzximzashita.uz",
  },
  {
    q: "Uzbekiston Xim Zashita Antikor qanday xizmatlar ko'rsatadi?",
    a: "Uzbekiston Xim Zashita Antikor kimyoviy himoya (ximzashita), peskostruyka, bo'yoq-lak ishlari, antikorrozion himoya, futlash, issiqlik izolyatsiyasi va kislotaga qarshi kimyoviy himoya xizmatlarini ko'rsatadi.",
  },
];

export function JsonLd({ locale }: Props) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uzximzashita.uz';
  const pageUrl = `${siteUrl}/${locale}`;

  const organization = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteUrl}/#organization`,
    name: 'Uzbekistan Xim Zashita Antikor',
    alternateName: [
      'Узбекистан Хим Защита Антикор',
      'Uzbekiston Xim Zashita Antikor',
      'ООО Узбекистан Хим Защита Антикор',
      'ximzashita',
      'uzbekistan ximzashita',
      'uz ximzashita',
      'uzb ximzashita',
      'UZ Ximzashita',
      'Uzb Ximzashita',
      'химзащита узбекистан',
      'антикор',
      'antikor',
      'Antikor',
    ],
    legalName: 'ООО "Узбекистан Хим Защита Антикор"',
    description:
      'Ведущая компания Узбекистана по антикоррозийной и химической защите промышленных объектов (uzbekistan ximzashita, uz ximzashita). Химзащита, пескоструйные, лакокрасочные, антикоррозийные, футеровочные и теплоизоляционные работы. Более 20 лет опыта.',
    url: siteUrl,
    telephone: ['+998772146491', '+998972146491', '+998970507525'],
    email: 'info@uzximzashita.uz',
    foundingDate: '2003',
    priceRange: '$$',
    currenciesAccepted: 'UZS, USD',
    paymentAccepted: 'Bank Transfer, Cash',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: "Farg'ona",
        addressRegion: "Farg'ona viloyati",
        addressCountry: 'UZ',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Toshkent',
        addressCountry: 'UZ',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.3834',
      longitude: '71.7852',
    },
    areaServed: [
      { '@type': 'Country', name: 'Uzbekistan', sameAs: 'https://www.wikidata.org/wiki/Q265' },
      { '@type': 'City', name: 'Tashkent' },
      { '@type': 'City', name: 'Fergana' },
      { '@type': 'City', name: 'Navoi' },
      { '@type': 'City', name: 'Nukus' },
      { '@type': 'City', name: 'Bukhara' },
      { '@type': 'City', name: 'Kashkadarya' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    knowsAbout: [
      'ximzashita',
      'химзащита',
      'uzbekistan ximzashita',
      'uz ximzashita',
      'uzb ximzashita',
      'ximzashita tashkent',
      'ximzashita fergana',
      'antikorroziya',
      'antikorroziya uzbekiston',
      'antikorroziya tashkent',
      'uz antikorroziya',
      'uzb antikorroziya',
      'uzbekistan antikorroziya',
      'gidroizolyatsiya',
      'gidroizolyatsiya uzbekiston',
      'gidroizolyatsiya tashkent',
      'uz gidroizolyatsiya',
      'uzb gidroizolyatsiya',
      'futerovka',
      'futerovka uzbekiston',
      'futerovka tashkent',
      'uz futerovka',
      'uzb futerovka',
      'peskostruyka tashkent',
      'peskostruyka uzbekiston',
      'antikor tashkent',
      'antikor uzbekiston',
      'Химическая защита промышленных объектов',
      'Антикоррозийная защита металлоконструкций',
      'Антикоррозийные работы Ташкент',
      'Гидроизоляция Узбекистан',
      'Гидроизоляция Ташкент',
      'Футеровочные работы Узбекистан',
      'Пескоструйная обработка Ташкент',
      'Химзащита от кислоты',
      'Кислотостойкие покрытия',
      'ISO 12944',
      'NACE',
      'Jotun',
      'Hempel',
      'International Paints',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 20,
      maxValue: 100,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Промышленные защитные работы — Химзащита Узбекистан',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          alternateName: [s.nameUz, s.nameEn],
          description: s.desc,
          provider: { '@id': `${siteUrl}/#organization` },
          areaServed: { '@type': 'Country', name: 'Uzbekistan' },
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '43',
      reviewCount: '43',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Алишер Каримов' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2024-11-15',
        reviewBody:
          'Выполнили химзащитные и антикоррозийные работы на нашем предприятии в Ташкенте. Качество покрытий на высшем уровне, соответствует ISO 12944. Рекомендую Узбекистан Хим Защита Антикор.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Bahodir Yusupov' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2024-09-03',
        reviewBody:
          "Ximzashita va futerovka ishlari yuqori sifatda bajarildi. Farg'ona viloyatidagi ob'ektimizda ishladilar, muddatlarga to'liq rioya qilindi. Uzbekiston Xim Zashita Antikor — ishonchli hamkor.",
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Сергей Петренко' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-01-20',
        reviewBody:
          'Профессиональная пескоструйная обработка и нанесение покрытий Jotun на резервуарах нашего завода. Гарантия 10 лет. Отличная команда специалистов.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Nodir Toshmatov' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-03-10',
        reviewBody:
          "Navoiy shahridagi sanoat ob'ektimizda antikorroziya va gidroizolyatsiya ishlarini bajardilar. Juda professional, muddatdan oldin tugatdilar. UZ Ximzashita — tavsiya qilaman.",
      },
    ],
    sameAs: [],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Uzbekistan Xim Zashita Antikor',
    alternateName: 'Uzbekistan Xim Zashita Antikor — Ximzashita Uzbekistan',
    description:
      'Антикоррозийная и химическая защита промышленных объектов в Узбекистане. Химзащита, пескоструйные, лакокрасочные, футеровочные, теплоизоляционные работы.',
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: ['ru-UZ', 'uz-UZ', 'en-US'],
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name:
      locale === 'ru'
        ? 'Узбекистан Хим Защита Антикор — Ximzashita Uzbekistan | Химзащита и Антикор'
        : locale === 'uz'
        ? "Uzbekiston Xim Zashita Antikor — Ximzashita Uzbekiston | Kimyoviy Himoya"
        : "Uzbekistan Xim Zashita Antikor — Ximzashita Uzbekistan | Chemical Protection",
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale === 'ru' ? 'ru-UZ' : locale === 'uz' ? 'uz-UZ' : 'en-US',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Uzbekistan Xim Zashita Antikor',
          item: pageUrl,
        },
      ],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
