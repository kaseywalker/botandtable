import React from "react";

// Responsive, modern black iPad Pro (portrait view, no branding)
const IpadMockup = ({ className = "", style = {}, children }) => (
  <div className={`flex justify-center w-full ${className}`} style={style}>
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: 640, width: "100%", height: "auto", display: "block" }}
      aria-label="iPad Pro Mockup"
    >
      <defs>
        <radialGradient id="ipad-shadow" cx="50%" cy="95%" r="60%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ipad-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23272F" />
          <stop offset="100%" stopColor="#111216" />
        </linearGradient>
        <linearGradient id="ipad-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23242a" />
          <stop offset="100%" stopColor="#18191C" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="200" cy="590" rx="140" ry="22" fill="url(#ipad-shadow)" />
      {/* Frame */}
      <rect x="16" y="16" width="368" height="568" rx="44" fill="url(#ipad-frame)" stroke="#222" strokeWidth="3" />
      {/* Screen */}
      <rect x="36" y="38" width="328" height="528" rx="28" fill="url(#ipad-screen)" />
      {/* Children inside the screen */}
      <foreignObject x="36" y="38" width="328" height="528">
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </foreignObject>
      {/* Camera (top center) */}
      <rect x="190" y="28" width="20" height="6" rx="3" fill="#222" />
      {/* Home indicator (bottom center, for modern iPad) */}
      <rect x="170" y="560" width="60" height="8" rx="4" fill="#333" opacity="0.7" />
    </svg>
  </div>
);

export default IpadMockup; 