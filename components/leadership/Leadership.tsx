import { experiences } from "@/data/experience";
import ScrollDepth from "@/components/motion/ScrollDepth";

export default function Leadership() {
  return <section className="leadership section-pad" id="leadership"><div className="section-kicker">05 / Beyond code</div><div className="leadership-head"><h2 className="display">The work<br /><em>around the work.</em></h2><p>Titles, organizations, and dates — left intentionally open to the work they will hold.</p></div><div className="leadership-list">{experiences.map((item, index) => <ScrollDepth key={item.title} className="leadership-depth" rotate={index % 2 ? 2.5 : 3.5} amount={.7} y={10}><div className="leadership-row"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.organization}</p><time>{item.period}</time></div></ScrollDepth>)}</div></section>;
}
