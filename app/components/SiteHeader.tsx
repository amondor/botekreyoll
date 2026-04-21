"use client";

import Image from "next/image";
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between gap-3 px-6 py-6 transition-[background-color,color] duration-300 md:gap-6 md:px-12 md:py-7 lg:px-16 ${
        scrolled ? "text-white" : "bg-transparent text-white"
      }`}
      data-scrolled={scrolled ? "true" : undefined}
    >
      <Link
        href="/"
        className="relative z-10 flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden pr-1 transition-opacity hover:opacity-90 md:max-w-fit md:flex-none md:shrink-0 md:gap-3 md:overflow-visible md:pr-0"
      >
        <Image
          src="/logo.png"
          alt=""
          width={500}
          height={500}
          className="h-9 w-auto shrink-0 origin-left scale-[1.38] md:h-11 md:scale-[1.32]"
          priority
        />
        <span
          className="font-h2 min-w-0 translate-x-0.5 pt-0.5 text-[1.45rem] leading-none tracking-tight text-brand-yellow truncate md:ml-3 md:translate-x-1 md:pt-px md:text-[2.1rem] md:overflow-visible md:whitespace-nowrap"
        >
          Boté Kréyol
        </span>
      </Link>

      <nav
        className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-xs font-medium uppercase tracking-[0.26em] text-white/95 md:flex xl:gap-10 xl:text-[0.8125rem] xl:tracking-[0.24em]"
        aria-label="Navigation principale"
      >
        {nav.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={
              scrolled
                ? "transition-colors hover:text-brand-yellow"
                : "transition-colors hover:text-white"
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="relative z-20 flex shrink-0 items-center gap-1 md:z-10">
        <Link
          href={WHATSAPP_RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden border px-4 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] transition-colors md:inline-flex md:px-6 md:py-3 md:text-[0.65rem] ${
            scrolled
              ? "border-white/90 text-white hover:bg-white/15"
              : "border-brand-yellow text-brand-yellow hover:bg-brand-yellow/20"
          }`}
        >
          Réserver en ligne
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
    </header>

    {menuOpen ? (
      <>
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/45 md:hidden"
          aria-label="Fermer le menu"
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="mobile-nav"
          className="fixed right-0 top-0 z-40 h-full w-[min(100%,18rem)] border-l border-foreground/10 bg-background pt-28 shadow-lg md:hidden"
        >
          <nav
            className="flex flex-col px-6 py-4"
            aria-label="Navigation principale"
          >
            {nav.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="py-3 text-xs font-medium uppercase tracking-[0.26em] text-foreground/90 transition-colors hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </>
    ) : null}
    </>
  );
}
