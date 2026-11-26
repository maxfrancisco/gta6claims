// Every claim on the site lives here. Each one gets its own page at /claims/<slug>/
// and share cards at /cards/<slug>/{story,post,og}.png, built at deploy time.
//
// Verdicts:
//   CONFIRMED   Rockstar or Take-Two said it, or it is plainly shown in official footage.
//   BUSTED      Official information contradicts it.
//   UNVERIFIED  Not confirmed or ruled out yet. These are the ones we test in the game.
//
// To change a verdict: edit `verdict`, rewrite `verdictText`, add a source, bump `updated`.

export type Verdict = "CONFIRMED" | "BUSTED" | "UNVERIFIED";

export type Category = "Release" | "Gameplay" | "World" | "Leaks" | "Easter eggs" | "Real world";

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
  /** What players can check in the game to settle it (UNVERIFIED claims). */
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
  UNVERIFIED: "Not confirmed or ruled out yet. We're testing these in the game.",
};

export const CATEGORIES: Category[] = ["Release", "Gameplay", "World", "Leaks", "Easter eggs", "Real world"];

const D = "2026-11-12";
const N = "2026-11-13";
const L = "2026-11-15";
const P = "2026-11-21";
const Q = "2026-11-26";

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
      "GTA 6 launched only on PS5 and Xbox Series X|S. Industry reports point to a PC release in early 2027, but Rockstar hasn't announced one.",
    sources: [
      { label: "IBTimes: Release date, price and platforms", url: "https://www.ibtimes.co.uk/gta-6-release-date-price-storage-console-launch-1831921" },
      { label: "TweakTown: PC news will come from Rockstar, says Take-Two", url: "https://www.tweaktown.com/news/114580/grand-theft-auto-6-pc-and-physical-disc-news-will-come-from-rockstar-confirms-take-two/index.html" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "gta-6-on-ps4-and-xbox-one",
    claim: "GTA 6 is coming to PS4 and Xbox One.",
    short: "GTA 6 is coming to PS4 and Xbox One",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "There's no PS4 or Xbox One version. Xbox One owners can stream GTA 6 through Xbox Cloud Gaming if they buy the game, with streaming time metered by the hour.",
    sources: [
      { label: "Gamepressure: Take-Two on Switch 2 and older consoles", url: "https://www.gamepressure.com/newsroom/gta-6-publisher-is-ready-to-fully-support-switch-2-take-two-ceo-d/z5790e" },
      { label: "Hollywood Reporter: GTA VI is coming to Xbox Cloud Gaming at launch", url: "https://www.hollywoodreporter.com/business/business-news/grand-theft-auto-vi-gta-6-xbox-cloud-gaming-xbox-one-1236751742/" },
    ],
    updated: N,
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
      "Rockstar says GTA 6 needs up to 212 GB of free space. The 676 GB figure was a fake that spread before the real size was known.",
    sources: [
      { label: "GamesRadar: Rockstar confirms GTA 6 is 212 GB", url: "https://gamesradar.com/games/grand-theft-auto/rockstar-confirms-gta-6-is-212gb-pre-loading-opens-earlier-than-previously-announced-for-digital-orders" },
      { label: "HotHardware: Preload guide", url: "https://hothardware.com/news/gta-6-preload-guide-212gb-size-start-times-what-to-know" },
    ],
    updated: N,
  },
  {
    slug: "gta-online-launches-same-day",
    claim: "A new GTA Online launches the same day as GTA 6.",
    short: "New GTA Online launches on day one",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "GTA 6 launched on November 19 as a single-player game with no online mode. Rockstar still hasn't announced one, and reports point to 2027.",
    sources: [
      { label: "PC Gamer: When might GTA 6's multiplayer launch?", url: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-online-multiplayer/" },
      { label: "Vice: GTA 6 PC and Online release dates explained", url: "https://www.vice.com/en/article/gta-6-pc-online-release-date/" },
      { label: "MP1st: GTA 6 marketed as single-player", url: "https://mp1st.com/news/rockstar-wont-talk-about-gta-6-online-game-marketed-as-single-player-experience" },
    ],
    updated: P,
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
    verdict: "BUSTED",
    verdictText: "The main story takes most reviewers around 50 to 60 hours. 80 hours is closer to the story plus a good amount of side content.",
    sources: [
      { label: "Screen Rant: How long GTA 6's main story takes", url: "https://screenrant.com/gta-6-main-story-length-completion/" },
      { label: "Nacionale: Critics finished the story in 50 to 70 hours", url: "https://www.nacionale.com/en/articles/how-long-is-gta-6-to-beat-story-hours-reviews-100-percent-platinum" },
    ],
    updated: P,
  },
  {
    slug: "gyms-make-you-stronger",
    claim: "Working out at the gym makes your character visibly stronger.",
    short: "The gym makes you visibly stronger",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText: "Yes. Working out at Vice City's gyms builds muscle and strength, and food and exercise visibly change Jason's and Lucia's bodies.",
    sources: [
      { label: "PowerPyx: All gym locations", url: "https://www.powerpyx.com/gta-6-all-gym-locations-fitness-centers/" },
      { label: "G2A News: GTA 6 fitness guide", url: "https://www.g2a.com/news/gta-6-news/gta-6-fitness-guide/" },
    ],
    updated: P,
  },
  {
    slug: "you-can-buy-houses",
    claim: "You can buy houses and other property.",
    short: "You can buy houses",
    category: "Gameplay",
    verdict: "BUSTED",
    verdictText: "Not so far. Players have found garages to buy, but no houses or businesses. Safehouses come with the story.",
    sources: [
      { label: "Output Lag: Businesses and property", url: "https://outputlag.com/guides/gta-6-businesses-property/" },
      { label: "GTA Bites: Garages, safehouses and businesses", url: "https://www.gtabites.com/properties" },
    ],
    updated: P,
  },
  {
    slug: "enter-every-building",
    claim: "You can go inside every building in Vice City.",
    short: "You can enter every building",
    category: "World",
    verdict: "BUSTED",
    verdictText: "Not every one. There are hundreds of interiors, far more than GTA 5, from shops and bars to gyms and banks, but plenty of doors stay locked.",
    sources: [
      { label: "MP1st: GTA 6 features hundreds of interiors", url: "https://mp1st.com/news/gta-6-feature-hundreds-interior-spaces-players-can-enter-story-closer-rdr2-than-gta5" },
      { label: "SlashGear: Way more enterable buildings than GTA 5", url: "https://www.slashgear.com/2321396/gta-6-can-enter-more-buildings-than-gta-5/" },
    ],
    updated: P,
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
    verdict: "CONFIRMED",
    verdictText: "You can reach the summit. There's even a BASE jump launching off the cliff edge at the top, the Mount Kalaga Base Jump. No hidden secret up there has been confirmed.",
    sources: [
      { label: "games.gg: How to reach the Mount Kalaga summit", url: "https://games.gg/grand-theft-auto-vi/guides/mount-kalaga-mystery-how-to-reach-summit-grand-theft-auto-6/" },
      { label: "Beebom: Mount Kalaga National Park guide", url: "https://beebom.com/gta-6-mount-kalaga-national-park-guide/" },
    ],
    updated: Q,
  },

  // ---------- Easter eggs ----------
  {
    slug: "bigfoot-in-the-grassrivers",
    claim: "Bigfoot is hidden somewhere in Leonida.",
    short: "Bigfoot is hidden in Leonida",
    category: "Easter eggs",
    verdict: "CONFIRMED",
    verdictText: "Bigfoot is in the game as Leonida's Skunk Ape. Players have found an encounter in the Grassrivers swamps and a side quest to hunt it.",
    sources: [
      { label: "GTABase: How to find the Skunk Ape", url: "https://www.gtabase.com/gta-6/articles/gta-6-bigfoot-location-how-to-find-the-skunk-ape" },
      { label: "Output Lag: Bigfoot, UFOs and more easter eggs", url: "https://outputlag.com/guides/gta-6-easter-eggs/" },
    ],
    updated: P,
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
  // ---------- Added November 13, 2026 from Google Trends rising searches ----------
  {
    slug: "xbox-players-pay-per-hour",
    claim: "On Xbox, you have to pay by the hour to play GTA 6.",
    short: "Xbox players pay by the hour for GTA 6",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "Only cloud streaming is metered by the hour. Buy and download the game on Xbox Series X|S and you can play as long as you like, with no hourly fee or subscription.",
    sources: [
      { label: "Hollywood Reporter: GTA VI is coming to Xbox Cloud Gaming at launch", url: "https://www.hollywoodreporter.com/business/business-news/grand-theft-auto-vi-gta-6-xbox-cloud-gaming-xbox-one-1236751742/" },
      { label: "Windows Central: GTA 6 on Xbox Cloud Gaming has a few catches", url: "https://www.windowscentral.com/gaming/xbox/grand-theft-auto-6-will-be-playable-on-xbox-cloud-gaming-but-there-are-a-few-catches" },
      { label: "TweakTown: 100 hours of GTA 6 streaming would cost about $24", url: "https://www.tweaktown.com/news/114228/xbox-cloud-playtime-pricing-means-100-hours-of-gta-6-streaming-would-cost-just-dollars24/index.html" },
      { label: "Tech Times: Game Pass includes only 5 to 15 cloud hours a month", url: "https://www.techtimes.com/articles/330438/20261110/gta-6-xbox-one-cloud-gaming-starts-november-19-game-pass-includes-only-5-15-hours-monthly.htm" },
      { label: "VideoCardz: Cloud pay-as-you-go pricing revealed", url: "https://videocardz.com/newz/xbox-cloud-gaming-pay-as-you-go-pricing-revealed-3-99-for-10-hours-and-no-game-pass-required" },
    ],
    updated: N,
    trending: true,
  },
  {
    slug: "gta-6-unlocks-at-midnight-local-time",
    claim: "GTA 6 unlocks at midnight local time on November 19.",
    short: "GTA 6 unlocks at midnight local time",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar's support page says midnight local time on November 19 in every region. PlayStation Store listings reportedly use one US time, so the West Coast may start at 9 p.m. on November 18.",
    sources: [
      { label: "Rockstar Support: Regional pre-load and release times", url: "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s" },
      { label: "Forbes: GTA 6 unlocks at midnight on November 19", url: "https://www.forbes.com/sites/brianmazique/2026/11/12/gta-6-unlocks-at-midnight-on-november-19-but-millions-of-americans-can-start-playing-the-night-before/" },
      { label: "Push Square: GTA 6 release times", url: "https://www.pushsquare.com/guides/gta-6-release-times-when-can-you-start-playing" },
    ],
    updated: L,
  },
  {
    slug: "gta-6-got-delayed-again",
    claim: "GTA 6 got delayed again.",
    short: "GTA 6 got delayed a third time",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "No third delay. GTA 6 is still set for November 19, 2026, the date Rockstar announced in November 2025, and Take-Two said it was highly confident in it.",
    sources: [
      { label: "GamesRadar: Rockstar commits to November 2026", url: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-delayed-6-more-months-as-rockstar-commits-to-november-2026-and-says-sorry" },
      { label: "TweakTown: Rockstar delays GTA 6 to November 19, 2026", url: "https://www.tweaktown.com/news/108727/rockstar-officially-delays-gta-6-again-will-now-release-on-november-19-2026/index.html" },
    ],
    updated: N,
  },
  {
    slug: "gta-6-is-already-out",
    claim: "GTA 6 is already out.",
    short: "GTA 6 is already out",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "GTA 6 came out on November 19, 2026, on PS5 and Xbox Series X|S, unlocking at midnight local time. Take-Two says it was the biggest entertainment launch ever.",
    sources: [
      { label: "ABC News: GTA 6 breaks first-day sales records", url: "https://abcnews.com/GMA/Culture/grand-theft-auto-vi-breaks-1st-day-sales-record/story?id=138328412" },
      { label: "Forbes: GTA 6 raked in $3.8 billion on its first day", url: "https://www.forbes.com/sites/antoniopequenoiv/2026/11/20/gta-6-raked-in-38-billion-sales-on-first-day-the-largest-entertainment-launch-ever/" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "gta-6-needs-212-gb",
    claim: "GTA 6 needs 212 GB of free storage.",
    short: "GTA 6 needs 212 GB of storage",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar says the game needs up to 212 GB of free space, depending on the console. Clear room before pre-loading.",
    sources: [
      { label: "GamesRadar: Rockstar confirms GTA 6 is 212 GB", url: "https://gamesradar.com/games/grand-theft-auto/rockstar-confirms-gta-6-is-212gb-pre-loading-opens-earlier-than-previously-announced-for-digital-orders" },
      { label: "TechRadar: Pre-loads need 212 GB free", url: "https://techradar.com/gaming/gta-6-digital-pre-loads-for-ps5-and-xbox-will-begin-9-days-early-and-require-a-whopping-212gb-of-free-space" },
    ],
    updated: N,
    trending: true,
  },
  {
    slug: "gta-6-runs-at-60-fps",
    claim: "GTA 6 runs at 60 fps on PS5 Pro.",
    short: "GTA 6 runs at 60 fps on PS5 Pro",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "There's no 60 fps mode on any console, PS5 Pro included. Every version targets 30 fps, and the Pro gets sharper visuals instead.",
    sources: [
      { label: "GTA Boom: Digital Foundry finds GTA 6 runs best on PS5 Pro", url: "https://www.gtaboom.com/digital-foundry-finds-that-gta-6-indeed-runs-best-on-ps5-pro-b72f" },
      { label: "Push Square: 30 fps target, PS5 Pro features", url: "https://www.pushsquare.com/news/2026/11/gta-6-ps5-pro-features-revealed-30fps-target-on-both-consoles" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "gta-6-looks-best-on-ps5-pro",
    claim: "GTA 6 looks best on PS5 Pro.",
    short: "GTA 6 looks best on PS5 Pro",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Digital Foundry's testing backs it up: the PS5 Pro is the sharpest version and holds closest to a steady 30 fps, with ray-traced shadows the other consoles don't get.",
    sources: [
      { label: "GTA Boom: Digital Foundry finds GTA 6 runs best on PS5 Pro", url: "https://www.gtaboom.com/digital-foundry-finds-that-gta-6-indeed-runs-best-on-ps5-pro-b72f" },
      { label: "Push Square: PS5 Pro features revealed", url: "https://www.pushsquare.com/news/2026/11/gta-6-ps5-pro-features-revealed-30fps-target-on-both-consoles" },
    ],
    updated: P,
  },
  {
    slug: "ultimate-edition-has-extra-story",
    claim: "The GTA 6 Ultimate Edition has extra story missions.",
    short: "Ultimate Edition has extra story",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "The $99.99 Ultimate Edition adds 16 extras like vehicles, weapons, outfits, shops and activities, but the story is the same as the $79.99 Standard Edition.",
    sources: [
      { label: "dlcompare: Standard vs Ultimate compared", url: "https://www.dlcompare.com/gaming-news/gta-6-editions-compared-standard-vs-ultimate-85365" },
      { label: "GTA Boom: What each edition includes", url: "https://www.gtaboom.com/gta-6-locked-in-game-content-what-you-are-missing-and-what-you-are-not-82a4" },
    ],
    updated: N,
    trending: true,
  },
  {
    slug: "there-is-a-deluxe-edition",
    claim: "There's a GTA 6 Deluxe Edition.",
    short: "There's a GTA 6 Deluxe Edition",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "Rockstar sells two editions: Standard at $79.99 and Ultimate at $99.99. There is no Deluxe Edition.",
    sources: [
      { label: "dlcompare: Why there's no Deluxe Edition", url: "https://www.dlcompare.com/gaming-news/gta-6-editions-compared-standard-vs-ultimate-85365" },
    ],
    updated: N,
  },
  {
    slug: "official-gta-6-ps5-controller",
    claim: "There's an official GTA 6 PS5 controller.",
    short: "There's an official GTA 6 PS5 controller",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Sony made two limited-edition GTA VI DualSense controllers, one black and one white. They're cosmetic and ship November 19. There's no GTA-branded Xbox controller.",
    sources: [
      { label: "PlayStation Blog: GTA VI limited-edition DualSense", url: "https://blog.playstation.com/2026/09/03/first-look-at-the-grand-theft-auto-vi-limited-edition-dualsense-wireless-controllers/" },
      { label: "Forbes: One controller is much harder to find", url: "https://www.forbes.com/sites/brianmazique/2026/09/12/gta-6s-limited-edition-ps5-controllers-are-available---but-one-is-much-harder-to-find/" },
    ],
    updated: N,
    trending: true,
  },
  {
    slug: "gta-6-has-crossplay",
    claim: "GTA 6 has crossplay between PS5 and Xbox.",
    short: "GTA 6 has PS5–Xbox crossplay",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "There's no crossplay because there's no multiplayer. GTA 6 launched as a single-player game, and Rockstar hasn't announced an online mode yet.",
    sources: [
      { label: "PC Gamer: When might GTA 6's multiplayer launch?", url: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-online-multiplayer/" },
      { label: "dlcompare: Crossplay and cross-progression explained", url: "https://www.dlcompare.com/gaming-news/is-gta-6-cross-platform-crossplay-and-cross-progression-explained" },
    ],
    updated: P,
  },
  {
    slug: "rockstar-released-the-full-map",
    claim: "Rockstar has released the full GTA 6 map.",
    short: "Rockstar released the full map",
    category: "World",
    verdict: "CONFIRMED",
    verdictText: "It's in the game now. The full map of Leonida shipped with GTA 6 on November 19. Before launch, the detailed maps online were fan-made.",
    sources: [
      { label: "Stevivor: The full GTA 6 map size breakdown", url: "https://stevivor.com/guides/gta-6-map/" },
      { label: "Gfinity: The GTA 6 mapping project", url: "https://www.gfinityesports.com/article/this-gta-6-mapping-project-might-be-the-internets-best-detective-work-yet" },
    ],
    updated: P,
  },
  {
    slug: "reviews-come-out-november-18",
    claim: "GTA 6 reviews come out on November 18.",
    short: "GTA 6 reviews drop November 18",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Reviews went live on the morning of November 18, the day before launch, and pushed GTA 6 to a 99 on Metacritic.",
    sources: [
      { label: "CP24: The reviews are in", url: "https://www.cp24.com/news/entertainment/2026/11/19/was-grand-theft-auto-vi-worth-the-13-year-wait-the-reviews-are-in/" },
      { label: "Digital Trends: GTA 6 opens to roaring critical acclaim", url: "https://digitaltrends.com/gaming/gta-6-opens-to-roaring-critical-acclaim-matching-zeldas-historic-score" },
      { label: "Insider Gaming: GTA 6 review embargo", url: "https://insider-gaming.com/grand-theft-auto-6-review-embargo/" },
    ],
    updated: P,
  },
  {
    slug: "pre-orders-made-1-billion",
    claim: "GTA 6 made $1 billion from pre-orders.",
    short: "GTA 6 made $1 billion from pre-orders",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Easily. Take-Two says GTA 6 sold 32.5 million copies before launch and $3.79 billion in retail sales on day one, the biggest entertainment launch ever.",
    sources: [
      { label: "Take-Two: GTA VI shatters entertainment box office records", url: "https://www.take2games.com/ir/news/grand-theft-auto-vi-shatters-entertainment-box-office-records" },
      { label: "ABC News: GTA 6 breaks first-day sales records", url: "https://abcnews.com/GMA/Culture/grand-theft-auto-vi-breaks-1st-day-sales-record/story?id=138328412" },
    ],
    updated: P,
  },
  {
    slug: "manni-perez-plays-lucia",
    claim: "Manni L. Perez plays Lucia in GTA 6.",
    short: "Manni L. Perez plays Lucia",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText: "The game's credits name Manni L. Perez as Lucia Caminos. Jason Duval is played by Dylan Rourke.",
    sources: [
      { label: "Screen Rant: GTA 6 full cast and voice list", url: "https://screenrant.com/gta-6-cast-voice-actors/" },
      { label: "Nacionale: Credits name Dylan Rourke and Manni L. Perez", url: "https://www.nacionale.com/en/articles/gta-6-voice-actors-who-plays-lucia-jason-manni-l-perez-dylan-rourke-stephen-root" },
    ],
    updated: P,
    trending: true,
  },

  // ---------- Leaks: added November 15, 2026 ----------
  {
    slug: "leaked-first-mission-footage",
    claim: "Leaked footage shows GTA 6's first mission.",
    short: "Leaked footage shows the first mission",
    category: "Leaks",
    verdict: "UNVERIFIED",
    verdictText:
      "No outlet has verified it, and it shows strong signs of being fake. Viewers say the voices are fabricated and the clip appears to be made in GTA 5.",
    howToTest: "Play the opening of the game on November 19 and compare.",
    sources: [
      { label: "Reddit r/gta6_official: 'Everything in the video is fake'", url: "https://www.reddit.com/r/gta6_official/comments/1xwubxp/comment/19so9pznbb874/" },
      { label: "GTA Boom: The viral gameplay leak is almost certainly fake", url: "https://www.gtaboom.com/the-viral-gta-6-gameplay-leak-is-almost-certainly-fake-6c39" },
      { label: "Reddit r/GTA6: Realistic clip fooled viewers", url: "https://www.reddit.com/r/GTA6/comments/1xtrx0p/comment/19shpkb639t8l/" },
    ],
    updated: L,
    trending: true,
  },
  {
    slug: "leaked-full-map-image",
    claim: "A leaked image shows the full GTA 6 map, and Key West isn't on it.",
    short: "Leaked map image shows no Key West",
    category: "Leaks",
    verdict: "UNVERIFIED",
    verdictText:
      "The viral image looks like an AI-upscaled version of a blurry photo, so its details can't be trusted. Rockstar hasn't said whether Key West is in the game.",
    howToTest: "Open the in-game map on November 19 and look at the western end of the Leonida Keys.",
    sources: [
      { label: "Reddit r/GTA6unmoderated: 'An AI upscale of a crummy picture'", url: "https://www.reddit.com/r/GTA6unmoderated/comments/1xwqsli/comment/19soaj3d53r5w/" },
      { label: "Reddit r/GTA: Collector map is based on a theme park-style map", url: "https://www.reddit.com/r/GTA/comments/1xuoz8e/comment/19sjk790uwbok/" },
      { label: "GTA News: Will Key West be in GTA 6?", url: "https://gtanews.fr/en/articles/gta-6-key-west-map-debate-leonida-keys/" },
    ],
    updated: L,
    trending: true,
  },
  {
    slug: "review-copies-locked-down",
    claim: "Rockstar and PlayStation are tightly locking down GTA 6 review copies.",
    short: "Review copies are under tight lockdown",
    category: "Leaks",
    verdict: "BUSTED",
    verdictText: "Reviewers got the game and more than 150 reviews went up on November 18. The flashing-watermark story was disputed by the leaker it was pinned on.",
    sources: [
      { label: "CP24: The reviews are in", url: "https://www.cp24.com/news/entertainment/2026/11/19/was-grand-theft-auto-vi-worth-the-13-year-wait-the-reviews-are-in/" },
      { label: "Pro Gamer: Flashing watermark rumor debunked", url: "https://pro-gamer.gg/gta-6-review-copies-flashing-watermark-rumor-debunked-security-november-18/" },
    ],
    updated: P,
  },
  {
    slug: "leaked-108-artist-list",
    claim: "A leaked list shows all 108 artists on the GTA 6 soundtrack.",
    short: "Leaked list shows 108 soundtrack artists",
    category: "Leaks",
    verdict: "BUSTED",
    verdictText: "Far from complete. The in-game radio has more than 20 stations and hundreds of licensed tracks, well beyond 108 artists.",
    sources: [
      { label: "PC Gamer: Every GTA 6 song and radio station", url: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-radio-songs/" },
      { label: "Consequence: GTA 6 radio stations and full song list", url: "https://consequence.net/2026/11/gta-6-radio-stations-songs-soundtrack/" },
      { label: "Reddit r/JuiceWRLD: 'This ain't the full list'", url: "https://www.reddit.com/r/JuiceWRLD/comments/1xw6toi/comment/19sms1p6mt0wy/" },
    ],
    updated: P,
  },

  // ---------- Launch week: added November 15, 2026 from Google Trends ----------
  {
    slug: "you-can-play-gta-6-early",
    claim: "You can play GTA 6 early.",
    short: "You can play GTA 6 early",
    category: "Release",
    verdict: "BUSTED",
    verdictText:
      "There's no early access. You can pre-load the game now, but it stays locked until midnight local time on November 19 for every edition, Ultimate included.",
    sources: [
      { label: "Rockstar Support: GTA VI Pre-Load FAQ", url: "https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq" },
      { label: "Rockstar Support: Regional pre-load and release times", url: "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s" },
    ],
    updated: L,
  },
  {
    slug: "preload-starts-november-10",
    claim: "GTA 6 pre-loading opened on November 10.",
    short: "GTA 6 pre-loading opened November 10",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Rockstar opened pre-loads on November 10: at midnight local time on PS5, and at midnight GMT worldwide on Xbox, which was the evening of November 9 in the Americas.",
    sources: [
      { label: "Rockstar Support: GTA VI Pre-Load FAQ", url: "https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq" },
      { label: "Keengamer: Preload date and release times guide", url: "https://www.keengamer.com/articles/guides/gta-6-preload-date-and-global-release-times-guide/" },
    ],
    updated: L,
  },
  {
    slug: "gta-6-has-a-day-one-patch",
    claim: "GTA 6 already has a patch before launch.",
    short: "GTA 6 already has a pre-launch patch",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Two updates landed before launch, 1.002 and 1.002.001, without notes. The first post-launch update, 1.002.002 on November 23, came with notes fixing crashes and autosaves.",
    sources: [
      { label: "dlcompare: Two silent updates and a PSN outage", url: "https://www.dlcompare.com/gaming-news/gta-6-day-one-patch-two-silent-updates-and-a-psn-outage" },
      { label: "Vice: GTA 6 day one patch is already rolling out", url: "https://www.vice.com/en/article/gta-6-day-one-patch-ps5-version-1002/" },
    ],
    updated: Q,
  },
  {
    slug: "gta-6-downgraded-on-xbox",
    claim: "GTA 6 is downgraded on Xbox Series S.",
    short: "GTA 6 is downgraded on Xbox Series S",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "On Series S, yes: it renders at 720p, upscaled to 1080p, and often runs in the 20s. Series X matches PS5 at 1440p and runs a little smoother.",
    sources: [
      { label: "GTA Boom: Digital Foundry finds GTA 6 runs best on PS5 Pro", url: "https://www.gtaboom.com/digital-foundry-finds-that-gta-6-indeed-runs-best-on-ps5-pro-b72f" },
      { label: "Windows Forum: PS5 Pro holds 30 fps, Series S struggles", url: "https://windowsforum.com/news/gta-6-console-performance-compared-ps5-pro-holds-30-fps-xbox-series-s-struggles.453173/" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "gta-6-cost-2-billion",
    claim: "GTA 6 cost $2 billion to make.",
    short: "GTA 6 cost $2 billion to make",
    category: "Release",
    verdict: "UNVERIFIED",
    verdictText:
      "Take-Two has never disclosed the budget. Analyst estimates mostly land between $1 billion and $1.5 billion, and the $2 billion figure usually includes marketing.",
    sources: [
      { label: "GameLuster: The $2 billion claim explained", url: "https://gameluster.com/did-gta-6-really-cost-2-billion-to-make-what-the-e/" },
      { label: "GadgetReview: The estimated $1.5 billion budget", url: "https://www.gadgetreview.com/gtas-6s-estimated-1-5-billion-budget-makes-call-of-duty-look-like-a-bargain" },
    ],
    updated: L,
  },
  {
    slug: "preloads-slowing-down-the-internet",
    claim: "GTA 6 pre-loads are slowing down the internet.",
    short: "GTA 6 pre-loads are slowing the internet",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText:
      "Some networks did slow down. UK provider YouFibre told customers GTA 6 downloads overloaded part of its network, and other providers reported record traffic.",
    sources: [
      { label: "Dexerto: GTA 6 is causing internet issues", url: "https://www.dexerto.com/gta/gta-6-is-causing-internet-issues-as-players-rush-to-preload-3427231/" },
      { label: "Tech Times UK: YouFibre network congestion", url: "https://www.techtimes.co.uk/gta-6-preloads-youfibre-network-congestion-yorkshire-1809903" },
      { label: "mxdwn Games: Providers report record traffic", url: "https://games.mxdwn.com/news/gta-6-pre-loads-drive-record-internet-traffic-as-broadband-providers-report-surges/" },
    ],
    updated: L,
  },

  // ---------- Post-launch: added November 21, 2026 ----------
  {
    slug: "gta-6-has-cheat-codes",
    claim: "GTA 6 has cheat codes.",
    short: "GTA 6 has cheat codes",
    category: "Gameplay",
    verdict: "CONFIRMED",
    verdictText:
      "It does: 61 of them. But you unlock each one through challenges after finishing the story, then enter it as a button combo on the phone. There are no phone-number cheats like in GTA 5.",
    sources: [
      { label: "Red Bull: How to unlock all 61 GTA 6 cheats", url: "https://www.redbull.com/us-en/gta-6-cheat-codes" },
      { label: "Insider Gaming: All GTA 6 cheats", url: "https://insider-gaming.com/all-gta-6-cheats-best-grand-theft-auto-6-cheat-codes/" },
      { label: "Vice: All GTA 6 cheat codes for PS5 and Xbox", url: "https://www.vice.com/en/article/gta-6-cheat-codes-list/" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "gta-6-crashed-psn",
    claim: "GTA 6 crashed the PlayStation Network.",
    short: "GTA 6 crashed the PlayStation Network",
    category: "Release",
    verdict: "UNVERIFIED",
    verdictText:
      "PSN did go down for sign-ins on November 18, hours before launch, and Sony confirmed the outage. But Sony never gave a cause or linked it to GTA 6.",
    howToTest: "Watch for a statement from Sony explaining the outage.",
    sources: [
      { label: "Tech Times: PSN sign-in outage preceded GTA 6 unlock", url: "https://www.techtimes.com/articles/331071/20261119/psn-sign-outage-preceded-gta-6-us-unlock-install-required-ps5-update-enable-offline-play.htm" },
      { label: "VGTimes: PSN buckled under the GTA 6 launch rush", url: "https://vgtimes.com/gaming-news/175045-ps5-users-report-playstation-network-errors-as-gta-6-downloads-stall.html" },
      { label: "Cybernews: PlayStation outage hits GTA 6 launch", url: "https://cybernews.com/tech/playstation-outage-gta-6-release/" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "boxed-copies-missing-codes",
    claim: "Some GTA 6 boxed copies came with missing or used codes.",
    short: "Some boxed copies had bad codes",
    category: "Release",
    verdict: "UNVERIFIED",
    verdictText:
      "Players have reported boxes with no code inside or a code that was already redeemed. Neither Rockstar nor Sony has said how widespread it is. The fix is to go back to the retailer.",
    howToTest: "If it happens to you, contact the store you bought it from with your receipt.",
    sources: [
      { label: "EGamers: Launch problems tracked, including faulty box codes", url: "https://egamers.io/gta-6-launch-problems-tracked-ps5-sign-in-errors-faulty-box-codes-and-patch-status/" },
      { label: "VGTimes: Players couldn't sign in or redeem codes", url: "https://vgtimes.com/gaming-news/175045-ps5-users-report-playstation-network-errors-as-gta-6-downloads-stall.html" },
    ],
    updated: P,
  },

  {
    slug: "gta-6-has-first-person-mode",
    claim: "GTA 6 has a first-person mode.",
    short: "GTA 6 has a first-person mode",
    category: "Gameplay",
    verdict: "BUSTED",
    verdictText:
      "There's no first-person mode, unlike GTA 5's re-release. Players found a glitch that fakes one, but Rockstar says the game was built around third-person animation.",
    sources: [
      { label: "Dexerto: Glitch lets players access first-person mode", url: "https://www.dexerto.com/gta/gta-6-glitch-lets-players-access-first-person-mode-3430025/" },
      { label: "FandomWire: The first-person glitch", url: "https://fandomwire.com/gta-6-first-person-glitch-fixes-rockstar-mistake/" },
    ],
    updated: P,
    trending: true,
  },
  {
    slug: "big-patch-november-25",
    claim: "Rockstar promised a big GTA 6 patch on November 25.",
    short: "A big patch is coming November 25",
    category: "Release",
    verdict: "BUSTED",
    verdictText: "The date was wrong. Rockstar released its first post-launch update, 1.002.002, on November 23, two days earlier, fixing crashes, autosaves and more.",
    sources: [
      { label: "Push Square: GTA 6 patch notes", url: "https://www.pushsquare.com/guides/gta-6-patch-notes" },
      { label: "Game Rant: New GTA 6 update patch notes for November 23", url: "https://gamerant.com/new-gta-6-update-patch-notes-november-23-2026/" },
    ],
    updated: Q,
  },
  {
    slug: "crashes-wipe-saves",
    claim: "GTA 6 crashes are wiping players' saves.",
    short: "GTA 6 crashes are wiping saves",
    category: "Release",
    verdict: "CONFIRMED",
    verdictText: "Partly. A launch bug broke autosaves, so crashes could cost hours of progress. Update 1.002.002 on November 23 fixed autosaves and several crashes. Lost progress can't be recovered.",
    sources: [
      { label: "Android Headlines: Update fixes autosave and crashing", url: "https://www.androidheadlines.com/2026/11/gta-6-update-brings-in-fixes-for-autosave-crashing-and-more.html" },
      { label: "Push Square: GTA 6 patch notes", url: "https://www.pushsquare.com/guides/gta-6-patch-notes" },
    ],
    updated: Q,
    trending: true,
  },
  {
    slug: "secret-vice-city-portal",
    claim: "GTA 6 hides a portal back to the original Vice City.",
    short: "There's a secret portal to old Vice City",
    category: "Easter eggs",
    verdict: "CONFIRMED",
    verdictText:
      "A player solved a multi-day riddle that ends in a portal to a PS2-style Vice City, where you get Tommy Vercetti's shirt and motorbike. It's the most elaborate secret found so far.",
    sources: [
      { label: "VGC: One of GTA 6's most elaborate Easter eggs has been solved", url: "https://www.videogameschronicle.com/news/one-of-gta-6s-most-elaborate-easter-eggs-has-been-solved/" },
      { label: "Pure Xbox: GTA 6's most spectacular Easter egg so far", url: "https://www.purexbox.com/news/2026/11/gta-6s-most-spectacular-easter-egg-so-far-has-just-been-discovered" },
    ],
    updated: Q,
    trending: true,
  },
  {
    slug: "literal-easter-egg-radio-tower",
    claim: "GTA 6 has a literal Easter egg on top of a radio tower.",
    short: "There's a literal Easter egg on a tower",
    category: "Easter eggs",
    verdict: "CONFIRMED",
    verdictText:
      "Climb the radio tower in South Vice-Dale County and you'll find a nest of real eggs. Throwing one from the top triggers a secret cutscene.",
    sources: [
      { label: "IBTimes: GTA 6 Easter egg is literally an egg", url: "https://www.ibtimes.co.uk/gta-6-player-discovers-literal-easter-egg-leonida-1833342" },
      { label: "GamingBible: GTA 6 Easter eggs you might have missed", url: "https://www.gamingbible.com/news/gta-6-easter-eggs-778903-20261120" },
    ],
    updated: Q,
    trending: true,
  },
  {
    slug: "arthur-morgan-hat",
    claim: "You can buy Arthur Morgan's hat in GTA 6.",
    short: "You can buy Arthur Morgan's hat",
    category: "Easter eggs",
    verdict: "CONFIRMED",
    verdictText:
      "A yard sale in southern Port Gellhorn sells a $35 'Genuine Cowboy Hat' that matches the Red Dead Redemption 2 hero's, right down to the knot. Guides say it shows up in Chapter 2.",
    sources: [
      { label: "Gfinity: How to find Arthur Morgan's hat", url: "https://www.gfinityesports.com/article/gta-6-how-to-find-arthur-morgans-hat-red-dead-redemption-2-easter-egg" },
      { label: "GamingBible: GTA 6 Easter eggs you might have missed", url: "https://www.gamingbible.com/news/gta-6-easter-eggs-778903-20261120" },
    ],
    updated: Q,
  },
  {
    slug: "secret-vault-radio-station",
    claim: "GTA 6 has a secret radio station you have to unlock.",
    short: "There's a secret radio station to unlock",
    category: "Easter eggs",
    verdict: "CONFIRMED",
    verdictText:
      "Scan the gas-mask poster inside The Vault nightclub in Vice City with the WAiNK phone app, and The Vault radio station unlocks in every vehicle.",
    sources: [
      { label: "Destructoid: How to unlock The Vault radio station", url: "https://www.destructoid.com/how-to-unlock-the-secret-vault-radio-station-in-gta-6/" },
      { label: "Rankedboost: GTA 6 radio stations", url: "https://rankedboost.com/gta/radio-stations/" },
    ],
    updated: Q,
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
