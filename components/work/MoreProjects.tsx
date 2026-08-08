import { otherProjects } from "@/data/projects";

export default function MoreProjects() {
  return <section className="more-projects section-pad"><div className="section-heading compact"><div><span className="section-kicker">02 / Further experiments</span><h2 className="display">Other<br /><em>threads.</em></h2></div><p className="heading-note">Smaller surfaces, same instinct to understand how the parts connect.</p></div><div className="more-list">{otherProjects.map((project) => <article key={project.id}><span className="more-number">/</span><div><h3>{project.name}</h3><p>{project.subtitle}</p></div><div className="more-tech">{project.tech.join(" · ")}</div><p className="more-description">{project.description}</p></article>)}</div></section>;
}
