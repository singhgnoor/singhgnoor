"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollDepth({ children, className = "", amount = 1, rotate = 4, y = 0 }: { children: React.ReactNode; className?: string; amount?: number; rotate?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const mobileRotate = mobile ? rotate * 0.45 : rotate;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [mobileRotate, 0, -mobileRotate]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [-mobileRotate * 0.65, 0, mobileRotate * 0.65]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [0.94, 1, 0.96]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [y, 0, -y]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [-24 * amount, 0, -18 * amount]);
  return <motion.div ref={ref} className={`depth-perspective ${className}`} style={{ rotateX, rotateY, scale, y: translateY, z: translateZ }}>{children}</motion.div>;
}
