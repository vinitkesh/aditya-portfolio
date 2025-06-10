"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
