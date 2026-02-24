/**
 * AboutSection - Dark cyberpunk creative studio
 * "TWEE KOPPEN, ÉÉN MISSIE" with REAL team photos and stats
 * CDN assets:
 *   René (portret1.jpg): https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/ZfOBYpgCbmBdDMWi.jpg
 *   Bo (PHOTO-2026-02-10-15-34-072.jpg): https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/WRTchUqGuVcdBqxW.jpg
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Infinity } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { Link } from "wouter";

const RENE_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/hkyIUewDbXDKWFPV.jpg";
const BO_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/sipECXzYhiXBHkDL.jpg";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [passie, setPassie] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= 2) clearInterval(timer);
    }, 300);
    let p = 0;
    const timer2 = setInterval(() => {
      p += 5;
      setPassie(p);
      if (p >= 100) clearInterval(timer2);
    }, 50);
    return () => { clearInterval(timer); clearInterval(timer2); };
  }, [visible]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="over-ons"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 240)" }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-dot animate-pulse-glow" style={{ top: "10%", right: "8%", animationDelay: "0.5s" }} />
        <div className="diamond-deco animate-float-slow" style={{ bottom: "20%", right: "5%", opacity: 0.3 }} />
        <div className="float-dot" style={{ bottom: "40%", left: "3%", opacity: 0.4 }} />
        <div className="square-deco" style={{ top: "30%", left: "5%", opacity: 0.2 }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <AnimateIn direction="up" delay={0}>
          <div className="text-center mb-12">
            <span className="tag-badge mb-4 inline-block">Over ons</span>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
              TWEE KOPPEN,{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>ÉÉN MISSIE</span>
            </h2>
            <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Tussen de Lijnen is de samenwerking tussen twee ondernemers met een gedeelde passie voor krachtige visuele communicatie.
            </p>
          </div>
        </AnimateIn>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Bo Brummans */}
          <AnimateIn direction="left" delay={100}>
            <div
              className="relative overflow-hidden rounded-xl h-full"
              style={{ background: "oklch(0.13 0.025 240)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  {/* Real photo - Bo */}
                  <div
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: "160px",
                      height: "200px",
                      background: "oklch(0.18 0.03 240)",
                      boxShadow: "0 4px 20px oklch(0 0 0 / 40%)",
                    }}
                  >
                    <img
                      src={BO_PHOTO}
                      alt="Bo Brummans"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div
                        className="text-xs font-medium mb-1"
                        style={{ color: "oklch(0.78 0.18 185)", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif" }}
                      >
                        CREATIEF BREIN
                      </div>
                      <h3 className="font-display text-white text-xl">BO BRUMMANS</h3>
                    </div>
                    <div style={{ color: "oklch(0.78 0.18 185)", fontSize: "1.2rem" }}>✦</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Bo is de creatieve motor. Met een scherp oog voor detail transformeert ze concepten naar visuele verhalen die blijven hangen. Van eye-catching posters tot scroll-stoppende social media content.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* René Hannen */}
          <AnimateIn direction="right" delay={200}>
            <div
              className="relative overflow-hidden rounded-xl h-full"
              style={{ background: "oklch(0.13 0.025 240)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  {/* Real photo - René */}
                  <div
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: "160px",
                      height: "200px",
                      background: "oklch(0.18 0.03 240)",
                      boxShadow: "0 4px 20px oklch(0 0 0 / 40%)",
                    }}
                  >
                    <img
                      src={RENE_PHOTO}
                      alt="René Hannen"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div
                        className="text-xs font-medium mb-1"
                        style={{ color: "oklch(0.78 0.18 185)", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif" }}
                      >
                        STRATEGIE &amp; TECH
                      </div>
                      <h3 className="font-display text-white text-xl">RENÉ HANNEN</h3>
                    </div>
                    <div style={{ color: "oklch(0.78 0.18 185)", fontSize: "1.2rem" }}>◆</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  René zorgt dat alles werkt. Van websites tot processen, van strategie tot planning. Hij vertaalt creatieve ideeën naar werkende oplossingen.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Quote */}
        <AnimateIn direction="up" delay={100}>
          <div className="text-center mb-12">
            <blockquote
              className="text-white/80 text-lg italic max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
            >
              "Elk project begint met luisteren. Pas als we jouw verhaal begrijpen, kunnen we het visueel tot leven brengen."
            </blockquote>
          </div>
        </AnimateIn>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: visible ? count : 0, label: "Creatieve koppen", isInfinity: false },
            { value: visible ? passie : 0, label: "Passie", isInfinity: false, suffix: "%" },
            { value: null, label: "Creativiteit", isInfinity: true },
          ].map((stat, idx) => (
            <AnimateIn key={stat.label} direction="up" delay={idx * 120}>
              <div
                className="text-center py-6 rounded-xl"
                style={{ background: "oklch(0.13 0.025 240)", border: "1px solid oklch(1 0 0 / 8%)" }}
              >
                {stat.isInfinity ? (
                  <div className="stat-number flex items-center justify-center">
                    <Infinity size={40} style={{ color: "oklch(0.78 0.18 185)" }} />
                  </div>
                ) : (
                  <div className="stat-number" style={{ color: idx === 1 ? "oklch(0.78 0.18 185)" : undefined }}>
                    {stat.value}{stat.suffix || ""}
                  </div>
                )}
                <div className="text-white/40 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn direction="up" delay={200}>
          <div className="flex justify-center">
            <Link href="/over-ons" className="btn-outline-dashed">
              Leer ons beter kennen <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
