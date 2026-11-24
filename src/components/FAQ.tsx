import { Plus } from "lucide-react";
import type { Faq } from "../data/villa";

export default function FAQ({
  items,
  tone = "dark",
}: {
  items: Faq[];
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className={isLight ? "border-cream/15" : "border-forest/10"}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className={`group border-b ${isLight ? "border-cream/15" : "border-forest/10"}`}
          open={index === 0}
        >
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-[15px] font-medium transition-colors [&::-webkit-details-marker]:hidden ${
              isLight
                ? "text-cream hover:text-gold-light"
                : "text-forest hover:text-gold-dark"
            }`}
          >
            {item.question}
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45 ${
                isLight ? "border-cream/25 text-gold-light" : "border-forest/15 text-gold-dark"
              }`}
              aria-hidden="true"
            >
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p
            className={`max-w-3xl pb-5 pr-10 text-sm leading-relaxed ${
              isLight ? "text-cream/65" : "text-ink/65"
            }`}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
