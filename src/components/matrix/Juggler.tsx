"use client";

import { useEffect, useRef, useState } from "react";

/**
 * JUGGLER — a balanced figure running a three-ball cascade.
 *
 * The figure trembles on its fulcrum (the jiggle of balance) while three
 * balls trace two mirrored throws — palm to apex over the head to the far
 * palm — dwelling briefly in each hand so every catch reads clearly. Each
 * ball is positioned every frame by requestAnimationFrame (no SMIL, works
 * in every browser), and because the balls live inside the jiggling group
 * they stay locked to the hands as the whole performer wobbles. A faint
 * dashed ghost of the trajectory reveals the system beneath.
 *
 * Variants:
 *   lattice — a constellation-person: nodes and edges, the studio at the hip
 *   stick   — a plain stick figure, most readable
 *   sculpt  — architectural beams and a weighted head, heaviest strokes
 */

export type JugglerVariant = "lattice" | "stick" | "sculpt";

type Props = { variant?: JugglerVariant; size?: number; className?: string };

type Pt = [number, number];

/* Raised hands, chest height — a juggler's pose. */
const HAND_L: Pt = [122, 116];
const HAND_R: Pt = [218, 116];

const LOOP_SECONDS = 4.5;
const STAGGER = LOOP_SECONDS / 3;
const DWELL = 0.35;

/* The two throws. Controls pull the arc up over the head (apex ~y42). */
const ARC_A: { p0: Pt; p1: Pt; p2: Pt; p3: Pt } = {
  p0: HAND_L,
  p1: [138, 18],
  p2: [202, 18],
  p3: HAND_R,
};
const ARC_B: { p0: Pt; p1: Pt; p2: Pt; p3: Pt } = {
  p0: HAND_R,
  p1: [202, 18],
  p2: [138, 18],
  p3: HAND_L,
};

/* The ghost of the trajectory drawn under the balls. */
const TRAJECTORY = `M${ARC_A.p0[0]} ${ARC_A.p0[1]} C ${ARC_A.p1[0]} ${ARC_A.p1[1]} ${ARC_A.p2[0]} ${ARC_A.p2[1]} ${ARC_A.p3[0]} ${ARC_A.p3[1]} C ${ARC_B.p1[0]} ${ARC_B.p1[1]} ${ARC_B.p2[0]} ${ARC_B.p2[1]} ${ARC_B.p3[0]} ${ARC_B.p3[1]} Z`;

function cubicAt(arc: { p0: Pt; p1: Pt; p2: Pt; p3: Pt }, t: number): Pt {
  const u = 1 - t;
  return [
    u * u * u * arc.p0[0] +
      3 * u * u * t * arc.p1[0] +
      3 * u * t * t * arc.p2[0] +
      t * t * t * arc.p3[0],
    u * u * u * arc.p0[1] +
      3 * u * u * t * arc.p1[1] +
      3 * u * t * t * arc.p2[1] +
      t * t * t * arc.p3[1],
  ];
}

/* Map loop time u in [0,1) to a position along the two throws,
   dwelling in each palm so every catch reads clearly. */
