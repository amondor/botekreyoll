import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soin des mains — Boté Kréyol",
  description:
    "Soin des mains 45 minutes : préparation des ongles, gommage, massage, hydratation et vernis au choix à Saint-François, Guadeloupe.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-0-3";

export default function SoinsDesMainsPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Soin des mains
        </h1>
        <p className="mt-3 text-center text-sm text-foreground/75 md:text-base">
          45 minutes
        </p>

        <p className="mt-10 text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:mt-12 md:text-base">
          Bien plus qu&apos;une mise en beauté des ongles, ce soin est une
          véritable parenthèse de détente. Nous apportons une hydratation intense
          pour sublimer vos mains et apaiser votre esprit. Nous préparons
          l&apos;ongle. limer, couper, émollient. Nous enlevons les cellules
          mortes et activons la circulation sanguine. gommage. Nous apportons
          une détente. massage. Nous amenons de l&apos;hydratation. Puis, en
          plus, une note de couleur au choix.
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
