import React from "react";
import { motion } from "motion/react";
import {
  cardHover,
  cardHoverFloat,
  viewportAnimation,
  scaleInSpring,
} from "../../utils/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  variant?: "default" | "hover" | "float" | "scale";
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  variant = "default",
  className = "",
  delay = 0,
  onClick,
}) => {
  const baseClasses =
    "bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300";

  const getAnimationProps = () => {
    switch (variant) {
      case "hover":
        return {
          ...cardHover,
          ...viewportAnimation,
          transition: { ...viewportAnimation.transition, delay },
        };
      case "float":
        return {
          ...cardHoverFloat,
          ...viewportAnimation,
          transition: { ...viewportAnimation.transition, delay },
        };
      case "scale":
        return {
          ...scaleInSpring,
          whileHover: { scale: 1.05 },
          transition: { ...scaleInSpring.transition, delay },
        };
      default:
        return {
          ...viewportAnimation,
          transition: { ...viewportAnimation.transition, delay },
        };
    }
  };

  return (
    <motion.div
      className={`${baseClasses} ${className} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  );
};

// Specialized card variants
export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}> = ({ icon, title, description, delay = 0, className = "" }) => (
  <AnimatedCard variant="float" delay={delay} className={`p-8 ${className}`}>
    <motion.div
      className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6"
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
      {description}
    </p>
  </AnimatedCard>
);

export const StatCard: React.FC<{
  value: string;
  label: string;
  description?: string;
  delay?: number;
  className?: string;
}> = ({ value, label, description, delay = 0, className = "" }) => (
  <AnimatedCard
    variant="scale"
    delay={delay}
    className={`p-6 text-center ${className}`}
  >
    <motion.div
      className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay + 0.2, type: "spring" }}
    >
      {value}
    </motion.div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
      {label}
    </h4>
    {description && (
      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
        {description}
      </p>
    )}
  </AnimatedCard>
);
