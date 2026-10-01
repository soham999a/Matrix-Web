import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/**
 * AI crawler policy — deliberate allow.
 *
 * Matrix's visibility strategy is citation-first: being quoted and cited by
 * ChatGPT, Claude, Perplexity, Google AI Overviews, and Apple Intelligence
 * matters more than withholding training content. These rules are explicit
 * (not merely implied by `*`) so the policy is legible to both crawlers and
 * to anyone auditing the site. /preview and /api/ stay disallowed for all.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training / index
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic
  "anthropic-ai", // Anthropic (legacy UA)
  "Claude-User", // Claude live browsing
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live browsing
  "Google-Extended", // Gemini / Vertex grounding
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (feeds many LLMs)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview", "/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/preview", "/api/"],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
