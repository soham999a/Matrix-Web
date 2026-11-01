import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { NewsletterSubscribeForm } from "@/components/matrix/NewsletterSubscribeForm";
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
      <Section rail="Newsletter" className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
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

      <Section rail="The Premise" className="pt-14 md:pt-20 pb-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 border-y border-border py-16">
          <div className="col-span-12">
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

      <Section rail="Past Issues" className="pt-14 md:pt-20 pb-16">
        <div className="border-t border-border">
          <Link
            href="/newsletter/the-end-of-which-model"
            className="group grid grid-cols-12 gap-6 sm:gap-8 py-10 border-b border-border items-start"
          >
            <div className="col-span-2 font-mono text-xs tracking-widest text-gold pt-2">01</div>
            <div className="col-span-10 md:col-span-7">
              <p className="eyebrow !text-muted-foreground mb-3">17 October 2026 · GRAVITY</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight group-hover:italic transition-all duration-300">
                The End of &ldquo;Which Model?&rdquo;
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                Introducing GRAVITY and Minimum Sufficient Intelligence (MSI) — and the first
                deterministic benchmark of the prototype.
              </p>
              <span className="mt-5 inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                Read the issue →
              </span>
            </div>
          </Link>
        </div>
      </Section>

      <Section rail="Subscribe" variant="paper" className="pt-14 md:pt-20 pb-24 mt-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-4">
              A letter when there is something to say. Nothing else.
            </h2>
          </div>
          <NewsletterSubscribeForm className="col-span-12 md:col-span-5" />
          <p className="col-span-12 md:col-span-5 md:ml-auto font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
            Occasional · Unscheduled · Unhurried
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
