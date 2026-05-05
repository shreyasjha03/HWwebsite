import { Button } from "@/components/ui/Button";

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="surface-card flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        No results
      </div>
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted">{description}</p>
      {actionLabel && onAction ? (
        <Button className="mt-6" variant="outline" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
