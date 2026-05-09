"use client";

import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { services } from "@/lib/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHero, PageSection } from "@/components/ui/PageSection";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function PricingPage() {
  const groupedServices = services.reduce(
    (acc, service) => {
      const category = service.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    },
    {} as Record<string, typeof services>
  );

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Pricing"
        title="Transparent, affordable pricing for every student."
        description="Pick and choose services as you need them, or combine multiple services for a more complete HumbleWalking support plan."
        meta={
          <>
            <Badge variant="primary">{services.length} services</Badge>
            <Badge>All prices in INR</Badge>
          </>
        }
      />

      <PageSection className="bg-slate-50/70">
        <div className="container-shell">
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <Card key={service.id} className="group">
                    <CardBody className="flex flex-col h-full">
                      <div className="mb-4">
                        {service.popular && (
                          <Badge variant="warning" className="mb-3">
                            Most Popular
                          </Badge>
                        )}
                        <div className="gold-line mb-4 h-px w-14" />
                        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-6 text-muted">
                          {service.description}
                        </p>
                      </div>

                      <div className="my-6 border-y border-border py-6">
                        <div className="text-center">
                          <span className="text-4xl font-semibold text-primary">
                            {formatPrice(service.price, service.currency)}
                          </span>
                          <p className="mt-1 text-sm text-muted">
                            One-time payment
                          </p>
                        </div>
                      </div>

                      <div className="mb-6 flex-1 space-y-3">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                            <span className="text-sm text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/services/${service.slug}`}>
                        <Button variant="primary" size="md" className="w-full">
                          Learn more
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I combine multiple services?",
                  a: "Absolutely. Many students combine university shortlisting with IELTS prep or visa filing, and we can structure a cleaner end-to-end support plan.",
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes. We offer a 7-day money-back guarantee if you are not satisfied with the service experience.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes. For services above ₹15,000, flexible EMI options are available through partner financial institutions.",
                },
                {
                  q: "Are there any hidden charges?",
                  a: "No hidden charges. The price displayed on HumbleWalking is the amount you pay.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardBody>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted">{faq.a}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </MarketingLayout>
  );
}
