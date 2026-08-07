import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const SITE_DESCRIPTION =
  "Matrix designs the invisible architecture behind intelligent systems — research, products, and counsel for the next civilization.";

const SOCIAL_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/61841d94-d203-43e0-801f-4dfc902b9374/id-preview-2e6fa600--a05ffef3-b4cb-4857-904a-eba706cf3a3d.lovable.app-1781635108350.png";

export const metadata: Metadata = {
  title: "Matrix — Connected Intelligence",
  description: SITE_DESCRIPTION,
  authors: [{ name: "Matrix" }],
  openGraph: {
    title: "Matrix — Connected Intelligence",
    description: SITE_DESCRIPTION,
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary",
    site: "@matrix",
    title: "Matrix — Connected Intelligence",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: "/favicon.png",
  },
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
      <body>{children}</body>
    </html>
  );
}
