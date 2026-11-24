import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p className={tone === "light" ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 text-balance font-display text-4xl leading-[1.1] sm:text-5xl ${
          tone === "light" ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            tone === "light" ? "text-cream/70" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
