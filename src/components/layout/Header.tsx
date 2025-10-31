import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { buttonHover } from "../../utils/animations";

interface HeaderProps {
  className?: string;
  isDark?: boolean;
  toggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  isDark = false,
  toggleTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-600 dark:from-blue-600 dark:to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Kriwin
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                Professional Consultancy
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            id="navigation"
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map(item => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group ${
                  location.pathname === item.href
                    ? "text-blue-700 dark:text-blue-400"
                    : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 dark:bg-blue-400 transition-all duration-300 ${
                    location.pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <svg
                  className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
                    isDark
                      ? "rotate-0 scale-100 opacity-100"
                      : "rotate-90 scale-0 opacity-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

                {/* Moon Icon */}
                <svg
                  className={`absolute inset-0 w-5 h-5 text-slate-700 dark:text-slate-300 transition-all duration-300 ${
                    isDark
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
            </button>

            {/* CTA Button */}
            <motion.button
              className="hidden lg:block group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg overflow-hidden"
              {...buttonHover}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-menu"
              className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-300"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2 transition-colors duration-300 ${
                      location.pathname === item.href
                        ? "text-blue-700 dark:text-blue-400"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <button className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Quote</span>
                  <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
