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
      "Building frontend features across Atlassian's analytics and prospecting products — from charting tools to a GraphQL-backed preferences system.",
    highlights: [
      "Built a 'create chart from table' feature enabling users to turn data views into dashboard charts",
      "Refactored chart query logic (SalesQL) to align charts with global filters, eliminating inconsistent time views",
      "Architected and led migration of a fragmented localStorage preferences system to a centralized, GraphQL-backed package — authored the RFC, designed usePreference hooks, and migrated all preference categories",
      "Defined frontend architecture for a lead prospecting product using typed view models and data mapping for evolving APIs",
    ],
  },
  {
    year: "2024",
    role: "Software Engineer",
    company: "Salesforce — Einstein Studio",
    date: "Feb 2024 – Dec 2024",
    description:
      "Built and optimized user-facing features for Einstein Studio, the AI model hub powering Salesforce's generative AI products.",
    highlights: [
      "Built a provider-agnostic LLM layer supporting multiple backends, enabling rapid iteration and increasing engagement by 12%",
      "Enhanced pagination with lazy loading and responsive design, reducing page load times by 17%",
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
      "Refactored legacy systems to Spring Boot microservices on AWS Lambda, reducing costs 25% and capacity 40%",
      "Engineered API features for secure data tokenization, reducing migration downtime by 15%",
    ],
  },
  {
    year: "2020",
    role: "Software Engineer → Senior Software Engineer",
    company: "Salesforce",
    date: "Feb 2020 – Mar 2023",
    description:
      "Worked across platform infrastructure and developer tooling — automating CI/CD pipelines, improving GraphQL performance, and shipping product improvements at scale.",
    highlights: [
      "Automated CI/CD workflows with Jenkins and Node.js, streamlining exports and cutting manual work by 30%",
      "Improved GraphQL performance via caching, reducing latency 15% and improving responsiveness 16%",
    ],
  },
  {
    year: "2018",
    role: "Junior Software Engineer",
    company: "Salesforce",
    date: "Feb 2018 – Jan 2020",
    description:
      "Started as a junior engineer in Argentina, building reusable UI components and establishing engineering practices within the team.",
    highlights: [
      "Designed reusable Salesforce UI components with MuleSoft, increasing development speed by 40%",
      "Introduced a code review process that cut review time by 20% and accelerated deployment cycles",
    ],
  },
  {
    year: "2017",
    role: "Software Engineer Intern",
    company: "MuleSoft",
    date: "May 2017 – Jan 2018",
    description:
      "Interned in Argentina building interactive monitoring dashboards and real-time data filtering tools.",
    highlights: [
      "Built interactive monitoring dashboards with real-time filtering, cutting issue detection time by 35%",
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
