import { SectionHeader } from "@/app/components/section-header";
import { experience } from "@/app/lib/resume";

export function Experience() {
  return (
    <section id="experience" className="bg-surface-2 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          description="Eight years across startups and studios, building for the web end to end."
        />
        <ol className="relative space-y-12 border-l border-line pl-8">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-canvas"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-ink">
                  {item.role}
                  <span className="text-muted"> · {item.company}</span>
                </h3>
                <p className="font-mono text-sm text-faint">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-faint">{item.location}</p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 24)} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}