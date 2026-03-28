"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { portfolioSection } from "../constants/content";
import { SectionShell } from "./section-shell";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portafolio"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-24 border-t border-[var(--border-subtle)] md:scroll-mt-28"
    >
      <SectionShell className="section-y">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {portfolioSection.eyebrow}
          </p>
          <h2
            id="portfolio-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {portfolioSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {portfolioSection.intro}
          </p>
        </motion.div>
      </SectionShell>

      <div className="mt-6 space-y-0 md:mt-10">
        {portfolioSection.items.map((item, index) => {
          const reverse = index % 2 === 1;
          return (
            <motion.article
              key={item.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduceMotion ? 0 : 0.55 }}
              className="grid border-t border-zinc-800/90 md:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-[22rem] ${reverse ? "md:order-2" : ""}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-4 py-12 sm:px-6 md:px-12 lg:px-16 ${reverse ? "md:order-1" : ""}`}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent-from)]">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-zinc-50 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                  {item.outcome}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
