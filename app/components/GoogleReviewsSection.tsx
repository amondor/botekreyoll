"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { GOOGLE_REVIEWS_URL } from "../lib/contact";

export type ReviewItem = {
  quote: string;
  author: string;
  dateLabel: string;
  rating: number;
};

/** Ajoutez vos avis ici — le carrousel duplique la liste pour la boucle infinie. */
export const REVIEWS: readonly ReviewItem[] = [
  {
    quote: `Je recommande vivement cet institut ! Merci pour ce moment agréable. Très professionnelle et très consciencieuse, vraiment respectueuse du travail bien fait. J'ai trouvé génial des prestations agréables !

Les massages relaxants oooohhhhh dommage qu'il y a une durée 😉`,
    author: "Stephanie Mondor",
    dateLabel: "il y a 2 mois",
    rating: 5,
  },
  {
    quote: `Soyez certain que Vanessa (responsable) saura prendre soin de vos proches et en faire ressortir le meilleur.

J'ai pris des renseignements pour ma maman et j'ai été accueillie chaleureusement.
Le professionnalisme, l'écoute active et la réactivité de Vanessa m'ont mis en confiance.

Ma mère est revenue de son soin rayonnante et resplendissante d'amour.
Elle s'est fait cajoler, m'a-t-elle dit.

Mille merci à vous, Vanessa.`,
    author: "Elmaze URELUS",
    dateLabel: "il y a 1 mois",
    rating: 5,
  },
  {
    quote: `Vous cherchez un institut où riment douceur, calme, bien-être, pause dans le temps et prix attractifs pour des soins de qualité, alors vous êtes au bon endroit. Vanessa prendra soin de vous, et de vos princesses aussi car les jeunes filles ne sont pas oubliées, le temps d'un instant pour soi. Aussi bien les massages que les épilations, les différents soins sont pratiqués avec écoute et professionnalisme. Un petit institut très cocon pour un grand moment de bien-être ☺️☺️`,
    author: "Kériane Fantin",
    dateLabel: "il y a 3 mois",
    rating: 5,
  },
  {
    quote: `Lors de mon séjour en Guadeloupe, j'ai été ravie d'être accueillie dans ce salon. Les soins proposés sont effectués avec bienveillance et professionnalisme. Ce qui est sûr, c'est que j'y retournerai.

Je vous le conseille fortement, mesdames 😊`,
    author: "Marina Calif-jeane",
    dateLabel: "il y a 4 mois",
    rating: 5,
  },
  {
    quote: `J'ai profité d'un super massage et d'un soin du visage, exceptionnels, une parenthèse enchantée 🥰

C'est une professionnelle attentionnée et chaleureuse…

Allez-vous faire chouchouter !!!`,
    author: "Anaëlle Coupan",
    dateLabel: "il y a 3 mois",
    rating: 5,
  },
];

const MARQUEE_DURATION_SEC = Math.max(24, REVIEWS.length * 6);

function StarRow({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <div
      className="flex justify-center gap-0.5 text-brand-yellow"
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`size-[1.05rem] shrink-0 md:size-[1.15rem] ${
            i < filled ? "text-brand-yellow" : "text-foreground/18"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article
      className="flex h-[300px] w-[min(85vw,300px)] shrink-0 flex-col border border-foreground/12 bg-background px-6 py-8 text-center shadow-sm md:h-[360px] md:w-[340px] md:px-7 md:py-9"
      aria-label={`Avis de ${review.author}, ${review.rating} étoiles sur 5`}
    >
      <div className="shrink-0">
        <StarRow rating={review.rating} />
      </div>
      <div className="mt-3 flex min-h-0 flex-1 flex-col justify-center">
        <p className="overflow-hidden text-pretty text-sm leading-relaxed text-foreground/70 md:text-[0.9375rem] line-clamp-5 md:line-clamp-6">
          {review.quote}
        </p>
      </div>
      <div className="shrink-0 pt-1.5">
        <p className="font-semibold text-foreground">{review.author}</p>
        <p className="mt-1 text-xs text-foreground/50">{review.dateLabel}</p>
      </div>
    </article>
  );
}

function ReviewsMarquee() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent md:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent md:w-16"
        aria-hidden
      />
      <motion.div
        className="flex w-max gap-5 md:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: MARQUEE_DURATION_SEC,
            ease: "linear",
          },
        }}
      >
        {loop.map((review, i) => (
          <ReviewCard
            key={`${review.author}-${review.dateLabel}-${i}`}
            review={review}
          />
        ))}
      </motion.div>
    </div>
  );
}

function ReviewsStaticGrid() {
  return (
    <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {REVIEWS.map((review) => (
        <li
          key={`${review.author}-${review.dateLabel}`}
          className="flex justify-center"
        >
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}

export function GoogleReviewsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-t border-foreground/10 bg-background py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-foreground/70">
          Avis Google
        </p>
        <h2
          id="reviews-heading"
          className="mx-auto mt-3 max-w-2xl text-balance text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:mt-4 md:text-3xl"
        >
          Commentaires &amp; avis
        </h2>
      </div>

      <div className="mt-12 md:mt-14">
        {reduceMotion ? (
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <ReviewsStaticGrid />
          </div>
        ) : (
          <ReviewsMarquee />
        )}
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-6 text-center text-sm text-foreground/55 md:mt-12 md:px-10">
        <Link
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-nav-scrolled underline decoration-nav-scrolled/35 underline-offset-4 transition-colors hover:opacity-85"
        >
          Voir tous les avis sur Google
        </Link>
      </p>
    </section>
  );
}
