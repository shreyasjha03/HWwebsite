"use client";

import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { services } from "@/lib/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
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
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                Pricing
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Transparent, affordable pricing for every student
              </h1>
              <p className="text-lg text-muted">
                Pick and choose services as you need them, or combine multiple
                services for a customized study abroad package.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(groupedServices).map(([category, categoryServices]) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Card key={service.id}>
                      <CardBody className="flex flex-col h-full">
                        <div className="mb-4">
                          {service.popular && (
                            <Badge variant="warning" className="mb-3">
                              Most Popular
                            </Badge>
                          )}
                          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="my-6 py-6 border-y border-border">
                          <div className="text-center">
                            <span className="text-4xl font-bold text-primary">
                              {formatPrice(service.price, service.currency)}
                            </span>
                            <p className="text-sm text-muted mt-1">
                              One-time payment
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6 flex-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check size={18} className="text-primary mt-0.5 shrink-0" />
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
        </section>

        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I combine multiple services?",
                  a: "Absolutely! Many students combine services like university shortlisting with IELTS prep or visa filing. We offer package discounts for multiple services.",
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes, we offer a 7-day money-back guarantee if you are not satisfied with our service. Simply contact our support team.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes! For services above ₹15,000, we offer flexible EMI options through our partner financial institutions.",
                },
                {
                  q: "Are there any hidden charges?",
                  a: "No hidden charges. The price you see is what you pay. Transparent pricing is our commitment.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardBody>
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted">{faq.a}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
