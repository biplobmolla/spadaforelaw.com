import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SkipLink } from "@/components/layout/skip-link";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: `${siteConfig.shortName}, LLC | Columbus, Ohio`,
    template: `%s | ${siteConfig.shortName}`,
  },
  applicationName: siteConfig.shortName,
  authors: [{ name: "Craig Spadafore" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "legal services",
  keywords: [
    "Columbus Ohio lawyer",
    "business law",
    "real estate attorney",
    "employment law",
    "healthcare lawyer Columbus",
    "license defense attorney Ohio",
    "civil litigation",
    "Spadafore Law",
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b1c2c" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1c2c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans pb-[4.5rem] md:pb-0">
        <JsonLd data={organizationJsonLd()} />
        <SkipLink />
        {children}
        <StickyMobileCta />
      </body>
    </html>
  );
}
