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

const faqItems = [
  {
    q: "What types of organisations does Matrix consult for?",
    a: "We work with sovereign governments, cultural foundations, universities and labs, public-good companies, long-horizon investors, and founders of singular conviction. Our engagements are designed for institutions that think in decades, not quarters.",
  },
  {
    q: "How long does a typical consulting engagement last?",
    a: "Our four engagement shapes range from a 6-week Discovery sprint to ongoing standing Counsel. Most architecture engagements run 3–6 months, while embedded partnerships are designed for 12 months with full commitment from both sides.",
  },
  {
    q: "What is the difference between Discovery and Architecture?",
    a: "Discovery is a 6-week immersive process where we sit with your question until it changes shape — we leave with a map, not a deck. Architecture is a 3–6 month engagement where we design the full blueprint for the system, the team, and the first year of decisions.",
  },
  {
    q: "Does Matrix work with startups or only large institutions?",
    a: "We work with a few unusual founders alongside serious institutions. What matters to us is conviction and a long horizon — not company size. If your problem is unusual and you intend to still be here in a hundred years, we may be the right studio.",
  },
  {
    q: "How do I begin a consulting engagement with Matrix?",
    a: "Begin by writing to us at system@matrka.net or booking a discovery call. We take on a small number of engagements each year, so the door is narrow on purpose. We will respond within a few working days.",
  },
];

const howToSteps = [
  {
    name: "Initial Correspondence",
    text: "Write to us at system@matrka.net describing your challenge, institution, and the horizon you are designing for. We respond within a few working days.",
  },
  {
    name: "Discovery Call",
    text: "A 45-minute conversation to understand the shape of the problem. No pitch, no deck — just a careful listen. We assess fit and recommend an engagement shape.",
  },
  {
    name: "Engagement Selection",
    text: "Choose from four shapes: Discovery (6 weeks), Architecture (3–6 months), Embedded (12 months), or Counsel (ongoing standing retainer).",
  },
  {
    name: "Studio Work",
    text: "Our team embeds with yours — researching, architecting, and building alongside. We maintain full transparency with regular check-ins and written progress.",
  },
  {
    name: "Delivery & Handover",
    text: "We deliver readable, well-documented systems designed to outlive their authors. Every engagement ends with a clear handover and an open line for questions.",
  },
];

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
        data={[
          {
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
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Start a Consulting Engagement with Matrix",
            description:
              "A step-by-step guide to beginning a consulting engagement with the Matrix intelligence architecture studio.",
            step: howToSteps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.name,
              text: step.text,
            })),
          },
        ]}
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

      {/* How To Section */}
      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Process">How it begins</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              From first letter to lasting system.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="col-span-12 md:col-span-4 border-t border-ink/15 pt-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl tracking-tight">{step.name}</h3>
              </div>
              <p className="text-ink/75 leading-relaxed mt-4 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="FAQ">Questions</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              Frequently asked.
            </h2>
          </div>
        </div>
        <div className="border-t border-border">
          {faqItems.map((item) => (
            <div key={item.q} className="border-b border-border py-8">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight">{item.q}</h3>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Calendly Embed Section */}
      <Section variant="paper" className="py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Book">Discovery Call</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              Schedule a conversation.
            </h2>
            <p className="text-ink/75 leading-relaxed mt-6 max-w-2xl">
              Book a 45-minute discovery call. No pitch, no deck — just a careful listen to
              understand the shape of your challenge.
            </p>
          </div>
        </div>
        <div className="border-t border-ink/15 pt-12">
          <div className="bg-fog border border-ink/15 p-12 text-center">
            <p className="font-display text-3xl text-ink/70 mb-6">Calendly booking link</p>
            <p className="text-ink/50 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Replace this section with your Calendly embed. Add your Calendly URL to the consulting
              page component to enable direct scheduling.
            </p>
            <a
              href="mailto:system@matrka.net"
              className="inline-block border border-ink px-7 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-ink hover:text-fog transition-colors"
            >
              Or write to us directly →
            </a>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
