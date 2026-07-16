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
    <nav className="fixed top-0 w-full z-50 bg-[#F7F5F0]/90 backdrop-blur-sm transition-all duration-300">
      <div className="w-full px-[15%]">
        <div className="flex justify-between items-center h-[80px] border-b border-[#c5c1b9]">
          <Link
            className="font-georgia text-[16px] font-semibold text-[#171714] hover:opacity-70 transition-opacity"
            href="/"
            onClick={handleNavClick}
          >
            Marc Gaudett
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const linkClass = `font-sans text-[14px] transition-all cursor-pointer text-[#171714] ${isActive
                  ? "font-semibold"
                  : "font-normal hover:opacity-70"
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
              className="px-4 py-[6px] bg-[#1a1a1a] text-white hover:bg-[#333] rounded-full text-[14px] font-semibold transition-all cursor-pointer"
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
            <span className="material-symbols-outlined text-[24px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full bg-[#F7F5F0] border-b border-black/12 transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  className="font-body-md text-base transition-colors py-2 border-b border-gray-50 cursor-pointer text-gray-600 hover:text-black"
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
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
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
            className="w-full bg-black text-white py-3 rounded-full text-base font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98] text-center block"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
