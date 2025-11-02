// Animation variants and utilities for Framer Motion

// Basic fade animations
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

// Scale animations
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export const scaleInSpring = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.6,
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
};

// Slide animations
export const slideInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const slideInDown = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

// Stagger animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

// Interactive animations
export const buttonHover = {
  whileHover: {
    scale: 1.02,
    y: -2,
  },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};

export const buttonHoverBounce = {
  whileHover: {
    scale: 1.05,
    y: -4,
  },
  whileTap: { scale: 0.95 },
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },
};

export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
  },
  transition: { duration: 0.3 },
};

export const cardHoverFloat = {
  whileHover: {
    y: -12,
    scale: 1.03,
    rotateY: 5,
  },
  transition: { duration: 0.4 },
};

// Specialized animations
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    type: "spring" as const,
    stiffness: 200,
    damping: 15,
  },
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
    },
  },
};

// Viewport-based animations
export const viewportAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.3 },
};

export const viewportAnimationScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export const viewportStagger = {
  whileInView: "animate",
  viewport: { once: true, amount: 0.3 },
  variants: staggerContainer,
};

export const viewportStaggerFast = {
  whileInView: "animate",
  viewport: { once: true, amount: 0.2 },
  variants: staggerContainerFast,
};

// Text animations
export const textReveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const textSlideIn = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  // exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

// Loading animations
export const spinnerAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

export const dotsAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

// Advanced hover effects
export const magneticHover = {
  whileHover: {
    scale: 1.1,
    rotate: [0, -1, 1, 0],
    transition: {
      scale: { duration: 0.2 },
      rotate: { duration: 0.3, repeat: 2 },
    },
  },
};

export const glowHover = {
  whileHover: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
};

// Entrance animations for sections
export const sectionSlideUp = {
  initial: { opacity: 0, y: 100 },
  // whileInView: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  // viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

export const sectionFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1 },
};
