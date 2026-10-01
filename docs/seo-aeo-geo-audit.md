# matrka.net — SEO / AEO / GEO / AIO Optimization Audit

> Audited 2026-10-01 against the site's source (`matrix-web`) and current
> best-practice guidance (Google's AI-optimization developer guide, llms.txt
> adoption studies, AI-crawler robots.txt decision matrices).
> Status vocabulary: ✅ in place · 🟡 partial · ❌ missing.

## 1. Vocabulary map

| Term | Meaning |
|---|---|
| SEO | Rank in classic search (Google, Bing) |
| AEO | Be the *answer* — featured snippets, People Also Ask |
| AIO | Optimize for Google **AI Overviews** |
| GEO / LLMO | Be **cited** by ChatGPT, Perplexity, Gemini, Claude (LLM optimization) |
| SXO | Search experience optimization — win after the click |
| Entity SEO | Make Google consolidate "Matrix" into one knowledge entity |
| Zero-click | Win visibility when the user never leaves the results page |

## 2. Current state (verified in code)

| Area | Status | Notes |
|---|---|---|
| Technical SEO | ✅ | Static prerender, sitemap.xml (23 URLs), robots.txt, HTTPS, per-page canonicals, title template, meta descriptions |
| Meta / OG | ✅ | Generated OG/Twitter images per page, `en_IN`, Search Console verified |
| Entity SEO | 🟡 | Organization + WebSite JSON-LD with `@id`, `knowsAbout`, founder; **`sameAs` was empty** (fix below) |
| Local SEO | 🟡 | Kolkata address + consistent NAP in JSON-LD and footer; plain `Organization` type, no geo coordinates; Google Business Profile unconfirmed |
| Schema markup | 🟡 | Organization, WebSite, Service, BreadcrumbList (capability pages), Blog (journal). ~~FAQPage, Person~~ → **added below**; SoftwareApplication on products still open |
| E-E-A-T | 🟡 | Named founder, six open-access Zenodo preprints + patent = real authoritativeness; Person schema **added below**; journal posts (with author/date) not yet published |
| Topical authority | 🟡 | 9 capability pages + research + journal + manifesto; cross-linking thin |
| SXO / CWV | 🟡 | Mobile/tablet UX hardened; CWVs unmeasured — asset findings below |

## 3. Implemented in this batch (P0)

1. **`public/llms.txt`** — curated markdown map of the site for AI tools:
   overview, key facts, all core pages, the nine capabilities, all six
   Zenodo preprints with DOIs, products, writing, contact.
2. **Explicit AI-crawler policy in `src/app/robots.ts`** — explicit `allow`
   for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai,
   Claude-User, PerplexityBot, Perplexity-User, Google-Extended,
   Applebot-Extended, CCBot. `/preview` and `/api/` stay disallowed for all.
   This is the deliberate *citation-visibility-over-privacy* decision.
3. **FAQPage schema + FAQ sections** — 3 question-shaped Q&As per capability
   (27 total, in `CAPABILITY_FAQS`), rendered on each capability page and
   emitted as FAQPage JSON-LD. This is the biggest single lever for
   featured snippets, PAA, AI Overviews, and LLM citations.
4. **Person schema for the founder** (`/#founder`) wired into the
   Organization graph via `founder: { @id }`.
5. **`sameAs` infrastructure** — `SAME_AS` array in `src/lib/seo.ts`, used by
   both Organization and Person nodes; empty array is omitted from JSON-LD.

## 4. Action needed from the team (cannot be done from code alone)

- **Fill `SAME_AS`** in `src/lib/seo.ts` with real profile URLs:
  LinkedIn company page, X profile, YouTube channel, GitHub org,
  ORCID/Zenodo author profile, Wikidata item. One edit, flows everywhere.
- **Google Business Profile** — create/claim for the Kolkata studio.
- **Bing Webmaster Tools** — verify the site (Siri/Alexa/Copilot read Bing).
- **Wikidata entity** for MATRIX (easier than Wikipedia, big entity win).
- **AI visibility tracking** — Semrush/Ahrefs AI reports, or Profound;
  free option: monthly manual prompts to ChatGPT/Perplexity
  ("best intelligence architecture firms in India") and log citations.
- **Citation sources** — Reddit/Quora/YouTube presence; these are what
  ChatGPT and Perplexity quote most after the open web.

## 5. Core Web Vitals findings (static asset audit)

| Asset | Size | Ships raw? | Note |
|---|---|---|---|
| 9 discipline-card PNGs | ~1.5 MB each | No — via `next/image` | Optimized to WebP/AVIF at the edge; OK |
| `manifesto-portal.png` | 2.2 MB | **Yes — CSS background** | Real LCP/bandwidth risk; convert to WebP (~200 KB) |
| `favicon.png` | 532 KB | Yes | Favicon should be ≤ ~50 KB; export a small PNG/ICO |
| `matrix-new-logo.png` | 515 KB | Via `next/image` (OG) | OG image; acceptable |
| `neuron-hero-720p.mp4` | 578 KB | Yes (lazy video) | Fine |

Recommended next code task: convert `manifesto-portal.png` → WebP and slim
the favicon; then run PageSpeed Insights / Lighthouse on production for real
LCP/INP/CLS numbers (needs a live run — not doable from the repo).

## 6. Open roadmap (P1/P2)

- SoftwareApplication schema on `/products`; Article schema when journal
  posts ship (with author + date).
- "Related capability" internal links between the nine discipline pages.
- Alt-text pass on decorative images; `LocalBusiness` + geo coordinates.
- HowTo schema on the consulting process; definitional snippet blocks on
  the home page ("What is intelligence architecture?").
