import { Check, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AmenityCard from "../components/AmenityCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { amenities, amenitiesNote } from "../data/amenities";
import { images } from "../data/images";
import { business, waLink } from "../data/villa";

export default function AmenitiesPage() {
  return (
    <>
      <Seo
        title="Amenities & Facilities | Bajirao Villa, Karjat"
        description="Private swimming pool, air-conditioned bedrooms, two dormitories, Wi-Fi, indoor games, barbecue, sound system, parking and a cook at Bajirao Villa, Karjat."
        path="/amenities"
        image={images.bedroom}
      />

      <PageHero
        image={images.bedroom}
        alt="Placeholder photograph of a villa bedroom"
        eyebrow="Amenities & facilities"
        title="Everything you need to unwind"
        description="Fifteen confirmed facilities for a comfortable, self-contained group stay in Karjat."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="At the villa"
            title="Comfort inside, space outside"
            description="Every facility listed here is confirmed for the property. Anything not listed should be checked with the team before you plan around it."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading eyebrow="Good to know" title="Before you book" />
            <p className="mt-5 text-sm leading-relaxed text-ink/70">{amenitiesNote}</p>
            <a
              href={waLink(
                "Hello, I would like to confirm the amenities and any charges at Bajirao Villa, Karjat."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-7"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Confirm on WhatsApp
            </a>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-forest/10 bg-white p-7 shadow-soft">
              <h3 className="font-display text-2xl text-forest">Group details</h3>
              <ul className="mt-5 space-y-3 text-sm text-ink/70">
                {[
                  `Suitable for approximately ${business.capacity}`,
                  `Minimum group requirement of ${business.minimumGroup}`,
                  "Private parking for up to 6 cars",
                  "Additional parking outside the gate",
                  "Pet-friendly property",
                  "Private swimming pool reserved for your group",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
