// The site's public address. Set NEXT_PUBLIC_SITE_URL in Cloudflare's build variables.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://gta6claims.com").replace(/\/+$/, "");

// Google AdSense publisher ID. Public by design: it appears in every page's HTML and in /ads.txt.
export const ADSENSE_CLIENT = "ca-pub-7176330949334371";
