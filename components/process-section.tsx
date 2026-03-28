"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSection } from "../constants/content";
import { SectionShell } from "./section-shell";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proceso"
      aria-labelledby="process-heading"
      className="section-y scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] md:scroll-mt-28"
    >
      <SectionShell>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {processSection.eyebrow}
          </p>
          <h2
            id="process-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {processSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {processSection.intro}
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-12 md:mt-20 md:grid-cols-4 md:gap-6 lg:gap-8">
          {processSection.steps.map((step, index) => (
            <motion.li
              key={step.n}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                delay: reduceMotion ? 0 : index * 0.07,
              }}
              className="relative md:pt-2"
            >
              {index < processSection.steps.length - 1 ? (
                <div
                  className="absolute left-[1.35rem] top-10 hidden h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-zinc-700 to-transparent md:block"
                  aria-hidden
                />
              ) : null}
              <span className="font-mono text-sm text-zinc-500">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}
