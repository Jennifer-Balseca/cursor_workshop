import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** scroll-mt para header sticky */
  scrollMargin?: boolean;
};

/**
 * Ancho y padding horizontales consistentes; la vertical la marca cada sección.
 */
export function SectionShell({
  id,
  children,
  className = "",
  scrollMargin = false,
}: Props) {
  return (
    <div
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${scrollMargin ? "scroll-mt-24 md:scroll-mt-28" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
