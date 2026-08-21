import { MatrixOgImage } from "@/lib/og-image";

export const alt = "MATRIX — AI Agency. Custom intelligence that disappears into experience.";

export default function Image() {
  return MatrixOgImage({
    eyebrow: "AI Agency · Matrix",
    title: "Custom intelligence that disappears into experience.",
    subtitle: "Agents · Models · Orchestration · Evaluation",
  });
}
