import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MarkLattice, MarkAperture, MarkMeridian, LogoMark, LogoLockup, Wordmark } from "../Mark";

const meta: Meta<typeof MarkLattice> = {
  title: "Matrix/Logo Marks",
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "range", min: 12, max: 200, step: 2 } },
  },
};

export default meta;
type Story = StoryObj<typeof MarkLattice>;

export const Lattice: Story = {
  render: (args) => (
    <div className="flex items-center gap-8">
      <div className="bg-background p-8">
        <MarkLattice {...args} className="text-foreground" />
      </div>
      <div className="bg-fog p-8">
        <MarkLattice {...args} className="text-ink" />
      </div>
    </div>
  ),
  args: {
    size: 80,
  },
};

export const Aperture: StoryObj<typeof MarkAperture> = {
  render: (args) => (
    <div className="flex items-center gap-8">
      <div className="bg-background p-8">
        <MarkAperture {...args} className="text-foreground" />
      </div>
      <div className="bg-fog p-8">
        <MarkAperture {...args} className="text-ink" />
      </div>
    </div>
  ),
  args: {
    size: 80,
  },
};

export const Meridian: StoryObj<typeof MarkMeridian> = {
  render: (args) => (
    <div className="flex items-center gap-8">
      <div className="bg-background p-8">
        <MarkMeridian {...args} className="text-foreground" />
      </div>
      <div className="bg-fog p-8">
        <MarkMeridian {...args} className="text-ink" />
      </div>
    </div>
  ),
  args: {
    size: 80,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6 p-8">
      {[12, 18, 24, 32, 48, 80, 120].map((size) => (
        <div key={size} className="text-center">
          <MarkLattice size={size} className="text-foreground" />
          <div className="mt-2 text-xs text-muted-foreground">{size}px</div>
        </div>
      ))}
    </div>
  ),
};

export const LogoMarkImage: StoryObj<typeof LogoMark> = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <LogoMark size={48} />
      <LogoMark size={80} />
      <LogoMark size={120} />
    </div>
  ),
};

export const WordmarkExample: StoryObj<typeof Wordmark> = {
  render: () => (
    <div className="p-8">
      <Wordmark />
    </div>
  ),
};
