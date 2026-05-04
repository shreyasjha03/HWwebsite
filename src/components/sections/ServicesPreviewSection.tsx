import { services } from "@/lib/data/services";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export function ServicesPreviewSection() {
  const featuredServices = services.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.32em] text-primary font-semibold mb-4">
            Popular Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Browse the services students rely on most
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From program selection and scholarships to visa advisory and post-landing
            help, HumbleWalking supports every step of your abroad journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 rounded-3xl bg-primary text-white px-5 py-4 flex items-center justify-between">
                  <span className="text-sm">Starts at {formatPrice(service.price)}</span>
                  <ArrowRight size={18} />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              Explore all services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
