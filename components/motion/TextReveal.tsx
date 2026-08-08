"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  splitBy?: "char" | "word";
  delay?: number;
  stagger?: number;
  duration?: number;
}

export default function TextReveal({ text, className = "", as: Component = "div", splitBy = "word", stagger, duration = 0.8 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elements = splitBy === "char" ? text.split("") : text.split(" ");
  const defaultStagger = stagger ?? (splitBy === "char" ? 0.03 : 0.05);

  useGSAP(() => {
    const targets = gsap.utils.toArray(".reveal-target");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, y: "0%" });
      return;
    }
    gsap.fromTo(targets, { opacity: 0, y: "100%" }, {
      opacity: 1, y: "0%", duration, stagger: defaultStagger, ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 85%", toggleActions: "play none none none" },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Component className={`${className} flex flex-wrap`} aria-label={text}>
        {elements.map((item, index) => (
          <span key={index} className={`overflow-hidden ${splitBy === "word" ? "mr-[0.25em]" : ""} inline-flex`} aria-hidden="true">
            <span className="reveal-target inline-block">{item === " " && splitBy === "char" ? "\u00A0" : item}</span>
          </span>
        ))}
      </Component>
    </div>
  );
}
