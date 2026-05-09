import { mentors } from "@/lib/data/mentors";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";
import { formatPrice } from "@/lib/utils";

export function MentorsPreviewSection() {
  const featuredMentors = mentors.slice(0, 3);

  return (
    <PageSection className="bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Mentor network"
          title="Mentor profiles with stronger hierarchy and a more human premium feel."
          description="Prominent avatars, clearer role emphasis, and hover-revealed actions give this section more confidence and character."
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
            <Card key={mentor.id} className="group h-full">
              <CardBody className="flex flex-col h-full">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 text-primary font-display text-2xl font-semibold">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-slate-600">{mentor.title}</p>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {mentor.expertise.slice(0, 2).map((skill) => (
                    <Badge key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="mb-5 flex-1 text-sm leading-6 text-slate-600">
                  {mentor.bio}
                </p>
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>{mentor.country}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{mentor.sessionsCompleted} sessions</span>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                  <span className="text-sm text-slate-600">From</span>
                  <span className="text-xl font-semibold text-foreground">
                    {formatPrice(mentor.hourlyRate)}/hr
                  </span>
                </div>
                <Link
                  href={`/mentors/${mentor.id}`}
                  className="mt-6"
                >
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
