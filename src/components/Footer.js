import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p className="mono text-xs tracking-[0.24em] text-[var(--signal)]">
          {site.brand}
        </p>
        <p>
          {site.name} · Full-Stack Web Developer
        </p>
        <p>© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}
