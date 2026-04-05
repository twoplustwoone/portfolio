"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { resumeUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-400 lg:px-16 ${
          scrolled || menuOpen
            ? "border-b border-[--border] bg-[--bg]/90 backdrop-blur-xl"
            : ""
        }`}
      >
        <Link href="/" className="font-serif text-xl tracking-tight text-[--text]">
          Francisco.
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-[--text-muted] transition-colors hover:text-[--text]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[--accent] px-4 py-1.5 text-sm font-medium text-[--accent] transition-colors hover:bg-[--accent] hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile: resume pill + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full border border-[--accent] px-3 py-1.5 text-xs font-medium text-[--accent]"
          >
            <FileText className="h-3 w-3" />
            Resume
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[--border] bg-[--bg-card] text-[--text-muted]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[69px] z-40 border-b border-[--border] bg-[--bg]/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-6 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl text-[--text] transition-colors hover:text-[--accent]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
