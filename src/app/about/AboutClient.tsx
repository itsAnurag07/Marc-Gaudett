"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";

export default function AboutClient() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
      // Check immediately on mount in case elements are already in view
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const operatingPrinciples = [
    {
      title: "Leverage over headcount",
      description:
        "Building distribution through integrations, partnerships, and referral networks allows SaaS companies to scale revenue efficiently without linear headcount growth.",
    },
    {
      title: "Workflow-first integrations",
      description:
        "An integration only drives user retention and expansion if it fits naturally into their existing day-to-day workflow, rather than being built for vendor marketing hype.",
    },
    {
      title: "Data-driven precision",
      description:
        "Outbound pipelines succeed when they are based on high-quality targeting, dynamic data enrichment, and strict compliance, not raw email volume.",
    },
    {
      title: "Radical incentive alignment",
      description:
        "Affiliate and partner motions thrive long-term when there is complete trust, transparent attribution infrastructure, and double-sided incentives.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Main Operator Shell */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Headline & Bio */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Operator Profile
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Marc Gaudett
              </h1>
              <h2 className="text-xl font-semibold text-gray-700 max-w-xl">
                I help B2B SaaS companies align their product value with strategic distribution networks.
              </h2>
              <div className="font-body-lg text-base text-gray-500 flex flex-col gap-5 leading-relaxed max-w-2xl">
                <p>
                  Over the past 15 years, I have worked as a growth operator, focusing on GTM systems, outbound mechanics, data alignment, and partnerships. I build the systems that help software companies capture market opportunities without over-complicating their operations.
                </p>
                <p>
                  Currently, I lead data ecosystems and integration partnerships at one of the fastest-growing outbound sales platforms in the SaaS industry. In this role, I work at the intersection of developer teams, API providers, and GTM stakeholders to ship high-leverage data integrations.
                </p>
                <p>
                  This site is a quiet notebook containing practical, operator-led lessons. My goal is to serve as a useful resource for founders, product leads, and growth operators looking to design better revenue infrastructure.
                </p>
              </div>
              <div className="mt-5 border-t border-gray-100 pt-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Current Focus Areas</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    API &amp; Data Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    BYOK Integration Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    Outbound &amp; Data GTM Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    Emerging AI Search Optimization (AEO)
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[580px] rounded-[24px] overflow-hidden shadow-sm bg-[#7b8f96]">
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
        </section>

        {/* Operating Philosophy / Values */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 lg:p-16 mb-8 fade-in-on-scroll">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Operating Principles
            </h2>
            <p className="text-gray-500 mt-4 text-base md:text-lg">
              Software is only half the battle. How it interfaces with data, outbound channels, integrations, and third-party incentives dictates whether it actually captures revenue. I operate under a few core beliefs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {operatingPrinciples.map((principle, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup (Page Level Banner) */}
        <section id="newsletter" className="max-w-7xl mx-auto mb-8 fade-in-on-scroll">
          <div className="bg-[#0a0f1d] text-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-sm border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-transparent w-96 h-96 rounded-full blur-[85px] -top-30 -right-30 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl space-y-3 text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">THE NEWSLETTER</span>
              <h3 className="text-2xl font-bold">Receive the next Operator Note.</h3>
              <p className="text-sm text-gray-300">
                One practical note each week on partnerships, integrations, data, distribution and the systems behind SaaS growth.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto shrink-0 md:min-w-[360px] space-y-2">
              <KitNewsletter />
              <p className="text-[10px] text-gray-500 text-center">
                No spam or sales pitches. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
