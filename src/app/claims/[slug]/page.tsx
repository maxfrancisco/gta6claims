import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareCards from "@/components/ShareCards";
import VerdictStamp from "@/components/VerdictStamp";
import VoteBox from "@/components/VoteBox";
import { CLAIM_CONTENT } from "@/lib/claim-content";
import { CLAIMS, VERDICT_BLURB, VERDICT_LABEL, claimBySlug } from "@/lib/claims";
import { placeBySlug } from "@/lib/places";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return CLAIMS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/claims/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = claimBySlug(slug);
  if (!c) return {};
  const title = `${CLAIM_CONTENT[c.slug].question} ${VERDICT_LABEL[c.verdict]}`;
  return {
    title,
    description: `${VERDICT_LABEL[c.verdict]}: ${c.verdictText}`,
    alternates: { canonical: `/claims/${c.slug}/` },
    openGraph: { title, images: [{ url: `/cards/${c.slug}/og.png`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, images: [`/cards/${c.slug}/og.png`] },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ClaimPage({ params }: PageProps<"/claims/[slug]">) {
  const { slug } = await params;
  const c = claimBySlug(slug);
  if (!c) notFound();

  const content = CLAIM_CONTENT[c.slug];
  if (!content) throw new Error(`Missing CLAIM_CONTENT for ${c.slug}`);
  const place = c.placeSlug ? placeBySlug(c.placeSlug) : undefined;
  const related = CLAIMS.filter((o) => o.category === c.category && o.slug !== c.slug).slice(0, 4);
  const url = `${SITE_URL}/claims/${c.slug}/`;

  // FAQ structured data: the main question plus the related ones.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { q: content.question, a: `${VERDICT_LABEL[c.verdict]}. ${c.verdictText}` },
      ...content.faq,
    ].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />
      <section className={`claim-hero claim-hero-${c.verdict.toLowerCase()}`}>
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">All claims</Link> / {c.category}
          </p>
          <p className="claim-label">The claim</p>
          <h1 className="claim-h1">&ldquo;{c.claim.replace(/\.$/, "")}&rdquo;</h1>
          <VerdictStamp verdict={c.verdict} size="lg" />
          <p className="claim-verdict-text">{c.verdictText}</p>
          <p className="hint">
            {VERDICT_LABEL[c.verdict]}: {VERDICT_BLURB[c.verdict]} Checked {formatDate(c.updated)}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap claim-layout">
          <div>
            <article className="claim-body">
              <h2>{content.question}</h2>
              {content.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {c.howToTest && (
              <div className="test-box">
                <h2>How to test it on launch day</h2>
                <p>{c.howToTest}</p>
                <p>
                  Got proof either way? <Link href={`/submit/?claim=${c.slug}`}>Send it in</Link> and we&apos;ll
                  credit you when the verdict changes.
                </p>
              </div>
            )}

            {place && (
              <div className="test-box">
                <h2>See it side by side</h2>
                <p>
                  Compare the real {place.real} with {place.game} in Leonida.
                </p>
                <Link href={`/places/${place.slug}/`} className="btn btn-small">Open the comparison</Link>
              </div>
            )}

            <section className="faq" aria-labelledby="faq-title">
              <h2 id="faq-title">People also ask</h2>
              {content.faq.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </section>

            <h2>Sources</h2>
            {c.sources.length > 0 ? (
              <ul className="sources">
                {c.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No official source mentions this yet. That&apos;s why it&apos;s unverified.</p>
            )}
            <p className="hint">
              Spotted something we missed? <Link href={`/submit/?claim=${c.slug}`}>Tell us</Link>.
            </p>
          </div>

          <aside>
            <VoteBox slug={c.slug} />
          </aside>
        </div>
      </section>

      <section className="section section-sky">
        <div className="wrap">
          <ShareCards slug={c.slug} title={`"${c.short}": ${VERDICT_LABEL[c.verdict].toUpperCase()}`} url={url} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>More {c.category.toLowerCase()} claims</h2>
            <ul className="related">
              {related.map((o) => (
                <li key={o.slug}>
                  <Link href={`/claims/${o.slug}/`}>
                    <span>{o.short}</span>
                    <VerdictStamp verdict={o.verdict} size="sm" />
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
