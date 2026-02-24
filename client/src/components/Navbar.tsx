/**
 * Navbar - Dark cyberpunk creative studio
 * Fixed top navbar with dashed border nav links and cyan CTA button
 * Logo: "TUSSEN DE LIJNEN" in white/cyan on dark background
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Diensten", href: "#diensten" },
    { label: "Over ons", href: "#over-ons" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.09 0.02 240 / 95%)"
          : "oklch(0.09 0.02 240 / 80%)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 8%)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-0 group"
        >
          <div
            className="relative"
            style={{
              border: "1.5px dashed oklch(0.78 0.18 185 / 70%)",
              padding: "6px 10px",
              borderRadius: "4px",
            }}
          >
            <div className="font-display text-white leading-none" style={{ fontSize: "13px", letterSpacing: "0.05em" }}>
              TUSSEN
            </div>
            <div className="font-display leading-none" style={{ fontSize: "13px", letterSpacing: "0.05em", color: "oklch(0.78 0.18 185)" }}>
              DE LIJNEN
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center">
          <div className="nav-dashed">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-cyan-accent"
                style={{ fontSize: "0.875rem" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="btn-primary-cyan text-sm"
          >
            Start project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "oklch(0.09 0.02 240 / 98%)",
            borderTop: "1px solid oklch(1 0 0 / 8%)",
          }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-white text-sm font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="btn-primary-cyan text-sm self-start mt-2"
            >
              Start project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
