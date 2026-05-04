import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTABannerSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Start your journey today</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to take the first step?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join 25,000+ students who've achieved their dream of studying
              abroad. Get started with a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Book free consultation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Browse services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
