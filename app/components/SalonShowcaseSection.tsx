"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  homeFadeUp,
  homeFadeUpDelayed,
  homeFadeUpStill,
  homeViewport,
} from "../lib/home-motion";

export function SalonShowcaseSection() {
  const reduceMotion = useReducedMotion();
  const textVariants = reduceMotion ? homeFadeUpStill : homeFadeUp;
  const mediaVariants = reduceMotion ? homeFadeUpStill : homeFadeUpDelayed;

  return (
    <section
      className="border-t border-foreground/10 bg-background px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="salon-showcase-title"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
        <motion.div
          className="order-2 md:order-1 md:col-span-5"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
        >
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-foreground/75">
            L&apos;institut
          </p>
          <h2
            id="salon-showcase-title"
            className="font-hero text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            Un cocon pour prendre soin de vous
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-foreground/75 md:text-base">
            Découvrez l&apos;ambiance de Boté Kréyol : un espace doux et feutré à Saint-François,
            pensé pour votre confort. Chaque détail invite à la détente, entre soins sur mesure et
            accueil chaleureux.
          </p>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 md:col-span-7"
          variants={mediaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
        >
          <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-foreground/10 shadow-sm shadow-foreground/5 md:aspect-[16/10]">
            <Image
              src="/salon/botekreyol.JPG"
              alt="Intérieur de l’institut de beauté Boté Kréyol à Saint-François"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
