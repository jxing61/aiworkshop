import { SectionHeader } from "@/app/components/section-header";
import { skillGroups } from "@/app/lib/resume";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tools & techniques"
          description="The stack I reach for most, and the craft behind it."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <h3 className="font-mono text-sm font-medium text-faint">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}