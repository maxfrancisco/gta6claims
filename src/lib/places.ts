// The site's content. Add a place by adding an object here and pushing to GitHub:
// Cloudflare Pages rebuilds the site automatically.
//
// Photos: put files in /public/photos/<slug>/ and set realImage / gameImage,
// e.g. realImage: "/photos/colony-hotel/real.jpg".
// Use only photos you took yourself and in-game screenshots you captured yourself.

export type Region =
  | "Vice City"
  | "Leonida Keys"
  | "Grassrivers"
  | "Ambrosia"
  | "Port Gellhorn"
  | "Mount Kalaga";

export type MatchType =
  | "Rockstar-named"
  | "Trailer match"
  | "Community match";

export type Place = {
  slug: string;
  game: string; // name in Leonida
  real: string; // real-world place
  where: string; // human-readable area
  region: Region;
  match: MatchType;
  lat: number;
  lng: number;
  blurb: string;
  realImage?: string;
  gameImage?: string;
  realCredit?: string;
};

export const REGIONS: { name: Region; real: string; note: string }[] = [
  { name: "Vice City", real: "Miami", note: "Beaches, art deco, downtown towers and the neighborhoods around them." },
  { name: "Leonida Keys", real: "Florida Keys", note: "The island chain strung along the Overseas Highway." },
  { name: "Grassrivers", real: "The Everglades", note: "Swamp roads, airboats and sawgrass." },
  { name: "Ambrosia", real: "Clewiston and Lake Okeechobee", note: "Sugar country on the south shore of the big lake." },
  { name: "Port Gellhorn", real: "The Panhandle's Forgotten Coast", note: "Quiet Gulf beach towns around Apalachicola." },
  { name: "Mount Kalaga", real: "Southern Appalachians (fan theory)", note: "Florida has no mountains, so fans look north to Georgia." },
];

