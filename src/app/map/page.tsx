import type { Metadata } from "next";
import PlacesMap from "@/components/PlacesMap";
import { PLACES } from "@/lib/places";

export const metadata: Metadata = {
  title: "Map of real GTA 6 locations in Florida",
  description: "Every real-world place behind GTA 6's Leonida on one map, from Miami Beach to the Keys.",
};

export default function MapPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h1>The real map</h1>
          <p>Each pin is a real place. Tap one to see its Leonida version.</p>
        </div>
        <PlacesMap places={PLACES} />
        <p className="legend">Map data © OpenStreetMap contributors, tiles by OpenFreeMap.</p>
      </div>
    </section>
  );
}
