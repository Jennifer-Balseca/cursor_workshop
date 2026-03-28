import { ChevronDown } from "lucide-react";
import { faqSection } from "../constants/content";
import { SectionShell } from "./section-shell";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-y scroll-mt-24 border-t border-[var(--border-subtle)] md:scroll-mt-28"
    >
      <SectionShell>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {faqSection.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {faqSection.title}
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-2">
          {faqSection.items.map((item) => (
            <details
              key={item.q}
              className="faq-details border-b border-zinc-800/90 pb-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-zinc-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/50">
                <span className="pr-4">{item.q}</span>
                <ChevronDown
                  className="faq-chevron size-5 shrink-0 text-zinc-500 transition-transform duration-200"
                  aria-hidden
                />
              </summary>
              <div className="pb-5 pl-0 pr-10 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
