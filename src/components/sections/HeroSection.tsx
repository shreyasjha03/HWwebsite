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
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="absolute inset-0">
        <div className="hero-glow absolute right-0 top-0 h-[24rem] w-[24rem] opacity-90" />
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="container-shell relative py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
              <Globe size={16} className="text-primary" />
              <span>Trusted by students across 40+ countries</span>
            </div>

            <div className="space-y-4">
              <p className="eyebrow">
                Structured support for admissions, visas, and relocation
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
                Plan your
                <span className="bg-[linear-gradient(135deg,#2563eb_0%,#60a5fa_100%)] bg-clip-text text-transparent">
                  {" "}global education journey
                </span>
                <br />
                with clarity and confidence.
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              HumbleWalking brings expert services, mentor guidance, and progress tracking into one clean experience built for students and families making high-stakes decisions.
            </p>

            <div className="surface-card max-w-2xl p-3 shadow-md">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search services, mentors, or destinations"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white/90 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-slate-500 focus:border-primary/70 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/services?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-primary"
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
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Book consultation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-border pt-2 text-sm text-muted">
              {["Verified mentors", "Transparent pricing", "Shared progress tracker"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
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
            <div className="surface-card relative p-5 lg:p-6">
              <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-100/95 p-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="eyebrow">Student plan</p>
                    <span className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
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
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <span className="text-sm font-medium text-foreground">{item}</span>
                        <span className={index === 2 ? "text-xs text-primary" : "text-xs text-emerald-700"}>{index === 2 ? "Next" : "Done"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="eyebrow">Mentor match</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 font-display text-xl font-semibold text-primary">
                        N
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">Nitin Agrawal</p>
                        <p className="text-sm text-slate-600">Oxford admissions mentor</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                      <span>Sessions completed</span>
                      <span className="font-medium text-foreground">1,267</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="eyebrow">Platform snapshot</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-3xl font-semibold text-foreground">94%</p>
                        <p className="mt-1 text-sm text-slate-600">visa success rate</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-foreground">500+</p>
                        <p className="mt-1 text-sm text-slate-600">mentor specialists</p>
                      </div>
                    </div>
                    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">
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
