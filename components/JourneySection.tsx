"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Item = { title: string; date: string; description: string };

function JourneyCard({ item }: { item: Item }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/60 p-6 backdrop-blur-md shadow-[0_0_60px_-30px_rgba(139,92,246,.45)]">
      <h3 className="text-lg font-semibold text-accent2 mb-1">{item.title}</h3>
      <p className="text-xs text-gray-400 mb-2">{item.date}</p>
      <p className="text-sm text-gray-200">{item.description}</p>
    </div>
  );
}

function JourneyRow({ item, index }: { item: Item; index: number }) {
  const isRight = index % 2 === 0; // even index -> right side on md+
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      controls.start({
        opacity: 0,
        x: isRight ? 100 : -100,
        y: 100,
      });
    }
  }, [inView, controls, isRight]);

  return (
    <div ref={ref} className="relative">
      {/* dot on the center line for this row */}
      <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rounded-full bg-accent border-4 border-secondary" />

      {/* Row: on mobile it's full width; on md+ it alternates sides */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 100 : -100, y: 100 }}
        animate={controls}
        transition={{ duration: 0.6, type: "spring" }}
        className={[
          "w-full md:w-1/2",
          isRight ? "md:ml-auto md:pl-8" : "md:pr-8",
        ].join(" ")}
      >
        <JourneyCard item={item} />
      </motion.div>
    </div>
  );
}

export default function JourneySection() {
  const experiences: Item[] = [
    {
      title: "Graduated BSc Computer Science @ Texas A&M",
      date: "Aug 2020 – Dec 2024",
      description:
        "",
    },
    {
      title: "Undergradaute Research @ Texas A&M Brain Networks Lab",
      date: "Aug 2024 – Dec 2024",
      description:
        "",
    },
    {
      title: "Software Engineer Intern @ Honeywell",
      date: "May 2023 – Aug 2023",
      description:
        "",
    },
    
  ];

  return (
    <section id="journey" className="relative overflow-hidden py-32 px-6">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent text-center"
        >
          My Journey
        </motion.h2>

        {/* central vertical line */}
        <div className="hidden md:block pointer-events-none absolute left-1/2 top-[180px] -translate-x-1/2 w-px h-[calc(100%-200px)] bg-gradient-to-b from-accent/70 via-accent/40 to-transparent" />

        <div className="mt-16 space-y-24">
          {experiences.map((item, index) => (
            <JourneyRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
