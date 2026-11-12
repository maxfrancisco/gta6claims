import type { Metadata } from "next";
import Link from "next/link";
import Compare from "@/components/Compare";
import SignupForm from "@/components/SignupForm";
import { PLACES, REGIONS, placeBySlug } from "@/lib/places";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const hero = placeBySlug("cortez-hotel")!;

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>The real Florida behind Leonida.</h1>
            <p className="lede">
              GTA 6 rebuilds Miami, the Keys and the Everglades under new names. We go stand in the
              real places and photograph them, so you can drag between the game and the street.
            </p>
            <SignupForm />
          </div>
          <Compare place={hero} priority />
        </div>
      </section>

      <section className="section section-sky">
        <div className="wrap">
          <div className="section-head">
            <h2>Pick a region</h2>
            <p>{PLACES.length} places matched so far, with more after launch on November 19.</p>
          </div>
          <div className="regions">
            {REGIONS.map((r) => {
              const n = PLACES.filter((p) => p.region === r.name).length;
              return (
                <Link key={r.name} href={`/places/#${slug(r.name)}`} className="exit-sign">
                  <span className="name">{r.name}</span>
                  <span className="to">{r.real}</span>
                  <span className="count">{n} {n === 1 ? "place" : "places"}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Found a real place in the game?</h2>
          </div>
          <p>
            Send us the in-game spot and where you think it is in real life. If you live near it,
            add your own photo. We check every match and credit you on the page.
          </p>
          <Link href="/submit/" className="btn">Submit a match</Link>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
