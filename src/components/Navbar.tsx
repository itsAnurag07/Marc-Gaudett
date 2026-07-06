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
    { label: "About", href: "/about" },
    { label: "Notes", href: "/notes" },
    { label: "Focus Areas", href: "/focus-areas" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
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
            return (
              <Link
                key={item.href}
                className={`font-body-md text-sm transition-colors cursor-pointer pb-1 ${isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
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
            href="/contact"
            onClick={handleNavClick}
            className={`ml-1 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] block text-center ${
              pathname === "/contact"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Start a Conversation
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
            href="/contact"
            onClick={handleNavClick}
            className="w-full bg-blue-600 text-white py-3.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-[0.98] text-center block"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </nav>
  );
}
