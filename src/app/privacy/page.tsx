import type { Metadata } from "next";
import Link from "next/link";
import { NEW_RELIC } from "@/lib/site";

const CONTACT = "privacy@gta6claims.com";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What GTA 6 Claims collects, why, who handles it, and how to have it removed.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <section className="section legal">
      <div className="wrap">
        <h1>Privacy</h1>
        <p className="hint">Last updated November 13, 2026</p>
        <p>
          GTA 6 Claims collects as little as it can, and we don&apos;t sell your
          information. The site is paid for by ads from Google, which use cookies as described
          below.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Your email, if you sign up.</strong> We use it only to tell you when new
            comparisons go up.
          </li>
          <li>
            <strong>What you send through <Link href="/submit/">Submit a claim</Link>.</strong> That
            includes the claim, any proof link, screenshot and notes, the name or handle you want
            credit under, and your email if you give one. We use it to check the claim and credit
            you if we publish it. Your email is never shown on the site.
          </li>
          <li>
            <strong>Your votes.</strong> When you vote on a claim, we store the vote with a random
            ID that your browser keeps, so each browser votes once. It isn&apos;t linked to your
            name or email, and only vote totals are shown.
          </li>
          <li>
            <strong>Visit statistics.</strong> We use Google Analytics to count visits and see
            which pages people read. It sets cookies and receives your IP address, browser type and
            the pages you visit.
          </li>
        </ul>

        <h2>Ads</h2>
        <p>
          We show ads through Google AdSense. Google and its partners use cookies to show ads
          based on your visits to this site and other sites. You can turn off personalized ads in{" "}
          <a href="https://adssettings.google.com" rel="noopener">Google&apos;s Ad Settings</a>, or
          opt out of many other ad companies&apos; cookies at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener">aboutads.info</a>. Read{" "}
          <a href="https://policies.google.com/technologies/ads" rel="noopener">
            how Google uses cookies in advertising
          </a>
          . Visitors in Europe and the UK are asked for consent before personalized ads load.
        </p>

        <h2>Who handles it</h2>
        <ul>
          <li>
            <strong>Supabase</strong> stores signups, submissions and submitted photos on servers
            in the United States. Only we can read them.
          </li>
          <li>
            <strong>Cloudflare</strong> hosts the site and keeps standard server logs for security.
          </li>
          <li>
            <strong>Google Analytics</strong> processes the visit statistics. Read{" "}
            <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">
              how Google uses this data
            </a>
            , or install the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">
              Google Analytics opt-out add-on
            </a>{" "}
            to stop being counted.
          </li>
          {NEW_RELIC && (
            <li>
              <strong>New Relic</strong> measures how fast pages load and records errors in your
              browser, so we can fix problems. It receives your IP address, browser type and the
              pages you visit, and sets a cookie for the session.
            </li>
          )}
          <li>
            <strong>Google AdSense</strong> serves the ads described above.
          </li>
          <li>
            <strong>OpenFreeMap</strong> supplies the map background on map pages, so your browser
            requests map images from its servers.
          </li>
        </ul>

        <h2>How long we keep it</h2>
        <p>
          We keep votes as part of the totals. We keep your signup until you unsubscribe or ask us to delete it. We keep submissions
          until we&apos;ve reviewed them. If we publish one, we keep the photos and credit as part
          of the page; if we don&apos;t, we delete it.
        </p>

        <h2>Your choices</h2>
        <p>
          To see, correct or delete anything we hold about you, or to have your credit or photo
          taken off a page, email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We reply within 30
          days.
        </p>

        <h2>Kids</h2>
        <p>
          This site is not meant for children under 13, and we don&apos;t knowingly collect their
          information. If you think a child has sent us something, email us and we&apos;ll delete it.
        </p>

        <h2>Changes</h2>
        <p>If we change this page, we&apos;ll update the date at the top.</p>
      </div>
    </section>
  );
}
