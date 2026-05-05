import { mentors } from "@/lib/data/mentors";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

export function MentorsPreviewSection() {
  const featuredMentors = mentors.slice(0, 3);

  return (
    <PageSection className="bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Mentor network"
          title="Specialists with real-world context, not generic advisory scripts."
          description="Every profile is framed around outcomes students actually care about: expertise, destination knowledge, response time, and session depth."
          actions={
            <Link href="/mentors">
              <Button variant="outline">
                Browse mentors
                <ArrowRight size={16} />
              </Button>
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredMentors.map((mentor) => (
            <Card key={mentor.id} className="h-full">
              <CardBody className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary font-display text-xl font-semibold">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted">{mentor.title}</p>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {mentor.expertise.slice(0, 2).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <p className="mb-5 flex-1 text-sm leading-6 text-muted">
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
                <Link href={`/mentors/${mentor.id}`} className="mt-6">
                  <Button className="w-full">
                    View profile
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
