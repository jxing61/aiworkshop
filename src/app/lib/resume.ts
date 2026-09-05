export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const profile = {
  name: "Jiali (Lily) Grellner",
  title: "Data Analyst & MPA",
  location: "Oklahoma City, OK",
  email: "jxing@uco.edu",
};

export const summary = [
  "MPA degree from University of Central Oklahoma. Bachelors and Masters degrees in Public Administration from Zhejiang Normal University.",
  "Substantial work experience in data analysis, office administration, teaching, research, marketing, and advertising. Founder and manager of a tutoring center.",
  "Enthusiastic and conscientious. Excellent communication and people skills.",
];

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst",
    organization: "Oklahoma State Department of Education",
    period: "Oct 2022 – Present",
    location: "",
    highlights: [],
  },
  {
    role: "Legal Secretary",
    organization: "Oklahoma Tax Commission",
    period: "Oct 2019 – Oct 2022",
    location: "",
    highlights: [
      "Drafted legal documents",
      "Assisted with the daily needs of the attorneys",
      "Communicated effectively with team members and taxpayers",
    ],
  },
  {
    role: "Tax Document Examiner",
    organization: "Oklahoma Tax Commission",
    period: "Jun 2018 – Oct 2019",
    location: "",
    highlights: [],
  },
  {
    role: "Research Assistant",
    organization: "University of Central Oklahoma",
    period: "May 2016 – Feb 2017",
    location: "",
    highlights: [],
  },
  {
    role: "Founder, Manager, and Teacher",
    organization: "Yingzhifu Tutoring Center — Jinhua, China",
    period: "Jan 2010 – Aug 2015",
    location: "",
    highlights: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    skills: ["C++", "Java"],
  },
  {
    label: "Professional",
    skills: [
      "Data analysis",
      "Research and teaching",
      "Effective training ability",
      "Engaging public speaker",
      "Quick learner",
      "Works effectively in teams",
      "Bilingual: English, Chinese",
    ],
  },
  {
    label: "Office Tools",
    skills: ["Word", "Excel", "PowerPoint", "Access"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Oklahoma City Community College",
    degree: "Computer Science",
    period: "Jun 2021 – Dec 2022",
    location: "Oklahoma City, OK",
  },
  {
    institution: "University of Central Oklahoma",
    degree: "Master of Public Administration",
    period: "Dec 2015",
    location: "Edmond, OK",
  },
  {
    institution: "Zhejiang Normal University",
    degree: "Master of Administration (Public Administration)",
    period: "Jun 2015",
    location: "Jinhua, Zhejiang, China",
  },
  {
    institution: "Zhejiang Normal University",
    degree: "Bachelor of Administration (Public Administration)",
    period: "Jun 2012",
    location: "Jinhua, Zhejiang, China",
  },
];