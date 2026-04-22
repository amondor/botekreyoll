import type { Metadata } from "next";
import Link from "next/link";

import { PiedsCardsAnimated, type PiedsCard } from "./PiedsCardsAnimated";

export const metadata: Metadata = {
  title: "Soin des pieds — Boté Kréyol",
  description:
    "Soins des pieds à Saint-François, Guadeloupe : soin complet anti callosités, express avec patch, soin complet sans patch — gommage, exfoliation, massage.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-0-2";

const piedsCards: PiedsCard[] = [
  {
    title: "Soin complet anti callosités",
    patchLabel: "Avec patch",
    durationPrice: "1 h · 55 €",
    paragraphs: [
      "Ce soin combine exfoliation en profondeur, hydratation et nettoyage des ongles pour des pieds doux et soignés.",
      "Idéal pour les personnes ayant des soucis de callosités, durillons, crevasses ou simplement pour un entretien régulier.",
    ],
    contraindications: [
      "Mycoses ou infections des pieds ou des ongles.",
      "Maladies dermatologiques (eczéma, psoriasis, verrues plantaires en cours de traitement, etc.).",
      "Crevasses sanglantes, ampoules, plaies ouvertes, etc.",
      "Inflammations (peau rouge, irritée ou ayant subi un coup de soleil récent).",
      "Personnes diabétiques ou enceintes : avis médical conseillé.",
    ],
  },
  {
    title: "Soin anti callosités express",
    patchLabel: "Avec patch",
    durationPrice: "40 min · 40 €",
    paragraphs: [
      "Idéal pour les personnes ayant des soucis de callosités, durillons, crevasses ou simplement pour un entretien régulier.",
    ],
  },
  {
    title: "Soin complet",
    patchLabel: "Sans patch",
    durationPrice: "1 h · 45 €",
    paragraphs: [
      "Pour un moment détente, ce soin comprend un gommage, une exfoliation, un nettoyage des ongles et un massage.",
    ],
  },
];

export default function SoinsDesPiedsPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Soin des pieds
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:mt-12 md:text-base">
          Chaque jour, vos pieds supportent le poids de vos ambitions.
          Offrez-leur une parenthèse de régénération profonde qui allie détente
          absolue et esthétique parfaite. Limage et polissage des ongles.
          Travail des cuticules. Bain de pieds aux huiles essentielles. Gommage
          au sucre. Extraction des peaux mortes. Massage. Hydratation intense.
          En plus, si vous le souhaitez, une petite touche colorée.
        </p>

        <PiedsCardsAnimated cards={piedsCards} />

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
