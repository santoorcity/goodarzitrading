export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section
      className="relative overflow-hidden bg-[color:var(--navy-deep)] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url('/world-map-gold.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-x py-20 md:py-28">
        <span className="eyebrow">{eyebrow}</span>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
