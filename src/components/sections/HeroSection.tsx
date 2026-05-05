"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = [
  "Study Abroad",
  "Scholarships",
  "Visa & Docs",
  "Test Prep",
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="container-shell relative py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
              <Globe size={16} className="text-primary" />
              <span>Trusted by students across 40+ countries</span>
            </div>

            <div className="space-y-4">
              <p className="eyebrow">
                Structured support for admissions, visas, and relocation
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                A calmer, clearer way to plan your global education journey.
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-muted">
              Compare expert-led services, talk to vetted mentors, and move from application shortlist to landing checklist inside one consistent platform.
            </p>

            <div className="surface-card max-w-2xl p-3">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services, mentors, or destinations"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-transparent bg-transparent py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/services?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-muted hover:border-primary hover:text-primary"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/signup">
                <Button size="lg">
                  Start planning
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  Preview dashboard
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted">
              {["Verified mentors", "Transparent pricing", "Shared progress tracker"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="surface-card p-5 shadow-lg lg:p-6">
              <div className="grid gap-4 rounded-[20px] border border-border bg-slate-50/80 p-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[20px] bg-white p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="eyebrow">Student plan</p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      On track
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Fall 2026 MBA applications
                  </h2>
                  <div className="mt-6 space-y-3">
                    {[
                      "University shortlist approved",
                      "SOP review in progress",
                      "Visa document checklist pending",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-border bg-slate-50 px-4 py-3"
                      >
                        <span className="text-sm font-medium text-foreground">{item}</span>
                        <span className="text-xs text-muted">{index === 2 ? "Next" : "Done"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[20px] border border-border bg-white p-5">
                    <p className="eyebrow">Mentor match</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 font-display text-xl font-semibold text-primary">
                        N
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">Nitin Agrawal</p>
                        <p className="text-sm text-muted">Oxford admissions mentor</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-muted">Sessions completed</span>
                      <span className="font-medium text-foreground">1,267</span>
                    </div>
                  </div>

                  <div className="rounded-[20px] bg-slate-950 p-5 text-white">
                    <p className="eyebrow text-slate-400">Platform snapshot</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-3xl font-semibold">94%</p>
                        <p className="mt-1 text-sm text-slate-300">visa success rate</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold">500+</p>
                        <p className="mt-1 text-sm text-slate-300">mentor specialists</p>
                      </div>
                    </div>
                    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Image
                        src="/Logo HW 1.png"
                        alt="HumbleWalking"
                        width={160}
                        height={64}
                        className="h-14 w-auto object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
