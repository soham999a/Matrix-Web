import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { CAPABILITIES, getCapability } from "@/lib/capabilities";

export function generateStaticParams() {
  return CAPABILITIES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = getCapability(slug);
  if (!domain) return {};
  return pageSeo({
    path: `/capabilities/${domain.slug}`,
    title: domain.seo.title,
    description: domain.seo.description,
    keywords: domain.seo.keywords,
    og: {
      title: `Matrix — ${domain.numeral} · ${domain.title}`,
      description: domain.tagline,
    },
  });
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = getCapability(slug);
  if (!domain) notFound();

  const others = CAPABILITIES.filter((d) => d.slug !== domain.slug);

  return (
    <PageShell>
      <Section className="pt-32 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <Eyebrow index={`Capability ${domain.numeral}`}>The Nine</Eyebrow>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-tight mt-10">
              {domain.title}
            </h1>
            <p className="font-display text-2xl md:text-3xl italic text-muted-foreground mt-8">
              {domain.tagline}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link
              href="/capabilities"
              className="inline-block border border-foreground px-6 py-4 font-mono text-[10px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              ← All Capabilities
            </Link>
          </div>
        </div>
        <p className="mt-16 max-w-3xl text-lg text-foreground/80 leading-relaxed border-t border-border pt-8">
          {domain.description}
        </p>
      </Section>

      <Section className="pb-20">
        <div className="border-t border-border">
          {domain.sections.map((s) => (
            <div
              key={s.label}
              className="grid grid-cols-12 gap-6 sm:gap-8 py-10 border-b border-border"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="eyebrow !text-muted-foreground">{s.label}</p>
              </div>
              <ul className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-4 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-gold">:</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>Adjacent capabilities</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {others.map((d) => (
              <Link
                key={d.slug}
                href={`/capabilities/${d.slug}`}
                className="group bg-background p-6 hover:bg-foreground/[0.03] transition-colors duration-500"
              >
                <div className="font-mono text-[10px] tracking-[0.28em] text-gold">{d.numeral}</div>
                <div className="font-display text-xl mt-3 leading-tight group-hover:italic transition-all duration-300">
                  {d.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-16 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-4xl leading-tight">
            Every capability becomes a system or a study.{" "}
            <span className="italic text-muted-foreground">See the portfolio.</span>
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <Link
              href="/products"
              className="inline-block border border-foreground px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              The Portfolio →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
