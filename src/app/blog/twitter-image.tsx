import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Blog. Beyond the prompt.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Blog · Matrix",
    title: "Beyond the prompt.",
    subtitle: "Context engineering, systems, and applied AI — explained as it is built",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
