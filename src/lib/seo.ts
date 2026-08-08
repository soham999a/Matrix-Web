import type { Metadata } from "next";

export const SITE = {
  name: "Matrix",
  url: "https://matrka.net",
  ogImage: "/matrix-logo-website-final.png",
  ogImageWidth: 1774,
  ogImageHeight: 887,
  ogImageAlt: "mātṛkā — Evolution of Intelligence",
  email: "system@matrka.net",
  phone: "+91-9875663417",
} as const;

type PageSeoArgs = {
  path: string;
  title: string | { absolute: string };
  description: string;
  keywords?: string[];
  og?: { title?: string; description?: string };
  noindex?: boolean;
};

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
          },
        },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: SITE.ogImage,
          width: SITE.ogImageWidth,
          height: SITE.ogImageHeight,
          alt: SITE.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@matrix",
      title: ogTitle,
      description: ogDescription,
      images: [SITE.ogImage],
    },
  };
}
