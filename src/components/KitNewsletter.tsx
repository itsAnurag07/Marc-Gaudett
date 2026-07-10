"use client";

import React, { useEffect, useRef } from "react";

export default function KitNewsletter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing children to prevent duplication on HMR / navigation
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://marcgaudett.kit.com/db36f008f0/index.js";
    script.async = true;
    script.setAttribute("data-uid", "db36f008f0");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="kit-newsletter-container w-full min-h-[80px]"
    />
  );
}
