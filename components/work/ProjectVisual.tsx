import ScrollDepth from "@/components/motion/ScrollDepth";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function ProjectVisual({ projectId }: { projectId: string }) {
  const reduced = useReducedMotion();
  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.85 },
    visible: (index = 0) => ({ opacity: 1, scale: 1, transition: { duration: reduced ? 0.4 : 0.5, delay: reduced ? 0 : 0.12 + index * 0.12, ease: "easeOut" } }),
  };
  const lineVariants: Variants = {
    hidden: { pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 },
    visible: (index = 0) => ({ pathLength: 1, opacity: 1, transition: { duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.72 + index * 0.12, ease: "easeOut" } }),
  };
  const coreVariants: Variants = {
    hidden: { opacity: 0, scale: reduced ? 1 : 0 },
    visible: { opacity: 1, scale: reduced ? 1 : [0, 1.1, 1], transition: { duration: reduced ? 0.4 : 0.7, delay: reduced ? 0 : 0.72, ease: "easeOut" } },
  };
  const labels: Record<string, string[]> = {
    finagent: ["INGESTION", "RETRIEVAL", "ANALYSIS", "DECISION"],
    orion: ["MEMORY", "SEARCH", "SPOTIFY", "WEATHER", "FINANCE", "NEWS"],
    valhalla: ["AGENT 01", "WORLD ENGINE", "MEMORY", "TICK"],
    "campus-digital-twin": ["COLMAP", "HLOC", "POSE", "SPLAT"],
  };
  const nodes = labels[projectId] || [];
  return (
    <motion.div className={`project-visual visual-${projectId}`} aria-label={`Abstract visualization for ${projectId}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <ScrollDepth className="visual-background-depth" amount={0.35} rotate={1.5} y={12}><div className="visual-grid"></div></ScrollDepth>
      <div className="visual-caption">CONCEPTUAL VISUAL / {projectId.toUpperCase()}</div>
      <svg className="visual-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {nodes.map((label, index) => {
          const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 30;
          const y = 50 + Math.sin(angle) * 30;
          const nextAngle = ((index + 1) % nodes.length / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const nextX = 50 + Math.cos(nextAngle) * 30;
          const nextY = 50 + Math.sin(nextAngle) * 30;
          return <motion.path key={`connection-${label}`} custom={index} variants={lineVariants} d={`M ${x} ${y} L ${nextX} ${nextY}`} />;
        })}
      </svg>
      {nodes.map((label, index) => {
        const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const left = 50 + Math.cos(angle) * 30;
        const top = 50 + Math.sin(angle) * 30;
        return <motion.div className="visual-node" key={label} custom={index} variants={nodeVariants} style={{ left: `${left}%`, top: `${top}%` }}><span>{label}</span></motion.div>;
      })}
      <motion.div className="visual-core" variants={coreVariants}></motion.div>
      {projectId === "finagent" && <ScrollDepth className="visual-pipeline-depth" rotate={3}><div className="visual-pipeline">{nodes.map((label) => <span key={label}>{label}</span>)}</div></ScrollDepth>}
      {projectId === "campus-digital-twin" && <ScrollDepth className="visual-point-depth" rotate={5}><div className="point-cloud">{Array.from({ length: 32 }).map((_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties}></i>)}</div></ScrollDepth>}
    </motion.div>
  );
}
