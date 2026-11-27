import { images } from "./images";

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  type: "image" | "video";
  /** Optional. Leave empty for videos that have not been supplied yet. */
  videoSrc?: string;
  /** True for actual property photographs supplied by the owner. */
  realPhoto?: boolean;
};

// Real property photographs supplied by the owner.
// Photos live in `public/images/` as `gallery-<category-slug>-<number>.jpg`.
// The paths use `import.meta.env.BASE_URL` so they resolve correctly under the
// GitHub Pages subpath (e.g. /bajirao-villa-website/).
const realGalleryItems: GalleryItem[] = [
  // Villa Exterior
  {
    id: "real-villa-exterior-1",
    title: "Villa exterior 1",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-1.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 1",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-2",
    title: "Villa exterior 2",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-2.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 2",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-3",
    title: "Villa exterior 3",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-3.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 3",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-4",
    title: "Villa exterior 4",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-4.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 4",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-5",
    title: "Villa exterior 5",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-5.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 5",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-6",
    title: "Villa exterior 6",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-6.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 6",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-villa-exterior-7",
    title: "Villa exterior 7",
    category: "Villa Exterior",
    src: `${import.meta.env.BASE_URL}images/gallery-villa-exterior-7.jpg`,
    alt: "Photograph of the Bajirao Villa exterior, view 7",
    type: "image",
    realPhoto: true,
  },
  // Bedrooms
  {
    id: "real-bedroom-1",
    title: "Bedroom 1",
    category: "Bedrooms",
    src: `${import.meta.env.BASE_URL}images/gallery-bedroom-1.jpg`,
    alt: "Photograph of a bedroom at Bajirao Villa, view 1",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-bedroom-2",
    title: "Bedroom 2",
    category: "Bedrooms",
    src: `${import.meta.env.BASE_URL}images/gallery-bedroom-2.jpg`,
    alt: "Photograph of a bedroom at Bajirao Villa, view 2",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-bedroom-3",
    title: "Bedroom 3",
    category: "Bedrooms",
    src: `${import.meta.env.BASE_URL}images/gallery-bedroom-3.jpg`,
    alt: "Photograph of a bedroom at Bajirao Villa, view 3",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-bedroom-4",
    title: "Bedroom 4",
    category: "Bedrooms",
    src: `${import.meta.env.BASE_URL}images/gallery-bedroom-4.jpg`,
    alt: "Photograph of a bedroom at Bajirao Villa, view 4",
    type: "image",
    realPhoto: true,
  },
  // Living Room
  {
    id: "real-living-room-1",
    title: "Living room 1",
    category: "Living Room",
    src: `${import.meta.env.BASE_URL}images/gallery-living-room-1.jpg`,
    alt: "Photograph of the living room at Bajirao Villa, view 1",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-living-room-2",
    title: "Living room 2",
    category: "Living Room",
    src: `${import.meta.env.BASE_URL}images/gallery-living-room-2.jpg`,
    alt: "Photograph of the living room at Bajirao Villa, view 2",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-living-room-3",
    title: "Living room 3",
    category: "Living Room",
    src: `${import.meta.env.BASE_URL}images/gallery-living-room-3.jpg`,
    alt: "Photograph of the living room at Bajirao Villa, view 3",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-living-room-4",
    title: "Living room 4",
    category: "Living Room",
    src: `${import.meta.env.BASE_URL}images/gallery-living-room-4.jpg`,
    alt: "Photograph of the living room at Bajirao Villa, view 4",
    type: "image",
    realPhoto: true,
  },
  // Swimming Pool
  {
    id: "real-swimming-pool-1",
    title: "Swimming pool 1",
    category: "Swimming Pool",
    src: `${import.meta.env.BASE_URL}images/gallery-swimming-pool-1.jpg`,
    alt: "Photograph of the swimming pool at Bajirao Villa, view 1",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-swimming-pool-2",
    title: "Swimming pool 2",
    category: "Swimming Pool",
    src: `${import.meta.env.BASE_URL}images/gallery-swimming-pool-2.jpg`,
    alt: "Photograph of the swimming pool at Bajirao Villa, view 2",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-swimming-pool-3",
    title: "Swimming pool 3",
    category: "Swimming Pool",
    src: `${import.meta.env.BASE_URL}images/gallery-swimming-pool-3.jpg`,
    alt: "Photograph of the swimming pool at Bajirao Villa, view 3",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-swimming-pool-4",
    title: "Swimming pool 4",
    category: "Swimming Pool",
    src: `${import.meta.env.BASE_URL}images/gallery-swimming-pool-4.jpg`,
    alt: "Photograph of the swimming pool at Bajirao Villa, view 4",
    type: "image",
    realPhoto: true,
  },
  // Lawn & Garden
  {
    id: "real-lawn-1",
    title: "Lawn and garden 1",
    category: "Lawn & Garden",
    src: `${import.meta.env.BASE_URL}images/gallery-lawn-1.jpg`,
    alt: "Photograph of the lawn and garden at Bajirao Villa, view 1",
    type: "image",
    realPhoto: true,
  },
  {
    id: "real-lawn-2",
    title: "Lawn and garden 2",
    category: "Lawn & Garden",
    src: `${import.meta.env.BASE_URL}images/gallery-lawn-2.jpg`,
    alt: "Photograph of the lawn and garden at Bajirao Villa, view 2",
    type: "image",
    realPhoto: true,
  },
  // Birthday Decorations
  {
    id: "real-birthday-decor-1",
    title: "Birthday decoration 1",
    category: "Birthday Decorations",
    src: `${import.meta.env.BASE_URL}images/gallery-birthday-decor-1.jpg`,
    alt: "Photograph of birthday decorations at Bajirao Villa, view 1",
    type: "image",
    realPhoto: true,
  },
];

export const galleryCategories = [
  "Villa Exterior",
  "Bedrooms",
  "Living Room",
  "Swimming Pool",
  "Lawn & Garden",
  "Indoor Games",
  "Dining & Food",
  "Barbecue",
  "Birthday Decorations",
  "Events & Celebrations",
  "Property Videos",
] as const;

const placeholderAlt = "Placeholder stock photograph — not an actual photo of Bajirao Villa.";

export const galleryItems: GalleryItem[] = realGalleryItems;