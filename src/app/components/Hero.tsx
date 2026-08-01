"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice.%20%F0%9F%8D%9A";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".hero-animate");
    items.forEach((item, i) => {
      (item as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      (item as HTMLElement).style.animationFillMode = "both";
      (item as HTMLElement).style.animation = `fadeInUp 0.7s ease both`;
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        background: "linear-gradient(135deg, #F4A700 0%, #E8850A 60%, #CC6600 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Hero section"
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Spinning ring decoration */}
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "3px dashed rgba(255,255,255,0.25)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ padding: "80px 40px", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="hero-animate" style={{ marginBottom: 20 }}>
              <span
                className="badge badge-navy"
                style={{ fontSize: 12, letterSpacing: "0.12em" }}
              >
                🍽️ Introducing Our Signature
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-animate"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "var(--color-primary)",
                lineHeight: 1.05,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(52px, 8vw, 88px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                OFADA
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(48px, 7.5vw, 82px)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.15)",
                }}
              >
                Rice
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-animate"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--color-primary)",
                background: "rgba(0,36,68,0.1)",
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              With Insides of Meat
            </p>

            {/* Description */}
            <p
              className="hero-animate"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                color: "rgba(0,36,68,0.85)",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 440,
              }}
            >
              A rich, spicy, and unforgettable experience made{" "}
              <strong>just for you</strong>. Good food. Great taste.{" "}
              <em>Worth the wait!</em>
            </p>

            {/* Price */}
            <div
              className="hero-animate"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Just
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 36,
                    lineHeight: 1,
                    color: "var(--color-accent-yellow)",
                  }}
                >
                  ₦3,500
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "rgba(0,36,68,0.75)",
                    fontWeight: 500,
                  }}
                >
                  🏷️ Pre-Order Only
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "rgba(0,36,68,0.6)",
                  }}
                >
                  Secure your plate in advance
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="hero-animate"
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp animate-pulse-glow"
                id="hero-preorder-btn"
                style={{ fontSize: 16, padding: "16px 32px" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pre-Order on WhatsApp
              </a>
              <a
                href="#menu"
                className="btn-primary"
                style={{
                  background: "rgba(0,36,68,0.85)",
                  backdropFilter: "blur(4px)",
                  fontSize: 16,
                  padding: "16px 28px",
                }}
              >
                View Full Menu →
              </a>
            </div>

            {/* Add-on chips */}
            <div
              className="hero-animate"
              style={{ marginTop: 28, display: "flex", gap: 8, flexWrap: "wrap" }}
            >
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(0,36,68,0.7)", alignSelf: "center" }}>Add-ons:</span>
              {["Plantain", "Egg", "Fish", "Ponmo"].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    backdropFilter: "blur(4px)",
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "5px 12px",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid rgba(0,36,68,0.2)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="hero-animate animate-float"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 520,
              }}
            >
              {/* Glow ring behind image */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <Image
                src="/ofada-hero.png"
                alt="Venant Cutlery Signature Ofada Rice with insides of meat, served on a black plate"
                width={520}
                height={520}
                priority
                style={{
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1)";
                }}
              />

              {/* Floating tag */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  background: "var(--color-primary)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  textAlign: "center",
                  zIndex: 3,
                }}
              >
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.1em" }}>Just</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 900, color: "var(--color-accent-yellow)", lineHeight: 1 }}>₦3,500</div>
              </div>

              {/* Pre-order badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--color-accent-yellow)",
                  color: "var(--color-primary)",
                  borderRadius: "var(--radius-full)",
                  padding: "8px 20px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                🍽️ Pre-Order Only
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "var(--color-background)",
          clipPath: "ellipse(60% 100% at 50% 100%)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
