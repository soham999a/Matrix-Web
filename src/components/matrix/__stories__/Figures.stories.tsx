import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  RecursiveIntelligence,
  CenteredCoherence,
  Resonance,
  RelationalIntelligence,
  Transformation,
  EmergenceObservation,
} from "../Figures";

const meta: Meta = {
  title: "Matrix/Figures",
  tags: ["autodocs"],
};

export default meta;

const figures = [
  {
    Component: RecursiveIntelligence,
    name: "Recursive Intelligence",
    desc: "Patterns repeat across every scale.",
  },
  {
    Component: CenteredCoherence,
    name: "Centered Coherence",
    desc: "Intelligence begins with internal coherence.",
  },
  {
    Component: Resonance,
    name: "Resonance & Frequency",
    desc: "Structure emerges when vibration becomes ordered.",
  },
  {
    Component: RelationalIntelligence,
    name: "Relational Intelligence",
    desc: "Meaning exists between entities, not within them.",
  },
  {
    Component: Transformation,
    name: "Transformation",
    desc: "Knowledge changes form without losing truth.",
  },
  {
    Component: EmergenceObservation,
    name: "Emergence & Observation",
    desc: "Reality reveals itself to careful observation.",
  },
];

export const AllFigures: StoryObj = {
  render: () => (
    <div className="space-y-16 p-8">
      {figures.map(({ Component, name, desc }) => (
        <div
          key={name}
          className="grid grid-cols-12 gap-8 items-center border-t border-border pt-8"
        >
          <div className="col-span-5 flex justify-center text-ink/80">
            <Component className="w-full max-w-[360px]" />
          </div>
          <div className="col-span-7">
            <h3 className="font-display text-3xl tracking-tight">{name}</h3>
            <p className="text-muted-foreground mt-2 italic">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const RecursiveIntelligenceStory: StoryObj = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="bg-fog p-8 flex-1">
        <RecursiveIntelligence className="w-full text-ink/80" />
      </div>
      <div className="bg-background p-8 flex-1">
        <RecursiveIntelligence className="w-full text-foreground/80" />
      </div>
    </div>
  ),
};
