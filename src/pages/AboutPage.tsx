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
import RameshNeupane from "../assets/images/ramesh-nobg.png";

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Ramesh Neupane",
      position: "Founder & CEO",
      credentials: "CPA, MBA",
      experience: "10+ Years",
      image: RameshNeupane,
      bio: "John founded Kriwin Professional Consultancy with a vision to provide exceptional financial services. His expertise spans across tax planning, financial auditing, and business consulting.",
      specialties: ["Tax Planning", "Financial Strategy", "Business Growth"],
    },
    {
      name: "Dilip",
      position: "Senior Tax Advisor",
      credentials: "CPA, MST",
      experience: "12+ Years",
      image: "SM",
      bio: "Dilip specializes in complex tax planning and compliance for high-net-worth individuals and corporations. She has helped clients save millions in tax liabilities.",
      specialties: ["International Tax", "Estate Planning", "Tax Compliance"],
    },
    {
      name: "Lokesh",
      position: "Audit Director",
      credentials: "CPA, CIA",
      experience: "10+ Years",
      image: "MC",
      bio: "Lokesh leads our audit and assurance practice, ensuring the highest standards of financial reporting and compliance for our clients.",
      specialties: ["Financial Audits", "Risk Assessment", "Internal Controls"],
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Started with a vision to provide exceptional financial consulting services",
    },
    {
      year: "2012",
      title: "100+ Clients",
      description:
        "Reached our first major milestone of serving over 100 satisfied clients",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description:
        "Expanded our team to include specialized tax and audit professionals",
    },
    {
      year: "2018",
      title: "Technology Integration",
      description:
        "Implemented cutting-edge financial technology solutions for better client service",
    },
    {
      year: "2021",
      title: "500+ Clients",
      description:
        "Celebrated serving over 500 clients across various industries",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as one of the top financial consulting firms in the region",
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our professional dealings and client relationships.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide, ensuring superior results for our clients.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We embrace modern technology and innovative approaches to deliver efficient financial solutions.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Client Focus",
      description:
        "Our clients' success is our priority. We build lasting relationships based on trust and results.",
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Kriwin Professional Consultancy | Expert Financial Team"
        description="Learn about our experienced team of chartered accountants and financial consultants. 10+ years of expertise serving 500+ clients with integrity and excellence."
        keywords="about kriwin consultancy, chartered accountant team, financial consulting experts, CPA firm, tax planning professionals"
        url="https://kriwin-consultancy.com/about"
        type="website"
      />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
        {...sectionSlideUp}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-80 h-80 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-3xl"
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
              About Our Company
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Building Financial
              <span className="text-blue-600 dark:text-blue-400 block">
                Success Stories
              </span>
              Since 2014
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We are a team of dedicated financial professionals committed to
              helping businesses and individuals achieve their financial goals
              through expert consulting, strategic planning, and innovative
              solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl overflow-hidden"
                {...buttonHoverBounce}
              >
                <span className="relative z-10 flex items-center">
                  Meet Our Team
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2014 by Ramesh Neupane, our consultancy began with
                  a simple yet powerful vision: to provide exceptional financial
                  services that truly make a difference in our clients' lives
                  and businesses.
                </p>
                <p className="leading-relaxed">
                  What started as a small practice has grown into a
                  comprehensive financial consultancy serving over 500 clients
                  across various industries. Our success is built on a
                  foundation of trust, expertise, and unwavering commitment to
                  our clients' financial well-being.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to evolve and adapt to the changing
                  financial landscape, incorporating cutting-edge technology and
                  innovative approaches while maintaining the personal touch
                  that sets us apart.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      Rs. 5M+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Assets Managed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      98%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our
              relationships with clients, colleagues, and the community.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...viewportStagger}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                variants={staggerItem}
                {...cardHoverFloat}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team of experienced professionals brings together decades of
              expertise in accounting, tax planning, and financial consulting.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...viewportStagger}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                variants={staggerItem}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Large Background Image */}
                <div className="relative h-96 overflow-hidden">
                  {member.image === "SM" || member.image === "MC" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-white text-8xl font-bold opacity-90"
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.4 },
                          }}
                        >
                          {member.image}
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                        {member.name}
                      </h3>
                      <p className="text-xl font-semibold text-blue-300 mb-2 drop-shadow-md">
                        {member.position}
                      </p>
                      <p className="text-sm font-medium text-gray-200 drop-shadow-md">
                        {member.credentials} • {member.experience}
                      </p>
                    </motion.div>
                  </div>

                  {/* Experience Badge - Top Right */}
                  <div className="absolute top-6 right-6">
                    <motion.div
                      className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="text-white font-semibold text-sm drop-shadow-md">
                        {member.experience}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section - Compact */}
                <div className="p-6 bg-white dark:bg-gray-800">
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {member.bio}
                  </motion.p>

                  {/* Specialties */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium cursor-default"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgb(59 130 246)",
                            color: "white",
                            transition: { duration: 0.2 },
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the
              years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

              <motion.div className="space-y-12" {...viewportStagger}>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start"
                    variants={staggerItem}
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <div className="ml-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
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
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Work with Our Expert Team?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let us help you achieve your financial goals with our proven
                expertise and personalized approach to financial consulting.
              </p>

              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                {...buttonHoverBounce}
              >
                <span className="flex items-center">
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
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
