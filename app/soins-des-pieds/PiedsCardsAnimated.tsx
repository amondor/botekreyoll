"use client";

import { motion, useReducedMotion } from "framer-motion";

export type PiedsCard = {
  title: string;
  patchLabel: string;
  durationPrice: string;
  paragraphs: string[];
  contraindications?: string[];
};

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReduced = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  cards: PiedsCard[];
};

export function PiedsCardsAnimated({ cards }: Props) {
  const reduceMotion = useReducedMotion();
  const itemVariants = reduceMotion ? cardReduced : card;

  return (
    <motion.ul
      className="mx-auto mt-14 flex max-w-4xl list-none flex-col gap-4 md:mt-16 sm:gap-5"
      variants={list}
      initial="hidden"
      animate="show"
    >
      {cards.map(
        ({ title, patchLabel, durationPrice, paragraphs, contraindications }) => (
          <motion.li key={title} variants={itemVariants}>
            <article className="flex h-full flex-col border border-accent/35 bg-accent/[0.07] px-5 py-6 md:px-6 md:py-7">
              <h3 className="font-hero text-lg font-semibold leading-snug tracking-tight text-accent md:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent/90">
                {patchLabel}
              </p>

              {contraindications ? (
                <div className="mt-4 border-t border-accent/20 pt-4">
                  <p className="text-[0.8125rem] font-semibold text-foreground">
                    Contre-indications
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[0.8125rem] leading-snug text-foreground/80">
                    {contraindications.map((item) => (
                      <li key={item} className="text-pretty">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-4 flex flex-1 flex-col gap-3 text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <p className="mt-6 border-t border-accent/25 pt-4 text-center font-hero text-base font-semibold text-accent">
                {durationPrice}
              </p>
            </article>
          </motion.li>
        ),
      )}
    </motion.ul>
  );
}
