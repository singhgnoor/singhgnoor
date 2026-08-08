"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ScrollDepth from "@/components/motion/ScrollDepth";

export default function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`case-study case-${index % 2 ? "reverse" : "normal"}`}>
      <div className="case-index">0{index + 1}</div>
      <ScrollDepth className="case-visual" rotate={index % 2 ? 3 : 4} amount={1.1}><ProjectVisual projectId={project.id} /></ScrollDepth>
      <div className="case-copy">
        <p className="project-label">{project.subtitle}</p>
        <h3>{project.name}</h3>
        <p className="case-description">{project.description}</p>
        <div className="tech-line">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        <button className="details-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Close detail" : "Inspect detail"} <b>{open ? "—" : "+"}</b></button>
        <div className={`case-details ${open ? "is-open" : ""}`}><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
      </div>
    </article>
  );
}
