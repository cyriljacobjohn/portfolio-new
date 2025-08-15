import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import BackgroundFX from "@/components/BackgroundFX";
import { FaRocket } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

// Meta data for the site. Adjust title/description as desired.
export const metadata: Metadata = {
  title: "cyril's universe!",
  description:
    "Portfolio of Cyril John",
  icons: {
    icon: "FaRocket"
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-white ${inter.className} overflow-x-hidden scroll-smooth relative`}
      >
        {/* Global interstellar background layered behind all content */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <BackgroundFX />
        </div>
        {/* Providers wrapper for theme support and client components */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}