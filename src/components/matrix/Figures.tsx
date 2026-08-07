/**
 * MATRIX ÔÇö Signature Figures
 *
 * Six visual systems for one method. Each is pure SVG geometry:
 * construction grid first, form second. Architecture precedes appearance.
 *
 * Hover / focus ÔåÆ the underlying construction (guides, control points,
 * proportion circles) appears, then fades, leaving the finished figure.
 */

type Props = { className?: string };

const W = 480;
const H = 380;

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
      {/* construction frame ÔÇö shared across all figures */}
      <g className="cx" stroke="currentColor" strokeOpacity="0.28" strokeWidth="0.4">
        <rect x="40" y="30" width={W - 80} height={H - 60} />
        <line x1={W / 2} y1="30" x2={W / 2} y2={H - 30} strokeDasharray="2 5" />
        <line x1="40" y1={H / 2} x2={W - 40} y2={H / 2} strokeDasharray="2 5" />
        <line x1="40" y1="30" x2={W - 40} y2={H - 30} strokeOpacity="0.14" />
        <line x1={W - 40} y1="30" x2="40" y2={H - 30} strokeOpacity="0.14" />
      </g>
      {children}
    </svg>
  );
}

/* ÔÇöÔÇöÔÇö 01 ┬À Recursive Intelligence ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

type Branch = { x1: number; y1: number; x2: number; y2: number; d: number };

function grow(
  x: number, y: number, len: number, angle: number, depth: number, out: Branch[],
) {
  if (depth === 0 || len < 4) return;
  const x2 = x + Math.cos(angle) * len;
  const y2 = y + Math.sin(angle) * len;
  out.push({ x1: x, y1: y, x2, y2, d: depth });
  const phi = 0.618;
  grow(x2, y2, len * phi, angle - 0.5, depth - 1, out);
  grow(x2, y2, len * phi, angle + 0.42, depth - 1, out);
  if (depth > 4) grow(x2, y2, len * phi * 0.72, angle + 0.02, depth - 1, out);
}

export function RecursiveIntelligence({ className }: Props) {
  const branches: Branch[] = [];
  grow(240, 336, 74, -Math.PI / 2, 7, branches);

  // golden-section construction rectangles
  const golden: { x: number; y: number; w: number; h: number }[] = [];
  let gx = 60, gy = 60, gw = 360, gh = 222.5;
  for (let i = 0; i < 5; i++) {
    golden.push({ x: gx, y: gy, w: gw, h: gh });
    const nw = gw * 0.618;
    gx += gw - nw;
    gw = nw;
    gh = gh * 0.618;
  }

  return (
    <Frame className={className} label="A recursive branching system built on golden-ratio proportions">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.5" strokeWidth="0.4">
        {golden.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} />
        ))}
        <circle cx="240" cy="336" r="4" />
        {branches.filter((b) => b.d > 4).map((b, i) => (
          <circle key={i} cx={b.x2} cy={b.y2} r="2" fill="var(--color-gold)" fillOpacity="0.55" stroke="none" />
        ))}
      </g>

      <g className="form fig-breathe" stroke="currentColor" strokeLinecap="round">
        {branches.map((b, i) => (
          <line
            key={i}
            x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
            strokeWidth={Math.max(0.35, b.d * 0.22)}
            strokeOpacity={0.24 + b.d * 0.085}
          />
        ))}
        {branches.filter((b) => b.d === 1).map((b, i) => (
          <circle
            key={i} cx={b.x2} cy={b.y2} r="1.1"
            fill={i % 7 === 0 ? "var(--color-gold)" : "currentColor"}
            fillOpacity={i % 7 === 0 ? 0.9 : 0.4}
            stroke="none"
            className="fig-node"
            style={{ animationDelay: `${(i % 9) * 0.6}s` }}
          />
        ))}
      </g>
    </Frame>
  );
}

/* ÔÇöÔÇöÔÇö 02 ┬À Centered Coherence ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

export function CenteredCoherence({ className }: Props) {
  const cx = 240, cy = 190;
  const rays = Array.from({ length: 24 }, (_, i) => (i * Math.PI * 2) / 24);
  const ring = (r: number, n: number, rot = 0) =>
    Array.from({ length: n }, (_, i) => {
      const a = rot + (i * Math.PI * 2) / n;
      return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
    }).join(" ");

  return (
    <Frame className={className} label="A minimal radial geometry, concentric and centred">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        {rays.map((a, i) => (
          <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * 150} y2={cy + Math.sin(a) * 150} strokeOpacity="0.28" />
        ))}
        {[36, 58, 94, 122, 150].map((r) => <circle key={r} cx={cx} cy={cy} r={r} />)}
        {[58, 94, 150].map((r) =>
          rays.filter((_, i) => i % 3 === 0).map((a, i) => (
            <circle key={`${r}-${i}`} cx={cx + Math.cos(a) * r} cy={cy + Math.sin(a) * r} r="1.6" fill="var(--color-gold)" stroke="none" />
          )),
        )}
      </g>

      <g className="form fig-breathe" stroke="currentColor" strokeWidth="0.6">
        <g className="fig-rotate">
          <polygon points={ring(150, 12)} strokeOpacity="0.26" />
          <polygon points={ring(150, 12, Math.PI / 12)} strokeOpacity="0.16" />
        </g>
        <circle cx={cx} cy={cy} r="122" strokeOpacity="0.22" />
        <g className="fig-counter">
          <polygon points={ring(94, 6)} strokeOpacity="0.42" />
          <polygon points={ring(94, 6, Math.PI / 6)} strokeOpacity="0.28" />
        </g>
        <circle cx={cx} cy={cy} r="58" strokeOpacity="0.5" />
        <circle cx={cx} cy={cy} r="36" strokeOpacity="0.6" />
        <circle cx={cx} cy={cy} r="9" stroke="var(--color-gold)" strokeOpacity="0.85" />
        <circle cx={cx} cy={cy} r="2.2" fill="var(--color-gold)" stroke="none" />
      </g>
    </Frame>
  );
}

/* ÔÇöÔÇöÔÇö 03 ┬À Resonance & Frequency ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

function wave(amp: number, k: number, phase: number, y: number) {
  const pts: string[] = [];
  for (let x = 60; x <= 420; x += 4) {
    const env = Math.sin(((x - 60) / 360) * Math.PI);
    pts.push(`${x},${(y + Math.sin((x / 360) * k * Math.PI * 2 + phase) * amp * env).toFixed(2)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export function Resonance({ className }: Props) {
  const cx = 240, cy = 190;
  return (
    <Frame className={className} label="Standing waves and interference forming ordered structure">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={i} x1={60 + i * 45} y1="60" x2={60 + i * 45} y2="320" strokeOpacity="0.22" />
        ))}
        {[40, 80, 120, 160].map((r) => <circle key={r} cx={cx} cy={cy} r={r} strokeOpacity="0.3" />)}
        <circle cx="120" cy={cy} r="2" fill="var(--color-gold)" stroke="none" />
        <circle cx="360" cy={cy} r="2" fill="var(--color-gold)" stroke="none" />
      </g>

      <g className="form fig-breathe">
        {/* interference field */}
        <g stroke="currentColor" strokeWidth="0.45">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx="150" cy={cy} r={26 + i * 30} strokeOpacity={0.22 - i * 0.03} />
              <circle cx="330" cy={cy} r={26 + i * 30} strokeOpacity={0.22 - i * 0.03} />
            </g>
          ))}
        </g>
        <circle cx={cx} cy={cy} r="70" stroke="var(--color-gold)" strokeOpacity="0.4" strokeWidth="0.5" className="fig-ripple" />
        {/* standing waves */}
        <g stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
          <path d={wave(52, 2, 0, cy)} strokeOpacity="0.7" />
          <path d={wave(52, 2, Math.PI, cy)} strokeOpacity="0.32" />
          <path d={wave(28, 4, 0, cy)} strokeOpacity="0.4" />
          <path d={wave(16, 6, Math.PI / 2, cy)} stroke="var(--color-gold)" strokeOpacity="0.55" />
        </g>
        <line x1="60" y1={cy} x2="420" y2={cy} stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.4" />
        {[60, 150, 240, 330, 420].map((x) => (
          <circle key={x} cx={x} cy={cy} r="1.8" fill="currentColor" fillOpacity="0.6" className="fig-node" style={{ animationDelay: `${x / 260}s` }} />
        ))}
      </g>
    </Frame>
  );
}

