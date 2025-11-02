// Structured data schemas for SEO

export interface BusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string[];
  telephone: string;
  email: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  sameAs: string[];
  founder: {
    "@type": string;
    name: string;
    jobTitle: string;
  };
  areaServed: string[];
  serviceType: string[];
  priceRange: string;
  aggregateRating?: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
  };
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
  offers: {
    "@type": string;
    priceCurrency: string;
    price: string;
    priceValidUntil: string;
  };
}

export interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

// Generate business structured data
export const generateBusinessSchema = (): BusinessSchema => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kriwin Professional Consultancy",
  description:
    "Professional chartered accountancy and financial consulting services specializing in tax planning, business advisory, and compliance solutions.",
  url: "https://kriwin-consultancy.com",
  logo: "https://kriwin-consultancy.com/images/logo.png",
  image: [
    "https://kriwin-consultancy.com/images/office-1.jpg",
    "https://kriwin-consultancy.com/images/office-2.jpg",
    "https://kriwin-consultancy.com/images/team.jpg",
  ],
  telephone: "+977 9851224841",
  email: "info@kriwinprofessional.com",
  address: {
    "@type": "PostalAddress",
    // streetAddress: "Sallaghari - 10",
    addressLocality: "Bagdole, Lalitpur",
    addressRegion: "NY",
    postalCode: "10004",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7074,
    longitude: -74.0113,
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
  sameAs: [
    "https://www.linkedin.com/company/kriwin-professional",
    "https://www.facebook.com/kriwinprofessional",
    "https://twitter.com/kriwinpro",
  ],
  founder: {
    "@type": "Person",
    name: "Ramesh Neupane",
    jobTitle: "Founder & CEO",
  },
  areaServed: ["Nepal", "India", "United States", "United Kingdom"],
  serviceType: [
    "Chartered Accountancy",
    "Tax Planning",
    "Financial Consulting",
    "Business Advisory",
    "Audit & Assurance",
    "Compliance Services",
  ],
  priceRange: "$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 127,
  },
});

// Generate service-specific structured data
export const generateServiceSchema = (
  serviceName: string,
  serviceDescription: string
): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: serviceDescription,
  provider: {
    "@type": "Organization",
    name: "Kriwin Professional Consultancy",
    url: "https://kriwin-consultancy.com",
  },
  areaServed: ["Nepal", "India", "United Kingdom", "United States"],
  serviceType: "Professional Service",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "Contact for pricing",
    priceValidUntil: "2024-12-31",
  },
});

// Generate website structured data
export const generateWebsiteSchema = (): WebsiteSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kriwin Professional Consultancy",
  url: "https://kriwin-consultancy.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kriwin-consultancy.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

// Generate FAQ structured data
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Generate article structured data
export const generateArticleSchema = (
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  modifiedDate: string,
  image: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "Kriwin Professional Consultancy",
    logo: {
      "@type": "ImageObject",
      url: "https://kriwin-consultancy.com/images/logo.png",
    },
  },
  datePublished: publishedDate,
  dateModified: modifiedDate,
  image: image,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kriwin-consultancy.com",
  },
});
