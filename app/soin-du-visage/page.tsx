import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soin visage — Boté Kréyol",
  description:
    "Soin visage et H2O Facial à Saint-François, Guadeloupe : nettoyage en cabine, technologies adaptées, aspiration par eau et infusion d’actifs.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-1";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function SoinDuVisagePage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Soin visage
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            Le nettoyage que nous faisons en cabine va bien au-delà de votre
            routine maison. Les produits et les techniques sont adaptés à vos
            problématiques : de l&apos;hydratation intense pour la peau sèche ;
            la jeunesse, l&apos;anti-âge et les rides ; l&apos;éclat pour une
            peau terne, fatiguée, de fumeur ; la pureté pour la peau mixte à
            grasse.
          </p>
          <p>
            <span className="font-semibold text-foreground">H2O Facial.</span>{" "}
            Offrez à votre peau le nec plus ultra de la technologie esthétique.
            Le soin H2O Facial est un traitement complet qui traite
            simultanément toutes les problématiques de peau : pores obstrués,
            déshydratation, manque d&apos;éclat. Une synergie entre
            l&apos;aspiration par eau et l&apos;infusion des principes actifs
            ciblés. Résultat, une peau neuve, repulpée, profondément purifiée et
            un teint d&apos;une clarté absolue. Convient à tous types de peaux,
            même les plus sensibles.
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
