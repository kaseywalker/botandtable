import React from "react";

// Responsive, modern 2025 MacBook Pro vector mockup (no branding)
const MacbookProMockup = ({ className = "", style = {}, children }) => (
  <div className={`flex justify-center w-full ${className}`} style={style}>
    <svg
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: 900, width: "100%", height: "auto", display: "block" }}
      aria-label="MacBook Pro 2025 Mockup"
    >
      <defs>
        <radialGradient id="mbp-shadow" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mbp-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23272F" />
          <stop offset="100%" stopColor="#181A1B" />
        </linearGradient>
        <linearGradient id="mbp-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23242a" />
          <stop offset="100%" stopColor="#18191C" />
        </linearGradient>
        <linearGradient id="mbp-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="450" cy="590" rx="340" ry="22" fill="url(#mbp-shadow)" />
      {/* Body */}
      <rect x="60" y="80" width="780" height="420" rx="32" fill="url(#mbp-body)" stroke="#222" strokeWidth="3" />
      {/* Screen Bezel */}
      <rect x="90" y="110" width="720" height="360" rx="18" fill="url(#mbp-bezel)" />
      {/* Screen */}
      <rect x="110" y="130" width="680" height="320" rx="12" fill="url(#mbp-screen)" />
      {/* Children inside the screen */}
      <foreignObject x="110" y="130" width="680" height="320">
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </foreignObject>
      {/* Camera (centered on top bezel) */}
      <rect x="440" y="120" width="20" height="6" rx="3" fill="#222" />
      {/* Keyboard area (simple, stylized) */}
      <rect x="120" y="470" width="660" height="40" rx="8" fill="#23272F" opacity="0.85" />
      {/* Trackpad */}
      <rect x="370" y="480" width="160" height="22" rx="6" fill="#333" opacity="0.7" />
    </svg>
  </div>
);

export default MacbookProMockup; 