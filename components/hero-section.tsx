"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { hero, links } from "../constants/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const childProps = {
    initial: reduceMotion ? undefined : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.5, ease },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)]"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-zinc-950/80 md:bg-gradient-to-r md:from-zinc-950 md:via-zinc-950/88 md:to-zinc-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 md:bg-gradient-to-t md:from-zinc-950/90 md:via-transparent md:to-zinc-950/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 md:justify-center md:pb-20 md:pt-28 lg:max-w-none lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-2xl md:mx-0 md:max-w-xl lg:max-w-2xl">
          <motion.p
            {...childProps}
            transition={{
              ...childProps.transition,
              delay: reduceMotion ? 0 : 0.05,
            }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400"
          >
            {hero.kicker}
          </motion.p>
          <motion.h1
            id="hero-heading"
            {...childProps}
            transition={{
              ...childProps.transition,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-[2.75rem] md:leading-[1.06] lg:text-6xl"
          >
            {hero.headlineSegments.map((seg, i) =>
              seg.gradient ? (
                <span key={i} className="text-gradient-accent">
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </motion.h1>
          <motion.p
            {...childProps}
            transition={{
              ...childProps.transition,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            {...childProps}
            transition={{
              ...childProps.transition,
              delay: reduceMotion ? 0 : 0.28,
            }}
            className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={links.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400 sm:w-auto"
            >
              {hero.primaryCtaLabel}
            </a>
            <a
              href={hero.secondaryHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-zinc-950/40 px-7 py-3.5 text-center text-sm font-medium text-zinc-100 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-zinc-950/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:w-auto"
            >
              {hero.secondaryCtaLabel}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
