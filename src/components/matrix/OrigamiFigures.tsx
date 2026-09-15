/**
 * Origami Signature Figures — golden-ratio spiral, spiral motion,
 * rhombic dodecahedron, cymatic arch.
 *
 * Same system as the six figure studies: construction first, form second.
 * Hover / focus → the fold plan (guides, crease lines, crosses) draws in,
 * then fades, leaving the finished figure turning quietly.
 */

type Props = { className?: string };

const W = 640;
const H = 520;

function Frame({
  children,
  label,
  className,
}: Props & { children: React.ReactNode; label: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={["mtx-fig", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={label}
      tabIndex={0}
      fill="none"
    >
      {/* shared construction frame */}
      <g className="cx" stroke="currentColor" strokeOpacity="0.28" strokeWidth="0.4">
        <rect x="40" y="20" width={W - 80} height={H - 40} />
        <line x1={W / 2} y1="20" x2={W / 2} y2={H - 20} strokeDasharray="2 5" />
        <line x1="40" y1={H / 2} x2={W - 40} y2={H / 2} strokeDasharray="2 5" />
        <line x1="40" y1="20" x2={W - 40} y2={H - 20} strokeOpacity="0.14" />
        <line x1={W - 40} y1="20" x2="40" y2={H - 20} strokeOpacity="0.14" />
      </g>
      {children}
    </svg>
  );
}

const Cross = ({ x, y, s = 4 }: { x: number; y: number; s?: number }) => (
  <path d={`M ${x - s} ${y} L ${x + s} ${y} M ${x} ${y - s} L ${x} ${y + s}`} />
);

const Node = ({ x, y, d = 0 }: { x: number; y: number; d?: number }) => (
  <g className="fig-node" style={{ animationDelay: `${d}s` }}>
    <circle cx={x} cy={y} r="1.6" fill="currentColor" />
    <circle cx={x} cy={y} r="5.5" stroke="currentColor" strokeOpacity="0.2" />
  </g>
);

const Gold = ({ x, y, r = 2.6 }: { x: number; y: number; r?: number }) => (
  <circle cx={x} cy={y} r={r} fill="var(--color-gold)" stroke="none" className="fig-node" />
);

/* ——— 01 · Golden Section Spiral ——— */
export function GoldenSpiralFigure({ className }: Props) {
  return (
    <Frame
      className={className}
      label="A golden-section spiral drawn as a fold plan — the ratio as a method"
    >
      {/* construction — the golden rectangle, split, projected */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <rect x="400" y="80" width="232" height="143.5" strokeDasharray="2 5" />
        <line x1="543.5" y1="80" x2="543.5" y2="223.5" strokeDasharray="2 5" />
        <line x1="400" y1="168.5" x2="632" y2="168.5" strokeDasharray="2 5" />
        <path
          d="M 400 80 A 143.5 143.5 0 0 1 543.5 223.5"
          strokeDasharray="2 5"
          strokeOpacity="0.6"
        />
        <Cross x={400} y={80} />
        <Cross x={543.5} y={223.5} />
        <Cross x={632} y={80} />
        <Cross x={400} y={223.5} />
      </g>

      {/* form — the spiral itself, turning */}
      <g
        className="form fig-breathe"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
      >
        <g className="fig-counter">
          <path
            d="M 412.3 300 C 414.9 308.5 408.5 317.3 400 319.9 C 386.2 324.1 377.9 310.2 367.7 300 C 351.3 283.5 422.3 254.6 400 247.8"
            className="draw"
          />
          <path
            d="M 400 247.8 C 363.9 236.8 473.4 263.9 484.4 300 C 502.3 358.4 458.4 418.8 400 436.6 C 305.5 465.5 248.8 369.9 178.9 300"
            className="draw"
            style={{ strokeDashoffset: 1200, animationDelay: "0.9s" }}
          />
          <Node x={412.3} y={300} d={0.3} />
          <Node x={384.3} y={284} d={1.5} />
          <Node x={484.4} y={300} d={2.4} />
          <Node x={178.9} y={300} d={0.8} />
        </g>
        <Gold x={400} y={247.8} />
      </g>
    </Frame>
  );
}

/* ——— 02 · Spiral Motion / The Whorl ——— */
export function WhorlFigure({ className }: Props) {
  const spiral = [
    "540 260",
    "503.1 365.7",
    "421.7 436.1",
    "320 455.4",
    "226.1 422.7",
    "163.6 350.3",
    "146.4 260",
    "175.6 176.6",
    "239.8 121.1",
    "320 105.8",
    "394.2 131.6",
    "443.5 188.7",
    "456.8 260",
  ];
  return (
    <Frame
      className={className}
      label="A continuous whorl resolving into ordered motion around a still centre"
    >
      {/* construction — guide circle and axes */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <circle cx="320" cy="260" r="200" strokeDasharray="2 5" />
        <line x1="120" y1="260" x2="520" y2="260" strokeDasharray="2 5" strokeOpacity="0.5" />
        <line x1="320" y1="60" x2="320" y2="460" strokeDasharray="2 5" strokeOpacity="0.5" />
        <Cross x={120} y={260} />
        <Cross x={520} y={260} />
      </g>

      {/* form — the folded spiral, in motion */}
      <g
        className="form fig-breathe"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
      >
        <g className="fig-counter">
          <polyline points={spiral.join(" ")} strokeDasharray="3 5" strokeOpacity="0.4" />
          <polyline
            points={spiral.slice(0, 6).join(" ")}
            strokeOpacity="0.85"
            className="draw"
            style={{ strokeDashoffset: 1200 }}
          />
        </g>
        <Gold x={320} y={260} />
        <Node x={540} y={260} d={0.6} />
        <Node x={163.6} y={350.3} d={2} />
        <Node x={443.5} y={188.7} d={1.2} />
      </g>
    </Frame>
  );
}

/* ——— 03 · Rhombic Dodecahedron ——— */
export function RhombicDodecahedronFigure({ className }: Props) {
  const outer = "484.5 355 320 450 155.5 355 155.5 165 320 70 484.5 165";
  const inner = "470 260 395 390 245 390 170 260 245 130 395 130";
  return (
    <Frame
      className={className}
      label="A rhombic dodecahedron — twelve faces, one packed structure, orbiting facets"
    >
      {/* construction — packed spheres and poles */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <circle cx="320" cy="260" r="190" strokeDasharray="2 5" />
        <circle cx="320" cy="260" r="114" strokeDasharray="2 5" />
        <line x1="320" y1="70" x2="320" y2="450" strokeDasharray="2 5" strokeOpacity="0.5" />
        <line x1="130" y1="260" x2="510" y2="260" strokeDasharray="2 5" strokeOpacity="0.4" />
        <Cross x={320} y={70} />
        <Cross x={320} y={450} />
      </g>

      {/* form — the crystal, its facets and orbital rings */}
      <g
        className="form fig-breathe"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
      >
        <polygon points={outer} strokeOpacity="0.9" className="draw" />
        <g className="fig-rotate">
          <circle cx="320" cy="260" r="190" strokeDasharray="2 5" strokeOpacity="0.22" />
          <circle
            cx="454"
            cy="394"
            r="1.8"
            fill="var(--color-gold)"
            stroke="none"
            className="fig-node"
          />
        </g>
        <g className="fig-counter">
          <circle cx="320" cy="260" r="114" strokeDasharray="2 5" strokeOpacity="0.2" />
          <circle
            cx="239"
            cy="179"
            r="1.5"
            fill="currentColor"
            strokeOpacity="0.7"
            className="fig-node"
          />
        </g>
        <polygon points={inner} strokeDasharray="2 5" strokeOpacity="0.4" />
        <path d="M 320 260 L 470 260 M 320 260 L 245 390 M 320 260 L 245 130" strokeOpacity="0.7" />
        <path
          d="M 320 260 L 395 390 M 320 260 L 170 260 M 320 260 L 395 130"
          strokeDasharray="2 5"
          strokeOpacity="0.35"
        />
        <Gold x={320} y={260} />
        <Node x={484.5} y={355} d={0.4} />
        <Node x={155.5} y={355} d={1.8} />
        <Node x={395} y={390} d={2.6} />
        <Node x={245} y={130} d={1} />
      </g>
    </Frame>
  );
}

/* ——— 05 · Golden Spiral / The Nautilus ——— */
/* A bright, continuously-drawing golden spiral with orbiting node and
   central pulse. The form stays luminous against any background. */
export function NautilusFigure({ className }: Props) {
  /* two-ish turns of an Archimedean spiral — r = a + b·θ, ro growing
     outward every full circle so the line keeps a luminous presence */
  const pts: string[] = [];
  const turns = 2.2;
  const steps = 220;
  const cx = 320;
  const cy = 260;
  const r0 = 8;
  const rmax = 218;
  for (let i = 0; i <= steps; i++) {
    const th = (i / steps) * turns * Math.PI * 2;
    const r = r0 + (rmax - r0) * (i / steps);
    pts.push(`${(cx + r * Math.cos(th)).toFixed(2)} ${(cy + r * Math.sin(th)).toFixed(2)}`);
  }
  const outer = `M ${cx} ${cy} L ${cx + rmax} ${cy}`;

  return (
    <Frame
      className={className}
      label="A golden spiral in constant rotation — growth defined by ratio, not speed"
    >
      <defs>
        <radialGradient id="nautilus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* luminous halo behind the whole spiral */}
      <circle cx={cx} cy={cy} r={rmax + 14} fill="url(#nautilus-glow)" />

      {/* spirals of golden ratio — construction rings */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        {[3, 5, 8, 13, 21, 34, 55, 89, 144, 233].slice(2, 9).map((n) => (
          <circle key={n} cx={cx} cy={cy} r={(n / 233) * rmax} strokeDasharray="2 5" />
        ))}
        <line x1="120" y1="260" x2="520" y2="260" strokeDasharray="2 5" strokeOpacity="0.4" />
        <line x1="320" y1="60" x2="320" y2="460" strokeDasharray="2 5" strokeOpacity="0.4" />
        <Cross x={cx} y={60} />
        <Cross x={cx} y={460} />
      </g>

      {/* construction golden rectangle spiral faintly behind */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.3" strokeWidth="0.4">
        <rect x="138" y="78" width="364" height="364" strokeDasharray="2 5" />
        <rect x="322" y="78" width="180" height="180" strokeDasharray="2 5" />
        <rect x="322" y="258" width="180" height="180" strokeDasharray="2 5" />
        <rect x="416" y="258" width="86" height="180" strokeDasharray="2 5" />
      </g>

      {/* form — the luminous spiral */}
      <g
        className="form fig-breathe"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      >
        <polyline
          points={pts.join(" ")}
          strokeOpacity="0.95"
          className="draw"
          style={{ strokeDashoffset: 1400 }}
        />
        {/* orbiting node riding the outer arm */}
        <g className="fig-rotate">
          <polyline points={outer} strokeDasharray="2 5" strokeOpacity="0.3" />
          <circle
            cx={cx + rmax}
            cy={cy}
            r="2.6"
            fill="var(--color-gold)"
            stroke="none"
            className="fig-node"
          />
        </g>
        {/* second thin gold ring counter-rotating */}
        <g className="fig-counter" stroke="var(--color-gold)" strokeOpacity="0.5" strokeWidth="0.5">
          <circle cx={cx} cy={cy} r={rmax * 0.62} strokeDasharray="3 7" />
          <circle
            cx={cx + rmax * 0.62}
            cy={cy}
            r="1.8"
            fill="var(--color-gold)"
            stroke="none"
            className="fig-node"
          />
        </g>
        {/* central pulse */}
        <g
          className="fig-ripple"
          stroke="var(--color-gold)"
          strokeOpacity="0.5"
          strokeDasharray="3 5"
        >
          <circle cx={cx} cy={cy} r="24" />
        </g>
        <Gold x={cx} y={cy} r={3.2} />
      </g>
    </Frame>
  );
}

/* ——— 04 · Cymatic Arch ——— */
export function CymaticArchFigure({ className }: Props) {
  return (
    <Frame
      className={className}
      label="Standing-wave resonance holding an arch of ordered structure"
    >
      {/* construction — the arching plate, springs and axes */}
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <line x1="110" y1="440" x2="530" y2="440" strokeDasharray="2 5" />
        <line x1="320" y1="30" x2="320" y2="440" strokeDasharray="2 5" strokeOpacity="0.6" />
        <path d="M 120 190 A 160 160 0 0 1 520 190" strokeDasharray="2 5" />
        <path d="M 120 230 A 120 120 0 0 1 520 230" strokeDasharray="2 5" strokeOpacity="0.5" />
        <Cross x={120} y={150} />
        <Cross x={520} y={150} />
      </g>

      {/* form — the arch, its standing waves, and the sound source */}
      <g
        className="form fig-breathe"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
      >
        <path
          d="M 120 440 L 120 150 A 200 200 0 0 1 520 150 L 520 440"
          strokeOpacity="0.95"
          className="draw"
        />
        <path
          d="M 140 360 Q 320 330 500 360"
          className="draw"
          style={{ strokeDashoffset: 1200, animationDelay: "0.2s" }}
        />
        <path
          d="M 140 320 Q 230 290 320 320 T 500 320"
          className="draw"
          style={{ strokeDashoffset: 1200, animationDelay: "0.4s" }}
        />
        <path
          d="M 140 280 Q 200 250 260 280 T 380 280 T 500 280"
          className="draw"
          style={{ strokeDashoffset: 1200, animationDelay: "0.6s" }}
        />
        <path
          d="M 140 240 Q 185 215 230 240 T 320 240 T 410 240 T 500 240"
          className="draw"
          style={{ strokeDashoffset: 1200, animationDelay: "0.8s" }}
        />
        <g className="fig-ripple" style={{ animationDelay: "0s" }}>
          <circle
            cx="320"
            cy="432"
            r="17"
            stroke="var(--color-gold)"
            strokeOpacity="0.5"
            strokeDasharray="3 5"
          />
        </g>
        <g className="fig-ripple" style={{ animationDelay: "1.2s" }}>
          <circle
            cx="320"
            cy="432"
            r="17"
            stroke="var(--color-gold)"
            strokeOpacity="0.28"
            strokeDasharray="3 5"
          />
        </g>
        <Gold x={320} y={432} />
        <Node x={230} y={320} d={0.5} />
        <Node x={410} y={240} d={1.7} />
      </g>
    </Frame>
  );
}
