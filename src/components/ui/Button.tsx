import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl font-medium whitespace-nowrap",
        "focus:outline-none focus:ring-4 focus:ring-primary/15 disabled:pointer-events-none disabled:opacity-50",
        {
          primary:
            "bg-primary text-white shadow-sm hover:bg-primary-dark",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-slate-800",
          outline:
            "border border-border bg-white text-foreground hover:border-border-strong hover:bg-slate-50",
          ghost:
            "bg-transparent text-muted hover:bg-slate-100 hover:text-foreground",
        }[variant],
        {
          sm: "h-10 px-4 text-sm",
          md: "h-11 px-5 text-sm",
          lg: "h-12 px-6 text-base",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
