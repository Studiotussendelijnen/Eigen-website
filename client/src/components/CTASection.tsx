/**
 * CTASection - Dark cyberpunk creative studio
 * "KLAAR OM SAMEN TE BEGINNEN?" with scroll-in animations
 */

import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, oklch(0.14 0.06 200 / 20%) 0%, oklch(0.09 0.02 240) 70%)",
      }}
    >


      <div className="container mx-auto px-6 max-w-4xl text-center">
        <AnimateIn direction="up" delay={100}>
          <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: "1.05" }}>
            KLAAR OM{" "}
            <span style={{ color: "oklch(0.78 0.18 185)" }}>SAMEN</span>{" "}
            TE BEGINNEN?
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={200}>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Vertel ons over je project en ontdek wat we samen kunnen bereiken. Geen verplichtingen, gewoon een goed gesprek.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="btn-primary-cyan text-sm">
              Trek de eerste lijn <ArrowRight size={16} />
            </Link>
            <a href="mailto:hallo@tussendelijnen.nl" className="btn-outline-dashed text-sm">
              <Mail size={16} /> hallo@tussendelijnen.nl
            </a>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={400}>
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
        </AnimateIn>
      </div>
    </section>
  );
}
