/**
 * Central image registry.
 *
 * Every photograph on the site is referenced from here. To use real property
 * photography, replace the files inside `public/images/` and keep the same file
 * names — or update the paths below.
 *
 * Paths are prefixed with `import.meta.env.BASE_URL` so the site also works
 * when published under a subpath (e.g. GitHub Pages), where images resolve
 * relative to the base.
 *
 * IMPORTANT: the images shipped with this project are generic stock placeholders
 * (Unsplash License), not photographs of Bajirao Villa.
 */
const base = import.meta.env.BASE_URL;

export const images = {
  hero: `${base}images/hero-villa.jpg`,
  exterior: `${base}images/villa-exterior.jpg`,
  exteriorAlt: `${base}images/villa-exterior-2.jpg`,
  pool: `${base}images/swimming-pool.jpg`,
  poolEvening: `${base}images/pool-evening.jpg`,
  bedroom: `${base}images/bedroom.jpg`,
  bedroomAlt: `${base}images/bedroom-2.jpg`,
  bedroomThird: `${base}images/bedroom-3.jpg`,
  livingRoom: `${base}images/living-room.jpg`,
  livingRoomAlt: `${base}images/living-room-2.jpg`,
  lawn: `${base}images/lawn-garden.jpg`,
  food: `${base}images/dining-food.jpg`,
  foodAlt: `${base}images/dining-food-2.jpg`,
  barbecue: `${base}images/barbecue.jpg`,
  birthday: `${base}images/birthday-decor.jpg`,
  birthdayCake: `${base}images/birthday-cake.jpg`,
  indoorGames: `${base}images/indoor-games.jpg`,
  indoorGamesAlt: `${base}images/indoor-games-2.jpg`,
  eventsTable: `${base}images/events-table.jpg`,
  celebration: `${base}images/events-celebration.jpg`,
} as const;
