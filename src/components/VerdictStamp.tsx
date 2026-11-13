import { VERDICT_LABEL, type Verdict } from "@/lib/claims";

export default function VerdictStamp({ verdict, size = "md" }: { verdict: Verdict; size?: "sm" | "md" | "lg" }) {
  return (
    <span className={`stamp stamp-${verdict.toLowerCase()} stamp-${size}`}>
      {VERDICT_LABEL[verdict]}
    </span>
  );
}
