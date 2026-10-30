"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#signal", label: "Signal" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#line", label: "Line" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--ink)_78%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#signal" className="mono text-xs tracking-[0.28em] text-[var(--signal)]">
          {site.brand}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="cta text-xs uppercase tracking-widest">
            Hire me
          </a>
        </nav>
        <button
          type="button"
          className="mono text-xs text-[var(--cream)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open ? (
        <div className="flex flex-col gap-4 border-t border-[var(--line)] px-5 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display text-3xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
