"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";

export default function HomeClient({ initialNotes }: { initialNotes: any[] }) {
  // Reveal on scroll logic for smooth animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
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

  return (
    <>
      <Navbar />

      {/* Page wrapper — narrow column, left-padded like the reference site */}
      <main className="w-full px-[15%] pt-24 pb-20">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section id="hero" className="pt-16 pb-12">
          <p className="font-arial text-[12px] font-semibold  uppercase tracking-[0.14em] text-[#6B6861] mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Operator Notes
          </p>

          <h1
            className="font-georgia text-[#171714]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              letterSpacing: "-.045em",
              maxWidth: "860px",
              marginBottom: "24px",
              fontSize: "clamp(44px, 7vw, 78px)",
              fontWeight: 400,
              lineHeight: ".98",
            }}
          >
            Practical notes on<br />
            growth, partnerships,<br />
            and what produces<br />
            results.
          </h1>

          <p className="font-georgia text-[21px] text-[#6B6861] leading-[1.65] mb-7 max-w-[60%]">
            I write about building businesses, distribution, partnerships, performance, and the systems that turn effort into durable results.
          </p>

          {/* Inline Subscribe Form */}
          <div className="w-full max-w-[450px]">
            <KitNewsletter />
            <p className="font-sans text-[14px] text-[#6B6861] mt-2 leading-snug">
              Practical notes, sent when there's something useful to share. No spam.
            </p>
          </div>
        </section>

        {/* ── Latest Notes ─────────────────────────────────────────── */}
        <section id="notes" className="border-t border-[#c5c1b9] pt-20 pb-2">
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="font-georgia font-normal text-[#171714] text-[46px] leading-tight">
              Latest notes
            </h2>


            <Link
              href="/notes"
              className="font-sans text-[16px] text-gray-500 hover:text-black transition-colors"
            >
              View all →
            </Link>
          </div>




          <div className="divide-y divide-[#c5c1b9]">
            {initialNotes.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="block py-6 group cursor-pointer"
              >
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="font-arial text-[18px] font-semibold uppercase text-[#6B6861]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {note.category}
                  </span>
                  <span className="font-sans text-[14px] text-gray-400">
                    {note.date} · {note.readTime}
                  </span>
                </div>

                <h3 className="font-georgia font-normal text-[#171714] text-[24px] leading-[1.3] mb-2 group-hover:opacity-70 transition-opacity">
                  {note.title}
                </h3>

                <p className="font-georgia font-normal text-[18px] text-[#6B6861] leading-[1.6]">
                  {note.snippet}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Mid-page statement ───────────────────────────────────── */}
        <section className="border-t border-[#c5c1b9] pt-20 pb-20">
          <h2
            className="font-georgia font-normal text-[#171714] leading-[1.18] max-w-[860px]"
            style={{ fontSize: "clamp(46px, 4vw, 34px)" }}
          >
            Different industries. Different problems. The
            same focus: understanding what works and
            producing better results.
          </h2>
        </section>

        {/* ── About Marc ───────────────────────────────────────────── */}
        <section id="about" className="border-t border-[#c5c1b9] pt-18 pb-18">
          <div className="flex gap-5 items-start">
            {/* Small circular portrait */}
            <div className="relative w-[110px] h-[110px] shrink-0 rounded-full overflow-hidden bg-[#b0bec5]">
              <Image
                src="/images/Marc.webp"
                alt="Marc Gaudett"
                fill
                className="object-cover object-top"
                sizes=" 110px"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-georgia font-normal text-[#171714] text-[46px] mb-4 leading-tight">
                About Marc
              </h2>

              <div className="font-georgia text-[18px] text-[#6B6861] leading-[1.65] space-y-3 max-w-[640px]">
                <p>
                  I'm a growth and partnerships operator with more than 15 years of experience building revenue, distribution, and operating systems across technology, SaaS, ecommerce, fitness, franchising, and other growth environments.  Operator Notes is where I share what worked, what did not, and what the work taught me.
                </p>

              </div>

              <Link
                href="/about"
                className="font-sans text-[15px] font-semibold text-[#171714] hover:opacity-60 transition-opacity mt-4 inline-block"
              >
                More about Marc →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom Newsletter ─────────────────────────────────────── */}
        <section id="newsletter" className="border-t border-[#c5c1b9] pt-18 pb-0">
          <h2 className="font-georgia font-normal text-[#171714] text-[46px] leading-[1.18] mb-0">
            Receive the next Operator Note.
          </h2>
          <p className="font-georgia text-[18px] text-[#6B6861] mb-6 leading-relaxed">
            Practical observations on business, growth, partnerships, and performance.
          </p>

          <div className="w-full max-w-[420px]">
            <KitNewsletter />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
