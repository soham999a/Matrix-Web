import { PageShell, Section } from "@/components/matrix/Chrome";
import { RhombicDodecahedronFigure } from "@/components/matrix/OrigamiFigures";
import { pageSeo, SITE } from "@/lib/seo";
import { JsonLd } from "@/components/matrix/JsonLd";

export const metadata = pageSeo({
  path: "/company-profile",
  title: "Company Profile 2026 — MATRIX · Applied Intelligence Firm",
  description:
    "Company profile of MATRIX — an Applied Intelligence Firm designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial. Capability-led, discipline-grounded, cohered by design — for enterprises, governments, universities, and society.",
  keywords: [
    "MATRIX company profile",
    "MATRIX Labs profile",
    "Applied Intelligence Firm",
    "capability-led",
    "intelligence architecture",
    "Omega Model",
    "CES-QN",
    "KALPA",
    "Somnath Banerjee",
  ],
  og: {
    title: "Company Profile · 2026 — MATRIX",
    description:
      "Applied Intelligence Firm · Capability-Led · Discipline-Grounded · Cohered by Design",
  },
});

function Head({ n, k }: { n: string; t?: string; k?: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 md:mb-16">
      <div className="col-span-12 md:col-span-3">
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">{n}</span>
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
        {title && <h3 className="font-display text-2xl md:text-3xl tracking-tight">{title}</h3>}
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{body}</p>
      </div>
    </div>
  );
}

