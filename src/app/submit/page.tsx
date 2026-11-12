import type { Metadata } from "next";
import SubmitForm from "./SubmitForm";

export const metadata: Metadata = {
  title: "Submit a real-world match",
  description: "Found a real Florida place in GTA 6? Send it in and get credited on the comparison page.",
  alternates: { canonical: "/submit/" },
};

export default function SubmitPage() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Submit a match</h1>
        <p>
          Tell us what you found in Leonida and where you think it is in real life. An in-game
          screenshot helps us check it fast. If you live nearby, add a photo of the real place.
        </p>
        <SubmitForm />
      </div>
    </section>
  );
}
