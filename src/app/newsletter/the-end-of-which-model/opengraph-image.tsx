import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — The End of Which Model? · The MATRIX Brief 01";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "The MATRIX Brief · 01",
    title: "The End of \u201CWhich Model?\u201D",
    subtitle: "GRAVITY and Minimum Sufficient Intelligence — optimal, not maximum",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