/* ÔÇöÔÇöÔÇö 04 ┬À Relational Intelligence ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

const ORION_STARS: { x: number; y: number; r: number; gold?: boolean }[] = [
  { x: 215, y: 58, r: 1.6 },
  { x: 150, y: 110, r: 3.2, gold: true },
  { x: 330, y: 108, r: 2.5 },
  { x: 205, y: 190, r: 2.1 },
  { x: 243, y: 185, r: 2.1 },
  { x: 281, y: 180, r: 2.1 },
  { x: 170, y: 305, r: 2.5 },
  { x: 322, y: 300, r: 3.0, gold: true },
  { x: 225, y: 225, r: 1.2 },
  { x: 236, y: 258, r: 1.1 },
  { x: 228, y: 290, r: 1.1 },
];

const ORION_LINES: [number, number][] = [
  [0, 1], [0, 2],
  [1, 2],
  [1, 3],
  [2, 5],
  [5, 4], [4, 3],
  [3, 6],
  [5, 7],
  [6, 7],
  [2, 4],
  [3, 8], [8, 9], [9, 10],
];

export function RelationalIntelligence({ className }: Props) {
  return (
    <Frame className={className} label="The Orion constellation — meaning exists between the stars, not within them">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.4" strokeWidth="0.4">
        {ORION_STARS.map((s, i) => (
          <g key={i}>
            <circle cx={s.x} cy={s.y} r="14" strokeOpacity="0.3" />
            <line x1={s.x - 8} y1={s.y} x2={s.x + 8} y2={s.y} strokeOpacity="0.5" />
            <line x1={s.x} y1={s.y - 8} x2={s.x} y2={s.y + 8} strokeOpacity="0.5" />
          </g>
        ))}
        <polyline points={ORION_STARS.map((s) => `${s.x},${s.y}`).join(" ")} strokeOpacity="0.18" />
      </g>

      <g className="form fig-breathe">
        <g stroke="currentColor">
          {ORION_LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={ORION_STARS[a].x} y1={ORION_STARS[a].y}
              x2={ORION_STARS[b].x} y2={ORION_STARS[b].y}
              strokeWidth="0.5" strokeOpacity="0.32"
            />
          ))}
          <line
            x1={ORION_STARS[3].x} y1={ORION_STARS[3].y}
            x2={ORION_STARS[5].x} y2={ORION_STARS[5].y}
            stroke="var(--color-gold)" strokeWidth="0.7" strokeOpacity="0.6"
            className="fig-flow"
          />
        </g>
        {ORION_STARS.map((s, i) => (
          <g key={i}>
            <circle cx={s.x} cy={s.y} r={s.r + 6} stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.2" />
            <circle
              cx={s.x} cy={s.y} r={s.r}
              fill={s.gold ? "var(--color-gold)" : "currentColor"}
              className="fig-node"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </g>
        ))}
        <ellipse cx="232" cy="250" rx="20" ry="42" fill="var(--color-gold)" fillOpacity="0.05" stroke="none" />
      </g>
    </Frame>
  );
}

/* ÔÇöÔÇöÔÇö 05 ┬À Transformation ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

export function Transformation({ className }: Props) {
  const apex: [number, number] = [240, 96];
  const left: [number, number] = [182, 236];
  const right: [number, number] = [298, 236];
  const hit: [number, number] = [216, 178];
  const exit: [number, number] = [262, 190];
  const fans = [-14, -7, 0, 7, 14];

  return (
    <Frame className={className} label="A beam refracted through a prism into several coherent outputs">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <circle cx="240" cy="190" r="96" strokeOpacity="0.3" />
        <line x1={apex[0]} y1={apex[1]} x2="240" y2="260" strokeDasharray="2 5" />
        <line x1={left[0]} y1={left[1]} x2={right[0]} y2={right[1]} strokeOpacity="0.35" />
        <line x1="40" y1="178" x2="440" y2="178" strokeOpacity="0.2" />
        {[apex, left, right, hit, exit].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill="var(--color-gold)" stroke="none" />
        ))}
        <path d="M240 190 m -40 0 a 40 40 0 0 1 40 -40" strokeOpacity="0.5" />
      </g>

      <g className="form fig-breathe">
        {/* incoming beam */}
        <line x1="56" y1="150" x2={hit[0]} y2={hit[1]} stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.75" />
        <line x1="56" y1="150" x2={hit[0]} y2={hit[1]} stroke="var(--color-gold)" strokeWidth="0.5" strokeOpacity="0.5" className="fig-flow" />
        {/* prism */}
        <polygon
          points={`${apex[0]},${apex[1]} ${left[0]},${left[1]} ${right[0]},${right[1]}`}
          stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.75"
        />
        <polygon
          points={`${apex[0]},${apex[1]} ${left[0]},${left[1]} ${right[0]},${right[1]}`}
          fill="var(--color-gold)" fillOpacity="0.04" stroke="none"
        />
        {/* internal path */}
        <path d={`M${hit[0]} ${hit[1]} L${exit[0]} ${exit[1]}`} stroke="var(--color-gold)" strokeWidth="0.6" strokeOpacity="0.7" />
        {/* dispersion ÔÇö white, warm gold, grey only */}
        <g className="fig-sweep" style={{ transformBox: "view-box", transformOrigin: `${exit[0]}px ${exit[1]}px` }}>
          {fans.map((d, i) => {
            const a = ((-4 + d) * Math.PI) / 180;
            const len = 170;
            return (
              <line
                key={i}
                x1={exit[0]} y1={exit[1]}
                x2={exit[0] + Math.cos(a) * len} y2={exit[1] + Math.sin(a) * len}
                stroke={i === 2 ? "var(--color-gold)" : "currentColor"}
                strokeWidth={i === 2 ? 0.8 : 0.5}
                strokeOpacity={i === 2 ? 0.75 : 0.5 - Math.abs(i - 2) * 0.12}
              />
            );
          })}
        </g>
        <line x1="440" y1="96" x2="440" y2="292" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.4" />
      </g>
    </Frame>
  );
}

