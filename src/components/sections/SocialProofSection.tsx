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
    <section className="py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light text-primary mb-4">
                <stat.icon size={24} />
              </div>
              <div className="font-display font-bold text-3xl text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
