"use client";

import React from "react";

interface FooterProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-transparent w-full py-6">
      <div className="w-full px-[15%]">
        <div className="border-t border-[#c5c1b9] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-[#6b6861] font-sans">
          <div>
            © {new Date().getFullYear()} Marc Gaudett
          </div>
          <div className="flex items-center gap-2">
            <span>Views are my own.</span>
            <a
              href="https://www.linkedin.com/in/marcgaudett/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
