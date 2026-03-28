"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "../constants/content";
import { SectionShell } from "./section-shell";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="section-y border-t border-[var(--border-subtle)]"
    >
      <SectionShell>
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="md:col-span-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-zinc-50 sm:text-3xl lg:text-[2rem] lg:leading-tight"
            >
              {about.title}
            </h2>
          </motion.div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
            className="flex flex-col justify-center md:col-span-7"
          >
            <p className="text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl">
              {about.lead}
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem]">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-10 border-l-2 border-[var(--accent-from)]/60 pl-5 text-sm leading-relaxed text-zinc-500">
              {about.proofLine}
            </p>
          </motion.div>
        </div>
      </SectionShell>
    </section>
  );
}