function PrinciplePaper({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="border-t border-ink/10 py-8 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-3">
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">{label}</span>
      </div>
      <div className="col-span-12 md:col-span-9">
        {title && <h3 className="font-display text-2xl md:text-3xl tracking-tight">{title}</h3>}
        <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl">{body}</p>
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

function TagPaper({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-ink/15 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] uppercase text-ink/60">
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

function CapCard({
  n,
  t,
  dom,
  d,
  tags,
  x,
}: {
  n: string;
  t: string;
  dom: string;
  d: string;
  tags: string[];
  x?: boolean;
}) {
  return (
    <div
      className={`flex flex-col p-7 border bg-ink/[0.03] ${
        x ? "border-ink/10 border-l-2 border-l-gold" : "border-ink/10"
      }`}
    >
      <span className="font-display text-2xl text-gold/60 leading-none">{n}</span>
      <h3 className="font-display text-xl leading-tight tracking-tight mt-5">{t}</h3>
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold mt-2">{dom}</p>
      <p className="text-sm text-ink/70 leading-relaxed mt-4">{d}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-6">
        {tags.map((tag) => (
          <TagPaper key={tag}>{tag}</TagPaper>
        ))}
      </div>
    </div>
  );
}

function FootprintTable({ rows }: { rows: { c: string; a: string; e: string; f: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse">
        <thead>
          <tr className="border-b border-border">
            {["Capability", "Application Area", "Current Expression", "Discipline Footprint"].map(
              (h) => (
                <th
                  key={h}
                  className="py-4 pr-8 text-left font-mono text-[9px] tracking-[0.24em] uppercase text-muted-foreground"
                >
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.c} className="border-b border-border/40 align-top">
              <td className="py-4 pr-8 text-sm font-medium text-foreground/90">{r.c}</td>
              <td className="py-4 pr-8 text-sm text-muted-foreground">{r.a}</td>
              <td className="py-4 pr-8 text-sm text-gold">{r.e}</td>
              <td className="py-4 pr-8 text-sm text-muted-foreground">{r.f}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoadmapCol({ l, items }: { l: string; items: string[] }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold pb-4 border-b border-gold/25 mb-4">
        {l}
      </h3>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-baseline gap-2 text-sm text-foreground/75 leading-relaxed"
          >
            <span className="text-gold/40 shrink-0" aria-hidden>
              ›
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AskTable({ rows }: { rows: { c: string; caps: string; p: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr className="border-b border-ink/15">
            {["Cluster", "Capabilities", "Purpose"].map((h) => (
              <th
                key={h}
                className="py-3 pr-8 text-left font-mono text-[9px] tracking-[0.24em] uppercase text-ink/60"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.c} className="border-b border-ink/10 align-top">
              <td className="py-4 pr-8 text-sm font-semibold">{r.c}</td>
              <td className="py-4 pr-8 text-sm text-gold">{r.caps}</td>
              <td className="py-4 pr-8 text-sm text-ink/70">{r.p}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    d: "Holistic human development across IQ, EQ, SQ, and AQ; individual and institutional intelligence profiling.",
  },
  {
    n: "07",
    t: "Education & Social Innovation",
    d: "KALPA framework, Orange Economy, curriculum intelligence, educational equity, NGO and social enterprise capability building.",
  },
  {
    n: "08",
    t: "Quanta",
    d: "Quantum-inspired computation (Quantassical), quantum magnetometry, photonic secure communications, NP-hard optimisation.",
  },
  {
    n: "09",
    t: "Design",
    d: "Intelligence system design, product design, human-centred interaction, visual identity, and the design of trustworthy AI experiences.",
  },
];

const capabilitiesFramework: {
  n: string;
  t: string;
  dom: string;
  d: string;
  tags: string[];
  x?: boolean;
}[] = [
  {
    n: "01",
    t: "Human Intelligence Development",
    dom: "Holistic Capability · Education · Talent",
    d: "Assessment and development of human capability across cognitive, emotional, social, and adaptive dimensions — chained to intervention, longitudinal tracking, and institutional integration.",
    tags: ["IQ · EQ · SQ · AQ", "Individual Quotient Profile", "School · College · Corporate"],
  },
  {
    n: "02",
    t: "Computational Adaptive Intelligence",
    dom: "Multi-Agent · Decision Systems · Enterprise",
    d: "Systems that select and reconfigure their own reasoning strategies in response to problem structure — rather than applying fixed algorithms. Foundation for enterprise decision intelligence deployments.",
    tags: ["Multi-Agent Coordination", "Causal Reasoning", "Adaptive Inference"],
  },
  {
    n: "03",
    t: "Resilient Supply Chain Intelligence",
    dom: "Procurement · Logistics · Risk",
    d: "Multi-source risk fusion, graph-based contagion modelling, digital-twin simulation, multi-objective optimisation, and governed agentic decision systems for resilient procurement.",
    tags: ["Risk Fusion", "Graph AI & Contagion", "Digital Twin", "Agentic Procurement"],
  },
  {
    n: "04",
    t: "Analytics Intelligence",
    dom: "Self-Service BI · Natural Language Analytics",
    d: "Making advanced analytical intelligence accessible through natural language analytics, self-service BI, and decision support — bridging raw data availability and actionable organisational intelligence.",
    tags: ["Natural Language Analytics", "Self-Service BI", "Decision Support"],
  },
  {
    n: "05",
    t: "Operational Intelligence",
    dom: "Enterprise · Management AI · Monitoring",
    d: "Executive dashboards, decision intelligence, management AI, and continuous business monitoring unified into a coherent operational layer — an AI copilot for executive decision-making.",
    tags: ["Executive Dashboards", "Management AI", "Business Monitoring"],
  },
  {
    n: "06",
    t: "Sustainability Intelligence",
    dom: "ESG · Climate · Water · Compliance",
    d: "Carbon intelligence, water intelligence, climate risk modelling, scenario analysis, and compliance reporting — addressing the growing complexity of ESG measurement and sustainability obligations.",
    tags: ["Carbon & Water", "Climate Risk", "ESG Compliance"],
  },
  {
    n: "07",
    t: "Frontier Intelligence",
    dom: "Post-Agentic · Nature-Inspired · Quantum",
    d: "Research-stage capability exploring the next generation of intelligence systems — post-agentic architectures, field-based cognition, nature-inspired algorithms, and quantum-informed computation.",
    tags: ["Post-Agentic Systems", "Nature-Inspired Algorithms", "Quantum-Inspired Computation"],
  },
  {
    n: "08",
    t: "Applied Intelligence Design",
    dom: "Interaction · Visual · Human-Centred Systems",
    d: "Design of trustworthy intelligence experiences — human-centred interaction, information architecture, visual identity, and the design discipline that makes complex intelligence usable by the people who depend on it.",
    tags: ["Interaction Design", "Information Architecture", "Trustworthy AI Interfaces"],
  },
  {
    n: "09",
    t: "Education & Social Innovation",
    dom: "Curriculum · Equity · Civil Society",
    d: "Curriculum intelligence, educational equity, NGO and social enterprise capability building — applying the KALPA framework to translate frontier research into ground-level human impact.",
    tags: ["Curriculum Intelligence", "Educational Equity", "Social Enterprise"],
  },
  {
    n: "∞",
    t: "Cross-Capability Research",
    dom: "Frameworks · Applied IP · Licensing",
    d: "CES-QN and KALPA — MATRIX’s two foundational research frameworks — underpin every capability. Published, licensable, and the source of compounding IP advantage across the portfolio.",
    tags: ["CES-QN Framework", "KALPA Framework", "Omega Model"],
    x: true,
  },
  {
    n: "→",
    t: "Product Portfolios",
    dom: "Current · Blueprint · Long-Horizon",
    d: "Each capability is delivered through products — some shipping today, others in active blueprint, others long-horizon research. The capability remains; the product name and interface evolve.",
    tags: ["Shipping", "Blueprint", "Research"],
    x: true,
  },
  {
    n: "◦",
    t: "Applied Consulting & Advisory",
    dom: "Strategy · Transformation · Readiness",
    d: "Applied AI strategic advisory, enterprise transformation, intelligence readiness assessment, and technology strategy — the primary client entry point for MATRIX engagements across every capability.",
    tags: ["AI Readiness", "Enterprise Transformation", "Technology Strategy"],
    x: true,
  },
  {
    n: "✦",
    t: "Nature-Inspired & Field Intelligence",
    dom: "Terra · Bio-Inspired Algorithms · Ancient Engineering",
    d: "A research platform studying invariant mechanisms in natural systems — phase synchronisation, mycelial networks, quorum sensing, immune memory, and field-based cognition — and translating them into reusable algorithmic primitives. Draws from a 40-entry catalogue of biomimetic and ancient engineering precedents to inform applied solutions where conventional AI paradigms are structurally insufficient.",
    tags: [
      "Terra Research",
      "Field-Based Cognition",
      "Bio-Inspired Algorithms",
      "Ancient Engineering",
    ],
    x: true,
  },
  {
    n: "✧",
    t: "Design Constitution & Visual OS",
    dom: "Identity · Design System · Coherence",
    d: "MATRIX’s design constitution — a binding visual operating system applied across every product, publication, and interface. Ink and Bone as ground. Gold as the only permitted emphasis. A four-colour primary palette, an eight-tone secondary palette, and a documented typographic discipline. The same restraint that governs the firm's products governs how they look and read.",
    tags: ["Design Constitution", "Visual Identity System", "Brand OS", "Cohered by Design"],
    x: true,
  },
];

const footprint: { c: string; a: string; e: string; f: string }[] = [
  {
    c: "Human Intelligence Development",
    a: "Education · Talent · Workforce",
    e: "QiDS — Patent-published platform",
    f: "Education · Career · Talent · Institutional Development · Individual Development",
  },
  {
    c: "Computational Adaptive Intelligence",
    a: "Enterprise Decision Systems",
    e: "Gravity — In Development",
    f: "Enterprise Intelligence · Decision Systems · Multi-Agent Reasoning · Causal AI",
  },
  {
    c: "Resilient Supply Chain Intelligence",
    a: "Procurement · Logistics · Risk",
    e: "ARPS — Research + MVP",
    f: "Supply Chain · Procurement · Logistics · Geopolitical Risk · Digital Twin",
  },
  {
    c: "Analytics Intelligence",
    a: "Business Intelligence · MSME",
    e: "Datum — Prototype",
    f: "Analytics · Self-Service BI · Natural Language Interfaces · Decision Support",
  },
  {
    c: "Operational Intelligence",
    a: "Enterprise Operations",
    e: "Humming — Research + MVP",
    f: "Executive Dashboards · Management AI · Business Monitoring · Operational Wellness",
  },
  {
    c: "Sustainability Intelligence",
    a: "ESG · Climate · Water",
    e: "Mangrove — Research",
    f: "Sustainability · ESG Measurement · Climate Risk · Water Intelligence",
  },
  {
    c: "Frontier Intelligence",
    a: "Post-Agentic · Quantum · Nature-Inspired",
    e: "PLUTO · CES-QN · Terra — Research",
    f: "Quantum · Neuromorphic · Field-Based Cognition · Nature-Inspired Algorithms",
  },
  {
    c: "Applied Intelligence Design",
    a: "Product · Interaction · Interface",
    e: "Design Constitution — Active across portfolio",
    f: "Interaction Design · Information Architecture · Visual Identity · Human-Centred Design",
  },
  {
    c: "Education & Social Innovation",
    a: "Curriculum · Equity · Civil Society",
    e: "KALPA — Framework Active",
    f: "Curriculum Intelligence · Educational Equity · Social Enterprise · NGO Capability",
  },
  {
    c: "Nature-Inspired & Field Intelligence",
    a: "Research Platform · Applied Algorithms",
    e: "Terra — Research Stage",
    f: "Bio-Inspired Algorithms · Field-Based Cognition · Biomimetic Materials · Ancient Engineering",
  },
  {
    c: "Cross-Capability Research",
    a: "IP · Licensing · Publications",
    e: "CES-QN · KALPA · Omega Model",
    f: "Systems Research · Framework Design · Applied IP · Research Commercialisation",
  },
  {
    c: "Applied Consulting & Advisory",
    a: "Enterprise · Government · Institutions",
    e: "Active — Revenue-generating",
    f: "AI Readiness · Enterprise Transformation · Technology Strategy · Responsible AI",
  },
];

const roadmap = [
  {
    l: "Now — 2026",
    items: [
      "Human Intelligence Development — institutional deployment",
      "Analytics & Supply Chain Intelligence — MVP development",
      "Computational Adaptive Intelligence — core build",
      "Applied Consulting & Advisory — active revenue",
      "CES-QN and KALPA — published research foundations",
      "Omega Model — foundational infrastructure",
    ],
  },
  {
    l: "Next — 2026–27",
    items: [
      "Human Intelligence Development — SaaS public launch",
      "Analytics & Supply Chain to market — paying subscribers",
      "Operational Intelligence — production platform",
      "Sustainability Intelligence — blueprint to MVP",
      "Frontier Intelligence — PLUTO prototype + research",
      "XPrize XPQA + Water Scarcity — submissions",
    ],
  },
  {
    l: "Frontier — 2027–28",
    items: [
      "CES-QN / Omega — enterprise computational applications",
      "Healthcare research programmes — preclinical",
      "Quantum sensing & photonics — prototype stage",
      "Sustainability Intelligence — production platform",
      "Terra field-intelligence — first research publications",
      "Institutional partnerships — university MoUs",
    ],
  },
  {
    l: "Future — 2028+",
    items: [
      "NEO — post-smartphone personal intelligence",
      "Quantum-native computation capabilities",
      "Nature-inspired applied solutions",
      "Healthcare research — regulatory pathway",
      "Civilisation-scale decision systems",
    ],
  },
];

const askClusters: { c: string; caps: string; p: string }[] = [
  {
    c: "Commercial Scaling",
    caps: "Human Intelligence · Analytics · Supply Chain",
    p: "Take shipped and prototype capabilities to market — public SaaS launch, institutional licensing, MSME deployment.",
  },
  {
    c: "Blueprints to Products",
    caps: "Operational · Sustainability · Design",
    p: "Convert existing blueprints into shipping products — production engineering, pilot deployments, first paying customers.",
  },
  {
    c: "Frontier Research",
    caps: "Frontier Intelligence · Terra · CES-QN · Quantum",
    p: "Deep-tech research across PLUTO, post-agentic intelligence, nature-inspired algorithms, and quantum-informed computation — with peer-reviewed publications as a core output.",
  },
  {
    c: "Institutional Partnerships",
    caps: "All Capabilities",
    p: "University research collaborations, government deployments, and enterprise pilot partnerships — structured around formal agreements and joint IP.",
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
            "An Applied Intelligence Firm by Somnath Banerjee — designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial.",
          founder: { "@type": "Person", name: "Somnath Banerjee" },
        }}
      />

      {/* ——— COVER ——— */}
      <Section rail="Company Profile" className="pt-28 md:pt-40 pb-20 grain">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
              Company Profile &amp; Pitch Deck · 2026
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Applied Intelligence Firm · Capability-Led · Discipline-Grounded
            </p>
            <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight mt-16">
              MATRIX.
            </h1>
            <p className="font-display text-2xl md:text-4xl italic text-gold mt-2">mātṛkā</p>
            <p className="font-display text-3xl md:text-6xl leading-[1.02] tracking-tight mt-16 max-w-4xl">
              Applied Intelligence Firm
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center mt-12 md:mt-24">
            <RhombicDodecahedronFigure className="fig-glow w-full max-w-[26rem] md:max-w-md xl:max-w-lg text-foreground/80" />
          </div>
        </div>
        <p className="mt-14 md:mt-16 max-w-2xl text-lg text-foreground/80 leading-relaxed">
          Designing the invisible architecture through which intelligence becomes trustworthy,
          scalable, and beneficial — capability by capability, discipline by discipline, for
          enterprises, governments, universities, and society.
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
      <Section rail="Who We Are" className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border">
        <Head
          n="01"
          t="Who We Are"
          k="An intelligence architecture firm designing the next intelligence layer of civilisation."
        />
        <p className="text-foreground/80 leading-relaxed max-w-3xl">
          MATRIX is an Applied Intelligence Firm. We build the conditions under which intelligence
          can be trusted. Our work spans the full spectrum from foundational research to applied
          systems — from human capability frameworks to enterprise intelligence infrastructure.
          Products will change over time. The capabilities we build and the disciplines we work
          across will remain. This document is organised around that permanence.
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
            body="Systems are designed to be reused, extended, and composed. The same reasoning infrastructure serves multiple capabilities — compounding research investment across the portfolio."
          />
          <Principle
            label="Long-Horizon Conviction"
            title="Human and artificial intelligence must evolve together."
            body="MATRIX’s work deliberately spans both dimensions — from human intelligence development to frontier computational research."
          />
        </div>
      </Section>

      {/* ——— 02 · VISION & MISSION ——— */}
      <Section
        rail="Vision & Mission"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
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
              invisible infrastructure — from human intelligence development to resilient supply
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
      <Section
        rail="Nine Disciplines"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border"
      >
        <Head n="03" t="Nine Disciplines" k="The breadth of the MATRIX remit." />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          MATRIX operates across nine interconnected disciplines. These are not siloed departments —
          they are dimensions of a single intelligence architecture programme, each informing and
          strengthening the others. Product lines may come and go; these disciplines are permanent.
        </p>
        {disciplines.map((d) => (
          <NumRow key={d.n} n={d.n} t={d.t} d={d.d} />
        ))}
      </Section>

      {/* ——— 04 · CAPABILITY FRAMEWORK ——— */}
      <Section
        rail="Capability Framework"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
        <Head
          n="04"
          t="Capability Framework"
          k="Nine intelligence capabilities. Three cross-cutting layers. One permanent imprint."
        />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-10">
          MATRIX’s work is organised around nine capabilities that will remain constant even as
          individual products evolve, plus three cross-cutting layers that underpin everything. Each
          capability is a domain of expertise — a discipline of reasoning, engineering, and applied
          research — grounded in the MATRIX research foundation and deliverable across multiple
          contexts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          {capabilitiesFramework.map((c) => (
            <CapCard key={c.n} n={c.n} t={c.t} dom={c.dom} d={c.d} tags={c.tags} x={c.x} />
          ))}
        </div>
      </Section>

      {/* ——— 05 · DISCIPLINE FOOTPRINT ——— */}
      <Section
        rail="Discipline Footprint"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border"
      >
        <Head n="05" t="Discipline Footprint" k="Where MATRIX works — permanently." />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
          MATRIX’s capabilities are delivered across a defined set of disciplines and application
          areas. The products that express these capabilities will evolve; the disciplines and areas
          themselves remain the firm’s permanent footprint.
        </p>
        <FootprintTable rows={footprint} />
      </Section>

      {/* ——— 06 · PRODUCT BLUEPRINTS ——— */}
      <Section
        rail="Product Blueprints"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
        <Head
          n="06"
          t="Product Blueprints"
          k="From blueprint to shipping — a coherent portfolio."
        />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-10">
          Each capability is expressed through a product. Some are shipping today, some are in
          active development, some are blueprint-stage waiting on the right institutional partner,
          capital, or research milestone. This is honest scoping — the same discipline applied
          throughout MATRIX’s work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6">
          <BlueprintCol
            t="Shipping Today"
            items={[
              { b: "QiDS", d: "Patent-published, live platform, NGO pilot completed" },
              { b: "Digital Products & AI Consulting", d: "Active revenue" },
              { b: "Datum", d: "Prototype live, MSME pilot in progress" },
            ]}
          />
          <BlueprintCol
            t="In Active Development"
            items={[
              { b: "Gravity", d: "Multi-agent decision intelligence framework" },
              { b: "ARPS", d: "Five-layer supply chain intelligence platform" },
              { b: "Humming", d: "Operational intelligence copilot" },
              { b: "PLUTO", d: "Next evolution of the agent (deep-tech)" },
            ]}
          />
          <BlueprintCol
            t="Blueprint · Awaiting Trigger"
            items={[
              { b: "Analytics Intelligence", d: "Enterprise-scale BI expansion" },
              { b: "Operational Intelligence", d: "Cross-industry expansion" },
              { b: "Sustainability Intelligence", d: "ESG & climate platform" },
              { b: "Applied Intelligence Design", d: "Design system licensing" },
            ]}
          />
          <BlueprintCol
            t="Long-Horizon Research"
            items={[
              { d: "CES-QN Applied Computation" },
              { b: "Terra", d: "Nature-Inspired & Field Intelligence" },
              { d: "Quantum Sensing & Photonics" },
              { b: "NEO", d: "Post-Smartphone Personal Intelligence" },
            ]}
          />
        </div>
        <p className="mt-12 text-sm text-ink/60 leading-relaxed max-w-3xl">
          Products are the visible surface of MATRIX’s capabilities. The capabilities are permanent;
          the product names, interfaces, and maturity designations evolve with research, capital,
          and market conditions.
        </p>
      </Section>

      {/* ——— 07 · RESEARCH FOUNDATIONS ——— */}
      <Section
        rail="Research Foundations"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border"
      >
        <Head
          n="07"
          t="Research Foundations"
          k="Every capability emerges from original research."
        />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          MATRIX capabilities do not originate from feature development. They are grounded in two
          proprietary research frameworks and a growing body of published intellectual work —
          including three Zenodo whitepapers, one patent publication, and a new preprint on
          post-agentic intelligence architecture.
        </p>
        <Framework
          label="CES-QN Framework"
          title="Coherence · Systems · Quantified Reasoning"
          body="An original systems framework for understanding coherence across intelligence, architecture, computation, and complex systems. Grounded in Noether's theorem, the Constructal Law, and West's scaling principles — CES-QN is a conservation-law-grounded framework for AI systems that reason with physical and causal integrity. It is the foundational logic beneath multiple MATRIX capabilities."
          chips={[
            "Computational Adaptive Intelligence",
            "Supply Chain Intelligence",
            "Analytics Intelligence",
            "Sustainability Intelligence",
          ]}
          meta="Published: zenodo.org/records/20364601"
        />
        <Framework
          label="KALPA Framework"
          title="Knowledge · Arts · Liberal Practice"
          body="A systemic framework for sustainable civilisational intelligence design spanning social, ecological, and institutional layers. KALPA translates frontier research into ground-level human impact — bridging technology with culture, ethics, creativity, and human flourishing. It is the foundational philosophy behind Human Intelligence Development, Education & Social Innovation, and Frontier Intelligence capabilities."
          chips={[
            "Human Intelligence",
            "Education & Social Innovation",
            "Frontier Intelligence",
            "Creative Intelligence",
          ]}
          meta="Scope: Education · Creative intelligence · Social innovation · Human developmental intelligence"
        />
        <Framework
          label="The Omega Model"
          title="Shared Intelligence Infrastructure"
          body="The Omega Model is the unifying AI architecture through which all MATRIX capabilities are delivered. It is not a single model but a stratified architecture: a Shared AI layer of foundation models and causal reasoning; a Knowledge layer of domain ontologies and research IP; a Reasoning layer of structured inference; and a Platform layer of APIs and enterprise connectors. Capabilities developed for one product become foundational infrastructure for the next — the Omega Model ensures that research investment compounds across the entire portfolio."
        />
        <Framework
          label="New Research — Preprint 2026"
          title="The Architecture of Intelligence: From Discrete Agency to Field-Based Cognition"
          body="This framework synthesises three convergent research streams — modular container-based hybrid architectures, Quantassical (quantum-classical hybrid) computation for NP-hard optimisation, and nature-inspired field-based algorithms grounded in universal physical principles. The central argument: the future of intelligence systems lies not in more sophisticated discrete agents, but in the dissolution of agency into ambient, field-based cognition. Four interdependent pillars: a Causal-Reasoning Engine, an Embodied Neuromorphic Loop, a Self-Evolving Meta-Learning engine, and a Quantum-Accelerated Optimisation layer. This research directly informs MATRIX’s Frontier Intelligence capability, the Nature-Inspired & Field Intelligence capability, and the PLUTO product line."
          chips={[
            "Post-Agentic Intelligence",
            "Quantassical Computation",
            "Field-Based Cognition",
            "Neuromorphic Computing",
            "NP-Hard Optimisation",
          ]}
        />
      </Section>

      {/* ——— 08 · FRONTIER RESEARCH ——— */}
      <Section
        rail="Frontier Research"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
        <Head
          n="08"
          t="Frontier Research"
          k="Building the research foundations the next generation of capabilities will need."
        />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-8">
          MATRIX’s frontier research is not presented as current capability. These are proposed,
          preclinical, and research-stage programmes — organised by horizon. They represent the
          intellectual investment that will differentiate MATRIX’s next-generation IP. Institutional
          partnership discussions are in progress for several programmes.
        </p>
        <FrontierHorizon
          t="Computation & Quantum"
          items={[
            { b: "CES-QN Omega", d: "quantum-inspired adaptive computation" },
            { b: "Quantassical", d: "computation for NP-hard optimisation" },
            { d: "Field-based cognition — agency dissolution framework" },
            { d: "Neuromorphic spiking hardware integration" },
            { b: "XPrize XPQA 2027", d: "submission" },
            { b: "D1", d: "Quantum magnetometry (NV-diamond)" },
            { b: "D2", d: "Photonic secure communications" },
          ]}
        />
        <FrontierHorizon
          t="Healthcare & Biophysical"
          items={[
            { b: "H1", d: "Non-thermal FUS oncology ablation" },
            { b: "H2", d: "LIFU + BBB-opening for cerebral palsy" },
            { b: "H3", d: "EEG-adaptive gamma entrainment for dementia" },
            { d: "Photobiomodulation research" },
            { d: "Proposed partners: IIT Madras HTIC, NIMHANS, IIIT-H" },
          ]}
        />
        <FrontierHorizon
          t="Frequency · Light · Sound"
          items={[
            { d: "Cross-domain frequency-tissue-response science" },
            { d: "Cognitive musicology and cymatics" },
            { b: "BEPGOS", d: "bioelectric agricultural intelligence" },
            { b: "D3", d: "Acoustic/RF anomaly detection & shielding" },
            { d: "Sustainability applications (XPrize Water Scarcity 2027)" },
          ]}
        />
        <FrontierHorizon
          t="Terra & Future Intelligence"
          items={[
            { b: "Terra", d: "field-based adaptive algorithms" },
            { d: "Ten nature-mechanism research directions" },
            { d: "Biomimetic materials and ancient engineering catalogue" },
            { b: "NEO", d: "post-smartphone personal intelligence" },
            { d: "Ambient intelligence and spatial computing" },
          ]}
        />
        <p className="mt-10 border-t border-ink/10 pt-8 text-ink/60 leading-relaxed max-w-3xl">
          All frontier research programmes are explicitly designated as proposed, preclinical, or
          research-stage. No clinical efficacy, regulatory approval, or validated deployment is
          claimed. Maturity designations follow the same rigorous standard applied throughout the
          Applied Intelligence Portfolio.
        </p>
      </Section>

      {/* ——— 09 · WHO WE WORK WITH ——— */}
      <Section
        rail="Who We Work With"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border"
      >
        <Head n="09" t="Who We Work With" k="Stakeholders across the intelligence economy." />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          MATRIX’s capabilities are relevant to a broad spectrum of stakeholders — each engaging
          with a different dimension of the intelligence architecture. The commercial portfolio,
          research IP, and frontier programmes serve distinct but complementary audiences.
        </p>
        <Stakeholder
          t="Enterprises"
          d="Decision intelligence, operational AI, supply chain optimisation, analytics, and enterprise transformation across four MATRIX capabilities."
          chips={["Computational Adaptive", "Supply Chain", "Operational", "Analytics"]}
        />
        <Stakeholder
          t="Governments & Institutions"
          d="Human intelligence development for public education reform. Sustainability intelligence for ESG. Supply chain intelligence for public procurement. National Quantum Mission alignment."
          chips={["Human Intelligence", "Sustainability", "Supply Chain", "Quantum"]}
        />
        <Stakeholder
          t="Universities & Research Labs"
          d="CES-QN and KALPA as genuine research contributions. QiDS patent creates co-publication pathways. Healthcare programmes structured around formal institutional partnership. Terra's field-intelligence agenda invites joint algorithmic research."
          chips={["CES-QN", "KALPA", "Healthcare", "Terra"]}
        />
        <Stakeholder
          t="Investors & Grant Funders"
          d="Capital-efficient architecture: one Omega Model investment compounds across multiple commercial capabilities and research programmes. QiDS is the current flagship with published patent and completed pilot. XPrize participation provides external validation."
          chips={["QiDS Patent", "Omega Model", "XPrize 2027"]}
        />
      </Section>

      {/* ——— 10 · THE MATRIX IDENTITY ——— */}
      <Section
        rail="The MATRIX Identity"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
        <Head
          n="10"
          t="The MATRIX Identity"
          k="Not simply a company. A phenomenon. An institution."
        />
        <PrinciplePaper
          label="The Name"
          title="MATRIX · mātṛkā"
          body="The Sanskrit root mātṛkā — the source matrix, the foundational alphabet from which all things are generated. MATRIX takes its name from this: not a product company that ships features, but a generative source — an architecture from which intelligence systems emerge."
        />
        <PrinciplePaper
          label="The Philosophy"
          title=""
          body="MATRIX is not simply building products. It is designing the invisible architecture through which intelligence becomes trustworthy, scalable, and beneficial. The end of science is not to prove a theory but to improve mankind. The real revolution is the evolution of consciousness. Structure so sound it requires no announcement. A curriculum architecture for those who help others live on the ground."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12">
          <div className="border border-ink/10 p-7">
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-gold mb-3">
              What We Are
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">
              An Applied Intelligence Firm — not a software company, not an AI agency, not a
              consultancy. An intelligence architecture practice organised around permanent
              capabilities.
            </p>
          </div>
          <div className="border border-ink/10 p-7">
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-gold mb-3">
              What We Build
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">
              The conditions under which intelligence can be trusted. Reasoning infrastructure.
              Research frameworks. Applied intelligence systems. Trustworthy invisible architecture.
            </p>
          </div>
          <div className="border border-ink/10 p-7">
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-gold mb-3">
              What Cohered by Design Means
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">
              Every capability, every research programme, every consulting engagement — designed
              from the same foundational architecture. Coherence is not aesthetic. It is structural.
            </p>
          </div>
        </div>
        <blockquote className="mt-16 max-w-3xl border-l border-gold pl-8">
          <p className="font-display text-2xl md:text-3xl leading-snug italic">
            “MATRIX is not simply building products. We are designing the invisible architecture
            through which intelligence becomes trustworthy, scalable, and beneficial. An
            intelligence architecture firm designing the next intelligence layer of civilisation.”
          </p>
          <footer className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60">
            Somnath Banerjee, Founder — MATRIX Labs · system@matrka.net · matrka.net
          </footer>
        </blockquote>
      </Section>

      {/* ——— 11 · STRATEGIC ROADMAP ——— */}
      <Section
        rail="Strategic Roadmap"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-border"
      >
        <Head n="11" t="Strategic Roadmap" k="Now · Next · Frontier · Future" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6">
          {roadmap.map((r) => (
            <RoadmapCol key={r.l} l={r.l} items={r.items} />
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Roadmap items are organised by expected initiation, not completion. Frontier and Future
          items are dependent on prior milestones, institutional partnerships, regulatory approval,
          and capital availability.
        </p>
      </Section>

      {/* ——— 12 · PARTNERSHIP & INVESTMENT ——— */}
      <Section
        rail="Partnership & Investment"
        variant="paper"
        className="pt-14 md:pt-20 pb-20 md:pb-28 border-t border-ink/10"
      >
        <Head n="12" t="Partnership & Investment" k="What we are building, and what we need." />
        <p className="text-ink/80 leading-relaxed max-w-3xl mb-10">
          MATRIX’s capability framework is designed to be capital-efficient: each capability
          compounds into the next through the Omega Model and CES-QN foundations. We work with grant
          funders, institutional partners, and strategic investors who want to build durable
          intelligence infrastructure — not chase product cycles.
        </p>
        <div className="border border-ink/10 border-l-2 border-l-gold p-8 md:p-12">
          <p className="font-display text-4xl md:text-6xl tracking-tight text-gold">
            Capability-Led Investment
          </p>
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink/60 mt-4 mb-10">
            Grant · Partnership · Strategic Capital
          </p>
          <p className="text-ink/80 leading-relaxed max-w-3xl mb-12">
            MATRIX is currently seeking support across four fronts — each aligned to a specific
            capability cluster and each structured so that the final scope of work is revised based
            on the approved amount. No single grant can fund the full capability framework; MATRIX
            operates on a principle of honest scoping and prioritised deployment.
          </p>
          <AskTable rows={askClusters} />
          <p className="mt-10 text-sm text-ink/60 leading-relaxed max-w-3xl">
            <strong className="font-semibold text-ink">Note on scope:</strong> all capabilities and
            research programmes cannot fit within any single funding amount. The final list of
            capabilities funded, products prioritised, and research accelerated is revised based on
            the approved amount — ensuring capital-efficient deployment and honest scoping
            throughout.
          </p>
        </div>
      </Section>

      {/* ——— BACK COVER ——— */}
      <Section rail="Back Cover" className="pt-14 md:pt-20 pb-24 border-t border-border">
        <div>
          <p className="font-display text-6xl md:text-8xl tracking-tight">MATRIX.</p>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mt-6">
            L&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;S
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            mātṛkā · Applied Intelligence Firm
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            matrka.net · system@matrka.net · +91 9875 663 417
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            Somnath Banerjee, Founder · banerjeesomnath042@gmail.com
          </p>
          <div className="mt-12 max-w-md border-t border-border pt-10 space-y-2 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            <p>Company Profile &amp; Pitch Deck · 2026</p>
            <p className="text-foreground/80">
              Intelligence<span className="text-gold"> · </span>Architecture
              <span className="text-gold"> · </span>Impact
            </p>
            <p className="text-gold">Cohered by Design</p>
          </div>
          <p className="mt-12 max-w-md text-sm text-muted-foreground leading-relaxed">
            This document is confidential. For the full Applied Intelligence Portfolio, request the
            separate portfolio document.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}

function BlueprintCol({ t, items }: { t: string; items: { b?: string; d: string }[] }) {
  return (
    <div className="border-t border-ink/15 pt-6">
      <h3 className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold mb-5">{t}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.d} className="text-sm text-ink/80 leading-relaxed">
            <span className="font-mono text-gold">{item.b ? `${item.b} — ` : "◌ "}</span>
            {item.d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FrontierHorizon({ t, items }: { t: string; items: { b?: string; d: string }[] }) {
  return (
    <div className="border-t border-ink/10 py-10 grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 md:col-span-3">
        <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold">{t}</h3>
      </div>
      <div className="col-span-12 md:col-span-9">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.d} className="text-ink/80 leading-relaxed">
              <span className="font-mono text-gold">{item.b ? `${item.b} — ` : "◌ "}</span>
              {item.d}
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
