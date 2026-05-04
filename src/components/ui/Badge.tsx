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
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          default: "bg-slate-100 text-slate-700",
          primary: "bg-primary-light text-primary",
          success: "bg-emerald-50 text-emerald-700",
          warning: "bg-amber-50 text-amber-700",
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
