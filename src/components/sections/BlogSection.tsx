import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  viewportAnimation,
  viewportStagger,
  staggerItem,
  cardHoverFloat,
  buttonHoverBounce,
} from "../../utils/animations";
import blogData from "../../data/blog.json";

export const BlogSection: React.FC = () => {
  const { posts, categories } = blogData;
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "blue";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      {...viewportAnimation}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...viewportAnimation}>
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
            Latest Insights
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Financial Expertise
            <span className="text-indigo-600 dark:text-indigo-400 block">
              At Your Fingertips
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest insights on tax planning, business
            strategies, and financial management from our team of certified
            professionals.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          {...viewportStagger}
        >
          {featuredPosts.map(post => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={staggerItem}
              {...cardHoverFloat}
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
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ Featured
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

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/blog">
            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500 rounded-2xl shadow-lg overflow-hidden"
              {...buttonHoverBounce}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-600 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 mr-2">View All Articles</span>
              <svg
                className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
