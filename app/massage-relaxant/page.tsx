import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Massage relaxant — Boté Kréyol",
  description:
    "Massage relaxant à Saint-François, Guadeloupe : parenthèse hors du temps, détente musculaire, circulation, sommeil et reconnexion à soi.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-0";

export default function MassageRelaxantPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Massage relaxant
        </h1>

        <p className="mt-10 text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:mt-12 md:text-base">
          Le temps d&apos;un soin, oublier le quotidien. Notre massage relaxant
          a été conçu comme une parenthèse hors du temps, une invitation à
          renouer avec votre corps et à apaiser votre esprit. Laissez nos mains
          expertes dénouer vos tensions et vous guider vers un état de
          bien-être profond. Les bienfaits — Physiques : relâchement des
          tensions musculaires, amélioration de la circulation, diminution du
          stress. Mentaux : réduction de l&apos;anxiété, amélioration de la
          qualité du sommeil, sensation de liberté mentale. Émotionnel : une
          reconnexion immédiate à soi-même.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-foreground/10 pt-10 md:mt-14 md:pt-12">
          <Link
            href={TARIFS_ANCRE}
            className="border border-nav-scrolled bg-nav-scrolled/12 px-6 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-nav-scrolled transition-colors hover:border-brand-yellow hover:bg-brand-yellow/15 hover:text-brand-yellow"
          >
            Voir les tarifs
          </Link>
          <Link
            href="/"
            className="text-sm text-foreground/60 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
