"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type State = { kind: "idle" } | { kind: "saving" } | { kind: "done"; msg: string } | { kind: "error"; msg: string };

export default function SignupForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("website")) return; // honeypot: bots fill hidden fields
    const email = String(form.get("email") || "").trim().toLowerCase();
    if (!supabase) {
      setState({ kind: "error", msg: "Signups aren't connected yet. Add the Supabase keys to turn them on." });
      return;
    }
    setState({ kind: "saving" });
    const { error } = await supabase.from("subscribers").insert({ email, source: "home" });
    if (!error || error.code === "23505") {
      setState({ kind: "done", msg: "You're on the list. First comparisons land on launch day." });
    } else {
      setState({ kind: "error", msg: "That didn't go through. Check the email address and try again." });
    }
  }

  if (state.kind === "done") return <p className="status-ok" role="status">{state.msg}</p>;

  return (
    <>
      <form className="signup" onSubmit={onSubmit}>
        <label htmlFor="email" className="hp">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Leave this empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button className="btn" type="submit" disabled={state.kind === "saving"}>
          {state.kind === "saving" ? "Adding you…" : "Get launch-day comparisons"}
        </button>
      </form>
      {state.kind === "error" ? (
        <p className="status-err" role="alert">{state.msg}</p>
      ) : (
        <p className="field-note">One email when new comparisons go up. No spam. <Link href="/privacy/">Privacy</Link></p>
      )}
    </>
  );
}
