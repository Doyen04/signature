"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WhatsappLogo, ArrowRight, Plant, Egg, Fish, Package } from "@phosphor-icons/react";

const WA_LINK =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice.%20%F0%9F%8D%9A";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".hero-anim");
    items?.forEach((el, i) => {
      (el as HTMLElement).style.animation = `fadeInUp 0.7s ${i * 0.12}s ease both`;
    });
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        background: "var(--color-primary)",
        minHeight: "calc(100vh - 76px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 40,
        paddingBottom: 120,
      }}
      aria-label="Hero — Signature Ofada Rice"
    >
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Spinning dashed ring */}
      <div className="animate-spin-slow" style={{ position:"absolute", top:40, right:40, width:120, height:120, borderRadius:"50%", border:"3px dashed rgba(255,255,255,0.12)", pointerEvents:"none", zIndex:0 }} />
      <div className="animate-spin-slow" style={{ position:"absolute", bottom:120, left:40, width:80, height:80, borderRadius:"50%", border:"2px dashed rgba(247,216,0,0.2)", pointerEvents:"none", zIndex:0, animationDirection:"reverse" }} />

      <div className="container" style={{ position:"relative", zIndex:1, padding:"0 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }} className="hero-grid">

          {/* Left Column: Text Content */}
          <div style={{ textAlign: "left" }}>
            {/* Headline */}
            <h1 className="hero-anim" style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(48px, 7.5vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              <span style={{ display:"block" }}>SIGNATURE</span>
              <span style={{
                display: "block",
                color: "var(--color-brand-gold)",
                fontStyle: "italic",
                fontSize: "clamp(54px, 8.5vw, 108px)",
              }}>
                Ofada
              </span>
              <span style={{ display:"block" }}>RICE</span>
            </h1>

            {/* Subtext */}
            <p className="hero-anim" style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 19px)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: 500,
              margin: "0 0 20px 0",
              lineHeight: 1.6,
            }}>
              With Insides of Meat. A rich, spicy, and unforgettable experience made{" "}
              <strong style={{ color: "#fff" }}>just for you</strong>.
              Good food. Great taste.{" "}
              <em style={{ color: "var(--color-brand-gold)" }}>Worth the wait!</em>
            </p>

            {/* Price text */}
            <div className="hero-anim" style={{ marginBottom: 24 }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "var(--color-brand-gold)",
              }}>
                ₦3,500
              </span>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginLeft: 12,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                · Pre-Order Only
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-anim" style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-preorder-btn"
                className="btn-whatsapp"
                style={{ fontSize:17, padding:"18px 40px" }}
              >
                <WhatsappLogo size={24} weight="fill" />
                Pre-Order on WhatsApp
              </a>
              <a href="#menu" className="btn-dark" style={{ fontSize:17, padding:"18px 36px" }}>
                View Menu <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image & Add-ons */}
          <div className="hero-anim" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: 20 }}>
            <div className="animate-float">
              <Image
                src="/ofada-hero.png"
                alt="Venant Cutlery Signature Ofada Rice served on a black plate"
                width={440}
                height={440}
                priority
                style={{
                  borderRadius: "50%",
                  border: "4px solid rgba(255,255,255,0.15)",
                  objectFit: "cover",
                  width: "clamp(220px, 26vw, 380px)",
                  height: "clamp(220px, 26vw, 380px)",
                }}
              />
            </div>

            {/* Add-ons row */}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems: "center", justifyContent:"center" }}>
              <span style={{ fontFamily:"var(--font-body)", fontSize:13, color:"rgba(255,255,255,0.4)" }}>Add-ons:</span>
              {[
                { label: "Plantain", icon: Plant },
                { label: "Egg", icon: Egg },
                { label: "Fish", icon: Fish },
                { label: "Ponmo", icon: Package },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label} style={{
                    color:"rgba(255,255,255,0.85)",
                    fontFamily:"var(--font-body)",
                    fontSize:13, fontWeight:600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}>
                    <Icon size={16} weight="fill" color="var(--color-brand-gold)" /> {item.label}
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Wave bottom divider */}
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, lineHeight:0, zIndex:2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0ece3" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
        @media (max-width: 768px) {
          #home { height: auto !important; min-height: 100vh !important; padding: 60px 0 100px !important; }
          .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
