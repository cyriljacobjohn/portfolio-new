"use client";

/**
 * Footer component displaying a simple copyright notice. It
 * automatically updates the year. You can extend this component
 * with social media links or additional navigation if needed.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 text-center text-gray-500 text-sm border-t border-border bg-primary/60 backdrop-blur-lg">
      © {year} Cyril Space Escapades. All rights reserved.
    </footer>
  );
}