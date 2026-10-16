import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Contact. Begin a correspondence.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Contact · Matrix",
    title: "Begin a correspondence.",
    subtitle: "A small number of engagements each year",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
