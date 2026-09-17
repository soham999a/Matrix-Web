import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
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
import { NautilusFigure } from "@/components/matrix/OrigamiFigures";
import { DisciplineCard } from "@/components/matrix/DisciplineCard";
import { LiveProductsPill } from "@/components/matrix/LiveProductsPill";
import { LazyVideo } from "@/components/matrix/LazyVideo";
import { HeroNetwork } from "@/components/matrix/HeroNetwork";
import { Reveal } from "@/components/matrix/Reveal";
import { Magnetic } from "@/components/matrix/Magnetic";

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
});

export default function Index() {
  return (
    <PageShell>
      {/* ————— ACT I · COVER ————— */}
      <Section
        rail="Act I · Cover"
        className="grain relative isolate overflow-hidden min-h-[100svh] pt-28 pb-20 flex flex-col"
      >
        {/* hero background — looping neural animation + ambient field */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <LazyVideo
            poster="/neuron-hero-poster.jpg"
            src="/neuron-hero-720p.mp4"
            className="h-full w-full"
          />
          <HeroNetwork className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
        {/* corner registration marks */}
        <div className="absolute top-24 left-5 sm:left-8 lg:left-14 font-mono text-[10px] tracking-[0.28em] uppercase text-gold pointer-events-none">
          Cohered by Design
        </div>
        <div className="hidden sm:block absolute top-24 right-5 sm:right-8 lg:right-14 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground pointer-events-none">
          Intelligence · Architecture · Impact
        </div>

        <div className="flex-1 grid grid-cols-12 gap-6 sm:gap-8 items-center mt-12">
          <div className="col-span-12 lg:col-span-7 rise">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-muted-foreground mb-8">
              A Studio for Civilization-Scale Intelligence
            </div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.92] tracking-[-0.02em]">
              <Reveal>The invisible</Reveal>
              <br />
              <Reveal className="italic text-gold" delay={110}>
                architecture
              </Reveal>
              <br />
              <Reveal delay={220}>behind the future.</Reveal>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end -mt-12 sm:-mt-16 lg:mt-0">
            <NetworkIntelligence
              size={340}
              className="w-full h-auto max-w-[340px] text-foreground"
            />
          </div>
        </div>

        {/* lower band */}
        <div className="mt-16 grid grid-cols-12 gap-6 sm:gap-8 border-t border-border pt-8 items-end">
          <div className="col-span-12 md:col-span-3 eyebrow">M · A · T · R · I · X</div>
          <p className="col-span-12 md:col-span-6 font-display text-2xl md:text-3xl leading-[1.2] text-foreground/90">
            Intelligence. Architecture. Impact.
          </p>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <Magnetic>
              <a
                href="#manifesto"
                className="inline-block font-mono text-[10px] tracking-[0.28em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
              >
                Descend ↓
              </a>
            </Magnetic>
          </div>
        </div>
      </Section>

      {/* ————— IDENTITY · ABOUT MATRIX ————— */}
      <Section rail="Identity" className="pt-14 md:pt-20 pb-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-8">
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <h1 className="mt-8 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.15] tracking-[-0.015em]">
              An Applied Intelligence firm building AI, analytics, intelligent software, and
              decision systems that help organisations solve complex problems and make better
              decisions.
            </h1>
            <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
              MATRIX operates across nine interconnected disciplines — from applied AI, systems, and
              engineering to consulting, design, human intelligence, education, and social
              innovation. Our integrated intelligence ecosystem serves education, enterprises,
              manufacturing, supply chains, sustainability, and government sectors through scalable,
              explainable, and practical solutions.
            </p>
          </div>
          <div className="hidden lg:flex col-span-5 items-center justify-center">
            <NautilusFigure className="w-full max-w-[420px] h-auto text-foreground/80" />
          </div>
        </div>

        {/* floating identity statements */}
        <ul className="col-span-12 lg:w-7/12 lg:pl-8 mb-24 space-y-4 md:space-y-5">
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
          ].map((l, i) => (
            <li key={l.n} className="grid grid-cols-12 gap-6 items-baseline">
              <span
                className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.28em] uppercase text-gold float-line"
                style={{ animationDelay: `${i * 0.9}s` }}
              >
                {l.n}
              </span>
              <p
                className="col-span-10 md:col-span-11 font-display text-2xl md:text-4xl leading-[1.2] tracking-tight text-foreground/90 float-line"
                style={{ animationDelay: `${i * 0.9}s` }}
              >
                {l.t}
              </p>
            </li>
          ))}
        </ul>

        {/* Vision / Mission / Invisible Architecture grid */}
        <div className="grid grid-cols-12 border-t border-l border-r border-border bg-card">
          {[
            {
              h: "Vision",
              p: "Establish MATRIX as a globally recognized Deep Technology Research & Innovation Organization delivering trusted AI systems and intelligent solutions for industry and society. Position India as a leader in responsible AI.",
            },
            {
              h: "Mission",
              p: "Build a unified ecosystem of AI-powered products that convert complex data into trusted intelligence and actionable insights. Develop practical, scalable, explainable AI solutions while creating original IP.",
            },
            {
              h: "The Invisible Architecture",
              p: '"The Invisible Architecture Behind the Future." We design the reasoning infrastructure through which intelligence becomes trustworthy, scalable, and beneficial — cohered by design.',
            },
          ].map((c, i) => (
            <div
              key={c.h}
              className={[
                "col-span-12 md:col-span-4 p-8 border-b md:border-b-0 border-r border-border last:border-r-0",
                i === 2 ? "md:border-r-0" : "",
              ].join(" ")}
            >
              <h2 className="font-mono text-[11px] tracking-[0.1em] uppercase text-gold">{c.h}</h2>
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-foreground/75">
                {c.p}
              </p>
            </div>
          ))}
        </div>

        {/* capability pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            "Applied Intelligence",
            "Artificial Intelligence",
            "Applied Research",
            "Enterprise Intelligence",
            "Design & Consulting",
            "Deep-tech",
            "Frontier Research",
            "Human Intelligence",
          ].map((p) => (
            <span
              key={p}
              className="border border-gold/40 text-gold font-mono text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 transition-colors duration-300 hover:bg-gold/10"
            >
              {p}
            </span>
          ))}
        </div>
      </Section>

      {/* ————— ACT II · MANIFESTO FRAGMENT ————— */}
      <Section
        rail="Act II · Manifesto"
        id="manifesto"
        cursorInvert
        className="pt-14 md:pt-20 pb-24 md:pb-40 !text-ink"
        style={{ backgroundColor: "#D4B16C" }}
      >
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-10">
            <p className="font-display text-[clamp(2rem,5vw,4.75rem)] leading-[1.08] tracking-[-0.015em]">
              We do not build software.
              <br />
              We build the <span className="italic">conditions</span> under which intelligence can
              be trusted.
            </p>
            <p className="font-display text-[clamp(1.5rem,3vw,3rem)] leading-[1.3] mt-16 text-ink/70 max-w-5xl">
              An interface is a confession. A protocol is a constitution. A model is a witness. A
              product is a promise kept, quietly, for a century.
            </p>
            <p className="font-display text-[clamp(1.5rem,3vw,3rem)] leading-[1.3] mt-10 text-ink/70 max-w-5xl">
              We work for the people who will be remembered for what they refused to release — and
              for what they finally did.
            </p>

            <div className="mt-20 flex items-center gap-6">
              <span className="rule-gold !w-16" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink/70">
                Matrix · I · The Quiet Vow
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ————— ACT III · METAPHOR SEQUENCE ————— */}
      <Section rail="Act III · Sequence" variant="paper" className="pt-14 md:pt-20 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-20">
          <h2 className="col-span-12 pl-[40px] font-display text-5xl md:text-7xl leading-[0.92] tracking-tight">
            <Reveal>Six figures</Reveal>
            <br />
            <Reveal className="italic text-muted-foreground" delay={120}>
              for one method.
            </Reveal>
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
            className={`grid grid-cols-12 gap-6 sm:gap-8 items-center ${i === 0 ? "py-16" : "border-t border-ink/15 py-16"}`}
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
      <Section rail="Act IV · Capabilities" className="pt-14 md:pt-20 pb-24 md:pb-40">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-20">
          <h2 className="col-span-12 pl-[31px] font-display text-5xl md:text-7xl leading-[0.92] tracking-tight">
            <Reveal>Nine disciplines</Reveal>
            <br />
            <Reveal className="italic text-muted-foreground" delay={120}>
              held by a single hand.
            </Reveal>
          </h2>
        </div>

        <div className="grid grid-cols-12">
          {[
            {
              n: "I",
              t: "Artificial Intelligence",
              d: "Foundation, alignment, agents, evaluation.",
              slug: "ai",
              points: [
                "Causal AI",
                "Self-Evolving Models",
                "Agentic Systems",
                "Context Engineering",
              ],
            },
            {
              n: "II",
              t: "Systems",
              d: "Architectures that outlive their authors.",
              slug: "systems",
              points: [
                "Enterprise Architecture",
                "Digital Twins",
                "Decision Systems",
                "Operational Intelligence",
              ],
            },
            {
              n: "III",
              t: "Engineering",
              d: "The craft that makes an idea load-bearing.",
              slug: "engineering",
              points: ["Hardware", "Software", "Origami & Crafts", "Sound Engineering"],
            },
            {
              n: "IV",
              t: "Consulting",
              d: "Counsel for governments, founders, institutions.",
              slug: "consulting",
              points: ["AI Strategy", "Training & Workshops", "R&D Advisory", "SaaS & Analytics"],
            },
            {
              n: "V",
              t: "Futurology",
              d: "Disciplined study of the century ahead.",
              slug: "futurology",
              points: [
                "Post-Smartphone Intelligence",
                "Ambient Computing",
                "Graph Network Intelligence",
                "Energy Tech",
              ],
            },
            {
              n: "VI",
              t: "Sustainability",
              d: "Systems accountable to the century they are built in.",
              slug: "sustainability",
              points: [
                "Mangrove Platform",
                "Water & Carbon Intelligence",
                "Climate Intelligence",
                "Clean Energy",
              ],
            },
            {
              n: "VII",
              t: "Education & Social Innovation",
              d: "A curriculum architecture for those who help others live on the ground.",
              slug: "education",
              points: [
                "QiDS : Human Intelligence",
                "Knowledge Systems",
                "Learning Society",
                "Human Science Development",
              ],
            },
            {
              n: "VIII",
              t: "Quanta",
              d: "Superposition, entanglement, and probability as methods.",
              slug: "quanta",
              points: [
                "Quantum Computing",
                "Quantum Machine Learning",
                "Quantum Photonics",
                "Fusion Research",
              ],
            },
            {
              n: "IX",
              t: "Design & Human Intelligence",
              d: "The discipline that quietly governs the rest — and how humans and machines think together.",
              slug: "design",
              points: ["Liberal Arts", "Cymatics", "Human–AI Interaction", "Creative Cognition"],
            },
          ].map((c, i) => (
            <DisciplineCard key={c.n} c={c} i={i} />
          ))}
        </div>
      </Section>

      {/* ————— ACT V · QUIET POSITION ————— */}
      <Section
        rail="Act V · Quiet Position"
        className="pt-14 md:pt-20 pb-24 md:pb-40 border-t border-border"
      >
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <Ripple className="w-full text-foreground/80 breathe" />
          </div>
          <blockquote className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-[1.15] tracking-tight">
            <span className="text-gold">“</span>The real revolution is the
            <span className="italic"> evolution of consciousness</span>. Intelligence, like steel or
            light, has grain and consequence — we treat it with the seriousness of any element we
            choose to build with.<span className="text-gold">”</span>
            <footer className="mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground not-italic">
              — Matrix Manifesto · II
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ————— ACT VI · CLOSING ————— */}
      <Section
        rail="Act VI · Closing"
        variant="paper"
        className="pt-14 md:pt-20 pb-24 md:pb-40 border-t border-border"
      >
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.92]">
              <Reveal>Cohered</Reveal>
              <br />
              <Reveal className="italic text-muted-foreground" delay={120}>
                by design.
              </Reveal>
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
            <Magnetic className="block w-full sm:w-fit">
              <Link
                href="/contact"
                className="block border border-foreground px-8 py-5 font-mono text-[11px] tracking-[0.28em] uppercase text-center hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                Begin a Correspondence →
              </Link>
            </Magnetic>
          </div>
        </div>
      </Section>

      {/* ————— FURTHER · THE DOORS ————— */}
      <Section rail="Further" className="py-16 md:py-20">
        <div className="pt-0">
          <div className="flex items-baseline justify-end mb-8">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Five chambers · One studio
            </span>
          </div>
          <div className="grid grid-cols-12">
            {[
              {
                to: "/agency",
                n: "00",
                t: "Our Portfolio",
                k: "Every project and platform, one place",
              },
              { to: "/manifesto", n: "01", t: "The Manifesto", k: "Twelve theses, in full" },
              { to: "/research", n: "02", t: "Research", k: "Open notebooks, slow questions" },
              { to: "/agency#consulting", n: "03", t: "Consulting", k: "Counsel for the long now" },
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
                  <h4
                    className={`font-display leading-[1.05] tracking-tight ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}
                  >
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
      <LiveProductsPill />
    </PageShell>
  );
}
