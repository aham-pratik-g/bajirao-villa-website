import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { images } from "../data/images";
import { quickFacts, waLink } from "../data/villa";

const idealFor = [
  "Family vacations",
  "Friends' get-togethers",
  "Birthday celebrations",
  "Corporate outings",
  "Office picnics",
  "Private parties",
  "Special celebrations",
  "Weekend getaways",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Bajirao Villa | Private 4BHK Villa in Karjat"
        description="Explore Bajirao Villa, a fully furnished private 4BHK villa in Karjat with air-conditioned bedrooms, two dormitories, a private pool and a huge lawn."
        path="/about"
        image={images.exterior}
      />

      <PageHero
        image={images.exterior}
        alt="Placeholder photograph of a private villa with a pool in Karjat"
        eyebrow="About the villa"
        title="A private 4BHK villa, all yours"
        description="Bajirao Villa is a fully furnished private villa in Karjat, Maharashtra, managed by A-S Farm & Resort."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The villa"
              title="Space, privacy and a slower pace"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
              <p>
                Bajirao Villa is a fully furnished 4BHK private villa in Karjat, near
                Bhivpuri Waterfall. It is an individual private property — when you book, the
                villa, the pool and the lawns are for your group alone.
              </p>
              <p>
                Available for weekday and weekend stays, the villa works equally well for a
                family holiday, a friends' get-together, a birthday celebration or a company
                outing. With four air-conditioned bedrooms, two dormitories and generous
                outdoor space, there is room for everyone to settle in.
              </p>
              <p>
                Outside, a private swimming pool and a huge lawn set the pace. Inside, a
                living room with a smart TV, indoor games and Wi-Fi keep the group comfortable.
                A cook can prepare homemade food on request.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/gallery" className="btn btn-primary">
                See the gallery
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-forest/10 bg-white p-7 shadow-soft">
              <h2 className="font-display text-2xl text-forest">At a glance</h2>
              <dl className="mt-5 divide-y divide-forest/10">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-5 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink/45">
                      {fact.label}
                    </dt>
                    <dd className="max-w-[60%] text-right text-sm text-forest/85">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          {[
            { src: images.bedroom, alt: "Placeholder photograph of a bedroom" },
            { src: images.livingRoom, alt: "Placeholder photograph of the living room" },
            { src: images.pool, alt: "Placeholder photograph of the swimming pool" },
          ].map((image, position) => (
            <Reveal key={image.src} delay={position * 80}>
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full rounded-2xl object-cover ${
                  position === 1 ? "aspect-[4/5] sm:aspect-[4/3]" : "aspect-[4/3]"
                }`}
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img
              src={images.bedroomAlt}
              alt="Placeholder photograph of a bedroom with large windows"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={images.bedroomThird}
              alt="Placeholder photograph of a bright guest bedroom"
              className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Accommodation"
              title="Room for everyone"
              description="Four air-conditioned bedrooms and two dormitories give a large group the space to stay together without feeling crowded."
            />
            <ul className="mt-7 space-y-3.5 text-sm text-ink/70">
              {[
                "4 air-conditioned bedrooms",
                "2 dormitories, each measuring 16 × 19 feet",
                "Comfortable for approximately 25–30 guests",
                "Minimum group requirement of 12–14 guests",
                "Living room with a smart TV",
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
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The grounds"
              title="A huge lawn, a private pool, open skies"
              description="The outdoors are the heart of the villa — a private swimming pool and a huge lawn for slow mornings, long lunches and celebrations under the stars."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
              Parking is available inside the property for up to six cars, with additional
              parking outside the gate. The property is pet-friendly, so your four-legged
              family is welcome too.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {["Private pool", "Huge lawn", "Barbecue on request", "Pet-friendly", "Sound system"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-forest/15 px-3.5 py-1.5 text-xs text-forest/70"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>

            <Link to="/amenities" className="link-arrow mt-8">
              Explore all amenities
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <Reveal>
            <img
              src={images.lawn}
              alt="Placeholder photograph of the villa's garden and lawn"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-900 py-20 text-cream sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              tone="light"
              eyebrow="Made for"
              title="Who stays at Bajirao Villa?"
              description="An individual private property in Karjat, suited to groups of 12–14 up to approximately 25–30 guests."
            />
            <ul className="grid grid-cols-2 gap-3">
              {idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-cream/15 px-4 py-3 text-sm text-cream/80"
                >
                  <Check className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
