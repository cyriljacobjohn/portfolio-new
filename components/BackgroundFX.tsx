"use client";

import ParticlesBG from "./ParticlesBG";
import Sun from '@/components/Sun';  // import your Sun component

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Big Bang gradient background */}
      <div className="absolute inset-0 bg-bigbang -z-40" />

      {/* Particle constellations */}
      <div className="absolute inset-0 -z-30">
        <ParticlesBG />
      </div>

      {/* Sun with orbit rings on right side */}
      <div className="absolute inset-0 -z-20">
        <Sun />
      </div>

      {/* Aurora blobs (optional, keep if you like) */}
      <div className="aurora -z-10">
        <div className="a1"></div>
        <div className="a2"></div>
        <div className="a3"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-[5]" />

      {/* Vignette for focusing */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
    </div>
  );
}


