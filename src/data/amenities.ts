import {
  BedDouble,
  Car,
  ChefHat,
  Flame,
  Gamepad2,
  Home,
  Music4,
  PawPrint,
  ShowerHead,
  Snowflake,
  SquareParking,
  Trees,
  Tv,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Only confirmed facilities are listed here. Do not add unverified amenities. */
export const amenities: Amenity[] = [
  {
    title: "Fully Furnished Villa",
    description: "A complete private villa with comfortable living and dining spaces.",
    icon: Home,
  },
  {
    title: "Air-Conditioned Bedrooms",
    description: "Four air-conditioned bedrooms for a restful night's sleep.",
    icon: Snowflake,
  },
  {
    title: "Two Dormitories",
    description: "Two separate dormitories, each measuring 16 × 19 feet.",
    icon: BedDouble,
  },
  {
    title: "Private Swimming Pool",
    description: "A swimming pool reserved exclusively for your group.",
    icon: Waves,
  },
  {
    title: "Indoor Games",
    description: "Indoor recreation to keep every age group entertained.",
    icon: Gamepad2,
  },
  {
    title: "Free Wi-Fi",
    description: "Stay connected during your stay at the villa.",
    icon: Wifi,
  },
  {
    title: "Living Room with Smart TV",
    description: "Relax together around a smart TV in the living room.",
    icon: Tv,
  },
  {
    title: "Private Parking for 6 Cars",
    description: "Secure parking inside the property for up to six cars.",
    icon: Car,
  },
  {
    title: "Additional Parking Outside the Gate",
    description: "Extra parking space is available outside the main gate.",
    icon: SquareParking,
  },
  {
    title: "Hot Water Shower",
    description: "Hot water showers for a comfortable stay.",
    icon: ShowerHead,
  },
  {
    title: "Pet-Friendly Property",
    description: "Your pets are welcome at Bajirao Villa.",
    icon: PawPrint,
  },
  {
    title: "Huge Private Lawns",
    description: "Expansive lawns for games, gatherings and celebrations.",
    icon: Trees,
  },
  {
    title: "Barbecue Facility",
    description: "A barbecue facility is available at the property.",
    icon: Flame,
  },
  {
    title: "Sound System",
    description: "A sound system is available for your group.",
    icon: Music4,
  },
  {
    title: "Cook Available",
    description: "A cook can prepare homemade food on request.",
    icon: ChefHat,
  },
];

export const amenitiesNote =
  "Availability and any charges for the cook, barbecue and sound system are confirmed at the time of booking. Please ask the team on WhatsApp.";
