"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

const AnimateOnScroll = ({ children }: { children: ReactNode }) => {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => {
        setInView(true);
      }}
    >
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={
          inView
            ? {
                opacity: 1,
              }
            : undefined
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimateOnScroll;
