import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { Origami } from "@/components/matrix/Metaphors";
import { JsonLd } from "@/components/matrix/JsonLd";
import { SITE } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/products",
  title: "AI Products & Applied Intelligence Platforms",
  description:
    "Nine AI platforms and services from Matrix, one architecture — Gravity, QiDS, Humming, ARPS, Mangrove, Datum, MindMuse, Digital Products, and Consulting — built on the CES-QN and KALPA research frameworks.",
  keywords: [
    "Matrix products",
    "AI products",
    "applied intelligence platforms",
    "Gravity decision intelligence",
    "QiDS human intelligence",
    "Humming AI",
    "ARPS supply chain AI",
    "Mangrove ESG",
    "MindMuse creative intelligence",
    "AI platform India",
    "human intelligence platform",
    "AI portfolio",
  ],
  og: {
    title: "Matrix — Applied Intelligence Portfolio",
    description:
      "Nine platforms. One architecture. Gravity · QiDS · Humming · ARPS · Mangrove · Datum · MindMuse · Digital Products · Consulting.",
  },
});

const portfolio = [
  {
    n: "01",
    t: "Gravity",
    tag: "Decision & Adaptive Intelligence · Multi-Agent Architecture",
    d: "The most direct commercial expression of the Omega Model. A multi-agent decision intelligence framework built around computationally adaptive intelligence — the capacity to reconfigure reasoning strategies in response to the structure of the problem, not apply a fixed algorithm uniformly. The foundation for enterprise intelligence deployments across the MATRIX product suite.",
    domain: "Decision Intelligence · Multi-Agent Systems",
    dh: "/capabilities/engineering",
    caps: [],
    s: "In Development",
    live: "https://gravity.matrka.net/",
  },
  {
    n: "02",
    t: "QiDS",
    tag: "Human Intelligence · Education · Career · Talent",
    d: "The Quadrant Intelligence Development System — MATRIX's flagship education platform and primary commercial IP asset. Integrates IQ, EQ, SQ, and AQ into a unified assessment and development lifecycle, producing personalised Individual Quotient Profiles with six-month roadmaps. Patent Application 202631019776 A.",
    domain: "Education · Career · Talent",
    dh: "/capabilities/education",
    caps: [
      "Psychometric assessment (IQ/EQ/SQ/AQ)",
      "Individual Quotient Profile",
      "Career Intelligence",
      "Human Development Roadmap",
      "Configurations: School · Individual · Interview · University · Corporate · Custom",
    ],
    s: "Prototype · Patent",
    live: "https://qids.matrka.net/",
  },
  {
    n: "03",
    t: "Humming",
    tag: "Frequency Intelligence · Operational Wellness · Enterprise",
    d: "Operational intelligence and frequency-informed wellness platform — an AI copilot for executive decision-making integrating executive dashboards, decision intelligence, management AI, and continuous business monitoring into a unified operational layer.",
    domain: "Enterprise · Management",
    dh: "/capabilities/systems",
    caps: [
      "Executive Dashboards",
      "Decision Intelligence",
      "Management AI",
      "Business Monitoring",
      "AI Copilot",
    ],
    s: "Research + MVP",
    live: "https://humming.matrka.net/",
  },
  {
    n: "04",
    t: "ARPS",
    tag: "Autonomous Procurement · Supply Chain Intelligence",
    d: "Autonomous Procurement and Supply Chain Intelligence — applying the CES-QN framework to supply chain decision-making through demand forecasting, procurement intelligence, inventory optimisation, logistics intelligence, and risk modelling.",
    domain: "Procurement · Logistics · Risk",
    dh: "/capabilities/systems",
    caps: [
      "Demand Forecasting",
      "Procurement Intelligence",
      "Inventory Intelligence",
      "Logistics Optimisation",
      "Risk Intelligence",
    ],
    s: "Research + MVP",
    live: "https://arps.matrka.net/",
  },
  {
    n: "05",
    t: "Mangrove",
    tag: "Sustainability Intelligence · ESG · Climate · Water",
    d: "Sustainability intelligence engine for ESG measurement, climate risk assessment, and compliance — providing carbon intelligence, water intelligence, climate risk modelling, and scenario analysis. Aligned with MATRIX's XPrize Water Scarcity research programme (2027 submission).",
    domain: "ESG · Climate · Compliance",
    dh: "/capabilities/sustainability",
    caps: [
      "Carbon Intelligence",
      "Water Intelligence",
      "Climate Risk",
      "Scenario Modelling",
      "Compliance Reporting",
    ],
    s: "Research",
    live: "https://mangrove.matrka.net/",
  },
  {
    n: "06",
    t: "Datum",
    tag: "Enterprise Data Intelligence · Self-Service Analytics",
    d: "Enterprise data intelligence through natural language analytics, self-service BI, enterprise reporting, and decision support — making advanced analytical intelligence accessible to organisations without dedicated data science teams.",
    domain: "Business Intelligence",
    dh: "/capabilities/systems",
    caps: [
      "Natural Language Analytics",
      "Self-Service BI",
      "Enterprise Reporting",
      "Decision Support",
    ],
    s: "Prototype",
    live: "https://datum.matrka.net/",
  },
  {
    n: "07",
    t: "Agile Plus",
    tag: "Intelligent Project Management",
    domain: "Project Management · Enterprise",
    caps: [],
    s: "In Development",
    live: "https://agile.matrka.net/",
  },
  {
    n: "08",
    t: "Metacare",
    tag: "Intelligent Healthcare",
    domain: "Healthcare · AI",
    caps: [],
    s: "In Development",
    live: "https://metacare.matrka.net/",
  },
  {
    n: "09",
    t: "Quantum Learning Platform",
    tag: "QuantumLab · Quantum Education",
    domain: "Education · Quantum Computing",
    caps: [
      "Quantum Computing Fundamentals",
      "Quantum Visualisation & Labs",
      "Interactive Simulations",
      "Curriculum for Schools & Universities",
    ],
    s: "In Development",
    live: "https://quantumlab.matrka.net/",
  },
  {
    n: "10",
    t: "MindMuse",
    tag: "AI Creativity & Cognition · Creative Intelligence Engine",
    d: "AI creativity and cognition engine applying the KALPA framework to music, knowledge, and creative systems — including Hertz (FM radio & intelligent curation), Resonance (recommendation engine), Sonata (music dictionary), and AlgoVista (algorithm visualisation). Serving the Orange Economy.",
    domain: "Creative Intelligence · Orange Economy",
    dh: "/capabilities/design",
    caps: [],
    apps: [
      { name: "Hertz", href: "https://hertz.matrka.net/" },
      { name: "Resonance", href: "https://resonance.matrka.net/" },
      { name: "Sonata", href: "https://sonata.matrka.net/" },
      { name: "AlgoVista", href: "https://algovista.matrka.net/" },
    ],
    s: "Designed · In Dev.",
  },
  {
    n: "11",
    t: "Digital Products",
    tag: "End-to-End Product Engineering · Knowledge Assets",
    d: "Commercial knowledge assets and enterprise advisory services — prompt engineering packs, AI strategy frameworks, automation playbooks, BI dashboard templates, and enterprise transformation consulting. Currently operational and generating revenue.",
    domain: "Enterprise · Knowledge Assets",
    dh: "/capabilities/consulting",
    caps: [
      "Prompt Engineering Packs",
      "AI Strategy Frameworks",
      "Automation Playbooks",
      "BI Dashboard Templates",
      "Enterprise Transformation Consulting",
    ],
    s: "Commercial",
  },
  {
    n: "12",
    t: "Consulting",
    tag: "Applied AI Strategic Advisory · Enterprise Transformation",
    d: "Applied AI strategic advisory covering AI readiness assessment, intelligence architecture design, responsible AI governance, enterprise transformation, and technology strategy. MATRIX's consulting practice is the primary client entry point — consulting engagements generate product requirements, pilot relationships, and long-term platform deployments.",
    domain: "Strategic Advisory · Enterprise",
    dh: "/capabilities/consulting",
    caps: [
      "AI Readiness Assessment",
      "Intelligence Architecture Design",
      "Responsible AI Governance",
      "Enterprise Transformation",
      "Technology Strategy",
    ],
    s: "Commercial",
  },
];

