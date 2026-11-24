import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import FeaturedGallery from "../components/FeaturedGallery";
import AmenityCard from "../components/AmenityCard";
import PackageCard from "../components/PackageCard";
import MapCard from "../components/MapCard";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { images } from "../data/images";
import { amenities } from "../data/amenities";
import { packages } from "../data/packages";
import { business, faqs, waLink } from "../data/villa";

const introFeatures = [
  "Private swimming pool",
  "Air-conditioned bedrooms",
  "Huge private lawn",
  "Cook available on request",
];

const eventTypes = [
  "Birthdays",
  "Anniversaries",
  "Family functions",
  "Friends' gatherings",
  "Corporate outings",
  "Private parties",
];

export default function Home() {
  return (
    <>
      <Seo
        title="Bajirao Villa, Karjat | Private 4BHK Villa with Swimming Pool"
        description="Bajirao Villa is a private furnished 4BHK villa in Karjat, near Bhivpuri Waterfall. Private pool, AC bedrooms, huge lawn and cook on request. Ideal for 25–30 guests."
        path="/"
      />

      <Hero />
      <Highlights />

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={images.exterior}
              alt="Placeholder photograph of a private villa with a pool in Karjat"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[5/6]"
              loading="lazy"
              decoding="async"
            />
            <img
              src={images.pool}
              alt="Placeholder photograph of the villa's private pool"
              className="absolute -bottom-8 -right-3 hidden aspect-square w-44 rounded-2xl border-8 border-cream object-cover shadow-card sm:block lg:w-56"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -left-3 top-6 rounded-2xl bg-forest px-5 py-4 text-cream shadow-card sm:-left-5">
              <p className="font-display text-2xl leading-none">4 BHK</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/60">
                Private villa
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to Bajirao Villa"
              title="A private villa, made for the people you love"
              description="Bajirao Villa is a fully furnished 4BHK private villa in Karjat, near Bhivpuri Waterfall. With a swimming pool, a huge lawn and room for 25–30 guests, it is made for time together."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
              Available for weekday and weekend stays, the villa is an individual private
              property — so the pool, the lawn and the villa belong to your group alone.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {introFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-forest/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/about" className="btn btn-primary">
                Explore the villa
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/packages" className="btn btn-outline">
                View packages
              </Link>
            </div>

            <p className="mt-5 text-xs text-ink/50">
              Minimum group {business.minimumGroup} · Up to {business.capacity}
            </p>
          </div>
        </div>
      </section>

      <FeaturedGallery />

      {/* Amenities preview */}
      <section className="bg-sand/40 py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Amenities & facilities"
              title="Everything you need to unwind"
              description="Fifteen confirmed facilities, from a private pool and air-conditioned bedrooms to a cook who can prepare homemade food."
            />
            <Link to="/amenities" className="link-arrow hidden sm:inline-flex">
              All amenities
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <Reveal className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.slice(0, 6).map((amenity) => (
                <AmenityCard key={amenity.title} amenity={amenity} />
              ))}
            </div>
          </Reveal>

          <Link to="/amenities" className="link-arrow mt-8 sm:hidden">
            View all 15 amenities
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Events preview */}
      <section className="relative overflow-hidden bg-forest-900 py-20 text-cream sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={images.eventsTable}
              alt="Placeholder photograph of an elegant celebration table setting"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={images.birthdayCake}
              alt="Placeholder photograph of a celebration cake"
              className="absolute -bottom-8 right-5 hidden w-2/5 rounded-2xl border-8 border-forest-900 object-cover shadow-card sm:block"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <div>
            <SectionHeading
              tone="light"
              eyebrow="Celebrations & events"
              title="Some moments deserve a private setting"
              description="Birthdays, anniversaries, family functions, friends' get-togethers, corporate outings and office picnics — all in a villa that is exclusively yours."
            />

            <ul className="mt-7 flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <li
                  key={type}
                  className="rounded-full border border-cream/20 px-3.5 py-1.5 text-xs text-cream/75"
                >
                  {type}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/events" className="btn btn-gold">
                Explore events
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={waLink(
                  "Hello, I would like to plan a celebration at Bajirao Villa, Karjat. Please share the details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Plan a celebration
              </a>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-cream/45">
              Decoration, catering and DJ services are not confirmed — please ask before
              planning around them.
            </p>
          </div>
        </div>
      </section>

      {/* Packages preview */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Packages"
              title="A package for every kind of escape"
              description="Weekday stays, weekend getaways, family holidays and celebration packages. Rates are shared on request."
            />
            <Link to="/packages" className="link-arrow hidden sm:inline-flex">
              All packages
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          <Link to="/packages" className="link-arrow mt-8 sm:hidden">
            View all packages
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Location preview */}
      <section className="bg-sand/40 py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Karjat, near Bhivpuri Waterfall"
              description="Bajirao Villa sits in Karjat, Maharashtra — a private base for your group near Bhivpuri Waterfall."
            />
            <ul className="mt-7 space-y-3 text-sm text-ink/70">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                Exact location shared by the team on enquiry
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                Private parking for up to 6 cars, plus outside parking
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                Pet-friendly property
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/location" className="btn btn-primary">
                Location & directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ask for the exact pin
              </a>
            </div>
          </div>
          <MapCard />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="Questions, answered"
              description="Verified answers about the villa. If your question is not here, WhatsApp is the quickest way to get an answer."
            />
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              Ask us on WhatsApp
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
