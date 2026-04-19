import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
