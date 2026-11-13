// Every claim on the site lives here. Each one gets its own page at /claims/<slug>/
// and share cards at /cards/<slug>/{story,post,og}.png, built at deploy time.
//
// Verdicts:
//   CONFIRMED   Rockstar or Take-Two said it, or it is plainly shown in official footage.
//   BUSTED      Official information contradicts it.
//   UNVERIFIED  Not confirmed or ruled out yet. These are the ones we test on launch day.
//
// To change a verdict: edit `verdict`, rewrite `verdictText`, add a source, bump `updated`.

export type Verdict = "CONFIRMED" | "BUSTED" | "UNVERIFIED";

export type Category = "Release" | "Gameplay" | "World" | "Easter eggs" | "Real world";

export type Source = { label: string; url: string };

export type Claim = {
  slug: string;
  /** The claim as people say it, phrased as a statement. */
  claim: string;
  /** Short version for share cards and lists (under ~70 characters). */
  short: string;
  category: Category;
  verdict: Verdict;
  /** One or two sentences: what's true and how we know. */
  verdictText: string;
  /** What players should check on launch day (UNVERIFIED claims). */
  howToTest?: string;
  sources: Source[];
  /** ISO date this verdict was last checked. */
  updated: string;
  /** Shown first on the home page. */
  trending?: boolean;
  /** Links a real-world claim to its comparison page. */
  placeSlug?: string;
};

export const VERDICT_LABEL: Record<Verdict, string> = {
  CONFIRMED: "Confirmed",
  BUSTED: "Busted",
  UNVERIFIED: "Unverified",
};

export const VERDICT_BLURB: Record<Verdict, string> = {
  CONFIRMED: "Rockstar or Take-Two said it, or it's plainly shown in official footage.",
  BUSTED: "Official information contradicts it.",
  UNVERIFIED: "Not confirmed or ruled out yet. We test these on launch day.",
};

export const CATEGORIES: Category[] = ["Release", "Gameplay", "World", "Easter eggs", "Real world"];

const D = "2026-11-12";

