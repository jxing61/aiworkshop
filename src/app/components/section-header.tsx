export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}