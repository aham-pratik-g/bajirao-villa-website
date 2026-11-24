import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems, type GalleryItem } from "../data/gallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const featuredIds = ["exterior-evening", "pool-day", "living-main", "bedroom-main", "lawn"];

export default function FeaturedGallery() {
  const featured = featuredIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter((item): item is GalleryItem => Boolean(item));

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="A closer look"
            title="Life at the villa"
            description="A first look at the spaces your group will have to yourselves. These are placeholder images — real property photography will replace them."
          />
          <Link to="/gallery" className="link-arrow hidden sm:inline-flex">
            View full gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[190px] lg:grid-cols-4">
          {featured.map((item, position) => (
            <Reveal
              key={item.id}
              delay={position * 60}
              className={`h-full ${position === 0 ? "col-span-2 lg:row-span-2" : ""}`}
            >
              <Link
                to="/gallery"
                aria-label={`View ${item.title} in the gallery`}
                className={`group relative block overflow-hidden rounded-2xl bg-forest/5 ${
                  position === 0
                    ? "aspect-[16/10] lg:aspect-auto lg:h-full"
                    : "aspect-square lg:aspect-auto lg:h-full"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-widest text-gold-light">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-tight text-cream sm:text-xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link to="/gallery" className="link-arrow mt-6 sm:hidden">
          View full gallery
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
