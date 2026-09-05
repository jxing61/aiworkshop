export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  highlights?: string[];
  href?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const profile = {
  name: "Lily Grellner",
  title: "Senior Frontend Engineer",
  tagline:
    "I build fast, accessible interfaces that people love using — and teams love maintaining.",
  location: "Seattle, WA",
  email: "lily.grellner@example.com",
  phone: "+1 (206) 555-0142",
  availability: "Open to select opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/lilygrellner" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lilygrellner" },
    { label: "Email", href: "mailto:lily.grellner@example.com" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I'm a frontend engineer with eight years of experience turning ambitious product ideas into dependable, fast web applications. I care about the details: motion that explains, layouts that hold up on any screen, and code that reads like a conversation.",
  "Most recently I've focused on design systems and developer experience — building the shared primitives that let a small team ship like a large one. I enjoy mentoring other engineers and pairing with designers to close the gap between spec and shipped UI.",
  "When I'm not at a keyboard you'll find me trail running around the Pacific Northwest, or at the farmers market with way too many tomatoes.",
];

export const experience: ExperienceItem[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Atlas Commerce",
    period: "2022 — Present",
    location: "Seattle, WA",
    highlights: [
      "Led a redesign of the checkout flow that lifted conversion by 18% and cut server render time 40%.",
      "Built the internal design system consumed by 12 teams, reducing time-to-ship for new pages by half.",
      "Mentored four engineers through first code review, promotion, and on-call ownership.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Harbor Analytics",
    period: "2019 — 2022",
    location: "Portland, OR",
    highlights: [
      "Shipped a real-time dashboard for 40k daily users with sub-second filtering across millions of rows.",
      "Introduced server-side rendering and code-splitting, improving time-to-interactive by 60%.",
      "Drove accessibility adoption: WCAG 2.1 AA compliance across the product and a keyboard-first mobile app.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Brightline Studio",
    period: "2017 — 2019",
    location: "San Francisco, CA",
    highlights: [
      "Built and launched 20+ marketing and product sites for startup clients on React and Next.js.",
      "Created a reusable component library that became the studio's default client build.",
      "Automated visual regression testing, cutting release-blocking UI regressions by 70%.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "GraphQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    label: "Tooling & Testing",
    skills: ["Vitest", "Playwright", "Storybook", "GitHub Actions", "npm"],
  },
  {
    label: "Design & Experience",
    skills: ["Accessibility", "Design Systems", "Figma", "Motion"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Kite Design System",
    description:
      "An open-source React design system with 40+ accessible components, dark mode, and a live playground.",
    tags: ["React", "TypeScript", "Storybook"],
    highlights: ["1.2k GitHub stars", "Used across 12 internal teams"],
    href: "https://github.com/lilygrellner/kite",
  },
  {
    name: "trailhead",
    description:
      "A tiny serverless app for logging trail runs and charting progress with simple, honest visuals.",
    tags: ["Next.js", "Tailwind CSS", "Postgres"],
    href: "https://github.com/lilygrellner/trailhead",
  },
  {
    name: "Wavestats",
    description:
      "WebGL audio visualizer that renders microphone input into flowing waveforms in the browser.",
    tags: ["TypeScript", "WebGL", "Canvas"],
  },
  {
    name: "Snack-case",
    description:
      "A tiny utility library for converting between case styles — typed, tested, and dependency-free.",
    tags: ["TypeScript", "Vitest"],
    href: "https://www.npmjs.com/package/snack-case",
  },
];