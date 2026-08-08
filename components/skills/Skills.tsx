import { skillCategories } from "@/data/skills";

export default function Skills() {
  return <section className="skills section-pad" id="skills"><div className="section-kicker">03 / Technical index</div><div className="skills-intro"><h2 className="display">Tools for<br /><em>thinking in layers.</em></h2><p>The taxonomy stays close to the work: languages, frameworks, models, and ways to inspect what a system is doing.</p></div><div className="skill-index">{skillCategories.map((category, index) => <div className="skill-row" key={category.name}><span className="skill-no">0{index + 1}</span><h3>{category.name}</h3><div>{category.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>)}</div></section>;
}
