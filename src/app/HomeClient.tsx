"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceNodesAnimation from "@/components/ServiceNodesAnimation";

export default function HomeClient() {
  // Reveal on scroll logic for smooth animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 96; // 64px navbar height + 32px buffer to prevent any content clipping
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <Navbar onScrollToSection={scrollToSection} />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-2 px-4 md:px-6">
        {/* White Shell Container - Header/Hero wrapper */}
        <div
          id="hero"
          className="hero-card max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm relative overflow-hidden mb-4 flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <h1 className="font-hero text-[40px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-gray-900 leading-[1.05] tracking-tight">
                Marc Gaudett
              </h1>
              <h2 className="text-lg md:text-xl xl:text-2xl text-blue-600 font-semibold leading-snug">
                Partner-led growth, integrations, data partnerships, and B2B SaaS revenue strategy.
              </h2>
              <div className="font-body-lg text-sm lg:text-base text-gray-500 flex flex-col gap-3 max-w-2xl">
                <p>
                  I work at the intersection of partnerships, integrations, data partnerships, affiliates, referrals, outbound, and GTM systems.
                </p>
                <p>
                  Over the last 15+ years, I’ve helped companies create revenue through practical growth systems: partner programs, outbound motions, referral engines, strategic alliances, integration opportunities, and operator-led execution.
                </p>
                <p>
                  Currently operating inside one of the fastest-growing outbound platforms in B2B SaaS, building data partnerships and integration ecosystems at scale.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-1">
                <Link
                  href="/focus-areas"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
                >
                  View Focus Areas <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Portrait */}
            <div className="lg:col-span-5 h-full flex items-center justify-center relative w-full">
              <div className="hero-portrait-wrap rounded-[32px] overflow-hidden shadow-sm bg-[#7b8f96]">
                <Image
                  src="/images/Marc.webp"
                  alt="Marc Gaudett Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Selected Experience Section */}
        <div
          id="experience"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 reveal"
        >
          {/* Card 1: 7-Figure Rev */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Experience 01</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-7-Figure Revenue</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                Built and scaled partnership programs that produced multi-7-figure revenue across various SaaS systems.
              </p>
            </div>
            <div className="flex mt-2">
              <Link
                href="/focus-areas"
                className="bg-black text-white text-xs px-5 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-center block"
              >
                Details
              </Link>
            </div>
          </div>

          {/* Card 2: 7x Outbound */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Experience 02</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">7x Outbound Growth</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                Helped improve lead flow 7x in 3 months through outbound systems and precision outbound pipelines.
              </p>
            </div>
            <div className="flex mt-2">
              <Link
                href="/focus-areas"
                className="bg-black text-white text-xs px-5 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-center block"
              >
                Details
              </Link>
            </div>
          </div>

          {/* Card 3: Cross-Sector */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Experience 03</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Sector GTM</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                Worked across SaaS, data, accessibility, outbound, partnerships, and revenue operations.
              </p>
            </div>
            <div className="flex mt-2">
              <Link
                href="/focus-areas"
                className="bg-black text-white text-xs px-5 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-center block"
              >
                Details
              </Link>
            </div>
          </div>

          {/* Card 4: Multi-Channel */}
          <div className="bg-[#0b1322] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-blue-300 font-bold uppercase tracking-wider block mb-3">Selected Experience 04</span>
              <h3 className="text-xl font-bold text-white mb-2">Multi-Channel GTM</h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                Built systems across affiliate, referral, agency, outbound, integration, and strategic partner motions.
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <Link
                href="/focus-areas"
                className="bg-white text-gray-900 text-xs px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Focus Areas
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white text-xs px-5 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all text-center block"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* About Marc Section */}
        <div
          id="about"
          className="scroll-mt-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center my-20 md:my-28 reveal"
        >
          {/* Left Column: Photo Card with premium details */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[32px] overflow-hidden shadow-sm relative bg-gray-50 max-h-[420px] border border-gray-100 hover:scale-[1.01] transition-all duration-500">
              <Image
                src="/images/collaborative_partnerships.png"
                alt="Business collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-2xl px-5 py-2.5 text-xs font-semibold text-gray-700">
              Operator Profile | B2B SaaS
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-section-title text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
              About Marc
            </h2>
            <div className="font-body-lg text-base text-gray-500 flex flex-col gap-5 leading-relaxed">
              <p>
                Marc Gaudett is a partnerships and growth operator focused on B2B SaaS, partner-led growth, affiliate programs, referral systems, integration partnerships, data partnerships, outbound revenue infrastructure, and GTM systems.
              </p>
              <p>
                He has spent more than 15 years helping companies turn relationships, distribution, data, and GTM systems into revenue. His work has included building partnership programs, improving outbound systems, supporting integration and data partner motions, creating referral systems, and helping companies think more clearly about where revenue can come from next.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 py-1 italic text-gray-700 font-semibold bg-blue-50/50 rounded-r-xl">
                "Marc is especially interested in practical growth systems that create leverage without unnecessary complexity."
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships, Integrations & Data Section (Premium Dark Bento Box) */}
        <div
          id="portfolio"
          className="scroll-mt-24 max-w-7xl mx-auto bg-[#0a0f1d] text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-lg border border-white/5 my-20 md:my-28 reveal"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 w-[500px] h-[500px] rounded-full blur-[120px] -top-60 -right-60 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[11px] text-blue-400 font-bold uppercase tracking-widest block">Revenue Infrastructure</span>
              <h2 className="font-section-title text-[32px] md:text-[40px] font-bold text-white leading-tight">
                Partnerships, Integrations &amp; Data
              </h2>
              <div className="font-body-lg text-sm md:text-base text-gray-300 flex flex-col gap-4 leading-relaxed">
                <p>
                  Some of the best growth opportunities in B2B SaaS do not come from more ads or more cold outreach. They come from better distribution.
                </p>
                <p>
                  That can mean the right affiliate program, the right referral motion, the right agency ecosystem, the right integration partner, or the right data partnership.
                </p>
                <p>
                  I think about partnerships as revenue infrastructure: systems that connect product, data, distribution, trust, and customer demand. The work is usually about finding where a company can create leverage through partner channels, integration opportunities, ecosystem relationships, and data-driven GTM motions.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Interactive Services Network Animation */}
            <div className="lg:col-span-6 w-full">
              <ServiceNodesAnimation />
            </div>
          </div>
        </div>

        {/* Bottom Selective Conversations Section (Minimal Light Glass & Network nodes) */}
        <div
          id="contact"
          className="scroll-mt-24 max-w-7xl mx-auto bg-white border border-gray-100 rounded-[40px] p-8 md:p-20 text-center flex flex-col items-center justify-center gap-6 mt-20 mb-10 md:mt-28 md:mb-12 reveal shadow-sm relative overflow-hidden"
        >
          {/* Dynamic connections network background overlay */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <AnimatedBackground />
          </div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase block">Strategic Engagements</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Selective Conversations
            </h2>
            <p className="text-gray-500 leading-relaxed text-base">
              I collaborate with founders, operators, and companies where there is a clear strategic fit. If you are building something in B2B SaaS, partnerships, affiliate growth, outbound, integrations, data, or partner-led distribution, feel free to reach out with context.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer text-center"
          >
            Start a Conversation <span className="material-symbols-outlined text-[18px]">north_east</span>
          </Link>
        </div>
      </main>

      <Footer onScrollToSection={scrollToSection} />
    </>
  );
}
