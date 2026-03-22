import Link from "next/link";

export function ServicesSection() {
  return (
    <section
      id="services"
      tabIndex={-1}
      className="scroll-mt-24 bg-background px-6 pt-20 pb-6 md:scroll-mt-28 md:pt-28 md:pb-10"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="text-center">
        Nos services
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-foreground/80">
        Découvrez nos prestations et tarifs détaillés.
      </p>
      <div className="mt-8 flex justify-center">
        <Link
          href="/services"
          className="border border-foreground/20 px-6 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Voir les tarifs
        </Link>
      </div>
    </section>
  );
}
