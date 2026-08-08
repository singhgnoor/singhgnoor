"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const visual = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const orbitY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, isMobile ? 45 : 90]);
  const portraitY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, isMobile ? 20 : 42]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [isMobile ? 1 : 2.5, isMobile ? -1 : -2.5]);

  useEffect(() => {
    const node = visual.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (portraitRef.current && window.innerWidth > 800) {
        portraitRef.current.style.setProperty("--portrait-tilt-x", `${(event.clientY / window.innerHeight - 0.5) * -2}deg`);
        portraitRef.current.style.setProperty("--portrait-tilt-y", `${(event.clientX / window.innerWidth - 0.5) * 2}deg`);
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-grid-lines" aria-hidden="true"></div>
      <div className="hero-top"><span>Portfolio / 2026</span><span>Rupnagar, India</span><span className="hero-status"><i></i> Open to the unknown</span></div>
      <div className="hero-copy">
        <p className="eyebrow reveal">B.Tech CSE · IIT Ropar · 2025–2029</p>
        <h1 className="hero-title"><span>Gurnoor</span><span className="hero-title-offset">Singh</span></h1>
        <p className="hero-line">AI systems <b>/</b> backend architecture <b>/</b><br className="desktop-only" /> technical experiments</p>
      </div>
      <motion.div className="hero-orbit" ref={visual} style={{ y: orbitY }} aria-hidden="true">
        <svg viewBox="0 0 600 600" role="presentation">
          <defs><filter id="soft-glow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
          <circle className="orbit orbit-one" cx="300" cy="300" r="218" /><circle className="orbit orbit-two" cx="300" cy="300" r="142" />
          <path className="trace" d="M76 342 C175 185 214 428 326 254 S450 184 526 312" />
          <path className="trace trace-faint" d="M96 192 C220 302 302 118 506 438" />
          <circle className="node node-signal" cx="326" cy="254" r="8" filter="url(#soft-glow)" /><circle className="node" cx="76" cy="342" r="5" /><circle className="node" cx="526" cy="312" r="5" /><circle className="node" cx="300" cy="300" r="3" />
          <text x="300" y="292" textAnchor="middle" className="svg-label">SYSTEM</text><text x="300" y="318" textAnchor="middle" className="svg-label svg-label-small">/ SIGNAL MAP 01</text>
        </svg>
      </motion.div>
      <motion.div className="hero-portrait depth-perspective" ref={portraitRef} style={{ y: portraitY, rotateY: portraitRotate }} initial={reduced ? { opacity: 1, scale: 1, clipPath: "inset(0 0 0 0)" } : { opacity: 0, scale: .92, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.25, delay: 1.05, ease: [0.16, 1, 0.3, 1] }} aria-label="Portrait placeholder">
        {/* Replace /images/portrait-placeholder.png with the final selected photo. */}
        <div className="hero-portrait-signal" aria-hidden="true"></div>
        <Image src="/images/portrait-placeholder.png" alt="Portrait placeholder for Gurnoor Singh" fill sizes="(max-width: 800px) 37vw, 20vw" priority />
        <span className="hero-portrait-grain" aria-hidden="true"></span>
      </motion.div>
      <div className="hero-bottom"><span>Scroll to inspect</span><span className="scroll-line"></span><span>© 2026</span></div>
    </section>
  );
}
