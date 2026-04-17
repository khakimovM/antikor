import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported locales
  locales: ['ru', 'uz', 'en'],
  // Default locale (Russian)
  defaultLocale: 'ru',
  // Locale prefix strategy: always prefix paths
  localePrefix: 'always',
});

export const config = {
  // Match all pathnames except for API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
