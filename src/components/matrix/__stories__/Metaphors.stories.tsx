import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Constellation,
  Iceberg,
  Threads,
  Prism,
  Origami,
  Observatory,
  Bridge,
  Compass,
  Roots,
  Ripple,
} from "../Metaphors";

const meta: Meta = {
  title: "Matrix/Metaphors",
  tags: ["autodocs"],
};

export default meta;

const metaphorComponents = [
  { Component: Constellation, name: "Constellation" },
  { Component: Iceberg, name: "Iceberg" },
  { Component: Threads, name: "Threads" },
  { Component: Prism, name: "Prism" },
  { Component: Origami, name: "Origami" },
  { Component: Observatory, name: "Observatory" },
  { Component: Bridge, name: "Bridge" },
  { Component: Compass, name: "Compass" },
  { Component: Roots, name: "Roots" },
  { Component: Ripple, name: "Ripple" },
];

export const AllMetaphors: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
      {metaphorComponents.map(({ Component, name }) => (
        <div key={name} className="text-center">
          <div className="aspect-square flex items-center justify-center text-foreground/80">
            <Component className="w-full max-w-[200px]" />
          </div>
          <div className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            {name}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ConstellationStory: StoryObj = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="bg-background p-8 flex-1">
        <Constellation className="w-full text-foreground/80" />
      </div>
      <div className="bg-fog p-8 flex-1">
        <Constellation className="w-full text-ink/80" />
      </div>
    </div>
  ),
};

export const OrigamiStory: StoryObj = {
  render: () => (
    <div className="p-8">
      <Origami className="w-full max-w-[400px] text-foreground/80 breathe" />
    </div>
  ),
};
