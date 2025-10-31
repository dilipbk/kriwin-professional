import React from "react";
import { cn } from "../../utils";

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50",
        "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "transition-all duration-200",
        className
      )}
    >
      {children}
    </a>
  );
};

export const SkipNavigation: React.FC = () => {
  return (
    <nav
      aria-label="Skip navigation links"
      className="sr-only focus-within:not-sr-only"
    >
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#navigation">Skip to navigation</SkipLink>
      <SkipLink href="#footer">Skip to footer</SkipLink>
    </nav>
  );
};

interface LandmarkProps {
  children: React.ReactNode;
  id: string;
  as?: keyof JSX.IntrinsicElements;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
}

export const Landmark: React.FC<LandmarkProps> = ({
  children,
  id,
  as: Component = "section",
  ariaLabel,
  ariaLabelledBy,
  className = "",
}) => {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={className}
    >
      {children}
    </Component>
  );
};
