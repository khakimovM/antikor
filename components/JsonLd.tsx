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
    q: 'Чем занимается Фергана Хим Защита Антикор?',
    a: "Фергана Хим Защита Антикор (Farg'ona Xim Zashita Antikor) — ведущая компания Узбекистана по антикоррозийной и химической защите промышленных объектов. Выполняем химзащитные, пескоструйные, лакокрасочные, антикоррозийные, футеровочные и теплоизоляционные работы на промышленных предприятиях.",
  },
  {
    q: 'Что такое химзащита (ximzashita)?',
    a: 'Химзащита (ximzashita) — это нанесение специальных химически стойких покрытий на металлические и бетонные конструкции для защиты от кислот, щелочей, растворителей и нефтепродуктов. Продлевает срок службы оборудования в 5–10 раз.',
  },
  {
    q: 'В каких городах работает Фергана Хим Защита Антикор?',
    a: 'Фергана Хим Защита Антикор работает по всему Узбекистану. Офисы расположены в Ташкенте и Фергане. Выполняем работы на объектах в Ташкентской, Ферганской, Навоийской, Бухарской, Кашкадарьинской и Каракалпакской областях.',
  },
  {
    q: 'Какой опыт работы у Фергана Хим Защита Антикор?',
    a: 'Более 20 лет опыта. Реализовано свыше 50 крупных проектов на ведущих предприятиях Узбекистана: Ферганский НПЗ, Кунградский содовый завод, Наводиазот, Мубарекский ГПЗ, Узбекнефтегаз, Шуртаннефтегаз.',
  },
  {
    q: 'Какие материалы использует Фергана Хим Защита Антикор?',
    a: 'Используем сертифицированные материалы мировых производителей: Jotun, Hempel, International. Все покрытия соответствуют стандартам ISO 12944 и NACE. Гарантия на покрытия — от 5 до 15 лет.',
  },
  {
    q: 'Что такое пескоструйные работы?',
    a: 'Пескоструйные (абразивоструйные) работы — очистка металлических поверхностей сжатым воздухом с абразивом (дробь, купрошлак, кварцевый песок) до степени Sa 2.5 или Sa 3 по ISO 8501. Обязательный этап перед нанесением любого защитного покрытия.',
  },
  {
    q: "Farg'ona Xim Zashita Antikor qanday xizmatlar ko'rsatadi?",
    a: "Farg'ona Xim Zashita Antikor kimyoviy himoya, peskostruyka, bo'yoq-lak ishlari, antikorrozion himoya, futlash, issiqlik izolyatsiyasi va kislotaga qarshi kimyoviy himoya xizmatlarini ko'rsatadi.",
  },
];

export function JsonLd({ locale }: Props) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uzximzashita.uz';
  const pageUrl = `${siteUrl}/${locale}`;

  const organization = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteUrl}/#organization`,
    name: "Farg'ona Xim Zashita Antikor",
    alternateName: [
      'ООО Фергана Хим Защита Антикор',
      'Фергана Хим Защита Антикор',
      'ximzashita',
      'антикор',
      'antikor',
      'Antikor',
    ],
    legalName: 'ООО "Фергана Хим Защита Антикор"',
    description:
      'Ведущая компания Узбекистана по антикоррозийной и химической защите промышленных объектов. Химзащита, пескоструйные, лакокрасочные, антикоррозийные, футеровочные и теплоизоляционные работы. Более 20 лет опыта.',
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
      'Химзащита',
      'ximzashita',
      'Химическая защита промышленных объектов',
      'Антикоррозийная защита металлоконструкций',
      'Пескоструйная обработка',
      'Лакокрасочные работы промышленные',
      'Футеровочные работы',
      'Теплоизоляция трубопроводов',
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
    sameAs: [],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: "Farg'ona Xim Zashita Antikor",
    alternateName: 'Фергана Хим Защита Антикор — Химзащита Узбекистан',
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
        ? 'Фергана Хим Защита Антикор — Химзащита и Антикоррозийные Работы в Узбекистане'
        : locale === 'uz'
        ? "Farg'ona Xim Zashita Antikor — Kimyoviy Himoya va Antikorrozion Ishlar O'zbekiston"
        : "Farg'ona Xim Zashita Antikor — Anti-Corrosion & Chemical Protection Uzbekistan",
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale === 'ru' ? 'ru-UZ' : locale === 'uz' ? 'uz-UZ' : 'en-US',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: "Farg'ona Xim Zashita Antikor",
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
