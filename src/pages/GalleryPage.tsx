import { Info } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Gallery from "../components/Gallery";
import CTASection from "../components/CTASection";
import { images } from "../data/images";
import { galleryPlaceholderNotice } from "../data/villa";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Photo & Video Gallery | Bajirao Villa, Karjat"
        description="Browse the villa exterior, bedrooms, living room, private pool, lawn, indoor games, dining, barbecue, birthday decorations and event spaces at Bajirao Villa, Karjat."
        path="/gallery"
        image={images.poolEvening}
      />

      <PageHero
        image={images.poolEvening}
        alt="Placeholder photograph of the villa pool at dusk"
        eyebrow="Photo & video gallery"
        title="Step inside Bajirao Villa"
        description="Explore the spaces — from the pool and lawn to the bedrooms, living room and celebration areas."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-gold/30 bg-sand/40 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-ink/65 sm:text-sm">
              {galleryPlaceholderNotice}
            </p>
          </div>

          <Gallery showFilters />
        </div>
      </section>

      <CTASection />
    </>
  );
}
