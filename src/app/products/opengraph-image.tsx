import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Products. Twelve platforms, one architecture.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Products · Matrix",
    title: "Twelve platforms. One architecture.",
    subtitle:
      "Gravity · QiDS · Humming · ARPS · Mangrove · Datum · Agile Plus · Metacare · MindMuse & more",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