/* ÔÇöÔÇöÔÇö 06 ┬À Emergence & Observation ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö */

export function EmergenceObservation({ className }: Props) {
  const cx = 240, cy = 250;
  return (
    <Frame className={className} label="A folded structure opening beneath an observatory geometry">
      <g className="cx" stroke="var(--color-gold)" strokeOpacity="0.45" strokeWidth="0.4">
        <circle cx={cx} cy={cy} r="150" strokeOpacity="0.3" />
        <circle cx={cx} cy={cy} r="112" strokeOpacity="0.22" />
        {[0, 30, 60, 90, 120, 150].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return <line key={deg} x1={cx - Math.cos(a) * 150} y1={cy - Math.sin(a) * 150} x2={cx + Math.cos(a) * 150} y2={cy + Math.sin(a) * 150} strokeOpacity="0.22" />;
        })}
        <line x1="60" y1={cy} x2="420" y2={cy} />
        {[[cx, cy], [cx - 112, cy], [cx + 112, cy], [cx, cy - 112]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill="var(--color-gold)" stroke="none" />
        ))}
      </g>

      <g className="form fig-breathe">
        {/* folded geometry, slowly opening */}
        <g className="fig-fold" stroke="currentColor">
          <path d={`M${cx} ${cy - 112} L${cx - 112} ${cy} L${cx} ${cy} Z`} strokeWidth="0.6" strokeOpacity="0.55" />
          <path d={`M${cx} ${cy - 112} L${cx + 112} ${cy} L${cx} ${cy} Z`} strokeWidth="0.6" strokeOpacity="0.4" />
          <path d={`M${cx - 112} ${cy} L${cx - 56} ${cy - 78} L${cx} ${cy} Z`} strokeWidth="0.5" strokeOpacity="0.3" />
          <path d={`M${cx + 112} ${cy} L${cx + 56} ${cy - 78} L${cx} ${cy} Z`} strokeWidth="0.5" strokeOpacity="0.24" />
        </g>
        {/* observation arc */}
        <path
          d={`M${cx - 150} ${cy} A 150 150 0 0 1 ${cx + 150} ${cy}`}
          stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.35"
        />
        <g className="fig-sweep" style={{ transformBox: "view-box", transformOrigin: `${cx}px ${cy}px` }}>
          <line x1={cx} y1={cy} x2={cx} y2={cy - 168} stroke="var(--color-gold)" strokeWidth="0.7" strokeOpacity="0.7" />
          <circle cx={cx} cy={cy - 168} r="3" fill="var(--color-gold)" fillOpacity="0.9" stroke="none" />
        </g>
        <line x1="60" y1={cy} x2="420" y2={cy} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx={cx} cy={cy} r="2.4" fill="currentColor" />
        {/* distant observed points */}
        {[[118, 96], [352, 118], [300, 70], [162, 142]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" className="fig-node" style={{ animationDelay: `${i * 1.3}s` }} />
        ))}
      </g>
    </Frame>
  );
}
