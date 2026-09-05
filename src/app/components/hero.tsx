import { navLinks, profile } from "@/app/lib/resume";
import { ArrowDownIcon } from "@/app/components/icons";

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-2xl">
        <p className="mb-1 font-mono text-sm font-medium text-accent">
          Hi, I&apos;m
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-ink sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent/90"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-line bg-surface px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-surface-2"
          >
            View experience
          </a>
        </div>

        <a href="#about" className="mt-14 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
          <ArrowDownIcon className="h-4 w-4" />
          Scroll down
        </a>
      </div>
    </section>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/85 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}