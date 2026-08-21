import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Journal. Essays on intelligence & AI.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Journal · Matrix",
    title: "Essays on intelligence & AI.",
    subtitle: "Field notes and slow essays, published when settled",
  });
}
