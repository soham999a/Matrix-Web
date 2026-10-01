import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import { CAPABILITIES, CAPABILITY_FAQS, getCapability } from "@/lib/capabilities";
import { JsonLd } from "@/components/matrix/JsonLd";

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
  const url = `${SITE.url}/capabilities/${domain.slug}`;
  const faqs = CAPABILITY_FAQS[domain.slug] ?? [];

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Capabilities",
                item: `${SITE.url}/capabilities`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: domain.title,
                item: url,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Matrix — Capability ${domain.numeral} · ${domain.title}`,
            serviceType: domain.title,
            description: domain.description,
            url,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: "Worldwide",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: `${SITE.url}/capabilities/${domain.slug}`,
              availableLanguage: "en",
            },
          },
          ...(faqs.length > 0
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                },
              ]
            : []),
        ]}
      />
      <Section rail={`Capability ${domain.numeral}`} className="pt-32 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
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

      <Section rail="The Nine" className="pt-14 md:pt-20 pb-20">
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

      {faqs.length > 0 && (
        <Section rail="FAQ" className="pt-14 md:pt-20 pb-20 border-t border-border">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10">
            <h2 className="col-span-12 font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Questions, <span className="italic text-muted-foreground">answered.</span>
            </h2>
          </div>
          <div className="border-t border-border">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="grid grid-cols-12 gap-6 sm:gap-8 py-10 border-b border-border"
              >
                <h3 className="col-span-12 md:col-span-5 font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {f.q}
                </h3>
                <p className="col-span-12 md:col-span-7 text-foreground/80 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section rail="Adjacent" className="pt-14 md:pt-20 pb-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
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
