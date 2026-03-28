"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Home, LandPlot, MapPin, type LucideIcon } from "lucide-react";
import { services, servicesSection } from "../constants/content";
import { SectionShell } from "./section-shell";

const iconByKey: Record<(typeof services)[number]["icon"], LucideIcon> = {
  home: Home,
  building: Building2,
  land: LandPlot,
  map: MapPin,
};

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
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
          <h2
            id="services-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {servicesSection.intro}
          </p>
        </motion.div>

        <ul className="mt-14 space-y-0 divide-y divide-zinc-800/90">
          {services.map((item, index) => {
            const Icon = iconByKey[item.icon];
            return (
              <motion.li
                key={item.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
              >
                <div className="group flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:gap-10 md:py-12">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-[var(--accent-from)] transition-colors group-hover:border-zinc-700">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-zinc-50 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-zinc-400">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </SectionShell>
    </section>
  );
}
