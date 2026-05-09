"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Search, Star } from "lucide-react";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";
import { PageHero, PageSection } from "@/components/ui/PageSection";
import { Select } from "@/components/ui/Select";
import { serviceCategories, services } from "@/lib/data/services";
import { formatPrice } from "@/lib/utils";

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory && serviceCategories.includes(initialCategory)
      ? initialCategory
      : "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredServices = useMemo(
    () =>
      services
        .filter((service) => {
          const categoryMatch =
            selectedCategory === "All" || service.category === selectedCategory;
          const searchMatch =
            !searchQuery ||
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
          return categoryMatch && searchMatch;
        })
        .sort((a, b) => {
          if (sortBy === "popular") return Number(Boolean(b.popular)) - Number(Boolean(a.popular)) || b.reviews - a.reviews;
          if (sortBy === "rating") return b.rating - a.rating;
          if (sortBy === "price-low") return a.price - b.price;
          if (sortBy === "price-high") return b.price - a.price;
          return 0;
        }),
    [searchQuery, selectedCategory, sortBy]
  );

  return (
    <>
      <PageHero
        eyebrow="Services marketplace"
        title="Expert-led services with cleaner scope, pricing, and next steps."
        description="The listing experience now uses a tighter grid, a more disciplined filter bar, and clearer pricing hierarchy."
        meta={
          <>
            <Badge variant="primary">{services.length} services</Badge>
            <Badge>{serviceCategories.length - 1} categories</Badge>
          </>
        }
      />

      <section className="sticky top-[72px] z-30 border-b border-border bg-white/90 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    "rounded-lg px-4 py-2 text-sm font-medium transition duration-200 " +
                    (selectedCategory === category
                      ? "bg-primary text-white"
                      : "border border-border bg-white text-muted hover:border-blue-200 hover:bg-blue-50 hover:text-primary")
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px] lg:w-[460px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Search services"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most popular</option>
                <option value="rating">Highest rated</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <PageSection className="bg-slate-50/70">
        <div className="container-shell">
          <p className="mb-6 text-sm text-muted">
            Showing {filteredServices.length} services
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>

          {filteredServices.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group">
                  <CardBody className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <Badge variant="primary">{service.category}</Badge>
                      {service.popular ? <Badge variant="warning">Popular</Badge> : null}
                    </div>
                    <div className="gold-line mb-5 h-px w-14" />
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.description}</p>
                    <div className="mt-5 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-muted">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="font-medium text-foreground">{service.rating}</span>
                        <span>({service.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Price</p>
                        <p className="mt-1 text-2xl font-semibold text-foreground">
                          {formatPrice(service.price)}
                        </p>
                      </div>
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="outline" className="group-hover:bg-blue-50 group-hover:text-primary">
                          View details
                          <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No services match these filters"
              description="Try a broader category or clear the search to explore the full catalog."
              actionLabel="Clear filters"
              onAction={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            />
          )}
        </div>
      </PageSection>
    </>
  );
}

export default function ServicesPage() {
  return (
    <MarketingLayout>
      <Suspense fallback={<div className="container-shell py-10 text-sm text-muted">Loading services...</div>}>
        <ServicesContent />
      </Suspense>
    </MarketingLayout>
  );
}
