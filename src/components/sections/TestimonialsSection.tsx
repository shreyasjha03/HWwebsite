"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Stories from our students
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real experiences from students who trusted us with their education
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 h-full flex flex-col">
                <Quote
                  size={24}
                  className="text-primary/30 mb-4"
                />

                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
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

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-display font-semibold text-sm">
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
    </section>
  );
}
