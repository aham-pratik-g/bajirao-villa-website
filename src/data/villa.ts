import {
  Home,
  MapPin,
  Trees,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react";

/**
 * Verified business information.
 *
 * The brief supplies one contact number — +91 86240 03155 — used for phone
 * and WhatsApp alike (the wa.me number includes the country code).
 */
export const business = {
  name: "Bajirao Villa",
  managedBy: "A-S Farm & Resort",
  propertyType: "Private furnished 4BHK villa",
  location: "Karjat, Maharashtra",
  nearby: "Bhivpuri Waterfall",
  capacity: "25–30 guests",
  minimumGroup: "12–14 guests",
  phoneDisplay: "+91 86240 03155",
  phoneHref: "tel:+918624003155",
  whatsappDisplay: "+91 86240 03155",
  whatsappNumber: "918624003155",
  siteUrl: "https://www.bajiraovilla.com", // placeholder domain — update before publishing
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello, I am interested in booking Bajirao Villa, Karjat. Please share availability and package details.";

/** Builds a wa.me link with a pre-filled message. */
export function waLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mapEmbedSrc =
  "https://www.google.com/maps?q=Bajirao+Villa+Bhivpuri,+Karjat,+Maharashtra&output=embed";

export const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Bajirao+Villa+Bhivpuri%2C+Karjat%2C+Maharashtra";

export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Bajirao+Villa+Bhivpuri%2C+Karjat%2C+Maharashtra";

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Villa", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Amenities", to: "/amenities" },
  { label: "Packages", to: "/packages" },
  { label: "Events", to: "/events" },
  { label: "Location", to: "/location" },
  { label: "Contact", to: "/contact" },
];

export type Highlight = { icon: LucideIcon; title: string; note: string };

export const highlights: Highlight[] = [
  { icon: Home, title: "Private 4BHK Villa", note: "Fully furnished" },
  { icon: Waves, title: "Private Swimming Pool", note: "Just for your group" },
  { icon: Users, title: "25–30 Guests", note: "Ideal group size" },
  { icon: Trees, title: "Huge Private Lawn", note: "Space to celebrate" },
  { icon: MapPin, title: "Near Bhivpuri Waterfall", note: "Karjat, Maharashtra" },
];

export type QuickFact = { label: string; value: string };

export const quickFacts: QuickFact[] = [
  { label: "Property", value: "Private furnished 4BHK villa" },
  { label: "Capacity", value: "Approximately 25–30 guests" },
  { label: "Minimum group", value: "12–14 guests" },
  { label: "Bedrooms", value: "4 air-conditioned bedrooms" },
  { label: "Dormitories", value: "2 dormitories, 16 × 19 ft each" },
  { label: "Swimming pool", value: "Private pool for your group" },
  { label: "Parking", value: "Up to 6 cars inside + outside the gate" },
  { label: "Pets", value: "Pet-friendly property" },
  { label: "Location", value: "Karjat, near Bhivpuri Waterfall" },
  { label: "Managed by", value: "A-S Farm & Resort" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Where is Bajirao Villa located?",
    answer:
      "Bajirao Villa is a private villa in Karjat, Maharashtra, near Bhivpuri Waterfall. The exact address and directions are shared directly on enquiry — message us on WhatsApp and the team will guide you.",
  },
  {
    question: "How many people can the villa accommodate?",
    answer:
      "The villa is suitable for approximately 25–30 guests.",
  },
  {
    question: "What is the minimum group requirement?",
    answer: "A minimum group of 12–14 people is required for a booking.",
  },
  {
    question: "Are the bedrooms air-conditioned?",
    answer:
      "Yes. Bajirao Villa has four air-conditioned bedrooms, along with two dormitories measuring 16 × 19 feet each.",
  },
  {
    question: "Is the swimming pool private?",
    answer:
      "Yes. The swimming pool is private to the villa and reserved for your group.",
  },
  {
    question: "Is the villa pet-friendly?",
    answer:
      "Yes, Bajirao Villa is a pet-friendly property. Please mention your pet when you enquire so the team can guide you.",
  },
  {
    question: "Is barbecue available?",
    answer:
      "Yes, a barbecue facility is available at the property. Please confirm availability and any charges with the team on WhatsApp.",
  },
  {
    question: "Is a cook available?",
    answer:
      "Yes, a cook is available to prepare homemade food. Please ask about menus and charges when you enquire.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. Private parking is available inside the property for up to six cars, with additional parking outside the gate.",
  },
  {
    question: "Are weekday bookings available?",
    answer:
      "Yes, the villa is available for weekday stays. Contact us on WhatsApp for availability on your preferred dates.",
  },
  {
    question: "Are weekend bookings available?",
    answer:
      "Yes, weekend stays are available. Weekends are popular, so we recommend enquiring early.",
  },
  {
    question: "How can I enquire about pricing?",
    answer:
      "Package rates are shared on request. Call +91 86240 03155 or send us a WhatsApp message with your dates and group size, and we will share the details.",
  },
];

/**
 * Social profiles. Leave `href` empty to hide a link — no placeholder links are
 * rendered. Add the owner's real profile URLs when available.
 */
export type SocialLink = { name: "Instagram" | "Facebook"; href: string };

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "" },
  { name: "Facebook", href: "" },
];

export const galleryPlaceholderNotice =
  "Photos of the villa exterior, bedrooms, living room, swimming pool, lawn and birthday decorations are actual photographs of Bajirao Villa. The remaining images are licensed stock placeholders and will be replaced as more property photos are supplied.";
