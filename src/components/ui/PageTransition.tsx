import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../../utils/animations";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div className={className} {...pageTransition}>
      {children}
    </motion.div>
  );
};

// Slide transition variant
export const SlideTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Scale transition variant
export const ScaleTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
