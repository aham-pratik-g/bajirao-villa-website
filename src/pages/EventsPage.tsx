import { ArrowUpRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import CTASection from "../components/CTASection";
import { events, eventServicesNote } from "../data/events";
import { images } from "../data/images";

const birthdayShots = [
  { src: images.birthday, alt: "Placeholder photograph of birthday balloons", label: "Birthday decorations" },
  { src: images.birthdayCake, alt: "Placeholder photograph of a birthday cake", label: "Cakes and celebrations" },
  { src: images.celebration, alt: "Placeholder photograph of confetti at a celebration", label: "Time to celebrate" },
];

export default function EventsPage() {
  return (
    <>
      <Seo
        title="Birthday Parties & Events | Bajirao Villa, Karjat"
        description="Host birthdays, anniversaries, family functions, friends' gatherings, corporate outings and private parties at a private villa in Karjat with a pool and huge lawn."
        path="/events"
        image={images.eventsTable}
      />

      <PageHero
        image={images.eventsTable}
        alt="Placeholder photograph of an elegant celebration table setting"
        eyebrow="Celebrations & events"
        title="Celebrate somewhere private"
        description="Birthdays, anniversaries, family functions, office picnics and private parties — with the villa and grounds to yourselves."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Occasions"
            title="What would you like to celebrate?"
            description="Each event uses the same private villa, pool and lawn. Tell us what you have in mind and the team will confirm what is possible."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Birthday gallery"
              title="Birthdays by the pool"
              description="A glimpse of the kind of celebration the villa can host. Images are placeholders pending real event photography."
            />
            <Link to="/gallery" className="link-arrow hidden sm:inline-flex">
              View gallery
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {birthdayShots.map((shot) => (
              <Link
                key={shot.src}
                to="/gallery"
                className="group relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-xl text-cream">
                  {shot.label}
                </p>
              </Link>
            ))}
          </div>

          <Link to="/gallery" className="link-arrow mt-6 sm:hidden">
            View full gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-white p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl text-forest">A note on event services</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{eventServicesNote}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
