import { MatrixOgImage } from "@/lib/og-image";

export const alt =
  "MATRIX — Intelligence Architecture Studio. The invisible architecture behind the future.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "M · A · T · R · I · X",
    title: "The invisible architecture behind the future.",
    subtitle: "AI · Research · Systems · Design · Quantum — Kolkata",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
