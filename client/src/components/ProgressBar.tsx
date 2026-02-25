/**
 * ProgressBar - Scroll progress indicator
 * Blue line at top of page showing scroll position
 */

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    // Call once on mount to set initial value
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-[9999] transition-all duration-300"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, oklch(0.78 0.18 185), oklch(0.85 0.20 185))",
        boxShadow: "0 0 20px oklch(0.78 0.18 185 / 0.6)",
      }}
    />
  );
}
