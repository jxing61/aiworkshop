import { SectionHeader } from "@/app/components/section-header";
import { summary } from "@/app/lib/resume";

export function Summary() {
  return (
    <section id="summary" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="Summary" title="Professional summary" />
        <div className="space-y-4 text-base leading-7 text-muted">
          {summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}