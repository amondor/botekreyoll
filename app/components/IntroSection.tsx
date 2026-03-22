export function IntroSection() {
  return (
    <section
      className="bg-background px-6 py-24 md:px-10 md:py-32 lg:py-40"
      aria-labelledby="intro-title"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-foreground">
          Offrez-vous une pause
        </p>
        <h2 id="intro-title" className="text-balance">
          Votre lieu secret de beauté
        </h2>
      </div>
    </section>
  );
}
