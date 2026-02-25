/**
 * HeroSection - Dark cyberpunk creative studio
 * Full layered background:
 *   Layer 1: Near-black base (#05090c) with radial gradient from right
 *   Layer 2: Subtle tech-grid (SVG, 8% opacity, slow drift animation)
 *   Layer 3: Ambient cyan glow behind logo (pulsing)
 * HUD: Multiple concentric rings with slow rotation, corner brackets, targeting frame
 * Floating particles: dots, squares, outlines with slow random motion
 * Mouse parallax: particles shift subtly with mouse position
 * Typewriter cycler: IMPACT → RESULTAAT → CONVERSIE
 * Logo inline next to typewriter text
 * CDN assets:
 *   Logo: https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/beOddLdPeurbEUar.png
 */

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypewriterCycler from "./TypewriterCycler";
import { Link } from "wouter";

// Particles config — static positions to avoid re-render flicker
const PARTICLES = [
  { id: 1, type: "dot", x: 12, y: 15, size: 5, opacity: 0.6, dur: 8, delay: 0 },
  { id: 2, type: "dot", x: 28, y: 8, size: 4, opacity: 0.4, dur: 11, delay: 2 },
  { id: 3, type: "dot", x: 55, y: 12, size: 3, opacity: 0.5, dur: 9, delay: 1 },
  { id: 4, type: "dot", x: 72, y: 20, size: 5, opacity: 0.7, dur: 13, delay: 3 },
  { id: 5, type: "dot", x: 88, y: 10, size: 4, opacity: 0.4, dur: 10, delay: 0.5 },
  { id: 6, type: "dot", x: 6, y: 55, size: 4, opacity: 0.5, dur: 12, delay: 4 },
  { id: 7, type: "dot", x: 45, y: 75, size: 3, opacity: 0.3, dur: 7, delay: 1.5 },
  { id: 8, type: "dot", x: 80, y: 65, size: 5, opacity: 0.6, dur: 14, delay: 2.5 },
  { id: 9, type: "dot", x: 22, y: 85, size: 3, opacity: 0.4, dur: 9, delay: 3.5 },
  { id: 10, type: "dot", x: 92, y: 45, size: 4, opacity: 0.5, dur: 11, delay: 1 },
  { id: 11, type: "square", x: 8, y: 30, size: 10, opacity: 0.2, dur: 15, delay: 2 },
  { id: 12, type: "square", x: 35, y: 18, size: 8, opacity: 0.15, dur: 18, delay: 5 },
  { id: 13, type: "square", x: 78, y: 82, size: 12, opacity: 0.18, dur: 16, delay: 0 },
  { id: 14, type: "square", x: 18, y: 70, size: 9, opacity: 0.12, dur: 20, delay: 3 },
  { id: 15, type: "square", x: 90, y: 30, size: 11, opacity: 0.2, dur: 14, delay: 6 },
  { id: 16, type: "circle", x: 5, y: 50, size: 18, opacity: 0.12, dur: 22, delay: 1 },
  { id: 17, type: "circle", x: 92, y: 65, size: 22, opacity: 0.1, dur: 25, delay: 4 },
  { id: 18, type: "circle", x: 40, y: 90, size: 14, opacity: 0.12, dur: 19, delay: 2 },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setMouse({
        x: (e.clientX - rect.left - cx) / cx,
        y: (e.clientY - rect.top - cy) / cy,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#05090c" }}
    >
      {/* ===== LAYER 1: Base radial gradient ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 72% 50%, oklch(0.20 0.12 195 / 30%) 0%, oklch(0.14 0.08 195 / 15%) 35%, transparent 70%)",
        }}
      />

      {/* ===== LAYER 2: Tech grid ===== */}
      <div
        className="absolute inset-0 pointer-events-none hero-grid-layer"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.78 0.18 185 / 0.07) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.78 0.18 185 / 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* ===== LAYER 3: Ambient glow behind logo ===== */}
      <div
        className="absolute pointer-events-none hero-ambient-glow"
        style={{
          right: "5%",
          top: "50%",
          transform: "translate(0, -50%)",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.78 0.18 185 / 0.22) 0%, oklch(0.78 0.18 185 / 0.10) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ===== Floating particles with mouse parallax ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => {
          const px = mouse.x * (p.id % 3 === 0 ? -8 : p.id % 2 === 0 ? 5 : -3);
          const py = mouse.y * (p.id % 3 === 0 ? -5 : p.id % 2 === 0 ? 8 : -4);
          return (
            <div
              key={p.id}
              className="absolute"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: `translate(${px}px, ${py}px)`,
                transition: "transform 0.8s ease-out",
                animation: `heroFloat${p.id % 4} ${p.dur}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            >
              {p.type === "dot" && (
                <div
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    borderRadius: "50%",
                    background: "oklch(0.78 0.18 185)",
                    opacity: p.opacity,
                    boxShadow: `0 0 ${p.size * 2}px oklch(0.78 0.18 185 / 0.5)`,
                  }}
                />
              )}
              {p.type === "square" && (
                <div
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    border: "1px solid oklch(0.78 0.18 185)",
                    opacity: p.opacity,
                    transform: `rotate(${p.id * 15}deg)`,
                  }}
                />
              )}
              {p.type === "circle" && (
                <div
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    borderRadius: "50%",
                    border: "1px solid oklch(0.78 0.18 185 / 0.5)",
                    opacity: p.opacity,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Main content ===== */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="min-h-screen py-28 md:py-32 flex flex-col justify-center">

          {/* Text content */}
          <div>
            {/* Badge */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-16px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              <span className="tag-badge mb-6 inline-block">Creative Design Studio</span>
            </div>

            {/* Heading with inline logo */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
              }}
            >
              <h1
                className="font-display text-white mb-2"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.0 }}
              >
                VAN IDEE
              </h1>
              <h1
                className="font-display text-white mb-2"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.0 }}
              >
                NAAR
              </h1>
              {/* Flex row: typewriter text + logo */}
              <div className="flex items-center gap-4 md:gap-8 mb-6">
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    lineHeight: 1.0,
                    color: "oklch(0.78 0.18 185)",
                    textShadow: "0 0 40px oklch(0.78 0.18 185 / 0.5)",
                  }}
                >
                  <TypewriterCycler />
                </h1>
                {/* HUD logo inline */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(80px, 20vw, 200px)",
                    height: "clamp(80px, 20vw, 200px)",
                    opacity: mounted ? 1 : 0,
                    transition: "opacity 1.2s ease 0.4s",
                  }}
                >
                  <div className="relative" style={{ width: "100%", height: "100%" }}>
                    {/* Ambient glow */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        inset: "-30%",
                        background: "radial-gradient(circle, oklch(0.78 0.18 185 / 0.18) 0%, transparent 65%)",
                        filter: "blur(20px)",
                        animation: "hudGlow 4s ease-in-out infinite",
                      }}
                    />
                    {/* Outer ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid oklch(0.78 0.18 185 / 0.20)",
                        animation: "hudRotateSlow 40s linear infinite",
                      }}
                    />
                    {/* Middle ring */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        inset: "6%",
                        border: "1px solid oklch(0.78 0.18 185 / 0.30)",
                        animation: "hudRotateReverse 28s linear infinite",
                      }}
                    />
                    {/* Inner ring */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        inset: "12%",
                        border: "1.5px solid oklch(0.78 0.18 185 / 0.18)",
                        animation: "hudRotateSlow 55s linear infinite reverse",
                      }}
                    />
                    {/* Logo image */}
                    <div
                      className="absolute overflow-hidden flex items-center justify-center"
                      style={{
                        inset: "12%",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, oklch(0.16 0.08 200 / 0.7) 0%, oklch(0.09 0.03 210 / 0.9) 100%)",
                        border: "1px solid oklch(0.78 0.18 185 / 0.15)",
                      }}
                    >
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/beOddLdPeurbEUar.png"
                        alt="Tussen de Lijnen"
                        style={{
                          width: "85%",
                          height: "85%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 30px oklch(0.78 0.18 185 / 0.7))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtext */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
              }}
            >
              <p
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Wij helpen ondernemers groeien met branding, grafisch ontwerp en digitale oplossingen die écht werken.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
              }}
            >
              <Link href="/contact" className="btn-primary-cyan">
                Start je project <ArrowRight size={16} />
              </Link>
              <Link href="/diensten" className="btn-outline-dashed">
                Bekijk ons werk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <span>Scroll</span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}
