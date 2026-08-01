"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🔥",
    title: "Rich & Spicy",
    desc: "Authentic Ayamase stew brewed with the finest peppers and seasoning.",
  },
  {
    icon: "🌾",
    title: "100% Ofada",
    desc: "Genuine local ofada rice, stone-milled and naturally fragrant.",
  },
  {
    icon: "❤️",
    title: "Made With Love",
    desc: "Every plate is handcrafted with passion, patience and precision.",
  },
  {
    icon: "⏰",
    title: "Worth The Wait",
    desc: "Pre-order guarantees your spot. Great food takes time — it's worth it.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      style={{ background: "var(--color-background)" }}
      aria-label="About Venant Cutlery"
    >
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge badge-lime" style={{ marginBottom: 12 }}>Our Story</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "var(--color-primary)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            We Cook From the{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-brand-amber)" }}>
              Heart
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "var(--color-text-muted)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Venant Cutlery was born from a simple belief — that Nigerian food
            deserves to be celebrated, elevated, and served with pride in Ado
            Ekiti and beyond.
          </p>
        </div>

        {/* Main content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image */}
          <div
            className="reveal-left"
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/venant-about.png"
              alt="Venant Cutlery chef preparing Signature Ofada Rice with care and passion"
              width={580}
              height={520}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
                display: "block",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1)";
              }}
            />
            {/* Quote overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                background: "rgba(0,36,68,0.88)",
                backdropFilter: "blur(8px)",
                borderRadius: "var(--radius-md)",
                padding: "16px 20px",
                color: "#fff",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 18,
                  lineHeight: 1.4,
                  color: "var(--color-accent-yellow)",
                }}
              >
                &quot;Good Food. Great Taste. Worth the Wait!&quot;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  marginTop: 6,
                }}
              >
                — Venant Cutlery motto
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="reveal-right">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              Located in the heart of{" "}
              <strong style={{ color: "var(--color-primary)" }}>
                Ado Ekiti, Ekiti State
              </strong>
              , we specialize in our one-of-a-kind Signature Ofada Rice —
              slow-cooked, richly seasoned with Ayamase stew and accompanied by
              the finest insides of meat. Every grain tells a story of
              authenticity.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal delay-${(i + 1) * 100}`}
                  style={{
                    background: i % 2 === 0 ? "var(--color-background-light)" : "var(--color-primary)",
                    borderRadius: "var(--radius-md)",
                    padding: "20px",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: i % 2 === 0 ? "var(--color-primary)" : "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: i % 2 === 0 ? "var(--color-text-muted)" : "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
