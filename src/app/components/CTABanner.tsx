"use client";

import { useEffect, useRef } from "react";
import { CookingPot, WhatsappLogo, PhoneCall } from "@phosphor-icons/react";

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
          style={{
            fontSize: 64,
            marginBottom: 16,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "var(--color-primary)",
            color: "var(--color-brand-gold)",
          }}
          role="img"
          aria-label="Cooking pot icon"
        >
          <CookingPot size={54} weight="fill" />
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

        {/* Price tag — flat */}
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
            className="btn-whatsapp"
            style={{ fontSize: 18, padding: "18px 40px" }}
          >
            <WhatsappLogo size={24} weight="fill" />
            Pre-Order on WhatsApp
          </a>
          <a
            href="tel:+2349131166934"
            className="btn-primary"
            style={{ fontSize: 18, padding: "18px 36px" }}
          >
            <PhoneCall size={22} weight="fill" />
            Call Us
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-dark)" />
        </svg>
      </div>
    </section>
  );
}
