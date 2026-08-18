import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";

import "./globals.css";
import { GoogleAnalytics } from "@/components/matrix/Analytics";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const fontInstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

const fontPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: true,
});

const SITE_NAME = "Matrix";
const SITE_URL = "https://matrka.net";
const SITE_DESCRIPTION =
  "Matrix is an intelligence architecture studio for civilization-scale AI — original research, strategic counsel, and applied intelligence platforms built in Kolkata, India.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#F2F2F2" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Intelligence Architecture Studio for AI, Research & Design`,
    template: "%s — Matrix",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Matrix",
    "mātṛkā",
    "intelligence architecture",
    "artificial intelligence studio",
    "AI research",
    "AI consulting firm",
    "custom AI agents",
    "AI agency India",
    "intelligent systems design",
    "AI products",
    "Kolkata AI",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  verification: {
    google: "NevVuHtmgugEI74Ed8M1pveUqKc59iHT3O8bAGjG0oY",
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${SITE_NAME} — Intelligence Architecture Studio`,
    title: `${SITE_NAME} — Intelligence Architecture Studio`,
    description: SITE_DESCRIPTION,
    emails: ["system@matrka.net"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Intelligence Architecture Studio`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [{ rel: "icon", url: "/favicon.png", sizes: "any", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": "#080808",
    "msapplication-TileImage": "/favicon.png",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "mātṛkā",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/matrix-new-logo.png`,
        width: 1774,
        height: 887,
      },
      email: "system@matrka.net",
      telephone: "+91-9875663417",
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "system@matrka.net",
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["en", "bn"],
      },
      founder: {
        "@type": "Person",
        name: "Somnath Banerjee",
        jobTitle: "Founder",
      },
      knowsAbout: [
        "Artificial intelligence",
        "Intelligence architecture",
        "AI research",
        "AI consulting",
        "AI agents",
        "AI products",
        "Intelligent systems design",
        "Quantum computing",
        "Sustainability intelligence",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fontInter.variable} ${fontInstrumentSerif.variable} ${fontPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