export const CLAIMS: Claim[] = [
  // ---------- Release ----------
  {
    slug: "release-date-november-19-2026",
    claim: "GTA 6 comes out on November 19, 2026.",
    short: "GTA 6 comes out November 19, 2026",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar set November 19, 2026 as the release date after moving it from May 26, 2026, and Take-Two repeated it in its August 2026 earnings.",
    sources: [
      { label: "Tom's Guide: GTA 6, everything we know", url: "https://www.tomsguide.com/au/news/gta-6" },
      { label: "Tullahoma News: GTA 6 nears worldwide release", url: "https://www.tullahomanews.com/arts-entertainment/2026/11/12/gta-6-nears-worldwide-release/" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "gta-6-was-delayed-twice",
    claim: "GTA 6 was delayed twice before launch.",
    short: "GTA 6 was delayed twice",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "First Rockstar moved it from fall 2025 to May 26, 2026, then in November 2025 it moved again to November 19, 2026.",
    sources: [
      { label: "Rockstar Newswire: Now coming May 26, 2026", url: "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026" },
      { label: "Tullahoma News: GTA 6 nears worldwide release", url: "https://www.tullahomanews.com/arts-entertainment/2026/11/12/gta-6-nears-worldwide-release/" },
    ],
    updated: D,
  },
  {
    slug: "gta-6-came-out-in-2025",
    claim: "GTA 6 is coming out in 2025.",
    short: "GTA 6 is coming out in 2025",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "The original fall 2025 window slipped twice. The game launches on November 19, 2026.",
    sources: [
      { label: "Rockstar Newswire: Now coming May 26, 2026", url: "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026" },
    ],
    updated: D,
  },
  {
    slug: "ps5-and-xbox-series-only-at-launch",
    claim: "At launch, GTA 6 is only on PS5 and Xbox Series X|S.",
    short: "Launch is PS5 and Xbox Series X|S only",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Rockstar has announced PS5 and Xbox Series X|S only. No other platform has a release date.",
    sources: [
      { label: "IBTimes: Release date, price and platforms", url: "https://www.ibtimes.co.uk/gta-6-release-date-price-storage-console-launch-1831921" },
    ],
    updated: D,
  },
  {
    slug: "gta-6-launches-on-pc",
    claim: "GTA 6 launches on PC on day one.",
    short: "GTA 6 launches on PC on day one",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "There is no PC version on November 19. Rockstar hasn't announced one or given it a date, and past GTAs reached PC months to years later.",
    sources: [
      { label: "IBTimes: Release date, price and platforms", url: "https://www.ibtimes.co.uk/gta-6-release-date-price-storage-console-launch-1831921" },
      { label: "TweakTown: PC news will come from Rockstar, says Take-Two", url: "https://www.tweaktown.com/news/114580/grand-theft-auto-6-pc-and-physical-disc-news-will-come-from-rockstar-confirms-take-two/index.html" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "gta-6-on-ps4-and-xbox-one",
    claim: "GTA 6 is coming to PS4 and Xbox One.",
    short: "GTA 6 is coming to PS4 and Xbox One",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "GTA 6 is made for PS5 and Xbox Series X|S. No last-generation version has been announced.",
    sources: [
      { label: "Gamepressure: Take-Two on Switch 2 and older consoles", url: "https://www.gamepressure.com/newsroom/gta-6-publisher-is-ready-to-fully-support-switch-2-take-two-ceo-d/z5790e" },
    ],
    updated: D,
  },
  {
    slug: "gta-6-on-switch-2-at-launch",
    claim: "GTA 6 launches on Nintendo Switch 2.",
    short: "GTA 6 launches on Switch 2",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "Switch 2 isn't a launch platform. Take-Two's CEO has said the company expects to support Switch 2 in general, but never named GTA 6.",
    sources: [
      { label: "TweakTown: Take-Two commits to Switch 2 support", url: "https://www.tweaktown.com/news/103114/gta-6-publisher-commits-full-support-nintendo-switch-2/index.html" },
      { label: "CGM: The Switch 2 talk is speculation", url: "https://www.cgmagonline.com/news/gta-6-publisher-pledges-switch-2-support" },
    ],
    updated: D,
  },
  {
    slug: "standard-edition-costs-79-99",
    claim: "The standard edition of GTA 6 costs $79.99.",
    short: "Standard edition costs $79.99",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Rockstar priced the Standard Edition at $79.99 and the Ultimate Edition at $99.99 when pre-orders opened in June 2026.",
    sources: [
      { label: "VideoGamer: Rockstar confirms pre-orders and $79.99 price", url: "https://www.videogamer.com/news/gta-vi-pre-orders-price-release-date/" },
      { label: "Dot Esports: $80 base game, $100 Ultimate", url: "https://dotesports.com/gta/news/gta-6-price-confirmed" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "standard-edition-costs-150",
    claim: "GTA 6 costs $150.",
    short: "GTA 6 costs $150",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "The standard edition is $79.99. The most expensive edition Rockstar sells is the $99.99 Ultimate Edition.",
    sources: [
      { label: "VideoGamer: Rockstar confirms $79.99 price", url: "https://www.videogamer.com/news/gta-vi-pre-orders-price-release-date/" },
    ],
    updated: D,
  },
  {
    slug: "physical-copies-have-no-disc",
    claim: "Boxed copies of GTA 6 don't come with a disc.",
    short: "Boxed copies have no disc, just a code",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar confirmed the boxed edition contains a download code, not a disc. Reports disagree on whether a disc version will follow.",
    sources: [
      { label: "VGC: Rockstar confirms no disc version at launch", url: "https://videogameschronicle.com/news/rockstar-confirms-there-will-be-no-disc-version-of-gta6-at-launch/" },
      { label: "Push Square: The physical edition is a code in the box", url: "https://www.pushsquare.com/news/2026/06/gta-6-physical-edition-doesnt-come-with-discs-its-a-code-in-the-box" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "download-is-676-gb",
    claim: "The GTA 6 download is 676 GB.",
    short: "The download is 676 GB",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "PlayStation Store data puts the PS5 download at about 210 GB. Rockstar hasn't published an official size, but nothing supports 676 GB.",
    sources: [
      { label: "GamesRadar: GTA 6 is a 210 GB download", url: "https://gamesradar.com/games/grand-theft-auto/gta-6-is-a-210gb-download-says-playstation-store-sleuth" },
      { label: "HotHardware: Preload guide", url: "https://hothardware.com/news/gta-6-preload-guide-212gb-size-start-times-what-to-know" },
    ],
    updated: D,
  },
  {
    slug: "gta-online-launches-same-day",
    claim: "A new GTA Online launches the same day as GTA 6.",
    short: "New GTA Online launches on day one",
    category: "Release",
    verdict: "UNVERIFIED",
    verdictText:
      "Rockstar is marketing GTA 6 as a single-player game and hasn't announced an online mode or a date for one. Dataminers claim to have found multiplayer code.",
    howToTest: "Check the main menu on November 19 for an online option.",
    sources: [
      { label: "MP1st: GTA 6 marketed as single-player", url: "https://mp1st.com/news/rockstar-wont-talk-about-gta-6-online-game-marketed-as-single-player-experience" },
      { label: "Outlook Respawn: Online plans still under wraps", url: "https://respawn.outlookindia.com/gaming/gaming-news/gta-6-online-plans-remain-under-wraps-ahead-of-november-release" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "vice-city-collectors-edition-box",
    claim: "There's a secret 'Vice City Leonida' Collector's Edition box.",
    short: "There's a secret Collector's Edition",
    category: "Release",
    verdict: "UNVERIFIED",
    verdictText:
      "Photos of a 'Vice City Leonida' box spread in September 2026. Rockstar hasn't confirmed it and only sells Standard and Ultimate editions.",
    howToTest: "Watch Rockstar Newswire and official store listings.",
    sources: [
      { label: "GadgetReview: Alleged box surfaces, Rockstar silent", url: "https://www.gadgetreview.com/alleged-gta-6-collectors-edition-box-surfaces-online-rockstar-silent" },
      { label: "GTA Boom: There is no Collector's Edition", url: "https://www.gtaboom.com/there-is-no-gta-6-collectors-edition-and-thousands-are-searching-for-one-anyway-93ee" },
    ],
    updated: D,
  },

  // ---------- Gameplay ----------
  {
    slug: "two-playable-leads-lucia-and-jason",
    claim: "You play as two leads, Lucia and Jason.",
    short: "You play as Lucia and Jason",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText: "Rockstar's trailers and its August 2026 Extended Look both show Lucia and Jason as the two playable leads.",
    sources: [
      { label: "Business Today: Extended Look story and characters", url: "https://www.businesstoday.in/technology/story/gta-6-extended-look-story-gameplay-characters-everything-fans-need-to-know-551982-2026-08-28" },
    ],
    updated: D,
  },
  {
    slug: "switch-characters-like-gta-5",
    claim: "You can switch between characters like in GTA 5.",
    short: "You can switch characters like GTA 5",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText: "The Extended Look gameplay video shows character switching between Lucia and Jason.",
    sources: [
      { label: "Notebookcheck: Extended gameplay reveal", url: "https://www.notebookcheck.net/GTA-6-extended-gameplay-reveal-shows-off-new-combat-carjacking-gyms-and-much-more.1381015.0.html" },
    ],
    updated: D,
  },
  {
    slug: "six-star-wanted-level",
    claim: "The six-star wanted level is back.",
    short: "The six-star wanted level is back",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText: "The Extended Look shows six wanted stars, up from GTA 5's five.",
    sources: [
      { label: "Keengamer: Extended Look recap", url: "https://www.keengamer.com/articles/news/gta-6-extended-look-recap-all-gameplay-details/" },
      { label: "91mobiles: New details from the Extended Look", url: "https://www.91mobiles.com/gaming/gta-6-extended-look-gameplay-reveal/" },
    ],
    updated: D,
    trending: true,
  },
  {
    slug: "cops-remember-your-outfit",
    claim: "Cops remember what you look like, so changing clothes helps you escape.",
    short: "Changing clothes helps you lose the cops",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText:
      "Official footage shows HUD icons for police knowing your appearance and outfit. How much a change of clothes helps hasn't been shown in detail.",
    howToTest: "Get a wanted level, change clothes in a store, and see whether the outfit icon clears.",
    sources: [
      { label: "allthings.how: Extended Look features", url: "https://allthings.how/gta-6-extended-look-every-feature-revealed-before-the-release/" },
      { label: "GameLuster: Deeper wanted system", url: "https://gameluster.com/?p=136402" },
    ],
    updated: D,
  },
  {
    slug: "slow-motion-aiming-ability",
    claim: "Both Lucia and Jason have a slow-motion aiming ability.",
    short: "Both leads have slow-mo aiming",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText:
      "The Extended Look shows it for both. Jason's highlights enemy weak points, and Lucia's lines up one precise shot.",
    sources: [
      { label: "allthings.how: Gameplay reveal explained", url: "https://allthings.how/gta-6-gameplay-reveal-the-new-features-and-hidden-details-explained/" },
    ],
    updated: D,
  },
  {
    slug: "story-is-80-hours",
    claim: "The GTA 6 story takes 80 hours.",
    short: "The story takes 80 hours",
    category: "Gameplay",
    verdict: "UNVERIFIED",
    verdictText:
      "This comes from one Rockstar North director's playthrough of the story plus some side content. It isn't an official length.",
    howToTest: "We'll track real completion times from players after launch.",
    sources: [
      { label: "TechSpot: 80-hour story, bigger map", url: "https://www.techspot.com/news/113647-gta-6-80-hour-story-3x-bigger-map.html" },
      { label: "Stevivor: How long is GTA 6?", url: "https://stevivor.com/guides/how-long-is-gta-6/" },
    ],
    updated: D,
  },
  {
    slug: "gyms-make-you-stronger",
    claim: "Working out at the gym makes your character visibly stronger.",
    short: "The gym makes you visibly stronger",
    category: "Gameplay",
    verdict: "UNVERIFIED",
    verdictText: "Gyms appear in the Extended Look. Whether workouts change your body or stats hasn't been shown.",
    howToTest: "Train at a gym for a few in-game days and compare screenshots.",
    sources: [
      { label: "Notebookcheck: Extended reveal shows gyms", url: "https://www.notebookcheck.net/GTA-6-extended-gameplay-reveal-shows-off-new-combat-carjacking-gyms-and-much-more.1381015.0.html" },
    ],
    updated: D,
  },
  {
    slug: "you-can-buy-houses",
    claim: "You can buy houses and other property.",
    short: "You can buy houses",
    category: "Gameplay",
    verdict: "UNVERIFIED",
    verdictText: "Rockstar hasn't shown buying property in GTA 6. GTA 5 let you buy businesses and garages, so it's plausible.",
    howToTest: "Look for for-sale signs and a property website on the in-game phone.",
    sources: [],
    updated: D,
  },
  {
    slug: "enter-every-building",
    claim: "You can go inside every building in Vice City.",
    short: "You can enter every building",
    category: "World",
    verdict: "UNVERIFIED",
    verdictText:
      "Rockstar has shown more interiors than ever, but has never said every building can be entered. Every past GTA had locked doors.",
    howToTest: "Walk a block of Ocean Drive and count the doors that open.",
    sources: [
      { label: "80.lv: Detailed look at Vice City", url: "https://80.lv/articles/gta-6-gameplay-reveal-shows-a-shockingly-detailed-look-at-vice-city" },
    ],
    updated: D,
    trending: true,
  },

  // ---------- World ----------
  {
    slug: "set-in-vice-city-leonida",
    claim: "GTA 6 is set in Vice City, inside a fictional state called Leonida.",
    short: "It's set in Vice City, Leonida",
    category: "World",
    verdict: "CONFIRMED",
    verdictText: "Rockstar named Leonida, its version of Florida, as the setting, with Vice City as the main city.",
    sources: [
      { label: "Tom's Guide: GTA 6, everything we know", url: "https://www.tomsguide.com/au/news/gta-6" },
    ],
    updated: D,
  },
  {
    slug: "map-is-twice-gta-5",
    claim: "The GTA 6 map is about twice the size of GTA 5's.",
    short: "The map is about 2x GTA 5",
    category: "World",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar North co-director Rob Nelson told The New York Times the map is about twice GTA 5's and three times Red Dead Redemption 2's.",
    sources: [
      { label: "TweakTown: Map size compared to RDR2 and GTA 5", url: "https://tweaktown.com/news/113321/grand-theft-auto-6-map-size-revealed-and-compared-to-red-dead-redemption-2-and-gta-5" },
      { label: "Dexerto: Story missions won't show you the whole map", url: "https://www.dexerto.com/gta/rockstar-says-gta-6s-map-is-so-big-you-wont-see-it-all-just-by-playing-story-missions-3414118/" },
    ],
    updated: D,
  },
  {
    slug: "map-is-three-times-gta-5",
    claim: "The GTA 6 map is three times bigger than GTA 5's.",
    short: "The map is 3x bigger than GTA 5",
    category: "World",
    verdict: "BUSTED",
    verdictText: "Rockstar's comparison is about 2x GTA 5. The 3x figure is how it compares to Red Dead Redemption 2.",
    sources: [
      { label: "TweakTown: Map size compared to RDR2 and GTA 5", url: "https://tweaktown.com/news/113321/grand-theft-auto-6-map-size-revealed-and-compared-to-red-dead-redemption-2-and-gta-5" },
    ],
    updated: D,
  },
  {
    slug: "alligators-attack-you",
    claim: "Alligators in the Grassrivers swamp can attack and kill you.",
    short: "Alligators can attack and kill you",
    category: "World",
    verdict: "UNVERIFIED",
    verdictText: "Gators appear in Rockstar's trailers. Whether they go after the player hasn't been shown.",
    howToTest: "Take an airboat into the Grassrivers and get out near a gator.",
    sources: [
      { label: "GTABoom: Real-world regions behind Trailer 2", url: "https://www.gtaboom.com/real-world-regions-behind-gta-6-trailer-2-4844" },
    ],
    updated: D,
  },
  {
    slug: "climb-mount-kalaga",
    claim: "You can climb all the way to the top of Mount Kalaga.",
    short: "You can climb to the top of Mount Kalaga",
    category: "World",
    verdict: "UNVERIFIED",
    verdictText: "Mount Kalaga is one of Leonida's named regions. Nothing official shows its summit or a way up.",
    howToTest: "Hike or drive to the highest point and post a screenshot.",
    sources: [
      { label: "GTA Intel: Real Florida inspirations", url: "https://gtaintel.com/news/gta-6-real-florida-inspirations" },
    ],
    updated: D,
  },

  // ---------- Easter eggs ----------
  {
    slug: "bigfoot-in-the-grassrivers",
    claim: "Bigfoot is hidden somewhere in Leonida.",
    short: "Bigfoot is hidden in Leonida",
    category: "Easter eggs",
    verdict: "UNVERIFIED",
    verdictText:
      "Bigfoot hunts ran for years in GTA San Andreas and GTA 5. Nothing official points to one in GTA 6. Yet.",
    howToTest: "Search the swamps and forests at night and in fog. Send us proof.",
    sources: [
      { label: "GTA 6 Times: Leak and rumor tracker", url: "https://gta6times.com/gta-6/leaks" },
    ],
    updated: D,
    trending: true,
  },

  // ---------- Real world ----------
  {
    slug: "cortez-hotel-is-the-colony-hotel",
    claim: "The Cortez Hotel in Vice City is Miami Beach's Colony Hotel.",
    short: "Cortez Hotel is the real Colony Hotel",
    category: "Real world",
    verdict: "CONFIRMED",
    verdictText:
      "The vertical neon sign, the art deco facade and the Ocean Drive setting match the Colony Hotel at 736 Ocean Drive, renamed for Leonida.",
    sources: [
      { label: "GTA Intel: Vice City vs real Miami", url: "https://gtaintel.com/news/gta-6-vice-city-vs-real-miami" },
      { label: "Miami New Times: Miami landmarks in GTA 6", url: "https://www.miaminewtimes.com/arts/interactive-map-20-miami-landmarks-in-gta-6-and-where-to-find-them-22206001" },
    ],
    updated: D,
    placeSlug: "cortez-hotel",
  },
  {
    slug: "beach-towers-are-diamond-condos",
    claim: "Vice City's glowing beach towers are Miami Beach's Green and Blue Diamond condos.",
    short: "The beach towers are the Diamond condos",
    category: "Real world",
    verdict: "UNVERIFIED",
    verdictText:
      "Fans have matched them, but the pointed, lit crowns haven't clearly appeared in official footage yet. We have the real photo; the in-game shot comes at launch.",
    howToTest: "Drive Collins Avenue in-game at night and look for two towers with pointed crowns.",
    sources: [
      { label: "GTA Intel: Vice City vs real Miami", url: "https://gtaintel.com/news/gta-6-vice-city-vs-real-miami" },
    ],
    updated: D,
    placeSlug: "diamond-condos",
  },
];

export function claimBySlug(slug: string): Claim | undefined {
  return CLAIMS.find((c) => c.slug === slug);
}

export function countByVerdict(): Record<Verdict, number> {
  const out: Record<Verdict, number> = { CONFIRMED: 0, BUSTED: 0, UNVERIFIED: 0 };
  for (const c of CLAIMS) out[c.verdict]++;
  return out;
}

export function categorySlug(c: Category): string {
  return c.toLowerCase().replace(/\s+/g, "-");
}
