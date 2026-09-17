import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { Observatory } from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/research",
  title: "AI Research & Intelligence Architecture",
  description:
    "Matrix Research: original long-form inquiry into artificial intelligence, perception, and computation — QiDS, CES-QN and KALPA frameworks, open questions, and open-access whitepapers.",
  keywords: [
    "Matrix research",
    "AI research",
    "artificial intelligence research",
    "intelligence architecture",
    "QiDS",
    "CES-QN",
    "KALPA",
    "AI frameworks",
    "AI whitepapers",
    "human intelligence development",
  ],
  og: {
    title: "Matrix Research",
    description: "An observatory for ideas that take a decade to fall into place.",
  },
});

const questions = [
  { t: "What must remain human when reasoning can be delegated?", k: "Foundations" },
  {
    t: "How does an institution remember without becoming a surveillance archive?",
    k: "Civic Systems",
  },
  { t: "What would restraint look like as an explicit design objective?", k: "Method" },
  {
    t: "How do cooperating systems stay legible to the people accountable for them?",
    k: "Orchestration",
  },
  {
    t: "Can the evolution of consciousness be a design constraint, not a metaphor?",
    k: "Human Intelligence",
  },
];

const papers = [
  {
    t: "The Quadrant Intelligence Development System (QiDS): A Scientific Architecture for Human Capability Development in the Age of Artificial Intelligence",
    k: "Human Intelligence",
    dh: "/capabilities/design",
    d: "26 July 2026",
    href: "https://zenodo.org/records/21610823",
  },
  {
    t: "The Quadrant Intelligence Development System (QiDS): A Scientific Architecture for Human Sensemaking in the Age of Artificial Intelligence",
    k: "Human Intelligence",
    dh: "/capabilities/design",
    d: "6 June 2026",
    href: "https://zenodo.org/records/20573620",
  },
  {
    t: "India 2026: A New Developmental Paradigm — Social Innovation, Liberal Arts and the Orange Economy",
    k: "Education & Social Innovation",
    dh: "/capabilities/education",
    d: "2 June 2026",
    href: "https://zenodo.org/records/20502701",
  },
  {
    t: "Autonomous Procurement Systems for Resilient Global Supply Networks",
    k: "Systems",
    dh: "/capabilities/systems",
    d: "1 June 2026",
    href: "https://zenodo.org/records/20492207",
  },
  {
    t: "CES-QN: A Causal–Self-Evolving–Quantum-Neuromorphic Framework",
    k: "Quanta",
    dh: "/capabilities/quanta",
    d: "24 May 2026",
    href: "https://zenodo.org/records/20364601",
  },
  {
    t: "The Architecture of Intelligence: From Discrete Agency to Field-Based Cognition",
    k: "Post-Agentic",
    d: "2 September 2026",
    href: "https://zenodo.org/records/22242899",
  },
];

