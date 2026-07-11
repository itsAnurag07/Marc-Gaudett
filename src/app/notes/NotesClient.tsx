"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";

import { NOTES_DATA, NoteItem } from "@/data/notes";

export default function NotesClient() {

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

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Header Block */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              WRITING
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Operator Notes
            </h1>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              A public archive of practical notes on how SaaS companies build partnerships, integrations, data products, distribution and durable revenue systems.
            </p>
          </div>
        </section>

        {/* Newsletter Signup (Page Level Banner) */}
        <section id="newsletter" className="max-w-7xl mx-auto mb-8 fade-in-on-scroll">
          <div className="bg-[#0a0f1d] text-white rounded-[24px] p-6 sm:p-8 md:p-12 shadow-sm border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-transparent w-96 h-96 rounded-full blur-[85px] -top-30 -right-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-xl space-y-3">
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

        {/* Notes Archive list */}
        <section className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTES_DATA.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-[24px] shadow-sm fade-in-on-scroll hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px] group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] text-gray-400 mb-4">
                    <span className="text-blue-600 font-bold uppercase tracking-widest">{note.category}</span>
                    <div className="flex gap-2">
                      <span>{note.date}</span>
                      <span>•</span>
                      <span>{note.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {note.snippet}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Subscription Block */}
        <section className="max-w-7xl mx-auto mb-8 fade-in-on-scroll">
          <div className="bg-white rounded-[24px] py-6 px-6 sm:px-8 md:py-8 md:px-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Follow the notes by email.</h3>
              <p className="text-sm text-gray-500">
                Receive the next Operator Note when it is published.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 md:min-w-[360px] space-y-1">
              <KitNewsletter />
              <p className="text-[10px] text-gray-400 text-center">
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
