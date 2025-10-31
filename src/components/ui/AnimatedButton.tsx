import React from "react";
import { motion } from "motion/react";
import {
  buttonHover,
  buttonHoverBounce,
  magneticHover,
  glowHover,
} from "../../utils/animations";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  animation?: "hover" | "bounce" | "magnetic" | "glow";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  animation = "hover",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden";

  const variantClasses = {
    primary:
      "text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 shadow-lg hover:shadow-xl",
    secondary:
      "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg",
    outline:
      "text-blue-600 dark:text-blue-400 bg-transparent border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    ghost:
      "text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const animationProps = {
    hover: buttonHover,
    bounce: buttonHoverBounce,
    magnetic: magneticHover,
    glow: glowHover,
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      {...(disabled ? {} : animationProps[animation])}
      disabled={disabled}
    >
      {/* Background overlay for hover effects */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center">{children}</span>

      {/* Border for outline variants */}
      {(variant === "primary" || variant === "outline") && (
        <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
      )}
    </motion.button>
  );
};

// Specialized button variants
export const CTAButton: React.FC<
  Omit<AnimatedButtonProps, "variant" | "animation">
> = props => <AnimatedButton {...props} variant="primary" animation="bounce" />;

export const GhostButton: React.FC<
  Omit<AnimatedButtonProps, "variant">
> = props => <AnimatedButton {...props} variant="ghost" />;

export const OutlineButton: React.FC<
  Omit<AnimatedButtonProps, "variant">
> = props => <AnimatedButton {...props} variant="outline" />;
