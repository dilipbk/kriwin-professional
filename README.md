# Kriwin Professional Consultancy

A modern, responsive website for Kriwin Professional Consultancy built with React, TypeScript, and Vite. Features beautiful animations, dark mode support, and comprehensive service pages.

## ✨ Features

- **Beautiful Service Detail Pages**: Individual pages for each service with detailed information
- **Interactive Services Dropdown**: Elegant dropdown navigation in the header
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode Support**: Seamless light/dark theme switching
- **Modern Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety throughout the application

## 🚀 Services

The website showcases comprehensive financial services including:

- Tax Planning & Compliance
- Audit & Assurance Services
- Business Consulting
- Bookkeeping & Virtual CFO Services
- Human Resources Services
- Taxation & Regulatory Compliance

Each service has its own dedicated detail page with:

- Comprehensive service descriptions
- Key features and benefits
- Related services suggestions
- Call-to-action sections

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **React Query** - Server state management

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections
│   └── ui/              # UI components
├── data/
│   └── services.json    # Service data
├── pages/
│   ├── ServiceDetailPage.tsx  # Individual service pages
│   └── ...              # Other pages
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and animations
└── styles/              # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kriwin-professional-consultancy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Key Features Implementation

### Services Dropdown Navigation

- Interactive dropdown in the header
- Displays all services with icons and descriptions
- Smooth animations and hover effects
- Mobile-responsive design

### Service Detail Pages

- Dynamic routing: `/services/:serviceId`
- Comprehensive service information
- Related services suggestions
- SEO-optimized with proper meta tags
- Call-to-action sections

### Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
