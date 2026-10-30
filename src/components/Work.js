import { projects } from "@/data/site";

export default function Work() {
  return (
    <section id="work" className="section-lazy border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-5 py-16 md:px-8">
        <div>
          <p className="mono text-xs uppercase tracking-[0.3em] text-[var(--copper)]">
            / selected builds
          </p>
          <h2 className="display mt-3 text-5xl md:text-6xl">Work, not filler</h2>
        </div>
        <p className="hidden max-w-sm text-sm text-[var(--muted)] md:block">
          Practical products spanning storefronts, brand sites, and a
          multi-vendor marketplace.
        </p>
      </div>
      <ul>
        {projects.map((project) => (
          <li
            key={project.code}
            className="project-row border-t border-[var(--line)] px-5 py-10 md:px-8"
          >
            <article className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[140px_1.1fr_0.9fr_180px] md:items-center">
              <span className="project-index display text-5xl text-[var(--muted)]">
                {project.code}
              </span>
              <div>
                <h3 className="display text-3xl md:text-4xl">{project.name}</h3>
                <p className="mt-2 mono text-xs uppercase tracking-[0.22em] text-[var(--copper)]">
                  {project.kind}
                </p>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {project.summary}
              </p>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--signal)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
