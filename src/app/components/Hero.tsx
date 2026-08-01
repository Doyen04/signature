"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WhatsappLogo, ArrowRight, Grains, Egg, Fish, Package } from "@phosphor-icons/react";

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
      className="bg-(--color-primary) min-h-[calc(100vh-76px)] flex items-center relative overflow-hidden pt-10 pb-30"
      aria-label="Hero — Signature Ofada Rice"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[32px_32px]" />

      {/* Spinning dashed ring */}
      <div className="animate-spin-slow absolute top-10 right-10 w-30 h-30 rounded-full border-[3px] border-dashed border-white/12 pointer-events-none z-0" />
      <div className="animate-spin-slow [animation-direction:reverse] absolute bottom-30 left-10 w-20 h-20 rounded-full border-2 border-dashed border-[rgba(247,216,0,0.2)] pointer-events-none z-0" />

      <div className="container relative z-1">
        <div className="hero-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            {/* Headline */}
            <h1 className="hero-anim font-display font-black text-[clamp(48px,7.5vw,96px)] leading-[0.95] tracking-[-0.02em] text-white uppercase mb-4">
              <span className="block">SIGNATURE</span>
              <span className="block text-(--color-brand-gold) italic text-[clamp(54px,8.5vw,108px)]">
                Ofada
              </span>
              <span className="block">RICE</span>
            </h1>

            {/* Subtext */}
            <p className="hero-anim font-body text-[clamp(15px,1.6vw,19px)] text-white/70 max-w-125 mb-5 leading-[1.6]">
              With Insides of Meat. A rich, spicy, and unforgettable experience made{" "}
              <strong className="text-white">just for you</strong>.
              Good food. Great taste.{" "}
              <em className="text-(--color-brand-gold)">Worth the wait!</em>
            </p>

            {/* Price text */}
            <div className="hero-anim mb-6">
              <span className="font-display font-black text-[clamp(32px,4.5vw,52px)] text-(--color-brand-gold)">
                ₦3,500
              </span>
              <span className="font-body text-sm text-white/50 ml-3 uppercase tracking-widest">
                · Pre-Order Only
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-anim flex gap-4 flex-wrap">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-preorder-btn"
                className="btn-whatsapp text-[17px] px-10 py-4.5"
              >
                <WhatsappLogo size={24} weight="fill" />
                Pre-Order on WhatsApp
              </a>
              <a href="#menu" className="btn-dark text-[17px] px-9 py-4.5">
                View Menu <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image & Add-ons */}
          <div className="hero-anim flex flex-col items-center gap-5">
            <div className="animate-float">
              <Image
                src="/ofada-hero.png"
                alt="Venant Cutlery Signature Ofada Rice served on a black plate"
                width={440}
                height={440}
                priority
                className="rounded-full border-4 border-white/15 object-cover w-[clamp(220px,26vw,380px)] h-[clamp(220px,26vw,380px)]"
              />
            </div>

            {/* Add-ons row */}
            <div className="flex gap-3 flex-wrap items-center justify-center">
              <span className="font-body text-[13px] text-white/40">Add-ons:</span>
              {[
                { label: "Plantain", icon: Grains },
                { label: "Egg", icon: Egg },
                { label: "Fish", icon: Fish },
                { label: "Ponmo", icon: Package },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label} className="text-white/85 font-body text-[13px] font-semibold inline-flex items-center gap-1.5">
                    <Icon size={16} weight="fill" color="var(--color-brand-gold)" /> {item.label}
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute -bottom-px left-0 right-0 leading-0 z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0ece3" />
        </svg>
      </div>
    </section>
  );
}
