"use client";

import { motion } from "framer-motion";
import SolarOrbit from "./SolarOrbit";
import { FaBolt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import RippleButton from "@/components/RippleButton";

/**
 * Hero component displaying the landing section. It includes the dynamic
 * background layers, an animated headline with a typewriter effect,
 * technology badges, call-to-action buttons and a live spaceship orbit
 * animation on the right. The layout is responsive and leverages
 * framer-motion for subtle entrance animations.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Film grain overlay on the section (positioned relative).  The global
          BackgroundFX is rendered in the root layout; here we only apply
          the noise grain overlay. */}
      <div className="absolute inset-0 noise" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full glass glow-hover px-4 py-2">
              <FaBolt className="text-accent" />
              <span className="text-sm soft-label">Open to Hiring</span>
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="block text-gray-100">Software</span>
              <span className="block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>

            {/* Typewriter line with fixed container to prevent jump */}
            <div className="mt-6 text-2xl text-gray-200/95 typewriter-container">
              <TypeAnimation
                sequence={[
                  "Computer Science @ Texas A&M",
                  1500,
                  "Automation Engineer",
                  1500,
                  "Interstellar problem-solver",
                  1500,
                ]}
                speed={50} // typing speed
                deletionSpeed={40} // backspace speed
                repeat={Infinity} // loop forever
                wrapper="span"
                className="block text-lg md:text-xl text-gray-300"
              />
            </div>

            {/* Subcopy */}
            <p className="mt-4 max-w-2xl text-gray-400">
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </p>

            {/* Tech pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="glass glow-hover rounded-full px-4 py-2 text-sm soft-label"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Call-to-action buttons with ripple effect */}
            <div className="mt-8 flex gap-4">
              <RippleButton
                href="#portfolio"
                className="glass glow-edge glow-hover rounded-xl px-6 py-3 soft-label"
              >
                Projects
              </RippleButton>
              <RippleButton
                href="#contact"
                className="glass glow-edge glow-hover rounded-xl px-6 py-3 soft-label"
              >
                Contact
              </RippleButton>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex gap-4">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaLinkedin, href: "#" },
                { Icon: FaInstagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="group grid h-12 w-12 place-items-center rounded-xl glass glow-hover"
                >
                  <Icon className="text-xl text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: spaceship orbit */}
        <motion.div
          className="col-span-5 mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <SolarOrbit />
        </motion.div>
      </div>
    </section>
  );
}
