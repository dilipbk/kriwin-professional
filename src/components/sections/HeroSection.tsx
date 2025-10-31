import React from "react";
import { motion } from "motion/react";
import {
  staggerItem,
  cardHover,
  floatingAnimation,
} from "../../utils/animations";

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative pt-32 pb-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-0-to-l from-blue-50/50 dark:from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-800/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Column - 7 columns */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Small Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
              #1 Financial Consulting Firm
            </motion.div>

            {/* Main Headline - Befeis Style */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                We Help You To
                <span className="text-blue-600 dark:text-blue-400 block">
                  Grow Your Business
                </span>
                Exponentially
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl transition-colors duration-300">
                Our expert team provides comprehensive financial consulting, tax
                planning, and business advisory services to help your company
                achieve sustainable growth and maximize profitability.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={staggerItem}
            >
              {[
                "Strategic Tax Planning",
                "Financial Audit & Compliance",
                "Business Growth Consulting",
                "Risk Management Solutions",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={staggerItem}
            >
              {/* Primary Button - Touch Friendly */}
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg overflow-hidden min-h-[48px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 border-2 border-white/20 rounded-xl"></div>
              </motion.button>

              {/* Secondary Button - Touch Friendly */}
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-md hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 min-h-[48px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Download Broucher
                </span>
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex items-center space-x-8 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
              variants={staggerItem}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  500+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Success Rate
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - 5 columns */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-3xl transform rotate-6"
                animate={{
                  y: [-5, 5, -5],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              ></motion.div>

              {/* Main Content Card */}
              <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform -rotate-3 border border-gray-100 dark:border-gray-700"
                {...cardHover}
                whileHover={{ rotate: 0 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      Business Analytics
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                      Real-time insights
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="mb-6">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 70, 45, 80, 60, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-t-lg opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg transition-colors duration-300">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      +32%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Revenue
                    </div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-colors duration-300">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      Rs. 5M+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Savings
                    </div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg transition-colors duration-300">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      +45%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Growth
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Tax Optimized
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      $50K Saved
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Compliance
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      100% Secure
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
