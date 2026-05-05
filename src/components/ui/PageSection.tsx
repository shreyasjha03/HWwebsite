import { cn } from "@/lib/utils";

export function PageSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("section-space", className)}>{children}</section>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center"
      )}
    >
      <div className={cn("max-w-3xl space-y-3", align === "center" && "mx-auto")}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_38%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <div className="container-shell py-16 lg:py-20">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
          {meta ? <div className="flex flex-wrap gap-3 pt-1">{meta}</div> : null}
          {actions ? <div className="flex flex-wrap gap-3 pt-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
