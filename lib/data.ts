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
