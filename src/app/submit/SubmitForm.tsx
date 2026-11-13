"use client";

import Link from "next/link";
import { useState } from "react";
import { useBrowserValue } from "@/lib/client";
import { supabase } from "@/lib/supabase";
import { CATEGORIES, claimBySlug } from "@/lib/claims";

type State = { kind: "idle" } | { kind: "saving"; step: string } | { kind: "done" } | { kind: "error"; msg: string };

// Shrinks a screenshot to at most 1600px on its long side as a JPEG before upload.
// Keeps the free 1 GB of Supabase storage from filling up with 12 MB phone images.
async function shrink(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Couldn't read that image"))), "image/jpeg", 0.82)
  );
}

export default function SubmitForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  // Arriving from a claim page (/submit/?claim=<slug>) pre-fills that claim.
  const fromSlug = useBrowserValue(() => new URLSearchParams(window.location.search).get("claim"), null);
  const fromClaim = fromSlug ? claimBySlug(fromSlug) : undefined;
  const prefill = fromClaim ? { claim: fromClaim.claim, category: fromClaim.category } : null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const f = new FormData(formEl);
    if (f.get("website")) return; // honeypot

    if (!supabase) {
      setState({ kind: "error", msg: "Submissions aren't connected yet." });
      return;
    }

    const id = crypto.randomUUID();
    let imagePath: string | null = null;

    try {
      const file = f.get("proof_image") as File | null;
      if (file && file.size > 0) {
        if (!file.type.startsWith("image/")) throw new Error("Proof needs to be an image file (JPG, PNG or HEIC).");
        setState({ kind: "saving", step: "Uploading your screenshot…" });
        const blob = await shrink(file);
        const path = `claims/${id}/proof.jpg`;
        const { error } = await supabase.storage.from("submissions").upload(path, blob, { contentType: "image/jpeg" });
        if (error) throw new Error("The upload failed. Try a smaller image.");
        imagePath = path;
      }

      setState({ kind: "saving", step: "Sending your claim…" });
      const { error } = await supabase.from("claim_submissions").insert({
        id,
        claim: String(f.get("claim")).trim(),
        category: String(f.get("category") || "").trim() || null,
        proof_url: String(f.get("proof_url") || "").trim() || null,
        proof_image_path: imagePath,
        notes: String(f.get("notes") || "").trim() || null,
        handle: String(f.get("handle") || "").trim() || null,
        email: String(f.get("email") || "").trim() || null,
        photo_rights_confirmed: f.get("rights") === "on",
      });
      if (error) throw new Error("Your claim didn't save. Check the required fields and try again.");

      formEl.reset();
      setState({ kind: "done" });
    } catch (err) {
      setState({ kind: "error", msg: err instanceof Error ? err.message : "Something went wrong. Try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <div role="status">
        <p className="status-ok">Claim sent. We&apos;ll check it and credit you when the verdict goes up.</p>
        <button className="btn btn-quiet" onClick={() => setState({ kind: "idle" })}>Submit another claim</button>
      </div>
    );
  }

  const saving = state.kind === "saving";

  return (
    <form className="form" onSubmit={onSubmit} key={prefill?.claim ?? "blank"}>
      <div>
        <label htmlFor="claim">The claim <span className="hint">(required)</span></label>
        <input
          id="claim" name="claim" type="text" required minLength={8} maxLength={200}
          defaultValue={prefill?.claim}
          placeholder="e.g. You can climb to the top of Mount Kalaga"
        />
      </div>

      <div className="form-row-2">
        <div>
          <label htmlFor="category">Topic</label>
          <select id="category" name="category" defaultValue={prefill?.category ?? ""}>
            <option value="">Not sure</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="proof_url">Link to proof <span className="hint">(clip, post or article)</span></label>
          <input id="proof_url" name="proof_url" type="url" maxLength={400} placeholder="https://" />
        </div>
      </div>

      <div className="file-drop">
        <label htmlFor="proof_image">Screenshot <span className="hint">(optional)</span></label>
        <input id="proof_image" name="proof_image" type="file" accept="image/*" />
      </div>

      <div>
        <label htmlFor="notes">What did you see? <span className="hint">(optional)</span></label>
        <textarea id="notes" name="notes" maxLength={1000} placeholder="Where it happened, what you did, whether it worked…" />
      </div>

      <div className="form-row-2">
        <div>
          <label htmlFor="handle">Credit me as <span className="hint">(optional)</span></label>
          <input id="handle" name="handle" type="text" maxLength={60} placeholder="Your name or @handle" />
        </div>
        <div>
          <label htmlFor="sub_email">Email <span className="hint">(optional, only to follow up)</span></label>
          <input id="sub_email" name="email" type="email" maxLength={200} autoComplete="email" />
        </div>
      </div>

      <label style={{ fontWeight: 400, display: "flex", gap: "0.6rem", alignItems: "start" }}>
        <input type="checkbox" name="rights" required style={{ marginTop: "0.35rem" }} />
        <span>Any screenshot I add is my own, and GTA 6 Claims can publish it with credit.</span>
      </label>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website2">Leave this empty</label>
        <input id="website2" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button className="btn" type="submit" disabled={saving}>{saving ? state.step : "Send claim"}</button>
        <p className="hint" style={{ marginTop: "0.75rem" }}>We use what you send only to check and credit the claim. <Link href="/privacy/">Privacy</Link></p>
        {state.kind === "error" && <p className="status-err" role="alert" style={{ marginTop: "0.75rem" }}>{state.msg}</p>}
      </div>
    </form>
  );
}
