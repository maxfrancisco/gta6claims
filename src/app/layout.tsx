import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import NewRelic from "@/components/NewRelic";
import "./globals.css";
import { ADSENSE_CLIENT, SITE_URL } from "@/lib/site";

// Google Analytics 4 Measurement ID (G-XXXXXXXXXX), set in Cloudflare's build variables.
// Left unset, no analytics script loads (local dev, preview builds).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GTA 6 Claims: every rumor and feature, checked",
    template: "%s | GTA 6 Claims",
  },
  description:
    "Every GTA 6 rumor, leak and feature claim, stamped Confirmed, Busted or Unverified, with sources and shareable verdict cards.",
  openGraph: { type: "website", siteName: "GTA 6 Claims" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* AdSense: a plain tag in <head> so Google's site check finds it in the HTML. */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NewRelic />
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">GTA 6 Claims</Link>
            <nav className="nav" aria-label="Main">
              <Link href="/claims/">Claims</Link>
              <Link href="/places/">Real places</Link>
              <Link href="/submit/">Submit a claim</Link>
            </nav>
          </div>
        </header>
        <div className="disclaimer-bar">
          <p className="wrap">
            GTA 6 Claims is an unofficial fan site. It is not affiliated with, endorsed by or
            connected to Rockstar Games or Take-Two Interactive. Game names and in-game images belong
            to their owners and appear here for comparison and commentary.
          </p>
        </div>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              GTA 6 Claims is an unofficial fan site. It is not affiliated with, endorsed by or
              connected to Rockstar Games or Take-Two Interactive. Game names and in-game images
              belong to their owners and appear here for comparison and commentary.
            </p>
            <p>Real-world photos are our own unless credited. Spotted a mistake? <Link href="/submit/">Tell us</Link>. <Link href="/privacy/">Privacy</Link></p>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
