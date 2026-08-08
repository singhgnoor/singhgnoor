import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/hero/Hero";
import FeaturedWork from "@/components/work/FeaturedWork";
import MoreProjects from "@/components/work/MoreProjects";
import Skills from "@/components/skills/Skills";
import ResearchInterests from "@/components/research/ResearchInterests";
import Leadership from "@/components/leadership/Leadership";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Navigation />
      <main id="main-content">
        <Hero />
        <section className="intro section-pad" id="about">
          <div className="section-kicker">00 / Orientation</div>
          <div className="intro-grid">
            <h2 className="display intro-title">A working<br /><em>vocabulary</em><br />for systems.</h2>
            <div className="intro-copy">
              <p>Gurnoor Singh is a B.Tech Computer Science and Engineering student at IIT Ropar, working across AI systems, backend architecture, and technical experiments.</p>
              <div className="intro-facts">
                <div><span>Based in</span><strong>Rupnagar, Punjab, India</strong><small>from Jalandhar, Punjab</small></div>
                <div><span>Program</span><strong>IIT Ropar · B.Tech CSE</strong><small>2025–2029</small></div>
                <div><span>Academic signal</span><strong>CGPA 9.45</strong><small>Sem 1 &amp; 2</small></div>
              </div>
            </div>
          </div>
        </section>
        <FeaturedWork />
        <MoreProjects />
        <Skills />
        <ResearchInterests />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
