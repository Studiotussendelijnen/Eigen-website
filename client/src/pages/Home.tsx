/**
 * Home page - Tussen de Lijnen | Creative Design Studio
 * Dark cyberpunk theme: deep navy/black background, cyan/teal accents
 * Sections: Navbar, Hero, Services, About, Process, CTA, Footer
 * SectionDivider (cyan dot + lines) between major sections
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.02 240)" }}>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <CTASection />
      <Footer />
    </div>
  );
}
