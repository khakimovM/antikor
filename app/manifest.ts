import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Uzbekistan Xim Zashita Antikor',
    short_name: 'UZ Ximzashita',
    description:
      "Kimyoviy himoya, antikorroziya, futerovka, gidroizolyatsiya — O'zbekiston bo'ylab",
    start_url: '/ru',
    display: 'standalone',
    background_color: '#0a0f1e',
    theme_color: '#f97316',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
