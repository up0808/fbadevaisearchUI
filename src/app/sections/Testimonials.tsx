"use client";

import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import type { TestimonialProps } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials: TestimonialProps[] = [
  {
    content:
      "FbaDevAiSearch has completely transformed how our research team works. Instead of spending hours sorting through search results, we get instant, comprehensive answers with verified sources. The conversational interface makes it feel like having an expert researcher on our team 24/7.",
    author: "Dr. Sarah Chen",
    role: "Research Director",
    company: "BioTech Innovations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    content:
      "As a developer, I was skeptical about AI search tools, but FbaDevAiSearch proved me wrong. The API integration was seamless, the streaming responses are blazingly fast, and the source citations give us confidence in the accuracy. It's now essential to our product research workflow.",
    author: "Michael Rodriguez",
    role: "Lead Developer",
    company: "DevFlow Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    content:
      "The conversational search feature is a game-changer! Being able to ask follow-up questions without losing context has made our content research so much more efficient. What used to take 2 hours now takes 20 minutes. Absolutely worth every penny.",
    author: "Emily Davis",
    role: "Content Strategy Lead",
    company: "Marketing Masters",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
  },
  {
    content:
      "We integrated FbaDevAiSearch into our customer support system, and response quality improved dramatically. The AI understands complex technical questions and provides accurate answers with sources our team can verify. Customer satisfaction is up 40%!",
    author: "James Wilson",
    role: "Customer Success Manager",
    company: "SupportTech Pro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 5,
  },
  {
    content:
      "As an educator, I needed a tool that could help students research effectively while teaching them to verify sources. FbaDevAiSearch does exactly that - it provides comprehensive answers AND shows where the information comes from. Perfect for academic research!",
    author: "Prof. Aisha Patel",
    role: "Associate Professor",
    company: "Tech University",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    rating: 5,
  },
  {
    content:
      "The real-time web search combined with AI summarization is incredibly powerful for market research. We can track trends, compare data, and get insights faster than ever. FbaDevAiSearch has become indispensable for our competitive analysis.",
    author: "David Kim",
    role: "Market Research Analyst",
    company: "InsightVentures",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
  },
];

export function Testimonials({ id }: AnimatedProps) {
  return (
    <section 
      id={id}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 mx-auto mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
          >
            <Star className="w-6 h-6 text-cyan-600 dark:text-cyan-400 fill-cyan-600 dark:fill-cyan-400" />
          </motion.div>
          
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Professionals
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how teams and individuals are transforming their research and search workflows with AI-powered intelligence
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                10K+
              </motion.div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Active Users
              </p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                1M+
              </motion.div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Searches Performed
              </p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                98%
              </motion.div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Satisfaction Rate
              </p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                &lt;2s
              </motion.div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Avg Response Time
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 rounded-full border border-cyan-200 dark:border-cyan-800 mb-6">
            <Quote className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Join thousands of satisfied users
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Ready to transform your search experience?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Start using FbaDevAiSearch today and discover how AI-powered intelligent search can save you time and improve your research quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-colors"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
    }
