import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeUrl, socialLinks, githubAvatarUrl } from "@/lib/data";

const ICON_MAP = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-[1280px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-16 lg:pt-36">
      {/* ── Content ── */}
      <div className="flex flex-col gap-6">
        {/* Availability badge */}
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-semibold text-green-800">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green-500" />
          Open to new opportunities
        </span>

        {/* Name */}
        <h1 className="font-serif text-[clamp(3rem,5.5vw,5.25rem)] leading-[1.02] tracking-[-0.025em]">
          Francisco
          <br />
          Di Giandomenico
        </h1>

        {/* Role */}
        <p className="text-xl font-medium tracking-wide text-[--accent]">
          Frontend Engineer
        </p>

        {/* Description */}
        <p className="max-w-[520px] text-[1.05rem] leading-[1.75] text-[--text-muted]">
          I build things for people who notice when something feels slightly
          off. Currently at Atlassian — six-plus years at Salesforce before
          that, a US patent somewhere along the way — I&apos;ve learned that
          good software doesn&apos;t just work. It has to{" "}
          <em>feel like something.</em>
        </p>

        {/* CTAs */}
        <div className="mt-1 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[--accent] px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(196,98,45,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[--accent-hover] hover:shadow-[0_6px_20px_rgba(196,98,45,0.35)]"
          >
            See my work
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[--border] px-7 py-3 text-sm font-semibold text-[--text] transition-all duration-200 hover:-translate-y-0.5 hover:border-[--text]"
          >
            Download resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[--text-muted] transition-colors hover:text-[--accent]"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Photo ── */}
      <div className="hidden items-center justify-center lg:flex">
        <div className="relative">
          {/* Soft orb glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-[20%] -translate-y-[55%] rounded-full bg-[--accent-muted] opacity-60 blur-[40px]" />
          {/* Frame */}
          <div className="relative h-[460px] w-[380px] overflow-hidden rounded-[28px] border border-[--border] bg-[--bg-card]">
            <Image
              src={githubAvatarUrl}
              alt="Francisco Di Giandomenico"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
