import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minceur (soin corps) — Boté Kréyol",
  description:
    "Soin corps minceur à Saint-François, Guadeloupe : silhouette, peau d’orange, circulation, cure de séances et techniques adaptées à votre sensibilité.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-1-4";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function MinceurSoinCorpsPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Minceur (soin corps)
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            On le sait, la perte de centimètres et la fermeté ne sont pas
            qu&apos;une question de sport ou de régime. Notre soin signature
            combine technicité de pointe et bien-être profond pour cibler les
            zones rebelles (ventre, cuisses, fessiers, bras) tout en relançant
            la circulation.
          </p>
          <p>
            Les bénéfices des séances : lissage de l&apos;aspect « peau
            d&apos;orange » ; élimination des toxines et réduction de la
            sensation de jambes lourdes ; stimulation de l&apos;élastine pour
            une peau plus tonique et rebondie ; une parenthèse relaxante pour se
            réapproprier son corps.
          </p>
          <p>
            Pour un résultat plus optimal et durable, nous recommandons une cure
            de 2 séances par semaine pendant les premiers temps.
          </p>
          <p>
            Ne laissez plus vos complexes décider de votre garde-robe. Offrez à
            votre corps l&apos;expertise qu&apos;il mérite. Nos techniques et
            appareils sont conçus pour être efficaces tout en restant agréables.
            Nous adaptons l&apos;intensité à votre sensibilité.
          </p>
          <p>
            Dès la première séance, vous ressentirez une sensation de légèreté.
            Pour un changement visuel sur la silhouette, les résultats
            apparaissent généralement après 4 ou 5 séances régulières.
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
