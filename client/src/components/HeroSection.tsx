/**
 * HeroSection - Dark cyberpunk creative studio
 * Full-viewport hero with large heading left, logo circle graphic right
 * Floating geometric decorations, scroll indicator at bottom
 */

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 65% 50%, oklch(0.18 0.12 195 / 35%) 0%, oklch(0.12 0.05 200 / 20%) 35%, oklch(0.09 0.02 240) 65%)",
      }}
    >
      {/* Floating geometric decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top area dots and shapes */}
        <div className="float-dot animate-pulse-glow" style={{ top: "12%", left: "18%" }} />
        <div className="float-dot animate-pulse-glow" style={{ top: "8%", right: "35%", animationDelay: "1s" }} />
        <div className="float-dot" style={{ top: "22%", right: "20%", opacity: 0.4 }} />
        <div className="float-dot" style={{ bottom: "30%", left: "8%", opacity: 0.5, animationDelay: "0.5s" }} />
        <div className="float-dot animate-pulse-glow" style={{ bottom: "20%", right: "30%", animationDelay: "2s" }} />
        
        {/* Diamond shapes */}
        <div className="diamond-deco animate-float-slow" style={{ top: "15%", right: "12%", opacity: 0.5 }} />
        <div className="diamond-deco animate-float-slow" style={{ bottom: "35%", left: "5%", opacity: 0.3, animationDelay: "2s" }} />
        <div className="diamond-deco" style={{ top: "50%", left: "15%", opacity: 0.2, animationDelay: "1s" }} />
        
        {/* Small squares */}
        <div className="square-deco animate-float" style={{ top: "30%", left: "10%", opacity: 0.25, animationDelay: "1.5s" }} />
        <div className="square-deco" style={{ bottom: "40%", right: "8%", opacity: 0.2 }} />
        <div className="square-deco animate-float" style={{ top: "65%", right: "22%", opacity: 0.15, animationDelay: "3s" }} />

        {/* Small circle outline */}
        <div
          className="absolute animate-float-slow"
          style={{
            top: "20%", right: "8%",
            width: "28px", height: "28px",
            border: "1.5px solid oklch(1 0 0 / 15%)",
            borderRadius: "50%",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "25%", left: "20%",
            width: "20px", height: "20px",
            border: "1.5px solid oklch(1 0 0 / 12%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h1 className="font-display text-white leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: "0.95" }}>
              VAN IDEE<br />
              NAAR{" "}<span style={{ color: "oklch(0.78 0.18 185)" }}>RESULTAAT</span>
            </h1>

            <p className="text-white/60 text-base leading-relaxed max-w-md" style={{ fontFamily: "Inter, sans-serif" }}>
              Wij helpen ondernemers groeien met branding, grafisch ontwerp en digitale oplossingen die écht werken.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
                className="btn-primary-cyan"
              >
                Start je project <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); handleScroll("#diensten"); }}
                className="btn-outline-dashed"
              >
                Bekijk ons werk
              </a>
            </div>
          </div>

          {/* Right: Logo circle graphic */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative" style={{ width: "360px", height: "360px" }}>
              {/* Outer circle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid oklch(0.78 0.18 185 / 25%)",
                }}
              />
              {/* Inner glow circle */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "20px",
                  border: "1px solid oklch(0.78 0.18 185 / 20%)",
                  background: "radial-gradient(circle, oklch(0.18 0.12 195 / 50%) 0%, oklch(0.14 0.08 195 / 20%) 50%, transparent 70%)",
                  boxShadow: "0 0 60px oklch(0.78 0.18 185 / 20%) inset",
                }}
              />

              {/* Corner brackets */}
              <div className="corner-bracket tl" style={{ top: "10px", left: "10px" }} />
              <div className="corner-bracket tr" style={{ top: "10px", right: "10px" }} />
              <div className="corner-bracket bl" style={{ bottom: "10px", left: "10px" }} />
              <div className="corner-bracket br" style={{ bottom: "10px", right: "10px" }} />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="font-display text-white text-center leading-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", textShadow: "0 0 40px oklch(0.78 0.18 185 / 30%)" }}
                >
                  TUSSEN
                </div>
                <div
                  className="font-display text-center leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    color: "oklch(0.78 0.18 185)",
                    textShadow: "0 0 40px oklch(0.78 0.18 185 / 60%)",
                  }}
                >
                  DE LIJNEN
                </div>
                <div
                  className="text-white/50 text-center mt-3"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.25em", fontFamily: "Inter, sans-serif" }}
                >
                  CREATIVE DESIGN STUDIO
                </div>
              </div>

              {/* Decorative dots on circle */}
              <div
                className="float-dot"
                style={{ top: "50%", left: "-4px", transform: "translateY(-50%)" }}
              />
              <div
                className="float-dot"
                style={{ top: "50%", right: "-4px", transform: "translateY(-50%)" }}
              />
              <div
                className="float-dot"
                style={{ top: "-4px", left: "50%", transform: "translateX(-50%)" }}
              />
              <div
                className="float-dot"
                style={{ bottom: "-4px", left: "50%", transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
      >
        <span>Scroll</span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}
