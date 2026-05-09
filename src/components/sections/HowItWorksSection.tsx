"use client";

import { motion } from "framer-motion";
import { Search, FileText, Send, Home } from "lucide-react";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

const steps = [
  {
    icon: Search,
    title: "Explore Services",
    description:
      "Browse our marketplace of expert-guided services tailored to your goals and destination.",
  },
  {
    icon: FileText,
    title: "Get Matched",
    description:
      "Connect with the right service or mentor based on your profile and requirements.",
  },
  {
    icon: Send,
    title: "Apply & Prepare",
    description:
      "Work with your expert to complete applications, prep for tests, and prepare documents.",
  },
  {
    icon: Home,
    title: "Land & Settle",
    description:
      "From visa approval to post-landing support — we're with you every step of the way.",
  },
];

export function HowItWorksSection() {
  return (
    <PageSection className="bg-slate-50/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="How it works"
          title="A connected flow, not four disconnected content blocks."
          description="The journey is designed as a guided sequence, with each stage leading naturally into the next."
          align="center"
        />

        <div className="relative mt-4">
          <div className="absolute left-6 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(37,99,235,0.0),rgba(37,99,235,0.25),rgba(37,99,235,0.0))] sm:hidden" />
          <div className="absolute left-0 top-7 hidden h-px w-full bg-[linear-gradient(90deg,rgba(37,99,235,0.0),rgba(37,99,235,0.18),rgba(96,165,250,0.2),rgba(37,99,235,0.0))] xl:block" />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="surface-card relative p-6"
            >
              <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-primary">
                <step.icon size={22} />
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {index + 1}
                </div>
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </PageSection>
  );
}
