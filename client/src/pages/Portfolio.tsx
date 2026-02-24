/**
 * Portfolio page - Project showcase
 * Dark cyberpunk style: project cards with dashed borders, category tags
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    number: "01",
    category: "Website & Branding",
    title: "DOUBLEUNDERS.NL",
    description: "Premium crosstraining equipment webshop. Van speed ropes tot gewichtsvesten. Een no-nonsense webshop voor atleten die het gewoon doen.",
    tags: ["Website", "E-commerce", "Branding"],
    url: "https://doubleunders.nl",
  },
  {
    number: "02",
    category: "Website",
    title: "DE STOEP MEIJEL",
    description: "Gezellig eet- en drinkcafé in het hart van Meijel. Website met online reserveren, bestellen en menukaarten.",
    tags: ["Website", "Horeca"],
    url: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.02 240)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="diamond-deco" style={{ top: "30%", right: "8%", opacity: 0.3 }} />
          <div className="float-dot animate-pulse-glow" style={{ top: "20%", left: "5%", animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <span className="tag-badge mb-4 inline-block">Portfolio</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.1 }}>
              ONS{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>WERK</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/50 text-base max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Een selectie van projecten waar we trots op zijn.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Intro card */}
      <section className="pb-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <div
              className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
              style={{
                background: "oklch(0.13 0.025 240)",
                border: "1px solid oklch(0.78 0.18 185 / 20%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "oklch(0.78 0.18 185 / 15%)",
                  border: "1px solid oklch(0.78 0.18 185 / 40%)",
                }}
              >
                <span className="font-display text-2xl" style={{ color: "oklch(0.78 0.18 185)" }}>✦</span>
              </div>
              <div>
                <h3 className="font-display text-white mb-2" style={{ fontSize: "1.25rem" }}>
                  NET GESTART, VOL AMBITIE
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Tussen de Lijnen is vers van de pers. We zijn net voor onszelf begonnen en staan te popelen om onze portfolio uit te breiden met mooie uitdagingen en gave projecten. Heb jij een idee dat vraagt om creatieve handen? Wij maken er graag iets bijzonders van.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Project cards */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <AnimateIn key={project.number} direction="up" delay={idx * 100}>
                <div
                  className="rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group"
                  style={{
                    background: "oklch(0.13 0.025 240)",
                    border: "1.5px dashed oklch(0.78 0.18 185 / 40%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 185 / 70%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px oklch(0.78 0.18 185 / 10%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 185 / 40%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "oklch(0.78 0.18 185 / 15%)",
                        border: "1px solid oklch(0.78 0.18 185 / 40%)",
                        color: "oklch(0.78 0.18 185)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="font-display opacity-20"
                      style={{ fontSize: "2.5rem", color: "oklch(0.78 0.18 185)", lineHeight: 1 }}
                    >
                      {project.number}
                    </span>
                  </div>
                  <h3 className="font-display text-white mb-3" style={{ fontSize: "1.75rem" }}>
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            background: "oklch(0.09 0.02 240)",
                            border: "1px solid oklch(1 0 0 / 10%)",
                            color: "oklch(1 0 0 / 50%)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm transition-colors"
                        style={{ color: "oklch(0.78 0.18 185)", fontFamily: "Inter, sans-serif" }}
                      >
                        Bekijk website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bo's creative work */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <div
              className="rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6"
              style={{
                background: "oklch(0.13 0.025 240)",
                border: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "oklch(0.78 0.18 185 / 15%)",
                  border: "1px solid oklch(0.78 0.18 185 / 40%)",
                }}
              >
                <span className="font-display text-2xl" style={{ color: "oklch(0.78 0.18 185)" }}>◆</span>
              </div>
              <div>
                <h3 className="font-display text-white mb-2" style={{ fontSize: "1.25rem" }}>
                  BO'S CREATIEVE WERK
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Naast de projecten van Tussen de Lijnen heeft Bo voor verschillende werkgevers prachtige projecten mogen realiseren. Van complete huisstijlen tot eye-catching campagnes, van social media content tot drukwerk. Haar portfolio groeit continu met nieuwe creatieve uitdagingen.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: "oklch(0.13 0.025 240)",
                border: "1px solid oklch(0.78 0.18 185 / 20%)",
              }}
            >
              <h3 className="font-display text-white mb-3" style={{ fontSize: "1.75rem" }}>
                Jouw project hier?
              </h3>
              <p className="text-white/50 text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                We zijn op zoek naar mooie uitdagingen om onze portfolio mee uit te breiden. Heb jij een gaaf project in gedachten?
              </p>
              <Link href="/contact" className="btn-primary-cyan inline-flex items-center gap-2">
                Vertel ons over je idee <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
