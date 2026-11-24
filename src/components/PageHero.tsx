import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-forest-900 pb-14 pt-32 sm:min-h-[60vh] sm:pb-16">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-forest-900/30" />
      <div className="container-x relative">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream/75 sm:text-base">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
