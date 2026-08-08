export interface Project {
  id: string;
  name: string;
  subtitle: string;
  tech: string[];
  description: string;
  details: string[];
  featured: boolean;
  category: string;
}

export const featuredProjects: Project[] = [
  {
    id: "finagent",
    name: "FinAgent",
    subtitle: "Multi-Agent Financial Analysis System",
    tech: ["LangGraph", "BM25", "FAISS", "Cross-Encoder"],
    category: "AI Systems",
    description:
      "A four-stage LangGraph pipeline for financial reasoning — from ingestion through retrieval, analysis, and decision.",
    details: [
      "Designed a four-stage LangGraph pipeline (Ingestion → Retrieval → Analysis → Decision) for financial reasoning.",
      "Built hybrid RAG retrieval using BM25 + FAISS with Reciprocal Rank Fusion and cross-encoder reranking.",
      "Implemented provider-agnostic LLM abstraction supporting deterministic rule-based reasoning with confidence scoring.",
    ],
    featured: true,
  },
  {
    id: "orion",
    name: "Orion",
    subtitle: "Personal AI Companion",
    tech: ["Python", "Claude API", "SQLite", "Telegram API"],
    category: "AI Systems",
    description:
      "Self-built AI assistant with persistent memory, tool use, and multi-platform integration.",
    details: [
      "Built persistent-memory using SQLite and JSON for long-term conversational context.",
      "Implemented mood-aware Spotify queue generation with playback state incorporated into conversational context.",
      "Integrated multi-provider tools: Tavily Search, Spotify, Weather, Finance, News APIs.",
      "Designed a modular tool-calling architecture without relying on high-level agent frameworks.",
    ],
    featured: true,
  },
  {
    id: "valhalla",
    name: "Valhalla",
    subtitle: "Multi-Agent Generative Simulation",
    tech: ["Python", "LangGraph", "Gemini API", "Pydantic"],
    category: "AI Simulation",
    description:
      "College campus simulation of autonomous AI agents modeled on Stanford's \"Generative Agents\" paper, set at IIT Ropar.",
    details: [
      "Built a hierarchical planning engine decomposing daily schedules into hourly and fine-grained executable actions.",
      "Designed a world-engine simulation supporting parallel agent decision-making, event broadcasting, and persistent memory.",
      "Debugged structured-output failures and optimized parallel agent execution within a centralized World Engine tick system.",
      "Developed a provider-agnostic Protocol-based LLM abstraction enabling runtime backend switching.",
    ],
    featured: true,
  },
  {
    id: "campus-digital-twin",
    name: "Campus Digital Twin",
    subtitle: "3D Reconstruction of IIT Ropar",
    tech: ["COLMAP", "3D Gaussian Splatting", "HLoc", "SuperPoint/SuperGlue"],
    category: "Computer Vision",
    description:
      "Two-person project reconstructing a photorealistic 3D model of campus from images.",
    details: [
      "Performed Structure-from-Motion sparse reconstruction using COLMAP.",
      "Built a visual localization track for pose estimation using deep feature matching (SuperPoint/SuperGlue).",
    ],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: "winrx",
    name: "WinRx",
    subtitle: "Pharmacy Desktop Automation",
    tech: ["Python", "PyAutoGUI", "Tesseract OCR"],
    category: "Automation · Freelance",
    description:
      "Automated repetitive data-entry tasks in a legacy desktop application for a pharmacy client.",
    details: [
      "Automated repetitive data-entry tasks in a legacy desktop application for a pharmacy client.",
      "Resolved DPI-scaling reliability issues by switching from coordinate-based to OCR-based UI element detection.",
    ],
    featured: false,
  },
  {
    id: "jarvis",
    name: "Jarvis",
    subtitle: "Intelligent Personal Assistant",
    tech: ["Python", "Speech Recognition", "APIs", "Automation"],
    category: "Automation · Built over two years",
    description:
      "Voice-controlled system executing productivity commands with integrated music control, web search, and automation workflows.",
    details: [
      "Voice-controlled system executing productivity commands.",
      "Integrated music control, web search, and automation workflows.",
      "Implemented rep counting, face recognition login, and gesture interaction.",
    ],
    featured: false,
  },
  {
    id: "tulen",
    name: "Tulen",
    subtitle: "Beauty Consultancy Platform",
    tech: ["Django", "HTML", "CSS", "JavaScript"],
    category: "Full-Stack Web",
    description:
      "Full-stack web platform for a beauty brand: responsive UI, animations, backend integration.",
    details: [
      "Full-stack web platform for a beauty brand: responsive UI, animations, backend integration.",
    ],
    featured: false,
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];
