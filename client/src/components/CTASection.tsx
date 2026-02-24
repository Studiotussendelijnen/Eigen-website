/**
 * CTASection - Dark cyberpunk creative studio
 * "KLAAR OM SAMEN TE BEGINNEN?" with two action buttons
 */

import { ArrowRight, Mail } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, oklch(0.14 0.06 200 / 20%) 0%, oklch(0.09 0.02 240) 70%)",
      }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-dot animate-pulse-glow" style={{ top: "20%", left: "8%", animationDelay: "0.5s" }} />
        <div className="diamond-deco animate-float-slow" style={{ top: "30%", right: "6%", opacity: 0.3 }} />
        <div className="float-dot" style={{ bottom: "25%", right: "10%", opacity: 0.4 }} />
        <div className="square-deco animate-float" style={{ bottom: "20%", left: "5%", opacity: 0.2 }} />
        <div className="diamond-deco" style={{ top: "15%", right: "20%", opacity: 0.2 }} />
      </div>

      {/* Timeline dots above section */}
      <div className="flex justify-center mb-12 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: "8px",
              height: "8px",
              background: i === 1 ? "oklch(0.78 0.18 185)" : "oklch(1 0 0 / 20%)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          KLAAR OM{" "}
          <span style={{ color: "oklch(0.78 0.18 185)" }}>SAMEN</span>{" "}
          TE BEGINNEN?
        </h2>

        <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          Vertel ons over je project en ontdek wat we samen kunnen bereiken. Geen verplichtingen, gewoon een goed gesprek.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:hallo@tussendelijnen.nl"
            className="btn-primary-cyan text-sm"
          >
            Trek de eerste lijn <ArrowRight size={16} />
          </a>
          <a
            href="mailto:hallo@tussendelijnen.nl"
            className="btn-outline-dashed text-sm"
          >
            <Mail size={16} /> hallo@tussendelijnen.nl
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            <CheckCircle size={14} style={{ color: "oklch(0.78 0.18 185)" }} />
            Reactie binnen 24 uur
          </div>
          <div className="flex items-center gap-2 text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            <CheckCircle size={14} style={{ color: "oklch(0.78 0.18 185)" }} />
            Vrijblijvende kennismaking
          </div>
        </div>
      </div>
    </section>
  );
}
