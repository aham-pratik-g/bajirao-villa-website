import { ArrowUpRight, Car, MapPin, MessageCircle, Mountain, Users } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import MapCard from "../components/MapCard";
import CTASection from "../components/CTASection";
import { images } from "../data/images";
import { business, directionsUrl, mapSearchUrl, waLink } from "../data/villa";

const details = [
  {
    icon: MapPin,
    title: "Address",
    body: "Bajirao Villa, Karjat, Maharashtra. The exact address and location pin are shared by the team on enquiry.",
  },
  {
    icon: Mountain,
    title: "Nearby attraction",
    body: "Bhivpuri Waterfall — ask the team for local guidance before planning a visit during your stay.",
  },
  {
    icon: Car,
    title: "Parking",
    body: "Private parking for up to 6 cars inside the property, with additional parking outside the gate.",
  },
  {
    icon: Users,
    title: "Managed by",
    body: "A-S Farm & Resort. Suitable for approximately 25–30 guests, with a minimum group of 12–14.",
  },
];

export default function LocationPage() {
  return (
    <>
      <Seo
        title="Location & Directions | Bajirao Villa, Karjat"
        description="Bajirao Villa is located in Karjat, Maharashtra, near Bhivpuri Waterfall. Get directions, view the map and contact the team for the exact location pin."
        path="/location"
        image={images.lawn}
      />

      <PageHero
        image={images.lawn}
        alt="Placeholder photograph of the villa's lawn and garden"
        eyebrow="Location & directions"
        title="Find us in Karjat"
        description="A private villa in Karjat, Maharashtra — near Bhivpuri Waterfall and within easy reach of the Western Ghats."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Getting here"
              title="The exact pin comes from the team"
              description="Use the map search to get your bearings, then contact the team for the exact location and directions before you travel."
            />

            <ul className="mt-8 space-y-6">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <li key={detail.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/[0.06] text-gold-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-forest">{detail.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">{detail.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={waLink(
                  "Hello, could you please share the exact location and directions to Bajirao Villa, Karjat?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask for the pin
              </a>
            </div>
          </div>

          <MapCard />
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Nearby"
              title="Bhivpuri Waterfall"
              description="Bajirao Villa is located near Bhivpuri Waterfall in Karjat — a popular spot to explore while you are in the area."
            />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
              Conditions at the waterfall can change with the season. Ask the team for local
              guidance before planning your visit.
            </p>
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              Search the area on Google Maps
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-soft">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-5 divide-y divide-forest/10">
              <div className="flex items-start justify-between gap-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Villa</dt>
                <dd className="text-right text-sm text-forest/85">{business.name}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Location</dt>
                <dd className="text-right text-sm text-forest/85">{business.location}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Nearby</dt>
                <dd className="text-right text-sm text-forest/85">{business.nearby}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Capacity</dt>
                <dd className="text-right text-sm text-forest/85">{business.capacity}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Call</dt>
                <dd className="text-right text-sm text-forest/85">
                  <a href={business.phoneHref} className="hover:text-gold-dark">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
