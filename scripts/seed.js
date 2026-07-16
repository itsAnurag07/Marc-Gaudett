const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NOTE_CONTENTS = {
  "why-most-data-partnerships-fail": {
    title: "Why most data partnerships fail before pricing is discussed",
    snippet: "Data alignment, target profiles, and integration friction matter far more than the price tag.",
    date: "July 2026",
    readTime: "4 min read",
    category: "Partnerships",
    content: [
      { type: "p", text: "Partnership conversations often move to pricing too quickly. The numbers feel concrete, so teams begin negotiating before they have established whether the partnership can produce the intended result." },
      { type: "p", text: "In data partnerships, price is rarely the first constraint. A provider can look inexpensive on paper and still become costly when the records do not match the target customer, coverage is inconsistent, or the integration creates work the team cannot sustain." },
      { type: "h2", text: "Start with the result" },
      { type: "p", text: "Define the job the partnership must perform. Are you improving enrichment coverage, finding net-new accounts, increasing contact accuracy, or reducing the cost of an existing workflow? A partnership cannot be evaluated properly when success is described only as \"getting more data.\"" },
      { type: "h2", text: "Test alignment before economics" },
      { type: "p", text: "A small, representative sample will usually teach you more than a long commercial discussion. Measure usable coverage, accuracy, uniqueness, and how the output behaves inside the real workflow. Then examine cost per useful result—not cost per record." },
      { type: "quote", text: "The cheapest input is not the least expensive partnership. The best economics come from outputs the business can actually use." },
      { type: "h2", text: "Make ownership explicit" },
      { type: "p", text: "Even a strong partner will stall without an internal owner, a clear operating rhythm, and agreement on how problems get resolved. The commercial agreement matters, but execution determines whether the relationship compounds or quietly disappears." },
      { type: "h2", text: "What I would do" },
      { type: "p", text: "Before discussing a long-term price, agree on the result, test a representative sample, calculate the economics around usable output, and assign one accountable owner on each side. When those pieces are sound, pricing becomes a much easier conversation." },
      { type: "signoff", text: "— Marc" }
    ],
  },
  "the-systems-that-make-consistency-easier": {
    title: "The systems that make consistency easier",
    snippet: "Better outcomes rarely come from motivation alone. The environment and operating rhythm usually matter more.",
    date: "June 2026",
    readTime: "3 min read",
    category: "Performance",
    content: [
      { type: "p", text: "Consistency in execution is the single most critical factor in SaaS operations, but it is rarely sustained by motivation alone. Motivation is an emotional state, subject to friction, fatigue, and distraction. Operating systems, on the other hand, are structural. They run regardless of how the operator feels." },
      { type: "p", text: "To make consistency easier, build systems that remove friction from the action loop. If your goal is weekly outbound execution, do not rely on your sales development reps remembering to write copy every Monday. Build a pipeline that automatically queues accounts, populates variables, and presents them in a single workspace. The less decision-making required to start, the more consistent the execution will be." },
      { type: "h2", text: "Structure over emotion" },
      { type: "p", text: "Define your operating cadences: daily syncs, weekly reviews, monthly retrospectives. Treat these cadences as infrastructure—unyielding blocks on the calendar. By shifting from motivation-based action to system-based habits, consistency becomes the default state of your organization." },
      { type: "signoff", text: "— Marc" }
    ],
  },
  "what-running-two-six-figure-franchise-businesses-taught-me-about-accountability": {
    title: "What running two six-figure franchise businesses taught me about accountability",
    snippet: "Hiring people is only the beginning; clear expectations and operating rhythm create the result.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Leadership",
    content: [
      { type: "p", text: "Hiring talented people is only the beginning. True accountability does not come from a job description; it comes from clear expectations, structured feedback loops, and a unified operating rhythm. Running franchise operations taught me that without clear, quantifiable success metrics, accountability is impossible to maintain." },
      { type: "p", text: "In a franchise environment, operations are highly standardized. Every role has a specific, documented output, and performance is tracked daily. This level of structure removes ambiguity. Employees know exactly what a 'good day' looks like, and managers have objective data to review. If a business unit falls short, the breakdown can be traced to a specific process rather than personal failure." },
      { type: "h2", text: "Operating rhythm" },
      { type: "p", text: "Apply this franchise mindset to SaaS: document your core operating procedures, establish weekly key performance indicators (KPIs) for every team member, and maintain a consistent meeting rhythm. When expectations are explicit and performance is visible, accountability ceases to be a management chore and becomes a natural property of the operating system." },
      { type: "signoff", text: "— Marc" }
    ],
  },
  "distribution-is-usually-the-strategy": {
    title: "Distribution is usually the strategy",
    snippet: "A good product without a dependable path to customers is still an unfinished business.",
    date: "May 2026",
    readTime: "4 min read",
    category: "Growth",
    content: [
      { type: "p", text: "A good product without a dependable path to customers is still an unfinished business. Distribution is usually the strategy." },
      { type: "signoff", text: "— Marc" }
    ],
  },
};

async function main() {
  console.log("Seeding database...");
  for (const [slug, data] of Object.entries(NOTE_CONTENTS)) {
    await prisma.note.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        title: data.title,
        snippet: data.snippet,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
        content: JSON.stringify(data.content),
      },
    });
    console.log(`Upserted note: ${slug}`);
  }
  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
