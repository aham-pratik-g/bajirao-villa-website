import { MessageCircle, Phone } from "lucide-react";
import { business, waLink } from "../data/villa";
import { images } from "../data/images";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      <img
        src={images.poolEvening}
        alt="Placeholder photograph of a villa pool in the evening"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-900/80" />
      <div className="container-x relative py-20 text-center sm:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow-light">Your private escape awaits</p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-[1.1] text-cream sm:text-5xl">
            Make your next escape a private one
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/75">
            Tell us your dates and group size. We will share availability and package
            details on WhatsApp.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold px-7 py-3.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <a href={business.phoneHref} className="btn btn-outline-light px-7 py-3.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-cream/50">
            Minimum group {business.minimumGroup} · Up to {business.capacity}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
