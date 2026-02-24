/**
 * ServicesSection - Dark cyberpunk creative studio
 * "ONZE DIENSTEN" with large PASSIE watermark, horizontal scrolling service cards
 */

import { ArrowRight, Palette, Image, Share2, Monitor, Printer } from "lucide-react";

const services = [
  {
    number: "01",
    title: "BRANDING",
    description: "Logo's en huisstijlen die je merk laten opvallen.",
    icon: Palette,
  },
  {
    number: "02",
    title: "GRAFISCH ONTWERP",
    description: "Visitekaartjes, flyers en alles daartussen.",
    icon: Image,
  },
  {
    number: "03",
    title: "SOCIAL MEDIA",
    description: "Content die het scrollen stopt.",
    icon: Share2,
  },
  {
    number: "04",
    title: "WEBSITES",
    description: "Moderne sites die bezoekers omzetten in klanten.",
    icon: Monitor,
  },
  {
    number: "05",
    title: "DRUKWERK",
    description: "Posters, brochures en tastbaar materiaal.",
    icon: Printer,
  },
];

export default function ServicesSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="diensten"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 240)" }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="diamond-deco" style={{ top: "20%", right: "5%", opacity: 0.3 }} />
        <div className="float-dot animate-pulse-glow" style={{ top: "15%", left: "3%", animationDelay: "1s" }} />
        <div className="square-deco animate-float" style={{ bottom: "20%", right: "3%", opacity: 0.2 }} />
        <div className="float-dot" style={{ bottom: "30%", left: "8%", opacity: 0.4 }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="relative">
            <span className="tag-badge mb-4 inline-block">Wat we doen</span>
            {/* Watermark */}
            <div
              className="watermark-text absolute select-none"
              style={{
                fontSize: "clamp(5rem, 15vw, 12rem)",
                lineHeight: 1,
                opacity: 0.06,
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              PASSIE
            </div>
            <h2 className="font-display text-white relative z-10" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
              ONZE{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>DIENSTEN</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs lg:max-w-sm lg:text-right mt-4 lg:mt-12" style={{ fontFamily: "Inter, sans-serif" }}>
            Van concept tot uitvoering. Wij brengen jouw visie tot leven met creativiteit en vakmanschap.
          </p>
        </div>

        {/* Horizontal scrolling cards */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="service-card flex-shrink-0"
                style={{ width: "210px", minWidth: "210px" }}
              >
                {/* Icon */}
                <div
                  className="mb-4 flex items-center justify-center rounded-lg"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "oklch(0.78 0.18 185 / 15%)",
                    border: "1px solid oklch(0.78 0.18 185 / 30%)",
                  }}
                >
                  <Icon size={22} style={{ color: "oklch(0.78 0.18 185)" }} />
                </div>

                {/* Number */}
                <div
                  className="font-display mb-2"
                  style={{ fontSize: "0.75rem", color: "oklch(0.78 0.18 185)", letterSpacing: "0.1em" }}
                >
                  {service.number}
                </div>

                {/* Title */}
                <h3
                  className="font-display text-white mb-2"
                  style={{ fontSize: "1.05rem", letterSpacing: "0.05em" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
            className="btn-outline-dashed"
          >
            Bekijk alle diensten <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
