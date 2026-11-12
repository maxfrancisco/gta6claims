"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type State = { kind: "idle" } | { kind: "saving"; step: string } | { kind: "done" } | { kind: "error"; msg: string };

// Shrinks a photo to at most 1600px on its long side as a JPEG before upload.
// Keeps the free 1 GB of Supabase storage from filling up with 12 MB phone photos.
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const f = new FormData(formEl);
    if (f.get("website")) return; // honeypot

    if (!supabase) {
      setState({ kind: "error", msg: "Submissions aren't connected yet. Add the Supabase keys to turn them on." });
      return;
    }

    const id = crypto.randomUUID();
    const paths: Record<string, string | null> = { game: null, real: null };

    try {
      for (const side of ["game", "real"] as const) {
        const file = f.get(`${side}_image`) as File | null;
        if (file && file.size > 0) {
          if (!file.type.startsWith("image/")) throw new Error("Photos need to be image files (JPG, PNG or HEIC).");
          setState({ kind: "saving", step: side === "game" ? "Uploading your screenshot…" : "Uploading your photo…" });
          const blob = await shrink(file);
          const path = `${id}/${side}.jpg`;
          const { error } = await supabase.storage.from("submissions").upload(path, blob, { contentType: "image/jpeg" });
          if (error) throw new Error("The photo upload failed. Try a smaller image.");
          paths[side] = path;
        }
      }

      setState({ kind: "saving", step: "Sending your match…" });
      const { error } = await supabase.from("submissions").insert({
        id,
        game_place: String(f.get("game_place")).trim(),
        real_place: String(f.get("real_place")).trim(),
        real_location: String(f.get("real_location") || "").trim() || null,
        notes: String(f.get("notes") || "").trim() || null,
        handle: String(f.get("handle") || "").trim() || null,
        email: String(f.get("email") || "").trim() || null,
        game_image_path: paths.game,
        real_image_path: paths.real,
        photo_rights_confirmed: f.get("rights") === "on",
      });
      if (error) throw new Error("Your match didn't save. Check the required fields and try again.");

      formEl.reset();
      setState({ kind: "done" });
    } catch (err) {
      setState({ kind: "error", msg: err instanceof Error ? err.message : "Something went wrong. Try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <div role="status">
        <p className="status-ok">Match sent. We&apos;ll check it and credit you if it goes up.</p>
        <button className="btn btn-quiet" onClick={() => setState({ kind: "idle" })}>Submit another match</button>
      </div>
    );
  }

  const saving = state.kind === "saving";

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row-2">
        <div>
          <label htmlFor="game_place">In Leonida <span className="hint">(required)</span></label>
          <input id="game_place" name="game_place" type="text" required maxLength={140} placeholder="e.g. Diner on the Leonida Keys highway" />
        </div>
        <div>
          <label htmlFor="real_place">In real life <span className="hint">(required)</span></label>
          <input id="real_place" name="real_place" type="text" required maxLength={140} placeholder="e.g. Mrs. Mac's Kitchen" />
        </div>
      </div>

      <div>
        <label htmlFor="real_location">Where is the real place? <span className="hint">Address, street or town</span></label>
        <input id="real_location" name="real_location" type="text" maxLength={200} placeholder="e.g. Key Largo, FL" />
      </div>

      <div className="form-row-2">
        <div className="file-drop">
          <label htmlFor="game_image">In-game screenshot</label>
          <input id="game_image" name="game_image" type="file" accept="image/*" />
        </div>
        <div className="file-drop">
          <label htmlFor="real_image">Real-life photo <span className="hint">(optional)</span></label>
          <input id="real_image" name="real_image" type="file" accept="image/*" />
        </div>
      </div>

      <div>
        <label htmlFor="notes">What gives it away? <span className="hint">(optional)</span></label>
        <textarea id="notes" name="notes" maxLength={1000} placeholder="The sign, the shape of the roof, the view from the parking lot…" />
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
        <span>I took these photos and screenshots myself, and Real vs Leonida can publish them with credit.</span>
      </label>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website2">Leave this empty</label>
        <input id="website2" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button className="btn" type="submit" disabled={saving}>{saving ? state.step : "Send match"}</button>
        <p className="hint" style={{ marginTop: "0.75rem" }}>We use what you send only to check and credit the match. <Link href="/privacy/">Privacy</Link></p>
        {state.kind === "error" && <p className="status-err" role="alert" style={{ marginTop: "0.75rem" }}>{state.msg}</p>}
      </div>
    </form>
  );
}
