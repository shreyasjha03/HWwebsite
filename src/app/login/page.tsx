import Link from "next/link";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <MarketingLayout>
      <section className="section-space">
        <div className="container-shell">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card p-8 lg:p-10">
              <Badge variant="primary">Student workspace</Badge>
              <h1 className="mt-6 text-4xl font-semibold text-foreground">Welcome back.</h1>
              <p className="mt-4 text-base leading-7 text-muted">
                Sign in to manage your application timeline, mentor conversations, and pending service tasks.
              </p>
              <div className="mt-8 space-y-4">
                {["Track deadlines in one place", "Review mentor feedback", "Keep documents and decisions organized"].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Card hover={false}>
              <CardBody className="p-8 lg:p-10">
                <h2 className="text-2xl font-semibold text-foreground">Sign in</h2>
                <p className="mt-2 text-sm text-muted">Use your account to access your planning dashboard.</p>
                <form className="mt-8 space-y-5">
                  <Input label="Email address" type="email" placeholder="you@example.com" />
                  <Input label="Password" type="password" placeholder="Enter your password" />
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted">
                      <input type="checkbox" className="rounded border-border" />
                      Remember me
                    </label>
                    <Link href="/contact" className="text-primary hover:text-primary-dark">
                      Forgot password?
                    </Link>
                  </div>
                  <Button className="w-full" size="lg">Sign in</Button>
                </form>
                <p className="mt-6 text-sm text-muted">
                  New here?{" "}
                  <Link href="/signup" className="font-medium text-primary hover:text-primary-dark">
                    Create an account
                  </Link>
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
