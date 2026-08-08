import Link from "next/link";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/manifesto",
  title: "The Manifesto — Ten Beliefs About Intelligence",
  description:
    "The Matrix Manifesto: ten earned beliefs about intelligence, design, complexity, and the systems that hold civilization together.",
  keywords: [
    "Matrix manifesto",
    "intelligence philosophy",
    "design principles",
    "AI philosophy",
    "invisible architecture",
    "Matrix beliefs",
  ],
  og: {
    title: "The Matrix Manifesto",
    description: "Ten beliefs about intelligence and invisible architecture.",
  },
});

const tenets = [
  {
    n: "I",
    h: "Intelligence is a material.",
    b: "Like steel, glass, or light, it has grain, weight, and consequence. We design with it — we do not worship it.",
  },
  {
    n: "II",
    h: "The best technology is inevitable.",
    b: "It feels less like an invention and more like a memory. Our craft is to make the strange feel obvious.",
  },
  {
    n: "III",
    h: "Complexity is a responsibility.",
    b: "Anyone can add a feature. Few can remove one. We earn simplicity through restraint, not through subtraction alone.",
  },
  {
    n: "IV",
    h: "An interface is a confession.",
    b: "It tells you what the maker believes about you. We make interfaces that believe in your seriousness.",
  },
  {
    n: "V",
    h: "Speed is not a value.",
    b: "Direction is. We move at the pace that lets us see what we are doing.",
  },
  {
    n: "VI",
    h: "Systems outlive their authors.",
    b: "Build with the patience of someone who will not return to maintain it. Leave it readable, kind, and small.",
  },
  {
    n: "VII",
    h: "Every decision is a coordinate.",
    b: "We do not believe in opinions, only in positions. Each must be defensible from every angle.",
  },
  {
    n: "VIII",
    h: "Beauty is a load-bearing element.",
    b: "It does work. It teaches. It tells the user what the system thinks of itself.",
  },
  {
    n: "IX",
    h: "We design for the second century.",
    b: "Not the next quarter. The horizon of our care is longer than the horizon of our certainty.",
  },
  {
    n: "X",
    h: "Everything is connected.",
    b: "There is no such thing as a local change. Move with the weight of the whole.",
  },
];

export default function Manifesto() {
  return (
    <PageShell>
      <Section className="grain pt-32 pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Volume I">Manifesto</Eyebrow>
            <p className="mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground leading-relaxed">
              Composed at the studio
              <br />
              Revised quietly, always.
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
              Ten beliefs
              <br />
              we have <span className="italic text-muted-foreground">earned.</span>
            </h1>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-foreground/80">
              This is not a strategy. It is a temperament. A way of holding the tools. We publish it
              not to convince anyone, but to be held to it.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="border-t border-border">
          {tenets.map((t) => (
            <article key={t.n} className="grid grid-cols-12 gap-8 py-14 border-b border-border">
              <div className="col-span-2 md:col-span-2 font-mono text-[11px] tracking-[0.22em] text-gold pt-4">
                § {t.n}
              </div>
              <h2 className="col-span-10 md:col-span-6 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
                {t.h}
              </h2>
              <p className="col-span-12 md:col-span-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                {t.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-32">
        <div className="grid grid-cols-12 gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-4xl italic text-muted-foreground leading-tight">
            &quot;If we live by this, the work will recognize itself.&quot;
          </p>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <Link
              href="/about"
              className="font-mono text-[11px] tracking-[0.28em] uppercase border-b border-gold pb-1 hover:text-gold"
            >
              The Studio →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
