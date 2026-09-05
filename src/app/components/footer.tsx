import { navLinks, profile } from "@/app/lib/resume";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/app/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
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
    </footer>
  );
}