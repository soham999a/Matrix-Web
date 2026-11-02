import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

/** Sovereign governments — seat of state, pediment and columns. */
export function IconGovernment(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3.5 18h17M2.5 21h19" />
    </svg>
  );
}

/** Cultural foundations — the arch of a monument, art held long. */
export function IconCultural(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V11a8 8 0 0 1 16 0v10" />
      <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
      <path d="M2 21h20" />
    </svg>
  );
}

/** Universities and labs — the vessel of experiment. */
export function IconUniversity(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 3h4" />
      <path d="M10 3v5.5L4.6 17A2.4 2.4 0 0 0 6.6 20.6h10.8A2.4 2.4 0 0 0 19.4 17L14 8.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

/** Public-good companies — held in common, taken to heart. */
export function IconPublicGood(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20.5S3.5 15.5 3.5 9.4A4.9 4.9 0 0 1 12 6.2a4.9 4.9 0 0 1 8.5 3.2c0 6.1-8.5 11.1-8.5 11.1Z" />
    </svg>
  );
}

/** Long-horizon investors — time pouring in favor. */
export function IconInvestor(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 2.5h12M6 21.5h12" />
      <path d="M7 2.5c0 5 3.6 7.2 5 9.5 1.4-2.3 5-4.5 5-9.5" />
      <path d="M7 21.5c0-5 3.6-7.2 5-9.5 1.4 2.3 5 4.5 5 9.5" />
    </svg>
  );
}

/** Founders of singular conviction — the north star. */
export function IconFounder(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      <path d="M5.2 5.2l3.1 3.1M15.7 15.7l3.1 3.1M18.8 5.2l-3.1 3.1M8.3 15.7l-3.1 3.1" />
      <circle cx="12" cy="12" r="1.75" />
    </svg>
  );
}
