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

export const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
      {...sectionSlideUp}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-60 h-60 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-12 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Content Column - 7 columns */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors duration-300"
              {...scaleInSpring}
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
              Get In Touch
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300"
                {...textReveal}
              >
                Ready to Transform
                <motion.span
                  className="text-blue-600 dark:text-blue-400 block"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Your Business?
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Schedule a free consultation with our expert team and discover
                how we can help optimize your financial operations, reduce
                costs, and accelerate growth.
              </motion.p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>

              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white">
                    <option>Select a service</option>
                    <option>Tax Planning & Optimization</option>
                    <option>Financial Audit & Compliance</option>
                    <option>Business Consulting</option>
                    <option>Risk Management</option>
                    <option>Corporate Finance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                {/* Custom Submit Button */}
                <motion.button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-2xl shadow-xl overflow-hidden"
                  {...buttonHoverBounce}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info Column - 5 columns */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Cards */}
            <motion.div className="space-y-6" {...viewportStagger}>
              {/* Phone Card */}
              <motion.div
                className="group bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-3xl p-8 text-white hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300 relative overflow-hidden"
                variants={staggerItem}
                {...cardHoverFloat}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">Call Us</h3>
                      <p className="text-blue-100">Available 24/7</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold mb-2">+1 (555) 123-4567</p>
                  <p className="text-blue-100">Free consultation call</p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="group bg-gradient-to-br from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 rounded-3xl p-8 text-white hover:from-green-700 hover:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 transition-all duration-300 relative overflow-hidden"
                variants={staggerItem}
                {...cardHoverFloat}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">Email Us</h3>
                      <p className="text-green-100">Quick response</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold mb-2">
                    info@kriwinprofessional.com
                  </p>
                  <p className="text-green-100">
                    We'll respond within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* Office Card */}
              <motion.div
                className="group bg-gradient-to-br from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600 rounded-3xl p-8 text-white hover:from-orange-700 hover:to-orange-800 dark:hover:from-orange-600 dark:hover:to-orange-700 transition-all duration-300 relative overflow-hidden"
                variants={staggerItem}
                {...cardHoverFloat}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.4)",
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        y: [-2, -6, -2],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">Visit Us</h3>
                      <p className="text-orange-100">Mon - Fri, 9AM - 6PM</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold mb-2">Sallaghari - 10</p>
                  <p className="text-orange-100">Bhaktapur, Nepal</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Schedule Meeting Button */}
              <motion.button
                className="group w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
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
                  </motion.div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Schedule a Meeting
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Book a free consultation
                    </p>
                  </div>
                </div>
                <motion.svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300"
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
              </motion.button>

              {/* Download Brochure Button */}
              <motion.button
                className="group w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-green-600 dark:hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-green-100 dark:bg-green-900/30 group-hover:bg-green-600 dark:group-hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors duration-300"
                    whileHover={{
                      scale: 1.1,
                      y: [-2, -6, -2],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </motion.div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      Download Brochure
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Learn about our services
                    </p>
                  </div>
                </div>
                <motion.svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300"
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
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
