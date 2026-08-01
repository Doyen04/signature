"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ForkKnife, Tag, WhatsappLogo, ArrowRight, Plant, Egg, Fish, Package } from "@phosphor-icons/react";

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
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
      <div className="animate-spin-slow" style={{ position:"absolute", top:60, right:60, width:120, height:120, borderRadius:"50%", border:"3px dashed rgba(255,255,255,0.12)", pointerEvents:"none", zIndex:0 }} />
      <div className="animate-spin-slow" style={{ position:"absolute", bottom:160, left:40, width:80, height:80, borderRadius:"50%", border:"2px dashed rgba(247,216,0,0.2)", pointerEvents:"none", zIndex:0, animationDirection:"reverse" }} />

      <div className="container" style={{ position:"relative", zIndex:1, textAlign:"center", padding:"60px 40px 100px" }}>

        {/* Pre-label */}
        <div className="hero-anim" style={{ marginBottom:24 }}>
          <span className="badge badge-pink" style={{ fontSize:12, letterSpacing:"0.12em" }}>
            <ForkKnife size={16} weight="fill" /> Introducing Our Signature Dish
          </span>
        </div>

        {/* Display headline */}
        <h1 className="hero-anim" style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(64px, 13vw, 148px)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#fff",
          textTransform: "uppercase",
          marginBottom: 0,
        }}>
          <span style={{ display:"block" }}>SIGNATURE</span>
          <span style={{
            display: "block",
            color: "var(--color-brand-gold)",
            fontStyle: "italic",
            fontSize: "clamp(72px, 15vw, 160px)",
          }}>
            Ofada
          </span>
          <span style={{ display:"block" }}>RICE</span>
        </h1>

        {/* Inline badges */}
        <div className="hero-anim" style={{ display:"flex", justifyContent:"center", gap:12, alignItems:"center", marginTop:16, marginBottom:28, flexWrap:"wrap" }}>
          <span style={{
            background: "var(--color-accent-pink)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 800,
            padding: "6px 20px",
            borderRadius: "var(--radius-full)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            letterSpacing: "0.06em",
          }}>
            <Package size={18} weight="fill" /> WITH INSIDES OF MEAT
          </span>
          <span style={{
            background: "var(--color-brand-gold)",
            color: "var(--color-primary)",
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 900,
            padding: "6px 20px",
            borderRadius: "var(--radius-full)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}>
            <Tag size={20} weight="fill" /> ₦3,500
          </span>
        </div>

        {/* Subtext */}
        <p className="hero-anim" style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.65)",
          maxWidth: 520,
          margin: "0 auto 36px",
          lineHeight: 1.7,
        }}>
          A rich, spicy, and unforgettable experience made{" "}
          <strong style={{ color: "#fff" }}>just for you</strong>.
          Good food. Great taste.{" "}
          <em style={{ color: "var(--color-brand-gold)" }}>Worth the wait!</em>
        </p>

        {/* CTAs */}
        <div className="hero-anim" style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", marginBottom:48 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-preorder-btn"
            className="btn-whatsapp"
            style={{ fontSize:16, padding:"16px 36px" }}
          >
            <WhatsappLogo size={22} weight="fill" />
            Pre-Order on WhatsApp
          </a>
          <a href="#menu" className="btn-dark" style={{ fontSize:16, padding:"16px 32px" }}>
            View Menu <ArrowRight size={18} weight="bold" />
          </a>
        </div>

        {/* Hero image — flat, no shadow */}
        <div className="hero-anim animate-float" style={{ position:"relative", display:"inline-block", marginTop:8 }}>
          <Image
            src="/ofada-hero.png"
            alt="Venant Cutlery Signature Ofada Rice served on a black plate"
            width={480}
            height={480}
            priority
            style={{
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.15)",
              objectFit: "cover",
              width: "clamp(280px, 40vw, 480px)",
              height: "clamp(280px, 40vw, 480px)",
            }}
          />
          {/* Price tag */}
          <div style={{
            position:"absolute", top:16, right:-20, zIndex:3,
            background:"var(--color-brand-gold)",
            color:"var(--color-primary)",
            borderRadius:"var(--radius-md)",
            padding:"10px 14px",
            textAlign:"center",
            transform:"rotate(8deg)",
          }}>
            <div style={{ fontFamily:"var(--font-body)", fontSize:10, opacity:0.7, textTransform:"uppercase", letterSpacing:"0.1em" }}>Just</div>
            <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:24, lineHeight:1 }}>₦3,500</div>
          </div>
          {/* Pre-order tab */}
          <div style={{
            position:"absolute", bottom:-16, left:"50%", transform:"translateX(-50%)",
            background:"var(--color-accent-pink)",
            color:"#fff",
            borderRadius:"var(--radius-full)",
            padding:"8px 20px",
            fontFamily:"var(--font-body)", fontWeight:700, fontSize:13,
            whiteSpace:"nowrap",
            zIndex:3,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}>
            <ForkKnife size={16} weight="fill" /> Pre-Order Only
          </div>
        </div>

        {/* Add-ons row */}
        <div className="hero-anim" style={{ marginTop:48, display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
          <span style={{ fontFamily:"var(--font-body)", fontSize:12, color:"rgba(255,255,255,0.4)", alignSelf:"center" }}>Add-ons:</span>
          {[
            { label: "Plantain", icon: Plant },
            { label: "Egg", icon: Egg },
            { label: "Fish", icon: Fish },
            { label: "Ponmo", icon: Package },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} style={{
                background:"rgba(255,255,255,0.08)",
                backdropFilter:"blur(4px)",
                border:"1px solid rgba(255,255,255,0.12)",
                color:"rgba(255,255,255,0.85)",
                fontFamily:"var(--font-body)",
                fontSize:12, fontWeight:600,
                padding:"6px 14px",
                borderRadius:"var(--radius-full)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}>
                <Icon size={14} weight="fill" /> {item.label}
              </span>
            );
          })}
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
      `}</style>
    </section>
  );
}
