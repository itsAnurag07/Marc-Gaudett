"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const pathname = usePathname();

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    if (pathname === "/") {
      if (id === "contact" || id === "focus-areas") return; // standard Link
      e.preventDefault();
      onScrollToSection(id);
    }
  };

  return (
    <footer className="bg-surface border-t border-outline-variant/20 w-full py-16">
      <div className="max-w-container-max mx-auto px-margin-page flex flex-col md:flex-row justify-between items-start gap-stack-lg">
        <div className="space-y-stack-md">
          <span className="font-heading text-heading font-semibold text-primary">Marc Gaudett</span>
          <p className="font-body-md text-body-md text-secondary max-w-xs">
            Partner-led growth, integrations, data partnerships, and B2B SaaS revenue strategy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-gutter md:gap-16">
          <div className="space-y-4">
            <p className="font-label text-label uppercase tracking-widest text-secondary">Navigation</p>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link
                  className="font-body-md text-body-md text-secondary hover:text-primary transition-colors cursor-pointer"
                  href="/#about"
                  onClick={(e) => handleNavClick("about", e)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`font-body-md text-body-md transition-colors cursor-pointer ${
                    pathname === "/focus-areas" ? "text-primary font-medium" : "text-secondary hover:text-primary"
                  }`}
                  href="/focus-areas"
                  onClick={(e) => handleNavClick("focus-areas", e)}
                >
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link
                  className={`font-body-md text-body-md transition-colors cursor-pointer ${
                    pathname === "/contact" ? "text-primary font-medium" : "text-secondary hover:text-primary"
                  }`}
                  href="/contact"
                  onClick={(e) => handleNavClick("contact", e)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="font-label text-label uppercase tracking-widest text-secondary">Network</p>
            <ul className="space-y-2 flex flex-col">
              <li>
                <a
                  className="font-body-md text-body-md text-secondary hover:text-primary transition-colors block"
                  href="https://www.linkedin.com/in/marcgaudett/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:text-right space-y-stack-md w-full md:w-auto border-t md:border-t-0 border-outline-variant/20 pt-stack-lg md:pt-0">
          <p className="font-body-md text-body-md text-secondary">
            © {new Date().getFullYear()} Marc Gaudett. All rights reserved.
          </p>
          <div className="flex md:justify-end gap-stack-md items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-label text-label text-secondary">Currently accepting new engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
