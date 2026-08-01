"use client";

import { useEffect, useRef } from "react";
import { MapPin, User } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Adaeze O.",
    location: "Ado Ekiti",
    rating: 5,
    text: "This is the best Ofada Rice I've had in Ekiti! The stew is rich, spicy and packed with assorted meat. Pre-ordering was super easy via WhatsApp.",
  },
  {
    name: "Tunde B.",
    location: "Ado Ekiti",
    rating: 5,
    text: "Venant Cutlery doesn't play with flavour. The Ponmo was soft and the Ayamase stew was on another level. Worth every naira. Worth the wait indeed!",
  },
  {
    name: "Funmi A.",
    location: "Ekiti State",
    rating: 5,
    text: "I added Egg and Fish as add-ons and wow — the combination was heavenly. Clean presentation, hot food, and amazing taste. Will definitely be pre-ordering weekly!",
  },
  {
    name: "Chidi M.",
    location: "Ado Ekiti",
    rating: 5,
    text: "The plantain was perfectly fried and the rice had that authentic ofada aroma. This is home cooking at its finest. Highly recommend!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            color: "var(--color-brand-gold)",
            fontSize: 16,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "var(--color-primary)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Customer testimonials"
    >
      <div className="container section" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(48px, 9vw, 104px)",
              color: "#fff",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block" }}>PEOPLE</span>
            <span style={{ display: "block", color: "var(--color-brand-gold)", fontStyle: "italic" }}>
              Love
            </span>
            <span style={{ display: "block" }}>OUR FOOD</span>
          </h2>
        </div>

        {/* Grid — flat, no shadow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                transition: "transform 0.25s ease, background 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(244,167,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-brand-gold)",
                    flexShrink: 0,
                    border: "2px solid rgba(244,167,0,0.3)",
                  }}
                >
                  <User size={24} weight="fill" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <MapPin size={14} weight="fill" /> {t.location}
                  </p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <StarRating count={t.rating} />
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,0 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-lime)" />
        </svg>
      </div>

      <style>{`@media(max-width:768px){ .testimonials-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}
