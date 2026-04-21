import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Épilations femmes — Boté Kréyol",
  description:
    "Épilation à la cire à Saint-François, Guadeloupe : cires professionnelles, cadre intime, peau lisse et conseils avant rendez-vous.",
};

const TARIFS_ANCRE = "/services#tarifs-cat-0-0";

const bodyClass =
  "text-pretty text-[0.9375rem] leading-normal text-foreground/80 md:text-base";

export default function EpilationsFemmesPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h1 className="text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Épilations femmes
        </h1>

        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-5 ${bodyClass}`}>
          <p>
            Parce que votre peau mérite la plus grande douceur, l&apos;institut
            utilise des cires professionnelles adaptées à chaque zone et à
            chaque type de peau. Profitez d&apos;un moment de soin dans un
            cadre intime et relaxant pour un résultat impeccable et une peau
            durablement lisse.
          </p>
          <p>
            L&apos;épilation à la cire ne se contente pas d&apos;enlever les
            poils. Elle élimine également les cellules mortes de la peau,
            agissant comme un exfoliant, ce qui laisse votre peau non seulement
            plus lisse mais aussi plus éclatante.
          </p>
          <p>
            Si vous avez des allergies aux crèmes dépilatoires ou une peau
            sensible, l&apos;épilation à la cire peut être une alternative plus
            apaisante, respectant la santé de votre peau.
          </p>
          <p>
            Contrairement au rasage, l&apos;épilation arrache le poil à la
            racine, ce qui signifie, selon le type de croissance, que vous
            pouvez profiter d&apos;une peau lisse pendant 3 à 5 semaines avant
            une repousse totale. Grâce à une extraction moins fréquente, le
            poil repousse plus fin et plus doux, ce qui évite les poils
            incarnés et les boutons, donc une peau plus saine et plus
            hygiénique.
          </p>
          <p className="pt-1 font-semibold text-foreground">
            Quelques questions que vous vous posez
          </p>
          <p>
            <span className="font-semibold text-foreground">
              Est-ce que l&apos;épilation à la cire fait mal ?
            </span>{" "}
            Oui, je ne vais pas vous le cacher. Mais la douleur, c&apos;est le
            temps du soin ; ensuite vous repartez avec le sourire pour votre
            prochain rendez-vous.
          </p>
          <p>
            Il est conseillé de faire un gommage 48&nbsp;h avant votre
            rendez-vous.
          </p>
          <p>
            <span className="font-semibold text-foreground">
              Est-ce que mes poils repousseront plus épais ?
            </span>{" "}
            Non. Plus vous vous épilez, plus le poil devient doux et plus fin
            (on évite le rasoir ou la crème dépilatoire entre chaque séance).
          </p>
          <p>
            <span className="font-semibold text-foreground">
              Aurais-je des poils incarnés ?
            </span>{" "}
            Après chaque prestation, la peau doit être hydratée après chaque
            bain ; faites un gommage dès que la pousse commence à se voir.
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
