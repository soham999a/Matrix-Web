import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import { Bridge, Compass } from "@/components/matrix/Metaphors";
import { JsonLd } from "@/components/matrix/JsonLd";

export const metadata = pageSeo({
  path: "/consulting",
  title: "AI Strategy & Intelligence Consulting",
  description:
    "Strategic AI counsel for governments, institutions, and founders — discovery, architecture, embedded partnerships, and standing counsel from the Matrix studio in Kolkata.",
  keywords: [
    "AI consulting firm",
    "AI strategy consulting",
    "intelligence consulting",
    "AI architecture",
    "AI counsel for institutions",
    "AI advisory India",
    "Matrix consulting",
    "government AI consulting",
  ],
  og: {
    title: "Matrix Consulting",
    description: "A bridge between where you are and what you intend.",
  },
});

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

export default function Consulting() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Matrix Consulting",
          serviceType: "AI Strategy & Intelligence Consulting",
          description:
            "Strategic AI counsel for governments, institutions, and founders — discovery, architecture, embedded partnerships, and standing counsel from the Matrix studio in Kolkata.",
          url: `${SITE.url}/consulting`,
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: ["Worldwide"],
          audience: {
            "@type": "Audience",
            audienceType: "Governments, institutions, and long-horizon founders",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Engagement shapes",
            itemListElement: engagements.map((e) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: e.t, description: e.d },
            })),
          },
        }}
      />
      <Section className="pt-32 pb-24 grain">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Practice II">Consulting</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
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

      <Section className="py-24">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Engagements</Eyebrow>
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

      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>For whom</Eyebrow>
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

      <Section className="py-32">
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
    </PageShell>
  );
}
