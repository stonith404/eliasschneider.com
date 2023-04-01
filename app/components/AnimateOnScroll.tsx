"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimateOnScroll = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
