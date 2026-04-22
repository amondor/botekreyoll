"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import {
  PHONE_DISPLAY,
  PHONE_E164,
  SALON_ADDRESS_LINES,
  SALON_MAP_EMBED_URL,
  SALON_MAP_OPEN_URL,
} from "../lib/contact";
import {
  homeFadeUp,
  homeFadeUpDelayed,
  homeFadeUpStill,
  homeViewport,
} from "../lib/home-motion";

export function IntroSection() {
  const reduceMotion = useReducedMotion();
  const colA = reduceMotion ? homeFadeUpStill : homeFadeUp;
  const colB = reduceMotion ? homeFadeUpStill : homeFadeUpDelayed;

  return (
    <section
      className="bg-stone-100 px-6 py-16 md:px-10 md:py-24 lg:py-28"
      aria-labelledby="intro-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <motion.div
            className="text-left lg:col-span-5"
            variants={colA}
            initial="hidden"
            whileInView="visible"
            viewport={homeViewport}
          >
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-foreground/70">
              Offrez-vous une pause
            </p>
            <h2
              id="intro-title"
              className="font-hero text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              Votre lieu secret de beauté
            </h2>

            <div className="mt-10">
              <h3 className="font-hero text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Horaires
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-foreground/70 md:text-base">
                Du mardi au samedi, 09h – 17h
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-hero text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Nous trouver
              </h3>
              <address className="mt-4 space-y-1 text-[0.9375rem] leading-relaxed text-foreground/70 not-italic md:text-base">
                {SALON_ADDRESS_LINES.map((line, i) => (
                  <p
                    key={line}
                    className={i === 0 ? "font-medium text-foreground/85" : undefined}
                  >
                    {line}
                  </p>
                ))}
              </address>
              <p className="mt-4 text-[0.9375rem] md:text-base">
                <a
                  href={`tel:${PHONE_E164}`}
                  className="text-foreground/85 transition-colors hover:text-accent"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[min(72vw,440px)] lg:col-span-7 lg:min-h-[520px] xl:min-h-[600px]"
            variants={colB}
            initial="hidden"
            whileInView="visible"
            viewport={homeViewport}
          >
            <Link
              href={SALON_MAP_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3 top-3 z-10 inline-flex rounded border border-foreground/10 bg-white/95 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm transition-colors hover:bg-white"
            >
              Ouvrir dans Maps
            </Link>
            <div className="relative h-full min-h-[min(72vw,440px)] overflow-hidden rounded-lg bg-stone-200 shadow-sm lg:min-h-[520px] xl:min-h-[600px]">
              <iframe
                title="Carte — Boté Kréyol, Saint-François"
                src={SALON_MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
