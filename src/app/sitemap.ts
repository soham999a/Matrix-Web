import type { MetadataRoute } from "next";
import { CAPABILITIES } from "@/lib/capabilities";

const BASE = "https://matrka.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: [string, string, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", "0.9", "weekly"],
    ["/about", "0.5", "monthly"],
    ["/research", "0.8", "monthly"],
    ["/consulting", "0.8", "monthly"],
    ["/agency", "0.7", "monthly"],
    ["/products", "0.8", "monthly"],
    ["/capabilities", "0.8", "monthly"],
    ...CAPABILITIES.map(
      (d) => [`/capabilities/${d.slug}`, "0.7", "monthly"] as [string, string, "monthly"],
    ),
    ["/journal", "0.5", "monthly"],
    ["/manifesto", "0.6", "monthly"],
    ["/identity", "0.3", "yearly"],
  ];
  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority: Number(priority),
  }));
}
