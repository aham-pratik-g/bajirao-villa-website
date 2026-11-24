import { images } from "./images";

export type EventType = {
  slug: string;
  name: string;
  description: string;
  image: string;
  facilities: string[];
};

/**
 * Only confirmed facilities are mentioned. Decoration, catering, DJ and other
 * event services are deliberately NOT promised.
 */
export const events: EventType[] = [
  {
    slug: "birthday-celebration",
    name: "Birthday Celebrations",
    description:
      "Mark a birthday in a private villa with a pool, a huge lawn and space for the people who matter.",
    image: images.birthday,
    facilities: ["Private pool", "Huge lawn", "Sound system", "Indoor games", "Barbecue on request"],
  },
  {
    slug: "anniversary",
    name: "Anniversary Celebrations",
    description:
      "A quiet, private setting for an anniversary — with the option to stay over with family.",
    image: images.eventsTable,
    facilities: ["Private property", "Poolside setting", "Lawn", "Sound system", "Cook on request"],
  },
  {
    slug: "family-function",
    name: "Family Functions",
    description:
      "Bring the family together with four bedrooms, two dormitories and generous outdoor space.",
    image: images.exterior,
    facilities: ["4BHK accommodation", "2 dormitories", "Huge lawn", "Parking for 6 cars", "Cook on request"],
  },
  {
    slug: "friends-gathering",
    name: "Friends' Gatherings",
    description:
      "A private villa for the group chat reunion — swim, eat, play and stay the night.",
    image: images.poolEvening,
    facilities: ["Private pool", "Indoor games", "Sound system", "Barbecue on request", "Pet-friendly"],
  },
  {
    slug: "corporate-outing",
    name: "Corporate Outings",
    description:
      "Swap the office for a private villa in Karjat, with room for the team to unwind.",
    image: images.exteriorAlt,
    facilities: ["Private villa", "Huge lawn", "Indoor games", "Wi-Fi", "Parking"],
  },
  {
    slug: "office-picnic",
    name: "Office Picnics",
    description:
      "A day out of the city with a pool, lawn and homemade food prepared by the villa cook.",
    image: images.barbecue,
    facilities: ["Private pool", "Lawn", "Cook on request", "Barbecue on request", "Parking"],
  },
  {
    slug: "private-party",
    name: "Private Parties",
    description:
      "Celebrate behind closed gates — your group, your music, your own private space.",
    image: images.celebration,
    facilities: ["Entire private property", "Sound system", "Pool", "Lawn", "Parking"],
  },
  {
    slug: "special-event",
    name: "Special Events",
    description:
      "Planning something different? Share the details and the team will confirm what the villa can host.",
    image: images.pool,
    facilities: ["Private villa", "Lawn and pool", "Sound system", "Accommodation", "Parking"],
  },
];

export const eventServicesNote =
  "Decoration, catering, DJ and other event services are not confirmed as part of the villa booking. Please ask the team on WhatsApp before planning around them.";

export function eventEnquiryMessage(name: string): string {
  return `Hello, I am interested in hosting a ${name} at Bajirao Villa, Karjat. Please share availability, pricing and what is included.`;
}
