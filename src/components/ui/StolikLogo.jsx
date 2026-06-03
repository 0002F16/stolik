import React from 'react';

/**
 * StolikLogo
 *
 * SVG logo: fork + plate icon in #006BFF + "stolik" wordmark.
 *
 * Props:
 *  size    — 'sm' | 'md' | 'lg'
 *  dark    — boolean — use white wordmark + white icon for dark backgrounds
 *  iconOnly — boolean — render only the icon mark without the wordmark
 *  className
 */

const sizeConfig = {
  sm: { iconSize: 24, fontSize: 18, gap: 7 },
  md: { iconSize: 32, fontSize: 22, gap: 9 },
  lg: { iconSize: 42, fontSize: 30, gap: 12 },
};

function StolikLogo({ size = 'md', dark = false, iconOnly = false, className = '' }) {
  const { iconSize, fontSize, gap } = sizeConfig[size] ?? sizeConfig.md;

  const iconColor   = '#006BFF';
  const wordmarkColor = dark ? '#FFFFFF' : '#1A1D23';
  const totalHeight = iconSize;

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap, height: totalHeight }}
      aria-label="Stolik"
      role="img"
    >
      {/* ── Icon mark: plate + fork + knife ── */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Plate circle */}
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke={iconColor}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Inner plate ring */}
        <circle
          cx="20"
          cy="20"
          r="8.5"
          stroke={iconColor}
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
        {/* Fork — left of plate */}
        <line x1="6" y1="9" x2="6" y2="19" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="9" x2="4" y2="14" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="9" x2="8" y2="14" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="19" x2="6" y2="31" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        {/* Knife — right of plate */}
        <path
          d="M34 9 C34 9 36 12 36 16 C36 18 35 19 34 19 L34 31"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* ── Wordmark ── */}
      {!iconOnly && (
        <svg
          height={totalHeight}
          viewBox={`0 0 ${fontSize * 3.6} ${fontSize * 1.3}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ overflow: 'visible' }}
        >
          <text
            x="0"
            y={fontSize * 1.02}
            fontFamily='"Plus Jakarta Sans", system-ui, sans-serif'
            fontWeight="800"
            fontSize={fontSize}
            fill={wordmarkColor}
            letterSpacing="-0.03em"
          >
            stolik
          </text>
        </svg>
      )}
    </span>
  );
}

export default StolikLogo;
