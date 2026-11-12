// The site's public address. Set NEXT_PUBLIC_SITE_URL in Cloudflare's build variables.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://gta6claims.com").replace(/\/+$/, "");