function pointAtLoopTime(u: number): Pt {
  const tDwell = DWELL / LOOP_SECONDS;
  if (u < tDwell) return HAND_L;
  if (u < 0.5) return cubicAt(ARC_A, (u - tDwell) / (0.5 - tDwell));
  if (u < 0.5 + tDwell) return HAND_R;
  return cubicAt(ARC_B, (u - 0.5 - tDwell) / (1 - 0.5 - tDwell));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* A ball driven by requestAnimationFrame — no SMIL, works in every
   browser. Each ball owns its phase; a small dwell parks it in a palm
   before it is thrown again. */
function Ball({ phase, staticAt }: { phase?: number; staticAt?: Pt }) {
  const ref = useRef<SVGGElement>(null);
  const [cx, cy] = staticAt ?? HAND_L;
  useEffect(() => {
    if (phase === undefined) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000 + phase;
      const u = (((t % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS) / LOOP_SECONDS;
      const [x, y] = pointAtLoopTime(u);
      ref.current?.setAttribute("transform", `translate(${x} ${y})`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);
  return (
    <g ref={ref} transform={`translate(${cx} ${cy})`}>
      <circle
        cx="0"
        cy="0"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="0.7"
      />
      <circle cx="0" cy="0" r="2.2" fill="var(--color-gold)" />
    </g>
  );
}

function LatticeFigure() {
  const nodes: Pt[] = [
    [170, 70], // head
    [170, 92], // neck
    [150, 112], // shoulder L
    [190, 112], // shoulder R
    [134, 132], // elbow L
    [206, 132], // elbow R
    HAND_L, // hand L
    HAND_R, // hand R
    [170, 188], // hip — the studio
    [153, 238], // knee L
    [187, 238], // knee R
    [140, 288], // foot L
    [200, 288], // foot R
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [4, 6],
    [3, 5],
    [5, 7],
    [1, 8],
    [2, 8],
    [3, 8],
    [8, 9],
    [9, 11],
    [8, 10],
    [10, 12],
  ];
  return (
    <g stroke="currentColor" strokeWidth="0.6" fill="none">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="1.5"
          fill={i === 8 ? "var(--color-gold)" : "currentColor"}
          stroke="none"
        />
      ))}
      <circle cx={HAND_L[0]} cy={HAND_L[1]} r="3.5" fill="var(--color-gold)" stroke="none" />
      <circle cx={HAND_R[0]} cy={HAND_R[1]} r="3.5" fill="var(--color-gold)" stroke="none" />
    </g>
  );
}

function StickFigure() {
  return (
    <g stroke="currentColor" strokeWidth="0.8" fill="none">
      <circle cx="170" cy="72" r="13" />
      <line x1="170" y1="85" x2="170" y2="94" />
      <line x1="170" y1="94" x2="170" y2="188" />
      <path d="M163 106 L136 124 L122 116" />
      <path d="M177 106 L204 124 L218 116" />
      <path d="M166 188 L152 238 L140 288" />
      <path d="M174 188 L188 238 L200 288" />
      <circle cx={HAND_L[0]} cy={HAND_L[1]} r="3" fill="var(--color-gold)" stroke="none" />
      <circle cx={HAND_R[0]} cy={HAND_R[1]} r="3" fill="var(--color-gold)" stroke="none" />
      <circle cx="140" cy="288" r="2" fill="var(--color-gold)" stroke="none" />
      <circle cx="200" cy="288" r="2" fill="var(--color-gold)" stroke="none" />
    </g>
  );
}

function SculptFigure() {
  return (
    <g stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round">
      <circle cx="170" cy="74" r="6" fill="currentColor" stroke="none" />
      <path d="M160 108 L130 132 L122 116" />
      <path d="M180 108 L210 132 L218 116" />
      <path d="M166 186 L154 238 L142 288" />
      <path d="M174 186 L186 238 L198 288" />
      <circle cx={HAND_L[0]} cy={HAND_L[1]} r="3.5" fill="var(--color-gold)" stroke="none" />
      <circle cx={HAND_R[0]} cy={HAND_R[1]} r="3.5" fill="var(--color-gold)" stroke="none" />
    </g>
  );
}

const FIGURES: Record<JugglerVariant, () => React.ReactElement> = {
  lattice: LatticeFigure,
  stick: StickFigure,
  sculpt: SculptFigure,
};

export function Juggler({ variant = "stick", size = 340, className = "" }: Props) {
  const reduced = usePrefersReducedMotion();
  const Figure = FIGURES[variant];

  const staticBalls: Pt[] = [HAND_L, HAND_R, [170, 45]];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 340 340"
      fill="none"
      className={className}
      role="img"
      aria-label={`A balanced figure juggling three balls in a cascade — ${variant}`}
    >
      <defs>
        <clipPath id={`juggle-clip-${variant}`}>
          <rect x="0" y="0" width="340" height="340" />
        </clipPath>
      </defs>

      {/* horizon */}
      <line
        x1="20"
        y1="300"
        x2="320"
        y2="300"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="0.75"
      />

      {/* balance beam + fulcrum */}
      <line
        x1="96"
        y1="288"
        x2="244"
        y2="288"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path d="M170 300 L160 288 L180 288 Z" fill="var(--color-gold)" fillOpacity="0.9" />

      {/* the trajectory — the system beneath */}
      <path
        d={TRAJECTORY}
        fill="none"
        stroke="var(--color-gold)"
        strokeOpacity="0.14"
        strokeWidth="0.5"
        strokeDasharray="2 5"
      />

      <g clipPath={`url(#juggle-clip-${variant})`}>
        <g className="juggle-figure">
          <Figure />
          {reduced
            ? staticBalls.map((pos, i) => <Ball key={i} staticAt={pos} />)
            : [-2 * STAGGER, -STAGGER, 0].map((phase, i) => <Ball key={i} phase={phase} />)}
        </g>
      </g>
    </svg>
  );
}
