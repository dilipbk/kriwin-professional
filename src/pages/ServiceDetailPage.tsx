import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEOHead } from "../components/common/SEOHead";
import {
  sectionSlideUp,
  viewportAnimation,
  staggerItem,
  buttonHover,
  floatingAnimation,
  scaleInSpring,
} from "../utils/animations";
import servicesData from "../data/services.json";

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.services.find(s => s.id === serviceId);

  const relatedServices = servicesData.services
    .filter(s => s.id !== serviceId && s.category === service?.category)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${service?.title} - Kriwin Professional Consultancy`}
        description={service?.fullDescription}
        keywords={`${service?.title}, ${service?.category}, financial services, consulting`}
        url={`https://kriwin-consultancy.com/services/${service?.id}`}
        type="article"
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
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/services"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {service?.title}
              </span>
            </motion.nav>

            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-6"
              {...scaleInSpring}
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
              {service
                ? service.category.charAt(0).toUpperCase() +
                  service.category.slice(1)
                : ""}{" "}
              Services
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {service?.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {service?.shortDescription}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg overflow-hidden"
                {...buttonHover}
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
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
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  Schedule Consultation
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Details */}
      <div
        className="py-20 bg-white dark:bg-slate-900"
        // {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Service Overview
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: service?.fullDescription ?? "",
                  }}
                  className="text-gray-600 full-description dark:text-gray-300 leading-relaxed mb-8"
                ></p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {service?.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
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
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Benefits You'll Receive
                </h3>
                <ul className="space-y-3">
                  {service?.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-5 h-5 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-32 space-y-8"
                // initial={{ opacity: 0, x: 30 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.8 }}
              >
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Schedule a free consultation to discuss your specific needs
                    and learn how we can help.
                  </p>
                  <div className="space-y-4">
                    <motion.button
                      className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule Free Consultation
                    </motion.button>
                    <motion.button
                      className="w-full border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Call Us Now
                    </motion.button>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Service Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Category
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white capitalize">
                        {service?.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Delivery Time
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        2-4 weeks
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        Support
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        24/7 Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <motion.section
          className="py-20 bg-gray-50 dark:bg-gray-900"
          {...viewportAnimation}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Related Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Explore other services in the {service?.category} category
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  variants={staggerItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${relatedService.id}`}
                    className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {relatedService.shortDescription}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
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
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

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
              <h2 className="text-4xl font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Take the first step towards optimizing your {service?.category}{" "}
                processes. Our expert team is ready to help you achieve your
                business goals.
              </p>

              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Your Free Quote
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
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
