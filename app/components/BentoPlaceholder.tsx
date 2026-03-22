export function BentoPlaceholder() {
  return (
    <section
      className="border-t border-foreground/8 bg-background px-6 py-20 md:px-10 md:py-28"
      aria-label="À venir"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-foreground/70">
          Prochainement
        </p>
        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 lg:col-span-2 lg:row-span-2 lg:min-h-[280px]" />
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 lg:min-h-[132px]" />
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 lg:min-h-[132px]" />
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 sm:col-span-2 lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
