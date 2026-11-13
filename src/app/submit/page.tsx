import type { Metadata } from "next";
import SubmitForm from "./SubmitForm";

export const metadata: Metadata = {
  title: "Submit a GTA 6 claim",
  description: "Heard a GTA 6 rumor or found proof in the game? Send it in and get credited when the verdict goes up.",
  alternates: { canonical: "/submit/" },
};

export default function SubmitPage() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Submit a claim</h1>
        <p>
          Heard something about GTA 6, or tested it yourself? Send the claim and any proof you have. A clip
          link or a screenshot gets it checked fastest. Real-world places count too.
        </p>
        <SubmitForm />
      </div>
    </section>
  );
}
