"use client";

import React, { useState } from "react";

interface Node {
  id: number;
  label: string;
  x: number; // percentage width
  y: number; // percentage height
  connections: number[];
  detail: string;
  wide?: boolean;
}

export default function ServiceNodesAnimation() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Reverted coordinates back to original spacing values
  const nodes: Node[] = [
    {
      id: 1,
      label: "Partnerships",
      x: 18,
      y: 16,
      connections: [0, 2, 4],
      detail: "Partnership Conversations",
    },
    {
      id: 2,
      label: "B2B SaaS Growth",
      x: 80,
      y: 14,
      connections: [0, 1, 5],
      detail: "B2B SaaS Growth Conversations",
    },
    {
      id: 3,
      label: "Integrations & Data",
      x: 50,
      y: 6,
      connections: [0, 1, 2],
      detail: "Integration & Data Partnerships",
      wide: true,
    },
    {
      id: 4,
      label: "Affiliates & Referrals",
      x: 14,
      y: 52,
      connections: [0, 1, 6],
      detail: "Affiliate & Referral Programs",
    },
    {
      id: 5,
      label: "Agency Ecosystems",
      x: 84,
      y: 48,
      connections: [0, 2, 8],
      detail: "Agency & Consultant Ecosystems",
    },
    {
      id: 6,
      label: "Strategic Intros",
      x: 22,
      y: 76,
      connections: [0, 4, 7],
      detail: "Strategic Introductions & Alliances",
    },
    {
      id: 7,
      label: "Advisory Inquiries",
      x: 50,
      y: 96,
      connections: [0, 6, 8],
      detail: "Selective Advisory & Board Inquiries",
      wide: true,
    },
    {
      id: 8,
      label: "Speaking & Content",
      x: 78,
      y: 76,
      connections: [0, 5, 7],
      detail: "Speaking, Podcast, or Content Requests",
    },
    {
      id: 0, // Central Hub
      label: "Marc Gaudett Hub",
      x: 50,
      y: 50,
      connections: [1, 2, 3, 4, 5, 6, 7, 8],
      detail: "Revenue & Growth Strategy",
    },
  ];

  // Helper to check if a link connects to the hovered node
  const isLinkActive = (n1: number, n2: number) => {
    if (hoveredNode === null) return true;
    return n1 === hoveredNode || n2 === hoveredNode;
  };

  // Helper to check if a node is connected to the hovered node
  const isNodeActive = (nodeId: number) => {
    if (hoveredNode === null) return true;
    if (nodeId === hoveredNode) return true;
    // Central node connects to all
    if (hoveredNode === 0) return true;
    if (nodeId === 0) return true;
    // Check if the hovered node contains nodeId in its connections
    const hNode = nodes.find((n) => n.id === hoveredNode);
    return hNode?.connections.includes(nodeId) || false;
  };

  // Generate links to draw in SVG
  const links: { from: Node; to: Node }[] = [];
  nodes.forEach((node) => {
    node.connections.forEach((targetId) => {
      // Avoid duplicate lines (only draw from lower ID to higher ID)
      if (node.id < targetId) {
        const targetNode = nodes.find((n) => n.id === targetId);
        if (targetNode) {
          links.push({ from: node, to: targetNode });
        }
      }
    });
  });

  return (
    <div className="relative w-full h-[400px] lg:h-[480px] bg-[#070b14] rounded-[24px] border border-white/5 overflow-hidden select-none">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] opacity-25"></div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Padded Content Wrapper to dynamically prevent labels from clipping at the border */}
      <div className="absolute inset-x-10 inset-y-8 md:inset-x-14 md:inset-y-10 z-10">
        {/* SVG Canvas for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Draw base lines */}
          {links.map((link, idx) => {
            const active = isLinkActive(link.from.id, link.to.id);
            return (
              <line
                key={`base-${idx}`}
                x1={`${link.from.x}%`}
                y1={`${link.from.y}%`}
                x2={`${link.to.x}%`}
                y2={`${link.to.y}%`}
                className="transition-all duration-300"
                stroke={active ? (hoveredNode !== null ? "#3b82f6" : "rgba(255,255,255,0.08)") : "rgba(255,255,255,0.02)"}
                strokeWidth={active && hoveredNode !== null ? "2" : "1"}
              />
            );
          })}

          {/* Draw animated pulsing packages along active lines */}
          {links.map((link, idx) => {
            const active = isLinkActive(link.from.id, link.to.id);
            if (!active) return null;
            return (
              <path
                key={`pulse-${idx}`}
                d={`M ${link.from.x}% ${link.from.y}% L ${link.to.x}% ${link.to.y}%`}
                stroke={hoveredNode !== null ? "#60a5fa" : "#3b82f6"}
                strokeWidth="1.5"
                strokeDasharray="6, 30"
                fill="none"
                className="pulse-path"
                style={{
                  strokeDashoffset: hoveredNode !== null ? 60 : 100,
                  opacity: hoveredNode !== null ? 0.8 : 0.4,
                }}
              />
            );
          })}
        </svg>

        {/* HTML absolute overlay for badges */}
        <div className="absolute inset-0 w-full h-full">
          {nodes.map((node) => {
            const isCenter = node.id === 0;
            const active = isNodeActive(node.id);
            const hovered = hoveredNode === node.id;

            // Different floating delays for organic look
            const floatDelay = `${node.id * 0.7}s`;

            if (isCenter) {
              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
                    active ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white transition-all duration-300 ${
                      hovered
                        ? "scale-110 shadow-[0_0_35px_rgba(59,130,246,0.8)] bg-blue-500"
                        : "shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px] font-bold">
                      hub
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mt-2 bg-black/60 px-2 py-0.5 rounded-full border border-blue-500/20">
                    Focus Hub
                  </span>
                </div>
              );
            }

            return (
              <div
                key={node.id}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  animation: "nodeFloat 6s ease-in-out infinite",
                  animationDelay: floatDelay,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`absolute transition-all duration-300 ease-out select-none ${
                  active ? "opacity-100 scale-100" : "opacity-30 scale-95"
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 ${node.wide ? "px-5" : "px-3"} py-1.5 rounded-full backdrop-blur-md transition-all duration-300 text-center ${
                    hovered
                      ? "bg-blue-600/95 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105"
                      : "bg-white/5 border border-white/10 text-gray-200 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[14px] transition-colors ${
                      hovered ? "text-white" : "text-blue-400"
                    }`}
                  >
                    check_circle
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
                    {node.label}
                  </span>
                </div>

                {/* Tooltip detail description on desktop hover */}
                {hovered && (
                  <div className={`absolute left-1/2 -translate-x-1/2 bg-[#0f172a] text-white border border-blue-500/30 text-[10px] px-2.5 py-1.5 rounded-lg shadow-xl w-44 z-50 pointer-events-none text-center leading-normal animate-fadeIn ${node.y > 60 ? "bottom-9" : "top-9"}`}>
                    {node.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Instructions/Indicator (Empty per user custom edit) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/5 text-[10px] text-gray-400 font-medium select-none pointer-events-none">
      </div>

      {/* Dynamic Keyframes injected locally */}
      <style>{`
        @keyframes nodeFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 5px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .pulse-path {
          stroke-dashoffset: 100%;
          animation: strokePulse 3s linear infinite;
        }
        @keyframes strokePulse {
          0% { stroke-dashoffset: 360; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
