import { about, site } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="section-lazy relative border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[0.3em] text-[var(--copper)]">
            / dossier
          </p>
          <h2 className="display mt-4 text-5xl leading-none md:text-6xl">
            About
            <br />
            the craft
          </h2>
        </div>
        <div className="max-w-3xl">
          <p className="display text-2xl leading-snug text-[var(--cream)] md:text-4xl">
            {about.lead}
          </p>
          <p className="mt-8 text-base leading-8 text-[var(--muted)]">
            {about.body}
          </p>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            {about.closer}
          </p>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--line)] pt-6 mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">
            <span>{site.brand}</span>
            <span>{site.location}</span>
            <span>MERN · Next.js · APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
