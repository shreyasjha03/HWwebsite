import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

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
    <PageSection className="bg-slate-50/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Coverage"
          title="A service map that feels deliberate, not overcrowded."
          description="We grouped the offering into clear tracks so students can understand what to buy now and what comes next."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {serviceAreas.slice(0, 4).map((area) => (
            <div key={area.title} className="surface-card p-8">
              <div className="mb-6 h-1.5 w-14 rounded-full bg-primary" />
              <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                {area.title}
              </h3>
              <ul className="mb-6 space-y-3 text-sm text-muted">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
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
            <div key={area.title} className="surface-card p-8">
              <div className="mb-6 h-1.5 w-14 rounded-full bg-accent" />
              <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                {area.title}
              </h3>
              <ul className="mb-6 space-y-3 text-sm text-muted">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
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
    </PageSection>
  );
}
