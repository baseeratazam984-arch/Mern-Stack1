import { services } from "@/data/site";

export default function Services() {
  return (
    <section className="section-lazy border-t border-[var(--line)] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mono text-xs uppercase tracking-[0.3em] text-[var(--copper)]">
          / what I can build
        </p>
        <h2 className="display mt-3 max-w-3xl text-4xl md:text-5xl">
          From landing pages to database-backed products.
        </h2>
        <ol className="mt-12 columns-1 gap-x-16 sm:columns-2">
          {services.map((item, index) => (
            <li
              key={item}
              className="mb-5 flex break-inside-avoid items-start gap-4 border-b border-[var(--line)] pb-4"
            >
              <span className="mono text-xs text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
