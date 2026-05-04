"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = [
  "Program Selection",
  "Scholarships",
  "SOP Review",
  "Visa Advisory",
  "Loans",
  "IELTS Preparation",
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light/50 via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm shadow-slate-200/80">
              <Globe size={18} className="text-primary" />
              <span>Trusted by students across 40+ countries</span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.28em] font-semibold text-primary/90 mb-4">
                Study abroad made simple
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Book study & work abroad services with bonafide mentors
              </h1>
            </div>

            <p className="max-w-2xl text-lg text-muted leading-relaxed">
              Discover mentor-guided packages for university applications,
              scholarships, visas, and post-landing support — all on one campus-ready
              platform.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Try searching ‘Scholarships’"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-white py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.slice(0, 4).map((category) => (
                  <Link
                    key={category}
                    href={`/services?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-all"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] border border-border bg-white p-8 shadow-[0_30px_80px_-45px_rgba(79,70,229,0.6)]">
              <div className="absolute -top-8 right-6 h-20 w-20 rounded-full bg-primary/10" />
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 p-6">
                <Image
                  src="/Logo HW 1.png"
                  alt="HumbleWalking hero"
                  width={260}
                  height={260}
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display text-xl">
                    N
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-[0.24em]">
                      Mentor spotlight
                    </p>
                    <h2 className="text-xl font-semibold text-foreground">
                      Nitin Agrawal
                    </h2>
                    <p className="text-sm text-muted">University of Oxford</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      bookings
                    </p>
                    <p className="text-xl font-semibold text-foreground">1267</p>
                  </div>
                  <Button variant="secondary" size="sm" className="bg-primary text-white hover:bg-primary-dark">
                    Book coaching
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
