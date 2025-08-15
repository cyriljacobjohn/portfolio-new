"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

/**
 * ParticlesBG renders an interactive particle system for the background. It
 * lazily initialises the tsParticles engine to avoid hydration issues. The
 * particle options are tuned to create subtle orbiting dots and connecting
 * lines similar to Abhishek's portfolio.
 */
export default function ParticlesBG() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="bg-particles"
      className="absolute inset-0"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: ["#8b5cf6", "#22d3ee", "#ffffff"] }, // purple, cyan & white
          shape: { type: "circle" },
          links: {
            enable: true,
            distance: 140,
            opacity: 0.12,
            color: "#8b5cf6",
            width: 1,
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: { min: 0.3, max: 0.6 } },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 120, duration: 0.4 } },
        },
      }}
    />
  );
}
