"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitNewsletter from "@/components/KitNewsletter";
import { NOTES_DATA } from "@/data/notes";

interface NoteClientProps {
  slug: string;
}

interface NoteContent {
  title: string;
  date: string;
  readTime: string;
  paragraphs: string[];
  category: string;
}

const NOTE_CONTENTS: Record<string, NoteContent> = {
  "why-most-data-partnerships-fail": {
    title: "Why most data partnerships fail before pricing is even discussed",
    date: "July 2026",
    readTime: "3 min read",
    category: "Data & Integrations",
    paragraphs: [
      "Data partnerships in B2B SaaS are highly sought after, but most break down during early alignment. The failure is rarely about pricing. Instead, it is usually because of a misalignment between the data models of the two organizations and the actual GTM workflows of their customers.",
      "For a data partnership to work, the data must be actionable in the target user's context. If a partner provides raw account intelligence, but the user's workflow requires direct-dial lead enrichment at the moment of cold call execution, the partnership will fail to drive adoption. This operational gap causes direct churn, regardless of how cheap the licensing was.",
      "Before committing to commercial negotiations, draft the exact user-level data loop: how the data is queried, how it is mapped to existing database schemas, and where the active salesperson clicks to consume it. If you can't map this workflow on a single page, skip the partnership.",
    ],
  },
  "byok-vs-central-integrations": {
    title: "How to think about BYOK vs centrally routed integrations",
    date: "June 2026",
    readTime: "4 min read",
    category: "Data & Integrations",
    paragraphs: [
      "When designing integration ecosystems, SaaS architectures must choose between centrally routed integrations (the vendor hosts the API keys and manages all routing) and Bring Your Own Key (BYOK) integrations (the client inputs their own credentials directly into their workspace).",
      "Centrally routed setups offer smooth user onboarding but introduce significant liability, compliance (GDPR/CCPA/SOC2) overhead, and latency bottlenecks. For high-volume SaaS tools—especially outbound platforms or data scrapers—centrally managed keys are a massive architectural risk.",
      "BYOK, on the other hand, shifts credential management and API rate-limiting liabilities directly to the customer. It forces users to have an active relationship with both software products, aligning incentives. It is the preferred model for enterprise software, ensuring security compliance and database isolation without adding middleware friction.",
    ],
  },
  "when-affiliate-becomes-infrastructure": {
    title: "When affiliate programs become revenue infrastructure",
    date: "June 2026",
    readTime: "3 min read",
    category: "Affiliates & Referrals",
    paragraphs: [
      "Many B2B companies start an affiliate program by launching a basic trackable link system and handing it to creators or bloggers. This usually results in low-quality organic traffic and coupon-site spam. The program only becomes 'revenue infrastructure' when it transitions from an ad-hoc promo tool into an official, attribution-backed GTM channel.",
      "To make this transition, you need three elements: enterprise-grade tracking (so partners are credited for multi-touch conversions, not just last-click), structured partner tiers (supporting agency partners who use your software for client work, rather than just referral links), and dedicated co-marketing resources.",
      "When agency partners build their services around your tool, the affiliate payout shifts from a 'commission fee' to an infrastructure margin that secures long-term distribution leverage.",
    ],
  },
  "evaluate-gtm-data-provider": {
    title: "How to evaluate a new GTM data provider",
    date: "May 2026",
    readTime: "5 min read",
    category: "Data & Integrations",
    paragraphs: [
      "Sales teams routinely test new GTM data providers by requesting a sample spreadsheet, scanning the emails of people they know, and declaring the data 'good' or 'bad.' This static approach is completely flawed.",
      "To evaluate a data provider for revenue infrastructure, you must assess three key metrics under live operating conditions: fill rates (what percentage of target domains return valid metadata), refresh cycles (how often account records are updated), and API responsiveness (how fast data can be queried during outbound triggers).",
      "A provider with 90% accuracy that requires a manual CSV download is always inferior to a provider with 80% accuracy that feeds directly into automated triggers at the moment of lead engagement.",
    ],
  },
  "integrations-tied-to-user-workflow": {
    title: "Why integrations should be tied to user workflow, not vendor excitement",
    date: "May 2026",
    readTime: "3 min read",
    category: "Data & Integrations",
    paragraphs: [
      "B2B SaaS companies often build integrations based on the market cap or logo size of the partner company, rather than actual customer demand. They build a 'vanity integration,' write a joint press release, and watch adoption sit at less than 1%.",
      "Integrations drive retention and expansion only when they are deeply tied to the user's daily habit loop. If a customer has to leave their primary workspace, open a separate tab, and copy-paste identifiers to sync data, the integration is broken.",
      "Design integrations around user habits: e.g., 'When a lead is marked as interested in HubSpot, automatically trigger an enrichment call in the background.' Tie software to actions, not logos.",
    ],
  },
  "partner-channels-leverage": {
    title: "How partner channels create leverage without adding headcount",
    date: "April 2026",
    readTime: "4 min read",
    category: "Partnerships",
    paragraphs: [
      "The core advantage of partner distribution is operating leverage. Direct sales teams require linear hiring to increase sales. Partner ecosystems, once built, allow you to scale your GTM reach exponentially.",
      "This leverage is achieved by aligning your software incentives with the business models of your partners. For instance, when an agency uses your platform to service their clients, they manage the customer success, onboarding, and basic troubleshooting. You acquire customer accounts while offloading account management.",
      "By treating partners as extensions of your team, you turn external organizations into your primary sales force, maintaining high operational efficiency and excellent margins.",
    ],
  },
  "stop-managing-partnerships-as-islands": {
    title: "Why referrals, affiliates, and partnerships should not be managed as separate islands",
    date: "April 2026",
    readTime: "4 min read",
    category: "Partnerships",
    paragraphs: [
      "SaaS companies frequently divide GTM tracks by department: marketing runs the affiliate program, sales manages integration partners, and customer success handles referrals. This structural fragmentation creates disjointed customer journeys and major attribution errors.",
      "A customer might discover a product via an affiliate link, request an integration through sales, and submit a referral later. If these tracks run on separate tools, double-payouts occur, or worse, partners get credit for conversions they didn't drive.",
      "Unify your referral, affiliate, and channel partnerships under a single infrastructure layer. This ensures a clean source of truth for attribution and allows you to reward partners for the exact impact they have on the deal cycle.",
    ],
  },
  "thinking-about-revenue-infrastructure": {
    title: "How to think about revenue infrastructure in B2B SaaS",
    date: "March 2026",
    readTime: "6 min read",
    category: "Outbound & GTM",
    paragraphs: [
      "Revenue infrastructure is the complete technical and operational layer that connects your product, GTM tools, third-party distribution, and customer databases. It is the plumbing of your sales engine.",
      "Most companies focus entirely on buying more seats of sales tools. But without clean integrations, unified tracking, and standardized data flows, those tools operate as isolated silos. Revenue infrastructure focuses on the connections between them.",
      "When you treat outbound pipelines, APIs, and partner portals as infrastructure, you prioritize stability, latency, and automation. This allows your team to focus on scaling conversations rather than manually copying data.",
    ],
  },
};

