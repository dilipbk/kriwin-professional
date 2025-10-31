import { useEffect, useRef, useState } from "react";

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(performance.now());

  useEffect(() => {
    const renderEndTime = performance.now();
    const renderTime = renderEndTime - renderStartTime.current;

    // Log performance metrics in development
    if (import.meta.env.DEV) {
      console.log(`🚀 ${componentName} rendered in ${renderTime.toFixed(2)}ms`);

      // Store metrics for potential analytics (commented out to avoid unused variable)
      // const metrics: PerformanceMetrics = {
      //   componentName,
      //   renderTime,
      //   timestamp: Date.now(),
      // };

      // You could send this to an analytics service
      // analytics.track('component_render', metrics);
    }
  });

  return {
    markRenderStart: () => {
      renderStartTime.current = performance.now();
    },
  };
};

export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return elementRef;
};

export const usePreloadImages = (imageSrcs: string[]) => {
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload images with a slight delay to not block initial render
    const timer = setTimeout(() => {
      imageSrcs.forEach(src => {
        preloadImage(src).catch(error => {
          console.warn(`Failed to preload image: ${src}`, error);
        });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [imageSrcs]);
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
