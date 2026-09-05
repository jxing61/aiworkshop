import { profile } from "@/app/lib/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-faint">
          © {year} {profile.name}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}