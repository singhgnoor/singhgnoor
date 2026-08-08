'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  once?: boolean;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  stagger = 0,
  once = true,
  as: Component = 'div',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        gsap.set(containerRef.current, { opacity: 1, x: 0, y: 0 });
        return;
      }

      let x = 0;
      let y = 0;

      switch (direction) {
        case 'up': y = distance; break;
        case 'down': y = -distance; break;
        case 'left': x = distance; break;
        case 'right': x = -distance; break;
      }

      const elements = stagger > 0 && containerRef.current?.children 
        ? Array.from(containerRef.current.children) 
        : containerRef.current;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}
