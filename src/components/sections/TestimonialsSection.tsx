import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  sectionSlideUp,
  viewportStagger,
  staggerItem,
  cardHoverFloat,
  buttonHoverBounce,
  textReveal,
  scaleInSpring,
} from "../../utils/animations";

const testimonials = [
  {
    id: 1,
    name: "Dilip",
    position: "CEO",
    company: "Hybrizz InfoTech",
    image: "SJ",
    rating: 5,
    content:
      "Kriwin Professional Consultancy transformed our financial operations completely. Their strategic tax planning saved us over $200K in the first year alone. The team's expertise and dedication are unmatched.",
    results: "Saved $200K+ in taxes",
  },
  {
    id: 2,
    name: "Lokesh",
    position: "CFO",
    company: "Growth Dynamics",
    image: "MC",
    rating: 5,
    content:
      "The audit and compliance services provided by Kriwin exceeded our expectations. They helped us prepare for our IPO and ensured we met all regulatory requirements seamlessly.",
    results: "Successful IPO preparation",
  },
  {
    id: 3,
    name: "Subham",
    position: "Founder",
    company: "InnovateLab",
    image: "ER",
    rating: 5,
    content:
      "Working with Kriwin has been a game-changer for our startup. Their business consulting helped us optimize our financial structure and secure Series A funding of $5M.",
    results: "Secured $5M Series A",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden"
      {...sectionSlideUp}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 -left-20 w-40 h-40 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-10 -right-20 w-60 h-60 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 transition-colors duration-300"
            {...scaleInSpring}
          >
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            Client Testimonials
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
            {...textReveal}
          >
            What Our Clients
            <motion.span
              className="text-blue-600 dark:text-blue-400 block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Say About Us
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with our expert team.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Testimonial Navigation - 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTestimonial === index
                    ? "bg-blue-600 dark:bg-blue-500 text-white shadow-xl transform scale-105 border-blue-600 dark:border-blue-500"
                    : "bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg hover:shadow-xl border-gray-200 dark:border-gray-600"
                }`}
                whileHover={{
                  scale: activeTestimonial === index ? 1.05 : 1.02,
                  y: -4,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
                      activeTestimonial === index
                        ? "bg-white/20 text-white"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg transition-colors duration-300 ${
                        activeTestimonial === index
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        activeTestimonial === index
                          ? "text-blue-100"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {testimonial.position} at {testimonial.company}
                    </p>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 transition-colors duration-300 ${
                            activeTestimonial === index
                              ? "text-yellow-300"
                              : "text-yellow-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Testimonial Display - 8 columns */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Background Shape */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-3xl"
                animate={{
                  rotate: [0, 3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="relative bg-white dark:bg-gray-700 rounded-3xl shadow-2xl p-12 border border-gray-100 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20, rotateY: -10 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -20, rotateY: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute -top-6 left-0 md:-left-6 w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    "
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <blockquote className="text-2xl text-gray-900 dark:text-white leading-relaxed font-medium transition-colors duration-300">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>

                    {/* Results Badge */}
                    <div className="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-semibold transition-colors duration-300">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Result: {testimonials[activeTestimonial].results}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold">
                          {testimonials[activeTestimonial].image}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            {testimonials[activeTestimonial].position} at{" "}
                            {testimonials[activeTestimonial].company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex space-x-1 mb-1">
                          {[
                            ...Array(testimonials[activeTestimonial].rating),
                          ].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          5.0 Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 right-0 md:-right-4 bg-green-500 dark:bg-green-400 rounded-2xl p-4 text-white shadow-xl"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                // animate={{
                //   y: [0, -10, 0],
                //   rotate: [0, 5, 0],
                //   transition: {
                //     duration: 3,
                //     repeat: Infinity,
                //     ease: "easeInOut",
                //   },
                // }}
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-600 transition-colors duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-green-900/20"></div>

            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Join Our Success Stories?
              </motion.h3>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let us help you achieve similar results and transform your
                business financial operations.
              </motion.p>

              {/* Custom CTA Button */}
              <motion.button
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-2xl shadow-2xl overflow-hidden"
                {...buttonHoverBounce}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Success Story
                  <motion.svg
                    className="w-6 h-6 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 8 }}
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
                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
