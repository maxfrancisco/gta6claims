"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useBrowserValue } from "@/lib/client";

type Vote = "real" | "fake";
type Totals = { real: number; fake: number };

const VOTER_KEY = "gta6claims-voter";
const VOTES_KEY = "gta6claims-votes";

function readJSON<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

function voterId(): string {
  try {
    let id = localStorage.getItem(VOTER_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(VOTER_KEY, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

// "Real or fake?" poll. Anyone can vote once per claim per browser.
export default function VoteBox({ slug }: { slug: string }) {
  const [totals, setTotals] = useState<Totals | null>(null);
  const stored = useBrowserValue(() => readJSON<Record<string, Vote>>(VOTES_KEY, {})[slug] ?? null, null);
  const [justVoted, setJustVoted] = useState<Vote | null>(null);
  const mine = justVoted ?? stored;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.rpc("claim_vote_totals").then(({ data, error }) => {
      if (error || !Array.isArray(data)) return;
      const row = (data as { claim_slug: string; real_votes: number; fake_votes: number }[]).find((r) => r.claim_slug === slug);
      setTotals({ real: Number(row?.real_votes ?? 0), fake: Number(row?.fake_votes ?? 0) });
    });
  }, [slug]);

  async function vote(v: Vote) {
    if (mine) return;
    if (!supabase) {
      setError("Voting isn't connected yet.");
      return;
    }
    setJustVoted(v);
    setTotals((t) => (t ? { ...t, [v]: t[v] + 1 } : { real: v === "real" ? 1 : 0, fake: v === "fake" ? 1 : 0 }));
    try {
      const all = readJSON<Record<string, Vote>>(VOTES_KEY, {});
      localStorage.setItem(VOTES_KEY, JSON.stringify({ ...all, [slug]: v }));
    } catch {}
    const { error } = await supabase.from("claim_votes").insert({ claim_slug: slug, voter: voterId(), vote: v });
    // 23505 = this browser already voted on this claim; the earlier vote stands.
    if (error && error.code !== "23505") setError("Your vote didn't save. Try again later.");
  }

  const total = totals ? totals.real + totals.fake : 0;
  const pct = (n: number) => (total ? Math.round((n / total) * 100) : 0);

  return (
    <div className="vote-box">
      <h2 className="vote-title">What do players think?</h2>
      <div className="vote-buttons">
        <button type="button" className="vote vote-real" aria-pressed={mine === "real"} disabled={!!mine} onClick={() => vote("real")}>
          It&apos;s real
        </button>
        <button type="button" className="vote vote-fake" aria-pressed={mine === "fake"} disabled={!!mine} onClick={() => vote("fake")}>
          It&apos;s fake
        </button>
      </div>
      {mine && total > 0 && (
        <div className="vote-result" aria-live="polite">
          <div className="vote-bar" aria-hidden="true">
            <span className="vote-bar-real" style={{ width: `${pct(totals!.real)}%` }} />
          </div>
          <p>
            <strong>{pct(totals!.real)}% real</strong> · {pct(totals!.fake)}% fake · {total.toLocaleString()} {total === 1 ? "vote" : "votes"}
          </p>
        </div>
      )}
      {!mine && <p className="hint">Vote to see what everyone else thinks.</p>}
      {error && <p className="status-err" role="alert">{error}</p>}
    </div>
  );
}
