import React from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { PageTransition } from "../components/ui";
import { SEOHead } from "../components/common/SEOHead";
import {
  sectionSlideUp,
  viewportAnimation,
  buttonHoverBounce,
  floatingAnimation,
} from "../utils/animations";
import blogData from "../data/blog.json";

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, categories } = blogData;

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = posts
    .filter(
      p =>
        p.id !== post.id &&
        (p.category === post.category ||
          p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3);

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

  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 first:mt-0"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4"
          >
            {paragraph.replace("### ", "")}
          </h3>
        );
      }
      if (paragraph.startsWith("#### ")) {
        return (
          <h4
            key={index}
            className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3"
          >
            {paragraph.replace("#### ", "")}
          </h4>
        );
      }
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h4
            key={index}
            className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3"
          >
            {paragraph.replace(/\*\*/g, "")}
          </h4>
        );
      }
      if (paragraph.startsWith("- ")) {
        const listItems = paragraph
          .split("\n")
          .filter(item => item.startsWith("- "));
        return (
          <ul
            key={index}
            className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300"
          >
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p
          key={index}
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
        >
          {paragraph}
        </p>
      );
    });
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - Kriwin Professional Consultancy`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        url={`https://kriwin-consultancy.com/blog/${post.slug}`}
        type="article"
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
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">
                {post.title}
              </span>
            </motion.nav>

            {/* Category & Date */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className={`px-4 py-2 bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900/30 text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-300 rounded-full text-sm font-semibold`}
              >
                {post.category}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {formatDate(post.publishDate)}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {post.readTime}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {post.excerpt}
            </motion.p>

            {/* Author Info */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author
                  .split(" ")
                  .map(n => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">
                  {post.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {post.authorRole}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        className="py-20 bg-white dark:bg-slate-900"
        {...viewportAnimation}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image Placeholder */}
            <motion.div
              className="h-96 bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-900/30 dark:to-blue-800/30 rounded-3xl mb-12 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-32 h-32 bg-${getCategoryColor(post.category)}-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold`}
                >
                  {post.category.charAt(0)}
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.article
              className="prose prose-lg max-w-none dark:prose-invert"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-lg leading-relaxed">
                {formatContent(post.content)}
              </div>
            </motion.article>

            {/* Tags */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share Section */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Share this article
              </h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  Copy Link
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          className="py-20 bg-gray-50 dark:bg-gray-900"
          {...viewportAnimation}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Related Articles
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-16 h-16 bg-${getCategoryColor(relatedPost.category)}-500 rounded-xl flex items-center justify-center text-white text-xl font-bold`}
                        >
                          {relatedPost.category.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category */}
                      <span
                        className={`inline-block px-3 py-1 bg-${getCategoryColor(relatedPost.category)}-100 dark:bg-${getCategoryColor(relatedPost.category)}-900/30 text-${getCategoryColor(relatedPost.category)}-800 dark:text-${getCategoryColor(relatedPost.category)}-300 rounded-full text-xs font-medium mb-3`}
                      >
                        {relatedPost.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      {/* Author & Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                            {relatedPost.author
                              .split(" ")
                              .map(n => n[0])
                              .join("")}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {relatedPost.author}
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Back to Blog */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/blog">
                  <motion.button
                    className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-colors duration-300"
                    {...buttonHoverBounce}
                  >
                    View All Articles
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};
