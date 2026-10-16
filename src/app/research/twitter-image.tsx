import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Research. Original inquiry into intelligence.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Research · Matrix",
    title: "Original inquiry into intelligence.",
    subtitle: "QiDS · CES-QN · KALPA — open-access whitepapers",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
