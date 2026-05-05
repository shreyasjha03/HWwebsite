import { services } from "@/lib/data/services";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

export function ServicesPreviewSection() {
  const featuredServices = services.slice(0, 6);

  return (
    <PageSection className="bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Popular services"
          title="High-confidence support for the steps students usually get stuck on."
          description="Each service is clearly scoped, priced, and designed to plug into a longer study abroad plan."
          actions={
            <Link href="/services">
              <Button variant="outline">
                Explore all services
                <ArrowRight size={16} />
              </Button>
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.id} className="h-full">
              <CardBody className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Badge variant="primary">{service.category}</Badge>
                    {service.popular && (
                      <Badge variant="warning">Popular</Badge>
                    )}
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Starting at
                    </p>
                    <p className="mt-1 text-xl font-semibold text-foreground">
                      {formatPrice(service.price)}
                    </p>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm">
                      View details
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
