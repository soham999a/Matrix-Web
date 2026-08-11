import Link from "next/link";
import type { ComponentType } from "react";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { MarkLattice, MarkAperture, MarkMeridian } from "@/components/matrix/Mark";
import {
  Constellation,
  Iceberg,
  Threads,
  Prism,
  Origami,
  Observatory,
} from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/identity",
  title: "Visual Identity System — Logo, Palette & Typography",
  description:
    "The Matrix visual foundation: three logo directions, brand palette, typography, design tokens, and iconography behind the intelligence architecture studio.",
  keywords: [
    "Matrix logo",
    "Matrix brand identity",
    "visual identity system",
    "brand palette",
    "typography",
    "design tokens",
    "Matrix branding",
  ],
  og: {
    title: "Matrix — Visual Identity System",
    description:
      "Three logo directions. One quiet system. The visual foundation behind invisible architecture.",
  },
});

function Swatch({
  name,
  hex,
  token,
  fg = "text-background",
}: {
  name: string;
  hex: string;
  token: string;
  fg?: string;
}) {
  return (
    <div className="border border-border">
      <div className={`aspect-[4/3] ${fg} flex items-end p-6`} style={{ backgroundColor: hex }}>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase">{hex}</span>
      </div>
      <div className="p-5 border-t border-border">
        <div className="font-display text-2xl leading-none">{name}</div>
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-2">
          {token}
        </div>
      </div>
    </div>
  );
}

