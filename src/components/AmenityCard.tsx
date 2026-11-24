import type { Amenity } from "../data/amenities";

export default function AmenityCard({ amenity }: { amenity: Amenity }) {
  const Icon = amenity.icon;
  return (
    <div className="group h-full rounded-2xl border border-forest/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/[0.06] text-gold-dark transition-colors group-hover:bg-gold/15">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-medium leading-snug text-forest">{amenity.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{amenity.description}</p>
    </div>
  );
}
