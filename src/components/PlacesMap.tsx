"use client";

import { useEffect, useRef } from "react";
import type { Place } from "@/lib/places";

// MapLibre + OpenFreeMap: free vector tiles, no API key, no usage fees.
const STYLE = "https://tiles.openfreemap.org/styles/positron";

export default function PlacesMap({
  places,
  className = "map-full",
  zoom,
  center,
}: {
  places: Place[];
  className?: string;
  zoom?: number;
  center?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("maplibre-gl").Map | undefined;
    let cancelled = false;

    (async () => {
      const maplibregl = await import("maplibre-gl");
      // The map worker is copied into /public at build time (see package.json).
      maplibregl.setWorkerUrl("/maplibre-gl-worker.mjs");
      if (cancelled || !ref.current) return;

      const m = new maplibregl.Map({
        container: ref.current,
        style: STYLE,
        center: center ?? [-81.4, 27.2],
        zoom: zoom ?? 5.6,
        attributionControl: { compact: true },
        cooperativeGestures: true,
      });
      map = m;
      m.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

      for (const p of places) {
        const el = document.createElement("button");
        el.type = "button";
        el.className = "pin";
        el.textContent = p.game;
        el.setAttribute("aria-label", `${p.game}: ${p.real}`);

        const popup = new maplibregl.Popup({ offset: 14, closeButton: true }).setHTML(
          `<strong>${escapeHtml(p.game)}</strong>is ${escapeHtml(p.real)}<br/><a href="/places/${p.slug}/">See the comparison</a>`
        );
        new maplibregl.Marker({ element: el }).setLngLat([p.lng, p.lat]).setPopup(popup).addTo(m);
      }

      if (!center && places.length > 1) {
        const b = new maplibregl.LngLatBounds();
        places.forEach((p) => b.extend([p.lng, p.lat]));
        m.fitBounds(b, { padding: 60, maxZoom: 12, duration: 0 });
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [places, zoom, center]);

  return <div ref={ref} className={className} role="region" aria-label="Map of real-world locations" />;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
