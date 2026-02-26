/**
 * Diensten page - Full services page
 * Dark cyberpunk style: numbered service blocks with icon, description, and feature list
 */

import { Palette, Image, Share2, Monitor, Printer, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Branding",
    subtitle: "Merkidentiteit die blijft hangen",
    description:
      "Een sterke merkidentiteit is de basis van alles. Wij ontwikkelen logo's, huisstijlen en merkstrategieën die jouw unieke verhaal vertellen.",
    features: ["Logo-ontwerp", "Huisstijl ontwikkeling", "Merkstrategie", "Brand guidelines"],
  },
  {
    number: "02",
    icon: Image,
    title: "Grafisch ontwerp",
    subtitle: "Ontwerpen die opvallen",
    description:
      "Van visitekaartjes tot complete campagnes. Onze ontwerpen vallen op en brengen je boodschap helder over.",
    features: ["Visitekaartjes", "Presentaties", "Advertenties", "Verpakkingen"],
  },
  {
    number: "03",
    icon: Share2,
    title: "Social media",
    subtitle: "Content die scrollstoppers zijn",
    description:
      "Content die scrollstoppers zijn. Consistente, aantrekkelijke posts die jouw doelgroep aanspreken.",
    features: ["Instagram posts & stories", "Facebook content", "LinkedIn visuals", "Content kalenders"],
  },
  {
    number: "04",
    icon: Monitor,
    title: "Websites",
    subtitle: "Websites die converteren",
    description:
      "Moderne, snelle websites die converteren. Van simpele landingspagina's tot complete webshops.",
    features: ["Landingspagina's", "Bedrijfswebsites", "Webshops", "SEO-optimalisatie"],
  },
  {
    number: "05",
    icon: Printer,
    title: "Drukwerk",
    subtitle: "Tastbaar materiaal dat indruk maakt",
    description:
      "Posters, flyers, brochures en meer. Tastbaar materiaal dat indruk maakt.",
    features: ["Posters", "Flyers", "Brochures", "Banners & displays"],
  },
];

export default function Diensten() {
  return (
    <>
      <SEO
        title="Diensten | Tussen de Lijnen"
        description="Branding, grafisch ontwerp en digitale oplossingen. Wij helpen bedrijven groeien met professionele creatieve diensten."
        ogUrl="https://studiolijn.nl/diensten"
      />
      <div className="min-h-screen" style={{ background: "oklch(0.09 0.02 240)" }}>
        <Navbar />

      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="diamond-deco" style={{ top: "30%", right: "8%", opacity: 0.3 }} />
          <div className="square-deco animate-float" style={{ top: "20%", left: "5%", opacity: 0.2 }} />
        </div>
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <span className="tag-badge mb-4 inline-block">Wat we doen</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.1 }}>
              Alles voor jouw{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>visuele identiteit</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/50 text-base max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Van eerste idee tot eindresultaat. Wij begeleiden je door het hele creatieve proces.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.number} direction="up" delay={idx * 80}>
                <div
                  className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 group"
                  style={{
                    background: "oklch(0.13 0.025 240)",
                    border: "1px solid oklch(1 0 0 / 8%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 185 / 35%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 8%)";
                  }}
                >
                  {/* Number */}
                  <div
                    className="absolute top-6 right-8 font-display opacity-15"
                    style={{ fontSize: "4rem", color: "oklch(0.78 0.18 185)", lineHeight: 1 }}
                  >
                    {service.number}
                  </div>

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: icon + title + description */}
                    <div className="flex-1">
                      <div
                        className="mb-5 flex items-center justify-center rounded-xl"
                        style={{
                          width: "56px",
                          height: "56px",
                          background: "oklch(0.78 0.18 185 / 15%)",
                          border: "1px solid oklch(0.78 0.18 185 / 40%)",
                        }}
                      >
                        <Icon size={26} style={{ color: "oklch(0.78 0.18 185)" }} strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display text-white mb-2" style={{ fontSize: "1.75rem" }}>
                        {service.title}
                      </h2>
                      <p className="text-white/40 text-xs mb-4 uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
                        {service.subtitle}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md" style={{ fontFamily: "Inter, sans-serif" }}>
                        {service.description}
                      </p>
                    </div>

                    {/* Right: feature list */}
                    <div className="md:w-72 flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 rounded-lg px-3 py-2"
                            style={{
                              background: "oklch(0.09 0.02 240)",
                              border: "1px solid oklch(1 0 0 / 6%)",
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "oklch(0.78 0.18 185)" }}
                            />
                            <span className="text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
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
              <p className="text-white/50 text-sm mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Niet zeker welke dienst je nodig hebt?
              </p>
              <Link href="/contact" className="btn-primary-cyan inline-flex items-center gap-2">
                Trek de eerste lijn <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
