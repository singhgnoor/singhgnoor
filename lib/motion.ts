// Shared animation constants for the portfolio
// Used by GSAP and Framer Motion throughout the site

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  xslow: 1.5,
  hero: 2.0,
} as const;

export const easings = {
  smooth: "power2.out",
  entrance: "power3.out",
  dramatic: "power4.out",
  elastic: "elastic.out(1, 0.5)",
  inOut: "power2.inOut",
} as const;

export const stagger = {
  fast: 0.03,
  normal: 0.05,
  slow: 0.08,
  text: 0.02,
} as const;

export const scrollTriggerDefaults = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none none" as const,
};

// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.slow, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: [0.25, 0.1, 0.25, 1] },
  },
};
