"use client";

import Link from "next/link";
import { brand, footer, links } from "../constants/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-zinc-50"
            >
              {brand.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              {footer.blurb}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-12 md:col-span-7 md:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-zinc-400 transition-colors hover:text-zinc-200"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {footer.connectLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={links.mailto}
                    className="text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {footer.linkLabels.email}
                  </a>
                </li>
                <li>
                  <a
                    href={links.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {footer.linkLabels.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href={links.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {footer.linkLabels.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-800/80 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-xs leading-relaxed text-zinc-600">
            {footer.legalLine}
          </p>
          <p className="text-xs text-zinc-600">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            {footer.rightsLabel}
          </p>
        </div>
      </div>
    </footer>
  );
}
