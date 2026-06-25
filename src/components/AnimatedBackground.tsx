"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none select-none">
      <svg
        fill="none"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <style>{`
          .node { fill: #111827; }
          .link { stroke: #E5E7EB; stroke-width: 1.5; }
          .pulse { animation: pulse 4s infinite ease-in-out; transform-origin: center; }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
        `}</style>
        {/* Background Nodes/Lines */}
        <path className="link" d="M100 100 L300 150 L500 100 L700 200" />
        <path className="link" d="M300 150 L250 400 L500 500 L600 300 L700 200" />
        <path className="link" d="M100 100 L150 300 L250 400" />
        <path className="link" d="M500 100 L600 300" />
        <path className="link" d="M150 300 L600 300" />
        
        {/* Nodes */}
        <circle className="node" cx="100" cy="100" r="4" />
        <circle className="node" cx="300" cy="150" r="5" />
        <circle className="node" cx="500" cy="100" r="4" />
        <circle className="node" cx="700" cy="200" r="6" />
        <circle className="node" cx="150" cy="300" r="5" />
        <circle className="node" cx="600" cy="300" r="7" />
        <circle className="node" cx="250" cy="400" r="4" />
        <circle className="node" cx="500" cy="500" r="5" />
        
        {/* Subtle Pulsing Highlight Nodes */}
        <circle className="pulse" cx="600" cy="300" fill="#111827" fillOpacity="0.1" r="12" style={{ transformOrigin: "600px 300px" }} />
        <circle className="pulse" cx="300" cy="150" fill="#111827" fillOpacity="0.1" r="10" style={{ animationDelay: "1s", transformOrigin: "300px 150px" }} />
        <circle className="pulse" cx="150" cy="300" fill="#111827" fillOpacity="0.1" r="8" style={{ animationDelay: "2s", transformOrigin: "150px 300px" }} />
      </svg>
    </div>
  );
}
