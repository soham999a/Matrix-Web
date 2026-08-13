import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { Threads } from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/agency",
  title: "Custom AI Agents, Models & Orchestration",
  description:
    "Matrix AI Agency designs custom intelligence that disappears into experience — AI agents with memory and manners, fine-tuned models, orchestration, and evaluation for specific worlds.",
  keywords: [
    "AI agency",
    "custom AI agents",
    "AI model development",
    "AI orchestration",
    "AI evaluation",
    "custom AI solutions India",
    "AI development studio",
    "Matrix AI agency",
  ],
  og: {
    title: "Matrix AI Agency",
    description: "Threads woven into fabric. Custom intelligence for specific problems.",
  },
});

const projects = [
  {
    n: "01",
    t: "Hertz Radio",
    tag: "Creative Intelligence Platform · Hertz · Resonance · Sonata",
    domain: "Music · Live Systems",
    dh: "/capabilities/design",
    s: "Live",
    live: "http://fm.matrka.net/",
  },
  {
    n: "02",
    t: "AlgoVista",
    tag: "Algorithm Visualisation Platform",
    domain: "Education · Research · Computer Science",
    dh: "/capabilities/education",
    s: "Live",
    live: "https://algovista.matrka.net/",
  },
  {
    n: "03",
    t: "QiDS",
    tag: "Human Intelligence Platform",
    domain: "Education · Career · Talent",
    dh: "/capabilities/education",
    s: "Live · Patent 202631019776 A",
    live: "https://qids.matrka.net/",
  },
  {
    n: "04",
    t: "Datum",
    tag: "Analytics Made Easy",
    domain: "Business Intelligence",
    dh: "/capabilities/systems",
    s: "Live",
    live: "https://datum.matrka.net/",
  },
  {
    n: "05",
    t: "Humming",
    tag: "Operational Intelligence Platform",
    domain: "Enterprise · Management",
    dh: "/capabilities/systems",
    s: "Live",
    live: "https://humming.matrka.net/",
  },
  {
    n: "06",
    t: "Mangrove",
    tag: "Sustainability Intelligence Platform",
    domain: "ESG · Climate · Compliance",
    dh: "/capabilities/sustainability",
    s: "Live",
    live: "https://mangrove.matrka.net/",
  },
  {
    n: "07",
    t: "ARPS",
    tag: "Supply Chain Intelligence Platform",
    domain: "Procurement · Logistics · Risk",
    dh: "/capabilities/systems",
    s: "Live",
    live: "https://arps.matrka.net/",
  },
  {
    n: "08",
    t: "Yesdo",
    tag: "EdTech Platform",
    domain: "Education · Partner",
    s: "Live · Partner Project",
    live: "https://www.yesdo.co.in/",
  },
  {
    n: "09",
    t: "Treasures of Innocence",
    tag: "Children's Welfare · Non-Profit",
    domain: "Social Good · Partner",
    s: "Live · Partner Project",
    live: "https://www.treasuresofinnocence.org/",
  },
  {
    n: "10",
    t: "Interview Prep",
    tag: "Coding Interview Platform",
    domain: "Education · Career",
    s: "Live",
    live: "https://codinginterview.matrka.net/",
  },
  {
    n: "11",
    t: "Supergearz",
    tag: "E-commerce Platform",
    domain: "Commerce · Partner",
    s: "Live · Partner Project",
    live: "https://www.supergearz.com/",
  },
  {
    n: "12",
    t: "Guardian Holidays",
    tag: "Travel Agency",
    domain: "Travel · Partner",
    s: "Live · Partner Project",
    live: "https://www.guardianholidays.co.in/",
  },
];

export default function Agency() {
  return (
    <PageShell>
      <Section className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Practice IV">AI Agency</Eyebrow>
          </div>
          <h1 className="col-span-12 md:col-span-9 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
            Threads woven
            <br />
            into <span className="italic text-muted-foreground">fabric.</span>
          </h1>
        </div>
        <div className="mt-16">
          <Threads className="w-full text-foreground/70" />
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="font-display text-3xl md:text-4xl leading-tight">
              We design custom intelligence for organizations whose problems will not be answered by
              a general model.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {[
              {
                n: "01",
                t: "Agents",
                d: "Specific intelligences with memory, manners, and a job.",
              },
              {
                n: "02",
                t: "Models",
                d: "Fine-tuned and evaluated against the only thing that matters: your decisions.",
              },
              {
                n: "03",
                t: "Orchestration",
                d: "Composition. We design the system between the systems.",
              },
              {
                n: "04",
                t: "Evaluation",
                d: "How you know it is working — long before it goes wrong.",
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-gold">{s.n}</span>
                  <h3 className="font-display text-3xl tracking-tight">{s.t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paper" className="py-32">
        <Eyebrow>How an engagement runs</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-tight mt-6 max-w-4xl">
          We begin with the decision, <span className="italic">not the model.</span>
        </h2>
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-16">
          {[
            { k: "I", l: "Name the decision the system must support" },
            { k: "II", l: "Design the evaluation before the architecture" },
            { k: "III", l: "Build the smallest system that answers it" },
            { k: "IV", l: "Hand it over readable, and stay reachable" },
          ].map((m) => (
            <div key={m.k} className="col-span-6 md:col-span-3 border-t border-ink/20 pt-6">
              <div className="font-display text-5xl md:text-6xl tracking-tight">{m.k}</div>
              <div className="eyebrow mt-4 !text-ink/60">{m.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>Selected Projects</Eyebrow>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-4xl md:text-5xl leading-[0.98] tracking-tight">
            Work that ships,{" "}
            <span className="italic text-muted-foreground">live in the world.</span>
          </h2>
        </div>
        <div className="grid grid-cols-12">
          {projects.map((p, i) => (
            <article
              key={p.t}
              className={`col-span-12 md:col-span-6 border-t border-border p-8 md:p-10 min-h-[240px] md:min-h-[280px] flex flex-col justify-between
                          ${i % 2 === 0 ? "md:border-r" : ""}
                          ${i >= projects.length - 2 ? "md:border-b" : ""}`}
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
                <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02] mt-8">
                  {p.t}
                </h3>
                <p className="font-display text-xl italic text-muted-foreground mt-3">{p.tag}</p>
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

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-tight">
            If your problem is unusual,{" "}
            <span className="italic text-muted-foreground">we may be the right studio.</span>
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Describe the Problem →
            </a>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
