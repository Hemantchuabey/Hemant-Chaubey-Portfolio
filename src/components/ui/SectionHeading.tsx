export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
}: {
  id: string;
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="reveal mb-12">
      <div className="flex items-center gap-3">
        {index ? (
          <span className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-accent">
            {index}
          </span>
        ) : null}
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <span aria-hidden className="h-px flex-1 max-w-24 bg-gradient-to-r from-accent/40 to-transparent" />
      </div>
      <h2
        id={`${id}-title`}
        className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
