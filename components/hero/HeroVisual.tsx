'use client';

import React, { useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
  isActive: boolean;
}

interface Edge {
  source: Node;
  target: Node;
}

export default function HeroVisual() {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);

  // Generate stable random graph
  const { nodes, edges } = useMemo(() => {
    // Basic seeded random for stable client rendering
    let seed = 12345;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const numNodes = isMobile ? 12 : 25;
    const generatedNodes: Node[] = [];

    for (let i = 0; i < numNodes; i++) {
      generatedNodes.push({
        id: i,
        x: random() * 100, // percentage
        y: random() * 100, // percentage
        r: random() * 2 + 1.5,
        isActive: random() > 0.85 // ~15% active
      });
    }

    const generatedEdges: Edge[] = [];
    // Connect nodes that are relatively close
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < (isMobile ? 40 : 25)) {
          // Limit max connections to avoid clutter
          const sourceConnections = generatedEdges.filter(e => e.source.id === i).length;
          if (sourceConnections < 3 && random() > 0.3) {
             generatedEdges.push({ source: generatedNodes[i], target: generatedNodes[j] });
          }
        }
      }
    }

    return { nodes: generatedNodes, edges: generatedEdges };
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !svgRef.current) return;

    // Slow atmospheric drift for all nodes
    const ctx = gsap.context(() => {
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        
        // Pseudo-random drift based on index
        const dirX = i % 2 === 0 ? 1 : -1;
        const dirY = i % 3 === 0 ? 1 : -1;
        
        gsap.to(node, {
          x: () => (Math.random() * 20 - 10) * dirX,
          y: () => (Math.random() * 20 - 10) * dirY,
          duration: () => 15 + Math.random() * 15,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: "#hero",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          }
        });
      });
    }, svgRef);

    return () => ctx.revert();
  }, { scope: svgRef });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          // Create a subtle curve
          const mx = (edge.source.x + edge.target.x) / 2 + (edge.source.y > edge.target.y ? 5 : -5);
          const my = (edge.source.y + edge.target.y) / 2 + (edge.source.x > edge.target.x ? -5 : 5);
          
          const pathD = `M ${edge.source.x}% ${edge.source.y}% Q ${mx}% ${my}% ${edge.target.x}% ${edge.target.y}%`;
          
          return (
            <path
              key={`edge-${i}`}
              d={pathD}
              fill="none"
              stroke="#4A6670"
              strokeWidth="0.5"
              className="opacity-40"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${node.id}`}>
            <circle
              ref={(el) => {
                if (el) nodesRef.current[i] = el;
              }}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.r}
              fill={node.isActive ? '#D4603A' : '#5E8290'}
              filter={node.isActive ? 'url(#glow)' : undefined}
              className={node.isActive ? 'animate-pulse' : ''}
              style={{
                animationDuration: `${3 + (node.id % 4)}s`
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
