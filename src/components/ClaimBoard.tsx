"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import VerdictStamp from "@/components/VerdictStamp";
import { CATEGORIES, VERDICT_LABEL, type Category, type Claim, type Verdict } from "@/lib/claims";

const VERDICTS: Verdict[] = ["CONFIRMED", "BUSTED", "UNVERIFIED"];

// Filterable grid of claim cards. All claims ship in the page, so filtering is instant.
export default function ClaimBoard({ claims }: { claims: Claim[] }) {
  const [verdict, setVerdict] = useState<Verdict | "ALL">("ALL");
  const [category, setCategory] = useState<Category | "ALL">("ALL");

  const shown = useMemo(
    () =>
      claims
        .filter((c) => (verdict === "ALL" || c.verdict === verdict) && (category === "ALL" || c.category === category))
        .sort((a, b) => Number(!!b.trending) - Number(!!a.trending)),
    [claims, verdict, category]
  );

  const count = (v: Verdict) => claims.filter((c) => c.verdict === v).length;

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter by verdict">
        <button type="button" className="chip" aria-pressed={verdict === "ALL"} onClick={() => setVerdict("ALL")}>
          All <span>{claims.length}</span>
        </button>
        {VERDICTS.map((v) => (
          <button
            key={v}
            type="button"
            className={`chip chip-${v.toLowerCase()}`}
            aria-pressed={verdict === v}
            onClick={() => setVerdict(v)}
          >
            {VERDICT_LABEL[v]} <span>{count(v)}</span>
          </button>
        ))}
        <label className="cat-select">
          <span className="hp">Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value as Category | "ALL")}>
            <option value="ALL">All topics</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="board-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? "claim" : "claims"}
      </p>

      <ul className="claim-grid">
        {shown.map((c) => (
          <li key={c.slug}>
            <Link href={`/claims/${c.slug}/`} className={`claim-card claim-card-${c.verdict.toLowerCase()}`}>
              <span className="claim-cat">
                {c.category}
                {c.trending && <span className="hot">Trending</span>}
              </span>
              <span className="claim-text">{c.short}</span>
              <VerdictStamp verdict={c.verdict} size="sm" />
            </Link>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p>No claims match that filter yet.</p>}
    </div>
  );
}
