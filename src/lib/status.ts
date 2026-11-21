// Everything on /status/ lives here. Update this file when something changes:
// bump STATUS.updated, change the headline, add a patch or an issue, push.

export type StatusLevel = "OK" | "ISSUES" | "OUTAGE";
export type IssueState = "FIXED" | "WORKAROUND" | "INVESTIGATING" | "NOT_FIXED";
export type Source = { label: string; url: string };

export const STATUS: {
  level: StatusLevel;
  headline: string;
  detail: string;
  /** ISO date-time of the last check, Eastern time. */
  updated: string;
} = {
  level: "ISSUES",
  headline: "Some players report crashes that lost progress. No fix from Rockstar yet.",
  detail:
    "There's no online mode, so there are no GTA 6 servers to go down. On day three, some PS5 and Xbox players report crashes that cost them hours of progress; Rockstar hasn't confirmed it or released a fix. Boxed copies with bad codes and weak Xbox Series S performance are still open, and the November 18 PSN outage is fixed.",
  updated: "2026-11-21T18:00:00-05:00",
};

export const STATUS_LABEL: Record<StatusLevel, string> = {
  OK: "No known problems",
  ISSUES: "Some problems reported",
  OUTAGE: "Major outage",
};

/** Official places to check when something breaks. */
export const CHECK_LINKS: { label: string; url: string; what: string }[] = [
  { label: "Rockstar Games Service Status", url: "https://support.rockstargames.com/servicestatus", what: "Rockstar's own servers and online services" },
  { label: "PlayStation Network Status", url: "https://status.playstation.com/", what: "PSN sign-in, store and downloads" },
  { label: "Xbox Status", url: "https://support.xbox.com/xbox-live-status", what: "Xbox network, store, downloads and Cloud Gaming" },
];

export const TIMELINE: { date: string; dateLabel?: string; label: string; detail: string; done: boolean }[] = [
  { date: "2026-11-10", label: "Pre-loads opened", detail: "PS5 at midnight local time. Xbox at midnight GMT (7 p.m. Eastern on Nov 9).", done: true },
  { date: "2026-11-13", label: "Update 1.002 rolled out", detail: "About 1.07 GB on PS5 and about 2.18 GB on Xbox. No patch notes.", done: true },
  { date: "2026-11-16", label: "Update 1.002.001 rolled out", detail: "Second pre-launch update. No patch notes.", done: true },
  { date: "2026-11-18", label: "Reviews went live, PSN sign-in outage", detail: "More than 150 reviews and a 99 on Metacritic. PSN sign-ins failed for some hours; Sony fixed it the same day without giving a cause.", done: true },
  { date: "2026-11-19", label: "Launch", detail: "Unlocked at midnight local time on PS5 and Xbox Series X|S. PS5 players needed a new system update first.", done: true },
  { date: "2026-11-20", label: "Day-one sales announced", detail: "Take-Two: $3.79 billion in day-one retail sales and 32.5 million copies sold before launch.", done: true },
  { date: "2027-01-01", dateLabel: "2027 (reported)", label: "GTA 6 Online", detail: "No date from Rockstar. Reports point to sometime in 2027.", done: false },
];

export type Patch = {
  version: string;
  date: string;
  sizes: { platform: string; size: string }[];
  summary: string;
  notes: string[];
  sources: Source[];
};

export const PATCHES: Patch[] = [
  {
    version: "1.002.001",
    date: "2026-11-16",
    sizes: [{ platform: "PS5 and Xbox", size: "Not published" }],
    summary: "Second update before launch. Installs automatically.",
    notes: [
      "Rockstar hasn't published patch notes.",
      "Reports say the install size dropped slightly after the updates.",
    ],
    sources: [
      { label: "dlcompare", url: "https://www.dlcompare.com/gaming-news/gta-6-day-one-patch-two-silent-updates-and-a-psn-outage" },
    ],
  },
  {
    version: "1.002",
    date: "2026-11-13",
    sizes: [
      { platform: "PS5", size: "about 1.07 GB" },
      { platform: "Xbox Series X|S", size: "about 2.18 GB" },
    ],
    summary: "First update, out the week before launch.",
    notes: [
      "Rockstar hasn't published patch notes.",
      "On PS5 it rolled out in two waves, and reached everyone by November 13.",
    ],
    sources: [
      { label: "Vice", url: "https://www.vice.com/en/article/gta-6-day-one-patch-ps5-version-1002/" },
      { label: "Keengamer", url: "https://www.keengamer.com/articles/news/gta-6-update-1-002-starts-rolling-out-on-ps5-and-xbox-ahead-of-launch/" },
    ],
  },
];

export type Issue = {
  id: string;
  title: string;
  platforms: string;
  state: IssueState;
  detail: string;
  fix?: string;
  sources: Source[];
  updated: string;
};

