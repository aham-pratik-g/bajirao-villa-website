import { directionsUrl, mapEmbedSrc } from "../data/villa";
import { ExternalLink, Info } from "lucide-react";

export default function MapCard({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-soft ${className}`}>
      <iframe
        title="Bajirao Villa location search on Google Maps"
        src={mapEmbedSrc}
        className="h-[320px] w-full border-0 sm:h-[380px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 border-t border-forest/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-ink/55">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-dark" aria-hidden="true" />
          Map search result. Please confirm the exact pin with the team before travelling.
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-forest transition hover:text-gold-dark"
        >
          Get directions
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
