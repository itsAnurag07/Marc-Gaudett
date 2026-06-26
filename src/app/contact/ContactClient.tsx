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

  const handleScrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <Navbar onScrollToSection={handleScrollToSection} />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[48px] shadow-sm p-6 md:p-12 lg:p-16 relative overflow-hidden mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context & Bullet Points */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <h1 className="font-hero text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Start a Conversation
                </h1>
                <p className="font-body-lg text-lg text-gray-500 leading-relaxed">
                  For thoughtful conversations, partnerships, introductions, or relevant opportunities, send a short note with context.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <p className="text-base text-gray-500 leading-relaxed">
                  If you&apos;d like to exchange ideas, discuss partnerships, or simply connect, feel free to reach out. I&apos;ll do my best to respond.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">LinkedIn Hub</span>
                    <a
                      className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                      href="https://www.linkedin.com/in/marcgaudett/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with Marc
                      <span className="material-symbols-outlined text-xs">north_east</span>
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-gray-50/50 rounded-3xl p-10 border border-gray-100/50 shadow-sm relative">
              {formStatus === "sent" ? (
                <div className="py-20 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 animate-bounce mb-2">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Note Received</h3>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                    Thanks — your note has been received. If there’s a clear fit, Marc will follow up.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm"
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
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm"
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
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="company">
                        Company
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm"
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
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="link">
                        LinkedIn Profile or Website
                      </label>
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm"
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
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="prompt">
                      What prompted you to reach out?
                    </label>
                    <input
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm"
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
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" htmlFor="discussion">
                      What would be useful to discuss?
                    </label>
                    <textarea
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none resize-none transition-all shadow-sm"
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
                    className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
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

      <Footer onScrollToSection={handleScrollToSection} />
    </>
  );
}
