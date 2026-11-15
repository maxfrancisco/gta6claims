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
  headline: "Pre-loads are open. Some internet providers are congested.",
  detail:
    "GTA 6 isn't out yet, so there are no game servers to go down. Pre-loading works on PS5 and Xbox, and update 1.002 is rolling out. Some providers, including YouFibre in the UK, reported slowdowns from the download rush.",
  updated: "2026-11-15T15:00:00-05:00",
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

export const TIMELINE: { date: string; label: string; detail: string; done: boolean }[] = [
  { date: "2026-11-10", label: "Pre-loads opened", detail: "PS5 at midnight local time. Xbox at midnight GMT (7 p.m. Eastern on Nov 9).", done: true },
  { date: "2026-11-13", label: "Update 1.002 rolled out", detail: "About 1.07 GB on PS5 and about 2.18 GB on Xbox. No patch notes.", done: true },
  { date: "2026-11-18", label: "Reviews (reported)", detail: "The review embargo reportedly lifts the day before launch. Not confirmed by Rockstar.", done: false },
  { date: "2026-11-19", label: "Launch", detail: "Unlocks at midnight local time on PS5 and Xbox Series X|S. US West Coast may unlock at 9 p.m. Pacific on Nov 18.", done: false },
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
    version: "1.002",
    date: "2026-11-13",
    sizes: [
      { platform: "PS5", size: "about 1.07 GB" },
      { platform: "Xbox Series X|S", size: "about 2.18 GB" },
    ],
    summary: "First update, out the week before launch. Downloads automatically if you pre-loaded.",
    notes: [
      "Rockstar hasn't published patch notes.",
      "On PS5 it rolled out in two waves, and reached everyone by November 13.",
      "Rockstar hasn't called it the day-one patch. Another update could still arrive on launch day.",
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
    id: "isp-congestion",
    title: "Slow internet while pre-loading (YouFibre and other providers)",
    platforms: "All",
    state: "FIXED",
    detail:
      "YouFibre in the UK said GTA 6 downloads overloaded one of its network gateways on November 10, slowing speeds for customers. It later said emergency work was complete, though downloads could stay slower during the rush. Other providers reported record traffic.",
    fix: "Download overnight, and pause and resume a stalled download. If every device in your home is slow, the problem is your provider, not your console.",
    sources: [
      { label: "Dexerto", url: "https://www.dexerto.com/gta/gta-6-is-causing-internet-issues-as-players-rush-to-preload-3427231/" },
      { label: "Tech Times UK", url: "https://www.techtimes.co.uk/gta-6-preloads-youfibre-network-congestion-yorkshire-1809903" },
    ],
    updated: "2026-11-15",
  },
  {
    id: "preload-stuck",
    title: "Pre-load stuck, very slow, or showing a huge time remaining",
    platforms: "PS5, Xbox",
    state: "WORKAROUND",
    detail:
      "Some players report the 212 GB pre-load stalling or estimating days or years to finish, usually from network congestion or the console not downloading in rest mode.",
    fix: "Pause and resume the download, close any running game, check you have 212 GB free, and turn on downloads in rest mode (PS5) or automatic updates (Xbox). A wired connection helps.",
    sources: [
      { label: "Timesaver: Preload stuck fixes", url: "https://timesaver.gg/blog/gta-6-preload-not-working-fix" },
      { label: "Rockstar Pre-Load FAQ", url: "https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq" },
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

/** "Official" = Rockstar said it. "Estimate" = analysts, not confirmed. */
export const PERFORMANCE: { console: string; fps: string; resolution: string; extras: string; basis: "Official" | "Estimate" | "Mixed" }[] = [
  { console: "PS5", fps: "30 fps target", resolution: "About 1440p (analysis of official footage)", extras: "None announced", basis: "Mixed" },
  { console: "PS5 Pro", fps: "30 fps target", resolution: "Not published", extras: "Ray-traced shadows, sharper image (PSSR)", basis: "Official" },
  { console: "Xbox Series X", fps: "30 fps target", resolution: "Not published; expected close to PS5", extras: "None announced", basis: "Mixed" },
  { console: "Xbox Series S", fps: "30 fps target", resolution: "720p to 1080p (analyst estimates)", extras: "None announced", basis: "Estimate" },
  { console: "Xbox One (cloud)", fps: "Streams at Series S settings", resolution: "Depends on your connection", extras: "Hourly streaming limits apply", basis: "Official" },
];
