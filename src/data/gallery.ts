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
};

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

export const galleryItems: GalleryItem[] = [
  {
    id: "exterior-evening",
    title: "Evening at the villa",
    category: "Villa Exterior",
    src: images.hero,
    alt: `Villa exterior at dusk. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "exterior-day",
    title: "Villa and pool",
    category: "Villa Exterior",
    src: images.exterior,
    alt: `Villa exterior with pool. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "exterior-alt",
    title: "Poolside facade",
    category: "Villa Exterior",
    src: images.exteriorAlt,
    alt: `Villa facade with tropical planting. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "bedroom-main",
    title: "Bedroom",
    category: "Bedrooms",
    src: images.bedroom,
    alt: `Bedroom with upholstered bed. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "bedroom-alt",
    title: "Bedroom with a view",
    category: "Bedrooms",
    src: images.bedroomAlt,
    alt: `Bedroom with large windows. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "bedroom-third",
    title: "Guest bedroom",
    category: "Bedrooms",
    src: images.bedroomThird,
    alt: `Bright guest bedroom. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "living-main",
    title: "Living room",
    category: "Living Room",
    src: images.livingRoom,
    alt: `Living room with sofas and natural light. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "living-alt",
    title: "Lounge and TV",
    category: "Living Room",
    src: images.livingRoomAlt,
    alt: `Lounge area with television. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "pool-day",
    title: "Private pool",
    category: "Swimming Pool",
    src: images.pool,
    alt: `Swimming pool with sun loungers. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "pool-evening",
    title: "Pool at dusk",
    category: "Swimming Pool",
    src: images.poolEvening,
    alt: `Pool and villa in the evening. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "lawn",
    title: "Gardens and lawn",
    category: "Lawn & Garden",
    src: images.lawn,
    alt: `Garden path and lawn. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "games-tt",
    title: "Indoor games",
    category: "Indoor Games",
    src: images.indoorGames,
    alt: `Table tennis equipment. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "games-chess",
    title: "Board games",
    category: "Indoor Games",
    src: images.indoorGamesAlt,
    alt: `Chess board set up for a game. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "food-thali",
    title: "Homemade meal",
    category: "Dining & Food",
    src: images.food,
    alt: `Indian thali served on a steel plate. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "food-curry",
    title: "Cook's special",
    category: "Dining & Food",
    src: images.foodAlt,
    alt: `Home-style curry served in bowls. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "barbecue",
    title: "Barbecue starters",
    category: "Barbecue",
    src: images.barbecue,
    alt: `Grilled skewers on a platter. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "birthday-decor",
    title: "Birthday decorations",
    category: "Birthday Decorations",
    src: images.birthday,
    alt: `Colourful balloons for a celebration. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "birthday-cake",
    title: "Birthday cake",
    category: "Birthday Decorations",
    src: images.birthdayCake,
    alt: `Decorated birthday cake. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "events-table",
    title: "Celebration table",
    category: "Events & Celebrations",
    src: images.eventsTable,
    alt: `Elegant table setting for an event. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "events-confetti",
    title: "Time to celebrate",
    category: "Events & Celebrations",
    src: images.celebration,
    alt: `Confetti in the air at a celebration. ${placeholderAlt}`,
    type: "image",
  },
  {
    id: "video-walkthrough",
    title: "Villa walkthrough",
    category: "Property Videos",
    src: images.exterior,
    alt: "Video placeholder poster showing the villa exterior.",
    type: "video",
    videoSrc: "",
  },
  {
    id: "video-pool",
    title: "Pool and lawn",
    category: "Property Videos",
    src: images.poolEvening,
    alt: "Video placeholder poster showing the pool at dusk.",
    type: "video",
    videoSrc: "",
  },
];
