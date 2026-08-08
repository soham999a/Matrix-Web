import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { NetworkIntelligence } from "@/components/matrix/NetworkIntelligence";
import {
  RecursiveIntelligence,
  CenteredCoherence,
  Resonance,
  RelationalIntelligence,
  Transformation,
  EmergenceObservation,
} from "@/components/matrix/Figures";
import { Ripple } from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/",
  title: { absolute: "Matrix — Intelligence Architecture Studio for AI, Research & Design" },
  description:
    "Matrix is an intelligence architecture studio in Kolkata designing the invisible architecture behind the future — original AI research, strategic counsel, custom AI agents, and applied intelligence platforms for civilization-scale institutions.",
  keywords: [
    "Matrix",
    "intelligence architecture",
    "artificial intelligence studio",
    "AI research",
    "AI consulting",
    "custom AI agents",
    "AI agency",
    "intelligent systems design",
    "AI products",
    "Kolkata AI",
  ],
  og: {
    title: "Matrix — The Invisible Architecture Behind the Future",
    description: "Designing intelligence. Invisible systems. Visible impact.",
  },
});

export default function Index() {
  return (
    <PageShell>
      {/* ————— ACT I · COVER ————— */}
      <Section className="grain relative isolate overflow-hidden min-h-[100svh] pt-28 pb-20 flex flex-col">
        {/* hero background — looping neural animation */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-40">
            <source src="/neuron-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
        {/* corner registration marks */}
        <div className="absolute top-24 left-5 sm:left-8 lg:left-14 font-mono text-[10px] tracking-[0.28em] uppercase text-gold pointer-events-none">
          Cohered by Design
        </div>
        <div className="hidden sm:block absolute top-24 right-5 sm:right-8 lg:right-14 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground pointer-events-none">
          Intelligence · Architecture · Impact
        </div>

        <div className="flex-1 grid grid-cols-12 gap-8 items-center mt-12">
          <div className="col-span-12 lg:col-span-7 rise">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-muted-foreground mb-8">
              A Studio for Civilization-Scale Intelligence
            </div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.92] tracking-[-0.02em]">
              The invisible
              <br />
              <span className="italic text-muted-foreground">architecture</span>
              <br />
              behind the future.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <NetworkIntelligence
              size={340}
              className="w-full h-auto max-w-[340px] text-foreground"
            />
          </div>
        </div>

        {/* lower band */}
        <div className="mt-16 grid grid-cols-12 gap-8 border-t border-border pt-8 items-end">
          <div className="col-span-12 md:col-span-3 eyebrow">M · A · T · R · I · X</div>
          <p className="col-span-12 md:col-span-6 font-display text-2xl md:text-3xl leading-[1.2] text-foreground/90">
            Intelligence. Architecture. Impact.
          </p>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <a
              href="#manifesto"
              className="font-mono text-[10px] tracking-[0.28em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Descend ↓
            </a>
          </div>
        </div>
      </Section>

      {/* ————— LITANY · POWER WORDS ————— */}
      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Litany">Mātṛkā · the mother-forms</Eyebrow>
          </div>
          <ul className="col-span-12 md:col-span-9 space-y-6 md:space-y-8">
            {[
              { n: "i.", t: "Cohered by Design." },
              { n: "ii.", t: "The Real Revolution is the evolution of consciousness." },
              {
                n: "iii.",
                t: "The end of science is not to prove a theory — but to improve mankind.",
              },
              {
                n: "iv.",
                t: "An intelligence architecture firm designing the next intelligence layer of civilization.",
              },
              { n: "v.", t: "Not a company. A culture. A phenomenon." },
            ].map((l) => (
              <li
                key={l.n}
                className="grid grid-cols-12 gap-6 items-baseline border-b border-border/60 pb-6 last:border-b-0"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
                  {l.n}
                </span>
                <p className="col-span-10 md:col-span-11 font-display text-2xl md:text-4xl leading-[1.2] tracking-tight text-foreground/90">
                  {l.t}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ————— ACT II · MANIFESTO FRAGMENT ————— */}
      <Section id="manifesto" className="py-24 md:py-40 border-t border-border">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="§ I">Manifesto · Fragment</Eyebrow>
          </div>
          <p className="col-span-12 md:col-span-3 eyebrow">Read in one breath</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <p className="font-display text-[clamp(2rem,5vw,4.75rem)] leading-[1.08] tracking-[-0.015em] text-foreground">
              We do not build software.
              <br />
              We build the <span className="italic">conditions</span> under which intelligence can
              be trusted.
            </p>
            <p className="font-display text-[clamp(1.5rem,3vw,3rem)] leading-[1.3] mt-16 text-muted-foreground max-w-5xl">
              An interface is a confession. A protocol is a constitution. A model is a witness. A
              product is a promise kept, quietly, for a century.
            </p>
            <p className="font-display text-[clamp(1.5rem,3vw,3rem)] leading-[1.3] mt-10 text-muted-foreground max-w-5xl">
              We work for the people who will be remembered for what they refused to release — and
              for what they finally did.
            </p>

            <div className="mt-20 flex items-center gap-6">
              <span className="rule-gold !w-16" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/70">
                Matrix · § I · The Quiet Vow
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ————— ACT III · METAPHOR SEQUENCE ————— */}
      <Section variant="paper" className="py-20 md:py-32">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="§ II">Sequence</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Six figures
            <br />
            <span className="italic">for one method.</span>
          </h2>
        </div>

        {[
          {
            N: RecursiveIntelligence,
            t: "Recursive Intelligence",
            k: "Patterns repeat across every scale.",
            d: "Complexity emerges from remarkably simple rules. We design the rule, not the outcome — and let the structure grow itself.",
          },
          {
            N: CenteredCoherence,
            t: "Centered Coherence",
            k: "Intelligence begins with internal coherence.",
            d: "Before external complexity, a system must agree with itself. We establish the centre first; everything else is measured from it.",
          },
          {
            N: Resonance,
            t: "Resonance & Frequency",
            k: "Structure emerges when vibration becomes ordered.",
            d: "Standing waves, interference, alignment. Organisations and models both hold form only where their frequencies agree.",
          },
          {
            N: RelationalIntelligence,
            t: "Relational Intelligence",
            k: "Meaning exists between entities, not within them.",
            d: "Models, agents, humans, and instruments are nodes. Our work is the geometry that lets them think together.",
          },
          {
            N: Transformation,
            t: "Transformation",
            k: "Knowledge changes form without losing truth.",
            d: "One brief enters; research, product, policy and form emerge. Refraction, not distortion — the light is conserved.",
          },
          {
            N: EmergenceObservation,
            t: "Emergence & Observation",
            k: "Reality reveals itself to careful observation.",
            d: "We fold slowly and watch patiently. Discovery is a construction discipline, calibrated for decades rather than quarters.",
          },
        ].map((row, i) => (
          <article
            key={row.t}
            className="grid grid-cols-12 gap-8 items-center border-t border-ink/15 py-16"
          >
            <div className={`col-span-12 md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/3] flex items-center justify-center text-ink/80">
                <row.N className="w-full max-w-[440px]" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink/55">
                Figure {String(i + 1).padStart(2, "0")} · of · 06
              </div>
              <h3 className="font-display text-4xl md:text-6xl leading-[1] tracking-tight mt-4">
                {row.t}
              </h3>
              <p className="font-display text-2xl md:text-3xl italic text-ink/70 mt-5">{row.k}</p>
              <p className="mt-6 max-w-xl text-ink/75 leading-relaxed">{row.d}</p>
              <p className="mt-6 font-mono text-[10px] tracking-[0.24em] uppercase text-ink/40">
                Hover the figure · construction before form
              </p>
            </div>
          </article>
        ))}
      </Section>

      {/* ————— ACT IV · CAPABILITIES ————— */}
      <Section className="py-24 md:py-40">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="§ III">Capabilities</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Nine disciplines
            <br />
            <span className="italic text-muted-foreground">held by a single hand.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12">
          {[
            {
              n: "I",
              t: "Artificial Intelligence",
              d: "Foundation, alignment, agents, evaluation.",
            },
            { n: "II", t: "Systems", d: "Architectures that outlive their authors." },
            { n: "III", t: "Engineering", d: "The craft that makes an idea load-bearing." },
            { n: "IV", t: "Consulting", d: "Counsel for governments, founders, institutions." },
            { n: "V", t: "Futurology", d: "Disciplined study of the century ahead." },
            {
              n: "VI",
              t: "Sustainability",
              d: "Systems accountable to the century they are built in.",
            },
            {
              n: "VII",
              t: "Education & Social Innovation",
              d: "A curriculum architecture for those who help others live on the ground.",
            },
            {
              n: "VIII",
              t: "Quanta",
              d: "Superposition, entanglement, and probability as methods.",
            },
            {
              n: "IX",
              t: "Design & Human Intelligence",
              d: "The discipline that quietly governs the rest — and how humans and machines think together.",
            },
          ].map((c, i) => (
            <div
              key={c.n}
              className={`col-span-12 md:col-span-4 group border-border p-8 md:p-10 min-h-[220px] md:min-h-[260px] flex flex-col justify-between
                          ${i < 9 ? "border-t" : ""}
                          ${i % 3 !== 2 ? "md:border-r" : ""}
                          ${i >= 6 ? "md:border-b" : ""}
                          hover:bg-foreground/[0.025] transition-colors duration-700`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{c.n}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  Discipline
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05] mt-10">
                  {c.t}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ————— ACT V · QUIET POSITION ————— */}
      <Section className="py-24 md:py-40 border-t border-border">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <Ripple className="w-full text-foreground/80 breathe" />
          </div>
          <blockquote className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-[1.15] tracking-tight">
            <span className="text-gold">“</span>The real revolution is the
            <span className="italic"> evolution of consciousness</span>. Intelligence, like steel or
            light, has grain and consequence — we treat it with the seriousness of any element we
            choose to build with.<span className="text-gold">”</span>
            <footer className="mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground not-italic">
              — Matrix Manifesto · § II
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ————— ACT VI · CLOSING & EXPANSION HINT ————— */}
      <Section className="py-24 md:py-40 border-t border-border">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="§ IV">Closing</Eyebrow>
            <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.92] mt-8">
              Cohered
              <br />
              <span className="italic text-muted-foreground">by design.</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              An intelligence architecture firm designing the next intelligence layer of
              civilization — quietly, and for those who intend to still be here in a hundred years.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end gap-6">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A small number of engagements each year. Research collaboration, strategic counsel, or
              product partnership. The door is narrow on purpose.
            </p>
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-8 py-5 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-full sm:w-fit text-center"
            >
              Begin a Correspondence →
            </a>
          </div>
        </div>

        {/* expansion hint — the doors */}
        <div className="mt-32 border-t border-border pt-12">
          <div className="flex items-baseline justify-between mb-10">
            <Eyebrow index="§ V">Further</Eyebrow>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Five chambers · One studio
            </span>
          </div>
          <div className="grid grid-cols-12">
            {[
              {
                to: "/identity",
                n: "00",
                t: "Visual Foundation",
                k: "The system before the systems",
              },
              { to: "/manifesto", n: "01", t: "The Manifesto", k: "Twelve theses, in full" },
              { to: "/research", n: "02", t: "Research", k: "Open notebooks, slow questions" },
              { to: "/consulting", n: "03", t: "Consulting", k: "Counsel for the long now" },
              { to: "/products", n: "04", t: "Products", k: "Quiet software, durable form" },
            ].map((d, i) => (
              <Link
                key={d.to}
                href={d.to}
                className={[
                  "group border-t border-l border-border p-6 sm:p-8 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between hover:bg-foreground/[0.03] transition-colors duration-700",
                  "col-span-12",
                  i === 0 ? "md:col-span-4" : "md:col-span-2",
                  i === 4 ? "md:border-r" : "",
                ].join(" ")}
              >
                <div className="font-mono text-[10px] tracking-[0.28em] text-gold">{d.n}</div>
                <div>
                  <h4 className="font-display text-2xl md:text-3xl leading-[1.05] tracking-tight">
                    {d.t}
                    <span className="inline-block ml-2 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      →
                    </span>
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{d.k}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
