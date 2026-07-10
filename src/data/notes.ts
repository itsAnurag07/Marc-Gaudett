export interface NoteItem {
  slug: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
}

export const NOTES_DATA: NoteItem[] = [
  {
    slug: "why-most-data-partnerships-fail",
    title: "Why most data partnerships fail before pricing is even discussed",
    snippet: "Data alignment, target profiles, and integration friction matter far more than the price tag.",
    date: "July 2026",
    readTime: "3 min read",
    category: "Data & Integrations",
  },
  {
    slug: "byok-vs-central-integrations",
    title: "How to think about BYOK vs centrally routed integrations",
    snippet: "Decoupling client credentials from central middleware for security, cost, and latency leverage.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Data & Integrations",
  },
  {
    slug: "when-affiliate-becomes-infrastructure",
    title: "When affiliate programs become revenue infrastructure",
    snippet: "Moving from ad-hoc promotional discount links to a structured, repeatable, attribution-backed GTM channel.",
    date: "June 2026",
    readTime: "3 min read",
    category: "Affiliates & Referrals",
  },
  {
    slug: "evaluate-gtm-data-provider",
    title: "How to evaluate a new GTM data provider",
    snippet: "Coverage and cost are vanity metrics. True assessment requires evaluating fill rates, refresh cycles, and API compliance.",
    date: "May 2026",
    readTime: "5 min read",
    category: "Data & Integrations",
  },
  {
    slug: "integrations-tied-to-user-workflow",
    title: "Why integrations should be tied to user workflow, not vendor excitement",
    snippet: "Vanilla integrations drive zero adoption. Focus on the daily routines and actions of active users.",
    date: "May 2026",
    readTime: "3 min read",
    category: "Data & Integrations",
  },
  {
    slug: "partner-channels-leverage",
    title: "How partner channels create leverage without adding headcount",
    snippet: "Scaling distribution by aligning incentives with third-party software, agencies, and operators.",
    date: "April 2026",
    readTime: "4 min read",
    category: "Partnerships",
  },
  {
    slug: "stop-managing-partnerships-as-islands",
    title: "Why referrals, affiliates, and partnerships should not be managed as separate islands",
    snippet: "Unifying partner tracks under a single technical infrastructure ensures accurate attribution and unified incentive design.",
    date: "April 2026",
    readTime: "4 min read",
    category: "Partnerships",
  },
  {
    slug: "thinking-about-revenue-infrastructure",
    title: "How to think about revenue infrastructure in B2B SaaS",
    snippet: "A foundational blueprint for connecting APIs, outbound pipelines, referral loops, and partnerships into a single growth engine.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Outbound & GTM",
  },
];
