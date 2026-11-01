import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Beyond the Prompt: The Power of Context-Aware AI";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Blog · Context Engineering",
    title: "Beyond the Prompt",
    subtitle: "The Power of Context-Aware AI — the six pillars of context engineering",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
