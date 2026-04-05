import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[--accent]">
          Career
        </p>
        <h2 className="mb-12 font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em]">
          Where I&apos;ve worked
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div className="absolute bottom-2 left-[6.5rem] top-2 hidden w-px bg-[--border] lg:block" />

          {experiences.map((exp, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="grid grid-cols-1 pb-10 last:pb-0 lg:grid-cols-[6.5rem_1fr] lg:gap-14 lg:pb-12">
                {/* Year + dot */}
                <div className="relative mb-2 pt-1 lg:mb-0 lg:text-right">
                  <span className="text-xs font-bold uppercase tracking-[0.06em] text-[--text-muted]">
                    {exp.year}
                  </span>
                  <span className="hidden lg:absolute lg:-right-[3.75rem] lg:top-[0.55rem] lg:block h-2.5 w-2.5 rounded-full border-2 border-[--accent] bg-[--bg]" />
                </div>

                {/* Content */}
                <div className="lg:pl-9">
                  <h3 className="mb-0.5 font-serif text-[1.35rem] tracking-[-0.01em]">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-[--accent]">
                    {exp.company}&nbsp;·&nbsp;{exp.date}
                  </p>
                  <p className="mb-4 text-[0.9375rem] leading-[1.7] text-[--text-muted]">
                    {exp.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 list-none">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-[--text-muted] before:absolute before:left-0 before:top-[0.2rem] before:text-xs before:text-[--accent] before:content-['→']"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
