import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2 text-center text-sm font-medium relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
        <span>New: Free 15-min consultation for first-time users</span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
