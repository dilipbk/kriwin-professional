// Core data types for the application

export interface CompanyInfo {
  name: string;
  email: string;
  address: string;
  phone?: string;
  socialMedia: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface FounderInfo {
  name: string;
  qualification: string;
  bio: string;
  image: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  icon: string;
  category: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface PageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
    values: string[];
  };
  statistics: {
    clients: number;
    partners: number;
    services: number;
    years: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  designation: string;
  content: string;
  image?: string;
  rating: number;
}

export type Theme = "light" | "dark" | "system";
