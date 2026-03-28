"use client";

import { motion, useReducedMotion } from "framer-motion";
import { finalCta, links } from "../constants/content";
import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section-y border-t border-[var(--border-subtle)]"
    >
      <SectionShell>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="flex flex-col items-start gap-8 border border-zinc-800/80 bg-zinc-900/25 px-6 py-12 sm:px-10 sm:py-14 md:flex-row md:items-center md:justify-between md:gap-12"
        >
          <div className="max-w-xl">
            <h2
              id="final-cta-heading"
              className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
            >
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {finalCta.subtitle}
            </p>
          </div>
          <a
            href={links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-8 py-3.5 text-sm font-semibold text-white transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400 md:w-auto"
          >
            {finalCta.buttonLabel}
          </a>
        </motion.div>
      </SectionShell>
    </section>
  );
}
