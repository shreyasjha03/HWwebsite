"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const categories = [
  "Study Abroad",
  "Test Prep",
  "Visa & Docs",
  "Scholarships",
  "Career Guidance",
  "Post Landing",
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light/50 via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Globe size={16} />
            <span>Trusted by 25,000+ students worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Your journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              global education
            </span>{" "}
            starts here
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert-guided services for every step of your study abroad journey —
            from university selection to settling in your new country.
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Search
                className="absolute left-4 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Search services, destinations, or mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-14 py-4 rounded-2xl border border-border bg-white shadow-lg shadow-slate-200/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <Link
                href="/services"
                className="absolute right-2 bg-primary text-white p-2.5 rounded-xl hover:bg-primary-dark transition-colors"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted mr-2">Popular:</span>
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category}
                href={`/services?category=${encodeURIComponent(category)}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground/70 hover:border-primary/30 hover:text-primary hover:bg-primary-light transition-all"
              >
                {category}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
