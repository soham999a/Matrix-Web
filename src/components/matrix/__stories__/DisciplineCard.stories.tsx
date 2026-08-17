import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DisciplineCard } from "../DisciplineCard";

const meta: Meta<typeof DisciplineCard> = {
  title: "Matrix/DisciplineCard",
  tags: ["autodocs"],
  component: DisciplineCard,
};

export default meta;
type Story = StoryObj<typeof DisciplineCard>;

const sampleDiscipline = {
  n: "I",
  t: "Artificial Intelligence",
  d: "Foundation, alignment, agents, evaluation.",
  slug: "ai",
  points: ["Causal AI", "Self-Evolving Models", "Agentic Systems", "AI Evaluation Systems"],
};

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-12 max-w-4xl mx-auto p-8">
      <DisciplineCard c={sampleDiscipline} i={0} />
    </div>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-12 p-8">
      {[
        {
          n: "I",
          t: "Artificial Intelligence",
          d: "Foundation, alignment, agents, evaluation.",
          slug: "ai",
          points: ["Causal AI", "Agentic Systems"],
        },
        {
          n: "II",
          t: "Systems",
          d: "Architectures that outlive their authors.",
          slug: "systems",
          points: ["Enterprise Architecture", "Digital Twins"],
        },
        {
          n: "III",
          t: "Engineering",
          d: "The craft that makes an idea load-bearing.",
          slug: "engineering",
          points: ["Robotics", "Cymatics"],
        },
      ].map((c, i) => (
        <DisciplineCard key={c.n} c={c} i={i} />
      ))}
    </div>
  ),
};
