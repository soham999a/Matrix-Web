/**
 * MATRIX — Motion-graphic assembly of the primary mark.
 *
 * Two gold panels arrive from the wings. Four white nodes settle at the
 * corners of an implied X. Two threads draw between them. The central gold
 * node ignites. The wordmark rises. The mark then breathes, forever.
 *
 * viewBox 400×420. Pure SVG + CSS keyframes (see styles.css .mtx-assemble).
 */
export function AssembleMark({
  size = 340,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * (420 / 400)}
      viewBox="0 0 400 420"
      fill="none"
      className={`mtx-assemble ${className}`}
      aria-label="Matrix mark, assembling"
      role="img"
    >
      {/* two opposing gold panels — trapezoids in perspective */}
      <path
        className="a-panel-l"
        d="M60 80 L170 110 L170 300 L60 330 Z"
        fill="var(--color-gold)"
        fillOpacity="0.95"
      />
      <path
        className="a-panel-r"
        d="M340 80 L230 110 L230 300 L340 330 Z"
        fill="var(--color-gold)"
        fillOpacity="0.95"
      />

      {/* interior X — two threads between the four inner corners */}
      <line
        className="a-thread t1"
        x1="170"
        y1="110"
        x2="230"
        y2="300"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        className="a-thread t2"
        x1="230"
        y1="110"
        x2="170"
        y2="300"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* four white nodes at the corners of the X */}
      <circle className="a-node n1" cx="170" cy="110" r="6" fill="currentColor" />
      <circle className="a-node n2" cx="230" cy="110" r="6" fill="currentColor" />
      <circle className="a-node n3" cx="170" cy="300" r="6" fill="currentColor" />
      <circle className="a-node n4" cx="230" cy="300" r="6" fill="currentColor" />

      {/* golden core — the moment intelligence becomes architecture */}
      <circle className="a-core" cx="200" cy="205" r="6.5" fill="var(--color-gold)" />

      {/* Wordmark — appears after assembly completes */}
      <g className="a-word">
        <text
          x="200"
          y="380"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 34,
            letterSpacing: "0.42em",
          }}
        >
          M A T R I X
        </text>
        <text
          x="200"
          y="404"
          textAnchor="middle"
          fill="var(--color-gold)"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          Intelligence · Architecture · Impact
        </text>
      </g>
    </svg>
  );
}
