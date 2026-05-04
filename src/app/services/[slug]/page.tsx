import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { services } from "@/lib/data/services";
import { mentors } from "@/lib/data/mentors";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import {
  Check,
  Clock,
  Star,
  ArrowRight,
  Shield,
  Headphones,
  RefreshCw,
  Users,
} from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const suggestedMentors = mentors
    .filter((m) => m.servicesOffered.includes(service.id))
    .slice(0, 2);

  const guarantees = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment is protected until service is delivered.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Get help from our team anytime during your service.",
    },
    {
      icon: RefreshCw,
      title: "Satisfaction Guarantee",
      description: "Not happy? Get a full refund within 7 days.",
    },
  ];

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="primary" className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span className="font-semibold text-foreground">
                    {service.rating}
                  </span>
                  <span className="text-muted">
                    ({service.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Clock size={18} />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="font-display font-bold text-4xl text-foreground">
                  {formatPrice(service.price)}
                </span>
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get started now
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  What you get
                </h2>
                <div className="space-y-4 mb-12">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Our guarantees
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {guarantees.map((guarantee) => (
                    <div
                      key={guarantee.title}
                      className="bg-slate-50 rounded-xl p-6 border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4">
                        <guarantee.icon size={20} />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {guarantee.title}
                      </h3>
                      <p className="text-sm text-muted">
                        {guarantee.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-slate-50 rounded-2xl border border-border p-6 sticky top-24">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Service Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Category</span>
                      <span className="font-medium text-foreground">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Duration</span>
                      <span className="font-medium text-foreground">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Rating</span>
                      <span className="font-medium text-foreground">
                        {service.rating} / 5.0
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Reviews</span>
                      <span className="font-medium text-foreground">
                        {service.reviews}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted">Total</span>
                      <span className="font-display font-bold text-2xl text-foreground">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full block">
                    <Button variant="primary" size="lg" className="w-full mb-3">
                      Book this service
                    </Button>
                  </Link>
                  <p className="text-xs text-muted text-center">
                    Free consultation included. No commitment required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {suggestedMentors.length > 0 && (
          <section className="py-16 lg:py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <Users size={20} className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Suggested mentors for this service
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {suggestedMentors.map((mentor) => (
                  <Link key={mentor.id} href={`/mentors/${mentor.id}`}>
                    <Card>
                      <CardBody>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0">
                            {mentor.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold text-foreground">
                              {mentor.name}
                            </h3>
                            <p className="text-sm text-muted">{mentor.title}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star
                                size={14}
                                className="fill-amber-400 text-amber-400"
                              />
                              <span className="text-sm font-medium text-foreground">
                                {mentor.rating}
                              </span>
                              <span className="text-sm text-muted">
                                ({mentor.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Related services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link key={related.id} href={`/services/${related.slug}`}>
                    <Card>
                      <CardBody>
                        <Badge variant="primary" className="mb-3">
                          {related.category}
                        </Badge>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted mb-4 line-clamp-2">
                          {related.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xl text-foreground">
                            {formatPrice(related.price)}
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
