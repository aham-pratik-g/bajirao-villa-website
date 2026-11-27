import type { GalleryItem } from "./gallery";

/**
 * Real property photographs supplied by the owner.
 *
 * Files live in `public/images/` and follow the pattern
 * `gallery-<slug>-<number>.jpg`. To add more photos, copy them into that folder
 * and increase the matching `count` below.
 */
type RealPhotoGroup = {
  category: string;
  slug: string;
  title: string;
  alt: string;
  count: number;
};

const groups: RealPhotoGroup[] = [
  {
    category: "Villa Exterior",
    slug: "villa-exterior",
    title: "Villa exterior",
    alt: "Photograph of the Bajirao Villa exterior",
    count: 7,
  },
  {
    category: "Bedrooms",
    slug: "bedroom",
    title: "Bedroom",
    alt: "Photograph of a bedroom at Bajirao Villa",
    count: 4,
  },
  {
    category: "Living Room",
    slug: "living-room",
    title: "Living room",
    alt: "Photograph of the living room at Bajirao Villa",
    count: 4,
  },
  {
    category: "Swimming Pool",
    slug: "swimming-pool",
    title: "Swimming pool",
    alt: "Photograph of the swimming pool at Bajirao Villa",
    count: 4,
  },
  {
    category: "Lawn & Garden",
    slug: "lawn",
    title: "Lawn and garden",
    alt: "Photograph of the lawn and garden at Bajirao Villa",
    count: 2,
  },
  {
    category: "Birthday Decorations",
    slug: "birthday-decor",
    title: "Birthday decoration",
    alt: "Photograph of birthday decorations at Bajirao Villa",
    count: 1,
  },
];

const base = import.meta.env.BASE_URL;

export const realGalleryItems: GalleryItem[] = groups.flatMap((group) =>
  Array.from({ length: group.count }, (_, index) => {
    const number = index + 1;
    return {
      id: `real-${group.slug}-${number}`,
      title: `${group.title} ${number}`,
      category: group.category,
      src: `${base}images/gallery-${group.slug}-${number}.jpg`,
      alt: `${group.alt}, view ${number}.`,
      type: "image" as const,
      realPhoto: true,
    };
  })
);
