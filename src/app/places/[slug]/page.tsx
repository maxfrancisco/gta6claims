import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Compare from "@/components/Compare";
import PlacesMap from "@/components/PlacesMap";
import { PLACES, placeBySlug } from "@/lib/places";

export const dynamicParams = false;

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/places/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = placeBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.game} in GTA 6 is ${p.real} in real life`,
    description: `Side-by-side: ${p.game} in Leonida next to the real ${p.real} (${p.where}). ${p.blurb}`,
    alternates: { canonical: `/places/${p.slug}/` },
    openGraph: p.realImage ? { images: [p.realImage] } : undefined,
  };
}

export default async function PlacePage({ params }: PageProps<"/places/[slug]">) {
  const { slug } = await params;
  const p = placeBySlug(slug);
  if (!p) notFound();

  const nearby = PLACES.filter((x) => x.region === p.region && x.slug !== p.slug).slice(0, 4);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;

  return (
    <>
      <section className="place-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/places/">Places</Link> / <Link href={`/places/#${p.region.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{p.region}</Link>
          </p>
          <h1 className="pair">
            {p.game}
            <span className="is">in GTA 6 is</span>
            {p.real}
          </h1>
          <p>{p.blurb}</p>
        </div>
      </section>

      <section className="wrap">
        <Compare place={p} priority />
        {p.realCredit && <p className="field-note">Real photo: {p.realCredit}</p>}

        <div className="facts">
          <div>
            <dl>
              <dt>In Leonida</dt><dd>{p.game}</dd>
              <dt>In real life</dt><dd>{p.real}</dd>
              <dt>Where</dt><dd>{p.where}</dd>
              <dt>Region</dt><dd>{p.region}</dd>
              <dt>How we know</dt>
              <dd><span className={`match match-${p.match.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{p.match}</span></dd>
            </dl>
            <p style={{ marginTop: "1.25rem" }}>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Get directions to the real place</a>
            </p>
          </div>
          <PlacesMap places={[p]} className="mini-map" zoom={13} center={[p.lng, p.lat]} />
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>More in {p.region}</h2>
            <ul className="place-list">
              {nearby.map((x) => (
                <li key={x.slug} className="place-row">
                  <Link href={`/places/${x.slug}/`}>
                    <span className="g">{x.game}</span>
                    <span className="r">{x.real}</span>
                    <span className="m">{x.where}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
