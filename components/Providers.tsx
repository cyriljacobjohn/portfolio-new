"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

/**
 * Providers component used to wrap the entire app. This allows us to
 * configure global providers (theme support, context etc.) in one
 * location. Currently we leverage next-themes to provide a dark mode via
 * the `class` strategy. Additional providers can be added here later.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}