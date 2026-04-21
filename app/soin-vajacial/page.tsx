import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soin vajacial — Boté Kréyol",
  description:
    "Soin vajacial à Saint-François, Guadeloupe : soin ciblé du maillot, pubis et ailes de l’aine, imperfections, irritations, poils incarnés.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-2";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function SoinVajacialPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Soin vajacial
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            Parce que la peau de votre zone du maillot mérite autant
            d&apos;attention que celle de votre visage, nous avons conçu le soin
            vajacial.
          </p>
          <p>
            Ce traitement ciblé est la solution ultime pour dire adieu aux
            imperfections, apaiser les irritations et sublimer votre peau.
          </p>
          <p>
            Le vajacial est la fusion de Vagin et facial. Ce soin se
            concentre exclusivement sur le pubis et les ailes de l&apos;aine.
          </p>
          <p>
            Cette zone est souvent malmenée par les frottements des vêtements
            et les méthodes d&apos;épilation agressives.
          </p>
          <p>
            Le soin vajacial répond à trois objectifs principaux : éliminer les
            poils incarnés ; purifier et lisser ; uniformiser le teint.
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
