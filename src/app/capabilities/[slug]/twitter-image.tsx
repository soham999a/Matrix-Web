import { MatrixOgImage } from "@/lib/og-image";
import { getCapability } from "@/lib/capabilities";

export const alt = "MATRIX — Capability page. Nine disciplines held by a single hand.";

type Params = Promise<{ slug: string }>;

export default async function CapabilityTwitterImage({ params }: { params: Params }) {
  const { slug } = await Promise.resolve(params);
  const capability = getCapability(slug);
  return MatrixOgImage({
    eyebrow: capability ? `Capability ${capability.numeral} · Matrix` : "Matrix",
    title: capability?.title ?? "Matrix",
    subtitle: capability?.tagline,
  });
}
