import React from "react";
import { motion } from "motion/react";
import { spinnerAnimation, dotsAnimation } from "../../utils/animations";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
  color?: "blue" | "white" | "gray";
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  variant = "spinner",
  color = "blue",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    white: "text-white",
    gray: "text-gray-600 dark:text-gray-400",
  };

  if (variant === "spinner") {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} inline-block`}
        {...spinnerAnimation}
      >
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </motion.div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex space-x-1">
        {[0, 1, 2].map(index => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full bg-current ${colorClasses[color]}`}
            {...dotsAnimation}
            transition={{
              ...dotsAnimation.animate.transition,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <motion.div
        className={`${sizeClasses[size]} rounded-full bg-current ${colorClasses[color]} opacity-75`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    );
  }

  return null;
};
