"use client";

import { useEffect } from "react";
import { NEW_RELIC } from "@/lib/site";

// Starts New Relic Browser once per page load. Loaded on demand so it never
// slows down the first paint, and skipped entirely when NEW_RELIC is null.
export default function NewRelic() {
  useEffect(() => {
    const nr = NEW_RELIC;
    if (!nr) return;
    const w = window as typeof window & { __gta6NewRelic?: boolean };
    if (w.__gta6NewRelic) return;
    w.__gta6NewRelic = true;

    import("@newrelic/browser-agent/loaders/browser-agent").then(({ BrowserAgent }) => {
      new BrowserAgent({
        init: {
          privacy: { cookies_enabled: true },
          ajax: { deny_list: [nr.beacon] },
          // Off: replays record what visitors do on screen, which our privacy page doesn't cover.
          session_replay: { enabled: false },
        },
        info: {
          beacon: nr.beacon,
          errorBeacon: nr.beacon,
          licenseKey: nr.licenseKey,
          applicationID: nr.applicationID,
          sa: 1,
        },
        loader_config: {
          accountID: nr.accountID,
          trustKey: nr.trustKey,
          agentID: nr.agentID,
          licenseKey: nr.licenseKey,
          applicationID: nr.applicationID,
        },
      });
    });
  }, []);

  return null;
}
