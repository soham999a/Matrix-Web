import type { Metadata } from "next";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { Roots } from "@/components/matrix/Metaphors";

export const metadata: Metadata = {
  title: "About — Matrix",
  description:
    "Matrix is a small studio working at the intersection of research, design, and intelligent systems.",
  openGraph: {
    title: "About Matrix",
    description: "A small studio. A long horizon.",
  },
};

export default function About() {
  return (
    <PageShell>
      <Section className="pt-32 pb-16 grain">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="The Studio">About</Eyebrow>
          </div>
          <h1 className="col-span-12 md:col-span-9 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
            A small studio.
            <br />
            <span className="italic text-muted-foreground">A long horizon.</span>
          </h1>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <Roots className="w-full text-foreground/80" />
          </div>
          <div className="col-span-12 md:col-span-7 space-y-8 text-lg leading-relaxed text-foreground/85">
            <p>
              Matrix is an intelligence architecture studio: researchers, designers, and engineers
              working on the belief that intelligence should disappear into experience — and that
              the systems beneath ordinary life deserve the same care as the things we keep on
              display.
            </p>
            <p>
              We keep the studio small by design and accept a narrow number of engagements. We do
              not write press releases. We publish only when we have learned something worth saying.
            </p>
            <p>
              The work is slow on purpose. The horizon is long on purpose. The studio exists to
              leave a few things behind that were quietly true.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <Eyebrow>How we work</Eyebrow>
        <div className="grid grid-cols-12 gap-8 mt-10 border-t border-border pt-12">
          {[
            {
              n: "Small by design",
              d: "The studio stays small enough that every engagement is held by the people who conceived it.",
            },
            {
              n: "One question at a time",
              d: "We would rather answer a single question properly than survey a field quickly.",
            },
            {
              n: "Structure before surface",
              d: "We design the submerged architecture first. The visible part is what survives that work.",
            },
            {
              n: "Published, not promoted",
              d: "We share what we learn when it is settled — never as an announcement.",
            },
          ].map((p) => (
            <div key={p.n} className="col-span-12 md:col-span-3 border-t border-border pt-6">
              <h3 className="font-display text-2xl tracking-tight">{p.n}</h3>
              <div className="h-px w-8 bg-gold my-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>Disciplines</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                c: "Intelligence",
                h: "Foundations, alignment, agents, and evaluation — treated as material, not spectacle.",
              },
              {
                c: "Architecture",
                h: "Systems and engineering that remain readable long after their authors have left.",
              },
              {
                c: "Impact",
                h: "Counsel, education, and design work aimed at institutions with a century in mind.",
              },
            ].map((o) => (
              <div key={o.c}>
                <h3 className="font-display text-3xl tracking-tight">{o.c}</h3>
                <div className="h-px w-8 bg-gold my-4" />
                <p className="text-ink/75 leading-relaxed">{o.h}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-32 border-t border-border">
        <div className="grid grid-cols-12 gap-8 items-end">
          <h2 className="col-span-12 md:col-span-7 font-display text-4xl md:text-6xl leading-tight tracking-tight">
            If your work calls for ours,{" "}
            <span className="italic text-muted-foreground">write to us.</span>
          </h2>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              system@matrka.net →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-20 border-t border-border pt-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>Studio</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="eyebrow">Location</p>
              <p className="font-display text-2xl tracking-tight mt-3">Kolkata, India</p>
            </div>
            <div>
              <p className="eyebrow">Telephone</p>
              <a
                href="tel:+919875663417"
                className="block font-display text-2xl tracking-tight mt-3 hover:text-gold transition-colors"
              >
                +91 98756 63417
              </a>
            </div>
            <div>
              <p className="eyebrow">Correspondence</p>
              <a
                href="mailto:system@matrka.net"
                className="block font-display text-2xl tracking-tight mt-3 hover:text-gold transition-colors"
              >
                system@matrka.net
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
