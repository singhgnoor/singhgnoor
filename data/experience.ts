export interface Experience {
  title: string;
  organization: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    title: "Technical Coordinator",
    organization: "Iota Cluster (AI/ML Club), IIT Ropar",
    period: "June 2026–Present",
  },
  {
    title: "UG Mentor",
    organization: "IIT Ropar",
    period: "June 2026–Present",
  },
  {
    title: "Year-Representative",
    organization: "Student Legislative Council, IIT Ropar",
    period: "Aug 2025–May 2026",
  },
];

export interface ResearchInterest {
  label: string;
  primary: boolean;
}

export const researchInterests: ResearchInterest[] = [
  { label: "Explainable AI in Chest X-rays", primary: true },
  { label: "RAG/LLM pipelines", primary: true },
  { label: "AI systems", primary: false },
  { label: "backend architecture", primary: false },
  { label: "developer tooling", primary: false },
  { label: "automation systems", primary: false },
  { label: "data science", primary: false },
  { label: "computer vision", primary: false },
];
