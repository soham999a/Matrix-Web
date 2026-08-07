/**
 * Symbolic line drawings. One metaphor per page.
 * Thin strokes, mathematical, no decoration.
 */

type Props = { className?: string };

const fx = (className?: string) => ["metaphor-fx", className].filter(Boolean).join(" ");

/** Constellation — distributed systems / landing */
export function Constellation({ className }: Props) {
  const nodes = [
    [80, 120],
    [220, 60],
    [340, 180],
    [180, 240],
    [420, 90],
    [520, 220],
    [600, 140],
    [120, 320],
    [380, 360],
    [560, 360],
    [260, 420],
    [480, 460],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [1, 4],
    [4, 5],
    [5, 6],
    [2, 5],
    [0, 7],
    [7, 10],
    [10, 8],
    [8, 5],
    [8, 11],
    [11, 9],
    [9, 5],
    [6, 9],
  ];
  return (
    <svg
      viewBox="0 0 680 520"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className="draw"
          style={{ animationDelay: `${i * 80}ms` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i} className="drift" style={{ animationDelay: `${i * 250}ms` }}>
          <circle cx={x} cy={y} r="1.6" fill="currentColor" />
          <circle cx={x} cy={y} r="6" stroke="currentColor" strokeOpacity="0.25" />
        </g>
      ))}
    </svg>
  );
}

/** Iceberg — hidden intelligence */
export function Iceberg({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <line x1="0" y1="200" x2="400" y2="200" strokeDasharray="2 4" strokeOpacity="0.4" />
      <path d="M120 200 L160 80 L220 110 L260 60 L290 200 Z" className="breathe" />
      <g className="fx-bob">
        <path
          d="M90 200 L140 320 L180 280 L240 380 L210 440 L150 460 L110 420 L70 360 L60 280 Z"
          strokeOpacity="0.55"
        />
        <path
          d="M260 200 L300 260 L340 240 L370 320 L330 360 L290 340 L270 290 Z"
          strokeOpacity="0.45"
        />
      </g>
    </svg>
  );
}

/** Roots — interconnected knowledge */
export function Roots({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 420"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <line x1="0" y1="120" x2="600" y2="120" strokeOpacity="0.3" />
      <g className="fx-sway" style={{ transformOrigin: "300px 120px" }}>
        <path d="M300 120 L300 60" />
        <path d="M300 120 C 240 200, 180 240, 80 300 M300 120 C 360 200, 420 240, 520 300" />
        <path d="M300 120 C 270 200, 230 260, 200 360 M300 120 C 330 200, 370 260, 400 360" />
        <path d="M300 120 C 290 220, 280 320, 260 400 M300 120 C 310 220, 320 320, 340 400" />
        <path
          d="M300 120 C 220 180, 140 220, 40 240 M300 120 C 380 180, 460 220, 560 240"
          strokeOpacity="0.5"
        />
      </g>
    </svg>
  );
}

/** Prism — perspective / consulting */
export function Prism({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 420"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <line x1="20" y1="210" x2="220" y2="210" />
      <g className="fx-spin" style={{ transformOrigin: "320px 210px" }}>
        <path d="M220 210 L320 110 L420 210 L320 310 Z" className="breathe" />
      </g>
      <line x1="420" y1="210" x2="580" y2="160" strokeOpacity="0.9" />
      <line x1="420" y1="210" x2="580" y2="200" strokeOpacity="0.75" />
      <line x1="420" y1="210" x2="580" y2="240" strokeOpacity="0.6" />
      <line x1="420" y1="210" x2="580" y2="280" strokeOpacity="0.45" />
    </svg>
  );
}

/** Observatory — research */
export function Observatory({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 460"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <circle cx="300" cy="220" r="160" />
      <circle cx="300" cy="220" r="120" strokeOpacity="0.6" />
      <circle cx="300" cy="220" r="80" strokeOpacity="0.4" />
      <line x1="140" y1="220" x2="460" y2="220" strokeOpacity="0.3" />
      <line x1="300" y1="60" x2="300" y2="380" strokeOpacity="0.3" />
      <g className="fx-spin" style={{ transformOrigin: "300px 220px" }}>
        <line x1="300" y1="220" x2="430" y2="120" />
        <circle cx="430" cy="120" r="3" fill="currentColor" />
      </g>
      <path d="M180 400 L420 400 M200 400 L200 440 M400 400 L400 440" strokeOpacity="0.5" />
    </svg>
  );
}

/** Bridge — consulting */
export function Bridge({ className }: Props) {
  return (
    <svg
      viewBox="0 0 700 320"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <line x1="0" y1="220" x2="700" y2="220" />
      <path d="M60 220 Q 350 60 640 220" />
      <line x1="60" y1="220" x2="60" y2="280" />
      <line x1="640" y1="220" x2="640" y2="280" />
      <g className="fx-wave" style={{ transformOrigin: "350px 220px" }}>
        {Array.from({ length: 11 }).map((_, i) => {
          const t = i / 10;
          const x = 60 + (640 - 60) * t;
          const y = 220 - Math.sin(Math.PI * t) * 160;
          return <line key={i} x1={x} y1={y} x2={x} y2="220" strokeOpacity="0.4" />;
        })}
      </g>
    </svg>
  );
}

/** Origami — transformation / products */
export function Origami({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 460"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <g className="fx-unfold" style={{ transformOrigin: "300px 380px" }}>
        <path d="M120 380 L300 80 L480 380 Z" />
        <path d="M120 380 L300 240 L480 380" strokeOpacity="0.7" />
        <path d="M300 80 L300 380" strokeOpacity="0.5" />
        <path d="M210 230 L390 230" strokeOpacity="0.4" />
        <path d="M170 305 L430 305" strokeOpacity="0.3" />
      </g>
    </svg>
  );
}

/** Threads — AI orchestration */
export function Threads({ className }: Props) {
  return (
    <svg
      viewBox="0 0 700 320"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <g className="fx-wave" style={{ transformOrigin: "350px 160px" }}>
        {Array.from({ length: 16 }).map((_, i) => {
          const y = 40 + i * 16;
          return (
            <path
              key={i}
              d={`M0 ${y} C 200 ${y - 30}, 500 ${y + 30}, 700 ${y}`}
              strokeOpacity={0.15 + (i % 4) * 0.2}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Compass — strategy */
export function Compass({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <circle cx="200" cy="200" r="160" />
      <circle cx="200" cy="200" r="120" strokeOpacity="0.5" />
      <line x1="40" y1="200" x2="360" y2="200" strokeOpacity="0.4" />
      <line x1="200" y1="40" x2="200" y2="360" strokeOpacity="0.4" />
      <g className="fx-spin" style={{ transformOrigin: "200px 200px" }}>
        <path d="M200 60 L220 200 L200 340 L180 200 Z" />
      </g>
      <circle cx="200" cy="200" r="3" fill="currentColor" />
    </svg>
  );
}

/** Ripple — cascading intelligence (journal) */
export function Ripple({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={fx(className)}
      tabIndex={0}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      {[40, 80, 130, 190, 260, 340].map((r, i) => (
        <ellipse
          key={i}
          cx="300"
          cy="240"
          rx={r * 1.4}
          ry={r * 0.45}
          strokeOpacity={1 - i * 0.15}
          className="breathe"
          style={{ animationDelay: `${i * 600}ms` }}
        />
      ))}
      <circle cx="300" cy="240" r="2.5" fill="currentColor" />
    </svg>
  );
}
