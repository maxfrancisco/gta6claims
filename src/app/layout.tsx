import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Google Analytics 4 Measurement ID (G-XXXXXXXXXX), set in Cloudflare's build variables.
// Left unset, no analytics script loads (local dev, preview builds).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Real vs Leonida: the real Florida places behind GTA 6",
    template: "%s | Real vs Leonida",
  },
  description:
    "Side-by-side photos of real South Florida places and their GTA 6 versions in Leonida, shot on location by a Fort Lauderdale local.",
  openGraph: { type: "website", siteName: "Real vs Leonida" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">Real vs Leonida</Link>
            <nav className="nav" aria-label="Main">
              <Link href="/places/">Places</Link>
              <Link href="/map/">Map</Link>
              <Link href="/submit/">Submit a match</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              Real vs Leonida is an unofficial fan site. It is not affiliated with, endorsed by or
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
