"use client";

import { motion } from "framer-motion";
import { Search, FileText, Send, Home } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Four simple steps from where you are now to where you want to be.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-light text-primary mb-6">
                <step.icon size={32} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
