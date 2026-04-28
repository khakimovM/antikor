import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.uzximzashita.uz",
  ),
  applicationName: "Uzbekistan Xim Zashita Antikor",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
  title: "Uzximzashita.uz - Kimyoviy Himoya",
  description: "Kimyoviy himoya usullari va turlari",
  icons: {
    icon: "/icon.svg",
  },
};

// Root layout intentionally has no <html>/<body> —
// the locale layout owns them so lang={locale} and the font
// class are set in one place, avoiding hydration mismatches.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children as React.ReactElement;
}
