import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceAreas = [
  {
    title: "Study Abroad",
    items: ["Destination Selection", "Program Selection", "SOP Assistance", "LOR Assistance"],
  },
  {
    title: "Work Abroad",
    items: ["Profile Evaluation", "Resume & Cover Letter", "International Job Search", "Interview Prep"],
  },
  {
    title: "Language Preparation",
    items: ["Learn German", "IELTS Preparation", "TOEFL Preparation", "Learn Spanish"],
  },
  {
    title: "Education Financing",
    items: ["Scholarships", "Loans", "International Payments", "Financial Planning"],
  },
  {
    title: "Visa & Immigration",
    items: ["Visa Advisory", "Document Preparation", "Visa Interview Prep"],
  },
  {
    title: "Post Landing Support",
    items: ["Accommodation", "Part Time Jobs", "Internships"],
  },
];

export function DestinationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-primary font-semibold mb-4">
            Explore the Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Discover the right support for every phase of your journey
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {serviceAreas.slice(0, 4).map((area) => (
            <div key={area.title} className="group overflow-hidden rounded-[2rem] bg-white border border-border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 h-36 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {area.title}
              </h3>
              <ul className="space-y-3 text-sm text-muted mb-6">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore {area.title}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-6 xl:grid-cols-2">
          {serviceAreas.slice(4).map((area) => (
            <div key={area.title} className="group overflow-hidden rounded-[2rem] bg-white border border-border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {area.title}
              </h3>
              <ul className="space-y-3 text-sm text-muted mb-6">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore {area.title}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
