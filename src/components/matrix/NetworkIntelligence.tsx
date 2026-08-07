"use client";

import { useEffect, useRef, useState } from "react";

/**
 * MATRIX — "Cortex": a living knowledge graph.
 *
 * Nodes drift organically on their own clocks; the edges stretch to follow
 * them, and gold pulses travel the connections like signals firing through
 * a network. Driven entirely by requestAnimationFrame — no SMIL, works in
 * every browser.
 */

type Props = { size?: number; className?: string };

const CX = 170;
const CY = 170;

/* Deterministic PRNG so the SSR HTML and the hydrated client render
   exactly the same graph. */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(42);

type Node = {
  bx: number;
  by: number;
  r: number;
  halo: number;
  speed: number;
  amp: number;
  phase: number;
};

const NODES: Node[] = (() => {
  const out: Node[] = [];
  const rings = [
    { r: 55, n: 6, j: 10 },
    { r: 95, n: 9, j: 14 },
    { r: 138, n: 14, j: 18 },
  ];
  rings.forEach((ring, k) => {
    for (let i = 0; i < ring.n; i++) {
      const a = (i / ring.n) * Math.PI * 2 + k * 0.4;
      const bx = CX + ring.r * Math.cos(a) + (rand() - 0.5) * ring.j;
      const by = CY + ring.r * Math.sin(a) + (rand() - 0.5) * ring.j;
      out.push({
        bx,
        by,
        r: k === 0 ? 2.2 : k === 1 ? 1.8 : 1.4,
        halo: k === 0 ? 5 : k === 1 ? 4 : 3.5,
        speed: 0.5 + rand() * 0.5,
        amp: 4 + rand() * 6,
        phase: rand() * Math.PI * 2,
      });
    }
  });
  return out;
})();

/* Edge: pair of node indices; the hub is -1. */
type Edge = [number, number];

const EDGES: Edge[] = (() => {
  const e: Edge[] = [];
  const [n1, n2, n3] = [6, 9, 14];
  const [o1, o2, o3] = [0, 6, 15];

  /* spokes — the hub to the inner ring */
  for (let i = 0; i < n1; i++) e.push([-1, o1 + i]);

  /* ring segments — the structure within each ring */
  for (let i = 0; i < n1; i++) e.push([o1 + i, o1 + ((i + 1) % n1)]);
  for (let i = 0; i < n2; i++) e.push([o2 + i, o2 + ((i + 1) % n2)]);
  for (let i = 0; i < n3; i++) e.push([o3 + i, o3 + ((i + 1) % n3)]);

  /* cross-links between rings */
  for (let i = 0; i < n1; i++) {
    e.push([o1 + i, o2 + ((i * 2) % n2)]);
    e.push([o1 + i, o2 + ((i * 2 + 4) % n2)]);
  }
  for (let i = 0; i < n2; i++) {
    e.push([o2 + i, o3 + ((i * 2) % n3)]);
    e.push([o2 + i, o3 + ((i * 2 + 5) % n3)]);
  }
  return e;
})();

const SPOKE_COUNT = 6;

/* Pulses travelling along edges: from a -> b, one cycle per 1/speed. */
type Pulse = { a: number; b: number; speed: number; phase: number; r: number };

const PULSES: Pulse[] = (() => {
  const p: Pulse[] = [];
  for (let i = 0; i < 6; i++) {
    p.push({ a: -1, b: i, speed: 0.26 + i * 0.02, phase: i * 0.17, r: 1.8 });
  }
  for (let i = 0; i < 6; i++) {
    p.push({
      a: i,
      b: 6 + ((i * 2 + 4) % 9),
      speed: 0.18 + (i % 3) * 0.05,
      phase: 0.05 + i * 0.23,
      r: 1.6,
    });
  }
  return p;
})();

