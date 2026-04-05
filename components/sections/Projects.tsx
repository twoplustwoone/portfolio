import { ExternalLink, Award } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { projects, patent } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-[--border] bg-[--bg-card] py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[--accent]">
          Side projects
        </p>
        <h2 className="mb-12 font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em]">
          Stuff I&apos;ve built
        </h2>

        {/* Project cards */}
        <div className="mb-6 grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col gap-4 rounded-[20px] border border-[--border] bg-[--bg] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[--accent-muted] hover:shadow-[0_16px_48px_rgba(35,26,23,0.09)]">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[--accent-muted] text-2xl">
                  {project.icon}
                </div>
                <h3 className="font-serif text-[1.4rem] tracking-[-0.01em]">
                  {project.name}
                </h3>
                <p className="flex-1 text-[0.9375rem] leading-[1.65] text-[--text-muted]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[--border] bg-[--bg-card] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-[--text-muted]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[--accent] transition-all duration-200 hover:gap-3"
                >
                  Visit {project.name}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Patent callout */}
        <RevealOnScroll>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#C4622D] to-[#9B4420] p-8 text-white lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-10">
            <span className="pointer-events-none absolute right-44 top-1/2 -translate-y-1/2 text-[8rem] opacity-[0.06] select-none">
              ⚖
            </span>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] opacity-70">
                <Award className="h-3.5 w-3.5" />
                US Patent No. {patent.number}
              </p>
              <h3 className="mb-3 font-serif text-[1.8rem] leading-[1.15] tracking-[-0.02em]">
                {patent.title}
                <br />
                {patent.titleLine2}
              </h3>
              <p className="max-w-[580px] text-[0.9375rem] leading-relaxed opacity-80">
                {patent.description}
              </p>
            </div>
            <a
              href={patent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit flex-shrink-0 items-center gap-1.5 rounded-full bg-white px-7 py-3 text-sm font-bold text-[--accent] shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
            >
              View Patent
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
