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

const projects = [
  {
    id: 1,
    title: "Chief Finance Officer - Cricket Association of Nepal",
    category: "finance-management",
    client: "Cricket Association of Nepal",
    industry: "Sports",
    description:
      "Appointed by ICC as CFO, managed financial planning, budgeting, and auditing for the association.",
    challenge: "Lack of structured financial management and reporting",
    solution:
      "Implemented robust financial control, reporting systems, and policy frameworks",
    results: [
      "Streamlined financial operations",
      "Ensured compliance with international standards",
      "Improved transparency and reporting accuracy",
    ],
    image: "CAN",
    gradient: "from-green-500 to-blue-600",
    year: "2021-2022",
    duration: "2 years",
  },
  {
    id: 2,
    title: "Finance Consultant - Cricket Association of Nepal",
    category: "finance-consulting",
    client: "Cricket Association of Nepal",
    industry: "Sports",
    description:
      "Provided advisory services for financial planning and management.",
    challenge: "Need for professional financial consultancy and optimization",
    solution:
      "Reviewed financial processes and provided strategic recommendations",
    results: [
      "Enhanced financial decision-making",
      "Improved budgeting and fund allocation",
      "Increased operational efficiency",
    ],
    image: "CAN",
    gradient: "from-yellow-400 to-red-500",
    year: "2022",
    duration: "1 year",
  },
  {
    id: 3,
    title: "Internal Audit - Asian Football Confederation (AFC)",
    category: "audit",
    client: "Asian Football Confederation",
    industry: "Sports",
    description:
      "Conducted internal audits ensuring compliance and financial transparency.",
    challenge: "Financial compliance and governance issues",
    solution: "Performed comprehensive internal audits",
    results: [
      "Identified financial discrepancies and recommended corrective actions",
      "Strengthened internal control systems",
    ],
    image: "AFC",
    gradient: "from-purple-500 to-pink-500",
    year: "2018-2019",
    duration: "2 years",
  },
  {
    id: 4,
    title: "Internal Audit - FIFA",
    category: "audit",
    client: "FIFA",
    industry: "Sports",
    description:
      "Performed internal audits for FIFA’s financial year 2075-76, 2076-77.",
    challenge: "Ensuring global compliance standards",
    solution: "Reviewed financial records and processes in detail",
    results: [
      "Strengthened compliance frameworks",
      "Improved audit reporting accuracy",
    ],
    image: "FIFA",
    gradient: "from-purple-600 to-blue-600",
    year: "2018-2019",
    duration: "2 years",
  },
  {
    id: 5,
    title: "Internal Audit - All Nepal Football Association (ANFA)",
    category: "audit",
    client: "ANFA",
    industry: "Sports",
    description:
      "Conducted internal audits for ANFA across multiple financial years.",
    challenge: "Need for improved internal financial controls",
    solution: "Evaluated internal systems and compliance measures",
    results: [
      "Enhanced financial governance",
      "Reduced risk of financial mismanagement",
    ],
    image: "ANFA",
    gradient: "from-blue-400 to-teal-500",
    year: "2018-2019",
    duration: "2 years",
  },
  {
    id: 6,
    title: "Statutory Audit - Nepal Bank Limited",
    category: "audit",
    client: "Nepal Bank Limited",
    industry: "Banking",
    description:
      "Conducted statutory audits including loan & advances, operational and risk management audits.",
    challenge: "Complex banking operations and regulatory compliance",
    solution: "Performed detailed audits and recommended corrective actions",
    results: [
      "Improved operational efficiency",
      "Ensured regulatory compliance",
    ],
    image: "NepalBank",
    gradient: "from-blue-500 to-indigo-500",
    year: "2018-2022",
    duration: "4 years",
  },
  {
    id: 7,
    title: "Audit - Dalit NGO Federation (USAID Funded Projects)",
    category: "audit",
    client: "Dalit NGO Federation",
    industry: "NGO",
    description:
      "Audited USAID funded OSF & FHI projects ensuring compliance with donor regulations.",
    challenge: "Ensure accountability for international donor funds",
    solution: "Conducted thorough audits and reporting",
    results: [
      "Ensured compliance with donor requirements",
      "Improved fund utilization",
    ],
    image: "DalitNGO",
    gradient: "from-green-400 to-blue-500",
    year: "2019-2022",
    duration: "3 years",
  },
  {
    id: 8,
    title:
      "Financial Policy Drafting - Dhanlaxmi Saving & Credit Co-operative Bank",
    category: "policy-consulting",
    client: "Dhanlaxmi S&CC Bank",
    industry: "Banking",
    description:
      "Drafted bylaws and financial, HR, loan, and savings policies.",
    challenge: "Lack of formalized operational and financial policies",
    solution: "Created comprehensive internal policies",
    results: [
      "Standardized banking operations",
      "Improved governance and compliance",
    ],
    image: "Dhanlaxmi",
    gradient: "from-indigo-500 to-purple-600",
    year: "2018-2022",
    duration: "4 years",
  },
  {
    id: 9,
    title:
      "Financial Policy Drafting - Mahila Saving & Credit Cooperative Bank",
    category: "policy-consulting",
    client: "Mahila S&CC Bank",
    industry: "Banking",
    description: "Drafted all bylaws and internal policies.",
    challenge: "Lack of structured operational framework",
    solution: "Developed comprehensive policies",
    results: ["Improved internal governance", "Streamlined operations"],
    image: "MahilaBank",
    gradient: "from-pink-400 to-red-500",
    year: "2018-2022",
    duration: "4 years",
  },
  {
    id: 10,
    title:
      "Financial Policy Drafting - Matamankamana Multipurpose Cooperative Bank",
    category: "policy-consulting",
    client: "Matamankamana Multipurpose Co-op Bank",
    industry: "Banking",
    description: "Drafted all bylaws and operational policies.",
    challenge: "Lack of formal governance structure",
    solution: "Developed financial and operational policies",
    results: ["Enhanced governance", "Improved operational efficiency"],
    image: "Matamankamana",
    gradient: "from-yellow-400 to-orange-500",
    year: "2018-2022",
    duration: "4 years",
  },
  {
    id: 11,
    title: "Finance & Cost Consultant - SB Cooling Corporation, India",
    category: "finance-consulting",
    client: "SB Cooling Corporation",
    industry: "Manufacturing",
    description:
      "Managed finance, cost, and operational decision-making for the company.",
    challenge: "High operational costs and inefficient financial management",
    solution: "Implemented cost reduction strategies and optimized workflows",
    results: [
      "Reduced operational costs",
      "Improved financial reporting accuracy",
      "Enhanced departmental decision-making",
    ],
    image: "SBC",
    gradient: "from-orange-400 to-red-500",
    year: "2015-2019",
    duration: "4 years",
  },
  {
    id: 12,
    title: "Finance Management Head - SBC Cooling Private Limited, India",
    category: "finance-consulting",
    client: "SBC Cooling Pvt Ltd",
    industry: "Manufacturing",
    description:
      "Oversaw finance operations and participated in company-wide strategic decisions.",
    challenge: "Need for integrated financial management across departments",
    solution:
      "Implemented finance controls and optimized interdepartmental decision-making",
    results: ["Streamlined finance operations", "Improved reporting accuracy"],
    image: "SBC",
    gradient: "from-blue-500 to-green-500",
    year: "2015-2019",
    duration: "4 years",
  },
  {
    id: 13,
    title: "Teaching - Professional Institutions, India",
    category: "training-education",
    client: "CA Institutions, Surat, India",
    industry: "Education",
    description:
      "Delivered CA Final and IPCC courses in finance, cost, taxation, and accounting.",
    challenge: "Need for expert-level finance training",
    solution: "Prepared curriculum and conducted specialized lectures",
    results: [
      "Trained multiple batches of students",
      "Improved student understanding of finance and cost management",
    ],
    image: "Education",
    gradient: "from-green-400 to-blue-500",
    year: "2015-2019",
    duration: "4 years",
  },
  {
    id: 14,
    title: "Article Assistant - Vipul Kapadiya & Co., India",
    category: "audit-tax",
    client: "Vipul Kapadiya & Co.",
    industry: "Chartered Accountancy",
    description:
      "Handled taxation, statutory audits, and project management for clients.",
    challenge: "Complex multi-client statutory and tax compliance",
    solution:
      "Managed TDS, GST, service tax, income tax filings, and audit reports efficiently",
    results: [
      "Streamlined client compliance processes",
      "Improved audit efficiency",
      "Gained expertise in internal control systems",
    ],
    image: "CAFirm",
    gradient: "from-purple-400 to-pink-500",
    year: "2012-2015",
    duration: "3.5 years",
  },
  {
    id: 15,
    title: "Revenue & Cooperative Bank Audit - India",
    category: "audit",
    client: "Surat People’s Co-operative Bank & others",
    industry: "Banking",
    description:
      "Performed internal and external audits for multiple cooperative banks in India.",
    challenge: "Ensure compliance with regulatory requirements",
    solution: "Conducted thorough audits and prepared reports",
    results: [
      "Strengthened compliance frameworks",
      "Improved operational transparency",
    ],
    image: "CoopBank",
    gradient: "from-indigo-500 to-blue-500",
    year: "2012-2016",
    duration: "4 years",
  },
];

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map(project => project.category.replace("-", " "))),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          project => project.category.replace("-", " ") === activeFilter
        );

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
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-2xl capitalize font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        // {...viewportAnimation}
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
                  // transition={{ duration: 0.6, delay: index * 0.1 }}
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

                    {/* <motion.button
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
                    </motion.button> */}
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
