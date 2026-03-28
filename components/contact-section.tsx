"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contactSection, links } from "../constants/content";
import { SectionShell } from "./section-shell";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  const channels = [
    {
      label: contactSection.emailLabel,
      href: links.mailto,
      value: links.mailto.replace(/^mailto:/, ""),
      external: false,
    },
    {
      label: contactSection.whatsappLabel,
      href: links.whatsappUrl,
      value: "Chat directo",
      external: true,
    },
    {
      label: contactSection.instagramLabel,
      href: links.instagramUrl,
      value: "Perfil público",
      external: true,
    },
  ] as const;

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="section-y scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] md:scroll-mt-28"
    >
      <SectionShell>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {contactSection.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
            >
              {contactSection.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              {contactSection.intro}
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-6 lg:justify-center">
            <dl className="space-y-8">
              {channels.map((ch) => (
                <div key={ch.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {ch.label}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={ch.href}
                      {...(ch.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-lg font-medium text-zinc-100 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {ch.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="grid gap-6 border-t border-zinc-800/90 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {contactSection.hoursLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {contactSection.hoursValue}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {contactSection.locationLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {contactSection.locationValue}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
