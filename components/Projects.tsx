"use client";

import Section from "./Section";
import { motion } from "framer-motion";

// Placeholder projects array. Populate with your real projects by
// replacing the objects here or importing from a lib file. Each project
// should include a title, description, tags, an image path and a link.
const projects = [
  {
    title: "Coming Soon",
    description:
      "Placeholder for a future project. This section will showcase my automation and full‑stack endeavours.",
    tags: ["Next.js", "Automation"],
    image: "/space-bg.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            className="relative rounded-lg overflow-hidden group bg-secondary/50 backdrop-blur-sm hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover opacity-70 group-hover:opacity-100 transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-accent/20 text-accent rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-6">Stay tuned for more…</p>
    </Section>
  );
}