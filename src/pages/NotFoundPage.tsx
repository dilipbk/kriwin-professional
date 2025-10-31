import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import {
  sectionSlideUp,
  buttonHoverBounce,
  floatingAnimation,
} from "../utils/animations";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found - Kriwin Professional Consultancy"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our financial consulting services."
        url="https://kriwin-consultancy.com/404"
        type="website"
      />

      <motion.section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
        {...sectionSlideUp}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <motion.div
              className="text-8xl lg:text-9xl font-bold text-blue-600 dark:text-blue-400 mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              404
            </motion.div>

            {/* Error Message */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Oops! Page Not Found
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              The page you're looking for doesn't exist or has been moved. Don't
              worry, let's get you back on track to explore our financial
              consulting services.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl overflow-hidden"
                  {...buttonHoverBounce}
                >
                  <span className="relative z-10 flex items-center">
                    Back to Home
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    Contact Us
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Or explore our popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Portfolio", path: "/portfolio" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
