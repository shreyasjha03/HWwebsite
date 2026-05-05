import Link from "next/link";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export default function SignupPage() {
  return (
    <MarketingLayout>
      <section className="section-space">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card hover={false}>
              <CardBody className="p-8 lg:p-10">
                <Badge variant="primary">Get started</Badge>
                <h1 className="mt-5 text-4xl font-semibold text-foreground">Create your planning workspace.</h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  Start with your intake details so the platform can recommend services, mentors, and the right next steps.
                </p>
                <form className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Input label="First name" placeholder="Shreya" />
                  <Input label="Last name" placeholder="Jha" />
                  <Input label="Email address" type="email" placeholder="you@example.com" className="sm:col-span-2" />
                  <Select label="Primary goal" defaultValue="">
                    <option value="" disabled>Select your goal</option>
                    <option>Undergraduate admissions</option>
                    <option>Graduate admissions</option>
                    <option>Scholarships and funding</option>
                    <option>Visa and documentation</option>
                    <option>Relocation and post-landing</option>
                  </Select>
                  <Select label="Target destination" defaultValue="">
                    <option value="" disabled>Select destination</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                  </Select>
                  <Input label="Password" type="password" placeholder="Create a password" className="sm:col-span-2" />
                  <Button className="sm:col-span-2" size="lg">Create account</Button>
                </form>
                <p className="mt-6 text-sm text-muted">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
                    Sign in
                  </Link>
                </p>
              </CardBody>
            </Card>

            <div className="space-y-6">
              <div className="surface-card p-8">
                <p className="eyebrow">What you unlock</p>
                <div className="mt-5 space-y-4">
                  {[
                    "A unified dashboard for tasks, services, and mentor notes",
                    "A cleaner intake experience than the previous contact-form flow",
                    "Structured next-step recommendations by stage",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-6 text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-card p-8">
                <p className="eyebrow">Product direction</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Designed like a real SaaS onboarding flow.</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  The goal here is credibility and clarity: tighter form structure, better field grouping, and a more intentional conversion path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
