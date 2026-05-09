import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTABannerSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_28%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Sparkles size={16} />
              <span>Move from browsing to execution</span>
            </div>

            <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">
              Start with a clean plan, then keep the momentum in one dashboard.
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
              The redesigned product now connects discovery, consultation, and task tracking in a way that feels closer to a real SaaS workflow.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">
                  Create your account
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  Explore dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
