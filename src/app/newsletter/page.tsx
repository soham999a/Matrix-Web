import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { Ripple } from "@/components/matrix/Metaphors";

export const metadata = pageSeo({
  path: "/newsletter",
  title: "Newsletter — The MATRIX Brief",
  description:
    "Research, ideas and developments at the intersection of intelligence, technology and complex systems. Subscribe to the MATRIX Brief.",
  keywords: [
    "Matrix newsletter",
    "The MATRIX Brief",
    "AI newsletter",
    "research updates",
    "Matrix announcements",
  ],
  og: {
    title: "The MATRIX Brief",
    description:
      "Research, ideas and developments at the intersection of intelligence, technology and complex systems.",
  },
});

export default function Newsletter() {
  return (
    <PageShell>
      <Section className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="Correspondence">Newsletter</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              The MATRIX
              <br />
              <span className="italic text-muted-foreground">Brief.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Ripple className="w-full text-foreground/80" />
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 border-y border-border py-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="✦ The premise">The premise</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Research, ideas and developments at the intersection of intelligence,{" "}
              <span className="italic text-muted-foreground">technology and complex systems.</span>
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-foreground/80 max-w-3xl">
              The MATRIX Brief is our letter to the people who read us — research as it settles, and
              a development at a time. Unscheduled, unhurried, and written by the studio.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="paper" className="py-24 mt-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>Subscribe</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-4">
              A letter when there is something to say. Nothing else.
            </h2>
          </div>
          <form className="col-span-12 md:col-span-5 flex items-stretch border-b border-foreground/40">
            <input
              type="email"
              placeholder="your@correspondence"
              className="min-w-0 flex-1 bg-transparent py-4 text-base placeholder:text-foreground/40 focus:outline-none"
            />
            <button
              type="button"
              className="shrink-0 whitespace-nowrap font-mono text-[10px] tracking-[0.28em] uppercase px-3 sm:px-4 hover:text-gold"
            >
              Subscribe →
            </button>
          </form>
          <p className="col-span-12 md:col-span-5 md:ml-auto font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
            Subscription opening soon
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
