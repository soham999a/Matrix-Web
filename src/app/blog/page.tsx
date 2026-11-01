import Link from "next/link";
import { PageShell, Section } from "@/components/matrix/Chrome";
import { NewsletterSubscribeForm } from "@/components/matrix/NewsletterSubscribeForm";
import { Prism } from "@/components/matrix/Metaphors";
import { JsonLd } from "@/components/matrix/JsonLd";
import { pageSeo, SITE } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/blog",
  title: "Blog — Writing on Context, Systems & Applied AI",
  description:
    "The Matrix blog: essays and explainers on context engineering, AI architecture, and how intelligence is built in practice — knowledge made usable, one piece at a time.",
  keywords: [
    "Matrix blog",
    "context engineering",
    "AI architecture",
    "context-aware AI",
    "AI engineering writing",
    "AI articles",
  ],
  og: {
    title: "Matrix Blog",
    description: "Beyond the prompt — how intelligence is built in practice.",
  },
});

const posts = [
  {
    slug: "beyond-the-prompt-the-power-of-context-aware-ai",
    t: "Beyond the Prompt: The Power of Context-Aware AI",
    k: "Context Engineering",
    d: "November 2026",
    read: "12 min read",
    excerpt:
      "Intelligence without context is imitation, not understanding. On the isolation problem, the six pillars of context engineering, and why the next role that matters is not the prompter but the architect.",
  },
];

export default function Blog() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Matrix Blog",
          description:
            "The Matrix blog: essays and explainers on context engineering, AI architecture, and how intelligence is built in practice.",
          url: `${SITE.url}/blog`,
          inLanguage: "en",
          publisher: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <Section rail="Blog" className="pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight mt-10">
              Beyond the
              <br />
              <span className="italic text-muted-foreground">prompt.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Prism className="w-full text-foreground/80 drift" />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-12 gap-6 sm:gap-8 border-t border-border pt-10">
          <div className="col-span-12 md:col-span-4 eyebrow">— On knowledge made usable</div>
          <p className="col-span-12 md:col-span-8 font-display text-3xl md:text-4xl leading-tight">
            The journal hoards its thoughts slowly. The blog explains them as they are built —
            context, systems, and the practice of applied intelligence.
          </p>
        </div>
      </Section>

      <Section rail="Entries" className="pt-14 md:pt-20 pb-20">
        <div className="border-t border-border">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-12 gap-6 sm:gap-8 py-10 border-b border-border items-start"
            >
              <div className="col-span-2 font-mono text-xs tracking-widest text-gold pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-7">
                <p className="eyebrow !text-muted-foreground mb-3">
                  {p.k} · {p.d} · {p.read}
                </p>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight group-hover:italic transition-all duration-300">
                  {p.t}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{p.excerpt}</p>
                <span className="mt-5 inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                  Read the piece →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section rail="Quarterly" variant="paper" className="pt-14 md:pt-20 pb-24 mt-12">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-4">
              A letter when there is something to say. Nothing else.
            </h2>
          </div>
          <NewsletterSubscribeForm className="col-span-12 md:col-span-5" />
        </div>
      </Section>
    </PageShell>
  );
}
