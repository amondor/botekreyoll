import type { Metadata } from "next";
import { ServicesPriceList } from "../components/ServicesPriceList";
import { PRICING_COLUMNS } from "./pricing-data";

export const metadata: Metadata = {
  title: "Services & tarifs — Boté Kréyol",
  description:
    "Tarifs des soins de l’institut de beauté à Saint-François, Guadeloupe : épilations, soins visage et corps, modelages.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h1 className="mb-12 text-center font-hero text-2xl font-semibold tracking-tight text-foreground md:mb-14 md:text-3xl">
          Tarifs
        </h1>
        <ServicesPriceList columns={PRICING_COLUMNS} />
        <p className="mt-16 text-center text-sm tracking-wide text-foreground/75 md:mt-20 md:text-base">
          Follow:{" "}
          <a
            href="https://www.instagram.com/botekreyoll/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
          >
            @botekreyoll
          </a>
        </p>
      </div>
    </main>
  );
}
