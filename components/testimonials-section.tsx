"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonialsSection } from "../constants/content";
import { SectionShell } from "./section-shell";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = testimonialsSection.items;

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="section-y scroll-mt-24 border-t border-[var(--border-subtle)] md:scroll-mt-28"
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
            {testimonialsSection.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {testimonialsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {testimonialsSection.intro}
          </p>
        </motion.div>

        <div className="mt-14 space-y-12 md:mt-20">
          <motion.blockquote
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="relative border-l-2 border-[var(--accent-to)]/70 pl-8 md:pl-10"
          >
            <p className="text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl sm:leading-snug lg:max-w-4xl">
              “{featured.quote}”
            </p>
            <footer className="mt-6 text-sm text-zinc-500">
              <cite className="not-italic font-medium text-zinc-400">
                {featured.name}
              </cite>
              <span className="mt-1 block text-zinc-500">{featured.role}</span>
            </footer>
          </motion.blockquote>

          <div className="grid gap-10 border-t border-zinc-800/80 pt-12 md:grid-cols-2 md:gap-12 md:pt-14">
            {rest.map((item, index) => (
              <motion.blockquote
                key={item.name}
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="border-l border-zinc-700 pl-6"
              >
                <p className="text-base leading-relaxed text-zinc-300">
                  “{item.quote}”
                </p>
                <footer className="mt-5 text-sm text-zinc-500">
                  <cite className="not-italic font-medium text-zinc-400">
                    {item.name}
                  </cite>
                  <span className="mt-1 block">{item.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
