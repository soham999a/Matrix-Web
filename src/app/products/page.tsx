import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { Origami } from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/products",
  title: "AI Products & Applied Intelligence Platforms",
  description:
    "Nine AI platforms and services from Matrix, one architecture: QiDS, Humming, ARPS, Mangrove, Datum, MindMuse Suite, AlgoVista, Digital and Consulting — built on the CES-QN and KALPA research frameworks.",
  keywords: [
    "Matrix products",
    "AI products",
    "applied intelligence platforms",
    "QiDS",
    "Humming AI",
    "ARPS supply chain AI",
    "Mangrove ESG",
    "AI platform India",
    "human intelligence platform",
    "AI portfolio",
  ],
  og: {
    title: "Matrix — Applied Intelligence Portfolio",
    description:
      "Designed around one architecture. Nine platforms and services, two research frameworks.",
  },
});

const portfolio = [
  {
    n: "01",
    t: "QiDS",
    tag: "Human Intelligence Platform",
    domain: "Education · Career · Talent",
    caps: [
      "Psychometric assessment (IQ/EQ/SQ/AQ)",
      "Individual Quotient Profile",
      "Career Intelligence",
      "Human Development Roadmap",
    ],
    s: "Prototype · Patent 202631019776 A",
  },
  {
    n: "02",
    t: "Humming",
    tag: "Operational Intelligence Platform",
    domain: "Enterprise · Management",
    caps: [
      "Executive Dashboards",
      "Decision Intelligence",
      "Management AI",
      "Business Monitoring",
      "AI Copilot",
    ],
    s: "Research + MVP",
  },
  {
    n: "03",
    t: "ARPS",
    tag: "Supply Chain Intelligence Platform",
    domain: "Procurement · Logistics · Risk",
    caps: [
      "Demand Forecasting",
      "Procurement Intelligence",
      "Inventory Intelligence",
      "Logistics Optimisation",
      "Risk Intelligence",
    ],
    s: "Research + MVP",
  },
  {
    n: "04",
    t: "Mangrove",
    tag: "Sustainability Intelligence Platform",
    domain: "ESG · Climate · Compliance",
    caps: [
      "Carbon Intelligence",
      "Water Intelligence",
      "Climate Risk",
      "Scenario Modelling",
      "Compliance Reporting",
    ],
    s: "Research",
  },
  {
    n: "05",
    t: "Datum",
    tag: "Analytics Made Easy",
    domain: "Business Intelligence",
    caps: [],
    s: "Research",
  },
  {
    n: "06",
    t: "MindMuse Suite",
    tag: "Creative Intelligence Platform · Hertz · Resonance · Sonata",
    domain: "Music · Creative Systems · Knowledge",
    caps: [],
    s: "Research",
  },
  {
    n: "07",
    t: "AlgoVista",
    tag: "Algorithm Visualisation Platform",
    domain: "Education · Research · Computer Science",
    caps: [],
    s: "Research",
  },
  {
    n: "08",
    t: "Digital + Consulting",
    tag: "Knowledge Assets & Advisory",
    domain: "Enterprise · Institutional",
    caps: [],
    s: "Active practice",
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
    d: "QiDS · Humming · ARPS · Mangrove · Datum · MindMuse Suite · AlgoVista · Digital · Consulting",
  },
];

const roadmap = [
  { h: "Near term", items: ["QiDS", "Humming", "ARPS", "Datum", "MindMuse Suite", "Mangrove"] },
  {
    h: "Medium term",
    items: [
      "Decision Intelligence",
      "Institutional AI",
      "Enterprise Intelligence",
      "Sustainability Intelligence",
    ],
  },
  {
    h: "Long term",
    items: [
      "AI-native Infrastructure",
      "Advanced Compute",
      "Human-Machine Intelligence",
      "Cognitive Devices",
      "Civilisation-scale Decision Systems",
    ],
  },
];

export default function Products() {
  return (
    <PageShell>
      <Section className="pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="Practice III">Applied Intelligence Portfolio</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              Designed around
              <br />
              <span className="italic text-muted-foreground">one architecture.</span>
            </h1>
            <p className="mt-10 text-lg text-foreground/80 max-w-xl leading-relaxed">
              Each product is a distinct manifestation of a single coherent intelligence
              architecture — the Omega Model. Where conventional firms ship features, we design
              systems: reasoning infrastructure an organisation can depend on across decades.
            </p>
            <div className="mt-12 flex gap-16">
              <div>
                <div className="font-display text-6xl">9</div>
                <p className="eyebrow mt-2">Platforms &amp; Services</p>
              </div>
              <div>
                <div className="font-display text-6xl">2</div>
                <p className="eyebrow mt-2">Research Frameworks</p>
              </div>
            </div>
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
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {p.domain}
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02] mt-8">
                  {p.t}
                </h2>
                <p className="font-display text-xl italic text-muted-foreground mt-3">{p.tag}</p>
                {p.caps.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {p.caps.map((c) => (
                      <li key={c} className="text-sm text-foreground/75 leading-relaxed">
                        — {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-10 border-t border-border pt-5">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                  {p.s}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-8 mb-16">
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
            <div key={l.t} className="grid grid-cols-12 gap-8 py-8 border-b border-ink/15">
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
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Horizon">Roadmap</Eyebrow>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
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
        <div className="grid grid-cols-12 gap-8">
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
