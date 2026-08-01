"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trophy, Grains, Egg, Fish, Package, WhatsappLogo } from "@phosphor-icons/react";

const WA_LINK_BASE = "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice";

const addOns = [
  { id:"plantain", label:"Plantain", icon: Grains,  price:300 },
  { id:"egg",      label:"Egg",      icon: Egg,     price:300 },
  { id:"fish",     label:"Fish",     icon: Fish,    price:500 },
  { id:"ponmo",    label:"Ponmo",    icon: Package, price:400 },
];

export default function MenuSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>el.classList.add("revealed")); });
    }, { threshold:0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const toggle = (id:string) => setSelected(p => p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const total  = 2000 + addOns.filter(a=>selected.includes(a.id)).reduce((s,a)=>s+a.price,0);
  const waLink = () => {
    const labels = addOns.filter(a=>selected.includes(a.id)).map(a=>a.label);
    let m = WA_LINK_BASE;
    if (labels.length) m+=`%20with%20add-ons%3A%20${encodeURIComponent(labels.join(", "))}`;
    m+=`.%20Total%3A%20%E2%82%A6${total.toLocaleString()}.%20%F0%9F%8D%9A`;
    return m;
  };

  return (
    <section id="menu" ref={ref} className="bg-(--color-bg-dark) relative overflow-hidden" aria-label="Menu">

      <div className="container section relative z-1">

        {/* Header */}
        <div className="reveal text-center mb-18">
          <h2 className="font-display font-black text-[clamp(48px,9vw,104px)] text-white leading-[0.95] uppercase tracking-[-0.02em]">
            <span className="block">THE ONE &</span>
            <span className="block text-(--color-brand-gold) italic">Only Dish</span>
            <span className="block">YOU NEED</span>
          </h2>
        </div>

        {/* Menu card */}
        <div className="menu-grid grid grid-cols-1 md:grid-cols-2 gap-[2px] rounded-[var(--radius-lg)] overflow-hidden">

          {/* Image panel */}
          <div className="reveal-left relative min-h-[500px]">
            <Image
              src="/ofada-hero.png"
              alt="Venant Cutlery Signature Ofada Rice"
              width={600} height={600}
              className="w-full h-full object-cover block min-h-[500px]"
            />
            {/* Label overlay */}
            <div className="absolute top-5 left-5 bg-[rgba(0,36,68,0.95)] backdrop-blur-[6px] rounded-[var(--radius-sm)] p-[8px_16px] text-white font-body text-[13px] font-semibold inline-flex items-center gap-[6px]">
              <Trophy size={16} weight="fill" color="var(--color-brand-gold)" /> House Special
            </div>
          </div>

          {/* Detail panel */}
          <div className="reveal-right bg-[rgba(255,255,255,0.04)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.07)] p-[40px_36px]">
            <span className="badge badge-amber mb-4 text-[11px]">Pre-Order Only</span>

            <h3 className="font-display font-black text-[clamp(28px,3vw,40px)] text-white leading-[1.1] mb-2 uppercase">
              Signature<br /><span className="text-(--color-brand-gold) italic">Ofada Rice</span>
            </h3>
            <p className="font-body text-[12px] text-white/40 font-bold tracking-[0.1em] uppercase mb-4">
              With Insides of Meat
            </p>
            <p className="font-body text-[15px] text-white/65 leading-[1.8] mb-7">
              Our Signature Ofada Rice is served with a thick, slow-cooked Ayamase stew loaded with assorted meat insides. Bold, rich, and absolutely unforgettable.
            </p>

            {/* Price */}
            <div className="mb-7">
              {/* Current total */}
              <div className="flex items-baseline gap-[10px] mb-3">
                <span className="font-display font-black text-[44px] text-(--color-brand-gold)">₦{total.toLocaleString()}</span>
                <span className="font-body text-[13px] text-white/40">
                  {selected.length === 0 ? "base price" : `(${selected.length} add-on${selected.length > 1 ? "s" : ""})`}
                </span>
              </div>
              {/* Price range indicator */}
              <div className="flex items-center justify-between bg-white/5 rounded-[var(--radius-full)] p-[10px_16px] border border-white/8">
                <div className="text-center">
                  <div className="font-display font-black text-[18px] text-(--color-accent-lime)">₦2,000</div>
                  <div className="font-body text-[10px] text-white/40 uppercase tracking-[0.08em] mt-[2px]">Base</div>
                </div>
                <div className="flex-1 mx-3 h-[2px] bg-white/10 rounded-[2px] relative">
                  <div className="absolute left-0 top-0 h-full rounded-[2px] bg-[linear-gradient(90deg,var(--color-accent-lime),var(--color-brand-gold))] transition-[width] duration-300"
                    style={{ width: `${((total - 2000) / 1500) * 100}%` }}
                  />
                </div>
                <div className="text-center">
                  <div className="font-display font-black text-[18px] text-(--color-brand-gold)">₦3,500</div>
                  <div className="font-body text-[10px] text-white/40 uppercase tracking-[0.08em] mt-[2px]">Full Setup</div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-7">
              <p className="font-body text-[11px] font-bold tracking-[0.12em] uppercase text-white/40 mb-3 pb-2 border-b border-white/8">
                Add-On Options
              </p>
              <div className="flex gap-2 flex-wrap">
                {addOns.map(addon => {
                  const active = selected.includes(addon.id);
                  const Icon = addon.icon;
                  return (
                    <button key={addon.id} id={`addon-${addon.id}`} onClick={()=>toggle(addon.id)} aria-pressed={active}
                      className={`flex items-center gap-[6px] p-[8px_16px] rounded-[var(--radius-full)] font-body text-[13px] font-bold cursor-pointer transition-all duration-200 ${active ? "bg-(--color-accent-lime) text-(--color-primary) border-2 border-(--color-accent-lime) scale-105" : "bg-transparent text-white/70 border-2 border-white/15 scale-100"}`}
                    >
                      <Icon size={16} weight="fill" />
                      <span>{addon.label}</span>
                      <span className="text-[11px] opacity-70">+₦{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" id="menu-preorder-btn" className="btn-whatsapp w-full justify-center text-[16px] p-[16px]">
              <WhatsappLogo size={22} weight="fill" />
              Pre-Order Now — ₦{total.toLocaleString()}
            </a>
            <p className="font-body text-[12px] text-white/30 text-center mt-[10px]">
              Secure your plate in advance · Ado Ekiti, Ekiti State
            </p>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px left-0 right-0 leading-[0] z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,60 C360,0 1080,80 1440,20 L1440,80 L0,80 Z" fill="var(--color-bg-lime)" />
        </svg>
      </div>
    </section>
  );
}
