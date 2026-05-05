import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { mentors } from "@/lib/data/mentors";
import { services } from "@/lib/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import {
  Star,
  MapPin,
  Award,
  Globe,
  MessageSquare,
  Calendar,
  Check,
} from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface MentorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MentorPageProps): Promise<Metadata> {
  const { id } = await params;
  const mentor = mentors.find((m) => m.id === id);

  if (!mentor) {
    return { title: "Mentor Not Found" };
  }

  return {
    title: `${mentor.name} — ${mentor.title}`,
    description: `${mentor.name}, ${mentor.title} at ${mentor.university}. ${mentor.bio.slice(0, 150)}...`,
  };
}

export async function generateStaticParams() {
  return mentors.map((mentor) => ({
    id: mentor.id,
  }));
}

const reviews = [
  {
    id: "r1",
    author: "Sarah K.",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Incredibly helpful session. The mentor gave me specific, actionable feedback on my SOP that made a huge difference.",
  },
  {
    id: "r2",
    author: "Michael T.",
    rating: 5,
    date: "1 month ago",
    comment:
      "Very knowledgeable and patient. Helped me understand the entire application process and boosted my confidence.",
  },
  {
    id: "r3",
    author: "Priya D.",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great insights into the admissions process. Would definitely recommend for anyone applying to top schools.",
  },
];

export default async function MentorProfilePage({ params }: MentorPageProps) {
  const { id } = await params;
  const mentor = mentors.find((m) => m.id === id);

  if (!mentor) {
    notFound();
  }

  const mentorServices = services.filter((s) =>
    mentor.servicesOffered.includes(s.id)
  );

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-display font-bold text-4xl shrink-0">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-1">
                      {mentor.name}
                    </h1>
                    <p className="text-lg text-muted mb-3">{mentor.title}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-muted">
                        <MapPin size={16} />
                        <span>{mentor.country}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted">
                        <Award size={16} className="text-primary" />
                        <span>{mentor.university}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted">
                        <Globe size={16} />
                        <span>{mentor.languages.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                    <span className="font-semibold text-foreground text-lg">
                      {mentor.rating}
                    </span>
                    <span className="text-muted">
                      ({mentor.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-muted">
                    {mentor.sessionsCompleted} sessions completed
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    About
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Reviews
                  </h2>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-slate-50 rounded-xl p-5 border border-border"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                              {review.author.charAt(0)}
                            </div>
                            <span className="font-medium text-foreground text-sm">
                              {review.author}
                            </span>
                          </div>
                          <span className="text-xs text-muted">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="fill-amber-400 text-amber-400"
                              />
                            )
                          )}
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-slate-50 rounded-2xl border border-border p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="font-display font-bold text-3xl text-foreground mb-1">
                      ${mentor.hourlyRate}
                      <span className="text-lg text-muted font-normal">
                        /hr
                      </span>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full block mb-3">
                    <Button variant="primary" size="lg" className="w-full">
                      <Calendar size={18} className="mr-2" />
                      Book a session
                    </Button>
                  </Link>

                  <Link href="/contact" className="w-full block">
                    <Button variant="outline" size="lg" className="w-full">
                      <MessageSquare size={18} className="mr-2" />
                      Send message
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Check size={16} className="text-primary" />
                      <span>Free 15-min intro call</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Check size={16} className="text-primary" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Check size={16} className="text-primary" />
                      <span>Flexible scheduling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {mentorServices.length > 0 && (
          <section className="py-16 lg:py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Services offered by {mentor.name.split(" ")[0]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentorServices.map((service) => (
                  <Link key={service.id} href={`/services/${service.slug}`}>
                    <Card>
                      <CardBody>
                        <Badge variant="primary" className="mb-3">
                          {service.category}
                        </Badge>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xl text-foreground">
                            {formatPrice(service.price)}
                          </span>
                          <span className="text-sm text-primary font-medium">
                            View details
                          </span>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
