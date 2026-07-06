"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceNodesAnimation from "@/components/ServiceNodesAnimation";

export default function HomeClient() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-2 px-4 md:px-6">
        {/* Hero Section */}
        <div
          id="hero"
          className="hero-card max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm relative overflow-hidden mb-6 flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Operator Notebook
              </span>
              <h1 className="font-hero text-[40px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-gray-900 leading-[1.05] tracking-tight">
                Marc Gaudett
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-800 font-semibold leading-snug max-w-xl">
                Building revenue infrastructure for B2B SaaS companies.
              </h2>
              <div className="font-body-lg text-sm lg:text-base text-gray-500 flex flex-col gap-4 max-w-2xl leading-relaxed">
                <p>
                  I focus on creating distribution leverage through partnerships, integrations, data GTM motions, creator programs, affiliates, referrals, outbound GTM systems, and emerging AI search/AEO channels.
                </p>
                <p>
                  This site functions as a public proof-of-work hub and operator's notebook where I share practical thinking on how SaaS companies connect product, trust, and market GTM systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <Link
                  href="/focus-areas"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 text-sm"
                >
                  View Focus Areas <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/notes"
                  className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all cursor-pointer text-sm"
                >
                  Read Notes
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

        {/* 4-Card Selected Work (Understated Proof) Grid */}
        <div
          id="experience"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 reveal"
        >
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Work 01</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Programs</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                Designed and scaled partnership programs producing multi-7-figure revenue gains across various B2B SaaS environments.
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

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Work 02</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Outbound Pipelines</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                Helped improve lead flow 7x in 3 months through data-driven outbound pipelines, targeted triggers, and clean enrichment loops.
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

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all h-[290px]">
            <div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-3">Selected Work 03</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affiliate &amp; Referral</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                Designed incentive structures and attribution systems for double-sided referral engines and creator/affiliate programs.
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

          {/* Card 4 (Highlight Dark Card) */}
          <div className="bg-[#0b1322] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[290px] border border-white/5">
            <div>
              <span className="text-[11px] text-blue-300 font-bold uppercase tracking-wider block mb-3">Selected Work 04</span>
              <h3 className="text-xl font-bold text-white mb-2">Ecosystem &amp; Data</h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                Led GTM data provider evaluation and API integration ecosystem strategy to streamline platform-level distribution.
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

        {/* Short Operator Introduction (About Marc) */}
        <div
          id="about"
          className="scroll-mt-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center my-20 md:my-28 reveal"
        >
          {/* Left Column: Photo Card */}
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
              Operator Profile
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-section-title text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
              About Marc
            </h2>
            <div className="font-body-lg text-base text-gray-500 flex flex-col gap-5 leading-relaxed">
              <p>
                I am a GTM operator who helps SaaS companies create distribution leverage. Over the past 15 years, I have built partnership programs, aligned API integrations, evaluated GTM data providers, and structured outbound pipelines.
              </p>
              <p>
                Currently, I design data and integration partnerships at scale inside one of the fastest-growing outbound software platforms in B2B SaaS.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View Profile <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Focus Areas Preview (Premium Dark Bento Box) */}
        <div
          id="portfolio"
          className="scroll-mt-24 max-w-7xl mx-auto bg-[#0a0f1d] text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-lg border border-white/5 my-20 md:my-28 reveal"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 w-[500px] h-[500px] rounded-full blur-[120px] -top-60 -right-60 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[11px] text-blue-400 font-bold uppercase tracking-widest block">Focus Areas Preview</span>
              <h2 className="font-section-title text-[32px] md:text-[40px] font-bold text-white leading-tight">
                Aligning GTM systems, integrations, and distribution.
              </h2>
              <div className="font-body-lg text-sm md:text-base text-gray-300 flex flex-col gap-4 leading-relaxed">
                <p>
                  Some of the best growth opportunities in B2B SaaS do not come from more ads or higher outreach volumes. They come from embedding your product where trust already exists.
                </p>
                <p>
                  I treat partnerships, API integrations, and referral networks as revenue infrastructure: systems that connect product value, transparent attribution, and buyer demand.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/focus-areas"
                  className="bg-blue-600 text-white text-xs px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all text-center inline-block"
                >
                  View Focus Areas
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Network Animation */}
            <div className="lg:col-span-6 w-full">
              <ServiceNodesAnimation />
            </div>
          </div>
        </div>

        {/* Two Column Grid: Newsletter & Selected Notes Preview */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 my-20 md:my-28 reveal">
          {/* Newsletter Box - Left Column */}
          <div className="lg:col-span-5 bg-[#0a0f1d] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent w-72 h-72 rounded-full blur-[80px] -top-20 -right-20 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4">
              <span className="text-[11px] text-blue-400 font-bold uppercase tracking-widest block">Newsletter</span>
              <h3 className="text-2xl font-bold text-white">Revenue Infrastructure Notes</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                A short weekly note on how B2B SaaS companies create revenue through partnerships, data, integrations, affiliates, referrals, outbound, and GTM systems.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              {subscribed ? (
                <div className="bg-white/5 border border-emerald-500/30 rounded-xl p-4 text-center text-emerald-400 font-semibold text-sm">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                  {/* Connects seamlessly to Kit/ConvertKit, beehiiv, or Substack form actions */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-center text-sm"
                  >
                    Join Notes
                  </button>
                </form>
              )}
              <p className="text-[10px] text-gray-500 mt-2.5 text-center">
                Prepared for Kit, Beehiiv &amp; Substack integrations.
              </p>
            </div>
          </div>

          {/* Notes Preview List - Right Column */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">Latest Notes</span>
                <Link
                  href="/notes"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5"
                >
                  Archive <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="py-4 first:pt-0">
                  <Link href="/notes/why-most-data-partnerships-fail" className="group">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                      Why most data partnerships fail before pricing is even discussed
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      Data alignment, target profiles, and integration friction matter far more than the price tag.
                    </p>
                  </Link>
                </div>
                <div className="py-4">
                  <Link href="/notes/byok-vs-central-integrations" className="group">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                      How to think about BYOK vs centrally routed integrations
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      Decoupling client credentials from central middleware for security, cost, and latency leverage.
                    </p>
                  </Link>
                </div>
                <div className="py-4 last:pb-0">
                  <Link href="/notes/thinking-about-revenue-infrastructure" className="group">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                      How to think about revenue infrastructure in B2B SaaS
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      A foundational blueprint for connecting APIs, outbound pipelines, referral loops, and partnerships.
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <Link
                href="/notes"
                className="bg-black text-white text-xs px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-center"
              >
                View Notes Archive
              </Link>
            </div>
          </div>
        </div>

        {/* Soft Contact CTA */}
        <div
          id="contact"
          className="scroll-mt-24 max-w-7xl mx-auto bg-white border border-gray-100 rounded-[40px] p-8 md:p-20 text-center flex flex-col items-center justify-center gap-6 mt-20 mb-10 md:mt-28 md:mb-12 reveal shadow-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <AnimatedBackground />
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase block">Compare Notes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Start a thoughtful conversation.
            </h2>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg">
              If you are building in B2B SaaS, partnerships, integrations, data, outbound, or partner-led distribution, feel free to reach out with context. I am always open to thoughtful conversations, relevant opportunities, and useful introductions.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer text-center"
          >
            Compare Notes <span className="material-symbols-outlined text-[18px]">north_east</span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
