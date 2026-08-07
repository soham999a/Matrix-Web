import type { Metadata } from "next";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { Threads } from "@/components/matrix/Metaphors";

export const metadata: Metadata = {
  title: "AI Agency — Matrix",
  description:
    "Custom intelligence designed to disappear: agents, models, and orchestration for specific worlds.",
  openGraph: {
    title: "Matrix AI Agency",
    description: "Threads woven into fabric. Custom intelligence for specific problems.",
  },
};

export default function Agency() {
  return (
    <PageShell>
      <Section className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-8">
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
        <div className="grid grid-cols-12 gap-8">
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
        <div className="grid grid-cols-12 gap-8 mt-16">
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
        <div className="grid grid-cols-12 gap-8 items-end">
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
