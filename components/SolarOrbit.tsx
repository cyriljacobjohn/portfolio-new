"use client";

/**
 * SolarOrbit renders an SVG animation of a spaceship orbiting around a sun.
 * The animation uses SVG's animateMotion to smoothly move the ship along
 * a circular path. It also includes subtle grid lines and glows that
 * reflect the cosmic theme. The components are sized relative to their
 * container and will scale responsively.
 */
export default function SolarOrbit() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-auto drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]"
        aria-hidden
      >
        {/* Background glow definition */}
        <defs>
          <radialGradient id="sun" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint grid circles */}
        {[110, 200, 300, 400].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            stroke="rgba(255,255,255,0.08)"
            fill="none"
          />
        ))}

        {/* Sun */}
        <circle cx="300" cy="300" r="70" fill="url(#sun)" filter="url(#softGlow)" />

        {/* Orbit path used for motion (invisible) */}
        <circle id="orbit1" cx="300" cy="300" r="260" fill="none" stroke="transparent" />

        {/* Spaceship and its trail */}
        <g>
          {/* Trail effect */}
          <circle r="3" fill="#22d3ee">
            <animate attributeName="r" values="3;1;3" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.4;1" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Ship body */}
          <g>
            <polygon points="0,-12 24,0 0,12 4,0" fill="#8b5cf6" />
            <circle cx="4" cy="0" r="3" fill="#22d3ee" />
          </g>

          {/* Animate the ship along the orbit */}
          <animateMotion dur="22s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit1" />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}