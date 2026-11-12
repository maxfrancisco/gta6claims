import type { Metadata } from "next";
import Link from "next/link";
import { PLACES, REGIONS } from "@/lib/places";

export const metadata: Metadata = {
  title: "Every GTA 6 location and its real-world counterpart",
  description: "The full list of Leonida places matched to real Florida locations, region by region.",
};

export default function PlacesIndex() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Places</h1>
        <p>
          Every Leonida location we&apos;ve matched to a real place. Green tags are regions Rockstar
          named itself. Trailer matches were spotted frame by frame. Community matches are strong
          fan theories we&apos;re still confirming.
        </p>

        {REGIONS.map((r) => {
          const list = PLACES.filter((p) => p.region === r.name);
          if (!list.length) return null;
          return (
            <div key={r.name} id={slug(r.name)}>
              <h2 className="region-title">
                {r.name} <span>is {r.real}</span>
              </h2>
              <ul className="place-list">
                {list.map((p) => (
                  <li key={p.slug} className="place-row">
                    <Link href={`/places/${p.slug}/`}>
                      <span className="g">{p.game}</span>
                      <span className="r">{p.real}</span>
                      <span className="m">
                        <span className={`match match-${slug(p.match)}`}>{p.match}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
