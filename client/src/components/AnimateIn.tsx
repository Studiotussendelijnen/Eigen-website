/**
 * AnimateIn - Scroll-triggered fade-in-up animation wrapper
 * Wraps children and animates them into view when they enter the viewport
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CSSProperties, ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 600,
  threshold = 0.1,
  className = "",
  style = {},
}: AnimateInProps) {
  const { ref, visible } = useScrollAnimation(threshold);

  const getTransform = () => {
    if (direction === "up") return `translateY(${distance}px)`;
    if (direction === "down") return `translateY(-${distance}px)`;
    if (direction === "left") return `translateX(${distance}px)`;
    if (direction === "right") return `translateX(-${distance}px)`;
    return "none";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : getTransform(),
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
