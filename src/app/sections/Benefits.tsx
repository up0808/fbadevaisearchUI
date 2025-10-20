"use client";

import { BenefitCard } from "@/components/sections/benifit/BenifitCard";
import type { BenefitProps } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { 
  Brain, 
  Search, 
  Sparkles, 
  BookOpen, 
  Zap,
  Globe,
  MessageSquare
} from "lucide-react";

const benefits: BenefitProps[] = [
  {
    icon: <Brain className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "AI-Powered Search Intelligence",
    description:
      "Experience next-generation search powered by Google's Gemini AI. Our intelligent system understands context, analyzes multiple sources, and delivers comprehensive answers with real-time web search capabilities. Get accurate, relevant results that go beyond simple keyword matching to truly understand what you're looking for.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "Interactive Summaries",
    description:
      "Receive beautifully formatted, easy-to-understand summaries from multiple sources. Our AI synthesizes information and presents key insights instantly.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "Conversational Interface",
    description:
      "Ask follow-up questions and maintain context throughout your research session. Our AI remembers your conversation history for deeper exploration.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: <Search className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "Real-Time Web Search with Source Citations",
    description:
      "Access the latest information from across the web with transparent source attribution. Every answer includes clickable references so you can verify and explore deeper.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "Research-Grade Accuracy",
    description:
      "Built on enterprise-grade infrastructure with Google Cloud Run. Get reliable, consistent answers backed by multiple verified sources for your research and decision-making.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: <Globe className="w-6 h-6 text-slate-900 dark:text-white" />,
    title: "Lightning-Fast Responses",
    description:
      "Stream results in real-time as they're generated. No more waiting - watch your answers appear instantly with our optimized streaming technology.",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function Benefits({ id }: AnimatedProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-cyan-800/30 mx-auto mb-4"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
        >
          <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
        </motion.div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              FbaDevAiSearch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Experience the future of intelligent search with AI-powered insights, real-time web research, and conversational exploration
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
        
        {/* Optional: Add a CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Ready to transform how you search and discover information?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Searching Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-colors"
            >
              View Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
    }
