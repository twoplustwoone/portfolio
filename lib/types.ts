export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface WorkExperience {
  year: string;
  role: string;
  company: string;
  date: string;
  description: string;
  highlights: string[];
}

export interface Project {
  icon: string;
  name: string;
  description: string;
  tech: string[];
  url: string;
}

export interface Patent {
  number: string;
  title: string;
  titleLine2: string;
  description: string;
  url: string;
}

export interface CurrentlyItem {
  emoji: string;
  text: string;
  note: string;
}

export interface QuickFact {
  label: string;
  value: string;
  subValue?: string;
}

export interface CatReview {
  name: string;
  avatar: string;
  title: string;
  stars: string;
  review: string;
}
