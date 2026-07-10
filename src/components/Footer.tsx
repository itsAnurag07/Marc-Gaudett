"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const pathname = usePathname();

  return (
    <footer className="bg-surface border-t border-outline-variant/20 w-full py-16">
      <div className="max-w-container-max mx-auto px-margin-page flex flex-col md:flex-row justify-between items-start gap-stack-lg">
        <div className="space-y-stack-md">
          <span className="font-heading text-heading font-semibold text-primary">Marc Gaudett</span>
          <p className="font-body-md text-body-md text-secondary max-w-xs">
            Operator Notes on SaaS growth and distribution.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-gutter md:gap-16">
          <div className="space-y-4">
            <p className="font-label text-label uppercase tracking-widest text-secondary">Navigation</p>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link
                  className={`font-body-md text-body-md transition-colors cursor-pointer ${
                    pathname === "/about" ? "text-primary font-medium" : "text-secondary hover:text-primary"
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`font-body-md text-body-md transition-colors cursor-pointer ${
                    pathname === "/notes" ? "text-primary font-medium" : "text-secondary hover:text-primary"
                  }`}
                  href="/notes"
                >
                  Operator Notes
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
          <p className="text-xs text-secondary leading-relaxed text-right max-w-xs ml-auto">
            Views shared here are my own and do not represent any current or former employer.
          </p>
        </div>
      </div>
    </footer>
  );
}
