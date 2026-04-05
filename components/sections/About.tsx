import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { quickFacts, currentlyItems } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-[--border] bg-[--bg-card] py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[--accent]">
          About me
        </p>
        <h2 className="mb-12 font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em]">
          Hi — I&apos;m Francisco.
        </h2>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* ── Bio ── */}
          <RevealOnScroll>
            <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[--text-muted]">
              <p>
                I&apos;m a{" "}
                <strong className="font-semibold text-[--text]">
                  software engineer based in New York City
                </strong>
                , originally from Buenos Aires. I care about the intersection of
                engineering and human experience — specifically the part where a
                product stops feeling like a product and starts feeling like
                something someone made for you.
              </p>
              <p>
                I spent several years at Salesforce working across developer
                tooling, platform infrastructure, and most recently{" "}
                <strong className="font-semibold text-[--text]">
                  AI-integrated experiences on Einstein Studio
                </strong>{" "}
                — shipping LLM integrations and performance improvements that
                moved real metrics. I also hold a{" "}
                <strong className="font-semibold text-[--text]">
                  US patent
                </strong>{" "}
                for a system I designed, which still catches me off-guard a
                little when I say it out loud.
              </p>
              <p>
                Outside of work I&apos;m an{" "}
                <strong className="font-semibold text-[--text]">
                  avid gamer
                </strong>{" "}
                — specifically the kind of games that have mood and character and
                make you feel like you&apos;re somewhere. I write when something
                is bothering me creatively. I make unnecessarily elaborate
                coffee. And I&apos;m governed, at least partially, by two very
                opinionated cats. 🐈🐈
              </p>
            </div>
          </RevealOnScroll>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-3">
            {quickFacts.map(({ label, value, subValue }, i) => (
              <RevealOnScroll key={label} delay={0.08 * (i + 1)}>
                <div className="rounded-2xl border border-[--border] bg-[--bg] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[--accent-muted]">
                  <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[--accent]">
                    {label}
                  </p>
                  <p className="font-medium text-[--text]">{value}</p>
                  {subValue && (
                    <p className="text-xs text-[--text-muted]">{subValue}</p>
                  )}
                </div>
              </RevealOnScroll>
            ))}

            {/* Currently widget */}
            <RevealOnScroll delay={0.32}>
              <div className="rounded-2xl border border-[--border] bg-[--bg] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[--accent-muted]">
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[--accent]">
                  Currently
                </p>
                <ul className="flex flex-col gap-2 list-none">
                  {currentlyItems.map(({ emoji, text, note }) => (
                    <li key={text} className="flex items-baseline gap-2">
                      <span className="flex-shrink-0 text-base">{emoji}</span>
                      <span>
                        <span className="text-sm font-medium text-[--text]">
                          {text}
                        </span>
                        <span className="block text-xs italic text-[--text-muted]">
                          {note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
