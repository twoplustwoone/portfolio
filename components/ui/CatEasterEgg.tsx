"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { catReviews } from "@/lib/data";

export default function CatEasterEgg() {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);

  const cat = catReviews[activeCat];
  const nextIndex = (activeCat + 1) % catReviews.length;
  const next = catReviews[nextIndex];

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[--border] bg-[--bg-card] text-xl shadow-[0_2px_16px_rgba(35,26,23,0.1)] transition-all duration-200 hover:scale-110 hover:-rotate-[8deg] hover:border-[--accent-muted]"
        aria-label="Cat review"
      >
        🐱
      </button>

      {/* Dismiss backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="cat-modal"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed bottom-24 right-8 z-50 w-[300px] rounded-[20px] border border-[--border] bg-[--bg] p-6 shadow-[0_16px_48px_rgba(35,26,23,0.13)]"
          >
            {/* Header */}
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[--accent-muted] text-lg">
                {cat.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-[--text]">{cat.name}</p>
                <p className="text-[0.7rem] text-[--text-muted]">{cat.title}</p>
              </div>
            </div>

            {/* Stars */}
            <p className="mb-2 tracking-wide text-sm">{cat.stars}</p>

            {/* Review */}
            <p className="text-sm italic leading-relaxed text-[--text-muted]">
              {cat.review}
            </p>

            <hr className="my-3 border-[--border]" />

            {/* Switch cat */}
            <button
              onClick={() => setActiveCat(nextIndex)}
              className="text-xs font-semibold text-[--accent] transition-opacity hover:opacity-70"
            >
              hear from {next.name} instead →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
