"use client";

import { useEffect, useRef } from "react";

const steps = [
  { number:"01", icon:"📋", title:"Browse & Choose",           desc:"Check our Signature Ofada Rice and pick your add-ons — Plantain, Egg, Fish, or Ponmo.",      bg:"var(--color-primary)",      text:"#fff",                         accent:"rgba(255,255,255,0.15)" },
  { number:"02", icon:"💬", title:"Pre-Order via WhatsApp",    desc:"Tap Pre-Order, message us on WhatsApp with your quantity and chosen add-ons. Done in 1 min.", bg:"var(--color-accent-pink)",  text:"#fff",                         accent:"rgba(255,255,255,0.2)"  },
  { number:"03", icon:"🍽️", title:"Pick Up & Enjoy",          desc:"Come to Ado Ekiti at the agreed time, collect your hot plate and savour every bite!",         bg:"var(--color-brand-gold)",   text:"var(--color-primary)",         accent:"rgba(0,36,68,0.12)"     },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>el.classList.add("revealed")); });
    }, { threshold:0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} style={{ background:"var(--color-bg-lime)", position:"relative", overflow:"hidden" }} aria-label="How pre-ordering works">

      {/* Floating character emoji */}
      <div className="animate-float" style={{ position:"absolute", right:"5%", top:"10%", fontSize:80, zIndex:0, pointerEvents:"none", opacity:0.4 }}>🧑‍🍳</div>
      <div style={{ position:"absolute", left:"3%", bottom:"15%", fontSize:60, zIndex:0, pointerEvents:"none", opacity:0.3 }}>🌶️</div>

      <div className="container section" style={{ position:"relative", zIndex:1 }}>

        {/* Massive header */}
        <div className="reveal" style={{ textAlign:"center", marginBottom:72 }}>
          <p style={{ fontFamily:"var(--font-body)", fontSize:14, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(0,36,68,0.55)", marginBottom:12 }}>Simple Process</p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontWeight:900,
            fontSize:"clamp(48px, 9vw, 104px)",
            color:"var(--color-primary)",
            lineHeight:0.95,
            textTransform:"uppercase",
            letterSpacing:"-0.02em",
          }}>
            <span style={{ display:"block" }}>HOW TO</span>
            <span style={{ display:"block", fontStyle:"italic" }}>Pre-Order</span>
          </h2>
          <p style={{ fontFamily:"var(--font-body)", fontSize:17, color:"rgba(0,36,68,0.7)", maxWidth:480, margin:"20px auto 0", lineHeight:1.7 }}>
            Securing your plate is easy and takes less than a minute.
          </p>
        </div>

        {/* Step cards — bold colored like Cardtonic track cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }} className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.number}
              className={`reveal delay-${(i+1)*100}`}
              style={{
                background: step.bg,
                borderRadius:"var(--radius-lg)",
                padding:"36px 28px",
                position:"relative",
                overflow:"hidden",
                transition:"transform 0.25s ease, box-shadow 0.25s ease",
                cursor:"default",
                boxShadow: i===1 ? "0 20px 60px rgba(255,0,133,0.3)" : "0 8px 32px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-10px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 28px 64px rgba(0,0,0,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="none"; (e.currentTarget as HTMLElement).style.boxShadow= i===1?"0 20px 60px rgba(255,0,133,0.3)":"0 8px 32px rgba(0,0,0,0.12)"; }}
            >
              {/* Ghost step number */}
              <div style={{ position:"absolute", top:12, right:16, fontFamily:"var(--font-display)", fontWeight:900, fontSize:72, lineHeight:1, opacity:0.1, color:step.text, userSelect:"none" }}>
                {step.number}
              </div>
              {/* Icon circle */}
              <div style={{ width:60, height:60, borderRadius:"50%", background:step.accent, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, marginBottom:20 }}>
                {step.icon}
              </div>
              <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:22, color:step.text, marginBottom:12, lineHeight:1.2 }}>{step.title}</h3>
              <p style={{ fontFamily:"var(--font-body)", fontSize:15, color: i===0?"rgba(255,255,255,0.7)": i===1?"rgba(255,255,255,0.8)":"rgba(0,36,68,0.7)", lineHeight:1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Location note */}
        <div className="reveal" style={{ textAlign:"center", marginTop:48, padding:"20px 24px", background:"rgba(0,36,68,0.08)", borderRadius:"var(--radius-md)", border:"1px dashed rgba(0,36,68,0.2)", display:"inline-block", width:"100%" }}>
          <p style={{ fontFamily:"var(--font-body)", fontSize:15, color:"rgba(0,36,68,0.7)" }}>
            📍 <strong style={{ color:"var(--color-primary)" }}>Ado Ekiti, Ekiti State</strong> &nbsp;·&nbsp; 💬{" "}
            <a href="https://wa.me/2349131166934" target="_blank" rel="noopener noreferrer" style={{ color:"#25D366", fontWeight:700 }}>+234 913 116 6934</a>
          </p>
        </div>
      </div>

      {/* Wave — dark follows */}
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, lineHeight:0, zIndex:2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:80 }}>
          <path d="M0,20 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="var(--color-primary)" />
        </svg>
      </div>
      <style>{`@media(max-width:768px){ .steps-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}