export const ISSUES: Issue[] = [
  {
    id: "crash-lost-progress",
    title: "Crashes that lose hours of progress",
    platforms: "PS5, Xbox",
    state: "INVESTIGATING",
    detail:
      "Some players report the game crashing and losing hours of progress. As of Saturday, Rockstar hasn't confirmed a save-wipe bug or released a fix. A viral post promising a big patch on November 25 isn't backed by any Rockstar statement.",
    fix: "Save manually and often, especially before long missions, and keep the console updated. If a crash keeps repeating, report it to Rockstar Support.",
    sources: [
      { label: "Happy Gamer: Day 3 live updates", url: "https://happygamer.com/gta-6-day-3-live-updates-177471/" },
      { label: "Futurism: Bizarre bugs in GTA VI", url: "https://futurism.com/future-society/gta-6-bugs" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "stash-bag",
    title: "Stash bag disappears after getting in a car or a cutscene",
    platforms: "PS5, Xbox",
    state: "NOT_FIXED",
    detail: "Players report their stash bag vanishing after entering a vehicle or sitting through a cutscene. No official patch yet.",
    sources: [
      { label: "GTA6BUGS", url: "https://gta6bugs.com/bugs/gta-6-stash-bag-vanished-car-or-cutscene" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "box-codes",
    title: "Boxed copy has no code, or the code is already used",
    platforms: "PS5, Xbox",
    state: "WORKAROUND",
    detail:
      "Some buyers report GTA 6 boxes with no download code inside, or a code that shows as already redeemed. The boxed edition has no disc, so without a working code there's no game. Rockstar and Sony haven't said how widespread it is.",
    fix: "Take the box and receipt back to the retailer. Don't keep retrying a code that shows as used.",
    sources: [
      { label: "EGamers", url: "https://egamers.io/gta-6-launch-problems-tracked-ps5-sign-in-errors-faulty-box-codes-and-patch-status/" },
      { label: "VGTimes", url: "https://vgtimes.com/gaming-news/175045-ps5-users-report-playstation-network-errors-as-gta-6-downloads-stall.html" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "series-s-performance",
    title: "Low resolution and frame drops on Xbox Series S",
    platforms: "Xbox Series S, Xbox One (cloud)",
    state: "NOT_FIXED",
    detail:
      "Digital Foundry's testing, as reported, shows Series S rendering at 720p upscaled to 1080p, with frame rates often in the low-to-mid 20s in busy scenes. Cloud streaming on Xbox One uses the same settings.",
    fix: "No fix yet. A future patch could improve it; we'll update this if one does.",
    sources: [
      { label: "GTA Boom (Digital Foundry)", url: "https://www.gtaboom.com/digital-foundry-finds-that-gta-6-indeed-runs-best-on-ps5-pro-b72f" },
      { label: "Windows Forum", url: "https://windowsforum.com/news/gta-6-console-performance-compared-ps5-pro-holds-30-fps-xbox-series-s-struggles.453173/" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "ps5-system-update",
    title: "PS5: game won't start until you install a system update",
    platforms: "PS5",
    state: "WORKAROUND",
    detail: "Sony released a PS5 system software update that players needed before GTA 6 would run.",
    fix: "Go to Settings, System, System Software, System Software Update and Settings, and install the latest update. Let both GTA 6 updates finish, then restart the console.",
    sources: [
      { label: "Tech Times", url: "https://www.techtimes.com/articles/331071/20261119/psn-sign-outage-preceded-gta-6-us-unlock-install-required-ps5-update-enable-offline-play.htm" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "psn-outage",
    title: "PlayStation Network sign-in outage (November 18)",
    platforms: "PS5",
    state: "FIXED",
    detail:
      "PSN sign-ins failed for some hours on November 18, the day before launch, blocking code redemption and downloads. Sony confirmed it on its status page and restored service the same afternoon, without giving a cause.",
    sources: [
      { label: "Tech Times", url: "https://www.techtimes.com/articles/331071/20261119/psn-sign-outage-preceded-gta-6-us-unlock-install-required-ps5-update-enable-offline-play.htm" },
      { label: "Cybernews", url: "https://cybernews.com/tech/playstation-outage-gta-6-release/" },
    ],
    updated: "2026-11-21",
  },
  {
    id: "isp-congestion",
    title: "Slow internet while pre-loading (YouFibre and other providers)",
    platforms: "All",
    state: "FIXED",
    detail:
      "YouFibre in the UK said GTA 6 downloads overloaded one of its network gateways on November 10. It later said emergency work was complete. Other providers reported record traffic.",
    fix: "If downloads are still slow, try overnight, and pause and resume a stalled download.",
    sources: [
      { label: "Dexerto", url: "https://www.dexerto.com/gta/gta-6-is-causing-internet-issues-as-players-rush-to-preload-3427231/" },
      { label: "Tech Times UK", url: "https://www.techtimes.co.uk/gta-6-preloads-youfibre-network-congestion-yorkshire-1809903" },
    ],
    updated: "2026-11-15",
  },
];

export const ISSUE_LABEL: Record<IssueState, string> = {
  FIXED: "Fixed",
  WORKAROUND: "Workaround",
  INVESTIGATING: "Investigating",
  NOT_FIXED: "Not fixed",
};

/** "Official" = Rockstar said it. "Tested" = measured by Digital Foundry (as reported). "Estimate" = analysts, not confirmed. */
export const PERFORMANCE: { console: string; fps: string; resolution: string; extras: string; basis: "Official" | "Estimate" | "Mixed" | "Tested" }[] = [
  { console: "PS5 Pro", fps: "30 fps, the steadiest version", resolution: "About 1440p, upscaled with PSSR", extras: "Ray-traced shadows, sharpest image", basis: "Tested" },
  { console: "PS5", fps: "30 fps target; dips to about 23 in heavy scenes", resolution: "About 1440p, upscaled to 4K", extras: "None", basis: "Tested" },
  { console: "Xbox Series X", fps: "30 fps target; slightly smoother via 120Hz mode", resolution: "About 1440p, upscaled to 4K", extras: "None", basis: "Tested" },
  { console: "Xbox Series S", fps: "Often low-to-mid 20s in busy scenes", resolution: "720p, upscaled to 1080p", extras: "None", basis: "Tested" },
  { console: "Xbox One (cloud)", fps: "Streams at Series S settings", resolution: "Depends on your connection", extras: "Hourly streaming limits apply", basis: "Official" },
];
