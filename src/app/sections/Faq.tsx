"use client";

import { FAQItem } from "@/components/sections/faq/FaqItem";
import type { FAQItemProps } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const faqs: FAQItemProps[] = [
  {
    category: "General",
    question: "What is FbaDevAiSearch?",
    answer:
      "FbaDevAiSearch is an intelligent search platform powered by Google's Gemini AI and real-time web search. It provides comprehensive, contextualized answers by analyzing multiple sources and delivering instant summaries with source citations. Think of it as having a research assistant that understands your questions and finds the most relevant information across the web.",
  },
  {
    category: "General",
    question: "How does FbaDevAiSearch differ from regular search engines?",
    answer:
      "Unlike traditional search engines that show a list of links, FbaDevAiSearch uses AI to understand your question, search multiple sources, synthesize the information, and provide a comprehensive answer with citations. You can also ask follow-up questions in a natural conversation, making research more intuitive and efficient.",
  },
  {
    category: "Features",
    question: "What is conversational search and how does it work?",
    answer:
      "Conversational search allows you to have a back-and-forth dialogue with the AI. Each conversation maintains context, so you can ask follow-up questions without repeating information. For example, you can ask 'What is machine learning?' and then follow up with 'How is it used in healthcare?' - the AI remembers your conversation history.",
  },
  {
    category: "Features",
    question: "Can I see the sources for the AI's answers?",
    answer:
      "Absolutely! Every answer includes transparent source citations. When the AI searches the web, it displays all the URLs it used to generate the response. You can click on any source to verify information or explore topics in more depth. We believe in transparent, verifiable AI.",
  },
  {
    category: "Technical",
    question: "What AI technology powers FbaDevAiSearch?",
    answer:
      "FbaDevAiSearch is powered by Google's Gemini 2.5 Flash AI model for natural language understanding and generation. We integrate Tavily Search API for real-time web research, and deploy on Google Cloud Run for enterprise-grade reliability and performance. The entire system is built with LangGraph for advanced conversational AI workflows.",
  },
  {
    category: "Technical",
    question: "Is my search data private and secure?",
    answer:
      "Yes, we take privacy seriously. Your searches are processed securely through our API with authentication. We use industry-standard encryption (HTTPS/TLS), and conversations are stored temporarily using in-memory checkpointing. We don't share your search data with third parties, and you maintain full control over your conversation history.",
  },
  {
    category: "Usage",
    question: "What types of questions can I ask?",
    answer:
      "You can ask virtually anything! From current events and news ('What's happening with AI today?'), to research questions ('Explain quantum computing'), how-to queries ('How do I deploy on Cloud Run?'), comparisons ('Compare React vs Vue'), and conversational follow-ups. The AI works best with clear, specific questions but can handle casual language too.",
  },
  {
    category: "Usage",
    question: "How do I start a new conversation or continue an existing one?",
    answer:
      "Each new search automatically starts a fresh conversation and returns a checkpoint ID. To continue a conversation, simply include the checkpoint ID with your next question. The UI handles this automatically - you'll see your conversation history maintained throughout your session. You can start fresh anytime by clearing the conversation.",
  },
  {
    category: "Performance",
    question: "How fast are the responses?",
    answer:
      "Responses stream in real-time as they're generated! You'll see words appearing instantly, typically within 1-2 seconds of asking your question. Web searches add 2-5 seconds depending on the query. Our infrastructure is optimized with Google Cloud Run in the Mumbai region (Asia) for low-latency performance.",
  },
  {
    category: "Integration",
    question: "Can I integrate FbaDevAiSearch into my own application?",
    answer:
      "Yes! FbaDevAiSearch provides a REST API with server-sent events (SSE) for streaming responses. You can integrate it into web apps, mobile apps, or any platform that supports HTTP requests. API documentation includes authentication, endpoints, and example code in multiple languages. Contact us for API access and integration support.",
  },
  {
    category: "Support",
    question: "What if the AI doesn't understand my question or gives wrong information?",
    answer:
      "If you get unclear results, try rephrasing your question with more specific details. The AI is designed to handle ambiguity, but clearer questions yield better answers. If you spot incorrect information, always verify with the provided source citations. You can also rephrase and ask again, or report issues through our feedback system. We continuously improve based on user feedback.",
  },
  {
    category: "Support",
    question: "Do you offer customer support or documentation?",
    answer:
      "Yes! We provide comprehensive documentation including getting started guides, API reference, integration examples, and troubleshooting tips. For technical support, you can reach us through our contact form or email. We also maintain a knowledge base with tutorials and best practices for getting the most out of FbaDevAiSearch.",
  },
];

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

export function FAQ({ id }: AnimatedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section id={id} className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/20 opacity-10 dark:opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-cyan-800/30 mx-auto mb-4"
              initial={{ rotate: -15 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Questions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about AI-powered intelligent search
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delayChildren: 0.2 }}
        >
          <motion.button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-cyan-700 dark:text-cyan-300 shadow-md"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Questions
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-cyan-700 dark:text-cyan-300 shadow-md"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <FAQItem key={`${faq.category}-${index}`} {...faq} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 rounded-2xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you get the most out of FbaDevAiSearch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-colors"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
      }
