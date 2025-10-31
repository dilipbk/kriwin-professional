import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "white";
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className = "",
  color = "primary",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  const colorClasses = {
    primary: "border-blue-600 border-t-transparent",
    secondary: "border-orange-600 border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface LoadingSkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = "",
  variant = "rectangular",
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 animate-pulse";

  const variantClasses = {
    text: "h-4 rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
};

interface PageLoadingProps {
  message?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-lg text-gray-600 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
};
