import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe, Heart, Target, Users } from "lucide-react";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHero, PageSection, SectionHeading } from "@/components/ui/PageSection";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Story",
  description:
    "Learn about HumbleWalking's mission to make global education more structured, accessible, and trustworthy.",
};

const values = [
  {
    icon: Target,
    title: "Student-first clarity",
    description:
      "Every product and service decision starts by reducing confusion for students and families.",
  },
  {
    icon: Heart,
    title: "Honest guidance",
    description:
      "We favor practical recommendations over inflated promises or opaque advisory packages.",
  },
  {
    icon: Users,
    title: "Network effects",
    description:
      "Mentors, specialists, and students all contribute to a stronger support system over time.",
  },
  {
    icon: Globe,
    title: "Global accessibility",
    description:
      "High-quality education planning should not depend on geography or insider access.",
  },
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="About HumbleWalking"
        title="A more credible operating system for the study abroad journey."
        description="This refresh moves the brand away from generic marketing tropes and toward a clearer product story: structure, trust, and momentum for students navigating a complex process."
      />

      <PageSection className="bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "2021", label: "Founded" },
            { value: "25,000+", label: "Students guided" },
            { value: "500+", label: "Mentor specialists" },
            { value: "40+", label: "Countries supported" },
          ].map((stat) => (
            <Card key={stat.label} hover={false}>
              <CardBody>
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-slate-50/70">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Values"
            title="Designed around consistency, transparency, and calm decision-making."
            description="The new visual system is backed by a clearer product posture as well: fewer distractions, stronger hierarchy, and more confidence in every interaction."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} hover={false}>
                <CardBody>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <value.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Why students choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Stronger process design creates better student outcomes.
            </h2>
            <div className="mt-6 space-y-4">
              {[
                "Clear service boundaries and transparent pricing",
                "A verified mentor layer instead of generic counseling",
                "One place to track decisions, deadlines, and next steps",
                "Support from application planning through post-landing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm leading-6 text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-8 lg:p-10">
            <p className="text-lg leading-8 text-foreground/80">
              &ldquo;HumbleWalking helped me bring order to a process that felt overwhelming. The combination of mentor feedback and task structure made every next step obvious.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-medium text-foreground">Arjun Mehta</p>
              <p className="text-sm text-muted">MBA admit, Wharton</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container-shell">
          <div className="surface-card p-10 text-center lg:p-14">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">See the redesigned experience in action.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Create an account, explore the dashboard, or talk to the team about the right support path.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">
                  Create account
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  View dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </MarketingLayout>
  );
}
