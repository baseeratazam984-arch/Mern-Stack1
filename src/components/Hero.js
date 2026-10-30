"use client";

import dynamic from "next/dynamic";
import LazyMount from "./LazyMount";
import { site } from "@/data/site";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[radial-gradient(circle_at_center,var(--fog),transparent_70%)]" />
  ),
});

export default function Hero() {
  return (
    <section
      id="signal"
      className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-[minmax(280px,0.95fr)_1.15fr]"
    >
      <div className="relative min-h-[48vh] border-b border-[var(--line)] lg:min-h-screen lg:border-b-0 lg:border-r">
        <div className="absolute left-5 top-24 z-10 mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)] md:left-8">
          live node field · three.js
        </div>
        <LazyScene />
        <div className="pointer-events-none absolute bottom-8 left-5 right-5 flex items-end justify-between md:left-8">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            {site.location} · {site.experience}
          </p>
          <span className="h-2 w-2 rounded-full bg-[var(--signal)] shadow-[0_0_18px_var(--signal)]" />
        </div>
      </div>

      <div className="relative flex flex-col justify-end px-5 pb-10 pt-28 md:px-10 lg:pb-16">
        <p className="reveal mono text-xs uppercase tracking-[0.34em] text-[var(--copper)]">
          {site.availability}
        </p>
        <h1 className="reveal display mt-5 max-w-4xl text-[14vw] leading-[0.82] sm:text-7xl lg:text-[6.4rem]">
          {site.name}
        </h1>
        <p className="reveal mt-6 max-w-xl text-lg text-[var(--muted)]">
          {site.role}. I build modern, responsive, performance-focused products
          with React, Next.js, Node, and Express.
        </p>
        <p className="reveal mt-4 max-w-lg text-sm text-[var(--cream)]/80">
          {site.tagline}
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a href="#work" className="cta">
            View selected work
          </a>
          <a href="#line" className="ghost">
            Open a line
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          <div>
            <div className="text-[var(--signal)]">01</div>
            MERN systems
          </div>
          <div>
            <div className="text-[var(--signal)]">02</div>
            Shop & marketplaces
          </div>
          <div>
            <div className="text-[var(--signal)]">03</div>
            Fast interfaces
          </div>
        </div>
      </div>
    </section>
  );
}

function LazyScene() {
  return (
    <div className="absolute inset-0">
      <LazyMount className="h-full w-full" minHeight={320} rootMargin="80px">
        <Scene3D />
      </LazyMount>
    </div>
  );
}
