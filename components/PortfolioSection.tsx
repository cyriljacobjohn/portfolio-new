"use client";

import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import RippleButton from "@/components/RippleButton";
import {
  FaExternalLinkAlt,
  FaArrowRight,
  FaFutbol,
  FaUtensils,
  FaHiking,
  FaDumbbell,
  FaRunning,
  FaGamepad,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaCode,
  FaStar,
  FaCubes,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

/**
 * PortfolioSection presents projects, interests and tech stack in a tabbed
 * interface. Each tab contains a set of items displayed as cards. The
 * styling is inspired by Abhishek Ganvir's portfolio showcase, with
 * translucent panels, soft gradients and glowing borders.
 */
export default function PortfolioSection() {
  // Define data for each category.  Projects include real or placeholder
  // projects with images and links.  Interests list personal hobbies with
  // representative icons.  Tech Stack showcases technologies used in this
  // portfolio and beyond, each with its own icon and colour.
  const categories: Record<string, any[]> = {
    Projects: [
      {
        title: "Hairstylist Matchmaking App",
        description:
          "Connects users to hairstylists based on their unique profile",
        image: "/hairstylistscreenshot.png",
        demo: "https",
        details: "#",
      },
      {
        title: "Soccer Game Predictor",
        description:
          "Predicts the outcome of soccer games.",
        image: "/comingsoon.png",
        demo: "#",
        details: "#",
      },
      {
        title: "Appointment Scheduler",
        description:
          "Assissts users in managing appointments efficiently with a  chatbot.",
        image: "/comingsoon.png",
        demo: "#",
        details: "#",
      },
    ],
    Interests: [
      { title: "Soccer", icon: FaFutbol },
      { title: "Cooking", icon: FaUtensils },
      { title: "Hiking", icon: FaHiking },
      { title: "Gym", icon: FaDumbbell },
      { title: "Running", icon: FaRunning },
      { title: "Gaming", icon: FaGamepad },
    ],
    "Tech Stack": [
      // Include a `color` for each technology so the icons display their brand colours
      { title: "HTML", icon: FaHtml5, color: "#E34F26" },
      { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { title: "Express JS", icon: SiExpress, color: "#8B5CF6" }, // using accent colour for Express
      { title: "Node JS", icon: FaNodeJs, color: "#339933" },
      { title: "React + Native", icon: FaReact, color: "#61DAFB" },
      { title: "MongoDB", icon: SiMongodb, color: "#47A248" },

      { title: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { title: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  };

  // Mapping of tab names to icons for the tab selector bar.
  const tabIcons: Record<string, any> = {
    Projects: FaCode,
    Interests: FaStar,
    "Tech Stack": FaCubes,
  };

  return (
    <section id="portfolio" className="relative overflow-hidden py-32 px-6">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
        >
          Portfolio Showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-12"
        >
          Explore my journey through projects, interests and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </motion.p>

        <Tab.Group defaultIndex={0}>
          {/* Tab selector bar styled like Abhishek's portfolio: large pill container with icons */}
          <div className="relative flex justify-center mb-8">
            <div className="flex w-full max-w-3xl rounded-3xl border border-border bg-secondary/40 backdrop-blur-md px-1 py-2">
              <Tab.List className="flex w-full">
                {Object.keys(categories).map((category) => {
                  const IconComp = tabIcons[category];
                  return (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        clsx(
                          "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-2xl transition focus:outline-none",
                          selected
                            ? "bg-gradient-to-r from-accent to-accent2 text-primary shadow-md"
                            : "text-gray-300 hover:bg-secondary/50"
                        )
                      }
                    >
                      {IconComp && <IconComp className="text-base" />}
                      <span>{category}</span>
                    </Tab>
                  );
                })}
              </Tab.List>
            </div>
          </div>
          <Tab.Panels>
            {Object.entries(categories).map(([categoryName, items], idx) => (
              <Tab.Panel key={idx} className="focus:outline-none">
                {categoryName === "Projects" ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: any, index: number) => (
                      <motion.div
                        key={index}
                        // Fly in from bottom-left or bottom-right depending on index
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -50 : 50,
                          y: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.05,
                          type: "spring",
                        }}
                        className="glass glow-hover rounded-2xl overflow-hidden flex flex-col"
                      >
                        <div className="h-40 w-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-sm gap-2">
                            <RippleButton
                              href={item.demo}
                              className="inline-flex items-center gap-1 glass glow-edge rounded-full px-4 py-2 soft-label"
                            >
                              Github
                              <FaExternalLinkAlt className="text-xs" />
                            </RippleButton>
                            <RippleButton
                              href={item.details}
                              className="inline-flex items-center gap-1 glass glow-edge rounded-full px-4 py-2 soft-label"
                            >
                              Details
                              <FaArrowRight className="text-xs" />
                            </RippleButton>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {items.map((item: any, index: number) => {
                      const IconComponent = item.icon;
                      const colour = item.color;
                      return (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                            y: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                            type: "spring",
                          }}
                          className="h-40 w-full rounded-2xl border border-border bg-secondary/60 backdrop-blur-md flex flex-col items-center justify-center text-center group glow-hover"
                        >
                          <div
                            className="mb-3 text-6xl transition-transform duration-300 group-hover:scale-110"
                            style={{ color: colour }}
                          >
                            {IconComponent && <IconComponent />}
                          </div>
                          <p className="text-sm font-medium text-gray-200">
                            {item.title}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

// Helper to combine classes conditionally
function clsx(...args: any[]) {
  return args.filter(Boolean).join(" ");
}
