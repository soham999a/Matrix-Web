import type { Metadata } from "next";

export const SITE = {
  name: "Matrix",
  url: "https://matrka.net",
  tagline: "Intelligence Architecture Studio",
  ogImage: "/matrix-logo-website-final.png",
  ogImageWidth: 1774,
  ogImageHeight: 887,
  ogImageAlt: "mātṛkā — Evolution of Intelligence",
  email: "system@matrka.net",
  phone: "+91-9875663417",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  founder: "Somnath Banerjee",
  description:
    "Matrix is an intelligence architecture studio for civilization-scale AI — original research, strategic counsel, and applied intelligence platforms built in Kolkata, India.",
} as const;

type PageSeoArgs = {
  path: string;
  title: string | { absolute: string };
  description: string;
  keywords?: string[];
  og?: {
    title?: string;
    description?: string;
  };
  noindex?: boolean;
};

/**
 * Per-page metadata. Open Graph / Twitter images are provided by the
 * file-based `opengraph-image` and `twitter-image` conventions, so no static
 * image is attached here — every page inherits the generated image.
 */
export function pageSeo({
  path,
  title,
  description,
  keywords = [],
  og,
  noindex,
}: PageSeoArgs): Metadata {
  const ogTitle = og?.title ?? (typeof title === "string" ? title : title.absolute);
  const ogDescription = og?.description ?? description;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
      url: `${SITE.url}${path}`,
      siteName: `${SITE.name} — ${SITE.tagline}`,
      title: ogTitle,
      description: ogDescription,
      emails: [SITE.email],
      countryName: "India",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}
