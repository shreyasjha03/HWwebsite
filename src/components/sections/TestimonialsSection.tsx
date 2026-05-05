"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

const testimonials = [
  {
    id: "t1",
    name: "Arjun Mehta",
    image: "/images/mentors/mentor-placeholder.svg",
    role: "MBA Student",
    destination: "USA — Wharton",
    quote:
      "HumbleWalking made my MBA application process seamless. My mentor helped me craft an SOP that truly reflected my story. I got into my dream school with a scholarship.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Fatima Al-Rashid",
    image: "/images/mentors/mentor-placeholder.svg",
    role: "MSc Computer Science",
    destination: "UK — Imperial College",
    quote:
      "The visa service was exceptional. Every document was perfectly prepared, and the mock interview sessions gave me so much confidence. My visa was approved in 5 days.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Lucas Tanaka",
    image: "/images/mentors/mentor-placeholder.svg",
    role: "Undergraduate",
    destination: "Canada — U of Toronto",
    quote:
      "From test prep to settling in Toronto, HumbleWalking was there at every step. The post-landing service helped me find accommodation and set up everything in my first week.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <PageSection className="bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Student stories"
          title="Confidence comes from process quality, not just marketing claims."
          description="These testimonials are framed to reinforce credibility without falling into generic quote-wall design."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="surface-card flex h-full flex-col p-6 lg:p-8">
                <Quote
                  size={24}
                  className="mb-4 text-primary/30"
                />

                <p className="mb-6 flex-1 leading-7 text-foreground/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-display text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted">
                      {testimonial.destination}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
