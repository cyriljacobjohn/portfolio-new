"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Section component used to wrap page sections. Animates into view using
 * framer-motion when the section enters the viewport. Also accepts an
 * identifier for anchoring via the Navbar. Adjust padding or maximum
 * width here to change spacing globally.
 */
export default function Section({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}