import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import {
  Target,
  Heart,
  Users,
  Globe,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Story",
  description:
    "Learn about HumbleWalking's mission to make global education accessible and guided for every student.",
};

const values = [
  {
    icon: Target,
    title: "Student-First",
    description:
      "Every decision we make starts with one question: does this help the student succeed?",
  },
  {
    icon: Heart,
    title: "Authentic Guidance",
    description:
      "We believe in honest, transparent advice — never selling dreams, always providing reality-based guidance.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Our strength comes from our community of students, mentors, and experts who share knowledge freely.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "We're building a platform that makes world-class education guidance accessible to students everywhere.",
  },
];

const stats = [
  { value: "2021", label: "Founded" },
  { value: "25,000+", label: "Students Helped" },
  { value: "500+", label: "Expert Mentors" },
  { value: "40+", label: "Countries" },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Making global education{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  accessible
                </span>{" "}
                for everyone
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                HumbleWalking was born from a simple observation: millions of
                talented students miss out on global education opportunities not
                because they lack potential, but because they lack guidance.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                We built a platform that connects students with expert mentors
                and comprehensive services — demystifying the entire study
                abroad process from start to finish.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our values
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                These principles guide everything we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} hover={false}>
                  <CardBody>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                      <value.icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why students choose HumbleWalking
                </h2>
                <div className="space-y-4">
                  {[
                    "Comprehensive services covering the entire journey",
                    "Verified mentors with real-world experience",
                    "Transparent pricing with no hidden costs",
                    "Dedicated support at every step",
                    "Proven track record with 94% visa success rate",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-10 lg:p-14">
                <blockquote className="text-xl lg:text-2xl font-display font-medium text-foreground leading-relaxed mb-6">
                  "HumbleWalking helped me navigate the complex MBA application
                  process and I got into my dream school with a 50% scholarship.
                  I couldn't have done it without their guidance."
                </blockquote>
                <div>
                  <div className="font-medium text-foreground">Arjun Mehta</div>
                  <div className="text-sm text-muted">
                    MBA Student, Wharton
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-16 text-center">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Join our mission
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Whether you're a student starting your journey or an expert
                  who wants to guide others — there's a place for you at
                  HumbleWalking.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Get in touch
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      Explore services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
