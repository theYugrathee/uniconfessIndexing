interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
        <h1 className="font-serif mt-4 max-w-2xl text-4xl leading-[1.15] text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
