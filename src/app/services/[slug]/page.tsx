import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { services } from "@/lib/data/services";
import { mentors } from "@/lib/data/mentors";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHero, PageSection } from "@/components/ui/PageSection";
import {
  Check,
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
    <MarketingLayout>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.description}
        meta={
          <>
            <Badge variant="primary">{service.rating} / 5</Badge>
            <Badge>{service.reviews} reviews</Badge>
            <Badge>{service.duration}</Badge>
          </>
        }
        actions={
          <>
            <Button size="lg">{formatPrice(service.price)}</Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get started now
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </>
        }
      />

      <PageSection className="bg-white">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  What you get
                </h2>
                <div className="space-y-4 mb-12">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
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
                    <div key={guarantee.title} className="surface-card p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-primary">
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
                <div className="surface-card sticky top-24 p-6">
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
      </PageSection>

        {suggestedMentors.length > 0 && (
          <PageSection className="bg-slate-50/70">
            <div className="container-shell">
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
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary font-display font-bold text-xl shrink-0">
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
          </PageSection>
        )}

        {relatedServices.length > 0 && (
          <PageSection className="bg-white">
            <div className="container-shell">
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
          </PageSection>
        )}
    </MarketingLayout>
  );
}