export const PLACES: Place[] = [
  {
    slug: "ocean-beach",
    game: "Ocean Beach",
    real: "South Beach and Ocean Drive",
    where: "Ocean Dr, Miami Beach",
    region: "Vice City",
    match: "Rockstar-named",
    lat: 25.7807,
    lng: -80.1300,
    blurb: "Pastel hotels, neon at night and a wide strip of white sand. The postcard version of Vice City.",
  },
  {
    slug: "cortez-hotel",
    game: "Cortez Hotel",
    real: "The Colony Hotel",
    where: "736 Ocean Dr, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7781,
    lng: -80.1307,
    blurb: "The blue neon sign over Ocean Drive, renamed for Leonida. Best seen after dark from across the street.",
  },
  {
    slug: "ocean-drive-condos",
    game: "Ocean Drive art deco condos",
    real: "1500 Ocean Drive",
    where: "Ocean Dr, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7868,
    lng: -80.1298,
    blurb: "A pastel art deco block that shows up in the Vice City skyline almost unchanged.",
  },
  {
    slug: "venetian-causeway",
    game: "Venetian causeway and isles",
    real: "Venetian Causeway",
    where: "Venetian Way, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7905,
    lng: -80.1700,
    blurb: "The low bridge hopping between small islands, with the downtown skyline behind it.",
  },
  {
    slug: "diamond-condos",
    game: "Beach condo towers",
    real: "Green and Blue Diamond condos",
    where: "Collins Ave, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.8235,
    lng: -80.1214,
    blurb: "Two glassy towers on Collins Avenue that light up the beach skyline at night.",
  },
  {
    slug: "flamingo-point",
    game: "Bayside tower",
    real: "Flamingo Point",
    where: "1508 Bay Rd, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7869,
    lng: -80.1428,
    blurb: "A long bayfront complex with distinctive stepped balconies.",
  },
  {
    slug: "tresor-tower",
    game: "Penthouse pool balcony",
    real: "Fontainebleau Trésor Tower",
    where: "Collins Ave, Miami Beach",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.8186,
    lng: -80.1225,
    blurb: "A penthouse terrace and pool recreated in the trailer. The tower is visible from the street.",
  },
  {
    slug: "downtown-vice-city",
    game: "Downtown Vice City",
    real: "Downtown Miami and Brickell",
    where: "Downtown Miami",
    region: "Vice City",
    match: "Rockstar-named",
    lat: 25.7663,
    lng: -80.1918,
    blurb: "Glass condo towers along the bay. The skyline is visible from almost everywhere in Leonida.",
  },
  {
    slug: "megamundo-tower",
    game: "Megamundo tower",
    real: "One Biscayne Tower",
    where: "2 S Biscayne Blvd, Miami",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7741,
    lng: -80.1872,
    blurb: "A 1970s office tower with white vertical fins and a tall antenna mast.",
  },
  {
    slug: "museum-park-towers",
    game: "Downtown towers",
    real: "Ten Museum Park and the Grayson Hotel",
    where: "Biscayne Blvd, Miami",
    region: "Vice City",
    match: "Trailer match",
    lat: 25.7838,
    lng: -80.1880,
    blurb: "Two downtown landmarks on Biscayne Boulevard, side by side in both versions.",
  },
  {
    slug: "stockyards",
    game: "Stockyards",
    real: "Wynwood",
    where: "Wynwood, Miami",
    region: "Vice City",
    match: "Community match",
    lat: 25.8010,
    lng: -80.1994,
    blurb: "Warehouses, garages and wall-to-wall murals. Fans have matched in-game murals to real Miami street art.",
  },
  {
    slug: "little-cuba",
    game: "Little Cuba",
    real: "Little Havana",
    where: "SW 8th St (Calle Ocho), Miami",
    region: "Vice City",
    match: "Rockstar-named",
    lat: 25.7656,
    lng: -80.2195,
    blurb: "Bakeries, cafecito windows and the domino park on Calle Ocho.",
  },
  {
    slug: "vcia",
    game: "Vice City International Airport",
    real: "Miami International Airport",
    where: "MIA, Miami",
    region: "Vice City",
    match: "Community match",
    lat: 25.7959,
    lng: -80.2870,
    blurb: "The airport west of downtown, renamed but laid out much the same.",
  },
  {
    slug: "leonida-keys",
    game: "Leonida Keys",
    real: "Florida Keys and the Overseas Highway",
    where: "US-1, Key Largo to Key West",
    region: "Leonida Keys",
    match: "Rockstar-named",
    lat: 24.7062,
    lng: -81.1415,
    blurb: "Long bridges over turquoise water, marinas and boatyards.",
  },
  {
    slug: "grassrivers",
    game: "Grassrivers",
    real: "The Everglades",
    where: "Tamiami Trail and Shark Valley",
    region: "Grassrivers",
    match: "Rockstar-named",
    lat: 25.7575,
    lng: -80.7664,
    blurb: "Sawgrass to the horizon, airboats and two-lane roads through the swamp.",
  },
  {
    slug: "ambrosia",
    game: "Ambrosia",
    real: "Clewiston",
    where: "South shore of Lake Okeechobee",
    region: "Ambrosia",
    match: "Rockstar-named",
    lat: 26.7542,
    lng: -80.9337,
    blurb: "A sugar-mill town surrounded by cane fields. It calls itself America's Sweetest Town.",
  },
  {
    slug: "lake-leonida",
    game: "Lake Leonida",
    real: "Lake Okeechobee",
    where: "Central Florida",
    region: "Ambrosia",
    match: "Community match",
    lat: 26.9500,
    lng: -80.8000,
    blurb: "The huge lake in the middle of the map, in the same spot as the real one.",
  },
  {
    slug: "port-gellhorn",
    game: "Port Gellhorn",
    real: "Apalachicola and the Forgotten Coast",
    where: "Franklin County, FL",
    region: "Port Gellhorn",
    match: "Rockstar-named",
    lat: 29.7258,
    lng: -84.9832,
    blurb: "Sleepy Gulf beach towns far from Miami. Locals up there: send us your photos.",
  },
  {
    slug: "mount-kalaga",
    game: "Mount Kalaga National Park",
    real: "Providence Canyon",
    where: "Stewart County, Georgia",
    region: "Mount Kalaga",
    match: "Community match",
    lat: 32.0679,
    lng: -84.9061,
    blurb: "Fans' best guess for Leonida's mountains: red-clay canyons just over the Georgia line.",
  },
];

export function placeBySlug(slug: string) {
  return PLACES.find((p) => p.slug === slug);
}
