/**
 * Contact page - Contact form and info
 * Dark cyberpunk style: split layout, form on right, info on left
 * Uses Web3Forms for instant email delivery (no activation needed)
 */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Mail, Clock, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

// Web3Forms access key - public key for client-side form submission
const WEB3FORMS_ACCESS_KEY = "f3c6c2d5-a1e0-4c8f-9b2e-7d4f8c1a3e9b";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          service: form.service || "Niet opgegeven",
          message: form.message,
          subject: `Nieuw contactbericht van ${form.name}`,
          from_name: "Tussen de Lijnen",
          reply_to: form.email,
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success("Bericht verstuurd! We nemen binnen 24 uur contact op.");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        toast.error("Er ging iets mis. Probeer het later opnieuw.");
      }
    } catch (error) {
      toast.error("Geen verbinding. Probeer het later opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "oklch(0.09 0.02 240)",
    border: "1px solid oklch(1 0 0 / 15%)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    color: "white",
    fontSize: "0.875rem",
    fontFamily: "Inter, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontFamily: "Inter, sans-serif",
    color: "oklch(1 0 0 / 50%)",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.02 240)" }}>
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="diamond-deco" style={{ top: "20%", right: "5%", opacity: 0.3 }} />
          <div className="float-dot animate-pulse-glow" style={{ bottom: "30%", left: "3%", animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: info */}
            <div>
              <AnimateIn direction="left" delay={0}>
                <span className="tag-badge mb-4 inline-block">Contact</span>
              </AnimateIn>
              <AnimateIn direction="left" delay={100}>
                <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}>
                  Laten we{" "}
                  <span style={{ color: "oklch(0.78 0.18 185)" }}>praten</span>
                </h1>
              </AnimateIn>
              <AnimateIn direction="left" delay={200}>
                <p className="text-white/50 text-base mb-10 max-w-md" style={{ fontFamily: "Inter, sans-serif" }}>
                  Heb je een idee, vraag of wil je gewoon even kennismaken? We reageren binnen 24 uur.
                </p>
              </AnimateIn>

              <div className="flex flex-col gap-5">
                <AnimateIn direction="left" delay={300}>
                  <div
                    className="flex items-center gap-4 rounded-xl p-5"
                    style={{
                      background: "oklch(0.13 0.025 240)",
                      border: "1px solid oklch(1 0 0 / 8%)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "oklch(0.78 0.18 185 / 15%)",
                        border: "1px solid oklch(0.78 0.18 185 / 40%)",
                      }}
                    >
                      <Mail size={20} style={{ color: "oklch(0.78 0.18 185)" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter, sans-serif" }}>E-mail</p>
                      <a
                        href="mailto:hallo@studiotussendelijnen.nl"
                        className="text-white text-sm font-medium transition-colors hover:text-cyan-400"
                        style={{ fontFamily: "Inter, sans-serif", color: "oklch(0.78 0.18 185)" }}
                      >
                        hallo@studiotussendelijnen.nl
                      </a>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn direction="left" delay={400}>
                  <div
                    className="flex items-center gap-4 rounded-xl p-5"
                    style={{
                      background: "oklch(0.13 0.025 240)",
                      border: "1px solid oklch(1 0 0 / 8%)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "oklch(0.78 0.18 185 / 15%)",
                        border: "1px solid oklch(0.78 0.18 185 / 40%)",
                      }}
                    >
                      <Clock size={20} style={{ color: "oklch(0.78 0.18 185)" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Reactietijd</p>
                      <p className="text-white text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                        Binnen 24 uur
                      </p>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn direction="left" delay={500}>
                  <div
                    className="flex items-center gap-4 rounded-xl p-5"
                    style={{
                      background: "oklch(0.13 0.025 240)",
                      border: "1px solid oklch(1 0 0 / 8%)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "oklch(0.78 0.18 185 / 15%)",
                        border: "1px solid oklch(0.78 0.18 185 / 40%)",
                      }}
                    >
                      <MapPin size={20} style={{ color: "oklch(0.78 0.18 185)" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Adres</p>
                      <p className="text-white text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                        Kanaaldijk 2<br />
                        <span className="text-white/60">5768 RE Meijel</span>
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>

            {/* Right: form */}
            <AnimateIn direction="right" delay={100}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "oklch(0.13 0.025 240)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Naam</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jouw naam"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "oklch(0.78 0.18 185 / 60%)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 15%)"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>E-mail</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jouw@email.nl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "oklch(0.78 0.18 185 / 60%)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 15%)"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" style={labelStyle}>Waar kunnen we je mee helpen?</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => { e.target.style.borderColor = "oklch(0.78 0.18 185 / 60%)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 15%)"; }}
                    >
                      <option value="">Weet ik nog niet</option>
                      <option value="branding">Branding</option>
                      <option value="grafisch">Grafisch ontwerp</option>
                      <option value="social">Social media</option>
                      <option value="website">Website</option>
                      <option value="drukwerk">Drukwerk</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" style={labelStyle}>Bericht</label>
                    <textarea
                      id="message"
                      placeholder="Vertel ons over je project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => { e.target.style.borderColor = "oklch(0.78 0.18 185 / 60%)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 15%)"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary-cyan w-full justify-center"
                    style={{ opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2 justify-center">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Versturen...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <Send size={16} />
                        Verstuur bericht
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
