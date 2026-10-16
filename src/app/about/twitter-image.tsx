import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — About. The studio behind invisible architecture.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "About · Matrix",
    title: "The studio behind invisible architecture.",
    subtitle: "Researchers · Designers · Engineers — Kolkata",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
