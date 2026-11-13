// The site's public address. Set NEXT_PUBLIC_SITE_URL in Cloudflare's build variables.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://gta6claims.com").replace(/\/+$/, "");

// Google AdSense publisher ID. Public by design: it appears in every page's HTML and in /ads.txt.
export const ADSENSE_CLIENT = "ca-pub-7176330949334371";

// New Relic Browser monitoring (page speed, JS errors, failed requests for real visitors).
// Values come from New Relic > Browser > your app > Application settings > Copy/Paste JavaScript.
// They're public by design: New Relic's own snippet puts them in every page.
// Leave as null to turn monitoring off.
export const NEW_RELIC: {
  accountID: string;
  trustKey: string;
  agentID: string;
  applicationID: string;
  licenseKey: string;
  /** "bam.nr-data.net" for US accounts, "bam.eu01.nr-data.net" for EU accounts. */
  beacon: string;
} | null = null;
