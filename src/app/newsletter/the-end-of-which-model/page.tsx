import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { JsonLd } from "@/components/matrix/JsonLd";
import { pageSeo, SITE } from "@/lib/seo";

const PATH = "/newsletter/the-end-of-which-model";
const TITLE = "The End of \u201CWhich Model?\u201D";

/** The golden MATRIX mark inside a circular avatar, as in the issue design. */
function Avatar() {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-foreground/[0.04] p-2">
      <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8924A" />
          </linearGradient>
        </defs>
        <polygon points="28,22 44,34 44,66 28,78" fill="url(#gold-grad)" />
        <polygon points="72,22 56,34 56,66 72,78" fill="url(#gold-grad)" />
      </svg>
    </span>
  );
}

export const metadata = pageSeo({
  path: PATH,
  title: `${TITLE} — The MATRIX Brief`,
  description:
    "Newsletter 01 — Introducing GRAVITY and Minimum Sufficient Intelligence (MSI): the least-cost feasible computational strategy, and the first deterministic benchmark of the prototype.",
  keywords: [
    "GRAVITY",
    "Minimum Sufficient Intelligence",
    "MSI",
    "adaptive computational intelligence",
    "AI routing",
    "AI benchmarks",
    "Matrix newsletter",
  ],
  og: {
    title: TITLE,
    description: "Optimal intelligence, not maximum intelligence.",
  },
});

