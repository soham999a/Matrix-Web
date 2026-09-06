import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const INK = "#080808";
const FOREGROUND = "#F5F5F5";
const MUTED = "#8A8A8A";
const GOLD = "#C9A14A";

type FontWeight = 400 | 500;

type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: FontWeight;
  style: "normal";
};

function loadFont(family: string): LoadedFont | null {
  const fontMap: Record<string, string> = {
    "Instrument Serif": "InstrumentSerif-Regular.ttf",
    "IBM Plex Mono": "IBMPlexMono-Regular.ttf",
  };
  const fileName = fontMap[family];
  if (!fileName) return null;
  try {
    const filePath = join(process.cwd(), "public", "fonts", fileName);
    const data = readFileSync(filePath).buffer;
    return { name: family, data, weight: 400, style: "normal" };
  } catch {
    return null;
  }
}

/** The official brand logo as a base64 data URI (2:1 aspect ratio). */
function loadLogo(): string | null {
  try {
    const filePath = join(process.cwd(), "public", "matrix-new-logo.png");
    const data = readFileSync(filePath);
    return `data:image/png;base64,${data.toString("base64")}`;
  } catch {
    return null;
  }
}

function LatticeMark({ size = 40, accent = GOLD }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="6" cy="8" r="1.4" fill={FOREGROUND} />
      <circle cx="34" cy="8" r="1.4" fill={FOREGROUND} />
      <circle cx="6" cy="32" r="1.4" fill={FOREGROUND} />
      <circle cx="34" cy="32" r="1.4" fill={FOREGROUND} />
      <circle cx="20" cy="20" r="1.4" fill={accent} />
      <path
        d="M6 8 L20 20 L34 8 M6 32 L20 20 L34 32 M6 8 L6 32 M34 8 L34 32"
        stroke={FOREGROUND}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type OgProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export async function MatrixOgImage({ eyebrow, title, subtitle }: OgProps): Promise<ImageResponse> {
  const fonts = [loadFont("Instrument Serif"), loadFont("IBM Plex Mono")].filter(
    (f): f is LoadedFont => f !== null,
  );
  const logo = loadLogo();

  const serif = fonts.find((f) => f.name === "Instrument Serif") ? "Instrument Serif" : undefined;
  const mono = fonts.find((f) => f.name === "IBM Plex Mono") ? "IBM Plex Mono" : undefined;

  return new ImageResponse(
    <div
      style={{
        width: OG_WIDTH,
        height: OG_HEIGHT,
        background: INK,
        color: FOREGROUND,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 56,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: 15,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: GOLD,
            fontFamily: mono,
          }}
        >
          {eyebrow}
        </span>
        <LatticeMark size={34} />
      </div>

      {/* brand lockup — the real site logo + tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        {logo ? (
          <img src={logo} alt="mātṛkā" width={430} height={215} style={{ display: "block" }} />
        ) : (
          <span style={{ fontSize: 40, letterSpacing: 12, fontFamily: mono }}>
            M · A · T · R · K · A
          </span>
        )}
        <span
          style={{
            fontSize: 14,
            letterSpacing: 9,
            textTransform: "uppercase",
            color: MUTED,
            fontFamily: mono,
          }}
        >
          Evolution of Intelligence
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          maxWidth: 1000,
        }}
      >
        <div style={{ width: 96, height: 2, background: GOLD }} />
        <div
          style={{
            fontSize: 58,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            fontFamily: serif,
            fontWeight: 400,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 24, lineHeight: 1.3, color: MUTED, fontFamily: mono }}>
            {subtitle}
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: MUTED,
            fontFamily: mono,
          }}
        >
          Cohered by Design
        </span>
        <span
          style={{
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: FOREGROUND,
            fontFamily: mono,
          }}
        >
          matrka.net
        </span>
      </div>
    </div>,
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      fonts,
    },
  );
}