export default function NoteClient({ slug }: NoteClientProps) {

  const note = NOTE_CONTENTS[slug] || {
    title: "Note Not Found",
    date: "",
    readTime: "",
    category: "General",
    paragraphs: ["The note you are looking for could not be found."],
  };

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
  }, [slug]);



  return (
    <>
      <Navbar />

      <main className="bg-[#eaeef6] min-h-screen pt-20 pb-16 px-4 md:px-6">
        <article className="max-w-4xl mx-auto bg-white rounded-[32px] md:rounded-[40px] shadow-sm p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 fade-in-on-scroll">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/notes"
              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Notes Archive
            </Link>
          </div>

          {/* Article Header */}
          <div className="border-b border-gray-100 pb-6 mb-8">
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
              <span>{note.date}</span>
              <span>•</span>
              <span>{note.readTime}</span>
              <span>•</span>
              <span className="text-blue-600 font-bold uppercase tracking-widest">{note.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {note.title}
            </h1>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
            {note.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* In-line Newsletter Signup */}
          <div id="newsletter" className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100/50 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest block">THE NEWSLETTER</span>
              <h4 className="font-bold text-gray-900 text-lg">Receive the next Operator Note.</h4>
              <p className="text-xs text-gray-500">
                One practical note each week on partnerships, integrations, data, distribution and the systems behind SaaS growth.
              </p>
            </div>
            
            <KitNewsletter />

            <p className="text-[10px] text-gray-400 text-center">
              No spam or sales pitches. Unsubscribe anytime.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
