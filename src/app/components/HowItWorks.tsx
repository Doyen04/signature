"use client";

import { useEffect, useRef } from "react";
import { ListChecks, ChatCircleText, ForkKnife, CookingPot, MapPin, WhatsappLogo } from "@phosphor-icons/react";

const steps = [
  { number:"01", icon: ListChecks,     title:"Browse & Choose",           desc:"Check our Signature Ofada Rice and pick your add-ons — Plantain, Egg, Fish, or Ponmo.",      bg:"var(--color-primary)",      text:"#fff",                         accent:"rgba(255,255,255,0.15)" },
  { number:"02", icon: ChatCircleText, title:"Pre-Order via WhatsApp",    desc:"Tap Pre-Order, message us on WhatsApp with your quantity and chosen add-ons. Done in 1 min.", bg:"var(--color-accent-pink)",  text:"#fff",                         accent:"rgba(255,255,255,0.2)"  },
  { number:"03", icon: ForkKnife,      title:"Pick Up & Enjoy",          desc:"Come to Ado Ekiti at the agreed time, collect your hot plate and savour every bite!",         bg:"var(--color-brand-gold)",   text:"var(--color-primary)",         accent:"rgba(0,36,68,0.12)"     },
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
    <section id="how-it-works" ref={ref} className="bg-(--color-bg-lime) relative overflow-hidden" aria-label="How pre-ordering works">

      <div className="container section relative z-1">

        {/* Header */}
        <div className="reveal text-center mb-18">
          <p className="font-body text-sm font-bold tracking-[0.15em] uppercase text-[rgba(0,36,68,0.55)] mb-3">Simple Process</p>
          <h2 className="font-display font-black text-[clamp(48px,9vw,104px)] text-(--color-primary) leading-[0.95] uppercase tracking-[-0.02em]">
            <span className="block">HOW TO</span>
            <span className="block italic">Pre-Order</span>
          </h2>
          <p className="font-body text-[17px] text-[rgba(0,36,68,0.7)] max-w-[480px] mx-auto mt-5 leading-[1.7]">
            Securing your plate is easy and takes less than a minute.
          </p>
        </div>

        {/* Step cards — flat, no shadow */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number}
                className={`reveal delay-${(i+1)*100} rounded-[var(--radius-lg)] py-9 px-7 relative overflow-hidden transition-transform duration-250 cursor-default hover:-translate-y-2!`}
                style={{ background: step.bg }}
              >
                {/* Ghost step number */}
                <div className="absolute top-3 right-4 font-display font-black text-[72px] leading-[1] opacity-10 select-none" style={{ color: step.text }}>
                  {step.number}
                </div>
                {/* Icon circle */}
                <div className="w-15 h-15 rounded-full flex items-center justify-center mb-5" style={{ background: step.accent, color: step.text }}>
                  <Icon size={30} weight="fill" />
                </div>
                <h3 className="font-display font-bold text-[22px] mb-3 leading-[1.2]" style={{ color: step.text }}>{step.title}</h3>
                <p className="font-body text-[15px] leading-[1.7]" style={{ color: i===0?"rgba(255,255,255,0.7)": i===1?"rgba(255,255,255,0.8)":"rgba(0,36,68,0.7)" }}>{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Location note */}
        <div className="reveal text-center mt-12 py-5 px-6 bg-[rgba(0,36,68,0.08)] rounded-[var(--radius-md)] border border-dashed border-[rgba(0,36,68,0.2)] inline-block w-full">
          <p className="font-body text-[15px] text-[rgba(0,36,68,0.7)] inline-flex items-center gap-2 flex-wrap justify-center">
            <MapPin size={18} weight="fill" className="text-(--color-primary)" /> <strong className="text-(--color-primary)">Ado Ekiti, Ekiti State</strong> &nbsp;·&nbsp;
            <WhatsappLogo size={18} weight="fill" className="text-[#25D366]" />{" "}
            <a href="https://wa.me/2349131166934" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold">+234 913 116 6934</a>
          </p>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px left-0 right-0 leading-[0] z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,20 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="var(--color-primary)" />
        </svg>
      </div>
    </section>
  );
}
