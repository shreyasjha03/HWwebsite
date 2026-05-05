import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, className, children, ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      ) : null}
      <div className="relative">
        <select
          className={cn(
            "w-full appearance-none rounded-2xl border border-border bg-white px-4 py-3 pr-10 text-sm text-foreground shadow-sm outline-none",
            "focus:border-primary focus:ring-4 focus:ring-primary/10",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={16}
        />
      </div>
    </div>
  );
}
