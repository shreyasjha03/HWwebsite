import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="border-b border-blue-100 bg-blue-50 text-blue-950">
      <div className="container-shell flex min-h-10 items-center justify-center gap-2 py-2 text-center text-sm font-medium">
        <span>Free 15-minute admissions planning session for first-time students</span>
        <Link
          href="/signup"
          className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800"
        >
          Claim it <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
