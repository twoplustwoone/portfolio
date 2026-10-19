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
    date: "Apr 2025 to Present",
    description:
      "Frontend and product engineer on Sales360, Atlassian's internal sales platform. Leading the frontend for a new lead prospecting product and building shared features across the stack.",
    highlights: [
      "Lead the frontend for Lead Prospecting Hub, which replaces a third-party prospecting tool (Common Room). Wrote the frontend architecture and the frontend-backend data contract, then led implementation and wrote the tickets other frontend engineers built from. In production with a pilot group of SMB sellers since Aug 2026",
      "Proposed, designed, and built a Recently Viewed / Recently Searched feature across the stack: database schema, SQS write pipeline consumer, REST endpoints, GraphQL middle tier, and UI. Designed the API to be app-agnostic, and a second product team (Customer360) later adopted it",
      "Wrote the RFC for Sales360's user preferences system and built its foundation, a typed preferences package with backend persistence that replaces ad-hoc localStorage. It is now the team's standard pattern, and other engineers have extended it across the app",
      "Built the multi-step frontend for Win/Loss Story Builder, a tool for sales reps to document deal outcomes, with Salesforce integration and export to Confluence",
    ],
  },
  {
    year: "2024",
    role: "Software Engineer",
    company: "Salesforce, Einstein Studio",
    date: "Feb 2024 to Dec 2024",
    description:
      "Built configuration and onboarding experiences for Einstein Studio, the AI model hub behind Salesforce's generative AI products.",
    highlights: [
      "Built configuration and onboarding UI for Model Builder, letting customers bring their own external LLMs and predictive models into Salesforce products",
      "Standardized E2E testing across the team. Built helper utilities and wrote guidance docs that replaced ad-hoc string-based accessors and cut duplication",
    ],
  },
  {
    year: "2023",
    role: "Senior Software Engineer",
    company: "Capital One",
    date: "Apr 2023 to Jan 2024",
    description:
      "Worked on a backend modernization initiative that migrated legacy services to serverless Spring Boot microservices on AWS.",
    highlights: [
      "Migrated services from legacy Spring to Spring Boot microservices on AWS Lambda, part of a broader organizational shift to serverless",
      "Implemented backwards-compatible API features supporting data tokenization during a database migration",
    ],
  },
  {
    year: "2017",
    role: "Senior Software Engineer",
    company: "MuleSoft (a Salesforce company)",
    date: "May 2017 to Mar 2023",
    description:
      "Owned MuleSoft's API Console, a Web Components-based shared dependency used by four product teams, for nearly six years. Started as an intern and was promoted three times to Senior. Relocated from Argentina to New York along the way.",
    highlights: [
      "Took over API Console and stabilized it through bug fixes, regression test infrastructure, and UX rework. Moved its four consuming teams onto a unified build pipeline",
      "Designed a chunked-query architecture for GraphQL models of up to 30 MB, making previously unusable documentation pages load",
      "Led API Console's migration from LitElement to Lightning Web Components, with one codebase producing both a Salesforce-platform build and an open-source bundle for MuleSoft's React apps",
      "Built a Jenkins-dispatched test runner that ran the suites of 15+ interdependent component repositories together, catching cross-repo regressions before release",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    icon: "🎁",
    name: "giftpool",
    description:
      "A platform for creating gifting groups and managing shared wishlists. It replaces the \"what do we all get them?\" thread in the group chat. Designed, built, and run solo. Live in production since 2024.",
    tech: ["React Router v7", "TypeScript", "Prisma", "Fly.io"],
    url: "https://giftpool.app/",
  },
  {
    icon: "🧾",
    name: "splittr",
    description:
      "A lightweight web app for itemizing invoices with proportional tax splitting. It saves you the math and the spreadsheet when splitting the check at the table.",
    tech: ["React", "JavaScript", "SCSS"],
    url: "https://splittr.twoplustwoone.dev/",
  },
];

export const patents: Patent[] = [
  {
    number: "US10977011B2",
    label: "US Patent No.",
    title: "Structured Development for Web",
    titleLine2: "Application Frameworks",
    description:
      "Sole inventor. A development tool that analyzes a web application's component specification, breaks it down into its functional parts, and revises it to remove redundant components and reuse existing ones. Granted by the USPTO in 2021.",
    url: "https://patents.google.com/patent/US10977011B2/en",
  },
  {
    number: "US20250272425A1",
    label: "US Patent Application No.",
    title: "API Consumption",
    titleLine2: "(patent pending)",
    description:
      "Co-inventor. An API portal that manages a catalog of APIs from multiple sources, controls which users can access which APIs, supports a customizable portal layout, and generates logs and metrics for each API.",
    url: "https://patents.google.com/patent/US20250272425A1/en",
  },
];

// ─── About ─────────────────────────────────────────────────
export const quickFacts: QuickFact[] = [
  {
    label: "Based in",
    value: "New York City",
    subValue: "Seattle-bound in early 2027 · emotionally in Buenos Aires",
  },
  {
    label: "Education",
    value: "Software Engineering",
    subValue: "Universidad Austral · 5-year program",
  },
  { label: "Patents", value: "1 granted · 1 pending" },
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
      "Smooth. Fast. Warm color palette. Finally, a man who understands that orange is the superior color. Five stars. I supervised the entire build from above, which is the only correct place to watch from.",
  },
  {
    name: "Truffle",
    avatar: "🍫",
    title: "Chief Noise Officer · Certified Velcro Cat",
    stars: "★★★☆☆",
    review:
      "I voiced 47 concerns during development. He addressed zero of them. The site is fine. The 'Currently' section doesn't mention me once, which is an oversight I'll be vocalizing for the foreseeable future.",
  },
  {
    name: "Muffin",
    avatar: "🧁",
    title: "Head of Security · Bathroom Surveillance Division",
    stars: "★★☆☆☆",
    review:
      "There is an entire 'About' section with no mention of the food bowl situation in this apartment. Two stars. The design is warm, which I respect. I am not a monster.",
  },
];
