import { experiences } from "@/data/experience";

export default function Leadership() {
  return <section className="leadership section-pad" id="leadership"><div className="section-kicker">05 / Beyond code</div><div className="leadership-head"><h2 className="display">The work<br /><em>around the work.</em></h2><p>Titles, organizations, and dates — left intentionally open to the work they will hold.</p></div><div className="leadership-list">{experiences.map((item, index) => <div className="leadership-row" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.organization}</p><time>{item.period}</time></div>)}</div></section>;
}
