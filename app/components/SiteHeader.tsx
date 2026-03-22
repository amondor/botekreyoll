"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WHATSAPP_RESERVE_URL } from "../lib/contact";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
] as const;

const SCROLL_THRESHOLD = 48;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between gap-6 px-6 py-6 transition-[background-color,box-shadow,color] duration-300 md:px-12 md:py-7 lg:px-16 ${
        scrolled
          ? "bg-white text-foreground shadow-sm shadow-foreground/5"
          : "bg-transparent text-white"
      }`}
    >
      <Link
        href="/"
        className={`relative z-10 text-left font-hero transition-opacity hover:opacity-90 ${
          scrolled ? "text-foreground" : "text-white"
        }`}
      >
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.42em] md:text-xs">
          Botekreyol
        </span>
        <span
          className={`mt-1 block max-w-[14rem] text-[0.55rem] font-normal leading-snug tracking-wide md:max-w-none md:text-[0.6rem] ${
            scrolled ? "text-foreground/65" : "text-white/75"
          }`}
        >
          Institut de beauté à Saint-François, Guadeloupe
        </span>
      </Link>

      <nav
        className={`absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-[0.65rem] font-medium uppercase tracking-[0.28em] md:flex xl:gap-10 ${
          scrolled ? "text-foreground/90" : "text-white/95"
        }`}
        aria-label="Navigation principale"
      >
        {nav.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={
              scrolled
                ? "transition-colors hover:text-accent"
                : "transition-colors hover:text-white"
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href={WHATSAPP_RESERVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 ml-auto shrink-0 border px-4 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] transition-colors md:px-6 md:py-3 md:text-[0.65rem] ${
          scrolled
            ? "border-foreground/25 text-foreground hover:bg-foreground/5"
            : "border-white/85 text-white hover:bg-white/10"
        }`}
      >
        Réserver en ligne
      </Link>
    </header>
  );
}
