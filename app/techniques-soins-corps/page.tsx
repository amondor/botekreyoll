import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Madérothérapie, G5 & drainage minceur — Boté Kréyol",
  description:
    "Madérothérapie (ustensiles en bois), massage appareil G5 par vibrations, drainage minceur manuel — institut à Saint-François, Guadeloupe.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-4";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function TechniquesSoinsCorpsPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Madérothérapie, appareil G5 &amp; drainage minceur
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            <span className="font-semibold text-foreground">
              Madérothérapie.
            </span>{" "}
            Technique utilisant des ustensiles en bois aux formes et tailles
            variées.
          </p>
          <p>
            <span className="font-semibold text-foreground">Appareil G5.</span>{" "}
            Le massage G5 est un traitement non invasif qui utilise les
            vibrations (5 têtes).
          </p>
          <p>
            <span className="font-semibold text-foreground">
              Drainage minceur.
            </span>{" "}
            Technique manuelle.
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
