import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ru', 'uz', 'en'] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames: {
      '/': '/',
    },
  });
