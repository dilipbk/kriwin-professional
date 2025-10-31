import React, { Suspense, lazy } from "react";
import { LoadingSkeleton } from "./LoadingSpinner";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  className = "",
}) => {
  const defaultFallback = (
    <div className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header Skeleton */}
          <div className="text-center space-y-4">
            <LoadingSkeleton className="h-6 w-32 mx-auto" variant="text" />
            <LoadingSkeleton className="h-12 w-96 mx-auto" variant="text" />
            <LoadingSkeleton className="h-6 w-64 mx-auto" variant="text" />
          </div>

          {/* Content Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="space-y-4">
                <LoadingSkeleton className="h-48 w-full" />
                <LoadingSkeleton className="h-6 w-3/4" variant="text" />
                <LoadingSkeleton className="h-4 w-full" variant="text" />
                <LoadingSkeleton className="h-4 w-2/3" variant="text" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
};

// Higher-order component for lazy loading sections
export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));

  return (props: P) => (
    <LazySection fallback={fallback}>
      <LazyComponent {...props} />
    </LazySection>
  );
};
