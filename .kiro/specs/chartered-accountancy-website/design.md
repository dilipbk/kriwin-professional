# Design Document

## Overview

The Kriwin Professional Consultancy website will be a modern, professional React application built with Vite, featuring a sophisticated design system tailored for the financial services industry. The application will emphasize user engagement through interactive animations and responsive design while maintaining corporate professionalism.

## Architecture

### Technology Stack

- **Frontend Framework**: React 19 with Vite for fast development and optimized builds
- **Type Safety**: TypeScript for comprehensive type checking
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui for consistent, accessible components
- **Routing**: React Router v6 for client-side navigation
- **State Management**: Zustand for client-side state, React Query for server state
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with validation

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   └── common/          # Common components (Button, Card, etc.)
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── store/               # Zustand stores
├── services/            # API simulation and data fetching
├── data/                # JSON data files

├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles and Tailwind config
```

## Components and Interfaces

### Core Layout Components

#### Header Component

- Sticky navigation with smooth scroll animations
- Logo, navigation links, and theme toggle
- Mobile-responsive hamburger menu
- CTA button with hover animations

#### Footer Component

- Multi-column layout with company information
- Social media links and contact details
- Newsletter signup form
- Professional styling with subtle animations

### Page Sections

#### Hero Section

- Parallax background effect with financial imagery
- Animated text reveals and CTA buttons
- Responsive typography scaling
- Professional tagline with marketing focus

#### Services Section

- Split-screen layout: service list (left) + details (right)
- Scroll-triggered service navigation
- Background image transitions
- Smooth animations between service details

#### About Section

- Company overview with mission/vision
- Founder spotlight with professional credentials
- Interactive elements and hover effects

#### Statistics Section

- Animated counters (clients, partners, years, services)
- Professional icons and visual hierarchy
- Staggered animation timing

#### Testimonials Section

- Carousel with smooth transitions
- Client photos, names, companies, and designations
- Navigation indicators and auto-play functionality

### Interactive Components

#### Service Navigator

```typescript
interface ServiceNavigatorProps {
  services: Service[];
  activeService: string;
  onServiceChange: (serviceId: string) => void;
}

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
}
```

#### Theme Toggle

```typescript
interface ThemeToggleProps {
  theme: "light" | "dark" | "system";
  onThemeChange: (theme: string) => void;
}
```

## Data Models

### Company Information

```typescript
interface CompanyInfo {
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

interface FounderInfo {
  name: string;
  qualification: string;
  bio: string;
  image: string;
  message: string;
}
```

### Services Data Structure

```typescript
interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

interface Service {
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
```

### Content Management

```typescript
interface PageContent {
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
```

## Design System

### Color Palette

```css
/* Primary Colors - Financial Blue */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-900: #1e3a8a;

/* Secondary Colors - Professional Gold */
--secondary-50: #fffbeb;
--secondary-100: #fef3c7;
--secondary-500: #f59e0b;
--secondary-600: #d97706;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-500: #6b7280;
--gray-900: #111827;
```

### Typography Scale

```css
/* Headings */
.text-display: 4rem / 1.1 / 800
.text-h1: 3rem / 1.2 / 700
.text-h2: 2.25rem / 1.3 / 600
.text-h3: 1.875rem / 1.4 / 600
.text-h4: 1.5rem / 1.5 / 500

/* Body Text */
.text-lg: 1.125rem / 1.6 / 400
.text-base: 1rem / 1.6 / 400
.text-sm: 0.875rem / 1.5 / 400
```

### Animation Patterns

```typescript
// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const parallaxVariants = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 0.8, ease: "easeOut" },
};
```

## Error Handling

### Error Boundary Implementation

- Global error boundary for unhandled exceptions
- Fallback UI components for graceful degradation
- Error logging and user-friendly error messages
- Retry mechanisms for failed operations

### Loading States

- Skeleton loaders for content sections
- Progressive image loading with blur placeholders
- Suspense boundaries for lazy-loaded components
- Loading indicators for form submissions

## Performance Optimizations

### Code Splitting Strategy

```typescript
// Route-based code splitting
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));

// Component-based splitting for heavy components
const TestimonialsCarousel = lazy(
  () => import("../components/TestimonialsCarousel")
);
```

### Image Optimization

- WebP format with fallbacks
- Responsive image sizing
- Lazy loading with Intersection Observer
- Blur placeholder during loading

### Caching Strategy

- React Query for API response caching
- Service worker for static asset caching
- Browser storage for user preferences
- CDN integration for image assets

## Accessibility Considerations

### WCAG 2.1 AA Compliance

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meeting standards
- Focus management for interactive elements

## Security Considerations

### Client-Side Security

- Input sanitization for form data
- XSS prevention in dynamic content
- Secure handling of user preferences
- Content Security Policy implementation

### Data Protection

- No sensitive data storage in localStorage
- Secure API communication preparation
- Privacy-compliant analytics integration
- GDPR-ready consent management

## Deployment and Optimization

### Build Optimization

- Vite's built-in optimizations
- Tree shaking for unused code
- Asset compression and minification
- Critical CSS inlining

### SEO Optimization

- React Helmet for meta tags
- Structured data markup
- Sitemap generation
- Open Graph and Twitter Card meta tags
- Semantic HTML structure for search engines
