"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";

interface ContentBlock {
  type: "p" | "h2" | "quote" | "signoff";
  text: string;
}

interface NoteContent {
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  content: ContentBlock[];
}

interface NoteClientProps {
  note: NoteContent;
}

export default function NoteClient({ note }: NoteClientProps) {

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
  }, [note]);

  return (
    <>
      <Navbar />

      <main className="w-full px-[5%] md:px-[10%] lg:px-[15%] pt-24 pb-20 fade-in-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content (Left Column) */}
          <article className="lg:col-span-8">
            {/* Header */}
            <div className="mb-10">
              <span className="font-arial text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B6861] block mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {note.category}
              </span>
              <h1 className="font-georgia text-[#171714] text-[42px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-5 tracking-tight">
                {note.title}
              </h1>
              <p className="font-georgia text-[18px] sm:text-[21px] text-[#6B6861] leading-[1.65] mb-6">
                {note.snippet}
              </p>
              <div className="font-sans text-[13px] text-[#6B6861]">
                By Marc Gaudett &middot; {note.date} &middot; {note.readTime}
              </div>
            </div>

            {/* Body */}
            <div className="space-y-6">
              {note.content.map((block, idx) => {
                switch (block.type) {
                  case "p":
                    return <p key={idx} className="font-georgia text-[16px] sm:text-[18px] text-[#171714] leading-[1.7]">{block.text}</p>;
                  case "h2":
                    return <h2 key={idx} className="font-georgia text-[28px] sm:text-[32px] text-[#171714] leading-[1.2] pt-6 pb-2">{block.text}</h2>;
                  case "quote":
                    return (
                      <blockquote key={idx} className="border-l-2 border-[#171714] pl-5 my-8 italic font-georgia text-[18px] sm:text-[20px] text-[#171714] leading-[1.6]">
                        {block.text}
                      </blockquote>
                    );
                  case "signoff":
                    return <p key={idx} className="font-georgia text-[16px] sm:text-[18px] text-[#171714] mt-8">{block.text}</p>;
                  default:
                    return null;
                }
              })}
            </div>

            {/* Author Block */}
            <div className="mt-20 border-t border-b border-[#c5c1b9] py-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden bg-[#e0dfdc] shrink-0 border border-black/10">
                <Image src="/images/Marc.webp" alt="Marc Gaudett" fill className="object-cover object-top" sizes="80px" />
              </div>
              <div>
                <h3 className="font-georgia font-bold text-[#171714] text-[18px] mb-1">Marc Gaudett</h3>
                <p className="font-georgia text-[#6B6861] text-[15px] leading-[1.6]">Growth and partnerships operator sharing what worked, what did not, and what the work taught me.</p>
              </div>
            </div>

            {/* Related Notes */}
            <div className="mt-16">
              <span className="font-arial text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B6861] block mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                CONTINUE READING
              </span>
              <h2 className="font-georgia font-normal text-[#171714] text-[32px] mb-6">Related Operator Notes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/notes/distribution-is-usually-the-strategy" className="bg-white border border-[#c5c1b9] p-6 flex flex-col justify-between min-h-[160px] cursor-pointer hover:bg-black/5 transition-colors">
                  <h3 className="font-georgia font-normal text-[20px] text-[#171714] leading-[1.3] mb-4">Distribution is usually the strategy</h3>
                  <span className="font-sans text-[12px] text-[#6B6861]">4 min read &rarr;</span>
                </Link>
                <Link href="/notes/the-systems-that-make-consistency-easier" className="bg-white border border-[#c5c1b9] p-6 flex flex-col justify-between min-h-[160px] cursor-pointer hover:bg-black/5 transition-colors">
                  <h3 className="font-georgia font-normal text-[20px] text-[#171714] leading-[1.3] mb-4">The systems that make consistency easier</h3>
                  <span className="font-sans text-[12px] text-[#6B6861]">3 min read &rarr;</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-4 relative mt-16 lg:mt-0">
            <div className="lg:sticky lg:top-32 lg:border-l lg:border-[#c5c1b9] lg:pl-10">
              <span className="font-arial text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B6861] block mb-5" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                BEFORE YOU GO
              </span>
              <h3 className="font-georgia font-normal text-[#171714] text-[36px] leading-[1.1] mb-5 tracking-tight">
                <em className="italic">15+ years</em> of lessons from building growth.
              </h3>
              <p className="font-georgia text-[16px] text-[#6B6861] leading-[1.65] mb-5">
                Across technology, ecommerce, fitness, franchising, and other industries, I've built revenue, partnerships, distribution, sales, and operating systems.
              </p>
              <p className="font-georgia text-[16px] text-[#6B6861] leading-[1.65] mb-8">
                Operator Notes is where I share what worked, what didn't, and what the work taught me.
              </p>
              
              <div className="w-full">
                <KitNewsletter layout="vertical" />
                <p className="text-center font-sans text-[11px] text-[#6B6861] mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}

