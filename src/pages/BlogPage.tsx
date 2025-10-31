import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
import blogData from "../data/blog.json";

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { posts, categories } = blogData;

  // Filter posts based on category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      activeCategory === "all" ||
      post.category.toLowerCase().replace(/ /g, "-").replace("&", "") ===
        activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "blue";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <SEOHead
        title="Blog - Kriwin Professional Consultancy | Financial Insights & Expert Advice"
        description="Stay informed with our latest insights on tax planning, business management, audit compliance, and financial strategies. Expert advice from certified professionals."
        keywords="financial blog, tax planning advice, business management tips, audit compliance, retirement planning, accounting insights"
        url="https://kriwin-consultancy.com/blog"
        type="website"
      />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden"
        {...sectionSlideUp}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-3xl"
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
              className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-semibold mb-6"
              {...scaleInSpring}
            >
              <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
              Financial Insights
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Expert Financial
              <span className="text-indigo-600 dark:text-indigo-400 block">
                Insights & Advice
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Stay informed with the latest financial strategies, tax planning
              tips, and business insights from our team of certified
              professionals. Knowledge that drives success.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.section
          className="py-20 bg-white dark:bg-slate-900"
          {...viewportAnimation}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" {...viewportAnimation}>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Don't miss these essential reads from our financial experts
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              {...viewportStagger}
            >
              {featuredPosts.slice(0, 2).map(post => (
                <motion.article
                  key={post.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                  variants={staggerItem}
                  {...cardHoverFloat}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-900/30 dark:to-blue-800/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-20 h-20 bg-${getCategoryColor(post.category)}-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}
                      >
                        {post.category.charAt(0)}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900/30 text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-300 rounded-full text-sm font-medium`}
                      >
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishDate)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Author & Read Time */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {post.author
                            .split(" ")
                            .map(n => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">
                            {post.author}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {post.authorRole}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Category Filter */}
      <motion.section
        className="py-12 bg-gray-50 dark:bg-gray-900"
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
            <motion.button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Articles
            </motion.button>
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-16 h-16 bg-${getCategoryColor(post.category)}-500 rounded-xl flex items-center justify-center text-white text-xl font-bold`}
                      >
                        {post.category.charAt(0)}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900/30 text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-300 rounded-full text-xs font-medium`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishDate)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read Time */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                          {post.author
                            .split(" ")
                            .map(n => n[0])
                            .join("")}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {post.author}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <motion.button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-colors duration-300"
                {...buttonHoverBounce}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Stay Updated with Financial Insights
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Subscribe to our newsletter and never miss important financial
                updates, tax planning tips, and business strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 ring-2 ring-white/20 rounded-2xl text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <motion.button
                  className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                  {...buttonHoverBounce}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