export default function EndOfWhichModel() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The End of Which Model?",
          name: "The End of \u201CWhich Model?\u201D",
          description:
            "Introducing GRAVITY and Minimum Sufficient Intelligence (MSI) — selecting the least-cost feasible computational strategy that meets quality, reliability, risk, and latency thresholds.",
          datePublished: "2026-10-17",
          inLanguage: "en",
          isAccessibleForFree: true,
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          url: `${SITE.url}${PATH}`,
          mainEntityOfPage: `${SITE.url}${PATH}`,
        }}
      />

      {/* ── HEAD ── */}
      <Section rail="The MATRIX Brief · 01" className="pt-32 pb-12">
        <div className="max-w-4xl">
          <Link
            href="/newsletter"
            className="inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            ← Newsletter
          </Link>
          <p className="eyebrow !text-gold">MATRIX Labs · Computational Adaptive Intelligence</p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight mt-6">
            The End of{" "}
            <span className="italic text-muted-foreground">&ldquo;Which Model?&rdquo;</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <Avatar />
            <div>
              <p className="text-sm text-foreground font-medium">MATRIX Labs</p>
              <p className="text-sm text-muted-foreground">
                Applied AI Research Studio · Oct 17, 2026
              </p>
            </div>
          </div>
        </div>

        {/* ── BRAND SNAP HERO: gold geometry over bone, solid center panel ── */}
        <div
          className="relative mt-14 flex h-[300px] md:h-[400px] items-center justify-center overflow-hidden border-y-2 border-gold bg-[#F2EFE9]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(30deg, transparent, transparent 40px, rgba(184,146,74,0.4) 40px, rgba(184,146,74,0.4) 41px), repeating-linear-gradient(-30deg, transparent, transparent 40px, rgba(184,146,74,0.4) 40px, rgba(184,146,74,0.4) 41px)",
          }}
        >
          <div className="relative z-10 border border-foreground/15 border-l-2 border-l-gold bg-ink px-8 py-10 text-center shadow-2xl md:px-20">
            <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
              Newsletter 01
            </span>
            <p className="mt-4 font-display text-2xl leading-snug text-[#F2EFE9] md:text-3xl">
              Optimal Intelligence,
              <br />
              Not Maximum Intelligence.
            </p>
          </div>
        </div>
      </Section>

      {/* ── BODY ── */}
      <Section rail="The Argument" className="pt-14 md:pt-20 pb-4">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <p className="text-lg leading-relaxed text-foreground/80">
              For the last three years, the AI industry has been asking a single question:{" "}
              <em className="text-gold">&ldquo;Which model should handle this task?&rdquo;</em>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              This framing is now structurally obsolete. It assumes that every problem—a simple GST
              calculation, a supply chain forecast, a complex multi-agent reasoning task—deserves
              the same computational trajectory. It is the reason enterprise AI costs are spiraling.
              It is the reason latency remains unacceptably high. And it is the reason trust in AI
              outputs remains fragile.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              The future of enterprise AI is not about building a bigger model. It is about{" "}
              <strong className="text-foreground">knowing when not to use one.</strong>
            </p>
          </div>
        </div>
      </Section>

      <Section rail="Introducing GRAVITY" className="pt-14 md:pt-20 pb-4">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-gold">
              Introducing GRAVITY
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              At MATRIX Labs, we have spent the last year developing{" "}
              <strong className="text-foreground">GRAVITY</strong>, an Adaptive Computational
              Intelligence Fabric. GRAVITY does not begin by asking which model to route to. It
              begins by asking:{" "}
              <em className="text-gold">
                What form of computation does this problem actually deserve?
              </em>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              We have formalized this as{" "}
              <strong className="text-foreground">Minimum Sufficient Intelligence (MSI)</strong>.
              The principle is simple: select the least-cost feasible computational strategy that
              meets the task&apos;s explicit quality, reliability, risk, and latency thresholds.
            </p>
            <blockquote className="my-10 border-l-2 border-gold bg-foreground/[0.05] px-8 py-6 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
              &ldquo;Algorithms where algorithms win. Statistics where statistics win. Models where
              models win. Humans where judgment matters.&rdquo;
            </blockquote>
            <p className="text-lg leading-relaxed text-foreground/80">
              If a deterministic SQL query can solve the problem safely, GRAVITY executes it in
              milliseconds for near-zero cost. It reserves frontier language models only for tasks
              that genuinely require reasoning over unstructured language. It routes context
              dynamically, allocates resources intelligently, and verifies every output before it
              reaches the user.
            </p>
          </div>
        </div>
      </Section>

      <Section rail="The Benchmark" className="pt-14 md:pt-20 pb-4">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-gold">
              The First Empirical Benchmark
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              We recently completed the first deterministic benchmark of the GRAVITY prototype (Seed
              42, mean across classes). We are publishing these results as an early snapshot—not a
              final performance claim—but the architectural direction is clear.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              When compared against the displayed results for Claude Track A and OpenAI Track A,
              GRAVITY maintained perfect task success and verification reliability, while achieving
              a massive reduction in latency and token consumption.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="border-b border-border py-4 pr-6 eyebrow !text-muted-foreground">
                      Metric
                    </th>
                    <th className="border-b border-border py-4 pr-6 eyebrow !text-muted-foreground">
                      Claude (Track A)
                    </th>
                    <th className="border-b border-border py-4 pr-6 eyebrow !text-muted-foreground">
                      OpenAI (Track A)
                    </th>
                    <th className="border-b border-gold py-4 eyebrow !text-gold">
                      GRAVITY (Track B)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Task Success", "100%", "100%", "100%"],
                    ["Verification Reliability", "100%", "100%", "100%"],
                    ["Cost / Successful Task", "$0.0137", "$0.0011", "$0.0000"],
                    ["P50 Latency", "13,228 ms", "17,496 ms", "9,863 ms"],
                    ["Tokens / Task", "1,438", "1,522", "935"],
                  ].map(([metric, claude, openai, gravity]) => (
                    <tr key={metric} className="border-b border-border">
                      <td className="py-4 pr-6 text-foreground/75">{metric}</td>
                      <td className="py-4 pr-6 text-foreground/75">{claude}</td>
                      <td className="py-4 pr-6 text-foreground/75">{openai}</td>
                      <td className="py-4 font-semibold text-gold">{gravity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              <strong className="text-foreground">What this means:</strong> GRAVITY achieved{" "}
              <strong className="text-foreground">89% fewer tokens</strong> and{" "}
              <strong className="text-foreground">88% lower latency</strong> than the displayed
              model baselines, with zero reported marginal cost at standard display precision.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground italic">
              (Note: The displayed tracks use different configurations. These results reflect a
              preliminary harness run and require broader controlled validation, resource
              accounting, and multi-seed testing before being treated as definitive proof of
              superiority.)
            </p>
          </div>
        </div>
      </Section>

      <Section rail="What Comes Next" className="pt-14 md:pt-20 pb-4">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-gold">
              What Comes Next
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              GRAVITY is currently a working prototype. The next phase of our research focuses on
              rigorous multi-seed benchmarking, enterprise integration adapters, and extending the
              architecture into our commercial platforms—including{" "}
              <strong className="text-foreground">ARPS</strong> (supply chain intelligence),{" "}
              <strong className="text-foreground">QiDS</strong> (human development), and{" "}
              <strong className="text-foreground">Mangrove</strong> (sustainability intelligence).
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              We are currently opening dialogues with research collaborators, enterprise design
              partners, and venture investors who understand that the future of AI infrastructure is
              not just about scale—it is about architecture.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://zenodo.org/records/23302918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gold bg-gold px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.1em] uppercase text-ink transition-colors hover:bg-[#D4B16C] hover:border-[#D4B16C]"
              >
                Read the Whitepaper
              </a>
              <a
                href="https://gravity.matrka.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gold px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.1em] uppercase text-gold transition-colors hover:bg-gold/10"
              >
                Explore the Prototype
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CLOSE ── */}
      <Section rail="The Sign-off" className="pt-20 pb-24 mt-12">
        <div className="border-t border-border pt-12 text-center">
          <p className="font-display text-3xl tracking-tight">MATRIX — Ideas to Impact.</p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Structure before speed. Evidence before confidence. Optimal intelligence, not maximum
            intelligence.
          </p>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.matrka.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-foreground transition-colors"
            >
              matrka.net
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:system@matrka.net"
              className="text-gold hover:text-foreground transition-colors"
            >
              system@matrka.net
            </a>
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
