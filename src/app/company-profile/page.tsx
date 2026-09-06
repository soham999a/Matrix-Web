import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo, SITE } from "@/lib/seo";
import { JsonLd } from "@/components/matrix/JsonLd";

export const metadata = pageSeo({
  path: "/company-profile",
  title: "Company Profile 2026 — MATRIX · Applied AI Research Studio",
  description:
    "Company profile of MATRIX — an applied AI research studio designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial. Intelligence architecture for governments, enterprises, universities, and society.",
  keywords: [
    "MATRIX company profile",
    "MATRIX Labs profile",
    "applied AI research studio",
    "intelligence architecture",
    "Omega Model",
    "CES-QN",
    "KALPA",
    "Somnath Banerjee",
  ],
  og: {
    title: "Company Profile · 2026 — MATRIX",
    description: "Applied AI Research Studio · Intelligence Architecture · Cohered by Design",
  },
});

function Head({ n, t, k }: { n: string; t: string; k?: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 md:mb-16">
      <div className="col-span-12 md:col-span-3">
        <Eyebrow index={n}>{t}</Eyebrow>
      </div>
      <div className="col-span-12 md:col-span-9">
        {k && (
          <p className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl italic text-muted-foreground">
            {k}
          </p>
        )}
      </div>
    </div>
  );
}

