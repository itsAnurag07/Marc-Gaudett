"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";

export default function NotesClient({ initialNotes }: { initialNotes: any[] }) {

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

  return (
    <>
      <Navbar />

      <main className="w-full px-[15%] pt-24 pb-20">
        {/* Header Block */}
        <section className="pt-16 pb-12 fade-in-on-scroll">
          <div className="max-w-[860px]">
            <span className="font-arial text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B6861] block mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              OPERATOR NOTES
            </span>
            <h1
              className="font-georgia text-[#171714]"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                letterSpacing: "-.045em",
                marginBottom: "24px",
                fontSize: "clamp(44px, 7vw, 78px)",
                fontWeight: 400,
                lineHeight: ".98",
              }}
            >
              Ideas earned through the<br />work.
            </h1>
            <p className="font-georgia text-[21px] text-[#6B6861] leading-[1.65] max-w-[640px]">
              Practical observations on growth, partnerships, distribution,<br />performance, and the systems that produce better results.
            </p>
          </div>
        </section>

        {/* Notes Archive list */}
        <section className="border-t border-[#c5c1b9] pt-1 fade-in-on-scroll">
          <div className="divide-y divide-[#c5c1b9]">
            {initialNotes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="block py-12 transition-opacity hover:opacity-80 group cursor-pointer"
              >
                <div className="mb-3">
                  <span className="font-arial text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B6861]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {note.category}
                  </span>
                </div>
                
                <h3 className="font-georgia font-normal text-[#171714] text-[40px] mb-3 group-hover:opacity-70 leading-[1.1] max-w-[800px]">
                  {note.title}
                </h3>
                
                <p className="font-georgia font-normal text-[18px] text-[#6B6861] leading-[1.6] max-w-[800px] mb-4">
                  {note.snippet}
                </p>

                <div className="font-sans text-[13px] text-[#6B6861]">
                  {note.date} &middot; {note.readTime}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
