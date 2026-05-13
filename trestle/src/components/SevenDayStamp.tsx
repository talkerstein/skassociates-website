import { cn } from "@/lib/utils";

type Variant = "ink" | "spark" | "bone";

/**
 * Wax-seal style 7-day exclusivity stamp.
 * Circular seal with rotating mono text on top and bottom arcs,
 * a dominant "7" numeral in the center, and a small trestle-mark above.
 *
 * Use as a sticker / authority cue on hero, pricing, and conversion blocks.
 */
export function SevenDayStamp({
  size = 140,
  variant = "ink",
  rotate = -6,
  className,
}: {
  size?: number;
  variant?: Variant;
  rotate?: number;
  className?: string;
}) {
  const palette = {
    ink: {
      fill: "#0A1628",
      ink: "#FBF8F2",
      accent: "#DC6F1C",
      stroke: "#FBF8F2",
    },
    spark: {
      fill: "#DC6F1C",
      ink: "#FBF8F2",
      accent: "#0A1628",
      stroke: "#FBF8F2",
    },
    bone: {
      fill: "#FBF8F2",
      ink: "#0A1628",
      accent: "#DC6F1C",
      stroke: "#0A1628",
    },
  }[variant];

  // Unique ID to allow multiple instances on the page
  const uid = `seal-${variant}`;

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="7-day exclusive lock"
        role="img"
      >
        <defs>
          {/* Top arc (left-to-right over the top) for "TRESTLE · 7-DAY EXCLUSIVE" */}
          <path
            id={`${uid}-top`}
            d="M 22,100 A 78,78 0 0,1 178,100"
            fill="none"
          />
          {/* Bottom arc (left-to-right under the bottom) for the secondary line */}
          <path
            id={`${uid}-bottom`}
            d="M 30,100 A 70,70 0 0,0 170,100"
            fill="none"
          />
        </defs>

        {/* Outer seal */}
        <circle cx="100" cy="100" r="94" fill={palette.fill} />
        {/* Inner thin ring */}
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke={palette.stroke}
          strokeWidth="1"
          opacity="0.55"
        />
        {/* Inner thick ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke={palette.stroke}
          strokeWidth="2"
          opacity="0.9"
        />
        {/* Accent inner ring */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke={palette.accent}
          strokeWidth="1.4"
          opacity="0.85"
          strokeDasharray="1 4"
        />

        {/* Top arc text */}
        <text
          fill={palette.ink}
          fontFamily="var(--font-mono), monospace"
          fontSize="12"
          fontWeight="700"
          letterSpacing="3.5"
        >
          <textPath
            href={`#${uid}-top`}
            startOffset="50%"
            textAnchor="middle"
          >
            TRESTLE · 7-DAY EXCLUSIVE
          </textPath>
        </text>

        {/* Bottom arc text */}
        <text
          fill={palette.ink}
          fontFamily="var(--font-mono), monospace"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="3"
          opacity="0.85"
        >
          <textPath
            href={`#${uid}-bottom`}
            startOffset="50%"
            textAnchor="middle"
          >
            ONE BUYER · ONE WINDOW
          </textPath>
        </text>

        {/* Tiny separator dots at sides */}
        <circle cx="22" cy="100" r="2" fill={palette.ink} opacity="0.7" />
        <circle cx="178" cy="100" r="2" fill={palette.ink} opacity="0.7" />

        {/* Top center label */}
        <text
          x="100"
          y="55"
          textAnchor="middle"
          fill={palette.accent}
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="3"
          fontWeight="600"
        >
          SEALED
        </text>

        {/* Central "7" */}
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fill={palette.accent}
          fontFamily="var(--font-sans), sans-serif"
          fontSize="78"
          fontWeight="800"
          letterSpacing="-3"
        >
          7
        </text>

        {/* Below 7 */}
        <text
          x="100"
          y="150"
          textAnchor="middle"
          fill={palette.ink}
          fontFamily="var(--font-mono), monospace"
          fontSize="10"
          letterSpacing="4"
          fontWeight="600"
        >
          DAY LOCK
        </text>
      </svg>
    </div>
  );
}
