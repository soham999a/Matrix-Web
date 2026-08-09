import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { CAPABILITIES } from "@/lib/capabilities";

export const metadata = pageSeo({
  path: "/capabilities",
  title: "Nine Capabilities — AI, Systems, Engineering & Human Intelligence",
  description:
    "Matrix works across nine capabilities: Artificial Intelligence, Systems, Engineering, Consulting, Futurology, Sustainability, Education & Social Innovation, Quanta, and Design & Human Intelligence — one architecture, many manifestations.",
  keywords: [
    "Matrix capabilities",
    "nine capabilities",
    "intelligence architecture",
    "AI engineering",
    "systems architecture",
    "futurology",
    "sustainability intelligence",
    "quantum computing research",
    "human intelligence",
    "Matrix studio",
  ],
  og: {
    title: "Matrix — Nine Capabilities, One Architecture",
    description:
      "From artificial intelligence to quantum science. Nine capabilities, one coherent studio.",
  },
});

export default function Capabilities() {
  return (
    <PageShell>
      <Section className="pt-32 pb-20">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow index="The Nine">Capabilities</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-tight mt-10">
              Nine capabilities,
              <br />
              <span className="italic text-muted-foreground">one architecture.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-lg text-foreground/80 leading-relaxed">
              The studio is organised as nine disciplines — from artificial intelligence and
              engineering to futurology and the human sciences. Each is a way of seeing. Together
              they are the architecture.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-x-8 gap-y-4 font-mono text-[13px] uppercase tracking-[0.08em] text-muted-foreground">
              {[
                ["I", "AI"],
                ["II", "Systems"],
                ["III", "Engineering"],
                ["IV", "Consulting"],
                ["V", "Futurology"],
                ["VI", "Sustainability"],
                ["VII", "Education"],
                ["VIII", "Quanta"],
                ["IX", "Design"],
              ].map(([n, t]) => (
                <li key={n} className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="min-w-6 text-muted-foreground/50">{n}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="border-t border-border">
          {CAPABILITIES.map((d) => (
            <Link
              key={d.slug}
              href={`/capabilities/${d.slug}`}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border hover:bg-foreground/[0.03] transition-colors duration-500 items-start"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs tracking-widest text-gold pt-1">
                {d.numeral}
              </div>
              <div className="col-span-10 md:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.02] group-hover:italic transition-all duration-300">
                  {d.title}
                </h2>
                <p className="font-display text-lg italic text-muted-foreground mt-2">
                  {d.tagline}
                </p>
              </div>
              <p className="col-span-12 md:col-span-5 md:col-start-7 text-muted-foreground leading-relaxed">
                {d.description}
              </p>
              <div className="col-span-12 md:col-span-1 text-right self-end font-mono text-[11px] tracking-[0.22em] uppercase text-gold">
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-5xl leading-tight">
            Nine capabilities hold one portfolio.
            <br />
            <span className="italic text-muted-foreground">See how they become products.</span>
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right flex md:justify-end gap-6 flex-col md:flex-row">
            <Link
              href="/products"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              The Portfolio →
            </Link>
            <Link
              href="/research"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500 w-fit"
            >
              Research Foundations →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
