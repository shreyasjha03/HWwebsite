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
        "inline-flex items-center justify-center font-display font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          primary:
            "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25",
          secondary:
            "bg-foreground text-background hover:bg-foreground/90 shadow-md",
          outline:
            "border-2 border-border bg-transparent hover:bg-primary-light hover:border-primary/30 text-foreground",
          ghost:
            "bg-transparent hover:bg-primary-light text-foreground hover:text-primary",
        }[variant],
        {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-2.5 text-sm",
          lg: "px-8 py-3.5 text-base",
        }[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
