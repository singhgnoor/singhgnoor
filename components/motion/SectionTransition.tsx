"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  variant?: "diverge" | "converge" | "flow";
  className?: string;
}

export default function SectionTransition({ variant = "diverge", className = "" }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, .5, 1], reduced ? [1, 1, 1] : [.86, 1, .9]);
  const z = useTransform(scrollYProgress, [0, .5, 1], reduced ? [0, 0, 0] : [-35, 0, -25]);
  const path = variant === "flow" ? "M 0 60 Q 250 10 500 60 T 1000 60" : variant === "converge" ? "M 200 0 L 500 80 L 500 120 M 500 0 L 500 80 L 500 120 M 800 0 L 500 80 L 500 120" : "M 500 0 L 500 40 L 200 120 M 500 0 L 500 40 L 500 120 M 500 0 L 500 40 L 800 120";
  return (
    <motion.div ref={ref} className={`section-transition-depth w-full overflow-hidden flex justify-center py-8 ${className}`} style={{ scale, z }} aria-hidden="true">
      <svg viewBox="0 0 1000 120" className="w-full max-w-5xl h-24 pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <path d={path} fill="none" stroke={variant === "flow" ? "#c26b4e" : "#314b50"} strokeWidth="1.5" opacity=".65" />
      </svg>
    </motion.div>
  );
}
