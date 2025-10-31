import React from "react";
import { motion } from "motion/react";

export const AnimationTest: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 z-50 p-4 bg-red-500 text-white rounded">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Animation Test - If you see this smoothly appear, animations work!
      </motion.div>

      <motion.div
        className="w-8 h-8 bg-white rounded-full mt-2"
        animate={{
          x: [0, 50, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        }}
      />
    </div>
  );
};
