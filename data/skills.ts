export interface SkillCategory {
  name: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    technologies: ["Python", "C", "C++", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "Backend & Frameworks",
    technologies: ["Django", "Flask", "REST APIs", "FastAPI", "Hosting"],
  },
  {
    name: "LLM/AI",
    technologies: [
      "LangChain",
      "LangGraph",
      "RAG",
      "LLM Integration",
      "LLM Tool-calling",
    ],
  },
  {
    name: "Data Science & ML",
    technologies: [
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "Matplotlib",
    ],
  },
  {
    name: "Tools & Technologies",
    technologies: ["Git", "REST APIs", "Automation Scripting", "GitHub Copilot"],
  },
  {
    name: "Explainable AI",
    technologies: ["SHAP", "model interpretation concepts", "XAI in CV"],
  },
];
