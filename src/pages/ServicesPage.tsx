import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/ui";
import { SEOHead } from "../components/common/SEOHead";
import {
  sectionSlideUp,
  viewportAnimation,
  viewportStagger,
  staggerItem,
  cardHoverFloat,
  buttonHoverBounce,
  floatingAnimation,
  scaleInSpring,
} from "../utils/animations";

export const ServicesPage: React.FC = () => {
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
      title: "Financial Planning & Analysis",
      shortDescription:
        "Strategic financial planning to optimize your business performance",
      fullDescription:
        "Our comprehensive financial planning services help businesses create robust financial strategies, analyze performance metrics, and make data-driven decisions for sustainable growth.",
      features: [
        "Cash Flow Analysis & Forecasting",
        "Budget Planning & Management",
        "Financial Performance Analysis",
        "Investment Strategy Development",
        "Risk Assessment & Mitigation",
        "Financial Reporting & KPI Tracking",
      ],
      benefits: [
        "Improved cash flow management",
        "Better financial decision making",
        "Reduced financial risks",
        "Enhanced profitability",
      ],
      pricing: {
        starting: "$2,500",
        description: "Comprehensive financial planning package",
      },
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
      title: "Tax Planning & Optimization",
      shortDescription:
        "Minimize tax burden while maximizing savings legally and efficiently",
      fullDescription:
        "Our expert tax professionals provide comprehensive tax planning strategies to help individuals and businesses minimize their tax liabilities while ensuring full compliance with all regulations.",
      features: [
        "Strategic Tax Planning",
        "Tax Compliance Management",
        "Tax Audit Representation",
        "International Tax Services",
        "Estate & Gift Tax Planning",
        "Business Tax Optimization",
      ],
      benefits: [
        "Significant tax savings",
        "Reduced audit risks",
        "Improved compliance",
        "Peace of mind",
      ],
      pricing: {
        starting: "$1,800",
        description: "Complete tax optimization service",
      },
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
      title: "Audit & Assurance Services",
      shortDescription:
        "Independent audit services ensuring accuracy and compliance",
      fullDescription:
        "Our audit and assurance services provide independent verification of financial statements, ensuring accuracy, compliance, and stakeholder confidence in your financial reporting.",
      features: [
        "Financial Statement Audits",
        "Internal Control Reviews",
        "Compliance Audits",
        "Risk Assessment Services",
        "Management Letter Reports",
        "Agreed-Upon Procedures",
      ],
      benefits: [
        "Enhanced credibility",
        "Improved internal controls",
        "Regulatory compliance",
        "Stakeholder confidence",
      ],
      pricing: {
        starting: "$5,000",
        description: "Professional audit services",
      },
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
      title: "Business Consulting",
      shortDescription:
        "Strategic consulting to accelerate growth and improve efficiency",
      fullDescription:
        "Our business consulting services help companies optimize operations, develop growth strategies, and navigate complex business challenges with expert guidance and proven methodologies.",
      features: [
        "Growth Strategy Development",
        "Process Optimization",
        "Market Analysis & Research",
        "Performance Improvement",
        "Change Management",
        "Business Model Innovation",
      ],
      benefits: [
        "Accelerated growth",
        "Improved efficiency",
        "Better market positioning",
        "Enhanced profitability",
      ],
      pricing: {
        starting: "$3,200",
        description: "Strategic business consulting",
      },
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
      title: "Risk Management",
      shortDescription:
        "Comprehensive risk assessment and management solutions",
      fullDescription:
        "Our risk management services help businesses identify, assess, and mitigate various risks that could impact their operations, financial performance, and strategic objectives.",
      features: [
        "Risk Assessment & Analysis",
        "Compliance Monitoring",
        "Internal Control Systems",
        "Fraud Prevention Programs",
        "Business Continuity Planning",
        "Insurance Advisory Services",
      ],
      benefits: [
        "Reduced business risks",
        "Better compliance",
        "Protected assets",
        "Business continuity",
      ],
      pricing: {
        starting: "$2,800",
        description: "Risk management solutions",
      },
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
      title: "Corporate Finance",
      shortDescription:
        "Expert corporate finance services for strategic growth",
      fullDescription:
        "Our corporate finance team provides expert advisory services for mergers, acquisitions, capital raising, and other strategic transactions to help businesses achieve their growth objectives.",
      features: [
        "M&A Advisory Services",
        "Capital Raising Support",
        "Business Valuation",
        "Due Diligence Services",
        "Financial Modeling",
        "Transaction Structuring",
      ],
      benefits: [
        "Strategic growth",
        "Optimal deal structures",
        "Maximized valuations",
        "Successful transactions",
      ],
      pricing: {
        starting: "$8,500",
        description: "Corporate finance advisory",
      },
      popular: false,
      gradient: "from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive consultation to understand your specific needs, challenges, and objectives.",
    },
    {
      step: "02",
      title: "Analysis & Planning",
      description:
        "Our experts analyze your current situation and develop a customized strategy tailored to your goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We work closely with you to implement the recommended solutions and strategies effectively.",
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description:
        "We provide ongoing monitoring, support, and adjustments to ensure continued success and optimization.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Our Services - Kriwin Professional Consultancy | Comprehensive Financial Solutions"
        description="Explore our comprehensive range of financial services including tax planning, audit & assurance, business consulting, risk management, and corporate finance solutions."
        keywords="financial services, tax planning, audit services, business consulting, risk management, corporate finance, chartered accountant services"
        url="https://kriwin-consultancy.com/services"
        type="website"
      />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
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
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-6"
              {...scaleInSpring}
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
              Our Services
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Comprehensive Financial
              <span className="text-blue-600 dark:text-blue-400 block">
                Solutions for Your Business
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              From strategic tax planning to comprehensive business consulting,
              we offer a complete range of professional services designed to
              help your business thrive and achieve long-term financial success.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...viewportStagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative"
                variants={staggerItem}
                {...cardHoverFloat}
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

                {/* Service Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div
                      className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconColor} mb-6`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="p-8 pt-6 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <motion.button
                      className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-lg overflow-hidden"
                      {...buttonHoverBounce}
                    >
                      <span className="relative z-10 flex items-center">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
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
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure the best outcomes for our
              clients
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...viewportStagger}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 -translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Schedule a free consultation to discuss your specific needs and
                learn how our expert team can help your business achieve its
                financial goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  {...buttonHoverBounce}
                >
                  <span className="flex items-center">
                    Schedule Free Consultation
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </motion.button>

                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    Call Us Now
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
