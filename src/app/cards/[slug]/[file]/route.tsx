import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { CLAIMS, claimBySlug, type Verdict } from "@/lib/claims";

// Share cards, pre-rendered to PNG at deploy time:
//   story.png  1080x1920  TikTok, Instagram Reels and Stories, YouTube Shorts
//   post.png   1080x1350  Instagram feed post
//   og.png     1200x630   link previews (X, Facebook, iMessage, Discord)
export const dynamic = "force-static";

const FORMATS = {
  "story.png": { width: 1080, height: 1920 },
  "post.png": { width: 1080, height: 1350 },
  "og.png": { width: 1200, height: 630 },
} as const;
type FileName = keyof typeof FORMATS;

export function generateStaticParams() {
  return CLAIMS.flatMap((c) => (Object.keys(FORMATS) as FileName[]).map((file) => ({ slug: c.slug, file })));
}

const fontDir = join(process.cwd(), "node_modules/@fontsource/overpass/files");
const fonts = [
  { name: "Overpass", data: readFileSync(join(fontDir, "overpass-latin-600-normal.woff")), weight: 600 as const, style: "normal" as const },
  { name: "Overpass", data: readFileSync(join(fontDir, "overpass-latin-800-normal.woff")), weight: 800 as const, style: "normal" as const },
  { name: "Overpass", data: readFileSync(join(fontDir, "overpass-latin-900-normal.woff")), weight: 900 as const, style: "normal" as const },
];

const INK = "#1b1e20";
const STAMP: Record<Verdict, { color: string; word: string }> = {
  CONFIRMED: { color: "#2fbf71", word: "CONFIRMED" },
  BUSTED: { color: "#ff4d3d", word: "BUSTED" },
  UNVERIFIED: { color: "#ffc629", word: "UNVERIFIED" },
};

// Bigger type for short claims, smaller for long ones.
function claimSize(text: string, base: number) {
  const n = text.length;
  if (n <= 40) return base;
  if (n <= 60) return Math.round(base * 0.86);
  if (n <= 85) return Math.round(base * 0.74);
  return Math.round(base * 0.64);
}

export async function GET(_req: Request, ctx: RouteContext<"/cards/[slug]/[file]">) {
  const { slug, file } = await ctx.params;
  const claim = claimBySlug(slug);
  const format = FORMATS[file as FileName];
  if (!claim || !format) return new Response("Not found", { status: 404 });

  const { width, height } = format;
  const wide = width > height;
  const stamp = STAMP[claim.verdict];
  const story = height > 1500;
  // Keep text clear of the app UI that TikTok, Reels and Shorts draw over the video
  // (top bar, right-hand buttons, caption area at the bottom).
  const padding = wide ? "64px" : story ? "230px 150px 380px 88px" : "88px";
  const innerWidth = wide ? width - 128 : story ? width - 238 : width - 176;
  const claimText = `“${claim.claim.replace(/\.$/, "")}”`;
  const verdictText = claim.verdictText;

  const brand = (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div
        style={{
          display: "flex", border: "4px solid #ffffff", borderRadius: 12, padding: "6px 18px 2px",
          fontSize: wide ? 30 : 40, fontWeight: 800, color: "#ffffff",
        }}
      >
        GTA 6 Claims
      </div>
      <div style={{ display: "flex", fontSize: wide ? 24 : 30, fontWeight: 600, color: "#9aa6ab" }}>
        {claim.category}
      </div>
    </div>
  );

  // Shrink the stamp for long words so it never runs off the card.
  const stampSize = (base: number) =>
    Math.min(base, Math.floor((innerWidth - 40) / (stamp.word.length * 0.66 + 0.86)));
  const stampEl = (base: number) => {
    const size = stampSize(base);
    return (
    <div
      style={{
        display: "flex", alignSelf: "flex-start", transform: "rotate(-7deg)",
        border: `${Math.round(size / 9)}px solid ${stamp.color}`, borderRadius: 18,
        padding: `${Math.round(size * 0.12)}px ${Math.round(size * 0.32)}px ${Math.round(size * 0.02)}px`,
        color: stamp.color, fontSize: size, fontWeight: 900, letterSpacing: 4,
      }}
    >
      {stamp.word}
    </div>
    );
  };

  const footer = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: wide ? 34 : 48, fontWeight: 800, color: "#ffc629" }}>
          gta6claims.com
        </div>
        <div style={{ display: "flex", fontSize: wide ? 20 : 26, fontWeight: 600, color: "#8b979c", marginTop: 6 }}>
          Unofficial fan site. Not affiliated with Rockstar Games.
        </div>
      </div>
    </div>
  );

  const body = wide ? (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 36 }}>
      <div style={{ display: "flex", fontSize: claimSize(claimText, 64), fontWeight: 800, color: "#ffffff", lineHeight: 1.12 }}>
        {claimText}
      </div>
      {stampEl(84)}
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: height > 1500 ? 80 : 56 }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#9aa6ab", letterSpacing: 3 }}>
        THE CLAIM
      </div>
      <div
        style={{
          display: "flex", fontSize: claimSize(claimText, height > 1500 ? 104 : 92), fontWeight: 800,
          color: "#ffffff", lineHeight: 1.1, marginTop: -40,
        }}
      >
        {claimText}
      </div>
      {stampEl(height > 1500 ? 150 : 128)}
      <div style={{ display: "flex", fontSize: height > 1500 ? 42 : 36, fontWeight: 600, color: "#d7dee1", lineHeight: 1.35 }}>
        {verdictText}
      </div>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width, height, display: "flex", flexDirection: "column", background: INK,
          padding, fontFamily: "Overpass", borderTop: `${wide ? 14 : 22}px solid ${stamp.color}`,
        }}
      >
        {brand}
        {body}
        {footer}
      </div>
    ),
    { width, height, fonts }
  );
}
