/**
 * Central image registry.
 *
 * Every photograph on the site is referenced from here. To use real property
 * photography, replace the files inside `public/images/` and keep the same file
 * names — or update the paths below.
 *
 * IMPORTANT: the images shipped with this project are generic stock placeholders
 * (Unsplash License), not photographs of Bajirao Villa.
 */
export const images = {
  hero: "/images/hero-villa.jpg",
  exterior: "/images/villa-exterior.jpg",
  exteriorAlt: "/images/villa-exterior-2.jpg",
  pool: "/images/swimming-pool.jpg",
  poolEvening: "/images/pool-evening.jpg",
  bedroom: "/images/bedroom.jpg",
  bedroomAlt: "/images/bedroom-2.jpg",
  bedroomThird: "/images/bedroom-3.jpg",
  livingRoom: "/images/living-room.jpg",
  livingRoomAlt: "/images/living-room-2.jpg",
  lawn: "/images/lawn-garden.jpg",
  food: "/images/dining-food.jpg",
  foodAlt: "/images/dining-food-2.jpg",
  barbecue: "/images/barbecue.jpg",
  birthday: "/images/birthday-decor.jpg",
  birthdayCake: "/images/birthday-cake.jpg",
  indoorGames: "/images/indoor-games.jpg",
  indoorGamesAlt: "/images/indoor-games-2.jpg",
  eventsTable: "/images/events-table.jpg",
  celebration: "/images/events-celebration.jpg",
} as const;
