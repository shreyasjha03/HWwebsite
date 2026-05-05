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
      <div className="container-shell py-8 lg:py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="surface-muted p-5 text-left"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                <stat.icon size={20} />
              </div>
              <div className="font-display text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
