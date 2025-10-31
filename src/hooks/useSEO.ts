import { useEffect } from "react";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    const {
      title = "Kriwin Professional Consultancy - Expert Financial Services",
      description = "Professional chartered accountancy and financial consulting services. Expert tax planning, business advisory, and compliance solutions for your success.",
      keywords = "chartered accountant, financial consulting, tax planning, business advisory, compliance",
      image = "/images/og-image.jpg",
      url = window.location.href,
      type = "website",
      noIndex = false,
      canonicalUrl,
      structuredData,
    } = config;

    // Update document title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Update basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Update Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Update structured data
    if (structuredData) {
      let script = document.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [config]);
};

// Hook for tracking page views (for analytics)
export const usePageView = (pageName: string) => {
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: window.location.href,
      });
    }

    // You can also integrate with other analytics services here
    console.log(`Page view: ${pageName}`);
  }, [pageName]);
};

// Hook for managing meta tags dynamically
export const useMetaTags = (tags: Record<string, string>) => {
  useEffect(() => {
    const metaElements: HTMLMetaElement[] = [];

    Object.entries(tags).forEach(([name, content]) => {
      const isProperty = name.startsWith("og:") || name.startsWith("article:");
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
        metaElements.push(meta);
      }

      meta.setAttribute("content", content);
    });

    // Cleanup function
    return () => {
      metaElements.forEach(meta => {
        if (meta.parentNode) {
          meta.parentNode.removeChild(meta);
        }
      });
    };
  }, [tags]);
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
