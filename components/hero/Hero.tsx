"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = visual.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-lines" aria-hidden="true"></div>
      <div className="hero-top"><span>Portfolio / 2026</span><span>Rupnagar, India</span><span className="hero-status"><i></i> Open to the unknown</span></div>
      <div className="hero-copy">
        <p className="eyebrow reveal">B.Tech CSE · IIT Ropar · 2025–2029</p>
        <h1 className="hero-title"><span>Gurnoor</span><span className="hero-title-offset">Singh</span></h1>
        <p className="hero-line">AI systems <b>/</b> backend architecture <b>/</b><br className="desktop-only" /> technical experiments</p>
      </div>
      <div className="hero-orbit" ref={visual} aria-hidden="true">
        <svg viewBox="0 0 600 600" role="presentation">
          <defs><filter id="soft-glow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
          <circle className="orbit orbit-one" cx="300" cy="300" r="218" /><circle className="orbit orbit-two" cx="300" cy="300" r="142" />
          <path className="trace" d="M76 342 C175 185 214 428 326 254 S450 184 526 312" />
          <path className="trace trace-faint" d="M96 192 C220 302 302 118 506 438" />
          <circle className="node node-signal" cx="326" cy="254" r="8" filter="url(#soft-glow)" /><circle className="node" cx="76" cy="342" r="5" /><circle className="node" cx="526" cy="312" r="5" /><circle className="node" cx="300" cy="300" r="3" />
          <text x="300" y="292" textAnchor="middle" className="svg-label">SYSTEM</text><text x="300" y="318" textAnchor="middle" className="svg-label svg-label-small">/ SIGNAL MAP 01</text>
        </svg>
      </div>
      <div className="hero-bottom"><span>Scroll to inspect</span><span className="scroll-line"></span><span>© 2026</span></div>
    </section>
  );
}
