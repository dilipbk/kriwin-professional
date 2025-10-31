import React from "react";
import { motion } from "motion/react";
import {
  sectionSlideUp,
  viewportStagger,
  staggerItem,
  cardHover,
  buttonHoverBounce,
  textReveal,
  scaleInSpring,
  floatingAnimation,
} from "../../utils/animations";
import RameshNeupane from "@/assets/images/ramesh-nobg.png";

export const AboutSection: React.FC = () => {
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
          className="absolute bottom-20 -left-20 w-60 h-60 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column - 5 columns */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shapes */}
              <motion.div
                className="absolute -top-8 left-2 md:-left-8 w-32 h-32 bg-blue-100 dark:bg-blue-800/30 rounded-3xl transition-colors duration-300"
                animate={{
                  rotate: [12, 18, 12],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 right-2 md:-right-8 w-24 h-24 bg-orange-100 dark:bg-orange-800/30 rounded-2xl transition-colors duration-300"
                animate={{
                  rotate: [-12, -18, -12],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-2xl transition-colors duration-300"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-950 dark:from-blue-500 dark:to-blue-700 rounded-2xl flex items-center justify-center text-white text-6xl font-bold relative">
                  <div className="text-center">
                    <div className="border absolute z-10 -bottom-8 left-[25%] w-[60%] h-8 bg-[#e7e9ed] dark:bg-[#283343]"></div>
                    <motion.img
                      src={RameshNeupane}
                      className="absolute  -bottom-8 left-1/2 -translate-x-1/2"
                      alt="Founder and CEO"
                      // style={{
                      //   position: "absolute",
                      //   bottom: "-8px",
                      //   left: "50%",
                      //   translateX: "-50%",
                      //   zIndex: 20,
                      // }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.div
                      className="bg-black/60 absolute z-10 p-4 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div className="text-lg font-semibold">
                        Ramesh Neupane
                      </div>
                      <div className="text-sm opacity-80">Founder & CEO</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 right-0 md:-right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                {...floatingAnimation}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    10+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Years Exp.
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-0 md:-left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    500+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column - 7 columns */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
              About Our Company
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                Building Financial
                <span className="text-blue-600 dark:text-blue-400 block">
                  Success Stories
                </span>
                Since 2014
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                With over 10 years of experience in financial consulting, we
                have helped hundreds of businesses optimize their financial
                operations, reduce tax burdens, and achieve sustainable growth
                through strategic planning and expert guidance.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[
                {
                  icon: "🎯",
                  title: "Our Mission",
                  description:
                    "To provide exceptional financial consulting services that empower businesses to achieve their full potential.",
                },
                {
                  icon: "🔮",
                  title: "Our Vision",
                  description:
                    "To be the leading chartered accountancy firm known for innovation, integrity, and client success.",
                },
                {
                  icon: "⚖️",
                  title: "Our Values",
                  description:
                    "Integrity, excellence, innovation, and client-centric approach in everything we do.",
                },
                {
                  icon: "🚀",
                  title: "Our Approach",
                  description:
                    "Combining traditional expertise with modern technology to deliver superior results.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 group border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  500+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  Rs. 5M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Assets Managed
                </div>
              </div>
            </div>

            {/* Custom CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl overflow-hidden"
                {...buttonHoverBounce}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Learn More About Us
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
