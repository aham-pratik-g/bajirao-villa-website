import { ArrowUpRight, Check, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PackageCard from "../components/PackageCard";
import CTASection from "../components/CTASection";
import { packages, packageIncludesNote } from "../data/packages";
import { images } from "../data/images";
import { waLink } from "../data/villa";

const stayIncludes = [
  "Entire private villa for your group",
  "Private swimming pool",
  "Air-conditioned bedrooms and dormitories",
  "Huge private lawn",
  "Indoor games and sound system",
  "Parking for up to 6 cars",
];

export default function PackagesPage() {
  return (
    <>
      <Seo
        title="Packages & Pricing | Bajirao Villa, Karjat"
        description="Weekday stays, weekend getaways, family holidays, birthday and celebration packages at Bajirao Villa, Karjat. Rates are shared on request via WhatsApp."
        path="/packages"
        image={images.pool}
      />

      <PageHero
        image={images.pool}
        alt="Placeholder photograph of a private swimming pool"
        eyebrow="Packages"
        title="Choose the escape that fits"
        description="From quiet weekday stays to birthday celebrations and corporate picnics — every package gives your group the villa to yourselves."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mb-12 grid gap-8 rounded-3xl border border-forest/10 bg-white p-7 shadow-soft sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">
                Rates are shared on request
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
                Actual package rates have not been published on this website. Send us your
                dates and group size on WhatsApp and the team will share the current pricing
                and availability.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={waLink(
                  "Hello, please share the current package rates and availability for Bajirao Villa, Karjat."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask for pricing
              </a>
              <Link to="/contact" className="btn btn-outline">
                Send an enquiry
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink/50">
            {packageIncludesNote}
          </p>
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Included with every stay"
              title="The villa, the pool, the lawn"
              description="Regardless of the package you choose, the essentials of the property stay the same."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {stayIncludes.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-ink/70">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl text-forest">Prefer it in writing?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Download the placeholder brochures for a printable summary of the villa,
              amenities and packages.
            </p>
            <Link to="/brochures" className="link-arrow mt-5">
              Brochures & downloads
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
