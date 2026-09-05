import { SectionHeader } from "@/app/components/section-header";
import { projects } from "@/app/lib/resume";
import { ExternalLinkIcon } from "@/app/components/icons";

export function Projects() {
  return (
    <section id="projects" className="bg-surface-2 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          description="A few open-source and side projects that show how I think."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const heading = (
              <h3 className="text-lg font-semibold text-ink group-hover:text-accent group-hover:underline">
                {project.name}
              </h3>
            );
            return (
              <article
                key={project.name}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-center justify-between gap-3">
                  {project.href ? (
                    <a href={project.href} className="inline-flex items-center gap-2">
                      {heading}
                      <ExternalLinkIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                    </a>
                  ) : (
                    heading
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                {project.highlights ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 24)}
                        className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-xs text-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}