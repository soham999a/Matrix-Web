import { Juggler, type JugglerVariant } from "@/components/matrix/Juggler";
import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/preview",
  title: { absolute: "Juggler · Preview" },
  description: "Internal preview of Matrix's Juggler figure variants.",
  noindex: true,
});

const variants: { variant: JugglerVariant; t: string; k: string }[] = [
  {
    variant: "lattice",
    t: "Lattice",
    k: "A constellation-person — nodes and edges, the studio at the hip.",
  },
  {
    variant: "stick",
    t: "Stick",
    k: "A plain stick figure — most readable at a glance.",
  },
  {
    variant: "sculpt",
    t: "Sculpt",
    k: "Architectural beams and a weighted head — the heaviest strokes.",
  },
];

export default function PreviewPage() {
  return (
    <PageShell>
      <Section className="min-h-[100svh] pt-28 pb-24">
        <Eyebrow index="DEV">Juggler · Preview</Eyebrow>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mt-8">
          Three figures,
          <br />
          <span className="italic text-muted-foreground">one cascade.</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Choose the figure for the hero. Each runs the same three-ball cascade on a racetrack loop,
          trembling on its fulcrum.
        </p>

        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-20">
          {variants.map((v) => (
            <article
              key={v.variant}
              className="col-span-12 md:col-span-4 border border-border p-8 md:p-10 flex flex-col items-center"
            >
              <Juggler
                variant={v.variant}
                size={300}
                className="w-full h-auto max-w-[300px] text-foreground"
              />
              <h2 className="mt-8 font-display text-3xl tracking-tight">{v.t}</h2>
              <p className="mt-3 text-center text-sm text-muted-foreground leading-relaxed">
                {v.k}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
