import React, { useState } from "react";
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

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Call Us",
      subtitle: "Available 24/7",
      content: "+977 9851224841",
      description: "Free consultation call",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email Us",
      subtitle: "Quick response",
      content: "info@kriwinprofessional.com",
      description: "We'll respond within 24 hours",
      gradient: "from-green-600 to-green-700",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Visit Us",
      subtitle: "Sun - Sat, 9AM - 6PM",
      // content: "Sallaghari - 10",
      description: "Bagdole, Lalitpur",
      gradient: "from-orange-600 to-orange-700",
    },
  ];

  const officeHours = [
    { day: "Sunday - Saturday", hours: "9:00 AM - 6:00 PM" },

    { day: "Saturday", hours: "Closed" },
  ];

  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a free consultation by calling us at +977 9851224841, emailing us, or filling out the contact form on this page. We'll respond within 24 hours to set up a convenient time.",
    },
    {
      question: "What should I bring to my first meeting?",
      answer:
        "Please bring any relevant financial documents, tax returns from the past 2-3 years, business records, and a list of your specific questions or concerns. This will help us provide the most accurate advice.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer both in-person and virtual consultations via secure video conferencing. This allows us to serve clients regardless of their location while maintaining the same level of professional service.",
    },
    {
      question: "What are your fees?",
      answer:
        "Our fees vary depending on the complexity and scope of services required. We provide transparent pricing and will discuss all costs upfront during your initial consultation. Many of our services start with a free consultation.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Kriwin Professional Consultancy | Get Expert Financial Advice"
        description="Contact our expert team for professional financial consulting services. Schedule a free consultation today. Call ++977 9851224841 or visit our Bhaktapur office."
        keywords="contact kriwin consultancy, financial consultant contact, chartered accountant NYC, tax planning consultation, business consulting contact"
        url="https://kriwin-consultancy.com/contact"
        type="website"
      />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
        {...sectionSlideUp}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-80 h-80 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-3xl"
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
              Get In Touch
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ready to Transform
              <span className="text-blue-600 dark:text-blue-400 block">
                Your Financial Future?
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Schedule a free consultation with our expert team and discover how
              we can help optimize your financial operations, reduce costs, and
              accelerate growth.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form - 7 columns */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="tax-planning">
                        Tax Planning & Optimization
                      </option>
                      <option value="audit">
                        Financial Audit & Compliance
                      </option>
                      <option value="consulting">Business Consulting</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="corporate-finance">
                        Corporate Finance
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell us about your business needs..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-2xl shadow-xl overflow-hidden"
                    {...buttonHoverBounce}
                  >
                    <span className="relative z-10 flex items-center">
                      Send Message
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info - 5 columns */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Cards */}
              <motion.div className="space-y-6" {...viewportStagger}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={`group bg-gradient-to-br ${info.gradient} dark:${info.gradient} rounded-3xl p-8 text-white relative overflow-hidden`}
                    variants={staggerItem}
                    {...cardHoverFloat}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{info.title}</h3>
                          <p className="text-white/80">{info.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2">{info.content}</p>
                      <p className="text-white/80">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Office Hours */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                    >
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...viewportAnimation}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            {...viewportStagger}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                variants={staggerItem}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section (Placeholder) */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-3xl h-96 flex items-center justify-center border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bagdole, Lalitpur
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Interactive map coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
