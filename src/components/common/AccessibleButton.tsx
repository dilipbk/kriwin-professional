import React, { forwardRef } from "react";
import { cn } from "../../utils";
import { useReducedMotion } from "../../hooks/useAccessibility";

interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const AccessibleButton = forwardRef<
  HTMLButtonElement,
  AccessibleButtonProps
>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      loading = false,
      loadingText = "Loading...",
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      !prefersReducedMotion &&
        "hover:transform hover:-translate-y-1 active:scale-95",
      fullWidth && "w-full"
    );

    const variantClasses = {
      primary: cn(
        "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600",
        "text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
        "border-2 border-transparent"
      ),
      secondary: cn(
        "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300",
        "border-2 border-gray-200 dark:border-gray-600",
        "hover:border-blue-600 dark:hover:border-blue-400",
        "hover:text-blue-600 dark:hover:text-blue-400",
        "focus:ring-blue-500 shadow-md hover:shadow-lg"
      ),
      ghost: cn(
        "text-gray-700 dark:text-gray-300 bg-transparent",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus:ring-gray-500 border-2 border-transparent"
      ),
      danger: cn(
        "bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600",
        "text-white shadow-lg hover:shadow-xl focus:ring-red-500",
        "border-2 border-transparent"
      ),
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm min-h-[36px]",
      md: "px-6 py-3 text-base min-h-[44px]",
      lg: "px-8 py-4 text-lg min-h-[48px]",
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-describedby={loading ? `${props.id}-loading` : undefined}
        {...props}
      >
        {/* Loading State */}
        {loading && (
          <>
            <svg
              className="w-4 h-4 mr-2 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only" id={`${props.id}-loading`}>
              {loadingText}
            </span>
          </>
        )}

        {/* Left Icon */}
        {!loading && leftIcon && (
          <span className="mr-2" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Button Content */}
        <span>{loading ? loadingText : children}</span>

        {/* Right Icon */}
        {!loading && rightIcon && (
          <span className="ml-2" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

AccessibleButton.displayName = "AccessibleButton";
