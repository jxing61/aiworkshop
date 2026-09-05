import { SectionHeader } from "@/app/components/section-header";
import { profile } from "@/app/lib/resume";
import {
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/app/components/icons";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk"
          description="Whether you have a role in mind or just want to compare notes on tooling, my inbox is open."
        />
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <p className="text-lg font-semibold text-ink">
            {profile.availability}
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-accent"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                  Email
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-ink">
                  {profile.email}
                </dd>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-accent"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                  Phone
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-ink">
                  {profile.phone}
                </dd>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-line p-4">
              <LocationIcon className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                  Location
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-ink">
                  {profile.location}
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line p-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                  Elsewhere
                </dt>
                <dd className="mt-0.5 flex items-center gap-4">
                  <a
                    href={profile.socials[0].href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={profile.socials[1].href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}