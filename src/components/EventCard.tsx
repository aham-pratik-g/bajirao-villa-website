import { ArrowUpRight } from "lucide-react";
import { eventEnquiryMessage, type EventType } from "../data/events";
import { waLink } from "../data/villa";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white transition duration-300 hover:shadow-card">
      <div className="image-zoom relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={`Placeholder photograph representing ${event.name.toLowerCase()} — not an actual photo of Bajirao Villa`}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-sm">
          Placeholder image
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-forest">{event.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{event.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {event.facilities.map((facility) => (
            <li
              key={facility}
              className="rounded-full bg-forest/[0.05] px-2.5 py-1 text-[11px] font-medium text-forest/70"
            >
              {facility}
            </li>
          ))}
        </ul>
        <a
          href={waLink(eventEnquiryMessage(event.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-forest transition-colors hover:text-gold-dark"
        >
          Enquire about this event
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
