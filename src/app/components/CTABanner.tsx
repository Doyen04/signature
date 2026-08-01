"use client";

import { useEffect, useRef } from "react";
import { CookingPot, WhatsappLogo, Phone } from "@phosphor-icons/react";

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
      className="bg-(--color-bg-lime) relative overflow-hidden"
      aria-label="Pre-order call to action"
    >
      <div
        className="container section text-center relative z-1"
      >
        <div
          className="reveal animate-float text-[64px] mb-4 inline-flex items-center justify-center w-24 h-24 rounded-full bg-(--color-primary) text-(--color-brand-gold)"
          role="img"
          aria-label="Cooking pot icon"
        >
          <CookingPot size={54} weight="fill" />
        </div>

        <h2
          className="reveal font-display font-black text-[clamp(48px,10vw,112px)] text-(--color-primary) leading-[0.95] uppercase tracking-[-0.02em] mb-5"
        >
          <span className="block">READY TO TASTE</span>
          <span className="block italic">
            THE DIFFERENCE?
          </span>
        </h2>

        <p
          className="reveal delay-100 font-body text-[18px] text-[rgba(0,36,68,0.75)] max-w-[520px] mx-auto mb-6 leading-[1.7]"
        >
          Plates sell out fast! Secure your Signature Ofada Rice plate in advance via WhatsApp.
        </p>

        {/* Price tag — flat */}
        <div
          className="reveal delay-200 mb-10 inline-block"
        >
          <span
            className="bg-(--color-primary) text-(--color-brand-gold) font-display font-black text-[32px] p-[10px_32px] rounded-[var(--radius-full)] inline-block"
          >
            Just ₦3,500
          </span>
        </div>

        <div
          className="reveal delay-300 flex gap-4 justify-center flex-wrap"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-preorder-btn"
            className="btn-whatsapp text-[18px] p-[18px_40px]"
          >
            <WhatsappLogo size={24} weight="fill" />
            Pre-Order on WhatsApp
          </a>
          <a
            href="tel:+2349131166934"
            className="btn-primary text-[18px] p-[18px_36px]"
          >
            <Phone size={22} weight="fill" />
            Call Us
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 leading-[0] z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-dark)" />
        </svg>
      </div>
    </section>
  );
}
