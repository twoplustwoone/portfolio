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
  "https://docs.google.com/document/d/1Y_BIULNFCv1uIMWFlRSWDpZOc2y8k-GaNEW8uFweVZ8/export?format=pdf";

export const githubAvatarUrl =
  "https://avatars.githubusercontent.com/twoplustwoone";

// ─── Experience ────────────────────────────────────────────
export const experiences: WorkExperience[] = [
  {
    year: "2024",
    role: "Software Engineer",
    company: "Salesforce — Einstein Studio",
    date: "Feb 2024 – Dec 2024",
    description:
      "Built and optimized user-facing features for Einstein Studio, the AI model hub powering Salesforce's generative AI products.",
    highlights: [
      "Delivered provider-agnostic LLM integration on a tight deadline, increasing customer engagement by 12%",
      "Implemented Jest and Selenium E2E tests, reaching 90% coverage and reducing regressions by 15%",
      "Optimized pagination via lazy loading, cutting page load times by 17%",
    ],
  },
  {
    year: "2023",
    role: "Senior Software Engineer",
    company: "Capital One",
    date: "Apr 2023 – Jan 2024",
    description:
      "Redesigned core backend systems with Spring Boot and microservices, improving scalability and deployment reliability.",
    highlights: [
      "Refactored legacy code to Spring Boot microservices with AWS Lambda, cutting costs and boosting scalability",
      "Reduced deployment time to under 4 minutes through improved pipeline design",
      "Designed API features for seamless data tokenization, reducing migration downtime by 15%",
    ],
  },
  {
    year: "2018",
    role: "Software Engineer → Senior Engineer",
    company: "Salesforce",
    date: "Feb 2018 – Mar 2023",
    description:
      "Four-plus years across multiple Salesforce teams — developer tooling, platform infrastructure, and LWC migrations at scale.",
    highlights: [
      "Led migration to Lightning Web Components, improving rendering speed by 18%",
      "Revamped stale product, clearing backlog and cutting monthly bug logs by 60%",
      "Integrated GraphQL APIs and optimized caching, improving query performance by 16%",
      "Automated CI/CD with Jenkins and Node.js, cutting manual work by 30%",
    ],
  },
  {
    year: "2017",
    role: "Software Engineer Intern → Engineer",
    company: "MuleSoft",
    date: "May 2017 – Jan 2020",
    description:
      "Started as an intern, joined full-time, and helped pioneer key integrations between MuleSoft and Salesforce post-acquisition.",
    highlights: [
      "Built early interactive monitoring dashboards with real-time data filtering",
      "Developed core UI components leveraging Salesforce communities using MuleSoft data",
      "Conducted usability tests that improved customer satisfaction scores by 15%",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    icon: "🎁",
    name: "giftpool",
    description:
      "A platform for creating gifting groups and managing shared wishlists. Built to solve the \u201cwhat do we all get them?\u201d problem \u2014 because coordinating gifts over a group chat is a special kind of chaos.",
    tech: ["React", "TypeScript", "Node.js"],
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
  title: "Structuring web apps through",
  titleLine2: "a specification file",
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
    value: "B.S. Software Engineering",
    subValue: "Universidad Austral",
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
    name: "Loaf",
    avatar: "🍞",
    title: "Senior Nap Engineer · Portfolio Critic",
    stars: "★★★☆☆",
    review:
      "The hover animations are smooth. He redid them four times. I was trying to sleep on the keyboard for three of those. Three stars. He fed me on time today so I'm being generous.",
  },
  {
    name: "Beans",
    avatar: "🫘",
    title: "Lead Chaos Agent · Snack Strategist",
    stars: "★★☆☆☆",
    review:
      "He spent two hours on a gradient that I immediately walked across. The \"Currently\" section lists gaming before my dinner schedule. Factually incorrect prioritization. Two stars.",
  },
];
