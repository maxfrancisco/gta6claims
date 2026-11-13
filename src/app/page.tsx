import type { Metadata } from "next";
import Link from "next/link";
import ClaimBoard from "@/components/ClaimBoard";
import SignupForm from "@/components/SignupForm";
import VerdictStamp from "@/components/VerdictStamp";
import { CLAIMS, countByVerdict } from "@/lib/claims";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const counts = countByVerdict();
  const spotlight = CLAIMS.find((c) => c.slug === "gta-6-launches-on-pc")!;

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Every GTA 6 claim, checked.</h1>
            <p className="lede">
              Rumors, leaks and &ldquo;you can do this&rdquo; claims, stamped Confirmed, Busted or Unverified, with
              the sources to back it. On November 19 we start testing the rest in the game.
            </p>
            <p className="tally">
              <span><strong>{counts.CONFIRMED}</strong> confirmed</span>
              <span><strong>{counts.BUSTED}</strong> busted</span>
              <span><strong>{counts.UNVERIFIED}</strong> still open</span>
            </p>
            <SignupForm />
          </div>
          <Link href={`/claims/${spotlight.slug}/`} className="spotlight">
            <span className="claim-label">The claim</span>
            <span className="spotlight-text">&ldquo;{spotlight.claim.replace(/\.$/, "")}&rdquo;</span>
            <VerdictStamp verdict={spotlight.verdict} size="lg" />
            <span className="spotlight-more">See why →</span>
          </Link>
        </div>
      </section>

      <section className="section section-sky" id="claims">
        <div className="wrap">
          <div className="section-head">
            <h2>The claims board</h2>
            <p>Tap a claim for the evidence, the vote, and a card to share.</p>
          </div>
          <ClaimBoard claims={CLAIMS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Heard something about GTA 6?</h2>
          </div>
          <p>
            Send us the claim and any proof: a clip, a screenshot, a source. We check it and credit you when
            the verdict goes up.
          </p>
          <Link href="/submit/" className="btn">Submit a claim</Link>
        </div>
      </section>
    </>
  );
}
