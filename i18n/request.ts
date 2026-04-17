import { getRequestConfig } from 'next-intl/server';

const locales = ['ru', 'uz', 'en'] as const;
type Locale = (typeof locales)[number];

function isValidLocale(l: string | undefined): l is Locale {
  return locales.includes(l as Locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = isValidLocale(requested) ? requested : 'ru';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
