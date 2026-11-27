import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Play, X } from "lucide-react";
import { galleryItems, type GalleryItem } from "../data/gallery";
import { waLink } from "../data/villa";

type GalleryProps = {
  items?: GalleryItem[];
  showFilters?: boolean;
};

export default function Gallery({ items = galleryItems, showFilters = true }: GalleryProps) {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );

  const filtered = useMemo(
    () => (category === "All" ? items : items.filter((item) => item.category === category)),
    [category, items]
  );

  const current = index !== null ? filtered[index] : undefined;

  const close = useCallback(() => {
    setIndex(null);
    previousFocus.current?.focus();
  }, []);

  const showNext = useCallback(() => {
    setIndex((value) =>
      value === null || filtered.length < 2 ? value : (value + 1) % filtered.length
    );
  }, [filtered.length]);

  const showPrevious = useCallback(() => {
    setIndex((value) =>
      value === null || filtered.length < 2
        ? value
        : (value - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (index === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, close, showNext, showPrevious]);

  const openAt = (position: number) => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    setIndex(position);
  };

  const handleFilter = (value: string) => {
    setCategory(value);
    setIndex(null);
  };

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar" role="group" aria-label="Filter gallery by category">
          {categories.map((value) => {
            const active = value === category;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handleFilter(value)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                  active
                    ? "border-forest bg-forest text-cream"
                    : "border-forest/15 bg-white text-forest/70 hover:border-forest/40 hover:text-forest"
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, position) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openAt(position)}
            aria-haspopup="dialog"
            aria-label={`Open ${item.title} in the gallery viewer`}
            className="group relative block overflow-hidden rounded-2xl bg-forest/5 text-left"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-widest text-gold-light">
                {item.category}
              </p>
              <h3 className="mt-1 font-display text-xl leading-tight text-cream">{item.title}</h3>
            </div>
            {item.type === "video" ? (
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/85 backdrop-blur-sm">
                <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                {item.videoSrc ? "Video" : "Coming soon"}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {current && index !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — gallery viewer`}
          className="fixed inset-0 z-[90] flex flex-col bg-forest-900/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <p className="text-xs uppercase tracking-widest text-cream/60" aria-live="polite">
              {index + 1} / {filtered.length}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close gallery viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 sm:px-16"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = event.changedTouches[0].clientX - touchStartX.current;
              if (delta < -50) showNext();
              if (delta > 50) showPrevious();
              touchStartX.current = null;
            }}
          >
            {filtered.length > 1 ? (
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous item"
                className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur-sm transition hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : null}

            {current.type === "video" ? (
              current.videoSrc ? (
                <video
                  key={current.id}
                  src={current.videoSrc}
                  poster={current.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[72svh] w-full max-w-4xl rounded-xl bg-black"
                >
                  Your browser does not support embedded video.
                </video>
              ) : (
                <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-[55svh] w-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-900/70 p-6 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 bg-cream/10 text-cream">
                      <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-3xl text-cream">
                      Property video coming soon
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70">
                      The owner has not supplied a property video yet. Ask the team for a
                      walkthrough on WhatsApp.
                    </p>
                    <a
                      href={waLink(
                        "Hello, could you please share a video walkthrough of Bajirao Villa, Karjat?"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold mt-6 text-[13px]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Request a walkthrough
                    </a>
                  </div>
                </div>
              )
            ) : (
              <img
                key={current.id}
                src={current.src}
                alt={current.alt}
                draggable={false}
                className="max-h-[72svh] max-w-full select-none rounded-xl object-contain shadow-2xl"
              />
            )}

            {filtered.length > 1 ? (
              <button
                type="button"
                onClick={showNext}
                aria-label="Next item"
                className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur-sm transition hover:bg-white/20 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="border-t border-cream/10 bg-forest-900/80 px-5 py-4 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gold-light">
              {current.type === "video" ? "Property video" : current.category}
            </p>
            <p className="mt-1 font-display text-xl text-cream">{current.title}</p>
            <p className="mt-1 text-[11px] text-cream/45">
              {current.type === "video"
                ? "Video placeholder — real property footage will be added before publishing."
                : current.realPhoto
                  ? "Photograph of Bajirao Villa."
                  : "Placeholder photograph — not an actual photo of Bajirao Villa."}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
