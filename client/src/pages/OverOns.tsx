/**
 * Over ons page - Team profiles, values, and approach
 * Dark cyberpunk style: large portrait photos, PASSIE watermark, value cards
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const BO_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/sipECXzYhiXBHkDL.jpg";
const RENE_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/hkyIUewDbXDKWFPV.jpg";

const values = [
  {
    number: "01",
    title: "Persoonlijk contact",
    description: "Je praat altijd direct met ons, niet met een accountmanager. Korte lijnen, snelle beslissingen.",
  },
  {
    number: "02",
    title: "Resultaatgericht",
    description: "Mooi design is leuk, maar het moet ook werken. Wij focussen op designs die converteren.",
  },
  {
    number: "03",
    title: "Meedenken als partner",
    description: "Wij zijn geen leverancier, maar een partner. We denken mee en zorgen dat jij tevreden bent.",
  },
];

export default function OverOns() {
  return (
    <>
      <SEO
        title="Over ons | Tussen de Lijnen"
        description="Leer ons kennen. Wij zijn Bo en René, twee creatieve denkers met passie voor design dat werkt."
        ogUrl="https://studiolijn.nl/over-ons"
      />
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
            <span className="tag-badge mb-4 inline-block">Over ons</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.1 }}>
              Twee koppen,{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>één missie</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/50 text-base max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Tussen de Lijnen is geboren uit een gedeelde passie: ondernemers helpen groeien met krachtige visuele communicatie die écht impact maakt.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Team profiles */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-12">

          {/* Bo Brummans */}
          <AnimateIn direction="up" delay={0}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "oklch(0.13 0.025 240)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div
                  className="md:w-96 flex-shrink-0 overflow-hidden"
                  style={{ minHeight: "400px" }}
                >
                  <img
                    src={BO_PHOTO}
                    alt="Bo Brummans"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: "400px" }}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div
                    className="text-xs font-medium mb-2 uppercase tracking-widest flex items-center gap-2"
                    style={{ color: "oklch(0.78 0.18 185)", fontFamily: "Inter, sans-serif" }}
                  >
                    <span
                      className="inline-block w-6 h-px"
                      style={{ background: "oklch(0.78 0.18 185)" }}
                    />
                    Creatief brein
                  </div>
                  <h2 className="font-display text-white mb-4" style={{ fontSize: "2.5rem" }}>
                    Bo Brummans
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Bo is de creatieve motor van Tussen de Lijnen. Met een scherp oog voor detail en een onuitputtelijke bron van ideeën, transformeert ze concepten naar visuele verhalen die blijven hangen.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Of het nu gaat om een complete huisstijl, een serie social media posts of een poster die de aandacht grijpt – Bo weet precies hoe ze de essentie van een merk moet vangen.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                    Wat Bo onderscheidt? Ze luistert eerst. Ze duikt in jouw wereld, begrijpt je doelgroep en vertaalt dat naar designs die niet alleen mooi zijn, maar ook écht werken.
                  </p>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {["Branding & identiteit", "Poster design", "Social media content", "Illustratie", "Flyer design", "Visuele storytelling"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "oklch(0.78 0.18 185 / 10%)",
                            border: "1px solid oklch(0.78 0.18 185 / 30%)",
                            color: "oklch(0.78 0.18 185)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* René Hannen */}
          <AnimateIn direction="up" delay={100}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "oklch(0.13 0.025 240)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <div className="flex flex-col md:flex-row-reverse">
                {/* Photo */}
                <div
                  className="md:w-96 flex-shrink-0 overflow-hidden"
                  style={{ minHeight: "400px" }}
                >
                  <img
                    src={RENE_PHOTO}
                    alt="René Hannen"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: "400px" }}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div
                    className="text-xs font-medium mb-2 uppercase tracking-widest flex items-center gap-2"
                    style={{ color: "oklch(0.78 0.18 185)", fontFamily: "Inter, sans-serif" }}
                  >
                    <span
                      className="inline-block w-6 h-px"
                      style={{ background: "oklch(0.78 0.18 185)" }}
                    />
                    Strategie &amp; Implementatie
                  </div>
                  <h2 className="font-display text-white mb-4" style={{ fontSize: "2.5rem" }}>
                    René Hannen
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    René is de strategische denker en technische uitvoerder van het duo. Waar Bo de creatieve visie levert, zorgt René ervoor dat alles ook daadwerkelijk werkt en resultaat oplevert.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Met een sterke focus op websites, digitale systemen en procesoptimalisatie, bouwt René de bruggen tussen creativiteit en functionaliteit.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                    René handelt ook de zakelijke kant af: planning en klantcommunicatie. Zo kan Bo zich volledig focussen op wat ze het beste doet: creëren.
                  </p>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {["Websites", "Strategie", "Procesoptimalisatie", "Klantcommunicatie", "Projectmanagement"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "oklch(0.78 0.18 185 / 10%)",
                            border: "1px solid oklch(0.78 0.18 185 / 30%)",
                            color: "oklch(0.78 0.18 185)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="watermark-text absolute select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 16rem)",
              opacity: 0.05,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
          >
            PASSIE
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimateIn direction="up" delay={0}>
            <h2 className="font-display text-white mb-12 text-center" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Waarom{" "}
              <span style={{ color: "oklch(0.78 0.18 185)" }}>Tussen de Lijnen?</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <AnimateIn key={value.number} direction="up" delay={idx * 100}>
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: "oklch(0.13 0.025 240)",
                    border: "1px solid oklch(1 0 0 / 8%)",
                  }}
                >
                  <div
                    className="font-display mb-4"
                    style={{ fontSize: "3rem", color: "oklch(0.78 0.18 185 / 30%)", lineHeight: 1 }}
                  >
                    {value.number}
                  </div>
                  <h3 className="font-display text-white mb-3" style={{ fontSize: "1.25rem" }}>
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn direction="up" delay={0}>
            <div
              className="rounded-2xl p-10 md:p-14"
              style={{
                background: "oklch(0.13 0.025 240)",
                border: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                Onze aanpak
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
                Wij geloven in eerlijke samenwerking. Geen verborgen kosten, geen eindeloze revisierondes zonder duidelijkheid. Vooraf maken we heldere afspraken zodat we allebei weten waar we aan toe zijn.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
                Onze passie is om ondernemers te helpen groeien. Daarom denken we verder dan alleen het project van vandaag. We kijken naar je merk als geheel en adviseren je over de beste stappen voor de toekomst.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
                Jouw succes is ons succes. Zo simpel is het.
              </p>
              <Link href="/contact" className="btn-primary-cyan inline-flex items-center gap-2">
                Zullen we kennismaken? <ArrowRight size={16} />
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
