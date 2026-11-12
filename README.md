# Real vs Leonida

Side-by-side comparisons of real South Florida places and their GTA 6 versions.

**Stack (all free, commercial use allowed):**
- Next.js 16, exported as static HTML
- Cloudflare Workers static assets for hosting (static file requests are free and unlimited)
- Supabase free tier for email signups and user submissions
- MapLibre + OpenFreeMap for maps (no API key)

The only optional cost is a custom domain (about $10/year). Until then the site lives at `gta6claims.YOUR-SUBDOMAIN.workers.dev`.

---

## Go live in about 30 minutes

### 1. Put the code on GitHub
1. Create a free account at github.com if you don't have one.
2. Create a new **private** repository named `real-vs-leonida`.
3. Upload this folder to it, either by dragging the files into the GitHub web page or with:
   ```
   git remote add origin https://github.com/YOUR-NAME/real-vs-leonida.git
   git push -u origin main
   ```

### 2. Set up Supabase (signups and submissions)
1. Create a free account at supabase.com and click **New project**. Pick the region closest to Florida (US East).
2. Open **SQL Editor > New query**, paste all of `supabase/schema.sql`, and click **Run**.
3. Open **Project Settings > API** and copy the **Project URL** and the **anon public** key.

### 3. Deploy on Cloudflare (Workers, static assets)
1. Create a free account at cloudflare.com.
2. Go to **Workers & Pages > Create > Import a repository** and pick your repository. Name the Worker `gta6claims` (it must match `name` in `wrangler.jsonc`).
3. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Under **Settings > Build > Variables and secrets** (build variables, not runtime ones, because Next.js bakes them in at build time), add:
   - `NEXT_PUBLIC_SUPABASE_URL`: your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: your anon public key
   - `NEXT_PUBLIC_SITE_URL`: your `https://gta6claims.YOUR-SUBDOMAIN.workers.dev` address (or your domain later)
   - `NODE_VERSION`: `22`
5. Every push to `main` rebuilds and redeploys. `wrangler.jsonc` serves the `out` folder as static files only, so there is no per-request cost.

### 4. Keep Supabase from pausing
Free Supabase projects pause after 7 days with no activity. The included GitHub Action pings it every 3 days.
In your GitHub repo, go to **Settings > Secrets and variables > Actions** and add:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

Then open the **Actions** tab, pick **Keep Supabase awake** and click **Run workflow** once to check that it works.

### 5. (Optional) Custom domain
Buy a domain through Cloudflare Registrar (sold at cost) and add it under your Worker's **Settings > Domains & Routes**.
Keep "GTA" and "Grand Theft Auto" out of the domain name. Take-Two enforces its trademarks.

---

## Adding photos and places

All content lives in `src/lib/places.ts`.

**Add photos to an existing place:**
1. Resize photos to about 1920 px wide, saved as JPG at roughly 80% quality (300–600 KB each).
2. Put them in `public/photos/<slug>/`, for example `public/photos/cortez-hotel/real.jpg` and `game.jpg`.
3. In `places.ts`, add to that place:
   ```ts
   realImage: "/photos/cortez-hotel/real.jpg",
   gameImage: "/photos/cortez-hotel/game.jpg",
   ```
4. Commit and push. Cloudflare rebuilds in a minute or two.

Shoot the real photo at the same angle and in landscape (16:9) so the slider lines up. Use only photos you took and in-game screenshots you captured yourself, never Rockstar's official trailer stills or artwork.

**Add a new place:** copy any entry in `PLACES`, give it a new unique `slug`, and fill in the fields. Its page, map pin and list entry appear automatically.

## Reviewing submissions
In Supabase, open **Table Editor > submissions**. Photos are in **Storage > submissions**, in a folder named after each submission's `id`.
To publish one, download the photos into `public/photos/<slug>/`, add the place to `places.ts` with `realCredit: "@their-handle"`, and set the row's `status` to `approved`.

Email signups are in **Table Editor > subscribers**. Export them as CSV into whatever email tool you use.

## Free-tier limits to watch
| Service | Free limit | What uses it |
| --- | --- | --- |
| Cloudflare Workers (static assets) | Unlimited static requests, 3,000 build minutes a month | Every page view and every push |
| Supabase database | 500 MB | Signups and submissions (tiny) |
| Supabase storage | 1 GB | Submitted photos (shrunk to ~0.5 MB each in the browser, so about 2,000 photos) |
| Supabase egress | 5 GB a month | Only you downloading submissions |

Your own photos ship with the site, so they count against Cloudflare (unlimited), not Supabase.

## Local development
```
cp .env.example .env.local   # then fill in your keys
npm install
npm run dev
```
