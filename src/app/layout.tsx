import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const SITE_NAME = "Matrix";
const SITE_URL = "https://matrka.net";
const SITE_DESCRIPTION =
  "Matrix is an intelligence architecture studio for civilization-scale AI — original research, strategic counsel, and applied intelligence platforms built in Kolkata, India.";
const SOCIAL_IMAGE = "/matrix-logo-website-final.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Matrix — Intelligence Architecture Studio for AI, Research & Design",
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
  verification: {
    google: "NevVuHtmgugEI74Ed8M1pveUqKc59iHT3O8bAGjG0oY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Matrix — Intelligence Architecture Studio",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1774,
        height: 887,
        alt: "mātṛkā — Evolution of Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@matrix",
    title: "Matrix — Intelligence Architecture Studio",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: "/Matrix_Favicon.png",
    shortcut: "/Matrix_Favicon.png",
    apple: "/Matrix_Favicon.png",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Matrix",
  alternateName: "mātṛkā",
  url: SITE_URL,
  logo: `${SITE_URL}/matrix-logo-website-final.png`,
  email: "system@matrka.net",
  telephone: "+91-9875663417",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Artificial intelligence",
    "Intelligence architecture",
    "AI research",
    "AI consulting",
    "AI agents",
    "AI products",
    "Intelligent systems design",
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@200;300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
