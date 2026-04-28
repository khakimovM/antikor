import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.uzximzashita.uz';
const locales = ['ru', 'uz', 'en'] as const;

const langAlternates = Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`]));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: { languages: langAlternates },
    },
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'ru' ? 1.0 : 0.9,
      alternates: { languages: langAlternates },
    })),
  ];
}
