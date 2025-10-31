import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "tax-planning", label: "Tax Planning" },
    { id: "audit", label: "Audit & Assurance" },
    { id: "consulting", label: "Business Consulting" },
    { id: "corporate-finance", label: "Corporate Finance" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Inc. Tax Optimization",
      category: "tax-planning",
      client: "TechStart Inc.",
      industry: "Technology",
      description:
        "Comprehensive tax planning strategy that resulted in $200K+ annual savings through strategic restructuring and optimization.",
      challenge: "High tax burden affecting cash flow and growth potential",
      solution:
        "Implemented strategic tax planning including entity restructuring, R&D credits, and international tax optimization",
      results: [
        "Reduced tax liability by 35%",
        "Saved $200K+ annually",
        "Improved cash flow by 25%",
        "Enhanced compliance processes",
      ],
      image: "TS",
      gradient: "from-blue-500 to-purple-600",
      year: "2024",
      duration: "6 months",
    },
    {
      id: 2,
      title: "Growth Dynamics IPO Preparation",
      category: "audit",
      client: "Growth Dynamics",
      industry: "Manufacturing",
      description:
        "Complete audit and compliance preparation for successful IPO, ensuring regulatory compliance and investor confidence.",
      challenge:
        "Preparing financial statements and controls for public company requirements",
      solution:
        "Comprehensive audit, internal controls review, and compliance framework implementation",
      results: [
        "Successful IPO completion",
        "Zero audit findings",
        "Enhanced internal controls",
        "Improved investor confidence",
      ],
      image: "GD",
      gradient: "from-green-500 to-teal-600",
      year: "2023",
      duration: "12 months",
    },
    {
      id: 3,
      title: "InnovateLab Series A Funding",
      category: "corporate-finance",
      client: "InnovateLab",
      industry: "Biotech",
      description:
        "Strategic financial advisory for Series A funding round, including valuation, due diligence, and investor relations.",
      challenge:
        "Securing growth capital while maintaining favorable valuation and terms",
      solution:
        "Comprehensive financial modeling, investor presentation, and negotiation support",
      results: [
        "Secured $5M Series A",
        "Achieved target valuation",
        "Streamlined due diligence",
        "Strong investor relations",
      ],
      image: "IL",
      gradient: "from-orange-500 to-red-600",
      year: "2024",
      duration: "4 months",
    },
    {
      id: 4,
      title: "RetailMax Operational Efficiency",
      category: "consulting",
      client: "RetailMax",
      industry: "Retail",
      description:
        "Business process optimization and financial restructuring to improve operational efficiency and profitability.",
      challenge:
        "Declining margins and operational inefficiencies across multiple locations",
      solution:
        "Process analysis, cost optimization, and performance management system implementation",
      results: [
        "Improved margins by 18%",
        "Reduced operational costs by 22%",
        "Enhanced reporting systems",
        "Streamlined operations",
      ],
      image: "RM",
      gradient: "from-purple-500 to-pink-600",
      year: "2023",
      duration: "8 months",
    },
    {
      id: 5,
      title: "HealthCorp Merger Advisory",
      category: "corporate-finance",
      client: "HealthCorp",
      industry: "Healthcare",
      description:
        "M&A advisory services for strategic acquisition, including valuation, due diligence, and integration planning.",
      challenge:
        "Complex healthcare industry regulations and integration challenges",
      solution:
        "Comprehensive due diligence, regulatory compliance review, and integration strategy",
      results: [
        "Successful merger completion",
        "Regulatory approval achieved",
        "Seamless integration",
        "Synergy realization of $3M+",
      ],
      image: "HC",
      gradient: "from-indigo-500 to-blue-600",
      year: "2024",
      duration: "10 months",
    },
    {
      id: 6,
      title: "EcoEnergy Tax Credit Optimization",
      category: "tax-planning",
      client: "EcoEnergy Solutions",
      industry: "Renewable Energy",
      description:
        "Specialized tax planning for renewable energy projects, maximizing available tax credits and incentives.",
      challenge:
        "Complex renewable energy tax credit landscape and compliance requirements",
      solution:
        "Comprehensive tax credit analysis, structuring, and compliance management",
      results: [
        "Maximized tax credits worth $1.2M",
        "Improved project ROI by 15%",
        "Enhanced compliance framework",
        "Ongoing tax optimization",
      ],
      image: "EE",
      gradient: "from-green-500 to-emerald-600",
      year: "2023",
      duration: "5 months",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      quote:
        "Kriwin's expertise in tax optimization saved our company over $200K annually. Their strategic approach and attention to detail are exceptional.",
      author: "Subham",
      position: "Hybrizz InfoTech",
      image: "SJ",
    },
    {
      quote:
        "The team's guidance through our IPO process was invaluable. Their thorough audit and compliance work gave us and our investors complete confidence.",
      author: "Subham",
      position: "CFO, Growth Dynamics",
      image: "MC",
    },
    {
      quote:
        "Thanks to Kriwin's advisory services, we successfully secured our Series A funding with favorable terms. Highly recommended!",
      author: "Emily Rodriguez",
      position: "Founder, InnovateLab",
      image: "ER",
    },
  ];

  return (
    <>
      <SEOHead
        title="Portfolio - Kriwin Professional Consultancy | Client Success Stories"
        description="Explore our portfolio of successful client projects including tax optimization, audit services, business consulting, and corporate finance advisory. See real results and case studies."
        keywords="kriwin portfolio, client success stories, tax planning case studies, audit projects, business consulting results, corporate finance advisory"
        url="https://kriwin-consultancy.com/portfolio"
        type="website"
      />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
        {...sectionSlideUp}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"
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
              className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold mb-6"
              {...scaleInSpring}
            >
              <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2"></span>
              Our Portfolio
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Client Success
              <span className="text-purple-600 dark:text-purple-400 block">
                Stories & Results
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover how we've helped businesses across various industries
              achieve their financial goals through strategic planning, expert
              advice, and innovative solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "Rs. 50M+", label: "Client Savings" },
                { number: "98%", label: "Success Rate" },
                { number: "15+", label: "Industries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        className="py-12 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  {...cardHoverFloat}
                >
                  {/* Project Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-white text-xl font-bold`}
                      >
                        {project.image}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {project.year}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {project.client}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="px-8 pb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className="w-full mt-6 group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-2xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center">
                        View Case Study
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
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Client Testimonials */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear directly from the clients
              we've helped achieve success
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            {...viewportStagger}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700"
                variants={staggerItem}
                {...cardHoverFloat}
              >
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let us help you achieve similar results. Schedule a consultation
                to discuss your specific needs and discover how we can drive
                your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  {...buttonHoverBounce}
                >
                  <span className="flex items-center">
                    Start Your Success Story
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
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
                    View All Case Studies
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
