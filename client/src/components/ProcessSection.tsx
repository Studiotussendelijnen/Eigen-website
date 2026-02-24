/**
 * ProcessSection - Dark cyberpunk creative studio
 * "ONS WERKPROCES" with vertical timeline, alternating left-right cards
 * Large PROCES watermark in background
 */

import { MessageSquare, Lightbulb, Pencil, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "KENNISMAKING",
    description:
      "We starten met een vrijblijvend gesprek. Wat is je visie? Wie is je doelgroep? Wat wil je bereiken? We luisteren en stellen de juiste vragen.",
    icon: MessageSquare,
    side: "left",
  },
  {
    number: "02",
    title: "CONCEPT",
    description:
      "Op basis van onze gesprekken ontwikkelen we een creatief concept. We presenteren ideeën, moodboards en eerste schetsen voor feedback.",
    icon: Lightbulb,
    side: "right",
  },
  {
    number: "03",
    title: "ONTWERP",
    description:
      "Nu gaan we aan de slag! We werken het concept uit tot een volledig ontwerp. Je krijgt tussentijds updates en ruimte voor feedback.",
    icon: Pencil,
    side: "left",
  },
  {
    number: "04",
    title: "OPLEVERING",
    description:
      "Na de laatste aanpassingen leveren we alle bestanden op. Maar daar stopt het niet. We blijven monitoren of alles naar wens blijft en staan klaar voor vragen of aanpassingen.",
    icon: CheckCircle,
    side: "right",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="werkproces"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 240)" }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-dot animate-pulse-glow" style={{ top: "8%", left: "5%", animationDelay: "0.5s" }} />
        <div className="diamond-deco animate-float-slow" style={{ top: "20%", right: "4%", opacity: 0.3 }} />
        <div className="float-dot" style={{ bottom: "15%", right: "8%", opacity: 0.4 }} />
        <div className="square-deco animate-float" style={{ bottom: "30%", left: "3%", opacity: 0.2 }} />
        <div className="diamond-deco" style={{ bottom: "10%", left: "10%", opacity: 0.25 }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          {/* Watermark */}
          <div
            className="watermark-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap"
            style={{ fontSize: "clamp(5rem, 18vw, 14rem)", lineHeight: 1, opacity: 0.04 }}
          >
            PROCES
          </div>
          <span className="tag-badge mb-4 inline-block relative z-10">Hoe we werken</span>
          <h2 className="font-display text-white relative z-10" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            ONS{" "}
            <span style={{ color: "oklch(0.78 0.18 185)" }}>WERKPROCES</span>
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto leading-relaxed relative z-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Van eerste idee tot eindresultaat. Transparant, efficiënt en altijd in overleg.
          </p>
        </div>

        {/* Timeline - desktop alternating, mobile stacked */}
        <div className="relative max-w-5xl mx-auto">
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
            }}
          />

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <div key={step.number} className="relative">
                  {/* Timeline dot - centered on the line */}
                  <div
                    className="hidden md:flex absolute items-center justify-center"
                    style={{
                      left: "50%",
                      top: "2rem",
                      transform: "translate(-50%, 0)",
                      zIndex: 10,
                    }}
                  >
                    <div className="timeline-dot" />
                  </div>

                  {/* Two-column grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {isLeft ? (
                      <>
                        {/* Card on left */}
                        <div className="md:pr-12">
                          <div className="process-card">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="flex items-center justify-center rounded-lg flex-shrink-0"
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  background: "oklch(0.78 0.18 185 / 15%)",
                                  border: "1px solid oklch(0.78 0.18 185 / 30%)",
                                }}
                              >
                                <Icon size={20} style={{ color: "oklch(0.78 0.18 185)" }} />
                              </div>
                              <span
                                className="font-display"
                                style={{ fontSize: "1.5rem", color: "oklch(0.78 0.18 185 / 50%)" }}
                              >
                                {step.number}
                              </span>
                            </div>
                            <h3 className="font-display text-white mb-3" style={{ fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                              {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                        {/* Empty right */}
                        <div className="hidden md:block md:pl-12" />
                      </>
                    ) : (
                      <>
                        {/* Empty left */}
                        <div className="hidden md:block md:pr-12" />
                        {/* Card on right */}
                        <div className="md:pl-12">
                          <div className="process-card">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="flex items-center justify-center rounded-lg flex-shrink-0"
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  background: "oklch(0.78 0.18 185 / 15%)",
                                  border: "1px solid oklch(0.78 0.18 185 / 30%)",
                                }}
                              >
                                <Icon size={20} style={{ color: "oklch(0.78 0.18 185)" }} />
                              </div>
                              <span
                                className="font-display"
                                style={{ fontSize: "1.5rem", color: "oklch(0.78 0.18 185 / 50%)" }}
                              >
                                {step.number}
                              </span>
                            </div>
                            <h3 className="font-display text-white mb-3" style={{ fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                              {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom pagination dots */}
          <div className="flex justify-center mt-10 gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all"
                style={{
                  width: i === 0 ? "24px" : "8px",
                  height: "8px",
                  background: i === 0 ? "oklch(0.78 0.18 185)" : "oklch(1 0 0 / 20%)",
                  borderRadius: i === 0 ? "4px" : "50%",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
