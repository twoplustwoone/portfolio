import { Github, Linkedin, FileText } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { resumeUrl } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mx-auto max-w-[600px]">
          <RevealOnScroll>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[--accent]">
              Let&apos;s talk
            </p>
            <h2 className="mb-12 font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em]">
              Get in touch
            </h2>
            <p className="mb-3 text-[1.05rem] leading-[1.75] text-[--text-muted]">
              If you&apos;re building something you actually care about — not
              just something optimized — my inbox is open. I&apos;m especially
              drawn to work at the intersection of frontend craft and AI product
              development.
            </p>
            <p className="mb-10 text-sm italic text-[--text-muted] opacity-80">
              Also: good taste matters to me more than I can rationally justify.
              Fair warning.
            </p>
            <a
              href="mailto:frandigiand@gmail.com"
              className="mb-10 block font-serif text-[clamp(1.4rem,3vw,2.25rem)] tracking-[-0.02em] text-[--accent] transition-colors hover:text-[--accent-hover]"
            >
              frandigiand@gmail.com
            </a>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/twoplustwoone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[--text-muted] transition-colors hover:text-[--accent]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fdigiandomenico/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[--text-muted] transition-colors hover:text-[--accent]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[--text-muted] transition-colors hover:text-[--accent]"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