function Principle({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="border-t border-border py-8 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-3">
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">{label}</span>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">{title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{body}</p>
      </div>
    </div>
  );
}

function NumRow({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <article className="grid grid-cols-12 gap-6 sm:gap-8 border-t border-border py-8">
      <div className="col-span-12 md:col-span-1">
        <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{n}</span>
      </div>
      <div className="col-span-12 md:col-span-3">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">{t}</h3>
      </div>
      <div className="col-span-12 md:col-span-8">
        <p className="text-muted-foreground leading-relaxed">{d}</p>
      </div>
    </article>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
      {children}
    </span>
  );
}

function Framework({
  label,
  title,
  body,
  chips,
  meta,
}: {
  label: string;
  title: string;
  body: string;
  chips?: string[];
  meta?: string;
}) {
  return (
    <div className="border-t border-border py-14 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-4">
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">{label}</span>
        <h3 className="font-display text-3xl md:text-4xl tracking-tight mt-4">{title}</h3>
      </div>
      <div className="col-span-12 md:col-span-8">
        <p className="text-foreground/80 leading-relaxed max-w-3xl">{body}</p>
        {chips && (
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        )}
        {meta && (
          <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            {meta}
          </p>
        )}
      </div>
    </div>
  );
}

function Platform({
  n,
  t,
  tag,
  s,
  d,
}: {
  n: string;
  t: string;
  tag: string;
  s: string;
  d: string;
}) {
  return (
    <article className="border-t border-border py-14 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-1">
        <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{n}</span>
      </div>
      <div className="col-span-12 md:col-span-7">
        <h3 className="font-display text-3xl md:text-4xl tracking-tight">{t}</h3>
        <p className="font-display text-lg italic text-muted-foreground mt-2">{tag}</p>
        <p className="mt-5 text-foreground/80 leading-relaxed max-w-2xl">{d}</p>
      </div>
      <div className="col-span-12 md:col-span-4 md:text-right">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold">{s}</span>
      </div>
    </article>
  );
}

function Horizon({ t, items }: { t: string; items: { b?: string; d: string }[] }) {
  return (
    <div className="border-t border-border py-10 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-3">
        <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold">{t}</h3>
      </div>
      <div className="col-span-12 md:col-span-9">
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.d}
              className="flex items-baseline gap-3 text-foreground/85 leading-relaxed"
            >
              <span className="font-mono text-gold shrink-0">{item.b ? `${item.b} —` : "◌"}</span>
              <span>{item.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stakeholder({ t, d, chips }: { t: string; d: string; chips: string[] }) {
  return (
    <div className="border-t border-border py-12 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-4">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">{t}</h3>
      </div>
      <div className="col-span-12 md:col-span-8">
        <p className="text-muted-foreground leading-relaxed">{d}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

const disciplines = [
  {
    n: "01",
    t: "Artificial Intelligence",
    d: "Applied AI, LLM systems, multi-agent reasoning, adaptive inference, causal AI, and the Omega Model architecture.",
  },
  {
    n: "02",
    t: "Systems",
    d: "CES-QN and KALPA research frameworks, coherence architecture, civilisation-scale systems design.",
  },
  {
    n: "03",
    t: "Engineering",
    d: "Platform engineering, SaaS infrastructure, API architecture, container-based hybrid compute, neuromorphic and quantum integration.",
  },
  {
    n: "04",
    t: "Consulting",
    d: "Applied AI strategic advisory, enterprise transformation, intelligence readiness, and technology strategy for institutions and governments.",
  },
  {
    n: "05",
    t: "Futurology",
    d: "Long-horizon research including NEO (post-smartphone intelligence), ambient cognition, and civilisation-scale decision systems.",
  },
  {
    n: "06",
    t: "Human Intelligence",
    d: "QiDS — holistic human development across IQ, EQ, SQ, and AQ; individual and institutional intelligence profiling.",
  },
  {
    n: "07",
    t: "Education & Social Innovation",
    d: "KALPA framework, Orange Economy, curriculum intelligence, educational equity, NGO and social enterprise capability building.",
  },
  {
    n: "08",
    t: "Quanta",
    d: "Quantum-inspired computation (Quantassical), quantum magnetometry (D1), photonic secure communications (D2), NP-hard optimisation.",
  },
  {
    n: "09",
    t: "Design",
    d: "Intelligence system design, product design, human-centred interaction, visual identity, and the design of trustworthy AI experiences.",
  },
];

const capabilities = [
  {
    n: "01",
    t: "Applied AI",
    d: "LLM integration, AI agent development, RAG systems, prompt engineering, and domain-specific AI product development.",
  },
  {
    n: "02",
    t: "Enterprise Intelligence",
    d: "Decision intelligence systems, operational AI, management dashboards, and Omega Model-powered reasoning infrastructure.",
  },
  {
    n: "03",
    t: "Supply Chain Intelligence",
    d: "Autonomous procurement, demand forecasting, inventory optimisation, logistics intelligence, and risk modelling via ARPS.",
  },
  {
    n: "04",
    t: "Sustainability Intelligence",
    d: "ESG measurement, carbon and water intelligence, climate risk modelling, and sustainability compliance via Mangrove.",
  },
  {
    n: "05",
    t: "Education Intelligence",
    d: "Holistic human intelligence assessment and development via QiDS — IQ, EQ, SQ, and AQ across institutional and individual contexts.",
  },
  {
    n: "06",
    t: "Decision Intelligence",
    d: "Causal reasoning, multi-agent coordination, adaptive inference, and structured decision support via the Gravity framework.",
  },
  {
    n: "07",
    t: "Research & Frameworks",
    d: "CES-QN, KALPA, Omega Model, and the new field-based cognition framework — published research convertible to IP and product.",
  },
  {
    n: "08",
    t: "Product Engineering",
    d: "End-to-end SaaS development, mobile applications, API architecture, and digital knowledge product creation.",
  },
  {
    n: "09",
    t: "Human-Centred Design",
    d: "Intelligence system design, interaction design, accessibility, and the design of trustworthy AI experiences across all MATRIX platforms.",
  },
];

const platforms = [
  {
    n: "01",
    t: "Gravity",
    tag: "Decision & Adaptive Intelligence · Multi-Agent Architecture",
    s: "In Development",
    d: "The most direct commercial expression of the Omega Model. Gravity is a multi-agent decision intelligence framework built around computationally adaptive intelligence — the capacity to reconfigure reasoning strategies in response to the structure of the problem, not apply a fixed algorithm uniformly. It is the foundation for enterprise intelligence deployments across the MATRIX product suite.",
  },
  {
    n: "02",
    t: "QiDS",
    tag: "Human Intelligence · Education · Career · Talent",
    s: "Prototype · Patent",
    d: "The Quadrant Intelligence Development System — MATRIX's flagship education platform and primary commercial IP asset. Integrates IQ, EQ, SQ, and AQ into a unified assessment and development lifecycle, producing personalised Individual Quotient Profiles with six-month roadmaps. Patent Application 202631019776 A.",
  },
  {
    n: "03",
    t: "Humming",
    tag: "Frequency Intelligence · Operational Wellness · Enterprise",
    s: "Research + MVP",
    d: "Operational intelligence and frequency-informed wellness platform — an AI copilot for executive decision-making integrating executive dashboards, decision intelligence, management AI, and continuous business monitoring into a unified operational layer.",
  },
  {
    n: "04",
    t: "ARPS",
    tag: "Autonomous Procurement · Supply Chain Intelligence",
    s: "Research + MVP",
    d: "Autonomous Procurement and Supply Chain Intelligence — applying the CES-QN framework to supply chain decision-making through demand forecasting, procurement intelligence, inventory optimisation, logistics intelligence, and risk modelling.",
  },
  {
    n: "05",
    t: "Mangrove",
    tag: "Sustainability Intelligence · ESG · Climate · Water",
    s: "Research",
    d: "Sustainability intelligence engine for ESG measurement, climate risk assessment, and compliance — providing carbon intelligence, water intelligence, climate risk modelling, and scenario analysis. Aligned with MATRIX's XPrize Water Scarcity research programme (2027 submission).",
  },
  {
    n: "06",
    t: "Datum",
    tag: "Enterprise Data Intelligence · Self-Service Analytics",
    s: "Prototype",
    d: "Enterprise data intelligence through natural language analytics, self-service BI, enterprise reporting, and decision support — making advanced analytical intelligence accessible to organisations without dedicated data science teams.",
  },
  {
    n: "07",
    t: "MindMuse",
    tag: "AI Creativity & Cognition · Creative Intelligence Engine",
    s: "Designed · In Dev.",
    d: "AI creativity and cognition engine applying the KALPA framework to music, knowledge, and creative systems — including Hertz (FM radio & intelligent curation), Resonance (recommendation engine), Sonata (music dictionary), and AlgoVista (algorithm visualisation). Serving the Orange Economy.",
  },
  {
    n: "08",
    t: "Digital Products",
    tag: "End-to-End Product Engineering · Knowledge Assets",
    s: "Commercial",
    d: "Commercial knowledge assets and enterprise advisory services — prompt engineering packs, AI strategy frameworks, automation playbooks, BI dashboard templates, and enterprise transformation consulting. Currently operational and generating revenue.",
  },
  {
    n: "09",
    t: "Consulting",
    tag: "Applied AI Strategic Advisory · Enterprise Transformation",
    s: "Commercial",
    d: "Applied AI strategic advisory covering AI readiness assessment, intelligence architecture design, responsible AI governance, enterprise transformation, and technology strategy. MATRIX's consulting practice is the primary client entry point — consulting engagements generate product requirements, pilot relationships, and long-term platform deployments.",
  },
];

export default function CompanyProfile() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MATRIX Labs",
          alternateName: ["MATRIX", "mātṛkā"],
          url: `${SITE.url}/company-profile`,
          email: SITE.email,
          description:
            "An applied AI research studio by Somnath Banerjee — designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial.",
          founder: { "@type": "Person", name: "Somnath Banerjee" },
        }}
      />

      {/* ——— COVER ——— */}
      <Section className="pt-28 md:pt-40 pb-20 grain">
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
          Company Profile · 2026
        </p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          Applied AI Research Studio · Intelligence Architecture · Cohered by Design
        </p>
        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight mt-16">
          MATRIX.
        </h1>
        <p className="font-display text-2xl md:text-4xl italic text-gold mt-2">mātṛkā</p>
        <p className="font-display text-3xl md:text-6xl leading-[1.02] tracking-tight mt-16 max-w-4xl">
          Applied AI Research Studio
        </p>
        <p className="mt-8 max-w-2xl text-lg text-foreground/80 leading-relaxed">
          Designing the invisible architecture through which intelligence becomes trustworthy,
          scalable, and beneficial — for governments, enterprises, universities, and society.
        </p>
        <div className="mt-16 flex flex-col gap-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
          <span className="text-foreground/80">
            Intelligence<span className="text-gold"> · </span>Architecture
            <span className="text-gold"> · </span>Impact
          </span>
          <span>
            matrka.net<span className="text-gold"> · </span>system@matrka.net
            <span className="text-gold"> · </span>+91 9875 663 417
          </span>
        </div>
      </Section>

      {/* ——— 01 · WHO WE ARE ——— */}
      <Section className="py-20 md:py-28 border-t border-border">
        <Head
          n="01"
          t="Who We Are"
          k="An intelligence architecture firm designing the next intelligence layer of civilisation."
        />
        <p className="text-foreground/80 leading-relaxed max-w-3xl">
          MATRIX is an Applied AI Research Studio. We build the conditions under which intelligence
          can be trusted. Our work spans the full spectrum from foundational research to applied
          systems — from human capability frameworks to enterprise intelligence infrastructure. It
          is not just a company. It is a culture. A phenomenon. An institution.
        </p>
        <div className="mt-14">
          <Principle
            label="First Principle"
            title="Intelligence before Automation"
            body="Understanding precedes application. MATRIX builds the reasoning layer first and derives the product interface from it — not the reverse."
          />
          <Principle
            label="Design Principle"
            title="Architecture before Applications"
            body="Systems are designed to be reused, extended, and composed. The same reasoning infrastructure serves multiple products — compounding research investment across the portfolio."
          />
          <Principle
            label="Long-Horizon Conviction"
            title="Human and artificial intelligence must evolve together."
            body="MATRIX's work deliberately spans both dimensions — from QiDS holistic human development to frontier quantum-neuromorphic computation research."
          />
        </div>
      </Section>

      {/* ——— 02 · VISION & MISSION ——— */}
      <Section variant="paper" className="py-20 md:py-28 border-t border-ink/10">
        <Head
          n="02"
          t="Vision & Mission"
          k="A world where intelligence is inseparable from trust."
        />
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-display text-3xl tracking-tight">Vision</h3>
            <p className="mt-4 text-ink/80 leading-relaxed">
              A world where intelligence is inseparable from trust. We work toward systems —
              financial, civic, educational, infrastructural — engineered with the same rigour as
              the most important infrastructure actualised in the world. The future MATRIX builds
              looks ordinary and dependable from the outside. It is invisible by design.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-display text-3xl tracking-tight">Mission</h3>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Design trustworthy intelligence systems for complex problems. Our mission is to design
              intelligence systems that enterprises, governments, institutions, and society rely on
              to make consequential decisions well. We convert frontier research into dependable,
              invisible infrastructure — from human intelligence assessment to autonomous supply
              chain reasoning to quantum-informed computation.
            </p>
          </div>
        </div>
        <blockquote className="mt-16 max-w-3xl border-l border-gold pl-8">
          <p className="font-display text-2xl md:text-3xl leading-snug italic">
            “The end of science is not to prove a theory but to improve mankind. Structure so sound
            it requires no announcement. We design the invisible architecture through which
            intelligence becomes trustworthy, scalable, and beneficial.”
          </p>
          <footer className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60">
            Somnath Banerjee, Founder — MATRIX Labs
          </footer>
        </blockquote>
      </Section>

      {/* ——— 03 · NINE DISCIPLINES ——— */}
      <Section className="py-20 md:py-28">
        <Head n="03" t="Nine Disciplines" k="The breadth of the MATRIX remit." />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          MATRIX operates across nine interconnected disciplines. These are not siloed departments —
          they are dimensions of a single intelligence architecture programme, each informing and
          strengthening the others.
        </p>
        {disciplines.map((d) => (
          <NumRow key={d.n} n={d.n} t={d.t} d={d.d} />
        ))}
      </Section>

      {/* ——— 04 · RESEARCH FOUNDATIONS ——— */}
      <Section variant="paper" className="py-20 md:py-28 border-t border-ink/10">
        <Head n="04" t="Research Foundations" k="Every product emerges from original research." />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-6">
          MATRIX products do not originate from feature development. They are grounded in two
          proprietary research frameworks and a growing body of published intellectual work —
          including three Zenodo whitepapers, one patent publication, and a new preprint on
          post-agentic intelligence architecture.
        </p>
        <Framework
          label="CES-QN Framework"
          title="Coherence · Systems · Quantified Reasoning"
          body="An original systems framework for understanding coherence across intelligence, architecture, computation, and complex systems. Grounded in Noether's theorem, the Constructal Law, and West's scaling principles — CES-QN is a conservation-law-grounded framework for AI systems that reason with physical and causal integrity. It is the foundational logic beneath Humming, ARPS, Mangrove, Datum, and MATRIX's quantum-inspired computation research."
          chips={["Humming", "ARPS", "Mangrove", "Datum"]}
          meta="Adaptive Computation · XPrize XPQA 2027 · Published: zenodo.org/records/20364601"
        />
        <Framework
          label="KALPA Framework"
          title="Knowledge · Arts · Liberal Practice"
          body="A systemic framework for sustainable civilisational intelligence design spanning social, ecological, and institutional layers. KALPA translates frontier research into ground-level human impact — bridging technology with culture, ethics, creativity, and human flourishing. It is the foundational philosophy behind QiDS, MindMuse Suite, AlgoVista, and the NEO future intelligence platform."
          chips={["QiDS", "MindMuse Suite", "AlgoVista", "NEO"]}
          meta="Orange Economy · Scope: Education · Creative intelligence · Social innovation · Human developmental intelligence"
        />
        <Framework
          label="The Omega Model"
          title="Shared Intelligence Infrastructure"
          body="The Omega Model is the unifying AI architecture through which all MATRIX platforms are built. It is not a single model but a stratified architecture: a Shared AI layer of foundation models and causal reasoning; a Knowledge layer of domain ontologies and research IP; a Reasoning layer of structured inference; and a Platform layer of APIs and enterprise connectors. Capabilities developed for one product become foundational infrastructure for the next — the Omega Model ensures that research investment compounds across the entire portfolio."
        />
        <Framework
          label="New Research — Preprint 2026"
          title="The Architecture of Intelligence: From Discrete Agency to Field-Based Cognition"
          body="This framework synthesises three convergent research streams — modular container-based hybrid architectures, Quantassical (quantum-classical hybrid) computation for NP-hard optimisation, and nature-inspired field-based algorithms grounded in universal physical principles. The central argument: the future of intelligence systems lies not in more sophisticated discrete agents, but in the dissolution of agency into ambient, field-based cognition — where planning becomes geodesic traversal, action emerges from physical continuum dynamics, and the boundary between agent and environment dissolves. Four interdependent pillars: a Causal-Reasoning Engine (Structural Causal Models), an Embodied Neuromorphic Loop, a Self-Evolving Meta-Learning engine, and a Quantum-Accelerated Optimisation layer exploiting Hilbert-space geometry. Validation domains: water safety, atmospheric pollution, food security, and bio-photonics."
          chips={[
            "Post-Agentic Intelligence",
            "Quantassical Computation",
            "Field-Based Cognition",
            "Neuromorphic Computing",
            "NP-Hard Optimisation",
          ]}
        />
      </Section>

      {/* ——— 05 · PLATFORM SUITE ——— */}
      <Section className="py-20 md:py-28">
        <Head n="05" t="Platform Suite" k="Nine platforms. One architecture." />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Each platform in the MATRIX suite is a distinct commercial manifestation of the Omega
          Model reasoning infrastructure. They are not standalone products — they are nodes in a
          single compounding intelligence ecosystem. Maturity varies; this is stated plainly for
          each platform.
        </p>
        {platforms.map((p) => (
          <Platform key={p.n} n={p.n} t={p.t} tag={p.tag} s={p.s} d={p.d} />
        ))}
      </Section>

      {/* ——— 06 · CORE CAPABILITIES ——— */}
      <Section variant="paper" className="py-20 md:py-28 border-t border-ink/10">
        <Head n="06" t="Core Capabilities" k="What MATRIX brings to every engagement." />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-8">
          Nine capability domains, each grounded in the MATRIX research framework and deployable
          independently or as an integrated intelligence architecture.
        </p>
        {capabilities.map((c) => (
          <NumRow key={c.n} n={c.n} t={c.t} d={c.d} />
        ))}
      </Section>

      {/* ——— 07 · FRONTIER RESEARCH ——— */}
      <Section className="py-20 md:py-28 border-t border-border">
        <Head
          n="07"
          t="Frontier Research"
          k="Building the research foundations the next generation of products will need."
        />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          MATRIX's frontier research is not presented as current capability. These are proposed,
          preclinical, and research-stage programmes — organised into four horizons. They represent
          the intellectual investment that will differentiate MATRIX's next-generation IP.
          Institutional partnership discussions are in progress for several programmes.
        </p>
        <Horizon
          t="Computation & Quantum"
          items={[
            { b: "CES-QN Omega", d: "quantum-inspired adaptive computation" },
            { b: "Quantassical", d: "computation for NP-hard optimisation" },
            { d: "Field-based cognition — agency dissolution framework" },
            { d: "Neuromorphic spiking hardware integration" },
            { b: "XPrize XPQA", d: "2027 submission" },
            { b: "D1", d: "Quantum magnetometry (NV-diamond)" },
            { b: "D2", d: "Photonic secure communications (QKD-adjacent)" },
          ]}
        />
        <Horizon
          t="Healthcare & Biophysical"
          items={[
            { b: "H1", d: "Non-thermal FUS oncology ablation (proposed preclinical)" },
            { b: "H2", d: "LIFU + BBB-opening for cerebral palsy (innovation gap)" },
            { b: "H3", d: "EEG-adaptive gamma entrainment for dementia" },
            { d: "Photobiomodulation research" },
            { d: "Proposed partners: IIT Madras HTIC, NIMHANS, IIIT-H" },
          ]}
        />
        <Horizon
          t="Frequency · Light · Sound"
          items={[
            { d: "Cross-domain frequency-tissue-response science" },
            { d: "Cognitive musicology and cymatics" },
            { b: "BEPGOS", d: "bioelectric agricultural intelligence" },
            { b: "D3", d: "Acoustic/RF anomaly detection & shielding" },
            { d: "Sustainability applications (XPrize Water Scarcity 2027)" },
          ]}
        />
        <Horizon
          t="Terra & Future Intelligence"
          items={[
            { b: "Terra", d: "field-based adaptive algorithms (six-layer architecture)" },
            { d: "Ten nature-mechanism research directions" },
            { d: "Biomimetic materials and ancient engineering catalogue" },
            { b: "NEO", d: "post-smartphone personal intelligence" },
            { d: "Ambient intelligence and spatial computing" },
          ]}
        />
        <p className="mt-10 border-t border-border pt-8 text-muted-foreground leading-relaxed max-w-3xl">
          All frontier research programmes are explicitly designated as proposed, preclinical, or
          research-stage. No clinical efficacy, regulatory approval, or validated deployment is
          claimed. Maturity designations follow the same rigorous standard applied throughout the
          Applied Intelligence Portfolio.
        </p>
      </Section>

      {/* ——— 08 · WHO WE WORK WITH ——— */}
      <Section variant="paper" className="py-20 md:py-28 border-t border-ink/10">
        <Head n="08" t="Who We Work With" k="Stakeholders across the intelligence economy." />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-6">
          MATRIX's work is relevant to a broad spectrum of stakeholders — each engaging with a
          different dimension of the intelligence architecture. The commercial portfolio, research
          IP, and frontier programmes serve distinct but complementary audiences.
        </p>
        <Stakeholder
          t="Enterprises"
          d="Decision intelligence, operational AI, supply chain optimisation, analytics, and enterprise transformation via Gravity, ARPS, Humming, and Datum."
          chips={["Consulting", "Gravity", "ARPS", "Humming", "Datum"]}
        />
        <Stakeholder
          t="Governments & Institutions"
          d="QiDS for public education reform and skill development. Mangrove for ESG and sustainability reporting. ARPS for public procurement intelligence. National Quantum Mission alignment."
          chips={["QiDS", "Mangrove", "ARPS", "D1 Quantum"]}
        />
        <Stakeholder
          t="Universities & Research Labs"
          d="CES-QN and KALPA as genuine research contributions. QiDS patent creates co-publication pathways. Healthcare programmes H1–H3 structured around formal institutional partnership. Terra's field-intelligence agenda invites joint algorithmic research."
          chips={["CES-QN", "KALPA", "H1–H3", "Terra"]}
        />
        <Stakeholder
          t="Investors & Grant Funders"
          d="Capital-efficient architecture: one Omega Model investment compounds across nine commercial platforms and six research programmes. QiDS is the current flagship with published patent and completed NGO pilot. XPrize competition provides external validation."
          chips={["QiDS Patent", "Omega Model", "XPrize 2027"]}
        />
      </Section>

      {/* ——— 09 · THE MATRIX IDENTITY ——— */}
      <Section className="py-20 md:py-28">
        <Head
          n="09"
          t="The MATRIX Identity"
          k="Not simply a company. A phenomenon. An institution."
        />
        <Principle
          label="The Name"
          title="MATRIX · mātṛkā"
          body="The Sanskrit root mātṛkā — the source matrix, the foundational alphabet from which all things are generated. MATRIX takes its name from this: not a product company that ships features, but a generative source — an architecture from which intelligence systems emerge."
        />
        <Principle
          label="The Philosophy"
          title=""
          body="MATRIX is not simply building products. It is designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial. The end of science is not to prove a theory but to improve mankind. The real revolution is the evolution of consciousness. Structure so sound it requires no announcement. A curriculum architecture for those who help others live on the ground."
        />
        <Principle
          label="What We Are"
          title=""
          body="An Applied AI Research Studio — not a software company, not an AI agency, not a consultancy. An intelligence architecture firm."
        />
        <Principle
          label="What We Build"
          title=""
          body="The conditions under which intelligence can be trusted. Reasoning infrastructure. Research frameworks. Applied intelligence systems. Trustworthy invisible architecture."
        />
        <Principle
          label="What Cohered by Design Means"
          title=""
          body="Every product, every research programme, every consulting engagement — designed from the same foundational architecture. Coherence is not aesthetic. It is structural."
        />
        <blockquote className="mt-14 max-w-3xl border-l border-gold pl-8">
          <p className="font-display text-2xl md:text-3xl leading-snug italic">
            “MATRIX is not simply building products. We are designing the invisible architecture
            through which intelligence becomes trustworthy, scalable, and beneficial. An
            intelligence architecture firm designing the next intelligence layer of civilisation.”
          </p>
          <footer className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            Somnath Banerjee, Founder — MATRIX Labs · system@matrka.net · matrka.net
          </footer>
        </blockquote>
      </Section>

      {/* ——— BACK COVER ——— */}
      <Section className="py-24 border-t border-border">
        <div className="text-center">
          <p className="font-display text-6xl md:text-8xl tracking-tight">MATRIX.</p>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mt-6">
            L&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;S
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            mātṛkā · Applied AI Research Studio
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            matrka.net · system@matrka.net · +91 9875 663 417
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            Somnath Banerjee, Founder · banerjeesomnath042@gmail.com
          </p>
          <div className="mx-auto mt-12 max-w-md border-t border-border pt-10 space-y-2 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            <p>Company Profile · 2026</p>
            <p className="text-foreground/80">
              Intelligence<span className="text-gold"> · </span>Architecture
              <span className="text-gold"> · </span>Impact
            </p>
            <p className="text-gold">Cohered by Design</p>
          </div>
          <p className="mx-auto mt-12 max-w-md text-sm text-muted-foreground leading-relaxed">
            This document is confidential. For the full Applied Intelligence Portfolio, request the
            separate portfolio document.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
