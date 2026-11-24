import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Send } from "lucide-react";
import {
  business,
  directionsUrl,
  navItems,
  socialLinks,
  waLink,
} from "../data/villa";
import { documents } from "../data/documents";

const socialIcons = {
  Instagram,
  Facebook,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream/70">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.9fr_1.1fr_1.1fr]">
          <div>
            <Link to="/" className="inline-flex flex-col leading-none text-cream">
              <span className="font-display text-2xl tracking-[0.08em]">BAJIRAO VILLA</span>
              <span className="mt-1.5 text-[9px] uppercase tracking-[0.3em] text-cream/55">
                A-S Farm &amp; Resort
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A private furnished 4BHK villa in Karjat, near Bhivpuri Waterfall — with a
              swimming pool, a huge lawn and space for 25–30 guests.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-cream/45">
              Photographs on this site are placeholder stock images, not actual photographs
              of the property.
            </p>

            {socialLinks.some((social) => social.href) ? (
              <div className="mt-6 flex gap-3">
                {socialLinks
                  .filter((social) => social.href)
                  .map((social) => {
                    const Icon = socialIcons[social.name];
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Bajirao Villa on ${social.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-gold hover:text-gold-light"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {business.phoneDisplay}
                    <span className="block text-xs text-cream/45">Call us</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <Send className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    WhatsApp
                    <span className="block text-xs text-cream/45">Fastest response</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {business.location}
                    <span className="block text-xs text-cream/45">Near {business.nearby}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Brochures
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {documents.slice(0, 4).map((document) => (
                <li key={document.href}>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    {document.title} (PDF)
                  </a>
                </li>
              ))}
              <li>
                <Link to="/brochures" className="font-medium text-gold-light hover:text-gold">
                  All downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Managed by {business.managedBy} · Karjat, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
