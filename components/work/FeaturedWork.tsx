import { featuredProjects } from "@/data/projects";
import ProjectCaseStudy from "./ProjectCaseStudy";

export default function FeaturedWork() {
  return (
    <section className="work section-pad" id="work">
      <div className="section-heading"><div><span className="section-kicker">01 / Selected systems</span><h2 className="display">Built to be<br /><em>examined.</em></h2></div><p className="heading-note">Four studies in orchestration, memory, retrieval, and reconstruction.</p></div>
      <div className="featured-list">
        {featuredProjects.map((project, index) => <ProjectCaseStudy key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
