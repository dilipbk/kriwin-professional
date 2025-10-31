import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  viewportAnimation,
  viewportStagger,
  staggerItem,
  cardHover,
  counterAnimation,
} from "../../utils/animations";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={counterRef}
      className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
      {...counterAnimation}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
};

interface StatisticCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  description: string;
  suffix?: string;
  prefix?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  icon,
  value,
  label,
  description,
  suffix = "",
  prefix = "",
}) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 touch-manipulation"
      variants={staggerItem}
      {...cardHover}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon Container */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-700/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="relative z-10 mb-4">
        <Counter end={value} suffix={suffix} prefix={prefix} duration={2500} />
      </div>

      {/* Label */}
      <div className="relative z-10 mb-3">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {label}
        </h4>
      </div>

      {/* Description */}
      <div className="relative z-10">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-blue-800/10 dark:from-blue-400/10 dark:to-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: 500,
      suffix: "+",
      label: "Happy Clients",
      description:
        "Businesses we've helped achieve their financial goals and optimize their operations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      value: 50,
      suffix: "+",
      label: "Strategic Partners",
      description:
        "Trusted partnerships with leading financial institutions and business networks.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: 10,
      suffix: "+",
      label: "Years Experience",
      description:
        "Over a decade of expertise in chartered accountancy and financial consulting.",
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
      value: 25,
      suffix: "+",
      label: "Service Areas",
      description:
        "Comprehensive range of financial services covering all aspects of business needs.",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
      {...viewportAnimation}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-800/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 dark:bg-orange-800/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors duration-300">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            Our Achievements
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Trusted by Businesses
              <span className="text-blue-600 dark:text-blue-400 block">
                Across Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              Our track record speaks for itself. We've built lasting
              relationships with clients by delivering exceptional results and
              maintaining the highest standards of professional excellence.
            </p>
          </div>
        </div>

        {/* Statistics Grid - Mobile Optimized */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          {...viewportStagger}
        >
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div className="mt-20 text-center" {...viewportAnimation}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-orange-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-orange-900/20"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                  Let us help you achieve your financial goals with our proven
                  expertise and personalized approach.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                </button>

                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    Schedule Consultation
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
