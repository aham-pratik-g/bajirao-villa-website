import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { packageEnquiryMessage, type StayPackage } from "../data/packages";
import { waLink } from "../data/villa";

export default function PackageCard({ pkg }: { pkg: StayPackage }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card ${
        pkg.featured ? "border-gold/60 shadow-soft" : "border-forest/10"
      }`}
    >
      {pkg.featured ? (
        <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-forest-900">
          Most popular
        </span>
      ) : null}

      <h3 className="font-display text-3xl leading-tight text-forest">{pkg.name}</h3>
      <p className="mt-1 text-sm italic text-ink/55">{pkg.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">{pkg.description}</p>

      <div className="mt-5 border-y border-forest/10 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/45">
          Pricing
        </p>
        <p className="mt-1 font-display text-2xl text-gold-dark">Contact for pricing</p>
        <p className="mt-1 text-xs text-ink/50">Rates are shared on request.</p>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink/70">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {pkg.note ? (
        <p className="mt-4 rounded-xl bg-sand/40 p-3 text-xs leading-relaxed text-ink/60">
          {pkg.note}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-2">
        <a
          href={waLink(packageEnquiryMessage(pkg.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp w-full text-[13px]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enquire on WhatsApp
        </a>
        <Link
          to={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className="btn btn-outline w-full text-[13px]"
        >
          Send an enquiry
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
