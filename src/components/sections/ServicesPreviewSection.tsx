import { services, serviceCategories } from "@/lib/data/services";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, Clock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export function ServicesPreviewSection() {
  const featuredServices = services.filter((s) => s.popular).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="primary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything you need, all in one place
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From test prep to post-landing support, our comprehensive services
            cover every step of your study abroad journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id}>
              <CardBody className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="primary">{service.category}</Badge>
                  {service.popular && (
                    <Badge variant="warning">Popular</Badge>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                    <span className="font-medium text-foreground">
                      {service.rating}
                    </span>
                    <span>({service.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-display font-bold text-2xl text-foreground">
                      {formatPrice(service.price)}
                    </span>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" size="sm">
                      Learn more
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              Browse all services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
