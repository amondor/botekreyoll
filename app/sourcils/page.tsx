import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sourcils — Henné végétal — Boté Kréyol",
  description:
    "Teinture sourcils au henné végétal à Saint-François, Guadeloupe : regard structuré, effet ombrage, alternative au maquillage quotidien et au tatouage permanent.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-3";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function SourcilsPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Sourcils
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            Sublimer votre regard avec le henné végétal : l&apos;alternative
            parfaite au maquillage quotidien et au tatouage permanent.
          </p>
          <p>
            Vous rêvez de sourcils parfaitement dessinés, plus denses et
            harmonieux dès le réveil, sans aiguilles ? Le henné végétal est la
            solution. Une technique naturelle qui colore à la fois les poils et
            la peau pour un effet « ombrage » et longue durée, contrairement à
            une teinture classique qui ne colore que le poil.
          </p>
          <p>
            Plus besoin de crayonner vos sourcils chaque matin. Une solution
            douce, respectueuse de votre peau et de vos poils, pour une durée
            allant jusqu&apos;à 2 semaines sur la peau et 5 semaines sur les
            poils. Une prestation parfaite pour ceux et celles qui hésitent
            avant un maquillage semi-permanent.
          </p>
          <p>
            Pour une durée plus optimale, ne pas mouiller la zone durant
            48&nbsp;heures.
          </p>
        </div>

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
