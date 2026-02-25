/**
 * ProcessSection - Dark cyberpunk creative studio
 * "ONS WERKPROCES" with vertical timeline, alternating left-right transparent cards
 * PROCES watermark spans behind the cards
 * Central vertical line with cyan timeline dots
 * No floating decorations, no pagination dots
 */

import { MessageSquare, Lightbulb, Pencil, CheckCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "KENNISMAKING",
    description: "We starten met een vrijblijvend gesprek. Wat is je visie? Wie is je doelgroep? Wat wil je bereiken? We luisteren en stellen de juiste vragen.",
    icon: MessageSquare,
    side: "left",
  },
  {
    number: "02",
    title: "CONCEPT",
    description: "Op basis van onze gesprekken ontwikkelen we een creatief concept. We presenteren ideeën, moodboards en eerste schetsen voor feedback.",
    icon: Lightbulb,
    side: "right",
  },
  {
    number: "03",
    title: "ONTWERP",
    description: "Nu gaan we aan de slag! We werken het concept uit tot een volledig ontwerp. Je krijgt tussentijds updates en ruimte voor feedback.",
    icon: Pencil,
    side: "left",
  },
  {
    number: "04",
    title: "OPLEVERING",
    description: "Na de laatste aanpassingen leveren we alle bestanden op. Maar daar stopt het niet. We blijven monitoren of alles naar wens blijft en staan klaar voor vragen of aanpassingen.",
    icon: CheckCircle,
    side: "right",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="werkproces"
      className="relative py-16 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 240)" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <AnimateIn direction="up" delay={0}>
          <div className="text-center mb-8 md:mb-16">
            <span className="tag-badge mb-4 inline-block">Hoe we werken</span>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
              ONS{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>WERKPROCES</span>
            </h2>
            <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Van eerste idee tot eindresultaat. Transparant, efficiënt en altijd in overleg.
            </p>
          </div>
        </AnimateIn>

        {/* Timeline container — PROCES watermark behind */}
        <div className="relative max-w-5xl mx-auto">

          {/* PROCES watermark — behind the timeline cards */}
          <div
            className="absolute font-display pointer-events-none select-none"
            style={{
              fontSize: "clamp(8rem, 22vw, 18rem)",
              color: "oklch(0.75 0.04 200 / 10%)",
              lineHeight: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              zIndex: 0,
              letterSpacing: "-0.02em",
            }}
          >
            PROCES
          </div>

          {/* Vertical center line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: "0",
              bottom: "0",
              width: "1px",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, transparent 0%, oklch(0.78 0.18 185 / 30%) 10%, oklch(0.78 0.18 185 / 30%) 90%, transparent 100%)",
              zIndex: 1,
            }}
          />

          <div className="space-y-8 relative" style={{ zIndex: 2 }}>
            {steps.map((step) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              const CardContent = (
                <div className="rounded-2xl p-5 md:p-8 transition-all duration-300"
                  style={{
                    background: "transparent",
                    border: "1px solid oklch(0.78 0.18 185 / 20%)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(0.78 0.18 185 / 50%)";
                    el.style.boxShadow = "0 8px 32px oklch(0.78 0.18 185 / 10%)";
                    el.style.background = "oklch(0.12 0.03 220 / 25%)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(0.78 0.18 185 / 20%)";
                    el.style.boxShadow = "none";
                    el.style.background = "transparent";
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "oklch(0.78 0.18 185 / 15%)",
                        border: "1px solid oklch(0.78 0.18 185 / 35%)",
                      }}
                    >
                      <Icon size={22} style={{ color: "oklch(0.78 0.18 185)" }} strokeWidth={1.5} />
                    </div>
                    <span className="font-display" style={{ fontSize: "1.6rem", color: "oklch(0.78 0.18 185 / 50%)" }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-white mb-3" style={{ fontSize: "1.5rem", letterSpacing: "0.05em" }}>
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {step.description}
                  </p>
                </div>
              );

              return (
                <div key={step.number} className="relative">
                  {/* Timeline dot on the center line */}
                  <div
                    className="hidden md:flex absolute items-center justify-center"
                    style={{ left: "50%", top: "2.5rem", transform: "translate(-50%, 0)", zIndex: 10 }}
                  >
                    {/* Outer glow ring */}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "1px solid oklch(0.78 0.18 185 / 40%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "oklch(0.78 0.18 185)",
                          boxShadow: "0 0 8px oklch(0.78 0.18 185 / 80%)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {isLeft ? (
                      <>
                        <AnimateIn direction="left" delay={0}>
                          <div className="md:pr-14">{CardContent}</div>
                        </AnimateIn>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:pr-14" />
                        <AnimateIn direction="right" delay={0}>
                          <div className="md:pl-14">{CardContent}</div>
                        </AnimateIn>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
