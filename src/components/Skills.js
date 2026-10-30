import { skills } from "@/data/site";

const groups = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Data", items: skills.data },
  { title: "Practice", items: skills.practice },
];

export default function Skills() {
  return (
    <section
      id="stack"
      className="section-lazy border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mono text-xs uppercase tracking-[0.3em] text-[var(--copper)]">
          / spectrum
        </p>
        <h2 className="display mt-3 text-5xl md:text-6xl">Technical range</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_70%,transparent)] p-6"
            >
              <h3 className="display text-2xl">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
