import Link from "next/link";
import { getServiceCards } from "../services/pricing-data";

export function ServicesSection() {
  const cards = getServiceCards();

  return (
    <section
      id="services"
      tabIndex={-1}
      className="scroll-mt-24 bg-background px-6 pt-20 pb-12 md:scroll-mt-28 md:pt-28 md:pb-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="services-heading" className="text-center">
          Nos services
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-foreground/80">
          Découvrez nos prestations et tarifs détaillés.
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {cards.map(({ title, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex min-h-[5.5rem] flex-col items-center justify-center border border-foreground/15 bg-background px-5 py-6 text-center transition-colors hover:border-nav-scrolled hover:bg-nav-scrolled/12 md:min-h-[6rem] md:px-6"
              >
                <span className="font-hero text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-nav-scrolled md:text-lg">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/services"
            className="border border-nav-scrolled bg-nav-scrolled/12 px-6 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-nav-scrolled transition-colors hover:border-brand-yellow hover:bg-brand-yellow/15 hover:text-brand-yellow"
          >
            Voir les tarifs
          </Link>
        </div>
      </div>
    </section>
  );
}
