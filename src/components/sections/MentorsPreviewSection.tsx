import { mentors } from "@/lib/data/mentors";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MentorsPreviewSection() {
  const featuredMentors = mentors.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-primary font-semibold mb-3">
              Top Rated Mentor Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Find the mentor guidance students trust most
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted">
            <span className="rounded-full border border-border bg-white px-4 py-2">Scholarships & Aids</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">IELTS Preparation</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Study Abroad</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredMentors.map((mentor) => (
            <Card key={mentor.id} className="h-full">
              <CardBody className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary font-display text-xl">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted">{mentor.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                  {mentor.bio}
                </p>
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span>{mentor.country}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{mentor.sessionsCompleted} sessions</span>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted">From</span>
                  <span className="text-xl font-semibold text-foreground">
                    ${mentor.hourlyRate}/hr
                  </span>
                </div>
                <Link
                  href={`/mentors/${mentor.id}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  Book now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
