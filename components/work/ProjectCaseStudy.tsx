"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ScrollDepth from "@/components/motion/ScrollDepth";

export default function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const copyVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: reduced ? 0 : 0.15, staggerChildren: reduced ? 0 : 0.06, ease: "easeOut" } },
  };
  const textItem: Variants = { hidden: { opacity: 0, y: reduced ? 0 : 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
  return (
    <motion.article className={`case-study case-${index % 2 ? "reverse" : "normal"}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className="case-index">0{index + 1}</div>
      <ScrollDepth className="case-visual" rotate={index % 2 ? 3 : 4} amount={1.1}><ProjectVisual projectId={project.id} /></ScrollDepth>
      <motion.div className="case-copy" variants={copyVariants}>
        <motion.p className="project-label" variants={textItem}>{project.subtitle}</motion.p>
        <motion.h3 variants={textItem}>{project.name}</motion.h3>
        <motion.p className="case-description" variants={textItem}>{project.description}</motion.p>
        <motion.div className="tech-line" variants={textItem}>{project.tech.map((item) => <motion.span key={item} whileHover={reduced ? undefined : { scale: 1.05, backgroundColor: "#c26b4e", color: "#10151a" }} transition={{ duration: 0.2 }}>{item}</motion.span>)}</motion.div>
        <motion.button className="details-toggle" variants={textItem} whileHover={reduced ? undefined : "hover"} onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Close detail" : "Inspect detail"} <motion.b variants={{ hover: { x: 4, rotate: 12 } }}>{open ? "—" : "+"}</motion.b></motion.button>
        <div className={`case-details ${open ? "is-open" : ""}`}><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
      </motion.div>
    </motion.article>
  );
}
