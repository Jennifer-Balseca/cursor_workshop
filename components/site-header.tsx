"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { brand, links, nav } from "../constants/content";

export function SiteHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-16">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-50 md:text-base"
        >
          {brand.name}
        </Link>
        <nav
          aria-label="Principal"
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:flex sm:justify-center"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-xs text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100 sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={links.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-md hover:shadow-purple-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400"
        >
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