function LogoPlate({
  index,
  title,
  kicker,
  idea,
  build,
  voice,
  Mark: Glyph,
  dark = true,
}: {
  index: string;
  title: string;
  kicker: string;
  idea: string;
  build: string;
  voice: string;
  Mark: ComponentType<{ size?: number; className?: string }>;
  dark?: boolean;
}) {
  return (
    <article className={`border border-border ${dark ? "bg-ink text-fog" : "bg-fog text-ink"}`}>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 md:col-span-7 aspect-[16/11] relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.28em] text-gold">
            {index}
          </div>
          <div className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.22em] uppercase opacity-50">
            {kicker}
          </div>
          <Glyph size={180} className="breathe" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <div
              className="font-display text-2xl tracking-[0.4em] uppercase"
              style={{ letterSpacing: "0.45em" }}
            >
              M A T R I X
            </div>
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase opacity-50">
              Intelligence · Architecture · Impact
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 p-10 border-l border-border flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase opacity-60">
            Direction
          </div>
          <h3 className="font-display text-4xl md:text-5xl mt-3 leading-[0.95]">{title}</h3>
          <p className="mt-6 leading-relaxed opacity-80">{idea}</p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
                Construction
              </div>
              <p className="mt-2 text-sm leading-relaxed">{build}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
                Voice
              </div>
              <p className="mt-2 text-sm leading-relaxed">{voice}</p>
            </div>
          </div>

          {/* size lockup */}
          <div className="mt-auto pt-10 flex items-end gap-8 border-t border-border mt-10">
            <Glyph size={48} />
            <Glyph size={28} />
            <Glyph size={18} />
            <Glyph size={12} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Identity() {
  return (
    <PageShell>
      {/* Cover */}
      <Section className="grain pt-28 pb-28">
        <Eyebrow index="N° 000">Visual Foundation · Vol. I</Eyebrow>
        <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-0.02em] mt-10 max-w-5xl">
          The system before
          <br />
          <span className="italic text-muted-foreground">the systems.</span>
        </h1>
        <div className="mt-16 grid grid-cols-12 gap-6 sm:gap-8 border-t border-border pt-8">
          <p className="col-span-12 md:col-span-6 text-lg leading-relaxed text-foreground/80 font-light">
            Before a single product is built, an architecture must hold its own weight. What follows
            is the visual grammar of Matrix — three candidate marks, a disciplined palette, a
            typographic system, and the iconography that carries ideas across every surface the
            studio will ever touch.
          </p>
          <ul className="col-span-12 md:col-span-6 grid grid-cols-2 gap-y-3 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground self-end">
            <li>I &nbsp;·&nbsp; Marks</li>
            <li>IV &nbsp;·&nbsp; Tokens</li>
            <li>II &nbsp;·&nbsp; Palette</li>
            <li>V &nbsp;·&nbsp; Iconography</li>
            <li>III &nbsp;·&nbsp; Typography</li>
            <li>VI &nbsp;·&nbsp; Grid &amp; Rule</li>
          </ul>
        </div>
      </Section>

      {/* I — Marks */}
      <Section className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="N° 001">Marks</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Three directions.
            <br />
            <span className="italic text-muted-foreground">One quiet intelligence.</span>
          </h2>
        </div>

        <div className="space-y-10">
          <LogoPlate
            index="I"
            kicker="Connected lattice"
            title="Lattice"
            Mark={MarkLattice}
            idea="An M assembled from five nodes and the relations between them. Read close — a constellation. Read at a glance — a letter. The mark is a graph: every node is a discipline, every edge a collaboration."
            build="5 nodes · 6 edges · stroke 1.25 on 40-grid · centre node is the only weighted point — the studio."
            voice="Scientific, infrastructural, calm. Best for research surfaces, papers, and engineering."
          />
          <LogoPlate
            index="II"
            kicker="Aperture · golden panels"
            title="Aperture"
            Mark={MarkAperture}
            idea="Two angular gold panels frame an X-thread suspended between them — the moment intelligence becomes architecture. Inspired by the brand reference: structure on the outside, cognition within."
            build="2 mirrored trapezoids · 4 corner nodes · centre point in gold · thin X cross of currentColor."
            voice="Editorial, ceremonial, jewel-like. Best for the cover, brand book, and presentation systems."
          />
          <LogoPlate
            index="III"
            kicker="Meridian · horizon line"
            title="Meridian"
            Mark={MarkMeridian}
            idea="A structural M dissected by a single horizontal gold line — the meridian where intelligence meets impact. The most reductive mark in the family: pure geometry plus one decisive cut."
            build="4-stroke M · 1 horizon stroke in gold · 1 centre node · square line caps for archival weight."
            voice="Sovereign, monumental, archival. Best for signatures, awards, certificates, civic work."
          />
        </div>

        <p className="mt-12 text-sm text-muted-foreground max-w-2xl font-mono tracking-wide">
          Recommendation: <span className="text-foreground">Direction II — Aperture</span> as the
          primary, with
          <span className="text-foreground"> Lattice</span> as the small-scale glyph (favicon, app
          icon at &lt;24px), and
          <span className="text-foreground"> Meridian</span> reserved for monograms, foiling,
          embossing.
        </p>
      </Section>

      {/* II — Palette */}
      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="N° 002">Palette</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Six values.
            <br />
            <span className="italic">One per decade of grey.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Swatch name="Ink" hex="#050505" token="--ink" fg="text-fog" />
          <Swatch name="Graphite" hex="#151515" token="--graphite" fg="text-fog" />
          <Swatch name="Carbon" hex="#222222" token="--carbon" fg="text-fog" />
          <Swatch name="Silver" hex="#C9C9C9" token="--silver" fg="text-ink" />
          <Swatch name="Fog" hex="#F2F2F2" token="--fog" fg="text-ink" />
          <Swatch name="Gold" hex="#C9A14A" token="--gold" fg="text-ink" />
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6 sm:gap-8 border-t border-ink/10 pt-8 text-sm">
          <p className="col-span-12 md:col-span-6 leading-relaxed text-ink/80">
            The palette is monochrome by ratio — 90% ink and grey, 10% gold. Gold is never
            decorative; it appears only where the system makes a decision: an anchor, a hyperlink, a
            rule, an instrument.
          </p>
          <ul className="col-span-12 md:col-span-6 font-mono text-[11px] tracking-[0.18em] uppercase space-y-1 text-ink/70">
            <li>Background · Ink (#050505)</li>
            <li>Foreground · Fog (#F2F2F2)</li>
            <li>Accent · Gold (#C9A14A)</li>
            <li>Borders · Fog @ 8% on dark, Ink @ 10% on paper</li>
            <li>Selection · Gold / Ink</li>
          </ul>
        </div>
      </Section>

      {/* III — Typography */}
      <Section className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="N° 003">Typography</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            One serif for thought.
            <br />
            <span className="italic text-muted-foreground">One sans for record.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-7 border border-border p-10">
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
              Display · Instrument Serif
            </div>
            <p className="font-display text-[clamp(2.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.02em] mt-4">
              The quiet
              <br />
              <span className="italic">architecture.</span>
            </p>
            <div className="mt-8 grid grid-cols-4 gap-4 font-display text-3xl border-t border-border pt-6">
              <span>Aa</span>
              <span className="italic">Bb</span>
              <span>Cc</span>
              <span className="italic">Dd</span>
              <span>0123</span>
              <span className="italic">4567</span>
              <span>89</span>
              <span className="italic">&amp;æ</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 border border-border p-10">
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
              Text · Inter
            </div>
            <p className="text-base leading-relaxed mt-4 text-foreground/85">
              Inter carries the studio&apos;s voice in body, navigation, and interface. Used at
              weights 300 and 400, with measured tracking for editorial calm. Numerals are tabular.
              Quotes are typographic. Hyphens are deliberate.
            </p>
            <div className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-gold border-t border-border pt-4">
              Mono · IBM Plex Mono
            </div>
            <p className="font-mono text-xs mt-3 text-muted-foreground tracking-[0.05em]">
              0.000 — for indices, eyebrows, and instruments. <br />
              No emoji. No ligatures. Only signal.
            </p>
          </div>
        </div>

        {/* Type scale */}
        <div className="mt-10 overflow-x-auto">
          <div className="border border-border min-w-[640px]">
            <div className="grid grid-cols-12 border-b border-border font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              <div className="col-span-2 p-4 border-r border-border">Token</div>
              <div className="col-span-2 p-4 border-r border-border">Size</div>
              <div className="col-span-2 p-4 border-r border-border">Leading</div>
              <div className="col-span-6 p-4">Specimen</div>
            </div>
            {[
              { t: "display/xl", s: "9.5rem", l: "0.92", x: "Invisible" },
              { t: "display/lg", s: "5rem", l: "0.95", x: "Architecture" },
              { t: "display/md", s: "3rem", l: "1.00", x: "Doctrine" },
              {
                t: "body/lg",
                s: "1.125rem",
                l: "1.7",
                x: "We design the part you don't see, so the part you do feels inevitable.",
              },
              { t: "mono/eyebrow", s: "0.625rem", l: "1.0", x: "N° 001 · INTELLIGENCE" },
            ].map((r) => (
              <div
                key={r.t}
                className="grid grid-cols-12 border-b border-border last:border-b-0 items-baseline"
              >
                <div className="col-span-2 p-4 border-r border-border font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                  {r.t}
                </div>
                <div className="col-span-2 p-4 border-r border-border font-mono text-xs text-muted-foreground">
                  {r.s}
                </div>
                <div className="col-span-2 p-4 border-r border-border font-mono text-xs text-muted-foreground">
                  {r.l}
                </div>
                <div
                  className={`col-span-6 p-4 ${r.t.startsWith("display") ? "font-display" : r.t.startsWith("mono") ? "font-mono tracking-[0.22em] uppercase" : ""}`}
                  style={{
                    fontSize: r.t.startsWith("display") ? `min(${r.s}, 12vw)` : r.s,
                    lineHeight: r.l,
                  }}
                >
                  {r.x}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* IV — Tokens */}
      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="N° 004">Design Tokens</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            The constants
            <br />
            <span className="italic">that compose everything else.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {[
            {
              g: "color",
              rows: [
                ["--background", "#050505"],
                ["--foreground", "#F2F2F2"],
                ["--accent", "#C9A14A"],
                ["--muted-foreground", "#9E9E9E"],
                ["--border", "rgba(255,255,255,.08)"],
              ],
            },
            {
              g: "type",
              rows: [
                ["--font-display", "Instrument Serif"],
                ["--font-sans", "Inter"],
                ["--font-mono", "IBM Plex Mono"],
                ["tracking-tight", "-0.015em"],
                ["tracking-eyebrow", "0.22em"],
              ],
            },
            {
              g: "space",
              rows: [
                ["grid-max", "1440px"],
                ["gutter", "32 / 56 px"],
                ["section-y", "160 px"],
                ["radius", "0"],
                ["hairline", "1px"],
              ],
            },
            {
              g: "motion",
              rows: [
                ["breathe", "9s ease-in-out ∞"],
                ["rise", "1.2s cubic-bezier(.2,.7,.2,1)"],
                ["draw", "3.4s ease-out"],
                ["drift", "11s ease-in-out ∞"],
                ["duration-default", "500ms"],
              ],
            },
          ].map((g) => (
            <div key={g.g} className="col-span-12 md:col-span-6 border border-ink/15">
              <div className="px-5 py-3 border-b border-ink/15 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink/70">
                  Group · {g.g}
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                  stable
                </span>
              </div>
              <table className="w-full table-fixed">
                <tbody>
                  {g.rows.map(([k, v]) => (
                    <tr key={k} className="border-b border-ink/10 last:border-b-0">
                      <td className="px-5 py-3 font-mono text-xs text-ink/70 w-1/2 align-top">
                        {k}
                      </td>
                      <td className="px-5 py-3 font-mono text-xs text-ink align-top [overflow-wrap:anywhere]">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Section>

      {/* V — Iconography & Metaphors */}
      <Section className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="N° 005">Iconography</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            We do not use icons.
            <br />
            <span className="italic text-muted-foreground">We use metaphors.</span>
          </h2>
          <p className="col-span-12 md:col-span-9 md:col-start-4 text-muted-foreground max-w-2xl leading-relaxed">
            Each chapter of the studio earns one symbol. Drawn at 0.6 stroke, on a generous grid,
            without ornament. A library of figures rather than icons — meant to be contemplated, not
            clicked.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          {[
            { N: Constellation, t: "Constellation", k: "Distributed systems" },
            { N: Iceberg, t: "Iceberg", k: "Hidden intelligence" },
            { N: Threads, t: "Threads", k: "Orchestration" },
            { N: Prism, t: "Prism", k: "Perspective" },
            { N: Origami, t: "Origami", k: "Transformation" },
            { N: Observatory, t: "Observatory", k: "Research" },
          ].map(({ N, t, k }) => (
            <div
              key={t}
              className="col-span-6 md:col-span-4 bg-background aspect-square flex flex-col"
            >
              <div className="flex-1 flex items-center justify-center p-10 text-foreground/80">
                <N className="w-3/4 max-w-[260px]" />
              </div>
              <div className="border-t border-border px-5 py-4 flex items-baseline justify-between">
                <span className="font-display text-xl">{t}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  {k}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VI — Closing */}
      <Section className="py-32 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="N° 006">Onward</Eyebrow>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mt-8">
              The foundation holds.
              <br />
              <span className="italic text-muted-foreground">Now we build upon it.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end gap-6">
            <p className="text-muted-foreground leading-relaxed">
              Next chapters in the system: motion language, mobile UI, dashboard grammar, brand book
              (100+ pages), packaging philosophy, environmental signage.
            </p>
            <Link
              href="/"
              className="inline-block border border-foreground px-8 py-5 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              Return to the Cover →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
