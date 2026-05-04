import Link from "next/link";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    universities: 4000,
    services: 45,
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    universities: 800,
    services: 38,
    gradient: "from-red-500 to-rose-600",
    bgLight: "bg-red-50",
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    universities: 600,
    services: 32,
    gradient: "from-red-500 to-red-700",
    bgLight: "bg-red-50",
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    universities: 400,
    services: 28,
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
  },
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    universities: 400,
    services: 24,
    gradient: "from-yellow-500 to-yellow-700",
    bgLight: "bg-yellow-50",
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    universities: 350,
    services: 20,
    gradient: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
  },
];

export function DestinationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose your destination
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore study opportunities in the world's top education
            destinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/services?country=${dest.id}`}
              className="group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${dest.bgLight} border border-border p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/20`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{dest.flag}</span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span>{dest.universities.toLocaleString()}+ universities</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{dest.services} services</span>
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
