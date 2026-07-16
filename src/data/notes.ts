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
    title: "Why most data partnerships fail before pricing is discussed",
    snippet: "Data alignment, target profiles, and integration friction matter far more than the price tag.",
    date: "July 2026",
    readTime: "4 min read",
    category: "Partnerships",
  },
  {
    slug: "the-systems-that-make-consistency-easier",
    title: "The systems that make consistency easier",
    snippet: "Better outcomes rarely come from motivation alone. The environment and operating rhythm usually matter more.",
    date: "June 2026",
    readTime: "3 min read",
    category: "Performance",
  },
  {
    slug: "what-running-two-six-figure-franchise-businesses-taught-me-about-accountability",
    title: "What running two six-figure franchise businesses taught me about accountability",
    snippet: "Hiring people is only the beginning; clear expectations and operating rhythm create the result.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Leadership",
  },
  {
    slug: "distribution-is-usually-the-strategy",
    title: "Distribution is usually the strategy",
    snippet: "A good product without a dependable path to customers is still an unfinished business.",
    date: "May 2026",
    readTime: "4 min read",
    category: "Growth",
  },
];
