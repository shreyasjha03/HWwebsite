"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { services, serviceCategories } from "@/lib/data/services";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, Clock, ArrowRight, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

function ServicesContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && serviceCategories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredServices = services
    .filter((s) => {
      const matchCategory =
        selectedCategory === "All" || s.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return b.reviews - a.reviews;
      }
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <section className="py-8 lg:py-12 border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-auto w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-none lg:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-8">
            Showing {filteredServices.length} service
            {filteredServices.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredServices.map((service) => (
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

                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-xs text-primary font-medium">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>

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
                      <span className="font-display font-bold text-2xl text-foreground">
                        {formatPrice(service.price)}
                      </span>
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="outline" size="sm">
                          View details
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted mb-4">
                No services found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services Marketplace
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Expert-guided services for every step of your study abroad
              journey.
            </p>
          </div>
        </section>

        <Suspense
          fallback={
            <div className="py-8 lg:py-12 border-b border-border bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
              </div>
            </div>
          }
        >
          <ServicesContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
