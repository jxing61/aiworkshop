import { SectionHeader } from "@/app/components/section-header";
import { aboutParagraphs, profile } from "@/app/lib/resume";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/app/components/icons";

const quickFacts = [
  { key: "Location", value: profile.location },
  { key: "Email", value: profile.email },
  { key: "Availability", value: profile.availability },
];

export function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="About" title="Engineer with range" />
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-12">
          <aside className="flex shrink-0 lg:w-52">
            <div className="flex h-fit w-full flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
              {quickFacts.map((fact) => (
                <div key={fact.key}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                    {fact.key}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
              <div className="flex gap-3 pt-1">
                <a
                  href={profile.socials[0].href}
                  className="text-muted transition-colors hover:text-ink"
                  aria-label={profile.socials[0].label}
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.socials[1].href}
                  className="text-muted transition-colors hover:text-ink"
                  aria-label={profile.socials[1].label}
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.socials[2].href}
                  className="text-muted transition-colors hover:text-ink"
                  aria-label={profile.socials[2].label}
                >
                  <MailIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </aside>
          <div className="max-w-xl space-y-4 text-base leading-7 text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}