"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Investor {
  name: string;
  logo: (isDark: boolean) => JSX.Element;
}

// OpenAI Logo SVG
const OpenAILogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07V171.4l26.93 15.56c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.99zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.13c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.97zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49l-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.12c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 7.01 12.14 9.53 26.37 7.14 40.16zm-168.51 55.43l-26.94-15.55c-.29-.14-.48-.42-.52-.74V112.92c0-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54l34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20v-40z"
      fill={isDark ? "#fff" : "#000"}
    />
  </svg>
);

// Google AI Logo SVG
const GoogleAILogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M100 20L120 60L160 40L140 80L180 80L140 100L180 120L140 120L160 160L120 140L100 180L80 140L40 160L60 120L20 120L60 100L20 80L60 80L40 40L80 60L100 20Z"
      fill="url(#google-gradient)"
    />
    <defs>
      <linearGradient id="google-gradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="0.33" stopColor="#EA4335" />
        <stop offset="0.66" stopColor="#FBBC04" />
        <stop offset="1" stopColor="#34A853" />
      </linearGradient>
    </defs>
  </svg>
);

// Anthropic Logo SVG
const AnthropicLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M140 180L120 130H80L60 180H40L80 50H120L160 180H140Z"
      fill={isDark ? "#fff" : "#000"}
    />
    <path
      d="M100 80L85 120H115L100 80Z"
      fill={isDark ? "#1a1a1a" : "#f5f5f5"}
    />
  </svg>
);

// Y Combinator Logo SVG
const YCombinatorLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="200" height="200" rx="8" fill="#FF6600" />
    <path
      d="M100 70L75 100H90V130H110V100H125L100 70Z"
      fill="#fff"
    />
  </svg>
);

// Sequoia Capital Logo SVG
const SequoiaLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M100 40L70 100L100 160L130 100L100 40Z"
      fill={isDark ? "#fff" : "#1a1a1a"}
    />
    <circle cx="100" cy="100" r="15" fill={isDark ? "#1a1a1a" : "#fff"} />
  </svg>
);

// a16z (Andreessen Horowitz) Logo SVG
const A16zLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill={isDark ? "#fff" : "#000"}
      fontSize="60"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      a16z
    </text>
  </svg>
);

// Khosla Ventures Logo SVG
const KhoslaLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M50 60L100 100L50 140V60Z"
      fill="#4CAF50"
    />
    <path
      d="M150 60L100 100L150 140V60Z"
      fill="#8BC34A"
    />
  </svg>
);

// Greylock Partners Logo SVG
const GreylockLogo = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="60" fill={isDark ? "#e0e0e0" : "#424242"} />
    <circle cx="100" cy="100" r="40" fill={isDark ? "#fff" : "#000"} />
    <circle cx="100" cy="100" r="20" fill={isDark ? "#424242" : "#e0e0e0"} />
  </svg>
);

const investors: Investor[] = [
  { name: "OpenAI", logo: OpenAILogo },
  { name: "Google AI", logo: GoogleAILogo },
  { name: "Anthropic", logo: AnthropicLogo },
  { name: "Y Combinator", logo: YCombinatorLogo },
  { name: "Sequoia Capital", logo: SequoiaLogo },
  { name: "a16z", logo: A16zLogo },
  { name: "Khosla Ventures", logo: KhoslaLogo },
  { name: "Greylock Partners", logo: GreylockLogo },
];

export function Sponsors({ id }: AnimatedProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground py-20"
    >
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Backed by Leading
            </span>
            <br />
            <span className="text-slate-900 dark:text-slate-100">
              AI & Tech Investors
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Trusted and supported by the world's most influential venture capital firms and AI pioneers
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* First Row - Moving Right */}
        <motion.div
          className="flex whitespace-nowrap mb-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          style={{ display: "flex", gap: "3rem" }}
        >
          {[...investors, ...investors].map((investor, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-8 group"
              style={{ width: "200px" }}
            >
              <div className="relative w-32 h-32 mb-4 transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  {investor.logo({ isDark })}
                </div>
              </div>
              <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                {investor.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second Row - Moving Left (reverse) */}
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          style={{ display: "flex", gap: "3rem" }}
        >
          {[...investors.slice().reverse(), ...investors.slice().reverse()].map((investor, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-8 group"
              style={{ width: "200px" }}
            >
              <div className="relative w-32 h-32 mb-4 transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  {investor.logo({ isDark })}
                </div>
              </div>
              <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                {investor.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-4 mt-16"
      >
        <div className="max-w-3xl mx-auto text-center p-6 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 rounded-2xl border border-cyan-200 dark:border-cyan-800">
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            🚀 Powered by cutting-edge AI technology and backed by{" "}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              $50M+ in funding
            </span>
            {" "}from leading investors in artificial intelligence and enterprise software
          </p>
        </div>
      </motion.div>
    </section>
  );
  }
