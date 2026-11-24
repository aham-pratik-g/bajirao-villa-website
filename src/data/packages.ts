export type StayPackage = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
  note?: string;
};

/**
 * Pricing has intentionally NOT been invented. Every package shows
 * "Contact for pricing" until the owner supplies actual rates.
 */
export const packages: StayPackage[] = [
  {
    slug: "weekday-stay",
    name: "Weekday Stay",
    tagline: "Midweek calm, all to yourselves",
    description:
      "A quieter escape for families and friends who would rather have the villa, the pool and the lawn to themselves.",
    bestFor: "Families and friends",
    includes: [
      "Entire private villa for your group",
      "Private swimming pool access",
      "Air-conditioned bedrooms and dormitories",
      "Huge private lawn",
      "Indoor games and sound system",
      "Parking for up to 6 cars",
      "Cook available for homemade food (on request)",
    ],
  },
  {
    slug: "weekend-stay",
    name: "Weekend Stay",
    tagline: "Make the weekend feel longer",
    description:
      "A private weekend in Karjat with a pool, a big lawn and space for everyone — close to Bhivpuri Waterfall.",
    bestFor: "Weekend getaways",
    featured: true,
    includes: [
      "Entire private villa for your group",
      "Private swimming pool access",
      "Air-conditioned bedrooms and dormitories",
      "Huge private lawn and outdoor seating",
      "Indoor games and sound system",
      "Parking for up to 6 cars",
      "Cook available for homemade food (on request)",
    ],
    note: "Weekends fill up early — enquire with your dates.",
  },
  {
    slug: "family-getaway",
    name: "Family Getaway",
    tagline: "Room for the whole family",
    description:
      "Four bedrooms, two dormitories and plenty of outdoor space make Bajirao Villa comfortable for a large family group.",
    bestFor: "Family holidays and reunions",
    includes: [
      "Space for approximately 25–30 guests",
      "Four air-conditioned bedrooms",
      "Two dormitories (16 × 19 ft each)",
      "Private swimming pool",
      "Huge private lawn",
      "Indoor games for all ages",
      "Cook available for homemade food (on request)",
    ],
  },
  {
    slug: "birthday-party",
    name: "Birthday Party Package",
    tagline: "A birthday by the pool",
    description:
      "Celebrate a birthday in a private setting with a pool, lawn and room for family and friends to stay over.",
    bestFor: "Birthdays and milestone celebrations",
    includes: [
      "Private villa and lawn for your celebration",
      "Private swimming pool",
      "Indoor games and sound system",
      "Parking for up to 6 cars",
      "Cook available for homemade food (on request)",
      "Barbecue facility available (on request)",
    ],
    note: "Decoration, catering and DJ services are not confirmed — please ask before planning.",
  },
  {
    slug: "private-celebration",
    name: "Private Celebration Package",
    tagline: "Your occasion, behind closed gates",
    description:
      "Anniversaries, get-togethers and special occasions in a fully private villa with a huge lawn.",
    bestFor: "Anniversaries and private parties",
    includes: [
      "Entire private property",
      "Huge private lawn for your event",
      "Private swimming pool",
      "Sound system available",
      "Indoor games",
      "Parking inside and outside the gate",
      "Cook available for homemade food (on request)",
    ],
    note: "Decoration, catering and DJ services are not confirmed — please ask before planning.",
  },
  {
    slug: "corporate-picnic",
    name: "Corporate / Office Picnic",
    tagline: "A change of scene for the team",
    description:
      "Bring the team to Karjat for an office picnic or corporate outing with space to unwind together.",
    bestFor: "Corporate outings and office picnics",
    includes: [
      "Private villa and grounds",
      "Private swimming pool",
      "Huge lawn for group activities",
      "Indoor games and sound system",
      "Air-conditioned bedrooms and dormitories",
      "Parking for up to 6 cars plus outside parking",
      "Cook available for homemade food (on request)",
    ],
  },
  {
    slug: "special-event",
    name: "Special Event Package",
    tagline: "Plan something worth remembering",
    description:
      "Planning a family function or a special event? Tell us what you have in mind and the team will confirm what is possible at the villa.",
    bestFor: "Family functions and special events",
    includes: [
      "Private villa, lawn and pool",
      "Flexible use of the outdoor spaces",
      "Indoor games and sound system",
      "Air-conditioned accommodation",
      "Parking inside and outside the gate",
      "Cook available for homemade food (on request)",
      "Barbecue facility available (on request)",
    ],
    note: "Event services are confirmed case by case. Nothing beyond the listed facilities is promised.",
  },
];

export const packageIncludesNote =
  "All packages are subject to availability. Rates, inclusions and event services are confirmed directly by the team on WhatsApp.";

export function packageEnquiryMessage(name: string): string {
  return `Hello, I am interested in the ${name} at Bajirao Villa, Karjat. Please share availability, pricing and what is included.`;
}