export default function Research() {
  return (
    <PageShell>
      <Section rail="Practice I · Research" className="pt-32 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              An observatory,
              <br />
              <span className="italic text-muted-foreground">not a forecast.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Observatory className="w-full text-foreground/80 drift" />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-12 gap-6 sm:gap-8 border-t border-border pt-10">
          <div className="col-span-12 md:col-span-4 eyebrow">— On instruments and patience</div>
          <p className="col-span-12 md:col-span-8 font-display text-3xl md:text-4xl leading-tight">
            We study what intelligence is doing to perception, memory, and the texture of public
            life — and what it might still become if we are careful.
          </p>
        </div>
      </Section>

      <Section rail="Programs" className="pt-14 md:pt-20 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                t: "Foundations",
                d: "The grammar beneath learning systems. Attention, memory, generalization, and the limits of representation.",
              },
              {
                t: "Civic Systems",
                d: "How institutions remember and forget. Protocols, archives, and the long maintenance of public trust.",
              },
              {
                t: "Method",
                d: "How we make models legible to the people who must live with them. Tools, notations, and the discipline of restraint.",
              },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-display text-3xl tracking-tight">{p.t}</h3>
                <div className="h-px w-8 bg-gold my-4" />
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section rail="Questions" className="pt-14 md:pt-20 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10">
          <p className="col-span-12 text-muted-foreground leading-relaxed max-w-2xl">
            We keep our notebooks open rather than our publication list long. These are the
            questions currently under study. Findings are published only once they are settled.
          </p>
        </div>
        <div className="border-t border-border">
          {questions.map((p, i) => (
            <div key={p.t} className="grid grid-cols-12 gap-6 sm:gap-8 py-8 border-b border-border">
              <div className="col-span-2 font-mono text-xs tracking-widest text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-7 font-display text-2xl md:text-3xl leading-tight tracking-tight">
                <span className="text-gold">∴</span> {p.t}
              </div>
              <div className="col-span-12 md:col-span-3 eyebrow !text-muted-foreground self-center">
                {p.k}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section rail="Foundations" variant="paper" id="frameworks" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <p className="col-span-12 text-ink/75 leading-relaxed max-w-3xl">
            Our products do not originate from feature development. They emerge from original
            research. Every platform is grounded in a family of proprietary frameworks, developed to
            address structural gaps in how intelligence, human development, computation, and
            organisational systems are understood and designed.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-12 border-t border-ink/15 pt-12">
          {[
            {
              t: "CES-QN",
              s: "Coherence · Systems · Quantified Neuromorphic Reasoning",
              d: "An original systems framework for understanding coherence across intelligence, architecture, computation, and complex systems. CES-QN addresses civilisation-scale problems through structured reasoning, system coherence, and interdisciplinary intelligence — grounded in conservation laws, constructal theory, and scaling principles.",
              u: "The logic layer beneath Humming, ARPS, Mangrove, and Datum.",
            },
            {
              t: "KALPA",
              s: "Knowledge · Arts · Liberal Practice",
              d: "A framework connecting intelligence, education, creativity, social innovation, culture, and human development. Bridges the gap between technical intelligence systems and human flourishing — the civilisational counterpart to CES-QN's computational principles.",
              u: "The philosophy behind QiDS, MindMuse Suite, and AlgoVista.",
            },
            {
              t: "QiDS",
              s: "Human Development Infrastructure",
              d: "A single architecture parameterised across six contexts — school, college, university, corporate, government, and community — via a Dynamic Weightage mechanism rather than six separate products. Connects nine-method evidence triangulation, AI-assisted adaptive assessment (QSIA), longitudinal Growth Missions, and a seven-layer Human Intelligence Portfolio into one coherent development system. Assessment formally chains to intervention rather than terminating at a score. AI operates as a bounded internal capability, with a human-judgment requirement maintained in high-stakes decisions.",
              u: "From Metacognitive and Resilience Intelligence to STREAM integration and the CARE model.",
            },
            {
              t: "Adaptive Computation",
              s: "The Backbone of Gravity and Matrix Core Architecture",
              d: "A policy-driven, event-enabled orchestration architecture with heterogeneous execution lanes — selecting the minimum sufficient computational path for each task across deterministic, statistical, ML, optimisation, LLM, agentic, and multi-agent paradigms. Routes by intelligence type and resource availability simultaneously. Maintains a full Capability Registry rather than an agent registry alone. Records every routing decision with rationale in a Decision Ledger. Execution outcomes feed future routing decisions through closed-loop learning.",
              u: "The intelligence layer that decides how intelligence should be used.",
            },
            {
              t: "Nature-Inspired Algorithms",
              s: "Frontier Research Platform",
              d: "A research and applied innovation suite drawing from the computational principles embedded in physical and biological systems — field dynamics, swarm intelligence, bio-photonics, resonance, and constructal flow. Underpins MATRIX's frontier initiatives in frequency therapeutics, environmental biosensor networks, and atmospheric intelligence. Provides the algorithmic substrate for problems that fall outside the boundaries of conventional AI paradigms — where coherence, emergence, and physical law are the governing design principles rather than gradient descent or reward maximisation.",
              u: "The substrate for problems where physical law governs the design — not gradient descent.",
            },
            {
              t: "The Next Evolution of the Agent",
              s: "Post-Agentic Intelligence Architecture · zenodo.org/records/22242899",
              d: "A unified theoretical framework synthesising modular container-based architectures, Quantassical (quantum-classical hybrid) computation, and nature-inspired field-based algorithms toward post-agentic intelligence. Moves beyond tool-calling LLMs with planning loops toward systems where agency emerges from coherence rather than instruction — governed by physical and causal principles rather than prompt engineering. Multi-agent coordination becomes a property of the architecture, not an orchestration problem layered on top of it.",
              u: "The next research frontier for the Gravity substrate and the CES-QN Framework applied to agent design itself.",
            },
          ].map((f) => (
            <div key={f.t} className="col-span-12 md:col-span-6">
              <h3 className="font-display text-5xl md:text-6xl tracking-tight">{f.t}</h3>
              <p className="eyebrow mt-4 !text-ink/60">{f.s}</p>
              <div className="h-px w-10 bg-gold my-6" />
              <p className="text-ink/80 leading-relaxed">{f.d}</p>
              <p className="mt-5 font-display text-xl italic text-ink/60">{f.u}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section rail="Whitepapers" id="whitepapers" className="pt-14 md:pt-20 pb-20 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10">
          <p className="col-span-12 text-muted-foreground leading-relaxed max-w-2xl">
            Open-access preprints, deposited on Zenodo with a permanent DOI. Each is published only
            once the argument has settled.
          </p>
        </div>
        <div className="border-t border-border">
          {papers.map((p, i) => (
            <div
              key={p.href}
              className="group grid grid-cols-12 gap-6 sm:gap-8 py-8 border-b border-border hover:bg-foreground/[0.03] transition-colors duration-500"
            >
              <div className="col-span-2 font-mono text-xs tracking-widest text-gold">
                ⌬ {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-7">
                <a href={p.href} target="_blank" rel="noreferrer" className="block">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                    {p.t}
                    <span className="inline-block ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      ↗
                    </span>
                  </h3>
                </a>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-3">
                  Zenodo · Open Access · Preprint
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 self-center">
                {p.dh ? (
                  <Link
                    href={p.dh}
                    className="eyebrow !text-muted-foreground hover:!text-gold transition-colors duration-500"
                  >
                    {p.k} ↗
                  </Link>
                ) : (
                  <p className="eyebrow !text-muted-foreground">{p.k}</p>
                )}
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-2">
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section rail="Case Studies" id="case-studies" className="pt-14 md:pt-20 pb-20 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10">
          <p className="col-span-12 text-muted-foreground leading-relaxed max-w-2xl">
            Reconstructions of real engagements — what was asked, what we built, and what the
            systems did in the world. Written only once the work has settled.
          </p>
        </div>
        <div className="border-t border-border py-12">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold/60">
            ◌ First studies are being prepared · coming soon
          </p>
        </div>
      </Section>

      <Section rail="Collaboration" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-center border-t border-border pt-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-3xl md:text-4xl leading-tight mt-6">
              If you are holding one of these questions too, we would rather study it together.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Write to the studio →
            </a>
          </div>
        </div>
      </Section>

      <Section rail="The Portfolio" className="pt-14 md:pt-20 pb-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-tight">
            Research becomes platforms. Platforms become products.{" "}
            <span className="italic text-muted-foreground">Explore the architecture.</span>
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right flex md:justify-end gap-6 flex-col md:flex-row">
            <Link
              href="/products"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              The Portfolio →
            </Link>
            <Link
              href="/capabilities"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              Nine Capabilities →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
