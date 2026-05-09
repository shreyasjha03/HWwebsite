import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium",
        {
          default: "border border-slate-200 bg-slate-100 text-slate-700",
          primary: "border border-blue-100 bg-blue-50 text-blue-700",
          success: "border border-emerald-100 bg-emerald-50 text-emerald-700",
          warning: "border border-amber-100 bg-amber-50 text-amber-700",
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
