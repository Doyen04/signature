"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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

      {/* Glow blobs */}
      <div style={{ position:"absolute", top:-100, left:-100, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(232,160,32,0.18) 0%, transparent 70%)", pointerEvents:"none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:100, right:-80, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(117,128,239,0.12) 0%, transparent 70%)", pointerEvents:"none", zIndex:0 }} />

      {/* Spinning dashed ring */}
      <div className="animate-spin-slow" style={{ position:"absolute", top:60, right:60, width:120, height:120, borderRadius:"50%", border:"3px dashed rgba(255,255,255,0.12)", pointerEvents:"none", zIndex:0 }} />
      <div className="animate-spin-slow" style={{ position:"absolute", bottom:160, left:40, width:80, height:80, borderRadius:"50%", border:"2px dashed rgba(247,216,0,0.2)", pointerEvents:"none", zIndex:0, animationDirection:"reverse" }} />

      <div className="container" style={{ position:"relative", zIndex:1, textAlign:"center", padding:"60px 40px 100px" }}>

        {/* Pre-label */}
        <div className="hero-anim" style={{ marginBottom:24 }}>
          <span className="badge badge-pink" style={{ fontSize:12, letterSpacing:"0.12em" }}>
            🍽️ Introducing Our Signature Dish
          </span>
        </div>

        {/* Giant display headline — full width like Cardtonic */}
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

        {/* Pink pill badge — floating inline like "4.0" */}
        <div className="hero-anim" style={{ display:"flex", justifyContent:"center", gap:12, alignItems:"center", marginTop:16, marginBottom:28, flexWrap:"wrap" }}>
          <span style={{
            background: "var(--color-accent-pink)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 800,
            padding: "6px 20px",
            borderRadius: "var(--radius-full)",
            display: "inline-block",
            letterSpacing: "0.06em",
          }}>
            WITH INSIDES OF MEAT
          </span>
          <span style={{
            background: "var(--color-brand-gold)",
            color: "var(--color-primary)",
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 900,
            padding: "6px 20px",
            borderRadius: "var(--radius-full)",
          }}>
            ₦3,500
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
            className="btn-whatsapp animate-pulse-glow"
            style={{ fontSize:16, padding:"16px 36px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pre-Order on WhatsApp
          </a>
          <a href="#menu" className="btn-dark" style={{ fontSize:16, padding:"16px 32px" }}>
            View Menu →
          </a>
        </div>

        {/* Hero food image — centered, floating */}
        <div className="hero-anim animate-float" style={{ position:"relative", display:"inline-block", marginTop:8 }}>
          {/* Glow ring */}
          <div style={{
            position:"absolute", inset:"-24px", borderRadius:"50%",
            background:"radial-gradient(circle, rgba(232,160,32,0.3) 0%, transparent 65%)",
            pointerEvents:"none",
          }} />
          <Image
            src="/ofada-hero.png"
            alt="Venant Cutlery Signature Ofada Rice served on a black plate"
            width={480}
            height={480}
            priority
            style={{
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
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
            boxShadow:"0 8px 24px rgba(0,0,0,0.3)",
            transform:"rotate(8deg)",
          }}>
            <div style={{ fontFamily:"var(--font-body)", fontSize:10, opacity:0.7, textTransform:"uppercase", letterSpacing:"0.1em" }}>Just</div>
            <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:24, lineHeight:1 }}>₦3,500</div>
          </div>
          {/* Pre-order only tab */}
          <div style={{
            position:"absolute", bottom:-16, left:"50%", transform:"translateX(-50%)",
            background:"var(--color-accent-pink)",
            color:"#fff",
            borderRadius:"var(--radius-full)",
            padding:"8px 20px",
            fontFamily:"var(--font-body)", fontWeight:700, fontSize:13,
            whiteSpace:"nowrap",
            boxShadow:"0 4px 16px rgba(255,0,133,0.4)",
            zIndex:3,
          }}>
            🍽️ Pre-Order Only
          </div>
        </div>

        {/* Add-ons row */}
        <div className="hero-anim" style={{ marginTop:48, display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
          <span style={{ fontFamily:"var(--font-body)", fontSize:12, color:"rgba(255,255,255,0.4)", alignSelf:"center" }}>Add-ons:</span>
          {["🍌 Plantain","🥚 Egg","🐟 Fish","🥩 Ponmo"].map(item => (
            <span key={item} style={{
              background:"rgba(255,255,255,0.08)",
              backdropFilter:"blur(4px)",
              border:"1px solid rgba(255,255,255,0.12)",
              color:"rgba(255,255,255,0.85)",
              fontFamily:"var(--font-body)",
              fontSize:12, fontWeight:600,
              padding:"6px 14px",
              borderRadius:"var(--radius-full)",
            }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Wave bottom divider — cream section follows */}
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
