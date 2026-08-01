"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Flame, Grains, Heart, Clock, ChatTeardropText } from "@phosphor-icons/react";

const features = [
  { icon: Flame,  title:"Rich & Spicy",     desc:"Authentic Ayamase brewed with the finest peppers." },
  { icon: Grains, title:"100% Ofada",       desc:"Genuine local ofada rice, stone-milled and fragrant." },
  { icon: Heart,  title:"Made With Love",   desc:"Handcrafted with passion, patience and precision." },
  { icon: Clock,  title:"Worth The Wait",   desc:"Pre-order guarantees your spot. Great food takes time." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => el.classList.add("revealed")); });
    }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background:"var(--color-bg-cream)", position:"relative", overflow:"hidden" }} aria-label="About Venant Cutlery">

      {/* Floating decorative dashes */}
      <div style={{ position:"absolute", top:60, left:40, width:4, height:60, background:"var(--color-accent-pink)", borderRadius:2, transform:"rotate(-20deg)", opacity:0.7 }} />
      <div style={{ position:"absolute", top:80, left:60, width:4, height:40, background:"var(--color-accent-pink)", borderRadius:2, transform:"rotate(-20deg)", opacity:0.5 }} />
      <div style={{ position:"absolute", top:100, right:60, width:4, height:60, background:"var(--color-accent-pink)", borderRadius:2, transform:"rotate(20deg)", opacity:0.7 }} />
      <div style={{ position:"absolute", top:60, right:40, width:4, height:40, background:"var(--color-accent-pink)", borderRadius:2, transform:"rotate(20deg)", opacity:0.5 }} />
      <div style={{ position:"absolute", top:"40%", left:30, width:16, height:16, borderRadius:"50%", background:"var(--color-accent-yellow)", opacity:0.8 }} />
      <div style={{ position:"absolute", top:"60%", right:30, width:20, height:20, borderRadius:"50%", background:"var(--color-accent-yellow)", opacity:0.6 }} />

      <div className="container section" style={{ position:"relative", zIndex:1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign:"center", marginBottom:72 }}>
          <p style={{ fontFamily:"var(--font-body)", fontSize:14, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--color-primary)", marginBottom:16, opacity:0.6 }}>
            Our Story
          </p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontWeight:900,
            fontSize:"clamp(48px, 9vw, 100px)",
            color:"var(--color-primary)",
            lineHeight:0.95,
            textTransform:"uppercase",
            letterSpacing:"-0.02em",
          }}>
            <span style={{ display:"block" }}>GOOD FOOD.</span>
            <span style={{ display:"block", fontStyle:"italic", color:"var(--color-brand-amber)" }}>GREAT TASTE.</span>
            <span style={{ display:"block" }}>WORTH THE</span>
            <span style={{ display:"block" }}>
              WAIT
              <span style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                background:"var(--color-accent-pink)", color:"#fff",
                borderRadius:"50%",
                width:"clamp(60px,8vw,100px)", height:"clamp(60px,8vw,100px)",
                fontSize:"clamp(28px,4vw,48px)",
                fontStyle:"normal",
                marginLeft:16,
                verticalAlign:"middle",
              }}>!</span>
            </span>
          </h2>
        </div>

        {/* Two column layout */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }} className="about-grid">
          {/* Image */}
          <div className="reveal-left" style={{ position:"relative" }}>
            <Image
              src="/venant-about.png"
              alt="Venant Cutlery chef preparing Signature Ofada Rice"
              width={560} height={520}
              style={{
                width:"100%", height:"auto", objectFit:"cover",
                borderRadius:"var(--radius-lg)",
                display:"block",
                transition:"transform 0.4s ease",
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.transform="scale(1.03)"}
              onMouseLeave={e => (e.target as HTMLElement).style.transform="scale(1)"}
            />
            {/* Overlaid quote */}
            <div style={{
              position:"absolute", bottom:20, left:20, right:20,
              background:"rgba(0,36,68,0.95)", backdropFilter:"blur(8px)",
              borderRadius:"var(--radius-md)", padding:"18px 22px",
              borderLeft:"4px solid var(--color-brand-gold)",
            }}>
              <div style={{ color: "var(--color-brand-gold)", marginBottom: 4 }}>
                <ChatTeardropText size={24} weight="fill" />
              </div>
              <p style={{ fontFamily:"var(--font-display)", fontStyle:"italic", fontSize:18, color:"var(--color-brand-gold)", lineHeight:1.4 }}>
                A rich, spicy, and unforgettable experience made just for you.
              </p>
              <p style={{ fontFamily:"var(--font-body)", fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:8 }}>— Venant Cutlery</p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="reveal-right">
            <p style={{ fontFamily:"var(--font-body)", fontSize:17, color:"rgba(0,36,68,0.75)", lineHeight:1.8, marginBottom:32 }}>
              Located in the heart of{" "}
              <strong style={{ color:"var(--color-primary)" }}>Ado Ekiti, Ekiti State</strong>,
              we specialize in our one-of-a-kind Signature Ofada Rice — slow-cooked, richly seasoned
              with Ayamase stew and accompanied by the finest insides of meat.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title}
                    className={`reveal delay-${(i+1)*100}`}
                    style={{
                      background: i%2===0 ? "var(--color-primary)" : "var(--color-bg-lime)",
                      borderRadius:"var(--radius-md)",
                      padding:"22px 18px",
                      transition:"transform 0.25s ease",
                      cursor:"default",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="none"; }}
                  >
                    <div style={{ fontSize:26, marginBottom:10, color: i%2===0 ? "var(--color-brand-gold)" : "var(--color-primary)" }}>
                      <Icon size={32} weight="fill" />
                    </div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:17, color: i%2===0?"#fff":"var(--color-primary)", marginBottom:6 }}>{f.title}</h3>
                    <p style={{ fontFamily:"var(--font-body)", fontSize:13, color: i%2===0?"rgba(255,255,255,0.7)":"rgba(0,36,68,0.7)", lineHeight:1.6 }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, lineHeight:0, zIndex:2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:80 }}>
          <path d="M0,0 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="var(--color-bg-dark)" />
        </svg>
      </div>

      <style>{`@media(max-width:768px){ .about-grid{grid-template-columns:1fr!important;gap:40px!important} }`}</style>
    </section>
  );
}
