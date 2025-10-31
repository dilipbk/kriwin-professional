import React, { lazy } from "react";
import { HeroSection } from "../components/sections";
import { LazySection } from "../components/common/LazySection";
import { SEOHead } from "../components/common/SEOHead";
import {
  usePerformanceMonitor,
  usePreloadImages,
} from "../hooks/usePerformance";
import {
  generateBusinessSchema,
  generateWebsiteSchema,
} from "../utils/structuredData";

// Lazy load non-critical sections
const ServicesSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.ServicesSection,
  }))
);
const AboutSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.AboutSection,
  }))
);
const StatisticsSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.StatisticsSection,
  }))
);
const TestimonialsSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.TestimonialsSection,
  }))
);
const ContactSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.ContactSection,
  }))
);
const BlogSection = lazy(() =>
  import("../components/sections").then(module => ({
    default: module.BlogSection,
  }))
);

export const HomePage: React.FC = () => {
  usePerformanceMonitor("HomePage");

  // Preload critical images
  usePreloadImages([
    // Add your critical images here
    "/images/hero-bg.jpg",
    "/images/about-founder.jpg",
  ]);

  // Generate structured data for the homepage
  const businessSchema = generateBusinessSchema();
  const websiteSchema = generateWebsiteSchema();
  const combinedSchema = [businessSchema, websiteSchema];

  return (
    <div>
      {/* SEO Head */}
      <SEOHead
        title="Kriwin Professional Consultancy - Expert Financial Services & Tax Planning"
        description="Leading chartered accountancy firm providing expert financial consulting, tax planning, audit services, and business advisory solutions. 10+ years of experience serving 500+ clients."
        keywords="chartered accountant, CPA, financial consulting, tax planning, business advisory, audit services, compliance, risk management, Kathmandu accountant"
        image="/images/og-home.jpg"
        url="https://kriwin-consultancy.com"
        type="website"
        structuredData={combinedSchema}
        canonicalUrl="https://kriwin-consultancy.com"
      />
      {/* Hero section loads immediately - critical for FCP */}
      <HeroSection />

      {/* Lazy load other sections with optimized fallbacks */}
      <LazySection>
        <ServicesSection />
      </LazySection>

      <LazySection>
        <AboutSection />
      </LazySection>

      <LazySection>
        <StatisticsSection />
      </LazySection>

      <LazySection>
        <TestimonialsSection />
      </LazySection>

      <LazySection>
        <BlogSection />
      </LazySection>

      <LazySection>
        <ContactSection />
      </LazySection>
    </div>
  );
};
