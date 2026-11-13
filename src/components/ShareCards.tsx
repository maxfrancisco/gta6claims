"use client";

import { useState } from "react";
import { useBrowserValue } from "@/lib/client";

type Props = { slug: string; title: string; url: string };

const CARDS = [
  { file: "story.png", label: "TikTok, Reels and Shorts", size: "9:16, 1080×1920" },
  { file: "post.png", label: "Instagram post", size: "4:5, 1080×1350" },
] as const;

// Download or share the pre-built verdict cards. On phones, "Share" hands the image
// straight to Instagram, TikTok or YouTube through the system share sheet.
export default function ShareCards({ slug, title, url }: Props) {
  // Phones that can hand an image to other apps get a Share button.
  const canShareFiles = useBrowserValue(
    () => !!navigator.canShare?.({ files: [new File([new Blob()], "x.png", { type: "image/png" })] }),
    false
  );
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);

  async function share(file: string) {
    setBusy(file);
    try {
      const res = await fetch(`/cards/${slug}/${file}`);
      const blob = await res.blob();
      const f = new File([blob], `gta6claims-${slug}-${file}`, { type: "image/png" });
      await navigator.share({ files: [f], title, text: `${title} ${url}` });
    } catch {
      // Cancelled or unsupported: nothing to do.
    } finally {
      setBusy(null);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="share">
      <h2>Share the verdict</h2>
      <p className="hint">Ready-made cards sized for each app. Post them, tag us, start the argument.</p>
      <div className="share-grid">
        {CARDS.map((c) => (
          <figure key={c.file} className={`share-card share-${c.file.replace(".png", "")}`}>
            <a href={`/cards/${slug}/${c.file}`} target="_blank" rel="noopener">
              <img src={`/cards/${slug}/${c.file}`} alt={`${c.label} card: ${title}`} loading="lazy" />
            </a>
            <figcaption>
              <strong>{c.label}</strong>
              <span className="hint">{c.size}</span>
              <span className="share-actions">
                <a className="btn btn-small" href={`/cards/${slug}/${c.file}`} download={`gta6claims-${slug}-${c.file}`}>
                  Download
                </a>
                {canShareFiles && (
                  <button type="button" className="btn btn-small btn-quiet" onClick={() => share(c.file)} disabled={busy === c.file}>
                    {busy === c.file ? "Opening…" : "Share"}
                  </button>
                )}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <button type="button" className="btn btn-quiet btn-small" onClick={copyLink}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
