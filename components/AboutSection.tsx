"use client";

import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaArrowRight,
  FaCode,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";
import RippleButton from "@/components/RippleButton";

/**
 * AboutSection introduces the author and provides quick stats on their
 * experience. It includes call-to-action buttons for downloading the
 * CV and jumping directly to the portfolio. Statistics cards are
 * rendered from a simple data structure.
 */
export default function AboutSection() {
  const stats = [
    {
      icon: FaCode,
      number: "4+",
      label: "Total Projects",
      description: "Automation & full‑stack solutions",
    },
    {
      icon: FaCertificate,
      number: "2",
      label: "Certificates",
      description: "Always learning & growing",
    },
    {
      icon: FaGlobe,
      number: "3",
      label: "Years of Experience",
      description: "Continuous learning journey",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-32 px-6">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-8"
        >
          Hello fellow martian, welcome to my spaceship. I'm the captain and
          sole traveler of Cyril Space Escapades, a Computer Science graduate
          from Texas A&M and Software Engineer. I started my journey through
          full‑stack development; now my ship is headed towards helping business
          processes and experimenting with predictive modelling. Come explore my
          past endeavours and current explorations!
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <RippleButton
            href="/CJohn_Resume2025.docx"
            className="glass glow-edge glow-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 soft-label"
          >
              <FaFileDownload className="text-accent" />
              Download Resume
            
          </RippleButton>

          <RippleButton
            href="#portfolio"
            className="glass glow-edge glow-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 soft-label"
          >
            <FaArrowRight className="text-accent" />
            View Projects
          </RippleButton>
        </motion.div>

        {/* Stats cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="relative glass glow-hover rounded-2xl p-6 flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="grid place-items-center h-12 w-12 rounded-full bg-accent/20">
                    <Icon className="text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white leading-none">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{stat.description}</p>
                  <FaArrowRight className="text-gray-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
