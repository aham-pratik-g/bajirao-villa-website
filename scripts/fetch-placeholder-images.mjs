/**
 * Downloads the placeholder photography used by the site.
 *
 * These are generic, licensed stock photographs (Unsplash License) used ONLY as
 * placeholders. They are NOT photographs of Bajirao Villa. Replace every file in
 * public/images/ with real property photography before publishing.
 *
 * Usage: node scripts/fetch-placeholder-images.mjs
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const SOURCES = {
  "hero-villa": ["1600585154340-be6161a56a0c", 2000],
  "villa-exterior": ["1564013799919-ab600027ffc6", 1600],
  "villa-exterior-2": ["1580587771525-78b9dba3b914", 1600],
  "swimming-pool": ["1572331165267-854da2b10ccc", 1600],
  "pool-evening": ["1571896349842-33c89424de2d", 1600],
  bedroom: ["1505693416388-ac5ce068fe85", 1400],
  "bedroom-2": ["1578683010236-d716f9a3f461", 1400],
  "bedroom-3": ["1615874959474-d609969a20ed", 1400],
  "living-room": ["1616486338812-3dadae4b4ace", 1600],
  "living-room-2": ["1600607687939-ce8a6c25118c", 1600],
  "lawn-garden": ["1585320806297-9794b3e4eeae", 1600],
  "dining-food": ["1546833999-b9f581a1996d", 1400],
  "dining-food-2": ["1585937421612-70a008356fbe", 1400],
  barbecue: ["1555939594-58d7cb561ad1", 1400],
  "birthday-decor": ["1530103862676-de8c9debad1d", 1400],
  "birthday-cake": ["1464349095431-e9a21285b5f3", 1400],
  "indoor-games": ["1609710228159-0fa9bd7c0827", 1400],
  "indoor-games-2": ["1529699211952-734e80c4d42b", 1400],
  "events-table": ["1519225421980-715cb0215aed", 1600],
  "events-celebration": ["1513151233558-d860c5398176", 1400],
};

const outDir = "public/images";
await mkdir(outDir, { recursive: true });

for (const [name, [id, width]] of Object.entries(SOURCES)) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const input = Buffer.from(await res.arrayBuffer());
  const out = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
  await writeFile(`${outDir}/${name}.jpg`, out);
  console.log(`✓ ${name}.jpg (${(out.length / 1024).toFixed(0)} KB)`);
}

console.log("\nPlaceholder images ready. Replace them with real villa photos.");
