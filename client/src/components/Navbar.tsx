/**
 * Navbar - Dark cyberpunk creative studio
 * Fixed top navbar with dashed border nav links and cyan CTA button
 * Logo: real Tussen de Lijnen logo image
 * Navigation: uses wouter Link for page routing
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Diensten", href: "/diensten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
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
        <Link href="/" className="flex items-center gap-0 group">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/beOddLdPeurbEUar.png"
            alt="Tussen de Lijnen"
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center">
          <div className="nav-dashed">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive(link.href) ? "oklch(0.78 0.18 185)" : "oklch(1 0 0 / 70%)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link href="/contact" className="btn-primary-cyan text-sm">
            Start project
          </Link>
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
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-2 border-b border-white/5 transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive(link.href) ? "oklch(0.78 0.18 185)" : "oklch(1 0 0 / 70%)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary-cyan text-sm self-start mt-2">
              Start project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
