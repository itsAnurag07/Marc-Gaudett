"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FocusAreasClient() {
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
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const focusAreas = [
    {
      title: "Partnerships",
      description:
        "Building and scaling channel programs, agency alliances, and ecosystem distribution models that generate sustainable co-selling pipeline.",
      icon: "handshake",
      delay: "0ms",
    },
    {
      title: "Integrations",
      description:
        "Designing integration loops and API distributions that align directly with actual user habit workflows to maximize product retention.",
      icon: "integration_instructions",
      delay: "50ms",
    },
    {
      title: "Data Partnerships",
      description:
        "Evaluating data suppliers, checking compliance footprints, and mapping raw account intelligence into real-time GTM campaigns.",
      icon: "database",
      delay: "100ms",
    },
    {
      title: "Affiliates",
      description:
        "Structuring commission systems and custom co-marketing tracks for SaaS operators and creators to generate trusted inbound traffic.",
      icon: "hub",
      delay: "150ms",
    },
    {
      title: "Referrals",
      description:
        "Designing double-sided incentive structures and attribution systems that turn existing customer satisfaction into low-friction warm intros.",
      icon: "groups",
      delay: "200ms",
    },
    {
      title: "Outbound",
      description:
        "Connecting data enrichment pipelines, deliverability protocols, and targeted outreach mechanisms to scale outbound sales volume cleanly.",
      icon: "rocket_launch",
      delay: "250ms",
    },
    {
      title: "GTM Systems",
      description:
        "Building the underlying database schemas, trigger structures, and CRM automation that link direct outreach, APIs, and partner tracking.",
      icon: "architecture",
      delay: "300ms",
    },
    {
      title: "AI Search / AEO",
      description:
        "Analyzing and optimizing how B2B SaaS solutions are cited and recommended by LLM agents, citation engines, and modern conversational interfaces.",
      icon: "explore",
      delay: "350ms",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Hero Card Container (White Shell) */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Expertise
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Focus Areas
            </h1>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              These are the individual areas of expertise I bring when building revenue infrastructure for B2B SaaS companies. The objective is always GTM leverage: aligning systems, partners, and data to drive pipeline.
            </p>
          </div>
        </section>

        {/* Focus Areas Bento Grid */}
        <section className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: area.delay }}
                className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm fade-in-on-scroll hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                    <span className="material-symbols-outlined text-[24px]">
                      {area.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Note */}
        <section className="max-w-7xl mx-auto fade-in-on-scroll">
          <div className="bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-16 text-center">
            <p className="text-xl font-bold text-gray-900 max-w-xl mx-auto leading-relaxed mb-8">
              Always open to comparing notes on revenue systems.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center block text-sm"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
