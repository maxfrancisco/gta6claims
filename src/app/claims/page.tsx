import type { Metadata } from "next";
import ClaimBoard from "@/components/ClaimBoard";
import { CLAIMS } from "@/lib/claims";

export const metadata: Metadata = {
  title: "Every GTA 6 claim, checked",
  description: "Every GTA 6 rumor, leak and feature claim, marked Confirmed, Busted or Unverified, with sources.",
  alternates: { canonical: "/claims/" },
};

export default function ClaimsIndex() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Every GTA 6 claim, checked</h1>
        <p>Rumors, leaks and feature claims, each one marked with what we actually know and where it came from.</p>
        <ClaimBoard claims={CLAIMS} />
      </div>
    </section>
  );
}
