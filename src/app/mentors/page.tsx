"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Search, Star } from "lucide-react";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";
import { PageHero, PageSection } from "@/components/ui/PageSection";
import { Select } from "@/components/ui/Select";
import { mentors } from "@/lib/data/mentors";

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

const countryOptions = ["All", "USA", "UK", "Canada", "Australia", "Germany"];

export default function MentorsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = useMemo(
    () =>
      mentors.filter((mentor) => {
        const expertiseMatch =
          selectedExpertise === "All" || mentor.expertise.includes(selectedExpertise);
        const countryMatch =
          selectedCountry === "All" ||
          mentor.country.toLowerCase() === selectedCountry.toLowerCase();
        const searchMatch =
          !searchQuery ||
          mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.university.toLowerCase().includes(searchQuery.toLowerCase());
        return expertiseMatch && countryMatch && searchMatch;
      }),
    [searchQuery, selectedCountry, selectedExpertise]
  );

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Mentor directory"
        title="Find specialists by expertise, destination, and profile fit."
        description="The mentor catalog now feels more product-grade, with cleaner filters, tighter profile cards, and more disciplined information hierarchy."
        meta={
          <>
            <Badge variant="primary">{mentors.length} mentors</Badge>
            <Badge>Curated profiles</Badge>
          </>
        }
      />

      <section className="sticky top-[72px] z-30 border-b border-border bg-white/94 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search by name, title, or university"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedExpertise} onChange={(e) => setSelectedExpertise(e.target.value)}>
              {expertiseOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "All" ? "All expertise" : option}
                </option>
              ))}
            </Select>
            <Select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              {countryOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "All" ? "All countries" : option}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </section>

      <PageSection className="bg-slate-50/70">
        <div className="container-shell">
          <p className="mb-6 text-sm text-muted">Showing {filteredMentors.length} mentors</p>
          {filteredMentors.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id}>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 font-display text-2xl font-semibold text-primary">
                        {mentor.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
                        <p className="text-sm text-muted">{mentor.title}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {mentor.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{mentor.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={14} />
                        <span>{mentor.university}</span>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-muted">{mentor.bio}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star size={14} className="fill-amber-400 text-amber-400" />
                          <span className="font-medium text-foreground">{mentor.rating}</span>
                          <span className="text-muted">({mentor.reviews})</span>
                        </div>
                        <p className="mt-1 text-sm text-muted">From ${mentor.hourlyRate}/hr</p>
                      </div>
                      <Link href={`/mentors/${mentor.id}`}>
                        <Button variant="outline">
                          View profile
                          <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No mentors found"
              description="Try a broader expertise or remove the search term to explore more mentors."
              actionLabel="Clear filters"
              onAction={() => {
                setSelectedExpertise("All");
                setSelectedCountry("All");
                setSearchQuery("");
              }}
            />
          )}
        </div>
      </PageSection>
    </MarketingLayout>
  );
}
