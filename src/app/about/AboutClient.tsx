"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Main Operator Shell */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="space-y-8">

            {/* Top: Two-column — Bio left, Portrait right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Left: Headline & Bio */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                    ABOUT
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Marc Gaudett
                  </h1>
                </div>
                <div className="font-body-lg text-base text-gray-500 flex flex-col gap-5 leading-relaxed">
                  <p>
                    I’m a SaaS growth and partnerships operator with more than 15 years of experience building systems that connect products with customers, partners and new channels of distribution.
                  </p>
                  <p>
                    My work has included partnerships, affiliate and referral programs, outbound growth, API integrations, data partnerships and the operating systems required to make those channels measurable and repeatable.
                  </p>
                  <p>
                    I’m particularly interested in the points where product, distribution and incentives meet: why some integrations produce meaningful adoption, why some partner programs scale while others stall and how better data can improve the way companies identify and reach their markets.
                  </p>
                  <p>
                    Operator Notes is my public record of those observations. It is where I document useful lessons, frameworks and questions from the work itself.
                  </p>
                </div>

                {/* Experience section */}
                <div className="pt-8 border-t border-gray-100 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                  <div className="font-body-lg text-base text-gray-500 flex flex-col gap-4 leading-relaxed">
                    <p>
                      Across my career, I have helped build and scale growth programs across B2B SaaS and technology businesses, including partnership motions that produced multi-seven-figure revenue, outbound systems that materially increased qualified lead flow and data and integration programs designed to become part of the product experience.
                    </p>
                    <p>
                      The purpose of this site is not to present a complete résumé. It is to share the thinking behind how these systems are evaluated, built and improved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Portrait and Topics */}
              <div className="md:col-span-4 flex flex-col gap-8 w-full">
                {/* Portrait */}
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-full md:h-80 rounded-2xl overflow-hidden shadow-sm bg-[#7b8f96] mx-auto md:mx-0">
                  <Image
                    src="/images/Marc.webp"
                    alt="Marc Gaudett Portrait"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 224px, 400px"
                    priority
                  />
                </div>

                {/* Topics I write about */}
                <div className="border-t border-gray-100/80 pt-6 md:mt-16 space-y-4 w-full">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 text-center md:text-left">Topics I write about</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/notes" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        Partnerships and distribution
                      </Link>
                    </li>
                    <li>
                      <Link href="/notes" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        Data products and integrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/notes" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        Affiliates and referrals
                      </Link>
                    </li>
                    <li>
                      <Link href="/notes" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        Outbound and GTM systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/notes" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        AI discovery and emerging channels
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Block */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-6 sm:p-8 md:p-12 lg:p-16 text-center mb-8 fade-in-on-scroll">
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-gray-600">
              You can follow my writing here or connect with me on LinkedIn.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Link
                href="/notes"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                Read Operator Notes
              </Link>
              <a
                href="https://www.linkedin.com/in/marcgaudett/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
