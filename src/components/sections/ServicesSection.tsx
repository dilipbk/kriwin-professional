import React from "react";
import { motion } from "motion/react";
import {
  sectionSlideUp,
  viewportStagger,
  staggerItem,
  cardHoverFloat,
  buttonHoverBounce,
  textReveal,
  scaleInSpring,
  floatingAnimation,
} from "../../utils/animations";

const services = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Audit & Insurance",
    description:
      "Comprehensive audit solutions ensuring accuracy, transparency, and compliance in financial reporting.",
    features: [
      "Cash Flow Analysis",
      "Budget Planning",
      "Financial Forecasting",
      "Investment Strategy",
    ],

    popular: false,
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
    title: "Bookkeeping And Virtual CFO Services",
    description:
      "Accurate bookkeeping and expert virtual CFO guidance for smarter financial management and growth.",
    features: [
      "Tax Planning",
      "Compliance Management",
      "Tax Audits",
      "International Tax",
    ],

    popular: true,
    gradient: "from-green-500 to-green-600",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Human Resources Services",
    description:
      "Comprehensive HR solutions covering recruitment, payroll, compliance, and employee development to enhance organizational efficiency.",
    features: [
      "Financial Audits",
      "Internal Controls",
      "Risk Assessment",
      "Compliance Reviews",
    ],

    popular: false,
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Taxation And Other Regulatory Compliance",
    description:
      "Expert tax planning and regulatory compliance services ensuring accuracy, efficiency, and adherence to legal standards.",

    popular: false,
    gradient: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "IFRS And NFRS Consulting",
    description:
      "Professional IFRS and NFRS consulting for accurate financial reporting and global compliance standards.",
    popular: false,
    gradient: "from-red-500 to-red-600",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "System Set Up And Enhancement",
    description:
      "Efficient system setup and enhancement services to streamline operations and improve organizational performance.",
    popular: false,
    gradient: "from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
      {...sectionSlideUp}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-40 h-40 bg-blue-200/50 dark:bg-blue-800/30 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [0, 10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-60 h-60 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 transition-colors duration-300"
            {...scaleInSpring}
          >
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            Our Services
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
            {...textReveal}
          >
            Comprehensive Financial
            <motion.span
              className="text-blue-600 dark:text-blue-400 block"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Solutions for Your Business
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We offer a complete range of financial services designed to help
            your business grow, optimize operations, and achieve long-term
            success.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          {...viewportStagger}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative h-full"
              variants={staggerItem}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute -top-4 left-6 z-20"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </motion.div>
              )}

              {/* Main Card */}
              <motion.div
                className="relative bg-white h-full dark:bg-gray-800 rounded-3xl shadow-xs hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                {...cardHoverFloat}
              >
                {/* Gradient Background on Hover */}
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div> */}

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 ${service.iconBg} rounded-3xl flex items-center justify-center ${service.iconColor} mb-6 transition-all duration-500`}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      transition: {
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.4 },
                      },
                    }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Features */}
                  {/* <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-colors duration-500">
                          <svg
                            className="w-3 h-3 text-white"
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
                        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-500">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul> */}

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    {/* Custom CTA Button */}
                    <motion.button
                      className="group/btn relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-white group-hover:text-blue-600 rounded-2xl transition-all duration-500 hover:shadow-lg"
                      {...buttonHoverBounce}
                    >
                      <span className="flex items-center">
                        Learn More
                        <motion.svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 text-center transition-colors duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-orange-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-orange-900/20"></div>

          <div className="relative z-10">
            <motion.h3
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let our expert team help you achieve your financial goals with our
              comprehensive consulting services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Primary CTA */}
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden"
                {...buttonHoverBounce}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Schedule Free Consultation
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  borderColor: "rgb(37, 99, 235)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View All Services
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
