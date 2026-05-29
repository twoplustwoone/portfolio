import type {
  SocialLink,
  WorkExperience,
  Project,
  Patent,
  CurrentlyItem,
  QuickFact,
  CatReview,
} from "./types";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/twoplustwoone", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fdigiandomenico/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:frandigiand@gmail.com", icon: "mail" },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1gUa4VpEpTghHmwQbfpDUDhehKkkz6nmG/view?usp=sharing";

export const githubAvatarUrl =
  "https://avatars.githubusercontent.com/twoplustwoone";

// ─── Experience ────────────────────────────────────────────
export const experiences: WorkExperience[] = [
  {
    year: "2025",
    role: "Software Engineer",
    company: "Atlassian",
    date: "Apr 2025 – Present",
    description:
      "Leading frontend architecture across Sales360's analytics and prospecting products — from a lead prospecting hub to a GraphQL-backed personalization system.",
    highlights: [
      "Leading the frontend for the Lead Prospecting Hub — scaffolded the route, typed view-model layer, and anti-corruption data layer, and drove the MVP to dogfooding in ~10 weeks with PM, UX, and backend",
      "Designed and shipped the Win/Loss Story Builder end-to-end as primary frontend owner — a multi-step tool for reps to document deal outcomes, integrated with Salesforce and Confluence with AI editor support",
      "Built the Recently Viewed / Recently Searched system as full-stack owner — DB schema, SQS write pipeline, REST API, GraphQL tier, and frontend; the foundation was later reused for the Starred feature",
      "Authored the Personalization RFC and built the centralized, GraphQL-backed preferences package now used as the standard pattern across the codebase",
    ],
  },
  {
    year: "2024",
    role: "Software Engineer",
    company: "Salesforce — Einstein Studio",
    date: "Feb 2024 – Dec 2024",
    description:
      "Built configuration and onboarding experiences for Einstein Studio, the AI model hub powering Salesforce's generative AI products.",
    highlights: [
      "Built configuration and onboarding UI for Model Builder, letting customers bring their own external LLMs and predictive models into Salesforce products",
      "Standardized E2E testing across the team — built helper utilities and authored guidance docs that replaced ad-hoc string-based accessors and cut duplication",
    ],
  },
  {
    year: "2023",
    role: "Senior Software Engineer",
    company: "Capital One",
    date: "Apr 2023 – Jan 2024",
    description:
      "Worked on a backend modernization initiative migrating legacy services to serverless Spring Boot microservices on AWS.",
    highlights: [
      "Migrated services from legacy Spring to Spring Boot microservices on AWS Lambda, part of a broader organizational shift to serverless",
      "Implemented backwards-compatible API features supporting data tokenization during a database migration, minimizing downtime for downstream consumers",
    ],
  },
  {
    year: "2018",
    role: "Senior Software Engineer",
    company: "MuleSoft (a Salesforce company)",
    date: "Feb 2018 – Mar 2023",
    description:
      "Owned MuleSoft's API Console — a Web Components-based shared dependency used by four product teams — over a five-year tenure, promoted from Junior to Senior. Relocated from Argentina to New York along the way.",
    highlights: [
      "Took ownership of API Console after the original maintainer left, recovering it from significant tech debt to a stable, trusted component through bug remediation, regression infrastructure, and UX rework",
      "Designed a chunked-query architecture for 25–30 MB GraphQL models, reducing request latency by up to 90% on previously-unusable documentation pages",
      "Led API Console's migration from LitElement to Lightning Web Components, with a build pipeline producing both Salesforce-platform LWC and rollup-bundled OSS LWC from one codebase",
      "Built a Jenkins-dispatched test runner consolidating suites across 15+ component repositories, catching cross-repo regressions before release",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    icon: "🎁",
    name: "giftpool",
    description:
      "A platform for creating gifting groups and managing shared wishlists. Built to solve the \u201cwhat do we all get them?\u201d problem \u2014 because coordinating gifts over a group chat is a special kind of chaos. Live in production with 60+ users.",
    tech: ["React Router v7", "TypeScript", "Prisma", "Fly.io"],
    url: "https://giftpool.app/",
  },
  {
    icon: "🧾",
    name: "splittr",
    description:
      "A lightweight web app for itemizing invoices with proportional tax splitting. Because splitting the check shouldn't require a math degree or a spreadsheet at the table.",
    tech: ["React", "JavaScript", "SCSS"],
    url: "https://splittr.twoplustwoone.dev/",
  },
];

export const patent: Patent = {
  number: "US10977011B2",
  title: "Structured Development for Web",
  titleLine2: "Application Frameworks",
  description:
    "Wrote, submitted, and received a US patent for a novel approach to structuring web applications declaratively through a specification file. Granted by the USPTO.",
  url: "https://patents.google.com/patent/US10977011B2/en",
};

// ─── About ─────────────────────────────────────────────────
export const quickFacts: QuickFact[] = [
  {
    label: "Based in",
    value: "New York City",
    subValue: "emotionally in Buenos Aires",
  },
  {
    label: "Education",
    value: "Software Engineering",
    subValue: "Universidad Austral · 5-year program",
  },
  { label: "Certified", value: "AWS Certified Cloud Practitioner" },
];

export const currentlyItems: CurrentlyItem[] = [
  {
    emoji: "🎮",
    text: "Playing something with good lore",
    note: "the vibe matters more than the genre",
  },
  { emoji: "☕", text: "Oat milk lattes", note: "not negotiable" },
  {
    emoji: "🎲",
    text: "Running a D&D campaign",
    note: "built out of spite, honestly",
  },
  {
    emoji: "🧠",
    text: "Dreaming about a gaucho game",
    note: "it keeps getting bigger in my head",
  },
];

// ─── Cat Easter Egg ────────────────────────────────────────
export const catReviews: CatReview[] = [
  {
    name: "Chai",
    avatar: "🍵",
    title: "Sovereign of the Top Shelf · Drawer Archaeologist",
    stars: "★★★★★",
    review:
      "Smooth. Fast. Warm color palette \u2014 finally, a man who understands that orange is the superior color. Five stars. I supervised the entire build from above, which is the only correct vantage point.",
  },
  {
    name: "Truffle",
    avatar: "🍫",
    title: "Chief Noise Officer · Certified Velcro Cat",
    stars: "★★★☆☆",
    review:
      "I voiced 47 concerns during development. He addressed zero of them. The site is fine. The \u2018Currently\u2019 section doesn\u2019t mention me once, which is an oversight I\u2019ll be vocalizing for the foreseeable future.",
  },
  {
    name: "Muffin",
    avatar: "🧁",
    title: "Head of Security · Bathroom Surveillance Division",
    stars: "★★☆☆☆",
    review:
      "There is an entire \u2018About\u2019 section with no mention of the food bowl situation in this apartment. Two stars. The design is warm, which I respect. I am not a monster.",
  },
];
