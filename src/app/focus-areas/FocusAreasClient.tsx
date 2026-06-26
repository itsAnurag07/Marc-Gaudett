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

  const handleScrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `/#${id}`;
    }
  };

  const focusAreas = [
    {
      title: "Partner-Led Growth",
      description:
        "Building revenue through partners, referrals, affiliates, agencies, consultants, data partners, integration partners, and ecosystem relationships.",
      icon: "handshake",
      delay: "0ms",
    },
    {
      title: "Affiliate & Referral Programs",
      description:
        "Designing and improving programs that help companies turn customers, creators, affiliates, agencies, and strategic partners into a more reliable source of revenue.",
      icon: "hub",
      delay: "50ms",
    },
    {
      title: "Agency & Consultant Ecosystems",
      description:
        "Helping companies think through how agencies, consultants, operators, and advisors can become stronger distribution partners for B2B software.",
      icon: "groups_3",
      delay: "100ms",
    },
    {
      title: "Integrations & Data Partnerships",
      description:
        "Identifying ways that integration partners, data providers, APIs, marketplaces, and ecosystem relationships can create new revenue, retention, and distribution leverage.",
      icon: "integration_instructions",
      delay: "150ms",
    },
    {
      title: "Outbound & GTM Systems",
      description:
        "Connecting outbound, partnerships, content, referrals, data, and strategic relationships into a more practical revenue system.",
      icon: "rocket_launch",
      delay: "200ms",
    },
    {
      title: "Strategic Partnerships",
      description:
        "Working through where the right relationship, channel, partner, or commercial structure can create leverage that would be hard to build through direct sales alone.",
      icon: "architecture",
      delay: "250ms",
    },
  ];

  return (
    <>
      <Navbar onScrollToSection={handleScrollToSection} />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Hero Card Container (White Shell) */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Focus Areas
            </h1>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              These are the areas I spend most of my time working in across B2B SaaS, partnerships, growth, and revenue systems. The common thread is simple: finding practical ways to create revenue through trust, distribution, data, relationships, and systems.
            </p>
          </div>
        </section>

        {/* Focus Areas Bento Grid */}
        <section className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: area.delay }}
                className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm fade-in-on-scroll hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[280px]"
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

            {/* AI & Data-Driven Growth (Full Width Highlight in bento style) */}
            <div
              style={{ transitionDelay: "300ms" }}
              className="lg:col-span-3 bg-[#0b1322] text-white p-8 md:p-12 rounded-[24px] shadow-sm fade-in-on-scroll flex flex-col md:flex-row md:items-center gap-8 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>
                  memory
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI &amp; Data-Driven Growth
                </h3>
                <p className="text-gray-300 text-base max-w-4xl leading-relaxed">
                  Exploring how AI, data, automation, enrichment, and workflow tools can improve GTM systems, partner motions, and revenue operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <section className="max-w-7xl mx-auto fade-in-on-scroll">
          <div className="bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-16 text-center">
            <p className="text-xl font-bold text-gray-900 max-w-xl mx-auto leading-relaxed mb-8">
              These are the areas I spend most of my time in. Always happy to compare notes.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center block"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer onScrollToSection={handleScrollToSection} />
    </>
  );
}
