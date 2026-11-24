/**
 * Generates the placeholder PDF brochures in public/documents/.
 *
 * These documents deliberately contain no invented prices or house rules.
 * Replace the generated files with the owner's final PDFs before publishing.
 *
 * Usage: npm run pdfs
 */
import { mkdir, writeFile } from "node:fs/promises";

const PHONE = "+91 86240 03155";
const WHATSAPP = "+91 98624 00315";
const CONTACT = `Phone ${PHONE}  |  WhatsApp ${WHATSAPP}`;

function escapeText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars) {
      if (line) lines.push(line.trim());
      line = word;
    } else {
      line = `${line} ${word}`;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

function buildPdf({ title, subtitle, blocks }) {
  let body = "";
  let y = 700;

  body += "q 0.082 0.169 0.137 rg 0 742 595 100 re f Q\n";
  body += `BT /F1 25 Tf 1 1 1 rg 1 0 0 1 56 792 Tm (${escapeText(title)}) Tj ET\n`;
  body += `BT /F2 9 Tf 0.76 0.63 0.36 rg 1 0 0 1 56 768 Tm (${escapeText(
    subtitle
  )}) Tj ET\n`;

  for (const block of blocks) {
    if (y < 80) break;
    if (block.type === "h") {
      y -= 14;
      body += `BT /F1 14 Tf 0.082 0.169 0.137 rg 1 0 0 1 56 ${y} Tm (${escapeText(
        block.text
      )}) Tj ET\n`;
      y -= 10;
    } else if (block.type === "small") {
      for (const line of wrap(block.text, 104)) {
        y -= 14;
        body += `BT /F2 8.5 Tf 0.35 0.38 0.35 rg 1 0 0 1 56 ${y} Tm (${escapeText(
          line
        )}) Tj ET\n`;
      }
      y -= 6;
    } else {
      for (const line of wrap(block.text, 92)) {
        y -= 17;
        body += `BT /F2 10.5 Tf 0.16 0.18 0.16 rg 1 0 0 1 56 ${y} Tm (${escapeText(
          line
        )}) Tj ET\n`;
      }
      y -= 4;
    }
  }

  body += `BT /F2 8 Tf 0.45 0.45 0.45 rg 1 0 0 1 56 48 Tm (${escapeText(
    "Placeholder document generated for the website build  |  bajiraovilla.com"
  )}) Tj ET\n`;
  body += "q 0.76 0.63 0.36 RG 0.8 w 56 62 m 539 62 l S Q\n";

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(body, "latin1")} >>\nstream\n${body}endstream`,
  ];

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(pdf, "latin1");
}

const AMENITIES = [
  "Fully furnished villa",
  "Air-conditioned bedrooms (4)",
  "Two dormitories, 16 x 19 feet each",
  "Private swimming pool",
  "Indoor games",
  "Free Wi-Fi",
  "Living room with smart TV",
  "Private parking for up to 6 cars",
  "Additional parking outside the gate",
  "Hot water shower",
  "Pet-friendly property",
  "Huge private lawns",
  "Barbecue facility available",
  "Sound system",
  "Cook available for homemade food",
];

const documents = [
  {
    file: "bajirao-villa-information.pdf",
    title: "Bajirao Villa",
    subtitle: "VILLA INFORMATION  |  KARJAT, MAHARASHTRA",
    blocks: [
      { type: "h", text: "Placeholder document" },
      {
        type: "small",
        text: "This PDF was generated for the website build. It is not the owner's final brochure and contains no invented rates or rules.",
      },
      { type: "h", text: "About the villa" },
      {
        type: "p",
        text: "Bajirao Villa is a fully furnished private 4BHK villa in Karjat, Maharashtra, near Bhivpuri Waterfall. It is managed by A-S Farm & Resort.",
      },
      {
        type: "p",
        text: "The property is an individual private villa, available for weekday and weekend stays. It is suitable for approximately 25-30 guests, with a minimum group requirement of 12-14 people.",
      },
      { type: "h", text: "Accommodation" },
      {
        type: "p",
        text: "Four air-conditioned bedrooms, two dormitories measuring 16 x 19 feet each, a living room with a smart TV, and a fully furnished interior.",
      },
      { type: "h", text: "Facilities" },
      ...AMENITIES.map((item) => ({ type: "p", text: `- ${item}` })),
      { type: "h", text: "Pricing" },
      {
        type: "p",
        text: "Package rates are not published. Please contact the team for current pricing and availability.",
      },
      { type: "small", text: CONTACT },
    ],
  },
  {
    file: "amenities-and-facilities.pdf",
    title: "Amenities",
    subtitle: "CONFIRMED FACILITIES  |  BAJIRAO VILLA, KARJAT",
    blocks: [
      { type: "h", text: "Placeholder document" },
      {
        type: "small",
        text: "Only the facilities listed here are confirmed. Replace this placeholder with the owner's final amenities document before publishing.",
      },
      { type: "h", text: "At the villa" },
      ...AMENITIES.map((item) => ({ type: "p", text: `- ${item}` })),
      { type: "h", text: "Group details" },
      { type: "p", text: "Suitable for approximately 25-30 guests." },
      { type: "p", text: "Minimum group requirement: 12-14 people." },
      { type: "p", text: "Private parking for up to 6 cars, plus additional parking outside the gate." },
      { type: "h", text: "Please note" },
      {
        type: "p",
        text: "Availability and any charges for the cook, barbecue and sound system are confirmed at the time of booking.",
      },
      { type: "small", text: CONTACT },
    ],
  },
  {
    file: "packages-and-pricing.pdf",
    title: "Packages",
    subtitle: "STAY PACKAGES  |  RATES ON REQUEST",
    blocks: [
      { type: "h", text: "Placeholder document" },
      {
        type: "small",
        text: "No prices have been invented. Rates are shared directly by the team on request.",
      },
      { type: "h", text: "Weekday Stay" },
      { type: "p", text: "A quieter midweek escape with the villa, pool and lawn to yourselves." },
      { type: "h", text: "Weekend Stay" },
      { type: "p", text: "A private weekend in Karjat for families and friends." },
      { type: "h", text: "Family Getaway" },
      { type: "p", text: "Four bedrooms, two dormitories and outdoor space for a large family group." },
      { type: "h", text: "Birthday Party Package" },
      { type: "p", text: "Celebrate with a private pool, lawn, indoor games and sound system." },
      { type: "h", text: "Private Celebration Package" },
      { type: "p", text: "Anniversaries and private parties in a fully private villa." },
      { type: "h", text: "Corporate / Office Picnic" },
      { type: "p", text: "A private setting for team outings and office picnics." },
      { type: "h", text: "Special Event Package" },
      { type: "p", text: "Tell us what you have in mind and the team will confirm what is possible." },
      { type: "h", text: "Pricing" },
      { type: "p", text: "Contact for pricing. Rates depend on your dates and group size." },
      { type: "small", text: CONTACT },
    ],
  },
  {
    file: "event-packages.pdf",
    title: "Events",
    subtitle: "CELEBRATIONS  |  BAJIRAO VILLA, KARJAT",
    blocks: [
      { type: "h", text: "Placeholder document" },
      {
        type: "small",
        text: "Decoration, catering, DJ and other event services are not confirmed as part of the villa booking.",
      },
      { type: "h", text: "Occasions" },
      { type: "p", text: "- Birthday celebrations" },
      { type: "p", text: "- Anniversary celebrations" },
      { type: "p", text: "- Family functions" },
      { type: "p", text: "- Friends' gatherings" },
      { type: "p", text: "- Corporate outings" },
      { type: "p", text: "- Office picnics" },
      { type: "p", text: "- Private parties" },
      { type: "p", text: "- Special events" },
      { type: "h", text: "Confirmed facilities" },
      { type: "p", text: "Private swimming pool, huge private lawn, indoor games, sound system, barbecue facility (on request), cook for homemade food (on request), parking for up to 6 cars." },
      { type: "h", text: "Please ask before planning" },
      {
        type: "p",
        text: "Decoration, catering, DJ and other event services are not confirmed. Please speak with the team before planning around them.",
      },
      { type: "small", text: CONTACT },
    ],
  },
  {
    file: "rules-and-regulations.pdf",
    title: "House Rules",
    subtitle: "RULES & REGULATIONS  |  TO BE SUPPLIED BY THE OWNER",
    blocks: [
      { type: "h", text: "This document is intentionally incomplete" },
      {
        type: "p",
        text: "The owner has not supplied the villa's final house rules, check-in and check-out times, cancellation policy or pet policy details.",
      },
      {
        type: "p",
        text: "No rules have been invented for this website. Please replace this placeholder PDF with the owner's final rules before publishing.",
      },
      { type: "h", text: "Until then" },
      {
        type: "p",
        text: "For current house rules and booking terms, please contact the team directly on WhatsApp or by phone.",
      },
      { type: "small", text: CONTACT },
    ],
  },
];

await mkdir("public/documents", { recursive: true });

for (const document of documents) {
  const pdf = buildPdf(document);
  await writeFile(`public/documents/${document.file}`, pdf);
  console.log(`✓ ${document.file} (${(pdf.length / 1024).toFixed(1)} KB)`);
}

console.log("\nPlaceholder PDFs ready in public/documents/.");
