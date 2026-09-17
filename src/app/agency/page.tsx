import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import { Threads, Bridge, Compass } from "@/components/matrix/Metaphors";

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

const engagements = [
  {
    n: "α",
    t: "Discovery",
    p: "6 weeks",
    d: "We sit with the question until it changes shape. We leave with a map, not a deck.",
  },
  {
    n: "β",
    t: "Architecture",
    p: "3–6 months",
    d: "A blueprint for the system, the team, and the first year of decisions. Tested where it matters.",
  },
  {
    n: "γ",
    t: "Embedded",
    p: "12 months",
    d: "Two partners join your studio in residence. We build alongside, with full skin in the game.",
  },
  {
    n: "δ",
    t: "Counsel",
    p: "Ongoing",
    d: "A standing line to the studio. Quarterly retreats. Quiet, slow, decisive.",
  },
];

const howToSteps = [
  {
    name: "Initial Correspondence",
    text: "Write to us at system@matrka.net describing your challenge, institution, and the horizon you are designing for. We respond within a few working days.",
  },
  {
    name: "Discovery Call",
    text: "A 45-minute conversation to understand the shape of the problem. No pitch, no deck — just a careful listen. We assess fit and recommend an engagement shape.",
  },
  {
    name: "Engagement Selection",
    text: "Choose from four shapes: Discovery (6 weeks), Architecture (3–6 months), Embedded (12 months), or Counsel (ongoing standing retainer).",
  },
  {
    name: "Studio Work",
    text: "Our team embeds with yours — researching, architecting, and building alongside. We maintain full transparency with regular check-ins and written progress.",
  },
  {
    name: "Delivery & Handover",
    text: "We deliver readable, well-documented systems designed to outlive their authors. Every engagement ends with a clear handover and an open line for questions.",
  },
];

const faqItems = [
  {
    q: "What types of organisations does Matrix consult for?",
    a: "We work with sovereign governments, cultural foundations, universities and labs, public-good companies, long-horizon investors, and founders of singular conviction. Our engagements are designed for institutions that think in decades, not quarters.",
  },
  {
    q: "How long does a typical consulting engagement last?",
    a: "Our four engagement shapes range from a 6-week Discovery sprint to ongoing standing Counsel. Most architecture engagements run 3–6 months, while embedded partnerships are designed for 12 months with full commitment from both sides.",
  },
  {
    q: "What is the difference between Discovery and Architecture?",
    a: "Discovery is a 6-week immersive process where we sit with your question until it changes shape — we leave with a map, not a deck. Architecture is a 3–6 month engagement where we design the full blueprint for the system, the team, and the first year of decisions.",
  },
  {
    q: "Does Matrix work with startups or only large institutions?",
    a: "We work with a few unusual founders alongside serious institutions. What matters to us is conviction and a long horizon — not company size. If your problem is unusual and you intend to still be here in a hundred years, we may be the right studio.",
  },
  {
    q: "How do I begin a consulting engagement with Matrix?",
    a: "Begin by writing to us at system@matrka.net or booking a discovery call. We take on a small number of engagements each year, so the door is narrow on purpose. We will respond within a few working days.",
  },
];

export default function Agency() {
  return (
    <PageShell>
      <Section rail="Practice IV · AI Agency" className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <h1 className="col-span-12 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
            Threads woven
            <br />
            into <span className="italic text-muted-foreground">fabric.</span>
          </h1>
        </div>
        <div className="mt-16">
          <Threads className="w-full text-foreground/70" />
        </div>
      </Section>

      <Section rail="What We Build" className="pt-14 md:pt-20 pb-24">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-12">
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

      <Section rail="How an engagement runs" variant="paper" className="pt-14 md:pt-20 pb-32">
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

      <Section rail="Consulting" id="consulting" className="pt-14 md:pt-20 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12">
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight">
              A bridge
              <br />
              between <span className="italic text-muted-foreground">where you are</span>
              <br />
              and what you intend.
            </h1>
            <p className="mt-10 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Capability IV of the Nine ·{" "}
              <Link
                href="/capabilities/consulting"
                className="text-gold hover:text-foreground transition-colors duration-500"
              >
                Consulting →
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-20">
          <Bridge className="w-full text-foreground/80" />
        </div>
      </Section>

      <Section rail="Engagements" className="pt-14 md:pt-20 pb-24">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-6">
              Four shapes of work.
            </h2>
            <Compass className="w-2/3 mt-12 text-foreground/70" />
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {engagements.map((e) => (
              <div key={e.n} className="border-t border-border pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-gold">{e.n}</span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {e.p}
                  </span>
                </div>
                <h3 className="font-display text-3xl mt-2 tracking-tight">{e.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section rail="For whom" variant="paper" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight mt-6">
              We work with serious institutions{" "}
              <span className="italic">— and a few unusual founders.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <ul className="space-y-3 text-base">
              {[
                "Sovereign governments",
                "Cultural foundations",
                "Universities and labs",
                "Public-good companies",
                "Long-horizon investors",
                "Founders of singular conviction",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-baseline gap-4 border-b border-foreground/15 pb-3"
                >
                  <span className="font-mono text-[10px] text-gold">·</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section rail="The narrow door" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 border-t border-border pt-16">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
              We take on a small number of engagements. The door is narrow on purpose.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right flex md:justify-end items-end">
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Request an Introduction →
            </a>
          </div>
        </div>
      </Section>

      <Section rail="How it begins" variant="paper" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              From first letter to lasting system.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="col-span-12 md:col-span-4 border-t border-ink/15 pt-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl tracking-tight">{step.name}</h3>
              </div>
              <p className="text-ink/75 leading-relaxed mt-4 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section rail="Questions" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              Frequently asked.
            </h2>
          </div>
        </div>
        <div className="border-t border-border">
          {faqItems.map((item) => (
            <div key={item.q} className="border-b border-border py-8">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight">{item.q}</h3>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section rail="Discovery Call" variant="paper" className="pt-14 md:pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              Schedule a conversation.
            </h2>
            <p className="text-ink/75 leading-relaxed mt-6 max-w-2xl">
              Book a 45-minute discovery call. No pitch, no deck — just a careful listen to
              understand the shape of your challenge.
            </p>
          </div>
        </div>
        <div className="border-t border-ink/15 pt-12">
          <div className="bg-fog border border-ink/15 p-12 text-center">
            <p className="font-display text-3xl text-ink/70 mb-6">Calendly booking link</p>
            <p className="text-ink/50 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Replace this section with your Calendly embed. Add your Calendly URL to the consulting
              section of the agency page to enable direct scheduling.
            </p>
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-ink px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-ink hover:text-fog transition-colors"
            >
              Or write to us directly →
            </a>
          </div>
        </div>
      </Section>

      <Section
        rail="Our Portfolio"
        className="pt-14 md:pt-20 pb-24 border-t border-border"
        id="portfolio"
      >
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <h2 className="col-span-12 font-display text-4xl md:text-5xl leading-[0.98] tracking-tight">
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

      <Section rail="Describe the Problem" className="pt-14 md:pt-20 pb-24 border-t border-border">
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

      <Section rail="Nine Capabilities" className="pt-14 md:pt-20 pb-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-tight">
            Every project draws from the nine capabilities.{" "}
            <span className="italic text-muted-foreground">See the full architecture.</span>
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right flex md:justify-end gap-6 flex-col md:flex-row">
            <Link
              href="/capabilities"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              Nine Capabilities →
            </Link>
            <Link
              href="#consulting"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              Consulting →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
