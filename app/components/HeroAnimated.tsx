"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroAnimated() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 pb-12 pt-2 md:px-10 md:pb-16 md:pt-4">
      <motion.div
        className="relative mx-auto w-full max-w-4xl text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeSlideUp} className="mb-8 md:mb-10">
          <h1
            id="hero-heading"
            className="font-hero text-balance font-semibold tracking-tight text-white"
          >
            Révélez votre beauté naturelle
          </h1>
        </motion.div>

        <motion.p
          variants={fadeSlideUp}
          className="mx-auto mb-12 max-w-md text-pretty text-lg leading-relaxed text-white/88 md:mb-14 md:max-w-xl md:text-xl"
        >
          Un espace minimaliste et feutré où chaque détail est pensé pour votre
          confort. Laissez-nous révéler l’éclat qui vous ressemble.
        </motion.p>

        <motion.div variants={fadeSlideUp}>
          <Link
            href="#"
            className="inline-flex border border-white/90 px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:bg-white/10 md:px-10 md:py-4 md:text-[0.75rem]"
          >
            Découvrir le salon
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
