"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { easeOutSoft } from "../lib/home-motion";

export function HeroBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial={reduceMotion ? false : { scale: 1.04, opacity: 0.9 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: easeOutSoft }}
    >
      <Image
        src="/herojpg.jpg"
        alt="Ambiance lumineuse et chaleureuse de l’institut de beauté"
        fill
        priority
        className="object-cover object-[center_22%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/38 via-black/5 to-black/20" />
    </motion.div>
  );
}