function ep(n: number, t: number): [number, number] {
  if (n === -1) return [CX, CY];
  const node = NODES[n];
  return [
    node.bx + Math.sin(t * node.speed + node.phase) * node.amp,
    node.by + Math.cos(t * node.speed * 0.85 + node.phase * 1.7) * node.amp,
  ];
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

export function NetworkIntelligence({ size = 340, className = "" }: Props) {
  const reduced = usePrefersReducedMotion();
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const edgeRefs = useRef<(SVGLineElement | null)[]>([]);
  const pulseRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      NODES.forEach((_, i) => {
        const [x, y] = ep(i, t);
        nodeRefs.current[i]?.setAttribute(
          "transform",
          `translate(${x.toFixed(2)} ${y.toFixed(2)})`,
        );
      });
      EDGES.forEach(([a, b], i) => {
        const [x1, y1] = ep(a, t);
        const [x2, y2] = ep(b, t);
        const el = edgeRefs.current[i];
        if (el) {
          el.setAttribute("x1", x1.toFixed(2));
          el.setAttribute("y1", y1.toFixed(2));
          el.setAttribute("x2", x2.toFixed(2));
          el.setAttribute("y2", y2.toFixed(2));
        }
      });
      PULSES.forEach((p, i) => {
        const prog = (t * p.speed + p.phase) % 1;
        const [x1, y1] = ep(p.a, t);
        const [x2, y2] = ep(p.b, t);
        pulseRefs.current[i]?.setAttribute(
          "transform",
          `translate(${(x1 + (x2 - x1) * prog).toFixed(2)} ${(y1 + (y2 - y1) * prog).toFixed(2)})`,
        );
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 340 340"
      fill="none"
      className={className}
      role="img"
      aria-label="A living network of intelligence — drifting nodes threaded by travelling signals"
    >
      {/* sonar ripples emanating from the core */}
      {[0, 0.9, 1.8, 2.7].map((d, i) => (
        <circle
          key={i}
          cx={CX}
          cy={CY}
          r="9"
          stroke="var(--color-gold)"
          strokeOpacity="0.4"
          strokeWidth="0.5"
          className="net-sonar"
          style={{ animationDelay: `${d}s` }}
        />
      ))}

      {/* edges — the threads, following the drifting nodes */}
      <g strokeWidth="0.5">
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = [ep(a, 0)[0], ep(a, 0)[1]];
          const [x2, y2] = [ep(b, 0)[0], ep(b, 0)[1]];
          return (
            <line
              key={i}
              ref={(el) => {
                edgeRefs.current[i] = el;
              }}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i < SPOKE_COUNT ? "var(--color-gold)" : "currentColor"}
              strokeOpacity={i < SPOKE_COUNT ? 0.45 : 0.16}
              strokeWidth={i < SPOKE_COUNT ? 0.6 : 0.5}
            />
          );
        })}
      </g>

      {/* nodes — each drifting on its own clock */}
      {NODES.map((n, i) => (
        <g
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          transform={`translate(${n.bx} ${n.by})`}
        >
          <circle
            cx="0"
            cy="0"
            r={n.halo}
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="0.5"
          />
          <circle cx="0" cy="0" r={n.r} fill="currentColor" />
        </g>
      ))}

      {/* the core — intelligence itself */}
      <circle
        cx={CX}
        cy={CY}
        r="8"
        stroke="var(--color-gold)"
        strokeOpacity="0.3"
        strokeWidth="0.6"
      />
      <circle cx={CX} cy={CY} r="4" fill="var(--color-gold)" className="net-core" />

      {/* travelling signals */}
      {PULSES.map((p, i) => (
        <g
          key={i}
          ref={(el) => {
            pulseRefs.current[i] = el;
          }}
          transform={`translate(${CX} ${CY})`}
        >
          <circle
            cx="0"
            cy="0"
            r={p.r + 3}
            fill="none"
            stroke="var(--color-gold)"
            strokeOpacity="0.35"
            strokeWidth="0.5"
          />
          <circle cx="0" cy="0" r={p.r} fill="var(--color-gold)" />
        </g>
      ))}
    </svg>
  );
}
