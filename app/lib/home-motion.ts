import type { Variants } from "framer-motion";

/** Courbe d’assouplissement alignée sur le hero (HeroAnimated). */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

/** Entrée une fois au scroll, avec marge pour déclencher un peu avant le bas de l’écran. */
export const homeViewport = {
  once: true as const,
  amount: 0.22 as const,
  margin: "0px 0px -10% 0px" as const,
};

export const homeFadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOutSoft },
  },
};

export const homeFadeUpStill: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const homeFadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSoft, delay: 0.12 },
  },
};

export function homeStaggerParent(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: {}, visible: {} };
  }
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.065, delayChildren: 0.04 },
    },
  };
}

export function homeStaggerItem(reduceMotion: boolean | null): Variants {
  return reduceMotion ? homeFadeUpStill : homeFadeUp;
}
