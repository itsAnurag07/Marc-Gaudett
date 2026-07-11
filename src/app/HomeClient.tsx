"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";
import { NOTES_DATA } from "@/data/notes";

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

  const handleSubscribeScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("newsletter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-2 px-4 md:px-6 space-y-6">
        {/* Hero Section */}
        <div
          id="hero"
          className="hero-card max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm relative overflow-hidden flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                OPERATOR NOTES
              </span>
              <h1 className="font-hero text-[40px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-gray-900 leading-[1.05] tracking-tight">
                Practical notes on building growth and distribution in SaaS.
              </h1>
              <div className="font-body-lg text-sm lg:text-base text-gray-500 max-w-2xl leading-relaxed">
                <p>
                  I write about partnerships, integrations, data, affiliates, referrals, outbound and the systems that turn them into sustainable revenue.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <Link
                  href="/notes"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 text-sm"
                >
                  Read Operator Notes <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a
                  href="#newsletter"
                  onClick={handleSubscribeScroll}
                  className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all cursor-pointer text-sm"
                >
                  Subscribe
                </a>
              </div>
              <p className="text-xs text-gray-400 font-normal italic">
                Lessons and observations from more than 15 years of building growth, partnership and revenue systems.
              </p>
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

        {/* Latest Operator Notes Section */}
        <section id="notes" className="max-w-7xl mx-auto my-20 md:my-28 reveal px-4">
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              LATEST WRITING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Latest Operator Notes
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Practical observations from the work of building partnerships, integrations, data products and modern revenue systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {NOTES_DATA.slice(0, 3).map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[280px] group cursor-pointer"
              >
                <div>
                  <span className="text-[11px] text-blue-600 font-bold uppercase tracking-widest block mb-4">
                    {note.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                    {note.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center text-xs text-gray-400">
                  <div className="flex gap-2">
                    <span>{note.date}</span>
                    <span>•</span>
                    <span>{note.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/notes"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 font-body-md"
            >
              View all Operator Notes <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section
          id="newsletter"
          className="max-w-7xl mx-auto my-20 md:my-28 reveal px-4"
        >
          <div className="bg-[#0a0f1d] text-white rounded-[32px] md:rounded-[48px] p-6 sm:p-8 md:p-16 shadow-lg border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-transparent w-96 h-96 rounded-full blur-[85px] -top-30 -right-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-xl space-y-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
                THE NEWSLETTER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Receive the next Operator Note.
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                One practical note each week on partnerships, integrations, data, distribution and the systems behind SaaS growth.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto shrink-0 md:min-w-[400px] space-y-3">
              <KitNewsletter />
              <p className="text-[11px] text-gray-500 text-center">
                No spam or sales pitches. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Short About Marc Section */}
        <section
          id="about"
          className="max-w-4xl mx-auto my-20 md:my-28 reveal px-4"
        >
          <div className="bg-white rounded-[24px] p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              ABOUT MARC
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              An operator's approach to SaaS growth.
            </h2>
            <div className="font-body-lg text-base text-gray-500 flex flex-col gap-4 leading-relaxed max-w-3xl">
              <p>
                I’m a SaaS growth and partnerships operator with more than 15 years of experience building distribution, outbound, affiliate, referral, integration and data-partnership programs.


              </p>
              <p>
                Operator Notes is where I share practical lessons from that work—what creates leverage, what introduces unnecessary complexity and how growth systems perform once they meet the realities of product, data and execution.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all text-xs inline-block"
              >
                More about Marc
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
