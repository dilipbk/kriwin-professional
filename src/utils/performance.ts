// Type definitions for Layout Shift API
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Performance monitoring utilities
export const measurePerformance = {
  // Measure First Contentful Paint
  getFCP: (): Promise<number> => {
    return new Promise(resolve => {
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(
          entry => entry.name === "first-contentful-paint"
        );
        if (fcpEntry) {
          resolve(fcpEntry.startTime);
        }
      }).observe({ entryTypes: ["paint"] });
    });
  },

  // Measure Largest Contentful Paint
  getLCP: (): Promise<number> => {
    return new Promise(resolve => {
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ entryTypes: ["largest-contentful-paint"] });
    });
  },

  // Measure Cumulative Layout Shift
  getCLS: (): Promise<number> => {
    return new Promise(resolve => {
      let clsValue = 0;
      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        resolve(clsValue);
      }).observe({ entryTypes: ["layout-shift"] });
    });
  },

  // Log all core web vitals
  logWebVitals: async () => {
    try {
      const [fcp, lcp, cls] = await Promise.all([
        measurePerformance.getFCP(),
        measurePerformance.getLCP(),
        measurePerformance.getCLS(),
      ]);

      console.group("🚀 Core Web Vitals");
      console.log(`First Contentful Paint: ${fcp.toFixed(2)}ms`);
      console.log(`Largest Contentful Paint: ${lcp.toFixed(2)}ms`);
      console.log(`Cumulative Layout Shift: ${cls.toFixed(4)}`);
      console.groupEnd();

      // You could send these metrics to analytics
      // analytics.track('web_vitals', { fcp, lcp, cls });
    } catch (error) {
      console.warn("Could not measure web vitals:", error);
    }
  },
};

// Image optimization utilities
export const imageOptimization = {
  // Create optimized image URLs (for future CDN integration)
  getOptimizedImageUrl: (
    src: string,
    width?: number,
    height?: number,
    quality: number = 80
  ): string => {
    // For now, return the original URL
    // In production, you would integrate with a CDN like Cloudinary or ImageKit
    const params = new URLSearchParams();
    if (width) params.set("w", width.toString());
    if (height) params.set("h", height.toString());
    params.set("q", quality.toString());

    return src; // Return original for now
  },

  // Generate responsive image srcSet
  generateSrcSet: (baseSrc: string, sizes: number[]): string => {
    return sizes
      .map(
        size =>
          `${imageOptimization.getOptimizedImageUrl(baseSrc, size)} ${size}w`
      )
      .join(", ");
  },

  // Preload critical images
  preloadImage: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },
};

// Bundle analysis utilities (for development)
export const bundleAnalysis = {
  // Log bundle information
  logBundleInfo: () => {
    if (import.meta.env.DEV) {
      console.group("📦 Bundle Information");
      console.log("Environment:", import.meta.env.MODE);
      console.log("Build timestamp:", new Date().toISOString());
      console.groupEnd();
    }
  },

  // Measure component render times
  measureComponentRender: (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();

    if (import.meta.env.DEV) {
      console.log(
        `⚡ ${componentName} rendered in ${(end - start).toFixed(2)}ms`
      );
    }
  },
};
