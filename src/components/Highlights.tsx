import { highlights } from "../data/villa";
import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <section className="relative z-10 -mt-28 pb-2" aria-label="Villa highlights">
      <div className="container-x">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-7 rounded-3xl border border-forest/5 bg-cream p-6 shadow-card sm:grid-cols-3 sm:p-8 lg:grid-cols-5">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="flex items-start gap-3 last:col-span-2 sm:last:col-span-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/[0.06] text-gold-dark">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-forest">
                      {highlight.title}
                    </p>
                    <p className="mt-1 text-xs text-ink/55">{highlight.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
