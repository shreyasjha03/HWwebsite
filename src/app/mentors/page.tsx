"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { mentors } from "@/lib/data/mentors";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Star,
  MapPin,
  Award,
  ArrowRight,
  Search,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const expertiseOptions = [
  "All",
  "MBA Admissions",
  "STEM Applications",
  "IELTS",
  "Canada Immigration",
  "Undergrad Admissions",
  "Germany Applications",
  "SOP Review",
  "Scholarships",
];

const countryOptions = [
  "All",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
];

export default function MentorsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = mentors.filter((m) => {
    const matchExpertise =
      selectedExpertise === "All" || m.expertise.includes(selectedExpertise);
    const matchCountry =
      selectedCountry === "All" ||
      m.country.toLowerCase() === selectedCountry.toLowerCase();
    const matchSearch =
      !searchQuery ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.university.toLowerCase().includes(searchQuery.toLowerCase());
    return matchExpertise && matchCountry && matchSearch;
  });

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your Mentor
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Connect with experienced mentors who've walked the path you're on.
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12 border-b border-border bg-white sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="relative flex-1 lg:flex-none lg:w-72">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search by name, university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={selectedExpertise}
                    onChange={(e) => setSelectedExpertise(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  >
                    {expertiseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt === "All" ? "All Expertise" : opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    size={16}
                  />
                </div>

                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  >
                    {countryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt === "All" ? "All Countries" : opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted mb-8">
              Showing {filteredMentors.length} mentor
              {filteredMentors.length !== 1 ? "s" : ""}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExpertise + selectedCountry + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredMentors.map((mentor) => (
                  <Card key={mentor.id}>
                    <CardBody>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-display font-bold text-2xl shrink-0">
                          {mentor.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {mentor.name}
                          </h3>
                          <p className="text-sm text-muted truncate">
                            {mentor.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-muted">
                          <MapPin size={14} />
                          <span>{mentor.country}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={14} className="text-primary" />
                          <span className="truncate">
                            {mentor.university}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {mentor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-xs text-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star
                              size={14}
                              className="fill-amber-400 text-amber-400"
                            />
                            <span className="font-medium text-foreground text-sm">
                              {mentor.rating}
                            </span>
                          </div>
                          <span className="text-xs text-muted">
                            ({mentor.reviews} reviews)
                          </span>
                        </div>
                        <span className="text-xs text-muted">
                          {mentor.sessionsCompleted} sessions
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm">
                          From{" "}
                          <span className="font-semibold text-foreground">
                            ${mentor.hourlyRate}/hr
                          </span>
                        </div>
                        <Link href={`/mentors/${mentor.id}`}>
                          <Button variant="outline" size="sm">
                            View profile
                            <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredMentors.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted mb-4">
                  No mentors found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedExpertise("All");
                    setSelectedCountry("All");
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
