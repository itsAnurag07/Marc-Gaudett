"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactClient() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    link: "",
    prompt: "",
    discussion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus !== "idle") return;

    setFormStatus("sending");

    // Artificial delay to simulate processing
    setTimeout(() => {
      setFormStatus("sent");
      
      // Reset form status and data after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          link: "",
          prompt: "",
          discussion: "",
        });
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto pt-24 pb-16 px-6 sm:px-8">
        <div className="fade-in-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context & Bullet Points */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#171714] uppercase tracking-widest block mb-2 font-sans">
                  CONTACT
                </span>
                <h1 className="font-hero text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                  Compare Notes
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
                  If you are building in B2B SaaS, partnerships, integrations, data, outbound, or partner-led distribution, feel free to reach out with context.
                </p>
              </div>

              <div className="border-t border-black/12 pt-5">
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                  I am always open to thoughtful conversations, relevant opportunities, and useful introductions.
                </p>
              </div>

              <div className="border-t border-black/12 pt-6">
                <div className="p-6 rounded-2xl border border-black/12 bg-[#F7F5F0] flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] text-[#171714] font-bold uppercase tracking-wider block mb-1 font-sans">LinkedIn</span>
                    <a
                      className="text-sm font-bold text-gray-900 hover:text-black transition-colors flex items-center gap-1.5 font-sans"
                      href="https://www.linkedin.com/in/marcgaudett/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Marc Gaudett on LinkedIn
                      <span className="material-symbols-outlined text-xs">north_east</span>
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F5F0] rounded-3xl p-6 sm:p-10 border border-black/12 shadow-sm relative">
              {formStatus === "sent" ? (
                <div className="py-20 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 animate-bounce mb-2">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Note Received</h3>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed font-sans">
                    Thanks — your note has been received. If there’s a clear fit, Marc will follow up.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all shadow-sm font-sans"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={formStatus === "sending"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all shadow-sm font-sans"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={formStatus === "sending"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="company">
                        Company
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all shadow-sm font-sans"
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Organization name"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={formStatus === "sending"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="link">
                        LinkedIn Profile or Website
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all shadow-sm font-sans"
                        id="link"
                        name="link"
                        type="text"
                        placeholder="linkedin.com/in/..."
                        value={formData.link}
                        onChange={handleChange}
                        disabled={formStatus === "sending"}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="prompt">
                      What prompted you to reach out?
                    </label>
                    <input
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all shadow-sm font-sans"
                      id="prompt"
                      name="prompt"
                      type="text"
                      placeholder="E.g. Referral, strategic opportunity, article..."
                      value={formData.prompt}
                      onChange={handleChange}
                      disabled={formStatus === "sending"}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" htmlFor="discussion">
                      What would be useful to discuss?
                    </label>
                    <textarea
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black/5 outline-none resize-none transition-all shadow-sm font-sans"
                      id="discussion"
                      name="discussion"
                      rows={6}
                      placeholder="Briefly describe the context of your inquiry..."
                      value={formData.discussion}
                      onChange={handleChange}
                      required
                      disabled={formStatus === "sending"}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm font-sans"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Note"}
                    {formStatus === "idle" && <span className="material-symbols-outlined text-[18px]">send</span>}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
