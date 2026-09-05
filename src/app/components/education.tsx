import { SectionHeader } from "@/app/components/section-header";
import { education } from "@/app/lib/resume";

export function Education() {
  return (
    <section id="education" className="bg-surface-2 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="Education" title="Education" />
        <ol className="relative space-y-12 border-l border-line pl-8">
          {education.map((item) => (
            <li key={`${item.institution}-${item.degree}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-canvas"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-ink">
                  {item.degree}
                  <span className="text-muted"> · {item.institution}</span>
                </h3>
                <p className="font-mono text-sm text-faint">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-faint">{item.location}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}