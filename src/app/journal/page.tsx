import type { Metadata } from "next";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { Ripple } from "@/components/matrix/Metaphors";

export const metadata: Metadata = {
  title: "Journal — Matrix",
  description: "Field notes, dispatches, and slow essays from the Matrix studio.",
  openGraph: {
    title: "Matrix Journal",
    description: "Cascading thought. Slow writing.",
  },
};

const kinds = [
  {
    t: "Essays",
    d: "Long-form writing on intelligence, perception, and the systems beneath public life.",
  },
  {
    t: "Field notes",
    d: "What we learned inside the work — recorded plainly, without conclusions we have not earned.",
  },
  {
    t: "Letters",
    d: "Short correspondence to the people who read us. Occasional, unscheduled, unhurried.",
  },
];

export default function Journal() {
  return (
    <PageShell>
      <Section className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="Volume I">Journal</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              Cascading
              <br />
              <span className="italic text-muted-foreground">thought.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Ripple className="w-full text-foreground/80" />
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-12 gap-8 border-y border-border py-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>The premise</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
              We publish when something has settled —{" "}
              <span className="italic text-muted-foreground">not on a schedule.</span>
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-foreground/80 max-w-3xl">
              The journal is where the studio thinks out loud, slowly. The first entries are being
              written now; they will appear here as they are finished, and nowhere before.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>What will appear here</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-12">
            {kinds.map((k) => (
              <div key={k.t} className="border-t border-border pt-6">
                <h3 className="font-display text-3xl tracking-tight">{k.t}</h3>
                <div className="h-px w-8 bg-gold my-4" />
                <p className="text-muted-foreground leading-relaxed">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paper" className="py-24 mt-12">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>Quarterly</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-4">
              A letter when there is something to say. Nothing else.
            </h2>
          </div>
          <form className="col-span-12 md:col-span-5 flex items-stretch border-b border-foreground/40">
            <input
              type="email"
              placeholder="your@correspondence"
              className="flex-1 bg-transparent py-4 text-base placeholder:text-foreground/40 focus:outline-none"
            />
            <button
              type="button"
              className="font-mono text-[10px] tracking-[0.28em] uppercase px-4 hover:text-gold"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </Section>
    </PageShell>
  );
}
