import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Manifesto. Ten beliefs about intelligence.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Manifesto · Matrix",
    title: "Ten beliefs about intelligence.",
    subtitle: "Design · Complexity · Civilization",
  });
}
