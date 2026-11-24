export type DocumentItem = {
  title: string;
  description: string;
  href: string;
};

/**
 * These PDFs are generated placeholders. Replace the files in public/documents/
 * with the owner's final documents, keeping the same file names.
 */
export const documents: DocumentItem[] = [
  {
    title: "Villa Information",
    description: "Property overview, accommodation and capacity at a glance.",
    href: `${import.meta.env.BASE_URL}documents/bajirao-villa-information.pdf`,
  },
  {
    title: "Amenities & Facilities",
    description: "The complete list of confirmed facilities at the villa.",
    href: `${import.meta.env.BASE_URL}documents/amenities-and-facilities.pdf`,
  },
  {
    title: "Packages & Pricing",
    description: "Stay packages and enquiry details. Rates are shared on request.",
    href: `${import.meta.env.BASE_URL}documents/packages-and-pricing.pdf`,
  },
  {
    title: "Event Packages",
    description: "Celebrations and events the villa can host.",
    href: `${import.meta.env.BASE_URL}documents/event-packages.pdf`,
  },
  {
    title: "Rules & Regulations",
    description: "House rules. To be finalised with the owner before publishing.",
    href: `${import.meta.env.BASE_URL}documents/rules-and-regulations.pdf`,
  },
];

export const documentsNote =
  "These are placeholder PDFs created for the website build. They contain no invented rates or rules and should be replaced with the owner's final documents before publishing.";
