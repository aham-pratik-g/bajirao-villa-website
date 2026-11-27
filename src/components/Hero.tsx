import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business, waLink } from "../data/villa";
import { images } from "../data/images";

const photoBrochure = `${import.meta.env.BASE_URL}documents/bajirao-villa-photo-brochure.pdf`;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-900">
      <img
        src={images.hero}
        alt="Placeholder photograph of a private villa with a pool and lawn at dusk"
        className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/55 to-forest-900/15" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-900/90 to-transparent" />

      <div className="container-x relative pb-44 pt-32 sm:pb-48">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <p className="eyebrow-light">Karjat · Maharashtra</p>
          </div>

          <h1 className="mt-6 text-balance font-display text-[2.9rem] leading-[1.03] text-cream sm:text-6xl lg:text-7xl">
            Your Private Getaway in the Heart of{" "}
            <em className="italic text-gold-light">Karjat</em>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/80 sm:text-lg">
            Experience luxury, privacy and unforgettable celebrations at Bajirao Villa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/about" className="btn btn-gold px-7 py-3.5">
              Explore the Villa
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={photoBrochure}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-7 py-3.5"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View Photo Brochure
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-7 py-3.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-cream/50">
            Managed by {business.managedBy}
          </p>
        </div>
      </div>

      <div className="absolute right-5 top-24 hidden rounded-full bg-black/25 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/65 backdrop-blur-sm sm:block">
        Placeholder imagery
      </div>

      <div className="absolute bottom-10 right-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream/45">Scroll</span>
        <span className="h-14 w-px bg-gradient-to-b from-cream/50 to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
