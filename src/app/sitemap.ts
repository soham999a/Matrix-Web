import type { MetadataRoute } from "next";
import { CAPABILITIES } from "@/lib/capabilities";
import { SITE } from "@/lib/seo";

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: string;
};

const ROUTES: RouteEntry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-08-12" },
  { path: "/capabilities", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/research", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/consulting", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/agency", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/manifesto", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/journal", priority: 0.6, changeFrequency: "weekly", lastModified: "2026-08-12" },
  { path: "/newsletter", priority: 0.5, changeFrequency: "monthly", lastModified: "2026-08-12" },
  { path: "/identity", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-08-12" },
  ...CAPABILITIES.map((d) => ({
    path: `/capabilities/${d.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: "2026-08-12",
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
