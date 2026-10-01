# Wikidata item draft — Matrix (mātṛkā)

Why this matters: a Wikidata item is the strongest single entity signal for
search engines and AI assistants. It feeds Google's Knowledge Graph, and it
is what ChatGPT/Perplexity/Gemini consult when answering "who is Matrix?".
Combined with `SAME_AS` in `src/lib/seo.ts`, it turns the site from "a page
about Matrix" into "the Matrix entity".

Submit at https://www.wikidata.org/wiki/Special:NewItem (account required).

## Labels & descriptions

| Field | Value |
|---|---|
| Label (en) | Matrix |
| Description (en) | Indian applied intelligence firm and AI research studio |
| Aliases (en) | mātṛkā · Matrix Labs · MATRIX |
| Label (bn) | ম্যাট্রিক্স |

## Statements

| Property | Value | Notes |
|---|---|---|
| instance of (P31) | business (Q4830453) | |
| industry (P452) | artificial intelligence (Q11660) | |
| country (P17) | India (Q668) | |
| located in administrative territorial entity (P131) | Kolkata (Q1348) | |
| official website (P856) | https://www.matrka.net | |
| email address (P968) | system@matrka.net | |
| founded by (P112) | *create a Wikidata item for Somnath Banerjee first, then link* | |
| field of work (P101) | artificial intelligence (Q11660), software engineering (Q80993) | |

## References to attach

1. Official site — company profile page:
   https://www.matrka.net/company-profile
2. Press release (independent publication):
   https://www.openpr.com/news/4568463/how-to-use-the-deepseek-api-for-free-or-near-free
   — ⚠️ this one is *about DeepSeek*, not Matrix; do not cite it. It was
   listed for context only. Replace with any future press coverage of MATRIX.
3. Research record (independent, permanent DOI):
   https://zenodo.org/records/22242899 — "The Architecture of Intelligence"
   (author: Somnath Banerjee) — good for supporting the firm's field of work.

## Notability note

Wikidata requires "serious, publicly available references". The official
website alone is *somewhat* weak; the Zenodo DOI + any press mentions
strengthen the case considerably. If the item is rejected on notability,
revisit after 2–3 press mentions exist — then re-submit with those as
references.

## After the item exists

1. Copy the item URL (e.g. `https://www.wikidata.org/wiki/Q123456789`).
2. Paste it into `SAME_AS` in `src/lib/seo.ts` alongside the real LinkedIn,
   YouTube, GitHub, and X profile URLs.
3. The `sameAs` flow into the Organization and Person JSON-LD nodes on every
   page automatically — one edit, site-wide effect.
