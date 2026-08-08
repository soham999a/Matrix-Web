import type { MetadataRoute } from "next";

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
