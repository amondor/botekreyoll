import Image from "next/image";
import { BentoPlaceholder } from "./components/BentoPlaceholder";
import { HeroAnimated } from "./components/HeroAnimated";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-[var(--hero-min-height)] w-full overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <Image
          src="/herojpg.jpg"
          alt="Ambiance lumineuse et chaleureuse de l’institut de beauté"
          fill
          priority
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/38 via-black/5 to-black/20" />
        <div className="relative z-10 flex min-h-[var(--hero-min-height)] flex-col pt-24 text-white md:pt-28">
          <HeroAnimated />
        </div>
      </section>

      <ServicesSection />
      <IntroSection />
      <BentoPlaceholder />
    </>
  );
}
