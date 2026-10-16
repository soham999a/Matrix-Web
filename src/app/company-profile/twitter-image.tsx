import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — Company Profile. Applied AI Research Studio.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "Company Profile · 2026",
    title: "Applied AI Research Studio.",
    subtitle: "Intelligence Architecture · Cohered by Design",
  });
}

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";
