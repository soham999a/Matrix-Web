import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Newsletter. The MATRIX Brief.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Newsletter · Matrix",
    title: "The MATRIX Brief.",
    subtitle: "Intelligence · Technology · Complex systems",
  });
}
