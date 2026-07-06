"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { NOTES_DATA, NoteItem } from "@/data/notes";

export default function NotesClient() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

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

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        {/* Header Block */}
        <section className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Operator Notebook
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Revenue Infrastructure Notes
            </h1>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              A public archive of short notes on how B2B SaaS companies create revenue through partnerships, data, integrations, affiliates, referrals, outbound, and GTM systems.
            </p>
          </div>
        </section>

        {/* Newsletter Signup (Page Level Banner) */}
        <section className="max-w-7xl mx-auto mb-8 fade-in-on-scroll">
          <div className="bg-[#0a0f1d] text-white rounded-[24px] p-8 md:p-12 shadow-sm border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-transparent w-96 h-96 rounded-full blur-[85px] -top-30 -right-30 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl space-y-3">
              <h3 className="text-2xl font-bold">Join the Newsletter</h3>
              <p className="text-sm text-gray-300">
                Subscribe to receive these tactical Revenue Infrastructure Notes directly in your inbox. No fluff, no pitch, just operator insights.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto shrink-0 md:min-w-[360px]">
              {subscribed ? (
                <div className="bg-white/5 border border-emerald-500/30 rounded-xl p-4 text-center text-emerald-400 font-semibold text-sm">
                  Subscribed successfully! Check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all grow"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-sm shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Notes Archive list */}
        <section className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTES_DATA.map((note) => (
              <div
                key={note.slug}
                className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm fade-in-on-scroll hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                    <span>{note.date}</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    <Link href={`/notes/${note.slug}`}>
                      {note.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {note.snippet}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center">
                  <Link
                    href={`/notes/${note.slug}`}
                    className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                  >
                    Read full note <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-7xl mx-auto fade-in-on-scroll">
          <div className="bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-8 md:p-12 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Have comments or want to compare notes on a specific topic?
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 shadow-sm active:scale-[0.98] transition-all cursor-pointer text-center block text-sm"
              >
                Compare Notes
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