const layers = [
  {
    t: "Shared AI Layer",
    d: "Foundation models · Causal reasoning · Adaptive inference · Knowledge representation",
  },
  {
    t: "Knowledge Layer",
    d: "Domain ontologies · Validated datasets · Research IP · Institutional memory",
  },
  {
    t: "Reasoning Layer",
    d: "Omega Model · CES-QN Framework · KALPA Framework · Structured inference engine",
  },
  {
    t: "Platform Layer",
    d: "APIs · Integration architecture · SaaS delivery · Enterprise connectors",
  },
  {
    t: "Products",
    d: "Gravity · QiDS · Humming · ARPS · Mangrove · Datum · MindMuse · Digital Products · Consulting",
  },
];

const roadmap = [
  {
    h: "Near term",
    items: ["Gravity", "QiDS", "Humming", "ARPS", "Datum", "MindMuse", "Mangrove"],
  },
  {
    h: "Medium term",
    items: ["Agile Plus", "Metacare", "Digital Products", "Consulting"],
  },
  {
    h: "Long term",
    items: [
      "Quantum Learning Platform",
      "AI-native Infrastructure",
      "Advanced Compute",
      "Human-Machine Intelligence",
      "Cognitive Devices",
    ],
  },
];

export default function Products() {
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Matrix — Applied Intelligence Portfolio",
            description:
              "Nine AI platforms and services from Matrix, one architecture — Gravity, QiDS, Humming, ARPS, Mangrove, Datum, MindMuse, Digital Products, and Consulting.",
            url: `${SITE.url}/products`,
            numberOfItems: portfolio.length,
            itemListElement: portfolio.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "SoftwareApplication",
                name: p.t,
                description: p.d || p.tag,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                url: p.live ?? `${SITE.url}/products#${p.n}`,
                publisher: { "@id": `${SITE.url}/#organization` },
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Somnath Banerjee",
            jobTitle: "Founder, Matrix",
            url: SITE.url,
            worksFor: { "@id": `${SITE.url}/#organization` },
          },
        ]}
      />

      <Section className="pt-32 pb-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="Practice III">Applied Intelligence Portfolio</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              Nine platforms.
              <br />
              <span className="italic text-muted-foreground">One architecture.</span>
            </h1>
            <p className="mt-10 text-lg text-foreground/80 max-w-xl leading-relaxed">
              Each platform in the MATRIX suite is a distinct commercial manifestation of the Omega
              Model reasoning infrastructure. They are not standalone products — they are nodes in a
              single compounding intelligence ecosystem. Maturity varies; this is stated plainly for
              each platform.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-16">
              <div>
                <div className="font-display text-6xl">9</div>
                <p className="eyebrow mt-2">Platforms &amp; Services</p>
              </div>
              <div>
                <div className="font-display text-6xl">2</div>
                <p className="eyebrow mt-2">Research Frameworks</p>
              </div>
            </div>
            <Link
              href="/capabilities"
              className="inline-block mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-gold border-b border-gold/0 hover:border-gold transition-colors duration-500"
            >
              Mapped across nine capabilities →
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Origami className="w-full text-foreground/80 breathe" />
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-12">
          {portfolio.map((p, i) => (
            <article
              key={p.t}
              className={`col-span-12 md:col-span-6 border-t border-border p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between
                          ${i % 2 === 0 ? "md:border-r" : ""}
                          ${i >= portfolio.length - 2 ? "md:border-b" : ""}
                          hover:bg-foreground/[0.025] transition-colors duration-700`}
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{p.n}</span>
                  {p.dh ? (
                    <Link
                      href={p.dh}
                      className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-gold transition-colors duration-500"
                    >
                      {p.domain} ↗
                    </Link>
                  ) : (
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      {p.domain}
                    </span>
                  )}
                </div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02] mt-8">
                  {p.t}
                </h2>
                <p className="font-display text-xl italic text-muted-foreground mt-3">{p.tag}</p>
                {"d" in p && p.d && (
                  <p className="mt-4 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                    {p.d}
                  </p>
                )}
                {"apps" in p && p.apps && p.apps.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {p.apps.map((app: { name: string; href: string }) => (
                      <a
                        key={app.name}
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold border-b border-gold/30 hover:border-gold transition-colors duration-500"
                      >
                        {app.name} ↗
                      </a>
                    ))}
                  </div>
                )}
                {p.caps.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {p.caps.map((c) => (
                      <li
                        key={c}
                        className="text-sm text-foreground/75 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-gold mt-0.5">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-10 border-t border-border pt-5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                  {p.s}
                </span>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground border-b border-gold/0 hover:border-gold transition-colors duration-500"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Omega">The Model</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
            One architecture.
            <br />
            <span className="italic">Many manifestations.</span>
          </h2>
        </div>
        <div className="border-t border-ink/15">
          {layers.map((l, i) => (
            <div key={l.t} className="grid grid-cols-12 gap-6 sm:gap-8 py-8 border-b border-ink/15">
              <div className="col-span-2 font-mono text-[10px] tracking-[0.28em] text-ink/50">
                L{String(layers.length - i).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl tracking-tight">
                {l.t}
              </h3>
              <p className="col-span-12 md:col-span-6 text-ink/75 leading-relaxed self-center">
                {l.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Horizon">Roadmap</Eyebrow>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {roadmap.map((r) => (
            <div key={r.h} className="col-span-12 md:col-span-4 border-t border-border pt-8">
              <p className="eyebrow">{r.h}</p>
              <ul className="mt-6 space-y-3">
                {r.items.map((it) => (
                  <li key={it} className="font-display text-2xl tracking-tight leading-snug">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <blockquote className="col-span-12 md:col-span-8 font-display text-3xl md:text-4xl italic text-muted-foreground leading-tight">
            &ldquo;We do not build disconnected software. We design the invisible architecture
            through which intelligence becomes trustworthy, scalable, and beneficial.&rdquo;
            <footer className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground not-italic">
              — Somnath Banerjee, Founder · Matrix
            </footer>
          </blockquote>
          <div className="col-span-12 md:col-span-4 md:text-right flex md:justify-end items-end">
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Enquire →
            </a>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
