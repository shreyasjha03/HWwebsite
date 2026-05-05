import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTABannerSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-950 p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.24),_transparent_28%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              <Sparkles size={16} />
              <span>Move from browsing to execution</span>
            </div>

            <h2 className="mb-4 text-3xl font-semibold text-white lg:text-4xl">
              Start with a clean plan, then keep the momentum in one dashboard.
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              The redesigned product now connects discovery, consultation, and task tracking in a way that feels closer to a real SaaS workflow.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button variant="secondary" size="lg" className="bg-white text-slate-950 hover:bg-slate-100">
                  Create your account
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
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
