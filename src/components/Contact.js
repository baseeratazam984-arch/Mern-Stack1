import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="line"
      className="section-lazy border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[0.3em] text-[var(--copper)]">
            / direct line
          </p>
          <h2 className="display mt-4 max-w-[12ch] text-4xl leading-[0.92] sm:text-5xl md:text-6xl">
            Let&apos;s turn the idea into a product.
          </h2>
          <p className="mt-6 max-w-xl text-[var(--muted)]">
            Clear communication, attention to detail, and a modern professional
            build. Reach me in Pakistan or send a brief by mail.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-6 border border-[var(--line)] bg-[var(--panel)] p-6 md:p-8">
          <a
            href={`mailto:${site.email}`}
            className="display text-2xl break-all text-[var(--signal)] md:text-3xl"
          >
            {site.email}
          </a>
          <a href={site.phoneHref} className="text-xl text-[var(--cream)]">
            {site.phone}
          </a>
          <p className="mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            {site.location}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="cta">
              Write a brief
            </a>
            <a href={site.phoneHref} className="ghost">
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
