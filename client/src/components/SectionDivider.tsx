/**
 * SectionDivider - Elegant cyan dot with horizontal lines
 * Replaces the confusing floating dot decorations between sections
 * Animates: lines expand outward from center dot on mount
 */

import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center pointer-events-none select-none"
      style={{ height: "48px", overflow: "hidden" }}
    >
      {/* Left line */}
      <div
        style={{
          position: "absolute",
          right: "calc(50% + 14px)",
          top: "50%",
          height: "1px",
          width: visible ? "120px" : "0px",
          background: "linear-gradient(to left, oklch(0.78 0.18 185 / 60%), transparent)",
          transform: "translateY(-50%)",
          transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.1s",
        }}
      />
      {/* Center dot */}
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "oklch(0.78 0.18 185)",
          boxShadow: "0 0 12px oklch(0.78 0.18 185 / 80%), 0 0 24px oklch(0.78 0.18 185 / 40%)",
          flexShrink: 0,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          transitionDelay: "0s",
        }}
      />
      {/* Right line */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 14px)",
          top: "50%",
          height: "1px",
          width: visible ? "120px" : "0px",
          background: "linear-gradient(to right, oklch(0.78 0.18 185 / 60%), transparent)",
          transform: "translateY(-50%)",
          transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.1s",
        }}
      />
    </div>
  );
}
