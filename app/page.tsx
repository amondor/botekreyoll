import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { HeroBackdrop } from "./components/HeroBackdrop";
import { HeroAnimated } from "./components/HeroAnimated";
import { IntroSection } from "./components/IntroSection";
import { SalonShowcaseSection } from "./components/SalonShowcaseSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-[var(--hero-min-height)] w-full overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <HeroBackdrop />
        <div className="relative z-10 flex min-h-[var(--hero-min-height)] flex-col pt-24 text-white md:pt-28">
          <HeroAnimated />
        </div>
      </section>

      <SalonShowcaseSection />
      <ServicesSection />
      <GoogleReviewsSection />
      <IntroSection />
    </>
  );
}
