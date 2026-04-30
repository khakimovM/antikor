import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { locales } from '@/lib/navigation';
import { MotionProvider } from '@/components/providers/MotionProvider';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.uzximzashita.uz';
  const pageUrl = `${siteUrl}/${locale}`;

  const ogLocale =
    locale === 'ru' ? 'ru_RU' : locale === 'uz' ? 'uz_UZ' : 'en_US';
  const altLocales =
    locale === 'ru' ? ['uz_UZ', 'en_US'] : locale === 'uz' ? ['ru_RU', 'en_US'] : ['ru_RU', 'uz_UZ'];

  return {
    title: {
      default: t('title'),
      template: `%s | Uzbekistan Xim Zashita Antikor`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: "Uzbekistan Xim Zashita Antikor", url: siteUrl }],
    creator: "Uzbekistan Xim Zashita Antikor",
    publisher: "Uzbekistan Xim Zashita Antikor",
    category: 'Industrial Services',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        ru: `${siteUrl}/ru`,
        uz: `${siteUrl}/uz`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}/ru`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl,
      siteName: 'Uzbekistan Xim Zashita Antikor',
      locale: ogLocale,
      alternateLocale: altLocales,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate locale
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <MotionProvider>
              {children}
            </MotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
