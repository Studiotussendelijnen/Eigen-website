/**
 * ServicesSection - Dark cyberpunk creative studio
 * - PASSIE watermark spans the full section behind the cards
 * - Cards are semi-transparent so PASSIE is visible through them
 * - Dot-indicator pagination animation on the right side
 * - Staggered vertical offset cards matching the reference screenshot
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Palette, Image, Share2, Monitor, Printer } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { Link } from "wouter";

const services = [
  {
    icon: <Palette size={24} strokeWidth={1.5} />,
    title: "BRANDING",
    description: "Logo's en huisstijlen die je merk laten opvallen.",
    offset: 0,
    delay: 0,
  },
  {
    icon: <Image size={24} strokeWidth={1.5} />,
    title: "GRAFISCH ONTWERP",
    description: "Visitekaartjes, flyers en alles daartussen.",
    offset: 50,
    delay: 80,
  },
  {
    icon: <Share2 size={24} strokeWidth={1.5} />,
    title: "SOCIAL MEDIA",
    description: "Content die het scrollen stopt.",
    offset: 100,
    delay: 160,
  },
  {
    icon: <Monitor size={24} strokeWidth={1.5} />,
    title: "WEBSITES",
    description: "Moderne sites die bezoekers omzetten in klanten.",
    offset: 50,
    delay: 240,
  },
  {
    icon: <Printer size={24} strokeWidth={1.5} />,
    title: "DRUKWERK",
    description: "Posters, brochures en tastbaar materiaal.",
    offset: 0,
    delay: 320,
  },
];

// Dot indicator that cycles through 4 positions automatically
function DotIndicator() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: active === i ? "28px" : "8px",
            height: "8px",
            borderRadius: "4px",
            background: active === i ? "oklch(0.78 0.18 185)" : "oklch(1 0 0 / 25%)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="diensten"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "oklch(0.07 0.02 240)", paddingTop: "6rem", paddingBottom: "10rem" }}
    >
      {/* PASSIE watermark — full section, very prominent */}
      <div
        className="absolute font-display pointer-events-none select-none"
        style={{
          fontSize: "clamp(10rem, 28vw, 22rem)",
          color: "oklch(0.75 0.04 200 / 12%)",
          lineHeight: 1,
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          zIndex: 0,
          letterSpacing: "-0.02em",
        }}
      >
        PASSIE
      </div>

      {/* Dot indicator — right side, like the reference */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <DotIndicator />
      </div>

      {/* Small floating dot — left side */}
      <div
        className="absolute left-8 top-1/2 pointer-events-none"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "oklch(0.78 0.18 185)",
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative" style={{ zIndex: 1 }}>
        {/* Header row: title left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <AnimateIn direction="left" delay={0}>
              <span className="tag-badge mb-4 inline-block">Wat we doen</span>
            </AnimateIn>
            <AnimateIn direction="left" delay={100}>
              <h2
                className="font-display text-white"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.0 }}
              >
                ONZE{" "}
                <span style={{ color: "oklch(0.78 0.18 185)" }}>DIENSTEN</span>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn direction="right" delay={200}>
            <p
              className="text-white/50 text-base leading-relaxed lg:text-right"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Van concept tot uitvoering. Wij brengen jouw visie tot leven met creativiteit en vakmanschap.
            </p>
          </AnimateIn>
        </div>

        {/* Cards row — semi-transparent so PASSIE shows through */}
        <div
          className="flex flex-col md:flex-row gap-4 items-start"
          style={{ paddingBottom: "80px" }}
        >
          {services.map((service) => (
            <AnimateIn
              key={service.title}
              direction="up"
              delay={service.delay}
              className="flex-1 w-full md:w-auto"
            >
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
                style={{
                  /* Semi-transparent background so PASSIE watermark shows through */
                  background: "oklch(0.12 0.03 220 / 65%)",
                  border: "1px solid oklch(0.78 0.18 185 / 20%)",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  marginTop: `${service.offset}px`,
                  minHeight: "220px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.78 0.18 185 / 60%)";
                  el.style.boxShadow = "0 8px 32px oklch(0.78 0.18 185 / 12%)";
                  el.style.transform = "translateY(-6px)";
                  el.style.background = "oklch(0.14 0.04 220 / 80%)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.78 0.18 185 / 20%)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                  el.style.background = "oklch(0.12 0.03 220 / 65%)";
                }}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "oklch(0.78 0.18 185 / 20%)",
                    border: "1px solid oklch(0.78 0.18 185 / 40%)",
                    color: "oklch(0.78 0.18 185)",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    className="font-display text-white mb-2"
                    style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn direction="up" delay={400}>
          <div className="flex justify-center mt-2">
            <Link href="/diensten" className="btn-outline-dashed text-sm">
              Bekijk alle diensten <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
