import { mentors } from "@/lib/data/mentors";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, MapPin, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export function MentorsPreviewSection() {
  const featuredMentors = mentors.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="primary" className="mb-4">
            Expert Mentors
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Learn from those who've been there
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Our mentors are alumni, admissions experts, and immigration
            specialists — real people with real experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredMentors.map((mentor) => (
            <Card key={mentor.id}>
              <CardBody>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0">
                    {mentor.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg text-foreground truncate">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted">{mentor.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted">
                    <MapPin size={14} />
                    <span>{mentor.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                    <span className="font-medium text-foreground">
                      {mentor.rating}
                    </span>
                    <span className="text-muted">({mentor.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mentor.expertise.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-xs text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted">
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
        </div>

        <div className="text-center">
          <Link href="/mentors">
            <Button variant="primary" size="lg">
              Meet all mentors
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
