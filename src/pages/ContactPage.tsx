import { useSearchParams } from "react-router-dom";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import SectionHeading from "../components/SectionHeading";
import FAQ from "../components/FAQ";
import { images } from "../data/images";
import { business, directionsUrl, faqs, waLink } from "../data/villa";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultTopic =
    searchParams.get("package") ?? searchParams.get("event") ?? searchParams.get("topic") ?? "";

  const options = [
    {
      icon: Phone,
      title: "Call us",
      body: business.phoneDisplay,
      note: "Speak to the team directly",
      href: business.phoneHref,
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      body: "Send an enquiry",
      note: business.whatsappDisplay,
      href: waLink(),
      external: true,
    },
    {
      icon: MapPin,
      title: "Visit",
      body: business.location,
      note: "Near Bhivpuri Waterfall",
      href: directionsUrl,
      external: true,
    },
  ];

  return (
    <>
      <Seo
        title="Contact & Booking Enquiry | Bajirao Villa, Karjat"
        description="Enquire about a stay at Bajirao Villa, Karjat. Call +91 86240 03155 or send a WhatsApp enquiry with your dates, group size and event details."
        path="/contact"
        image={images.exterior}
      />

      <PageHero
        image={images.exterior}
        alt="Placeholder photograph of a private villa in Karjat"
        eyebrow="Contact & booking"
        title="Let's plan your stay"
        description="Tell us your dates and group size. WhatsApp is the fastest way to reach the team."
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <a
                key={option.title}
                href={option.href}
                {...(option.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-2xl border border-forest/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/[0.06] text-gold-dark transition group-hover:bg-gold/15">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink/45">
                  {option.title}
                </h2>
                <p className="mt-1 font-display text-xl text-forest">{option.body}</p>
                <p className="mt-1 text-xs text-ink/50">{option.note}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <ContactSection defaultTopic={defaultTopic} />
        </div>
      </section>

      <section className="bg-sand/40 py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Before you book"
              title="A few common questions"
              description="More answers are available on the home page FAQ. For anything else, message us on WhatsApp."
            />
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              Ask a question
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <FAQ items={faqs.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
