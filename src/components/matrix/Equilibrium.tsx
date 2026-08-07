/**
 * MATRIX — "Equilibrium"
 *
 * A balanced cairn on a fulcrum: stones stacked against gravity,
 * held by a lattice of threads. Balance · Perseverance · System.
 *
 * Pure SVG + SMIL — deterministic, SSR-safe, no external media.
 */

type Props = { size?: number; className?: string };

export function Equilibrium({ size = 340, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 340 340"
      fill="none"
      className={className}
      role="img"
      aria-label="A balanced cairn of stones held on a fulcrum by a lattice of threads"
    >
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

      {/* fulcrum */}
      <path d="M170 300 L160 288 L180 288 Z" fill="var(--color-gold)" fillOpacity="0.9" />

      {/* the rocking assembly */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-1.1 170 300; 1.1 170 300; -1.1 170 300"
          dur="11s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          keyTimes="0; 0.5; 1"
        />

        {/* beam */}
        <line
          x1="96"
          y1="288"
          x2="244"
          y2="288"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {/* stones — irregular, from broad base to fine apex */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.85" fill="none">
          <path d="M132 288 C126 276 134 264 152 262 C176 260 196 266 200 276 C204 286 194 288 186 288 Z" />
          <path d="M141 262 C136 250 146 240 164 240 C184 240 194 248 191 258 C189 264 180 262 172 262 Z" />
          <path d="M148 240 C144 230 152 220 168 221 C182 222 189 229 186 236 C184 241 176 240 170 240 Z" />
          <path d="M154 221 C151 213 158 205 170 206 C180 207 184 213 181 218 C179 222 172 221 168 221 Z" />
          <path
            d="M160 206 C158 199 164 193 172 194 C179 195 181 200 178 204 Z"
            fill="var(--color-gold)"
            fillOpacity="0.92"
            stroke="none"
          />
        </g>

        {/* the system: nodes at each centre of mass, threaded */}
        <g>
          <path
            d="M166 276 L164 251 L167 231 L168 213 L169 199"
            stroke="var(--color-gold)"
            strokeOpacity="0.55"
            strokeWidth="0.6"
          />
          <path
            d="M132 288 L167 231 L200 276 M141 262 L169 199 L191 258"
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="0.5"
          />
          {[
            [166, 276],
            [164, 251],
            [167, 231],
            [168, 213],
            [169, 199],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.7" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.35; 1; 0.35"
                dur="5.5s"
                begin={`${i * 0.55}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </g>

      {/* plumb line — the constant against which balance is measured */}
      <line
        x1="170"
        y1="176"
        x2="170"
        y2="300"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="0.5"
        strokeDasharray="2 5"
      />

      {/* patience arc — a slow, never-completing sweep */}
      <circle
        cx="170"
        cy="240"
        r="112"
        stroke="var(--color-gold)"
        strokeOpacity="0.35"
        strokeWidth="0.6"
        strokeDasharray="704"
        strokeDashoffset="704"
        transform="rotate(-90 170 240)"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="704; 176; 704"
          dur="26s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
