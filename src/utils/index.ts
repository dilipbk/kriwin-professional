import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const parallaxVariants = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Utility functions
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};

export const debounce = <T extends (...args: never[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = <T extends (...args: never[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Re-export performance utilities
export * from "./performance";
export * from "./serviceWorker";
// Re-export utilities
export * from "./performance";
export * from "./serviceWorker";
export * from "./viewport";
export * from "./accessibility";
export * from "./structuredData";
export * from "./sitemap";
export * from "./animations";
