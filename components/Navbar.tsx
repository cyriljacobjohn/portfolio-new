"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaRocket } from 'react-icons/fa';

/**
 * Navbar component replicating the style of Abhishek Ganvir's site. It
 * sticks to the top of the viewport, blurs the background when
 * scrolled and highlights the active section with a coloured underline.
 */
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(id);
              }
            });
          },
          { root: null, rootMargin: '0px', threshold: 0.4 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-colors duration-300',
        scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Site name */}
        <a href="#home" className="text-xl font-semibold text-white tracking-wide hover:text-accent transition-colors">
          <FaRocket className="inline-block mr-2 text-accent" />
          <span>Cyril John</span>
        </a>
        {/* Navigation items */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-300">
          {navItems.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={clsx('hover:text-accent transition-colors', active === id && 'text-accent')}
              >
                {label}
              </a>
              {/* underline indicator */}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}