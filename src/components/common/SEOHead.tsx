import React, { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Kriwin Professional Consultancy - Expert Financial Services",
  description = "Professional chartered accountancy and financial consulting services. Expert tax planning, business advisory, and compliance solutions for your success.",
  keywords = "chartered accountant, financial consulting, tax planning, business advisory, compliance, audit, assurance",
  image = "/images/og-image.jpg",
  url = "https://kriwin-consultancy.com",
  type = "website",
  siteName = "Kriwin Professional Consultancy",
  author = "Kriwin Professional Consultancy",
  publishedTime,
  modifiedTime,
  twitterCard = "summary_large_image",
  twitterSite = "@kriwinpro",
  twitterCreator = "@kriwinpro",
  noIndex = false,
  canonicalUrl,
  structuredData,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
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

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Robots meta tag
    if (noIndex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);

    if (publishedTime) {
      updateMetaTag("article:published_time", publishedTime, true);
    }

    if (modifiedTime) {
      updateMetaTag("article:modified_time", modifiedTime, true);
    }

    // Twitter Card meta tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:site", twitterSite);
    updateMetaTag("twitter:creator", twitterCreator);

    // Canonical URL
    const canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (canonicalUrl) {
      if (canonicalLink) {
        canonicalLink.href = canonicalUrl;
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Note: In a real app, you might want to restore previous values
      // rather than removing them entirely
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    siteName,
    author,
    publishedTime,
    modifiedTime,
    twitterCard,
    twitterSite,
    twitterCreator,
    noIndex,
    canonicalUrl,
    structuredData,
  ]);

  return null; // This component doesn't render anything
};
