"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Students Guided",
  },
  {
    icon: CheckCircle,
    value: "94%",
    label: "Visa Success Rate",
  },
  {
    icon: Globe,
    value: "40+",
    label: "Countries Covered",
  },
  {
    icon: Award,
    value: "500+",
    label: "Expert Mentors",
  },
];

export function SocialProofSection() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-shell py-7 lg:py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative px-0 py-3 text-left xl:px-8"
            >
              {index < stats.length - 1 ? (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.45),transparent)] xl:block" />
              ) : null}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-primary">
                  <stat.icon size={16} />
                </div>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
              <div className="font-display text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
