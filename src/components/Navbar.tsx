"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Operator Notes", href: "/notes" },
    { label: "About", href: "/about" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marcgaudett/", external: true },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleSubscribeClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    const element = document.getElementById("newsletter");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
          href="/"
          onClick={handleNavClick}
        >
          <span>Marc Gaudett</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const linkClass = `font-body-md text-sm transition-all cursor-pointer pb-1 border-b-2 ${
              isActive
                ? "text-blue-600 font-semibold border-blue-600"
                : "text-gray-600 hover:text-blue-600 border-transparent"
            }`;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  className={linkClass}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                className={linkClass}
                href={item.href}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#newsletter"
            onClick={handleSubscribeClick}
            className="ml-1 px-5 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full text-sm font-semibold transition-all cursor-pointer block text-center shadow-sm"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  className="font-body-md text-base transition-colors py-2 border-b border-gray-50 cursor-pointer text-gray-600 hover:text-blue-600"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                className={`font-body-md text-base transition-colors py-2 border-b border-gray-50 cursor-pointer ${isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
                  }`}
                href={item.href}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#newsletter"
            onClick={handleSubscribeClick}
            className="w-full border border-blue-600 text-blue-600 py-3 rounded-full text-base font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-[0.98] text-center block"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
