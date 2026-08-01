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
    <section id="about" ref={ref} className="bg-(--color-bg-cream) relative overflow-hidden" aria-label="About Venant Cutlery">

      {/* Floating decorative dashes */}
      <div className="absolute top-15 left-10 w-1 h-15 bg-(--color-accent-pink) rounded-[2px] -rotate-20 opacity-70" />
      <div className="absolute top-20 left-15 w-1 h-10 bg-(--color-accent-pink) rounded-[2px] -rotate-20 opacity-50" />
      <div className="absolute top-25 right-15 w-1 h-15 bg-(--color-accent-pink) rounded-[2px] rotate-20 opacity-70" />
      <div className="absolute top-15 right-10 w-1 h-10 bg-(--color-accent-pink) rounded-[2px] rotate-20 opacity-50" />
      <div className="absolute top-[40%] left-[30px] w-4 h-4 rounded-full bg-(--color-accent-yellow) opacity-80" />
      <div className="absolute top-[60%] right-[30px] w-5 h-5 rounded-full bg-(--color-accent-yellow) opacity-60" />

      <div className="container section relative z-1">

        {/* Header */}
        <div className="reveal text-center mb-18">
          <p className="font-body text-[14px] font-bold tracking-[0.15em] uppercase text-(--color-primary) mb-4 opacity-60">
            Our Story
          </p>
          <h2 className="font-display font-black text-[clamp(48px,9vw,100px)] text-(--color-primary) leading-[0.95] uppercase tracking-[-0.02em]">
            <span className="block">GOOD FOOD.</span>
            <span className="block italic text-(--color-brand-amber)">GREAT TASTE.</span>
            <span className="block">WORTH THE</span>
            <span className="block">
              WAIT
              <span className="inline-flex items-center justify-center bg-(--color-accent-pink) text-white rounded-full w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] text-[clamp(28px,4vw,48px)] not-italic ml-4 align-middle">
                !
              </span>
            </span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-14 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <Image
              src="/venant-about.png"
              alt="Venant Cutlery chef preparing Signature Ofada Rice"
              width={560} height={520}
              className="w-full h-auto object-cover rounded-[var(--radius-lg)] block transition-transform duration-400 hover:scale-[1.03]"
            />
            {/* Overlaid quote */}
            <div className="absolute bottom-5 left-5 right-5 bg-[rgba(0,36,68,0.95)] backdrop-blur-[8px] rounded-[var(--radius-md)] p-[18px_22px] border-l-4 border-(--color-brand-gold)">
              <div className="text-(--color-brand-gold) mb-1">
                <ChatTeardropText size={24} weight="fill" />
              </div>
              <p className="font-display italic text-[18px] text-(--color-brand-gold) leading-[1.4]">
                A rich, spicy, and unforgettable experience made just for you.
              </p>
              <p className="font-body text-[12px] text-white/50 mt-2">— Venant Cutlery</p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="reveal-right">
            <p className="font-body text-[17px] text-[rgba(0,36,68,0.75)] leading-[1.8] mb-8">
              Located in the heart of{" "}
              <strong className="text-(--color-primary)">Ado Ekiti, Ekiti State</strong>,
              we specialize in our one-of-a-kind Signature Ofada Rice — slow-cooked, richly seasoned
              with Ayamase stew and accompanied by the finest insides of meat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                const even = i % 2 === 0;
                return (
                  <div key={f.title}
                    className={`reveal delay-${(i+1)*100} rounded-[var(--radius-md)] p-[22px_18px] transition-transform duration-250 cursor-default hover:-translate-y-1.5! ${even ? "bg-(--color-primary)" : "bg-(--color-bg-lime)"}`}
                  >
                    <div className={`mb-[10px] ${even ? "text-(--color-brand-gold)" : "text-(--color-primary)"}`}>
                      <Icon size={32} weight="fill" />
                    </div>
                    <h3 className={`font-display font-bold text-[17px] mb-[6px] ${even ? "text-white" : "text-(--color-primary)"}`}>{f.title}</h3>
                    <p className={`font-body text-[13px] leading-[1.6] ${even ? "text-white/70" : "text-[rgba(0,36,68,0.7)]"}`}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 leading-[0] z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,0 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="var(--color-bg-dark)" />
        </svg>
      </div>
    </section>
  );
}
