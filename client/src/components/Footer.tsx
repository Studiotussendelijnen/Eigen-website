/**
 * Footer - Dark cyberpunk creative studio
 * Logo, tagline, navigation links, contact info, copyright
 * Uses wouter Link for page routing
 */

import { Link } from "wouter";
import { MapPin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Diensten", href: "/diensten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "oklch(0.07 0.02 240)",
        borderTop: "1px solid oklch(1 0 0 / 8%)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663380554988/beOddLdPeurbEUar.png"
                  alt="Tussen de Lijnen"
                  style={{ height: "52px", width: "auto", objectFit: "contain" }}
                />
              </Link>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              Van idee naar impact. Wij helpen ondernemers hun verhaal visueel te vertellen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white/60 text-xs font-medium mb-4 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white/60 text-xs font-medium mb-4 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hallo@studiotussendelijnen.nl"
                className="block text-sm transition-colors duration-200"
                style={{ fontFamily: "Inter, sans-serif", color: "oklch(0.78 0.18 185)" }}
              >
                hallo@studiotussendelijnen.nl
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.78 0.18 185 / 60%)" }} />
                <address
                  className="not-italic text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Kanaaldijk 2<br />
                  5768 RE Meijel
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
        >
          <p className="text-white/25 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 Tussen de Lijnen. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
