import worldMap from "@/assets/world-map.jpg";

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
        backgroundImage: `linear-gradient(120deg, oklch(0.18 0.06 260 / 0.92), oklch(0.27 0.08 260 / 0.78)), url(${worldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
