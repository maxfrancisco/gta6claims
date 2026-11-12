"use client";

import { useState } from "react";
import type { Place } from "@/lib/places";

// Drag (or use arrow keys) to wipe between the real photo and the in-game shot.
// Until photos exist, each side shows a labeled placeholder.
export default function Compare({ place, priority = false }: { place: Place; priority?: boolean }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="compare" style={{ ["--pos" as string]: `${pos}%` }}>
      <div className="compare-side compare-real">
        {place.realImage ? (
          <img src={place.realImage} alt={`${place.real}, photographed in real life`} loading={priority ? "eager" : "lazy"} />
        ) : (
          <div className="placeholder real">
            <div>{place.real}<small>Real photo coming this week</small></div>
          </div>
        )}
      </div>
      <div className="compare-side compare-game">
        {place.gameImage ? (
          <img src={place.gameImage} alt={`${place.game} in GTA 6`} loading={priority ? "eager" : "lazy"} />
        ) : (
          <div className="placeholder game">
            <div>{place.game}<small>In-game shot after November 19</small></div>
          </div>
        )}
      </div>
      <div className="compare-handle" aria-hidden="true" />
      <span className="compare-tag real">Real</span>
      <span className="compare-tag game">Leonida</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Slide between ${place.real} and ${place.game}`}
      />
    </div>
  );
}
