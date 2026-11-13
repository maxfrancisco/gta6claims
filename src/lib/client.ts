"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * Reads a browser-only value (localStorage, navigator, location) without a
 * hydration mismatch: the server render and first client render use `fallback`,
 * then React re-renders with the real value. `read` must return a primitive.
 */
export function useBrowserValue<T extends string | number | boolean | null>(read: () => T, fallback: T): T {
  return useSyncExternalStore(
    noop,
    () => {
      try {
        return read();
      } catch {
        return fallback;
      }
    },
    () => fallback
  );
}
