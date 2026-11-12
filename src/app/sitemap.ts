import type { MetadataRoute } from "next";
import { PLACES } from "@/lib/places";
import { SITE_URL } from "@/lib/site";

// Pre-built to /sitemap.xml at deploy time. New places in places.ts appear automatically.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/places/`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/map/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/submit/`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    ...PLACES.map((p) => ({
      url: `${SITE_URL}/places/${p.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
