import type { Metadata } from "next";
import Link from "next/link";
import {
  CHECK_LINKS, ISSUES, ISSUE_LABEL, PATCHES, PERFORMANCE, STATUS, STATUS_LABEL, TIMELINE,
} from "@/lib/status";

export const metadata: Metadata = {
  title: "Is GTA 6 down? Status, patch notes and known issues",
  description:
    "Live GTA 6 status: outages, every patch and its size, known bugs marked Fixed or Not fixed, and how the game runs on each console.",
  alternates: { canonical: "/status/" },
};

function day(iso: string) {
  return new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function checkedAt(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "long", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short",
  });
}

export default function StatusPage() {
  return (
    <>
      <section className={`status-hero status-${STATUS.level.toLowerCase()}`}>
        <div className="wrap">
          <p className="claim-label">GTA 6 status</p>
          <h1>Is GTA 6 down?</h1>
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" /> {STATUS_LABEL[STATUS.level]}
          </p>
          <p className="status-headline">{STATUS.headline}</p>
          <p>{STATUS.detail}</p>
          <p className="hint">Last checked {checkedAt(STATUS.updated)}. We update this page by hand, so for live outages also check the official pages below.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Check the official status pages</h2>
          <ul className="check-links">
            {CHECK_LINKS.map((l) => (
              <li key={l.url}>
                <a href={l.url} rel="noopener" target="_blank">{l.label}</a>
                <span className="hint">{l.what}</span>
              </li>
            ))}
          </ul>
          <p className="hint">If every device in your home is slow, the problem is probably your internet provider, not the game.</p>
        </div>
      </section>

      <section className="section section-sky">
        <div className="wrap">
          <h2>Known issues</h2>
          <ul className="issues">
            {ISSUES.map((i) => (
              <li key={i.id} className={`issue issue-${i.state.toLowerCase()}`} id={i.id}>
                <div className="issue-head">
                  <span className={`issue-state issue-state-${i.state.toLowerCase()}`}>{ISSUE_LABEL[i.state]}</span>
                  <span className="hint">{i.platforms} · updated {day(i.updated)}</span>
                </div>
                <h3>{i.title}</h3>
                <p>{i.detail}</p>
                {i.fix && <p><strong>What to do:</strong> {i.fix}</p>}
                <p className="hint">
                  Sources:{" "}
                  {i.sources.map((s, n) => (
                    <span key={s.url}>{n > 0 && ", "}<a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a></span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p>
            Hit a bug that isn&apos;t listed? <Link href="/submit/">Tell us</Link> with your console and what happened.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>GTA 6 patch notes</h2>
          {PATCHES.map((p) => (
            <article key={p.version} className="patch" id={`v${p.version}`}>
              <h3>Update {p.version} <span className="hint">· {day(p.date)}</span></h3>
              <p>{p.summary}</p>
              <dl className="patch-sizes">
                {p.sizes.map((s) => (
                  <div key={s.platform}><dt>{s.platform}</dt><dd>{s.size}</dd></div>
                ))}
              </dl>
              <ul>
                {p.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
              <p className="hint">
                Sources:{" "}
                {p.sources.map((s, n) => (
                  <span key={s.url}>{n > 0 && ", "}<a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a></span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-sky">
        <div className="wrap">
          <h2>How GTA 6 runs on each console</h2>
          <div className="table-scroll">
            <table className="perf">
              <thead>
                <tr><th scope="col">Console</th><th scope="col">Frame rate</th><th scope="col">Resolution</th><th scope="col">Extras</th><th scope="col">Based on</th></tr>
              </thead>
              <tbody>
                {PERFORMANCE.map((r) => (
                  <tr key={r.console}>
                    <th scope="row">{r.console}</th><td>{r.fps}</td><td>{r.resolution}</td><td>{r.extras}</td>
                    <td><span className={`basis basis-${r.basis.toLowerCase()}`}>{r.basis}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hint">
            &ldquo;Official&rdquo; means Rockstar said it. &ldquo;Estimate&rdquo; means analysts expect it. We&apos;ll replace estimates with tested numbers after launch.
            More: <Link href="/claims/gta-6-runs-at-60-fps/">Does it run at 60 fps?</Link> · <Link href="/claims/gta-6-downgraded-on-xbox/">Is Xbox downgraded?</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Launch timeline</h2>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.label} className={t.done ? "done" : ""}>
                <span className="t-date">{day(t.date)}</span>
                <strong>{t.label}</strong>
                <span>{t.detail}</span>
              </li>
            ))}
          </ol>
          <p>
            Related: <Link href="/claims/preload-starts-november-10/">How to pre-load</Link> ·{" "}
            <Link href="/claims/gta-6-unlocks-at-midnight-local-time/">What time it unlocks</Link> ·{" "}
            <Link href="/claims/gta-6-has-a-day-one-patch/">Day one patch</Link> ·{" "}
            <Link href="/claims/gta-online-launches-same-day/">When GTA 6 Online comes out</Link>
          </p>
        </div>
      </section>
    </>
  );
}
