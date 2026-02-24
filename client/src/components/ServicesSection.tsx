/**
 * ServicesSection - Dark cyberpunk creative studio
 * Staggered card layout: cards at different vertical offsets, PASSIE watermark behind heading
 * Matches the screenshot: 5 cards in a row with vertical stagger effect
 * Each card has a cyan icon box, bold title, and short description
 */

import { ArrowRight, Palette, Image, Share2, Monitor, Printer } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { Link } from "wouter";

const services = [
  {
    icon: <Palette size={22} strokeWidth={1.5} />,
    title: "BRANDING",
    description: "Logo's en huisstijlen die je merk laten opvallen.",
    offset: 0,
    delay: 0,
  },
  {
    icon: <Image size={22} strokeWidth={1.5} />,
    title: "GRAFISCH ONTWERP",
    description: "Visitekaartjes, flyers en alles daartussen.",
    offset: 40,
    delay: 80,
  },
  {
    icon: <Share2 size={22} strokeWidth={1.5} />,
    title: "SOCIAL MEDIA",
    description: "Content die het scrollen stopt.",
    offset: 80,
    delay: 160,
  },
  {
    icon: <Monitor size={22} strokeWidth={1.5} />,
    title: "WEBSITES",
    description: "Moderne sites die bezoekers omzetten in klanten.",
    offset: 40,
    delay: 240,
  },
  {
    icon: <Printer size={22} strokeWidth={1.5} />,
    title: "DRUKWERK",
    description: "Posters, brochures en tastbaar materiaal.",
    offset: 0,
    delay: 320,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="diensten"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 240)" }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="diamond-deco animate-float-slow" style={{ top: "10%", right: "5%", opacity: 0.25 }} />
        <div className="float-dot animate-pulse-glow" style={{ bottom: "20%", left: "3%", animationDelay: "1.5s" }} />
        <div className="square-deco animate-float" style={{ top: "50%", right: "2%", opacity: 0.2, animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div className="relative">
            {/* PASSIE watermark */}
            <div
              className="absolute font-display pointer-events-none select-none"
              style={{
                fontSize: "clamp(5rem, 18vw, 14rem)",
                color: "oklch(1 0 0 / 4%)",
                lineHeight: 1,
                top: "-30%",
                left: "-5%",
                whiteSpace: "nowrap",
                zIndex: 0,
              }}
            >
              PASSIE
            </div>
            <div className="relative z-10">
              <AnimateIn direction="left" delay={0}>
                <span className="tag-badge mb-4 inline-block">Wat we doen</span>
              </AnimateIn>
              <AnimateIn direction="left" delay={100}>
                <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}>
                  ONZE{" "}
                  <span style={{ color: "oklch(0.78 0.18 185)" }}>DIENSTEN</span>
                </h2>
              </AnimateIn>
            </div>
          </div>
          <AnimateIn direction="right" delay={200}>
            <p
              className="text-white/50 text-base leading-relaxed text-right"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Van concept tot uitvoering. Wij brengen jouw visie tot leven met creativiteit en vakmanschap.
            </p>
          </AnimateIn>
        </div>

        {/* Staggered cards row */}
        <div
          className="relative flex flex-col md:flex-row gap-4 items-start"
          style={{ paddingBottom: "80px" }}
        >
          {services.map((service, idx) => (
            <AnimateIn key={service.title} direction="up" delay={service.delay} className="flex-1 w-full md:w-auto">
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group"
                style={{
                  background: "oklch(0.13 0.025 240)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                  marginTop: `${service.offset}px`,
                  minHeight: "200px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 185 / 50%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px oklch(0.78 0.18 185 / 10%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 8%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "oklch(0.78 0.18 185 / 15%)",
                    border: "1px solid oklch(0.78 0.18 185 / 40%)",
                    color: "oklch(0.78 0.18 185)",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    className="font-display text-white mb-2"
                    style={{ fontSize: "1rem", letterSpacing: "0.05em" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
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
          <div className="flex justify-center mt-4">
            <Link href="/diensten" className="btn-outline-dashed text-sm">
              Bekijk alle diensten <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
