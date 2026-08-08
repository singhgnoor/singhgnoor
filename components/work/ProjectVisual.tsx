import ScrollDepth from "@/components/motion/ScrollDepth";

export default function ProjectVisual({ projectId }: { projectId: string }) {
  const labels: Record<string, string[]> = {
    finagent: ["INGESTION", "RETRIEVAL", "ANALYSIS", "DECISION"],
    orion: ["MEMORY", "SEARCH", "SPOTIFY", "WEATHER", "FINANCE", "NEWS"],
    valhalla: ["AGENT 01", "WORLD ENGINE", "MEMORY", "TICK"],
    "campus-digital-twin": ["COLMAP", "HLOC", "POSE", "SPLAT"],
  };
  const nodes = labels[projectId] || [];
  return (
    <div className={`project-visual visual-${projectId}`} aria-label={`Abstract visualization for ${projectId}`}>
      <ScrollDepth className="visual-background-depth" amount={0.35} rotate={1.5} y={12}><div className="visual-grid"></div></ScrollDepth>
      <div className="visual-caption">CONCEPTUAL VISUAL / {projectId.toUpperCase()}</div>
      {nodes.map((label, index) => {
        const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const left = 50 + Math.cos(angle) * 30;
        const top = 50 + Math.sin(angle) * 30;
        return <div className="visual-node" key={label} style={{ left: `${left}%`, top: `${top}%` }}><span>{label}</span></div>;
      })}
      <div className="visual-core"></div>
      {projectId === "finagent" && <ScrollDepth className="visual-pipeline-depth" rotate={3}><div className="visual-pipeline">{nodes.map((label) => <span key={label}>{label}</span>)}</div></ScrollDepth>}
      {projectId === "campus-digital-twin" && <ScrollDepth className="visual-point-depth" rotate={5}><div className="point-cloud">{Array.from({ length: 32 }).map((_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties}></i>)}</div></ScrollDepth>}
    </div>
  );
}
