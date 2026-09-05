import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Products. Nine platforms, one architecture.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Products · Matrix",
    title: "Nine platforms. One architecture.",
    subtitle: "Gravity · QiDS · Humming · ARPS · Mangrove · Datum · MindMuse & more",
  });
}
