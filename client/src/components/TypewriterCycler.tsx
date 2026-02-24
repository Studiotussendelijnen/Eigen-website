/**
 * TypewriterCycler - Types out words one by one, then cycles to the next
 * Used in hero heading: "VAN IDEE NAAR [IMPACT → RESULTAAT → CONVERSIE]"
 */
import { useEffect, useState } from "react";

const WORDS = ["IMPACT", "RESULTAAT", "CONVERSIE"];
const TYPE_SPEED = 80;   // ms per character
const DELETE_SPEED = 50; // ms per character
const PAUSE_AFTER_TYPE = 2000; // ms before deleting
const PAUSE_AFTER_DELETE = 400; // ms before typing next

export default function TypewriterCycler() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const word = WORDS[wordIndex];

    if (phase === "typing") {
      if (displayed.length < word.length) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setWordIndex((i) => (i + 1) % WORDS.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [phase, displayed, wordIndex]);

  return (
    <span
      style={{
        color: "oklch(0.78 0.18 185)",
        display: "inline-block",
        minWidth: "2ch",
        position: "relative",
      }}
    >
      {displayed}
      {/* Blinking cursor */}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.85em",
          background: "oklch(0.78 0.18 185)",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}
