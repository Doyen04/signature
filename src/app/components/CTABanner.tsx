"use client";

import { useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice.%20%F0%9F%8D%9A";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="preorder"
      ref={ref}
      style={{
        background: "var(--color-bg-lime)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Pre-order call to action"
    >
      <div
        className="container section"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="reveal animate-float"
          style={{ fontSize: 72, marginBottom: 16, display: "inline-block" }}
          role="img"
          aria-label="Plate of food"
        >
          🍽️
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(48px, 10vw, 112px)",
            color: "var(--color-primary)",
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          <span style={{ display: "block" }}>READY TO TASTE</span>
          <span style={{ display: "block", fontStyle: "italic" }}>
            THE DIFFERENCE?
          </span>
        </h2>

        <p
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(0,36,68,0.75)",
            maxWidth: 520,
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Plates sell out fast! Secure your Signature Ofada Rice plate in advance via WhatsApp.
        </p>

        <div
          className="reveal delay-200"
          style={{ marginBottom: 40, display: "inline-block" }}
        >
          <span
            style={{
              background: "var(--color-primary)",
              color: "var(--color-brand-gold)",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 32,
              padding: "10px 32px",
              borderRadius: "var(--radius-full)",
              display: "inline-block",
              boxShadow: "0 8px 24px rgba(0,36,68,0.25)",
            }}
          >
            Just ₦3,500
          </span>
        </div>

        <div
          className="reveal delay-300"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-preorder-btn"
            className="btn-whatsapp animate-pulse-glow"
            style={{ fontSize: 18, padding: "18px 40px" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pre-Order on WhatsApp
          </a>
          <a
            href="tel:+2349131166934"
            className="btn-primary"
            style={{ fontSize: 18, padding: "18px 36px" }}
          >
            📞 Call Us
          </a>
        </div>
      </div>

      {/* Wave bottom divider — dark footer follows */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-dark)" />
        </svg>
      </div>
    </section>
  );
}
